export const statTypes = {
    speed: 'speed',
    nitro: 'nitro',
    price: 'price',
    parts: 'parts',
    ingame: 'ingame'
}
export const extremumStarterValue = 0;
const statsPropSuffix = 'Stats';


class Stat {
    constructor(name, displayName, stringValue, numberValue, type) {
        this.name = name
        this.displayName = displayName
        this.stringValue = stringValue
        this.numberValue = numberValue
        this.type = type;
    }
}


export class CreateBike {
    constructor(id, category, name, price, hp, lbs, initSpeed, topSpeed, nitroSpeed, topNitroSpeed, performance, armor, tires, suspension, description, nitroCharge) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.desc = description;
        this[statTypes.ingame + statsPropSuffix] = { /* автоматизировать создание свойств*/
            price: CreateBike.#buildIngameStats(price, 'price', 'price'),
            hp: CreateBike.#buildIngameStats(hp, 'hp', 'hp'),
            lbs: CreateBike.#buildIngameStats(lbs, 'lbs', 'lbs'),
        };
        this[statTypes.speed + statsPropSuffix] = {
            speed: CreateBike.#buildSpeedStat(initSpeed, 'speed', 'speed'),
            topSpeed: CreateBike.#buildSpeedStat(topSpeed, 'topSpeed', 'top speed'),
            nitroSpeed: CreateBike.#buildSpeedStat(nitroSpeed, 'nitroSpeed', 'nitro speed'),
            topNitroSpeed: CreateBike.#buildSpeedStat(topNitroSpeed, 'topNitroSpeed', 'top nitro speed'),
            nitroCharge: new Stat('nitro', 'nitro charge', CreateBike.#convertNitroToString(nitroCharge), nitroCharge, statTypes.nitro)
        }

        this[statTypes.parts + statsPropSuffix] = {
            performance: CreateBike.#buildPartsStats(performance, 'performance', 'performance'),
            tires: CreateBike.#buildPartsStats(tires, 'tires', 'tires'),
            suspension: CreateBike.#buildPartsStats(suspension, 'suspension', 'suspension'),
            armor: CreateBike.#buildPartsStats(armor, 'armor', 'protection'),
        }

        this.extremums = {
            ...Object.keys(statTypes).reduce((acc, statType) => {
                acc[statType] = {
                    ...CreateBike.#calculateMaxAndReturnObject(statType, this)
                }
                return acc;
            }, {})
        }
    }
    statsTypes = {
        ingame: 'ingameStats',
        speed: 'speedStats',
        parts: 'partsStats'
    }

    getStatsByType(statsType) {
        const keys = Object.keys(this[statsType])

        const result = keys.map(key => this[statsType][key])
        
        return result
    }

    static getComparisonChartFieldsArray(anyBike) {
        const bikeKeys = Object.keys(anyBike)
        const chartFeilds = {};

        for (const field of bikeKeys) {
            if (field.includes(statsPropSuffix)) {
                const fieldsToDraw = [...Object.keys(anyBike[field])]
                chartFeilds[field] = [...fieldsToDraw]
            }
        }
        return chartFeilds
    }


    static #buildPartsStats(stat, name, displayName) {
        return new Stat(name, displayName, stat, this.#convertPriceToNumber(stat), statTypes.parts);
    }

    static #buildIngameStats(stat, name, displayName) {
        const type = name === 'price' ? statTypes.price : statTypes.ingame
        const numberValue = name === 'price' ? CreateBike.#convertPriceToNumber(stat) : CreateBike.#convertIngameStatToNumber(stat)
        return new Stat(name, displayName, stat, numberValue, type)
    }

    static #buildSpeedStat(stat, name, displayName) {
        return new Stat(name, displayName, stat, CreateBike.#convertSpeedToNumber(stat), statTypes.speed)
    }

    static #convertSpeedToNumber(stat) {
        return stat === 'none' ? 0 : Number(stat.substring(0, 3));
    }

    static #convertPriceToNumber(stat) {
        return Number(stat.substring(1))
    }

    static #convertNitroToString(stat) {
        return stat === 0 ? 'none' : stat
    }

    static #convertIngameStatToNumber(stat) {
        const wildThingStat = '???';
        return stat === wildThingStat ? 0 : Number(stat)
    }

    static #calculateMaxAndReturnObject(statType, bike) {

        const containerName = CreateBike.#getStatContainerByStatName(statType);
        const statContainerKeys = Object.keys(bike[containerName]);

        return statContainerKeys.reduce((acc, key) => {
            const statRecord = bike[containerName][key]
            if (statRecord.type === statType) {
                acc.max = statRecord.numberValue > acc.max ? statRecord.numberValue : acc.max
            }
            return acc
        }, { max: extremumStarterValue })
    }

    static #getStatContainerByStatName(statType) {
        if (statType === statTypes.price || statTypes === statTypes.ingame) {
            return statTypes.ingame + statsPropSuffix
        }
        if (statType === statTypes.nitro) {
            return statTypes.speed + statsPropSuffix
        }

        return statTypes[statType] + statsPropSuffix
    }

}

export const newBikes = (bikes) => bikes.map((bike, i) => new CreateBike(i, ...bike));