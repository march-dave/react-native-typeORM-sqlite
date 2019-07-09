import { test } from './src/entities/test'
import { User } from './src/entities/User'
import { CategoryEntity } from './src/entities/category'

export const base = {
    type: 'react-native',
    //   schema: 'public',
    database: `musketeer.sqlite`,
    synchronize: true,
    logging: ['error', 'query', 'schema'],
    location: 'Documents',

    entities: [test, User, CategoryEntity],
    // entities: [ "./src/entities/*.ts", "./src/entities/*.js" ], 
    // 이런!! 이렇게 설정해선 인식을 못하네..-_-;;
    //  아래것들은 좀더 조사 해 볼것   
    //   migrations: ['src/migration/*.ts'],
    //   subscribers: ['src/subscriber/*.ts'],
    //   cli: {
    //     entitiesDir: 'src/entities',
    //     migrationsDir: 'src/migration',
    //     subscribersDir: 'src/subscriber'
    //   },
    //   migrationsRun: true
};

// const config = {
//     test: {
//         url: process.env.CI ? CI_DATABASE_URL : process.env.DATABASE_TEST_URL,
//         dropSchema: true
//     },
//     development: {},
//     production: {
//         dropSchema: false
//     }
// };

// export const base;

// module.exports = process.env.CI
//     ? { ...base, ...config['test'] }
//     : { ...base, ...config[process.env.NODE_ENV || 'development'] };


// type: 'react-native',
//     database : `database.sqlite`,

//         // location: 'Documents',
//         location: 'default',
//             // (SQLite 에서만 적용가능)createFromLocation: '~www/1TestDB.db', 여기서는 작동을 안한다. SQLite.open~~ 에서만 설정 가능 하네..
//             // 그래서 iOS 에서는 디버깅 모드에서 DB 저장 되는 경로를 볼 수 있다. 
//             // 그런데 android는 알 수가 없네.

//             logging: ['error', 'query', 'schema'],
//                 // logging: false,
//                 synchronize: true,
//                     // entities: [
//                     //   "src/entities/*.ts"
//                     // ]
//                     entities: [test]
// // entities: [
// //   Author,
// //   Category,
// //   Post
// // ]