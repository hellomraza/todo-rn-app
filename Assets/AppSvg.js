import React from 'react';
import {Image} from 'react-native';

const imageURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVRIieWU0Q2AIAxEW+MYxH10EBave5w/xpAGrVhFie8PUnptDyB6C6x447p7yzIEAEwAJK0IBipOAIxpTlYCQkTBWbQw87AnYM78DMy85a3rwRP0uc20xRJyI25/RO0LZE220GYeXYr2R/RND0oeYvUOZiIKzl9V0oXuIOqAC8mj4/wfWQAGKV+3ppKiOQAAAABJRU5ErkJggg==';

const ArrowUpURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAdklEQVRIie2SQQqAMAwEN36szxEv4lPUi/pZ10vAUkppbPGUgVyadIdAAMf5FZJCUix/Bks4gBXAYZVUhZPc+HJ2kyThtxb1rU2SCZ9JjpHk+ya58KjXJimFWyWlK6LWIiJ72hSRC8CkM3Z0i1AxF7qfreM4Nh5/8LxQJVvBQQAAAABJRU5ErkJggg==';

const ArrowDownURL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAcUlEQVRIie2Puw2AMBQDHRZjnJSMAqlgWo6CIEFEIj5BNO9qy2dLhmH8B+CA9kKuBdyT8gDMQFfI+ZiZcpKm5JHkJPVnEsBLGmPmPvHFwMrhyW45pfWPJNXKE0nYSbby8Lo886TO8oKkfnki+abcMLIsXdC+QY2m3bcAAAAASUVORK5CYII=';

export const DateSVG = () => (
  <Image
    source={{
      uri: imageURL,
      width: 30,
      height: 30,
    }}
  />
);

export const ArrowUpSVG = () => (
  <Image
    source={{
      uri: ArrowUpURL,
      width: 30,
      height: 30,
    }}
  />
);

export const ArrowDownSVG = () => (
  <Image
    source={{
      uri: ArrowDownURL,
      width: 30,
      height: 30,
    }}
  />
);
