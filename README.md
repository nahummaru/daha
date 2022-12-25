# daha
DAHA is a college-specific platform facilitating peer-to-peer borrowing and selling. instead of just listing items for rent or sale, like a traditional marketplace app, students can also request items they need.

How to clone
Clone the repo

git clone https://github.com/betomoedano/ChatApp.git
cd into the just created project and install dependencies with yarn

cd ChatApp && yarn
Add your firebase backend config in the firebase.js file

const firebaseConfig = {
  apiKey: Constants.manifest.extra.apiKey,
  authDomain: Constants.manifest.extra.authDomain,
  projectId: Constants.manifest.extra.projectId,
  storageBucket: Constants.manifest.extra.storageBucket,
  messagingSenderId: Constants.manifest.extra.messagingSenderId,
  appId: Constants.manifest.extra.appId,
  databaseURL: Constants.manifest.extra.databaseURL
};
Run the project

expo start
