YL.static = {
  /** “关于”信息 */
  softwareName: 'Windows 10 Pro Max', //网站名。请在此处填写您自己的网站名
  version: "2.0.0", // 网站版本号
  iconBtnStart: 'windows', //主图标
  author: '程鹏',//作者
  contactInformation: 'QQ: 2943871928',//联系方式
  officialWebsite: 'https://cpddd.tk',//软件官网
  welcome: '本网站UI由 CP 强力驱动\n更多信息：cpddd.tk',//加载完毕控制台提示信息
  copyrightDetail: 'CopyRight©Chengpeng',//版权详细信息
  otherStatements: '网站开发',//其他信息（可留空）

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** 基础设置 */
  lang: 'zh-cn', //语言
  localStorageName: "ylui-storage", //ls存储名
  lockedApps: [''], // 锁定的应用（不允许被脚本修改）
  trustedApps: ['yl-server'], // 受信任的应用（可以使用敏感API）
  debug: false,//启用更多调试信息
  beforeOnloadEnable: false,//启用关闭前询问（打包app时请关闭防止出错）
  WarningPerformanceInIE: true,//在IE下提示体验不佳信息
  languages: {}, //推荐留空，自动从文件加载
  changeable: true,//存档数据是否可被普通用户修改
  dataCenter: true,//是否展示数据管理中心

  /**————————————————————————————————————————————————————————————————————————————————————————————*/
  /** 注册信息 */
  authorization: '正版',//授权类型
  serialNumber: 2943871928,//序列号

};
