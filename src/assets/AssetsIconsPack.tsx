import React from 'react';
import {Image, ImageProps, ImageSourcePropType, StyleSheet} from 'react-native';
import {IconPack, IconProvider} from '@ui-kitten/components';
import {SvgProps} from 'react-native-svg';
import {Icons} from './icons';

const createIcon = (source: ImageSourcePropType): IconProvider<ImageProps> => {
  return {
    toReactElement: props => (
      <Image
        style={styles.icon}
        {...props}
        source={source}
        resizeMode="cover"
      />
    ),
  };
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const AssetsIconsPack: IconPack<ImageProps | SvgProps> = {
  name: 'assets',
  icons: {
    fb: createIcon(Icons.fb),
    logo: createIcon(Icons.logo),
    'arrow-back': createIcon(Icons['arrow-back']),
    google: createIcon(Icons.google),
    apple: createIcon(Icons.apple),
    location: createIcon(Icons.location),
    'right-play': createIcon(Icons['right-play']),
    'left-play': createIcon(Icons['left-play']),
    eye: createIcon(Icons.eye),
    'close-eye': createIcon(Icons['close-eye']),
    'face-id': createIcon(Icons['face-id']),
    'arrow-left': createIcon(Icons['arrow-left']),
    'arrow-right': createIcon(Icons['arrow-right']),
    user: createIcon(Icons.user),
    lock: createIcon(Icons.lock),
    email: createIcon(Icons.email),
    close: createIcon(Icons.close),
    cc: createIcon(Icons.cc),
    passport: createIcon(Icons.passport),
    'face-detection': createIcon(Icons['face-detection']),
    home: createIcon(Icons.home),
    bag: createIcon(Icons.bag),
    settings: createIcon(Icons.settings),
    logout: createIcon(Icons.logout),
    message: createIcon(Icons.message),
    flame: createIcon(Icons.flame),
    'shape-close': createIcon(Icons['shape-close']),
    'white-logo': createIcon(Icons['white-logo']),
    'arrow-top': createIcon(Icons['arrow-top']),
    arrow_right: createIcon(Icons.arrow_right),
    search: createIcon(Icons.search),
    portfolios: createIcon(Icons.portfolios),
    'home-menu': createIcon(Icons.home_menu),
    'settings-menu': createIcon(Icons.settings_menu),
    'message-menu': createIcon(Icons.message_menu),
    'logout-menu': createIcon(Icons.logout_menu),
    'profile-menu': createIcon(Icons.profile_menu),
    more: createIcon(Icons.more),
    features: createIcon(Icons.features),
    page: createIcon(Icons.page),
    instagram: createIcon(Icons.instagram),
    twitter: createIcon(Icons.twitter),
    'extra-shop': createIcon(Icons.extra_shop),
    'short-code': createIcon(Icons.short_code),
    'portfolios-menu': createIcon(Icons.portfolios_menu),
    'outline-setting': createIcon(Icons['outline-setting']),
    notification: createIcon(Icons.notification),
    phone: createIcon(Icons.phone),
    information: createIcon(Icons.information),
    'warning-mess': createIcon(Icons['warning-mess']),
    option: createIcon(Icons.option),
    wishlist: createIcon(Icons.wishlist),
    'small-location': createIcon(Icons['small-location']),
    'credit-card': createIcon(Icons['credit-card']),
    order: createIcon(Icons.order),
    searchBottom: createIcon(Icons.searchBottom),
    heart: createIcon(Icons.heart),
    filter: createIcon(Icons.filter),
    profile: createIcon(Icons.profile),
    award: createIcon(Icons.award),
    call: createIcon(Icons.call),
    mess: createIcon(Icons.mess),
    stethoscope: createIcon(Icons.stethoscope),
    personal: createIcon(Icons.personal),
    burn: createIcon(Icons.burn),
    combined: createIcon(Icons.combined),
    tree: createIcon(Icons.tree),
    'ear-piece': createIcon(Icons['ear-piece']),
    'heart-beat': createIcon(Icons['heart-beat']),
    medicine: createIcon(Icons.medicine),
    doctor: createIcon(Icons.doctor),
    bookmark: createIcon(Icons.bookmark),
    'cup-of-tea': createIcon(Icons['cup-of-tea']),
    car: createIcon(Icons.car),
    health: createIcon(Icons.health),
    drink: createIcon(Icons.drink),
    food: createIcon(Icons.food),
    travel: createIcon(Icons.travel),
    ladder: createIcon(Icons.ladder),
    upload: createIcon(Icons.upload),
    repeat: createIcon(Icons.repeat),
    rewind: createIcon(Icons.rewind),
    play: createIcon(Icons.play),
    forward: createIcon(Icons.forward),
    pause: createIcon(Icons.pause),
    shuffle: createIcon(Icons.shuffle),
    smile: createIcon(Icons.smile),
    back: createIcon(Icons.back),
    share: createIcon(Icons.share),
    glueco: createIcon(Icons.glueco),
    edit: createIcon(Icons.edit),
    weight: createIcon(Icons.weight),
    plus: createIcon(Icons.plus),
    add: createIcon(Icons.add),
    card: createIcon(Icons.car),
    breakfast: createIcon(Icons.breakfast),
    cart: createIcon(Icons.cart),
    calendar: createIcon(Icons.calendar),
    scan: createIcon(Icons.scan),
    splitung: createIcon(Icons.splitung),
    maps: createIcon(Icons.maps),
    desc: createIcon(Icons.desc),
    camera: createIcon(Icons.camera),
    trash: createIcon(Icons.trash),
    'bookmark-outline': createIcon(Icons['bookmark-outline']),
    'play-music': createIcon(Icons['play-music']),
    'setting-outline': createIcon(Icons['setting-outline']),
    'my-location': createIcon(Icons['my-location']),
  },
};
export default AssetsIconsPack;
