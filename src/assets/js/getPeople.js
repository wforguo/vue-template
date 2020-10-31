/**
 * 获取第几个
 * @params: min,max,key
 * @return number
 * */

class getPeople {
    constructor (config) {
        this.init({
            startTime: '2020/10/1 18:13',
            startCount: 10,
            endTime: '2020/10/10 12:00',
            endCount: 23000,
            key: 'invite'
        });
    }
    init (config) {
        // 初始化
        let {
            startTime,
            startCount,
            endTime,
            endCount,
            key
        } = config;
        this.startTime = new Date(startTime);
        this.startCount = startCount;
        this.endTime = new Date(endTime);
        this.endCount = endCount;
        this.key = key;
        this.count = 1;
        this.nowTime = new Date();
        this.getCurrentCount();
    }

    random (min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        return Math.abs(min + Math.floor(Math.random() * (max - min + 1)));
    }
    getLocalCount () {
        let localCount = window.localStorage.getItem(this.key);
        if (localCount != null) {
            return Number(localCount);
        } else {
            return null;
        }
    }

    getCountByTime () {
        let count = 1;
        // 根据最大值和时间跨度，计算出一个增长幅度
        let step = (this.endCount / ((this.endTime - this.startTime) / 1000)).toFixed(3);
        if (this.nowTime < this.startTime) {
            // 随机一个初始数值
            count = this.random(this.startCount - (this.startTime - this.nowTime) / 60000, this.startCount);
        }
        if (this.nowTime >= this.startTime && this.nowTime <= this.endTime) {
            // 根据增长幅度，实时计算增长人数
            count = this.random(((this.nowTime - this.startTime) / 1000 * step), ((this.nowTime - this.startTime) / 1000 * step) + this.random(10, 20))
        }
        if (this.nowTime > this.endTime) {
            // 结束之后，减少增长幅度
            count = this.endCount + (this.nowTime - this.startTime) / 1000 * step * 0.001 + this.random(10, 15);
        }
        this.count = Math.abs(Math.ceil(count));
        console.log(this.count);
        // 缓存下来
        this.setLocalCount(this.count);
    }

    setLocalCount (count) {
        window.localStorage.setItem(this.key, count)
    }

    getCurrentCount () {
        let localCount = this.getLocalCount();
        if (localCount) {
            this.count = localCount;
        } else {
            this.count = this.getCountByTime();
        }
        console.log(this.count);
        return this.count;
    }
}

export default getPeople;
