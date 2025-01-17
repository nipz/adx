import { AdxUri } from '@adxp/uri'
import * as Follow from '../../lexicon/types/todo/social/follow'
import {
  DataSource,
  Entity,
  Column,
  PrimaryColumn,
  Repository,
  ManyToOne,
} from 'typeorm'
import { DbRecordPlugin, Notification } from '../types'
import { User } from '../user'
import schemas from '../schemas'
import { collectionToTableName } from '../util'

const type = 'todo.social.follow'
const tableName = collectionToTableName(type)

@Entity({ name: tableName })
export class FollowIndex {
  @PrimaryColumn('varchar')
  uri: string

  @Column('varchar')
  @ManyToOne(() => User, (user) => user.did)
  creator: string

  @Column('varchar')
  subject: string

  @Column('datetime')
  createdAt: string

  @Column('varchar')
  indexedAt: string
}

const getFn =
  (repo: Repository<FollowIndex>) =>
  async (uri: AdxUri): Promise<Follow.Record | null> => {
    const found = await repo.findOneBy({ uri: uri.toString() })
    return found === null ? null : translateDbObj(found)
  }

const validator = schemas.createRecordValidator(type)
const isValidSchema = (obj: unknown): obj is Follow.Record => {
  return validator.isValid(obj)
}
const validateSchema = (obj: unknown) => validator.validate(obj)

const setFn =
  (repo: Repository<FollowIndex>) =>
  async (uri: AdxUri, obj: unknown): Promise<void> => {
    if (!isValidSchema(obj)) {
      throw new Error(`Record does not match schema: ${type}`)
    }
    const follow = new FollowIndex()
    follow.uri = uri.toString()
    follow.creator = uri.host
    follow.subject = obj.subject
    follow.createdAt = obj.createdAt
    follow.indexedAt = new Date().toISOString()
    await repo.save(follow)
  }

const deleteFn =
  (repo: Repository<FollowIndex>) =>
  async (uri: AdxUri): Promise<void> => {
    await repo.delete({ uri: uri.toString() })
  }

const translateDbObj = (dbObj: FollowIndex): Follow.Record => {
  return {
    subject: dbObj.subject,
    createdAt: dbObj.createdAt,
  }
}

const notifsForRecord = (uri: AdxUri, obj: unknown): Notification[] => {
  if (!isValidSchema(obj)) {
    throw new Error(`Record does not match schema: ${type}`)
  }
  const notif = {
    userDid: obj.subject,
    author: uri.host,
    recordUri: uri.toString(),
    reason: 'follow',
  }
  return [notif]
}

export const makePlugin = (
  db: DataSource,
): DbRecordPlugin<Follow.Record, FollowIndex> => {
  const repository = db.getRepository(FollowIndex)
  return {
    collection: type,
    tableName,
    get: getFn(repository),
    validateSchema,
    set: setFn(repository),
    delete: deleteFn(repository),
    translateDbObj,
    notifsForRecord,
  }
}

export default makePlugin
