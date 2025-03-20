export default {
  layout: {
    // type: 'horizontal', // horizontal vertical mix
    // 自定义menu加载器
    // menuLoader() {
    //   return [];
    // },
    menuFilter(node) {
      console.log(node);
      return true
    },
  },
  hooks: {
    // 加载完project 配置后，可以对projectConfig进行修改
    afterLoadProjectConfig(projectConfig) {
      projectConfig.haha = '12345';
    },
  },
};
