# Build app 
- npm i or yarn install
- jump to node_modu/react-native-swiper/src/index
import on line below 15 and change ViewPagerAndroid => ViewPager
```
import ViewPager from "@react-native-community/viewpager";
```
- react-native run-....
# build store key
- jump to android/app  and new terminal .
- keytool -genkey -v -keystore mykeystore.keystore -alias mykeyalias -keyalg RSA -keysize 2048 -validity 10000
- android/gradle.properties
```
MYAPP_RELEASE_STORE_FILE=mykeystore.keystore
MYAPP_RELEASE_KEY_ALIAS=mykeyalias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```
