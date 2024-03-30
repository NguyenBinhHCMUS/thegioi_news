export const path = {
  home: '/',
  users: '/users',
  devices: '/devices',
  list: '/list',
  profile: '/users/profile',
  settings: '/users/settings',
  account: '/account',
  changePassword: '/user/password',
  login: '/login',
  register: '/register',
  logout: '/logout',
  carManagement: '/car-management',
  follow: '/follow',
  routing: '/routing',
  online: '/online',
  findWay: '/find-way',
  report: '/report',
  imageMonitoring: '/image-monitoring',
  traffic: '/traffic',
  enterprice: '/enterprice',
  camera: '/camera',
  liveCamera: '/live-camera',
  driver: '/driver',
  storageVideo: '/storage-camera'
} as const

export const pathServices = {
  home: {
    path: path.home,
    title: 'Giám sát'
  },
  carManagement: {
    path: path.carManagement,
    title: 'Quản lý xe'
  },
  follow: {
    path: path.follow,
    title: 'Theo dõi'
  },
  users: {
    path: path.users,
    title: 'users'
  },
  devices: {
    path: path.devices,
    title: 'devices'
  },
  usersList: {
    path: `${path.users}${path.list}`,
    title: 'list'
  },
  profile: {
    path: path.profile,
    title: 'profile'
  },
  settings: {
    path: path.settings,
    title: 'user settings'
  },
  account: {
    path: path.account,
    title: 'Tài khoản'
  },
  report: {
    path: path.report,
    title: 'Báo cáo QC31/2014'
  },
  imageMonitoring: {
    path: path.imageMonitoring,
    title: 'Giám sát hình ảnh'
  },
  routeOnline: {
    path: `${path.routing}${path.online}`,
    title: 'Lộ trình trực tuyến'
  },
  findWay: {
    path: `${path.routing}${path.findWay}`,
    title: 'Tìm đường'
  },
  trafficReport: {
    path: `${path.report}${path.traffic}`,
    title: 'Báo cáo Bộ giao thông'
  },
  enterpriseReport: {
    path: `${path.report}${path.enterprice}`,
    title: 'Báo cáo Doanh nghiệp'
  },
  liveCamera: {
    path: `${path.camera}${path.liveCamera}`,
    title: 'live monitoring'
  },
  driver: {
    path: path.driver,
    title: 'driver'
  },
  storageVideo: {
    path: `${path.camera}${path.storageVideo}`,
    title: 'camera storage'
  }
}

export default path
