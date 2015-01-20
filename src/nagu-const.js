/**
 * Created by 文琪 on 2015/1/20.
 */
(function(window){
  if (window.Nagu){
    return window.Nagu;
  }

  function factory(){
    return {
      MType: {
        Resource:   0,
        Literal:    1,
        Statement:  2,
        Concept:    1025,
        ConceptDb:  1026
      },
      Owl: {
        InverseOf:          'a9288b7b-927d-4cdf-b561-2043701a5ba6',
        Class:              '280ab0ee-7fda-4d29-9a0e-eed7850fe3b2'
      },
      Rdf: {
        Bag:                'ada49e35-2c62-404e-b3df-db368149521f',
        Li:                 '028428d9-3470-47bb-abe1-5712bc047589',
        Type:               '4c5b16cd-d526-48cb-948e-250ce21facc8'
      },
      Rdfs: {
        Label: '5916eece-54b1-418f-bb52-8bbaf957da88',
        Comment: '57aa505c-f1d4-480d-907b-cb80c0ff7f75'
      },
      Meta: {
        True: '00000000-0000-0000-0001-000000000001',
        False: '00000000-0000-0000-0001-000000000002'
      },
      Concepts: {
        RdfType:            "4c5b16cd-d526-48cb-948e-250ce21facc8",
        OwlClass:           "280ab0ee-7fda-4d29-9a0e-eed7850fe3b2",
        NaguFormatString:   "0d83e5fd-eec0-4ea2-951e-38f13d57083f",
        PrivateObject:      "e4ee4b57-fb68-4762-b99a-668a152d3ac0",
        NaguConcept:        "ffb29350-2456-403b-857a-1577b533b8c5",
        NaguImage:          "2b97e831-9578-4b86-876b-eda87bc782c6",
        RdfRange:           '70bd1b5a-d2c0-4887-b483-7744eac5e7cf',
        User:               'a1dc1f11-371e-4e5b-84a9-0cd3cf40f049',
        Article:            'a345d7d6-9db5-4edd-86fe-a1df9dcdeb70',
        articleContent:     '6bef4f02-1d1d-4161-b017-0e9e4879883c',
        Literal:            '26a11dbc-f50a-480e-9ff4-7106f1af3fcb',
        SystemTypeBag: '76b2ba52-0f0c-4a76-b899-65e921092c28',  // “系统预定义类型”包
        App: 'f1933904-6bac-425b-abf8-c5f4032a380f', // 描述“应用”的类,
        HasInstancesProperty: '73858269-4f00-4b4f-bb70-905d2256e9a4', // 描述“实例包含的属性”的谓词
        Remark: '118efcc0-949a-4d6f-aa9d-64372eca9267' // 谓词，描述“备注”
      },
      Contact: {
        Group: '468b71db-f689-47bd-b624-823daa918ecf', // 谓词，联系人群组
        BelongsTo: '1ea23591-6d15-4dfb-b32d-3314f60a0a0b',
        SubGroup: 'd5061aa6-c58d-4369-a8c0-9b7fa8825e67',
        Email: '653a0707-2e03-4e93-937f-6168ddcc6723',
        Class: '5d9a1f44-ab0e-47e0-bb92-ba8b47f5aa42', // 类，联系人
        CellPhoneNum: 'bd640461-41d2-4009-862e-0ebcd2d77b2c', // 谓词，手机号码
        OfficeNum: '282c7749-1d94-41d2-afa0-45ca4e61b87d', // 谓词，办公号码
        PrimaryNum: '1044d41f-6c2e-4f4f-a2fb-0c6be306f18a' // 谓词，首要号码
      },
      Article: {
        Content: '6bef4f02-1d1d-4161-b017-0e9e4879883c',
        Url: ''
      },
      App: {
        Manager: '18567b72-f23a-4845-b40a-fc1886a7277f',
        Public: '00000000-0000-0000-0000-000000000000'
      },
      Image: {
        Url: 'ac6dc594-20b3-4f94-b628-a3a098c49308'
      },
      User: {
        Favorite: '985902bb-34a5-454a-b4be-8771d511635b',
        FavoriteGroup: '56b10810-7ffd-4e39-925b-bf270544624c',
        HasPicture: '64e11d2c-5ee3-4d22-ac8c-0043d8c69263',
        Profile: 'a1dc1f11-371e-4e5b-84a9-0cd3cf40f049'
      },
      Jiapu: {
        JiazuClass: '796fb149-fd45-48af-92da-6a5aad1b1cbf', // 家族类
        JiazuChengyuanClass: "d419ca8c-257f-4830-96b8-324e51a1d15b", // 家族成员类
        HasFather: "6235da69-f802-4e4c-8eab-866bf1daf653",  // "父亲"谓词的ID：
        HasMother: "762ee3bd-f14b-4253-a05e-d9b6782911c3",  // “母亲”谓词的ID
        Gender: "6edc6734-4d59-4f97-a877-87a58777f45a",     // “性别”谓词的Id
        BirthYear: "9ed1afef-a804-417c-a528-3d27d457db17",  // “出生年份”谓词的ID
        SuoZaiJiaZu: "65299f7f-18a5-403a-a555-3dc726749991", // “所在家族”谓词的ID
        Male: "96dd894c-a6da-4562-b9e9-f85fcca96463",
        Female: "abcc829a-0a02-412b-9dc4-3ed259b1894a",
        PicUrl: '3d512374-f87d-46f9-bad6-2d81fdbbe440',
        PaiHang: '184e59a9-0fc7-44c1-b734-cbbea1d5a715', // 排行
        HasMate: 'bf913684-7ac6-4324-9578-828e5a13b457' // 配偶
      },
      PublicApp: '00000000-0000-0000-0000-000000000000',
      hosts: [
        //'nagu.cc'
        //'api0.nagu.cc',
        //'api1.nagu.cc',
        //'api2.nagu.cc',
        //'api3.nagu.cc',
        //'api4.nagu.cc',
        //'api5.nagu.cc'
        'ngapi.ynu.edu.cn'
      ],
    readOnlyHosts: [
      'ngapi.ynu.edu.cn'
    ],
      loggedHosts: [],
      commonOption: {
        saidBy: '',
        appId: '',
        host: Nagu.hosts[0],
        flush: false,
        useLocalStorage: true,
        useCache: true,
        keys: '',
        pageIndex: 0,
        pageSize: 99999999999
      },
    Helper:
    {
      crossAjaxWithCookie: function (url, data) {
        var dtd = $.Deferred();

        $.ajax(url, {
          type: 'POST',
          crossDomain: true,
          xhrFields: {
            withCredentials: true
          },
          data: data,
          traditional: true,
          success: function (result) {
            if (result.ret == 0) {
              dtd.resolve(result.data);
            } else {
              dtd.reject(result);
            }
          },
          error: function (a, b, c) {
            dtd.resolve({
              ret: -1,
              msg: '网络通信异常'
            });
          }
        });
        return dtd.promise();
      },
      saveToStorage: function (key, value, ttl) {
        if (!ttl) {
          // 默认存储时间为3天，为避免同时刷新，增加2个小时之内的随机时间
          ttl = 259200000 + 7200000 * Math.random()
        }
        if ($.jStorage && $.jStorage.storageAvailable()) {
          $.jStorage.set(key, value, {
            TTL: ttl
          });
        }
      },

      // returns the value for a key or undefined if the key was not found.
      getFromStorage: function (key) {
        if ($.jStorage && $.jStorage.storageAvailable()) {
          return $.jStorage.get(key, null);
        } else {
          return null;
        }
      }
    }

    }
  }


  if ("function" === typeof define && (define.cmd || define.amd)){
    define(function(require, exports, module){
      module.exports = factory();
    });
  } else {
    window.Nagu = factory()
  }
})(this);
