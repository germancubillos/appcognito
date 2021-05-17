import './App.css';
import Amplify, { Auth } from 'aws-amplify';
import { withAuthenticator, AmplifySignOut, AmplifyAuthenticator, AmplifySignUp  } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { I18n } from '@aws-amplify/core';
import { dict } from './AmplifyI18n';
import Background from './Images/wallpaper.jpg'

Amplify.configure(awsconfig);
function App() {
  
  return(
    <div className="App" slot="sign-in" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: `url(${Background})`,
      backgroundSize: '1400px 800px'
    }}>
    <AmplifyAuthenticator>
    <AmplifySignUp
          slot="sign-up"
          formFields={[
            { type: "username" },
            {
              type: "password",
              label: "Custom Password Label",
              placeholder: "custom password placeholder"
            },
            { type: "email" }
          ]} 
        />
      <AmplifySignOut />
    </AmplifyAuthenticator >
    </div>
  )
}

I18n.putVocabularies(dict);

export default App;


