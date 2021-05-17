import logo from './logo.svg';
import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { I18n } from '@aws-amplify/core';
import { dict } from './AmplifyI18n';

Amplify.configure(awsconfig);
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AmplifySignOut />
      <h2>My App</h2>
      </header>
    </div>
  );
}

I18n.putVocabularies(dict);

export default withAuthenticator(App);
