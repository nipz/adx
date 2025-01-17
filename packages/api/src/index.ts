/**
* GENERATED CODE - DO NOT MODIFY
*/
import {
  Client as XrpcClient,
  ServiceClient as XrpcServiceClient,
} from '@adxp/xrpc'
import { methodSchemas, recordSchemas } from './schemas'
import * as TodoAdxCreateAccount from './types/todo/adx/createAccount'
import * as TodoAdxCreateSession from './types/todo/adx/createSession'
import * as TodoAdxDeleteAccount from './types/todo/adx/deleteAccount'
import * as TodoAdxDeleteSession from './types/todo/adx/deleteSession'
import * as TodoAdxGetAccount from './types/todo/adx/getAccount'
import * as TodoAdxGetAccountsConfig from './types/todo/adx/getAccountsConfig'
import * as TodoAdxGetSession from './types/todo/adx/getSession'
import * as TodoAdxRepoBatchWrite from './types/todo/adx/repoBatchWrite'
import * as TodoAdxRepoCreateRecord from './types/todo/adx/repoCreateRecord'
import * as TodoAdxRepoDeleteRecord from './types/todo/adx/repoDeleteRecord'
import * as TodoAdxRepoDescribe from './types/todo/adx/repoDescribe'
import * as TodoAdxRepoGetRecord from './types/todo/adx/repoGetRecord'
import * as TodoAdxRepoListRecords from './types/todo/adx/repoListRecords'
import * as TodoAdxRepoPutRecord from './types/todo/adx/repoPutRecord'
import * as TodoAdxResolveName from './types/todo/adx/resolveName'
import * as TodoAdxSyncGetRepo from './types/todo/adx/syncGetRepo'
import * as TodoAdxSyncGetRoot from './types/todo/adx/syncGetRoot'
import * as TodoAdxSyncUpdateRepo from './types/todo/adx/syncUpdateRepo'
import * as TodoSocialBadge from './types/todo/social/badge'
import * as TodoSocialFollow from './types/todo/social/follow'
import * as TodoSocialGetFeed from './types/todo/social/getFeed'
import * as TodoSocialGetLikedBy from './types/todo/social/getLikedBy'
import * as TodoSocialGetNotificationCount from './types/todo/social/getNotificationCount'
import * as TodoSocialGetNotifications from './types/todo/social/getNotifications'
import * as TodoSocialGetPostThread from './types/todo/social/getPostThread'
import * as TodoSocialGetProfile from './types/todo/social/getProfile'
import * as TodoSocialGetRepostedBy from './types/todo/social/getRepostedBy'
import * as TodoSocialGetUserFollowers from './types/todo/social/getUserFollowers'
import * as TodoSocialGetUserFollows from './types/todo/social/getUserFollows'
import * as TodoSocialLike from './types/todo/social/like'
import * as TodoSocialMediaEmbed from './types/todo/social/mediaEmbed'
import * as TodoSocialPost from './types/todo/social/post'
import * as TodoSocialPostNotificationsSeen from './types/todo/social/postNotificationsSeen'
import * as TodoSocialProfile from './types/todo/social/profile'
import * as TodoSocialRepost from './types/todo/social/repost'

export * as TodoAdxCreateAccount from './types/todo/adx/createAccount'
export * as TodoAdxCreateSession from './types/todo/adx/createSession'
export * as TodoAdxDeleteAccount from './types/todo/adx/deleteAccount'
export * as TodoAdxDeleteSession from './types/todo/adx/deleteSession'
export * as TodoAdxGetAccount from './types/todo/adx/getAccount'
export * as TodoAdxGetAccountsConfig from './types/todo/adx/getAccountsConfig'
export * as TodoAdxGetSession from './types/todo/adx/getSession'
export * as TodoAdxRepoBatchWrite from './types/todo/adx/repoBatchWrite'
export * as TodoAdxRepoCreateRecord from './types/todo/adx/repoCreateRecord'
export * as TodoAdxRepoDeleteRecord from './types/todo/adx/repoDeleteRecord'
export * as TodoAdxRepoDescribe from './types/todo/adx/repoDescribe'
export * as TodoAdxRepoGetRecord from './types/todo/adx/repoGetRecord'
export * as TodoAdxRepoListRecords from './types/todo/adx/repoListRecords'
export * as TodoAdxRepoPutRecord from './types/todo/adx/repoPutRecord'
export * as TodoAdxResolveName from './types/todo/adx/resolveName'
export * as TodoAdxSyncGetRepo from './types/todo/adx/syncGetRepo'
export * as TodoAdxSyncGetRoot from './types/todo/adx/syncGetRoot'
export * as TodoAdxSyncUpdateRepo from './types/todo/adx/syncUpdateRepo'
export * as TodoSocialBadge from './types/todo/social/badge'
export * as TodoSocialFollow from './types/todo/social/follow'
export * as TodoSocialGetFeed from './types/todo/social/getFeed'
export * as TodoSocialGetLikedBy from './types/todo/social/getLikedBy'
export * as TodoSocialGetNotificationCount from './types/todo/social/getNotificationCount'
export * as TodoSocialGetNotifications from './types/todo/social/getNotifications'
export * as TodoSocialGetPostThread from './types/todo/social/getPostThread'
export * as TodoSocialGetProfile from './types/todo/social/getProfile'
export * as TodoSocialGetRepostedBy from './types/todo/social/getRepostedBy'
export * as TodoSocialGetUserFollowers from './types/todo/social/getUserFollowers'
export * as TodoSocialGetUserFollows from './types/todo/social/getUserFollows'
export * as TodoSocialLike from './types/todo/social/like'
export * as TodoSocialMediaEmbed from './types/todo/social/mediaEmbed'
export * as TodoSocialPost from './types/todo/social/post'
export * as TodoSocialPostNotificationsSeen from './types/todo/social/postNotificationsSeen'
export * as TodoSocialProfile from './types/todo/social/profile'
export * as TodoSocialRepost from './types/todo/social/repost'

export class Client {
  xrpc: XrpcClient = new XrpcClient()

  constructor() {
    this.xrpc.addSchemas(methodSchemas)
  }

  service(serviceUri: string | URL): ServiceClient {
    return new ServiceClient(this, this.xrpc.service(serviceUri))
  }
}

const defaultInst = new Client()
export default defaultInst

export class ServiceClient {
  _baseClient: Client
  xrpc: XrpcServiceClient
  todo: TodoNS

  constructor(baseClient: Client, xrpcService: XrpcServiceClient) {
    this._baseClient = baseClient
    this.xrpc = xrpcService
    this.todo = new TodoNS(this)
  }

  setHeader(key: string, value: string): void {
    this.xrpc.setHeader(key, value)
  }
}

export class TodoNS {
  _service: ServiceClient
  adx: AdxNS
  social: SocialNS

  constructor(service: ServiceClient) {
    this._service = service
    this.adx = new AdxNS(service)
    this.social = new SocialNS(service)
  }
}

export class AdxNS {
  _service: ServiceClient

  constructor(service: ServiceClient) {
    this._service = service
  }

  createAccount(
    params: TodoAdxCreateAccount.QueryParams,
    data?: TodoAdxCreateAccount.InputSchema,
    opts?: TodoAdxCreateAccount.CallOptions
  ): Promise<TodoAdxCreateAccount.Response> {
    return this._service.xrpc
      .call('todo.adx.createAccount', params, data, opts)
      .catch((e) => {
        throw TodoAdxCreateAccount.toKnownErr(e)
      })
  }

  createSession(
    params: TodoAdxCreateSession.QueryParams,
    data?: TodoAdxCreateSession.InputSchema,
    opts?: TodoAdxCreateSession.CallOptions
  ): Promise<TodoAdxCreateSession.Response> {
    return this._service.xrpc
      .call('todo.adx.createSession', params, data, opts)
      .catch((e) => {
        throw TodoAdxCreateSession.toKnownErr(e)
      })
  }

  deleteAccount(
    params: TodoAdxDeleteAccount.QueryParams,
    data?: TodoAdxDeleteAccount.InputSchema,
    opts?: TodoAdxDeleteAccount.CallOptions
  ): Promise<TodoAdxDeleteAccount.Response> {
    return this._service.xrpc
      .call('todo.adx.deleteAccount', params, data, opts)
      .catch((e) => {
        throw TodoAdxDeleteAccount.toKnownErr(e)
      })
  }

  deleteSession(
    params: TodoAdxDeleteSession.QueryParams,
    data?: TodoAdxDeleteSession.InputSchema,
    opts?: TodoAdxDeleteSession.CallOptions
  ): Promise<TodoAdxDeleteSession.Response> {
    return this._service.xrpc
      .call('todo.adx.deleteSession', params, data, opts)
      .catch((e) => {
        throw TodoAdxDeleteSession.toKnownErr(e)
      })
  }

  getAccount(
    params: TodoAdxGetAccount.QueryParams,
    data?: TodoAdxGetAccount.InputSchema,
    opts?: TodoAdxGetAccount.CallOptions
  ): Promise<TodoAdxGetAccount.Response> {
    return this._service.xrpc
      .call('todo.adx.getAccount', params, data, opts)
      .catch((e) => {
        throw TodoAdxGetAccount.toKnownErr(e)
      })
  }

  getAccountsConfig(
    params: TodoAdxGetAccountsConfig.QueryParams,
    data?: TodoAdxGetAccountsConfig.InputSchema,
    opts?: TodoAdxGetAccountsConfig.CallOptions
  ): Promise<TodoAdxGetAccountsConfig.Response> {
    return this._service.xrpc
      .call('todo.adx.getAccountsConfig', params, data, opts)
      .catch((e) => {
        throw TodoAdxGetAccountsConfig.toKnownErr(e)
      })
  }

  getSession(
    params: TodoAdxGetSession.QueryParams,
    data?: TodoAdxGetSession.InputSchema,
    opts?: TodoAdxGetSession.CallOptions
  ): Promise<TodoAdxGetSession.Response> {
    return this._service.xrpc
      .call('todo.adx.getSession', params, data, opts)
      .catch((e) => {
        throw TodoAdxGetSession.toKnownErr(e)
      })
  }

  repoBatchWrite(
    params: TodoAdxRepoBatchWrite.QueryParams,
    data?: TodoAdxRepoBatchWrite.InputSchema,
    opts?: TodoAdxRepoBatchWrite.CallOptions
  ): Promise<TodoAdxRepoBatchWrite.Response> {
    return this._service.xrpc
      .call('todo.adx.repoBatchWrite', params, data, opts)
      .catch((e) => {
        throw TodoAdxRepoBatchWrite.toKnownErr(e)
      })
  }

  repoCreateRecord(
    params: TodoAdxRepoCreateRecord.QueryParams,
    data?: TodoAdxRepoCreateRecord.InputSchema,
    opts?: TodoAdxRepoCreateRecord.CallOptions
  ): Promise<TodoAdxRepoCreateRecord.Response> {
    return this._service.xrpc
      .call('todo.adx.repoCreateRecord', params, data, opts)
      .catch((e) => {
        throw TodoAdxRepoCreateRecord.toKnownErr(e)
      })
  }

  repoDeleteRecord(
    params: TodoAdxRepoDeleteRecord.QueryParams,
    data?: TodoAdxRepoDeleteRecord.InputSchema,
    opts?: TodoAdxRepoDeleteRecord.CallOptions
  ): Promise<TodoAdxRepoDeleteRecord.Response> {
    return this._service.xrpc
      .call('todo.adx.repoDeleteRecord', params, data, opts)
      .catch((e) => {
        throw TodoAdxRepoDeleteRecord.toKnownErr(e)
      })
  }

  repoDescribe(
    params: TodoAdxRepoDescribe.QueryParams,
    data?: TodoAdxRepoDescribe.InputSchema,
    opts?: TodoAdxRepoDescribe.CallOptions
  ): Promise<TodoAdxRepoDescribe.Response> {
    return this._service.xrpc
      .call('todo.adx.repoDescribe', params, data, opts)
      .catch((e) => {
        throw TodoAdxRepoDescribe.toKnownErr(e)
      })
  }

  repoGetRecord(
    params: TodoAdxRepoGetRecord.QueryParams,
    data?: TodoAdxRepoGetRecord.InputSchema,
    opts?: TodoAdxRepoGetRecord.CallOptions
  ): Promise<TodoAdxRepoGetRecord.Response> {
    return this._service.xrpc
      .call('todo.adx.repoGetRecord', params, data, opts)
      .catch((e) => {
        throw TodoAdxRepoGetRecord.toKnownErr(e)
      })
  }

  repoListRecords(
    params: TodoAdxRepoListRecords.QueryParams,
    data?: TodoAdxRepoListRecords.InputSchema,
    opts?: TodoAdxRepoListRecords.CallOptions
  ): Promise<TodoAdxRepoListRecords.Response> {
    return this._service.xrpc
      .call('todo.adx.repoListRecords', params, data, opts)
      .catch((e) => {
        throw TodoAdxRepoListRecords.toKnownErr(e)
      })
  }

  repoPutRecord(
    params: TodoAdxRepoPutRecord.QueryParams,
    data?: TodoAdxRepoPutRecord.InputSchema,
    opts?: TodoAdxRepoPutRecord.CallOptions
  ): Promise<TodoAdxRepoPutRecord.Response> {
    return this._service.xrpc
      .call('todo.adx.repoPutRecord', params, data, opts)
      .catch((e) => {
        throw TodoAdxRepoPutRecord.toKnownErr(e)
      })
  }

  resolveName(
    params: TodoAdxResolveName.QueryParams,
    data?: TodoAdxResolveName.InputSchema,
    opts?: TodoAdxResolveName.CallOptions
  ): Promise<TodoAdxResolveName.Response> {
    return this._service.xrpc
      .call('todo.adx.resolveName', params, data, opts)
      .catch((e) => {
        throw TodoAdxResolveName.toKnownErr(e)
      })
  }

  syncGetRepo(
    params: TodoAdxSyncGetRepo.QueryParams,
    data?: TodoAdxSyncGetRepo.InputSchema,
    opts?: TodoAdxSyncGetRepo.CallOptions
  ): Promise<TodoAdxSyncGetRepo.Response> {
    return this._service.xrpc
      .call('todo.adx.syncGetRepo', params, data, opts)
      .catch((e) => {
        throw TodoAdxSyncGetRepo.toKnownErr(e)
      })
  }

  syncGetRoot(
    params: TodoAdxSyncGetRoot.QueryParams,
    data?: TodoAdxSyncGetRoot.InputSchema,
    opts?: TodoAdxSyncGetRoot.CallOptions
  ): Promise<TodoAdxSyncGetRoot.Response> {
    return this._service.xrpc
      .call('todo.adx.syncGetRoot', params, data, opts)
      .catch((e) => {
        throw TodoAdxSyncGetRoot.toKnownErr(e)
      })
  }

  syncUpdateRepo(
    params: TodoAdxSyncUpdateRepo.QueryParams,
    data?: TodoAdxSyncUpdateRepo.InputSchema,
    opts?: TodoAdxSyncUpdateRepo.CallOptions
  ): Promise<TodoAdxSyncUpdateRepo.Response> {
    return this._service.xrpc
      .call('todo.adx.syncUpdateRepo', params, data, opts)
      .catch((e) => {
        throw TodoAdxSyncUpdateRepo.toKnownErr(e)
      })
  }
}

export class SocialNS {
  _service: ServiceClient
  badge: BadgeRecord
  follow: FollowRecord
  like: LikeRecord
  mediaEmbed: MediaEmbedRecord
  post: PostRecord
  profile: ProfileRecord
  repost: RepostRecord

  constructor(service: ServiceClient) {
    this._service = service
    this.badge = new BadgeRecord(service)
    this.follow = new FollowRecord(service)
    this.like = new LikeRecord(service)
    this.mediaEmbed = new MediaEmbedRecord(service)
    this.post = new PostRecord(service)
    this.profile = new ProfileRecord(service)
    this.repost = new RepostRecord(service)
  }

  getFeed(
    params: TodoSocialGetFeed.QueryParams,
    data?: TodoSocialGetFeed.InputSchema,
    opts?: TodoSocialGetFeed.CallOptions
  ): Promise<TodoSocialGetFeed.Response> {
    return this._service.xrpc
      .call('todo.social.getFeed', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetFeed.toKnownErr(e)
      })
  }

  getLikedBy(
    params: TodoSocialGetLikedBy.QueryParams,
    data?: TodoSocialGetLikedBy.InputSchema,
    opts?: TodoSocialGetLikedBy.CallOptions
  ): Promise<TodoSocialGetLikedBy.Response> {
    return this._service.xrpc
      .call('todo.social.getLikedBy', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetLikedBy.toKnownErr(e)
      })
  }

  getNotificationCount(
    params: TodoSocialGetNotificationCount.QueryParams,
    data?: TodoSocialGetNotificationCount.InputSchema,
    opts?: TodoSocialGetNotificationCount.CallOptions
  ): Promise<TodoSocialGetNotificationCount.Response> {
    return this._service.xrpc
      .call('todo.social.getNotificationCount', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetNotificationCount.toKnownErr(e)
      })
  }

  getNotifications(
    params: TodoSocialGetNotifications.QueryParams,
    data?: TodoSocialGetNotifications.InputSchema,
    opts?: TodoSocialGetNotifications.CallOptions
  ): Promise<TodoSocialGetNotifications.Response> {
    return this._service.xrpc
      .call('todo.social.getNotifications', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetNotifications.toKnownErr(e)
      })
  }

  getPostThread(
    params: TodoSocialGetPostThread.QueryParams,
    data?: TodoSocialGetPostThread.InputSchema,
    opts?: TodoSocialGetPostThread.CallOptions
  ): Promise<TodoSocialGetPostThread.Response> {
    return this._service.xrpc
      .call('todo.social.getPostThread', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetPostThread.toKnownErr(e)
      })
  }

  getProfile(
    params: TodoSocialGetProfile.QueryParams,
    data?: TodoSocialGetProfile.InputSchema,
    opts?: TodoSocialGetProfile.CallOptions
  ): Promise<TodoSocialGetProfile.Response> {
    return this._service.xrpc
      .call('todo.social.getProfile', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetProfile.toKnownErr(e)
      })
  }

  getRepostedBy(
    params: TodoSocialGetRepostedBy.QueryParams,
    data?: TodoSocialGetRepostedBy.InputSchema,
    opts?: TodoSocialGetRepostedBy.CallOptions
  ): Promise<TodoSocialGetRepostedBy.Response> {
    return this._service.xrpc
      .call('todo.social.getRepostedBy', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetRepostedBy.toKnownErr(e)
      })
  }

  getUserFollowers(
    params: TodoSocialGetUserFollowers.QueryParams,
    data?: TodoSocialGetUserFollowers.InputSchema,
    opts?: TodoSocialGetUserFollowers.CallOptions
  ): Promise<TodoSocialGetUserFollowers.Response> {
    return this._service.xrpc
      .call('todo.social.getUserFollowers', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetUserFollowers.toKnownErr(e)
      })
  }

  getUserFollows(
    params: TodoSocialGetUserFollows.QueryParams,
    data?: TodoSocialGetUserFollows.InputSchema,
    opts?: TodoSocialGetUserFollows.CallOptions
  ): Promise<TodoSocialGetUserFollows.Response> {
    return this._service.xrpc
      .call('todo.social.getUserFollows', params, data, opts)
      .catch((e) => {
        throw TodoSocialGetUserFollows.toKnownErr(e)
      })
  }

  postNotificationsSeen(
    params: TodoSocialPostNotificationsSeen.QueryParams,
    data?: TodoSocialPostNotificationsSeen.InputSchema,
    opts?: TodoSocialPostNotificationsSeen.CallOptions
  ): Promise<TodoSocialPostNotificationsSeen.Response> {
    return this._service.xrpc
      .call('todo.social.postNotificationsSeen', params, data, opts)
      .catch((e) => {
        throw TodoSocialPostNotificationsSeen.toKnownErr(e)
      })
  }
}

export class BadgeRecord {
  _service: ServiceClient

  constructor(service: ServiceClient) {
    this._service = service
  }

  async list(
    params: Omit<TodoAdxRepoListRecords.QueryParams, 'type'>
  ): Promise<{ records: { uri: string, value: TodoSocialBadge.Record }[] }> {
    const res = await this._service.xrpc.call('todo.adx.repoListRecords', {
      type: 'todo.social.badge',
      ...params,
    })
    return res.data
  }

  async get(
    params: Omit<TodoAdxRepoGetRecord.QueryParams, 'type'>
  ): Promise<{ uri: string, value: TodoSocialBadge.Record }> {
    const res = await this._service.xrpc.call('todo.adx.repoGetRecord', {
      type: 'todo.social.badge',
      ...params,
    })
    return res.data
  }

  async create(
    params: Omit<TodoAdxRepoCreateRecord.QueryParams, 'type'>,
    record: TodoSocialBadge.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.badge'
    const res = await this._service.xrpc.call(
      'todo.adx.repoCreateRecord',
      { type: 'todo.social.badge', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async put(
    params: Omit<TodoAdxRepoPutRecord.QueryParams, 'type'>,
    record: TodoSocialBadge.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.badge'
    const res = await this._service.xrpc.call(
      'todo.adx.repoPutRecord',
      { type: 'todo.social.badge', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async delete(
    params: Omit<TodoAdxRepoDeleteRecord.QueryParams, 'type'>,
    headers?: Record<string, string>
  ): Promise<void> {
    await this._service.xrpc.call(
      'todo.adx.repoDeleteRecord',
      { type: 'todo.social.badge', ...params },
      undefined,
      { headers }
    )
  }
}

export class FollowRecord {
  _service: ServiceClient

  constructor(service: ServiceClient) {
    this._service = service
  }

  async list(
    params: Omit<TodoAdxRepoListRecords.QueryParams, 'type'>
  ): Promise<{ records: { uri: string, value: TodoSocialFollow.Record }[] }> {
    const res = await this._service.xrpc.call('todo.adx.repoListRecords', {
      type: 'todo.social.follow',
      ...params,
    })
    return res.data
  }

  async get(
    params: Omit<TodoAdxRepoGetRecord.QueryParams, 'type'>
  ): Promise<{ uri: string, value: TodoSocialFollow.Record }> {
    const res = await this._service.xrpc.call('todo.adx.repoGetRecord', {
      type: 'todo.social.follow',
      ...params,
    })
    return res.data
  }

  async create(
    params: Omit<TodoAdxRepoCreateRecord.QueryParams, 'type'>,
    record: TodoSocialFollow.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.follow'
    const res = await this._service.xrpc.call(
      'todo.adx.repoCreateRecord',
      { type: 'todo.social.follow', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async put(
    params: Omit<TodoAdxRepoPutRecord.QueryParams, 'type'>,
    record: TodoSocialFollow.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.follow'
    const res = await this._service.xrpc.call(
      'todo.adx.repoPutRecord',
      { type: 'todo.social.follow', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async delete(
    params: Omit<TodoAdxRepoDeleteRecord.QueryParams, 'type'>,
    headers?: Record<string, string>
  ): Promise<void> {
    await this._service.xrpc.call(
      'todo.adx.repoDeleteRecord',
      { type: 'todo.social.follow', ...params },
      undefined,
      { headers }
    )
  }
}

export class LikeRecord {
  _service: ServiceClient

  constructor(service: ServiceClient) {
    this._service = service
  }

  async list(
    params: Omit<TodoAdxRepoListRecords.QueryParams, 'type'>
  ): Promise<{ records: { uri: string, value: TodoSocialLike.Record }[] }> {
    const res = await this._service.xrpc.call('todo.adx.repoListRecords', {
      type: 'todo.social.like',
      ...params,
    })
    return res.data
  }

  async get(
    params: Omit<TodoAdxRepoGetRecord.QueryParams, 'type'>
  ): Promise<{ uri: string, value: TodoSocialLike.Record }> {
    const res = await this._service.xrpc.call('todo.adx.repoGetRecord', {
      type: 'todo.social.like',
      ...params,
    })
    return res.data
  }

  async create(
    params: Omit<TodoAdxRepoCreateRecord.QueryParams, 'type'>,
    record: TodoSocialLike.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.like'
    const res = await this._service.xrpc.call(
      'todo.adx.repoCreateRecord',
      { type: 'todo.social.like', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async put(
    params: Omit<TodoAdxRepoPutRecord.QueryParams, 'type'>,
    record: TodoSocialLike.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.like'
    const res = await this._service.xrpc.call(
      'todo.adx.repoPutRecord',
      { type: 'todo.social.like', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async delete(
    params: Omit<TodoAdxRepoDeleteRecord.QueryParams, 'type'>,
    headers?: Record<string, string>
  ): Promise<void> {
    await this._service.xrpc.call(
      'todo.adx.repoDeleteRecord',
      { type: 'todo.social.like', ...params },
      undefined,
      { headers }
    )
  }
}

export class MediaEmbedRecord {
  _service: ServiceClient

  constructor(service: ServiceClient) {
    this._service = service
  }

  async list(
    params: Omit<TodoAdxRepoListRecords.QueryParams, 'type'>
  ): Promise<{
    records: { uri: string, value: TodoSocialMediaEmbed.Record }[],
  }> {
    const res = await this._service.xrpc.call('todo.adx.repoListRecords', {
      type: 'todo.social.mediaEmbed',
      ...params,
    })
    return res.data
  }

  async get(
    params: Omit<TodoAdxRepoGetRecord.QueryParams, 'type'>
  ): Promise<{ uri: string, value: TodoSocialMediaEmbed.Record }> {
    const res = await this._service.xrpc.call('todo.adx.repoGetRecord', {
      type: 'todo.social.mediaEmbed',
      ...params,
    })
    return res.data
  }

  async create(
    params: Omit<TodoAdxRepoCreateRecord.QueryParams, 'type'>,
    record: TodoSocialMediaEmbed.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.mediaEmbed'
    const res = await this._service.xrpc.call(
      'todo.adx.repoCreateRecord',
      { type: 'todo.social.mediaEmbed', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async put(
    params: Omit<TodoAdxRepoPutRecord.QueryParams, 'type'>,
    record: TodoSocialMediaEmbed.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.mediaEmbed'
    const res = await this._service.xrpc.call(
      'todo.adx.repoPutRecord',
      { type: 'todo.social.mediaEmbed', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async delete(
    params: Omit<TodoAdxRepoDeleteRecord.QueryParams, 'type'>,
    headers?: Record<string, string>
  ): Promise<void> {
    await this._service.xrpc.call(
      'todo.adx.repoDeleteRecord',
      { type: 'todo.social.mediaEmbed', ...params },
      undefined,
      { headers }
    )
  }
}

export class PostRecord {
  _service: ServiceClient

  constructor(service: ServiceClient) {
    this._service = service
  }

  async list(
    params: Omit<TodoAdxRepoListRecords.QueryParams, 'type'>
  ): Promise<{ records: { uri: string, value: TodoSocialPost.Record }[] }> {
    const res = await this._service.xrpc.call('todo.adx.repoListRecords', {
      type: 'todo.social.post',
      ...params,
    })
    return res.data
  }

  async get(
    params: Omit<TodoAdxRepoGetRecord.QueryParams, 'type'>
  ): Promise<{ uri: string, value: TodoSocialPost.Record }> {
    const res = await this._service.xrpc.call('todo.adx.repoGetRecord', {
      type: 'todo.social.post',
      ...params,
    })
    return res.data
  }

  async create(
    params: Omit<TodoAdxRepoCreateRecord.QueryParams, 'type'>,
    record: TodoSocialPost.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.post'
    const res = await this._service.xrpc.call(
      'todo.adx.repoCreateRecord',
      { type: 'todo.social.post', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async put(
    params: Omit<TodoAdxRepoPutRecord.QueryParams, 'type'>,
    record: TodoSocialPost.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.post'
    const res = await this._service.xrpc.call(
      'todo.adx.repoPutRecord',
      { type: 'todo.social.post', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async delete(
    params: Omit<TodoAdxRepoDeleteRecord.QueryParams, 'type'>,
    headers?: Record<string, string>
  ): Promise<void> {
    await this._service.xrpc.call(
      'todo.adx.repoDeleteRecord',
      { type: 'todo.social.post', ...params },
      undefined,
      { headers }
    )
  }
}

export class ProfileRecord {
  _service: ServiceClient

  constructor(service: ServiceClient) {
    this._service = service
  }

  async list(
    params: Omit<TodoAdxRepoListRecords.QueryParams, 'type'>
  ): Promise<{ records: { uri: string, value: TodoSocialProfile.Record }[] }> {
    const res = await this._service.xrpc.call('todo.adx.repoListRecords', {
      type: 'todo.social.profile',
      ...params,
    })
    return res.data
  }

  async get(
    params: Omit<TodoAdxRepoGetRecord.QueryParams, 'type'>
  ): Promise<{ uri: string, value: TodoSocialProfile.Record }> {
    const res = await this._service.xrpc.call('todo.adx.repoGetRecord', {
      type: 'todo.social.profile',
      ...params,
    })
    return res.data
  }

  async create(
    params: Omit<TodoAdxRepoCreateRecord.QueryParams, 'type'>,
    record: TodoSocialProfile.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.profile'
    const res = await this._service.xrpc.call(
      'todo.adx.repoCreateRecord',
      { type: 'todo.social.profile', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async put(
    params: Omit<TodoAdxRepoPutRecord.QueryParams, 'type'>,
    record: TodoSocialProfile.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.profile'
    const res = await this._service.xrpc.call(
      'todo.adx.repoPutRecord',
      { type: 'todo.social.profile', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async delete(
    params: Omit<TodoAdxRepoDeleteRecord.QueryParams, 'type'>,
    headers?: Record<string, string>
  ): Promise<void> {
    await this._service.xrpc.call(
      'todo.adx.repoDeleteRecord',
      { type: 'todo.social.profile', ...params },
      undefined,
      { headers }
    )
  }
}

export class RepostRecord {
  _service: ServiceClient

  constructor(service: ServiceClient) {
    this._service = service
  }

  async list(
    params: Omit<TodoAdxRepoListRecords.QueryParams, 'type'>
  ): Promise<{ records: { uri: string, value: TodoSocialRepost.Record }[] }> {
    const res = await this._service.xrpc.call('todo.adx.repoListRecords', {
      type: 'todo.social.repost',
      ...params,
    })
    return res.data
  }

  async get(
    params: Omit<TodoAdxRepoGetRecord.QueryParams, 'type'>
  ): Promise<{ uri: string, value: TodoSocialRepost.Record }> {
    const res = await this._service.xrpc.call('todo.adx.repoGetRecord', {
      type: 'todo.social.repost',
      ...params,
    })
    return res.data
  }

  async create(
    params: Omit<TodoAdxRepoCreateRecord.QueryParams, 'type'>,
    record: TodoSocialRepost.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.repost'
    const res = await this._service.xrpc.call(
      'todo.adx.repoCreateRecord',
      { type: 'todo.social.repost', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async put(
    params: Omit<TodoAdxRepoPutRecord.QueryParams, 'type'>,
    record: TodoSocialRepost.Record,
    headers?: Record<string, string>
  ): Promise<{ uri: string }> {
    record.$type = 'todo.social.repost'
    const res = await this._service.xrpc.call(
      'todo.adx.repoPutRecord',
      { type: 'todo.social.repost', ...params },
      record,
      { encoding: 'application/json', headers }
    )
    return res.data
  }

  async delete(
    params: Omit<TodoAdxRepoDeleteRecord.QueryParams, 'type'>,
    headers?: Record<string, string>
  ): Promise<void> {
    await this._service.xrpc.call(
      'todo.adx.repoDeleteRecord',
      { type: 'todo.social.repost', ...params },
      undefined,
      { headers }
    )
  }
}
