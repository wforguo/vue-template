/**
 * 云开发数据库API
 */
import cloud from '@cloudbase/node-sdk'
import moment from 'moment'
import cloudConfig from '../config'

const { defaultPageSize } = cloudConfig; // 默认分页
const DateFormat = 'YYYY-MM-DD HH:mm:ss';
const app = cloud.init({
    env: cloud.SYMBOL_CURRENT_ENV
});

const db = app.database();
const _ = db.command;

/***
 * @param dbName
 * @param data
 * @returns {*}
 */
const add = function (dbName, data) {
    return db.collection(`${dbName}`).add({
        data: {
            ...data,
            'createTime': moment().format(DateFormat)
        }
    })
};

/**
 * @param dbName
 * @param current
 * @param pageSize
 * @returns {*}
 */
const get = function (dbName, current = 0, pageSize = defaultPageSize) {
    return db.collection(dbName)
        .orderBy('createTime', 'desc') // 时间升序
        .skip(current * 10)
        .limit(pageSize)
        .get()
};

/**
 * @param dbName
 * @param data
 * @returns {*}
 */
const getBy = function (dbName, data) {
    return db.collection(`${dbName}`).where(data).get()
};

/**
 * @param dbName
 * @param id
 * @returns {*}
 */
const getOne = function (dbName, id) {
    return db.collection(`${dbName}`).doc(id).get()
};

/**
 * @param dbName
 * @param data
 * @param id
 * @returns {*}
 */
const update = function (dbName, data, id) {
    return db.collection(`${dbName}`).doc(id).update({
        data: data
    })
};

/**
 * @param dbName
 * @param id
 * @returns {*}
 */
const remove = function (dbName, id) {
    return db.collection(`${dbName}`).doc(id).remove()
};

export default {
    add,
    get,
    getOne,
    getBy,
    update,
    remove
}
