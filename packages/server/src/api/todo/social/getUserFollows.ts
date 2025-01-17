import { Server } from '../../../lexicon'
import { InvalidRequestError } from '@adxp/xrpc-server'
import * as GetUserFollows from '../../../lexicon/types/todo/social/getUserFollows'
import { AdxRecord } from '../../../db/record'
import { FollowIndex } from '../../../db/records/follow'
import { ProfileIndex } from '../../../db/records/profile'
import { User } from '../../../db/user'
import * as util from './util'
import { getLocals } from '../../../util'

export default function (server: Server) {
  server.todo.social.getUserFollows(
    async (params: GetUserFollows.QueryParams, _input, _req, res) => {
      const { user, limit, before } = params
      const { db } = getLocals(res)

      const creator = await util.getUserInfo(db.db, user).catch((e) => {
        throw new InvalidRequestError(`User not found: ${user}`)
      })

      const followsReq = db.db
        .createQueryBuilder()
        .select([
          'subject.did AS did',
          'subject.username AS name',
          'profile.displayName AS displayName',
          'follow.createdAt AS createdAt',
          'record.indexedAt AS indexedAt',
        ])
        .from(FollowIndex, 'follow')
        .innerJoin(AdxRecord, 'record', 'follow.uri = record.uri')
        .innerJoin(User, 'subject', 'follow.subject = subject.did')
        .leftJoin(ProfileIndex, 'profile', 'profile.creator = follow.subject')
        .where('follow.creator = :creator', { creator: creator.did })
        .orderBy('follow.createdAt')

      if (before !== undefined) {
        followsReq.andWhere('follow.createdAt < :before', { before })
      }
      if (limit !== undefined) {
        followsReq.limit(limit)
      }

      const followsRes = await followsReq.getRawMany()
      const follows = followsRes.map((row) => ({
        did: row.did,
        name: row.name,
        displayName: row.displayName || undefined,
        createdAt: row.createdAt,
        indexedAt: row.indexedAt,
      }))

      return {
        encoding: 'application/json',
        body: {
          subject: creator,
          follows,
        },
      }
    },
  )
}
