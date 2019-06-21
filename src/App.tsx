
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createConnection, getRepository, getManager } from 'typeorm/browser';


import { Author } from './entities/author';
import { Category } from './entities/category';
import { Post } from './entities/post';

import { test } from './entities/test'
import { base } from '../ormconfig';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

interface AppProps {

}

interface AppState {
  progress: string;
  loadedTest: Post | null;
  savedPost: boolean
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = { savedPost: false, progress: 'Post is being saved', loadedTest: null };
    this.runDemo();

    
  }

  componentDidMount() {
    // console.log(base.entities);
    console.log('componentDidMount');
    console.log(JSON.stringify(base.entities) );

    // const tt =  createConnection();
    // console.log('qqqqqqq');
    // console.log(tt);

  }

  // connect() {
  //   return createConnection().then(connection => {
  //       console.log('connection: 1111111111111111111' + (connection) )
  //   }).catch(error => console.log(error));
  // }

  // async manager() {
  //   console.log('#######################################');
  //   console.log('manager'); 
  //   console.log(this.connectionName);
  //   console.log('#######################################');
  //   const entityManager = getManager(this.connectionName);

  //   // console.log(entityManager);

  //   const testEntity = await entityManager.findOne(test, 1);
  //   testEntity.email = 'dave@kobo.com';
  //   await testEntity.save(test);

  //   console.log('testEntity')
  //   console.log(testEntity.email)
  // }

  connect() {
    return createConnection({
      type: base.type,
      database: base.database,
      location: base.location,
      // location: 'default',
      // (SQLite 에서만 적용가능)createFromLocation: '~www/1TestDB.db', 여기서는 작동을 안한다. SQLite.open~~ 에서만 설정 가능 하네..
      // 그래서 iOS 에서는 디버깅 모드에서 DB 저장 되는 경로를 볼 수 있다. 
      // 그런데 android는 알 수가 없네.

      logging: ['error', 'query', 'schema'],
      // logging: false,
      synchronize: true,
      // entities: [
      //   "./entities/*.ts"
      // ]
      // entities: ["./entities/*.ts"],
      entities: base.entities
      // entities: [
      //   Author,
      //   Category,
      //   Post
      // ]
    }).then(connection => {
      console.log('connection: 1111111111111111111')
    }).catch(error => console.log(error));
  }


  // connect() {
  //   return createConnection({
  //     type: 'react-native',
  //     database: 'test.db',
  //     location: '/data/mydbfile.sqlite',
  //     createFromLocation : "~www/test.db",
  //     logging: ['error', 'query', 'schema'],
  //     // logging: false,
  //     synchronize: true,
  //     entities: [
  //       Author,
  //       Category,
  //       Post
  //     ]
  //   });
  // }

  async runDemo() {
    await this.connect();

    const test1 = new test();
    test1.name = "TypeScript22";
    test1.age = 11;
    test1.email = "abc@abc.com";

    // const category2 = new Category();
    // category2.name = "Programming";
1
    // const author = new Author();
    // author.name = "Person";

    // const post = new Post();
    // post.title = "Control flow based type analysis";
    // post.text = "TypeScript 2.0 implements a control flow-based type analysis for local variables and parameters.";
    // post.categories = [category1, category2];
    // post.author = author;


    // Repository 는 EntityManager 와 비슷한데  Repository concrete entity 의 기능이 제한 되어 있다고 한다.
    // 그런데 무슨 소리야???
    const testRepository = getRepository(test);
    await testRepository.save(test1);

    // const testRepository = getManager();
    // await testRepository.save(test1);
    // console.log('testRepository');
    // console.log(testRepository)

    // console.log("Post has been saved");
    // this.setState({
    //   progress: "Post has been saved"
    // });

    // const loadedTest = await testRepository.findOne({where: {id: test1.id}, relations: ["author", "categories"]});
    const loadedTest = await testRepository.findOne({ where: { id: test1.id } });
    // const loadedTest = await testRepository.findOne({where: {id: 1}});

    if (loadedTest) {
      console.log("Post has been loaded: ", loadedTest);
      this.setState({
        loadedTest: loadedTest
      });
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the React Native Example for TypeORM
        </Text>
        <Text style={styles.small}>
          {this.state.progress}
        </Text>
        <Text style={styles.small}>
          {JSON.stringify(this.state.loadedTest)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  small: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
