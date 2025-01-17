import { AdxUri } from '@adxp/uri'
import * as Badge from '../../lexicon/types/todo/social/badge'
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

const type = 'todo.social.badge'
const tableName = collectionToTableName(type)

@Entity({ name: tableName })
export class BadgeIndex {
  @PrimaryColumn('varchar')
  uri: string

  @Column('varchar')
  @ManyToOne(() => User, (user) => user.did)
  creator: string

  @Column('varchar')
  subject: string

  @Column('varchar')
  assertionType: string

  @Column({ type: 'varchar', nullable: true })
  assertionTag?: string

  @Column('datetime')
  createdAt: string

  @Column('varchar')
  indexedAt: string
}

const getFn =
  (repo: Repository<BadgeIndex>) =>
  async (uri: AdxUri): Promise<Badge.Record | null> => {
    const found = await repo.findOneBy({ uri: uri.toString() })
    return found === null ? null : translateDbObj(found)
  }

const validator = schemas.createRecordValidator(type)
const isValidSchema = (obj: unknown): obj is Badge.Record => {
  return validator.isValid(obj)
}
const validateSchema = (obj: unknown) => validator.validate(obj)

const setFn =
  (repo: Repository<BadgeIndex>) =>
  async (uri: AdxUri, obj: unknown): Promise<void> => {
    if (!isValidSchema(obj)) {
      throw new Error(`Record does not match schema: ${type}`)
    }
    const badge = new BadgeIndex()
    badge.uri = uri.toString()
    badge.creator = uri.host
    badge.subject = obj.subject
    badge.assertionType = obj.assertion.type
    badge.assertionTag = (obj.assertion as Badge.TagAssertion).tag
    badge.createdAt = obj.createdAt
    badge.indexedAt = new Date().toISOString()
    await repo.save(badge)
  }

const deleteFn =
  (repo: Repository<BadgeIndex>) =>
  async (uri: AdxUri): Promise<void> => {
    await repo.delete({ uri: uri.toString() })
  }

const translateDbObj = (dbObj: BadgeIndex): Badge.Record => {
  const badge = {
    assertion: {
      type: dbObj.assertionType,
      tag: dbObj.assertionTag,
    },
    subject: dbObj.subject,
    createdAt: dbObj.createdAt,
  }
  if (badge.assertion.type === 'tag') {
    badge.assertion.tag = dbObj.assertionTag
  }
  return badge
}

const notifsForRecord = (uri: AdxUri, obj: unknown): Notification[] => {
  if (!isValidSchema(obj)) {
    throw new Error(`Record does not match schema: ${type}`)
  }
  const notif = {
    userDid: obj.subject,
    author: uri.host,
    recordUri: uri.toString(),
    reason: 'badge',
  }
  return [notif]
}

export const makePlugin = (
  db: DataSource,
): DbRecordPlugin<Badge.Record, BadgeIndex> => {
  const repository = db.getRepository(BadgeIndex)
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
