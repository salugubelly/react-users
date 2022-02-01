import UserList from "./Users/UserList/UserList";
import UserInfo from "./Users/UserInfo/UserInfo";
import styles from './App.module.css';

function App()
{
    return (
      <div className={styles.root}>
          <UserList></UserList>
          <UserInfo></UserInfo>
      </div>
  );
}

export default App;
