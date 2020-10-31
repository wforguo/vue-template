/**
 * @Description: 常用工具的封装
 * @author: forguo
 * @date: 2020/8/27
 */

/**
 * 删除空的参数
 * @param params
 */
export const clearEmpty = (params) => {
    let data = {
        ...params
    };
    for (let key in data) {
        // eslint-disable-next-line no-eq-null
        if (!data[key] || data[key] == null) {
            delete data[key];
        }
    }
    return data;
};

export const titlePre = () => {
    // 添加title前缀
    const hostname = window.location.hostname;
    const testName = '/app-t/'; // 测试

    let titleEnv = '';
    if (hostname.indexOf(testName) !== -1) {
        titleEnv = '【测试】';
    }
    const titlePrefix = process.env.NODE_ENV === 'development' ? '【开发】' : titleEnv;
    document.title = `${titlePrefix}${document.title}`;

    console.log(`%c Environment %c ${titlePrefix || '【Dev】'}`, 'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060', 'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #42c02e');
    console.log(`%c Version %c ${process.env.VUE_APP_VERSION}`, 'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060', 'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2');
    console.log(`%c BuildTime %c ${process.env.VUE_APP_BUILD_TIME}`, 'padding: 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060', 'padding: 1px 5px 1px 1px; border-radius: 0 3px 3px 0; color: #fff; background: #1475b2');
};
