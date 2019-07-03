## git code 유저 변경 하기

git commit --amend --author="Author Name <ysangy@gmail.com>"

## git stash 사용하기
1234

## 설치 순서


## 안드로이드 에서 link 하기 3 군데에 추가 해야 한다.(1 - 3)

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

방법 1)
1. react-native link react-native-sqlite-storage 를 하면 된다. 그런데 추가를 요구 .tbd 하기도 하는데
2. libsqlite3.0.tbd가 자동으로 추가가 안된다. 꼭 필요한 지 잘 모르겠는데 
SQLite 공식 페이지: https://github.com/andpor/react-native-sqlite-storage 

방법 2) Podfile 에 추가 해야 한다.
pod 'react-native-sqlite-storage', :path => '../node_modules/react-native-sqlite-storage'



## 요구 사항 정리 하기

1. DB 연결 하기 ormconfig.js 그런데 이게 (ormconfig.json React Native 에서는 안된다)  자바 스크립트 export를 이용 할것, 좀더 찾아 보자. 
2. Entity TypeORM 으로 연결 하기 - 이건 간단함

// EntityManager 와 createConnection 차이점이 애매 모호 하고 왜 만들었는지 이유가 없네...
3. EntityManager 또는 Repository 로 CRUD 사용하기 : https://typeorm.io/#/working-with-entity-manager

4. `Mapper` 를 이용해서 State 로 보내기, 다시 말해 리덕스 사가와 TypeORM 을 써서 프로젝트 전체에 라이브러리를 만들것
Mapper 는 무엇 이냐면 피닉스 프로젝트에서 repository --> dataProvider --> sqlite --> series 에 있는데
Entity 랑 Provider 랑 엮어 준다.

쉽게 말해 Data Mapper라 함은 DB를 Repositry로 엑세스를 접근 하는 방식이다. models 대신에 

5. new Storage<Model1, Model2>() 이렇게 사용 할 수 있도록 하는 것이 목표이다.

6. 피닉스 프로젝트를 참고 하자면 해서 새로 만들자면
7. repository-library 가 되고 추상 클래스이고 인디펜던트 하게 만들어서 Kobo와 Toilino 프로젝트에서 사용 할 수 있게
8. dataProvider 이건 피닉스 프로젝트 참고 하자

-- repository
  -- books          엔티티
  -- categories     엔티티
  -- contributors   엔티티
  -- dataProvider   여기에 interface DataProvider 인터페이스가 있네
    DataProvider를 부연 설명을 하자면 sync(), findBooks<>(), GroupBy도 하고 remove, update, save 등등 도 하네

9. `Entities` can’t live ? 왜 안된다는 거지? probably need to go in the `models-enterprise-kobo`
10. selectors 발전 시키면 된다 Mappers 를 쓰는것 보다.
11. 새로 만들자 KoboDataProvider TypeORM 두가지를 쓸 수 있는 `EntityManager`/`Repository`
12. 그리고 새로운 configuration 는 reducer 와 같이 써서 `EntityManager` or `Repository` 를 사용 할 수 있게
13. 같은 방법으로 `configureStore` in `App.tsx` ? 그런데 이게 무슨 말이냐.




## 새로운 모듈을 만들기

package에 이름 만들고
{
    "name": "@pilot/service-orientation-controls",  <-- 이것이 모듈 이름이다.
    ...
}

모듈 인덱스에서  export { OrientationService }  <-- 이것이 코드에서 import 할 이름이다.

## 새로운 코드에서 모듈 사용법

import { OrientationService } from "@pilot/service-orientation-controls";
import UIButtonIcon from "@pilot/ui-button-icon";

render() {
  return(
    <View>
      ...
      <UIButtonIcon 
        onClick={OrientationService.lockOrientationPortrait}
        {...otherProps}
      />
    </View>
  )
}
