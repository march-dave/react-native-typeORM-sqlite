## 설치 순서


## 안드로이드 에서 link 하기

1. Define the react-native-maps project in android/settings.gradle:
경로: android/settings.gradle

제일 아래쪽에 추가 하기
include ':react-native-sqlite-storage'
project(':react-native-sqlite-storage').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-sqlite-storage/src/android')

2. Add the react-native-maps as an dependency of your app in android/app/build.gradle:
경로: android/app/build.gradle
...
dependencies {
  ...
  라인 번호: 144
    implementation project(':react-native-sqlite-storage')
}


3. android/app/src/main/java/com/deleteme2/MainApplication.java
경로: android/app/src/main/java/com/프로젝트이름/MainApplication.java

import org.pgsqlite.SQLitePluginPackage;

라인 넘버: 26
new SQLitePluginPackage(),   // register SQLite Plugin here


## iOS 에서 링크 하기

1. react-native link react-native-sqlite-storage 를 하면 된다. 그런데 추가를 요구 하기도 하는데
2. libsqlite3.0.tbd가 자동으로 추가가 안된다. 꼭 필요 한지 잘 모르겠는데 
SQLite 공식 페이지: https://github.com/andpor/react-native-sqlite-storage 


<!-- 1. A connection object needs to be created (or configuration can be stored in an “ormconfig.js” file. (https://typeorm.io/#/connection).
> 2. Domain entities need to be defined as TypeOrm `@Entity(table_name)`.
> 3. An EntityManager or Repository can be used on these entities to perform typical `CRUD` operations (https://typeorm.io/#/working-with-entity-manager)
> 4. Typically `Mapper`s are used to transform our domain entities passed in `State` objects to Reducers. I also came across a transformer library. -->