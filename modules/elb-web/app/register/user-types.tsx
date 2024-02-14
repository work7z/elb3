import _ from "lodash";
import { AuthInfoProps } from "../page";
import dao from "../__CORE__/dao";
import { key_systemInfoGroup } from "./redis-types";
import { User } from "../__CORE__/dao/model";

export let fn_get_user_avatar = (authInfoProps: AuthInfoProps) => {
    let avatarPath = authInfoProps.authInfo?.user?.avatarPath
    let userId = authInfoProps.authInfo.user?.id
    if (_.isEmpty(avatarPath)) {
        return '/avatar/dft-1.png'
    }
    return avatarPath
}

export type SystemInfoBody = {
    userCount: number,
    userOnlineCount: number,
}
let launchBefore = false;
export let fn_refresh_system_info_from_redis = async () => {
    let daoRef = await dao()
    let userCtn = await User.count()
    await daoRef.redis.hSet(key_systemInfoGroup, 'userCount', userCtn)
}
export let fn_get_system_info_from_redis = async (): Promise<SystemInfoBody> => {
    if (!launchBefore) {
        await fn_refresh_system_info_from_redis()
    }
    let daoRef = await dao()
    let userCount = await daoRef.redis.hGet(key_systemInfoGroup, 'userCount')
    let userOnlineCount = '300' //await daoRef.redis.hGet(key_systemInfoGroup, 'userOnlineCount')
    return {
        userCount: parseInt(userCount + ''),
        userOnlineCount: parseInt(userOnlineCount || '0'),
    }
}