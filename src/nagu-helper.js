﻿


/****************************************************基础类:Nagu******************************************************************/

function Nagu() { }
Nagu.MType = {
  Resource:   0,
  Literal:    1,
  Statement:  2,
  Concept:    1025,
  ConceptDb:  1026
};
Nagu.Meta = {
  True: '00000000-0000-0000-0001-000000000001',
  False: '00000000-0000-0000-0001-000000000002'
}
Nagu.Concepts = {
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
};

Nagu.Contact = {
  Group: '468b71db-f689-47bd-b624-823daa918ecf', // 谓词，联系人群组
  BelongsTo: '1ea23591-6d15-4dfb-b32d-3314f60a0a0b',
  SubGroup: 'd5061aa6-c58d-4369-a8c0-9b7fa8825e67',
  Email: '653a0707-2e03-4e93-937f-6168ddcc6723',
  Class: '5d9a1f44-ab0e-47e0-bb92-ba8b47f5aa42', // 类，联系人
  CellPhoneNum: 'bd640461-41d2-4009-862e-0ebcd2d77b2c', // 谓词，手机号码
  OfficeNum: '282c7749-1d94-41d2-afa0-45ca4e61b87d', // 谓词，办公号码
  PrimaryNum: '1044d41f-6c2e-4f4f-a2fb-0c6be306f18a' // 谓词，首要号码
}

Nagu.Article = {
  Content: '6bef4f02-1d1d-4161-b017-0e9e4879883c',
  Url: ''
};

Nagu.Owl = {
  InverseOf:          'a9288b7b-927d-4cdf-b561-2043701a5ba6',
  Class:              '280ab0ee-7fda-4d29-9a0e-eed7850fe3b2'
};
Nagu.Rdf = {
  Bag:                'ada49e35-2c62-404e-b3df-db368149521f',
  Li: '028428d9-3470-47bb-abe1-5712bc047589',
  Type: "4c5b16cd-d526-48cb-948e-250ce21facc8"
};
Nagu.Rdfs = {
  Label: '5916eece-54b1-418f-bb52-8bbaf957da88',
  Comment: '57aa505c-f1d4-480d-907b-cb80c0ff7f75'
};

Nagu.App = {
  Manager: '18567b72-f23a-4845-b40a-fc1886a7277f',
  Public: '00000000-0000-0000-0000-000000000000'
}

Nagu.Image = {
  Url: 'ac6dc594-20b3-4f94-b628-a3a098c49308'
};

Nagu.User = {
  Favorite: '985902bb-34a5-454a-b4be-8771d511635b',
  FavoriteGroup: '56b10810-7ffd-4e39-925b-bf270544624c',
  HasPicture: '64e11d2c-5ee3-4d22-ac8c-0043d8c69263',
  Profile: 'a1dc1f11-371e-4e5b-84a9-0cd3cf40f049'
};

Nagu.Jiapu = {
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
};

Nagu.PublicApp = '00000000-0000-0000-0000-000000000000';

Nagu.hosts = [
  //'nagu.cc'
  //'api0.nagu.cc',
  //'api1.nagu.cc',
  //'api2.nagu.cc',
  //'api3.nagu.cc',
  //'api4.nagu.cc',
  //'api5.nagu.cc'
  'ngapi.ynu.edu.cn'
];
Nagu.readOnlyHosts = [
  'ngapi.ynu.edu.cn'
];

Nagu.loggedHosts = [];

Nagu.commonOption = {
  saidBy: '',
  appId: '',
  host: Nagu.hosts[0],
  flush: false,
  useLocalStorage: true,
  useCache: true,
  keys: '',
  pageIndex: 0,
  pageSize: 99999999999
};

Nagu.Helper =
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
};

Nagu.init = function (options) {

  // Extend our default options with those provided.
  //var opts = $.extend(defaults, options);

  //// 确保页面上有iframe
  //if (opts.useIframe && opts.iframeId == '') {
  //    opts.iframeId = 'pmIframe' + randomInt();
  //    var iframe = $('<iframe style="width: 0px; height: 0px; display: none; overflow: hidden;" src="http://nagu.cc/apps/pmproxy.html"></iframe>');
  //    iframe.attr('id',opts.iframeId).appendTo($('body'));
  //}
  //// 初始化messenger
  //if (opts.useIframe) {
  //    Nagu.Messenger = Messenger.initInParent(document.getElementById(opts.iframeId));
  //}
  Nagu.CM = new ConceptManager(Nagu.commonOption);
  Nagu.SM = new StatementManager(Nagu.commonOption.host);
  Nagu.MM = new MemberManager(Nagu.commonOption.host);
  Nagu.DialogM = new DialogManager();
  Nagu.SayM = new SayManager();
  Nagu.AppM = new AppManager();
};
Nagu.init();

/****************************************************本地缓存数据函数******************************************************************/
// 缓存Morpheme数据，
/*
 Morphemes[MorphemeId]：Morpheme的JSON对象；
 */
var Morphemes = new Array();


// 用于缓存said状态:
var Saids = new Array();

/* 缓存find结果：
 Statements['sub_xxxx_pre_xxxx_obj_xxx']: 分别指定ID查询到的结果。
 */
var Statments = new Array();


// 用于缓存从类型中取得的数据
var PvsFromBaseClass = new Array();





/*******Said操作******************************************************************************************************************/

function SayManager(host) {
  if (host == null || host === undefined) this.host = "";
  else this.host = host;
}
SayManager.SaidCache = new Array();
SayManager.prototype.say = function (statementId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.commonOption.host + "/StatementApi/Say/" + statementId, {
    dataType: 'jsonp',
    success: function (data) {
      SayManager.SaidCache[statementId] = data;
      dtd.resolve(data);
    }
  });
  return dtd.promise();
};
SayManager.prototype.dontSay = function (statementId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.commonOption.host + "/StatementApi/DontSay/" + statementId, {
    dataType: 'jsonp',
    success: function (data) {
      SayManager.SaidCache[statementId] = data;
      dtd.resolve(data);
    }
  });
  return dtd.promise();
};
SayManager.prototype.status = function (statementId) {
  var dtd = $.Deferred();
  if (SayManager.SaidCache[statementId] === undefined) {
    $.ajax('http://' + Nagu.commonOption.host + "/StatementApi/GetSaidStatus/" + statementId, {
      dataType: 'jsonp',
      success: function (data) {
        SayManager.SaidCache[statementId] = data;
        dtd.resolve(data);
      },
      error: function (a, b, c) {
        dtd.reject();
        log('SayM.status error');
      }
    });
  } else {
    dtd.resolve(SayManager.SaidCache[statementId]);
  }
  return dtd.promise();
};
SayManager.prototype.saidBy = function (statementId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.commonOption.host + '/statementApi/SaidBy/' + statementId,
    {
      dataType:'jsonp',
      success: function (data) {
        if (data.ret == 0) {
          dtd.resolve(data.users);
        } else {
          dtd.reject();
        }
      },
      error: function (a, b, c) {
        dtd.reject();
      }
    });
  return dtd.promise();
};




/***Concept操作*****************************************************************************************************************************/

function ConceptManager(options) {
  var defaults = {
    host: "",
    iframeId: '',
    useIframe: false
  };
  // Extend our default options with those provided.
  this.opts = $.extend(defaults, options);
  this.host = this.opts.host;
  if (this.opts.useIframe && this.opts.iframeId == '') {
    this.opts.iframeId = 'pmIframe' + randomInt();
    var iframe = $('<iframe style="width: 0px; height: 0px; display: none; overflow: hidden;" src="http://nagu.cc/apps/pmproxy.html"></iframe>');
    iframe.attr('id', this.opts.iframeId).appendTo($('body'));
  }


}
ConceptManager.ConceptCache = new Array();

ConceptManager.send = function (message, iframeId) {
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象

  // 初始化messenger
  if (Nagu.Messenger === undefined) {
    Nagu.Messenger = Messenger.initInParent(document.getElementById(iframeId));
  }

  // 接收数据
  var callback = function (message) {
    /*
     message格式：
     message.url: 将被post的地址；
     message.data: 将被post的数据；
     message.result: post返回的数据
     message.done: 执行状态，true：成功，false：失败.
     */
    if (message.done) {
      dtd.resolve(message);
    } else {
      dtd.reject(message);
    }
  };

  if (window.detachEvent) {
    window.detachEvent('onmessage', obj['messagecallback']);
    window['messagecallback'] = null;
  } else
    window.removeEventListener('message', callback, false);
  Nagu.Messenger.onmessage = callback;


  Nagu.Messenger.send(message);

  return dtd.promise();
};

// 获取概念信息
ConceptManager.prototype.get = function (id, options) {
  options = $.extend(Nagu.commonOption, options);
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  if (id === undefined) {
    log('CM.get error: id is not undefined');
    dtd.reject();
    return dtd.promise();
  }
  var result = ConceptManager.getCachedConcept(id);
  if (options.flush) result = undefined;

  if (result === undefined || result == null) {
    $.ajax('http://'+options.host + "/ConceptApi/Get/" + id, {
      dataType: 'jsonp',
      success: function (concept){
        ConceptManager.setCachedConcept(concept);
        dtd.resolve(concept);
      },
      error: function(a,b,c){
        dtd.reject();
      },
      type: 'post'
    });
  }
  else {
    dtd.resolve(ConceptManager.getCachedConcept(id));
  }
  return dtd.promise(); // 返回promise对象
}

ConceptManager.prototype.create = function (fn, desc, options) {
  // Extend our default options with those provided.
  var opts = $.extend(Nagu.commonOption, options);


  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  if (opts.id === undefined || opts.id == null || opts.id == "") {
    $.ajax('http://' + Nagu.loggedHosts[0] + "/ConceptApi/Create/", {
      data: {
        fn: fn,
        desc: desc,
        appId: opts.appId,
        typeId: opts.typeId
      },
      dataType: 'jsonp',
      success: function (c) {
        ConceptManager.setCachedConcept(c);
        dtd.resolve(c);
      },
      error: function (a, b, c) {
        alert('ConceptManager.create失败'); dtd.reject();
      }
    });
  } else {
    $.ajax('http://' + Nagu.loggedHosts[0] + "/ConceptApi/Create/" + opts.id, {
      data: {
        fn: fn,
        desc: desc,
        appId: opts.appId
      },
      dataType: 'jsonp',
      success: function (c) {
        ConceptManager.setCachedConcept(c);
        dtd.resolve(c);
      },
      error: function (a,b,c) { dtd.reject(); }
    });
  }
  return dtd.promise(); // 返回promise对象
};


ConceptManager.prototype.addRdfType = function (conceptId, typeId, options) {
  // Extend our default options with those provided.
  var opts = $.extend(Nagu.commonOption, options);

  var dtd = $.Deferred();
  $.ajax('http://' + opts.host + "/MorphemeApi/AddRdfType/" + conceptId, {
    data: {
      stype: Nagu.MType.Concept,
      typeId: typeId,
      appId: opts.appId
    },
    dataType: 'jsonp',
    success: function (data) {
      dtd.resolve(data);
    },
    error: function (a, b, c) {
      dtd.reject();
    }
  });
  return dtd.promise();
};

// 为Concept添加一个类型为Concept的属性值
ConceptManager.prototype.addConceptPropertyValue = function (subject, stype, propertyId, objectFn, objectId, options) {

  // Extend our default options with those provided.
  var opts = $.extend(Nagu.commonOption, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var sm = new StatementManager();
  if (objectId != "" && objectId != null) {
    return sm.create(subject, stype, propertyId, objectId, Nagu.MType.Concept);
  }
  else if (objectFn != "") {
    if (window.confirm("还未选定一个Concept作为值，您可以返回重新搜索Concept，或创建新的Concept作为值。\r\n您确定要创建名称为“" + objectFn + "”的新的Concept并作为值吗？")) {
      var objectDesc = prompt("请输入关于\"" + objectFn + "\"的描述信息：");
      this.create(objectFn, objectDesc).done(function (newc) {
        sm.create(subject, stype, propertyId, newc.ConceptId, Nagu.MType.Concept, opts.appId).done(function (fs) { dtd.resolve(fs); });
      });
    }
    return dtd.promise();
  }
};

// 为Concept添加一个类型为Concept的属性值，新的。
ConceptManager.prototype.addConceptPropertyValue2 = function (subject, propertyId, objectId, options) {
  var defaults = {
    appId: ''
  };
  // Extend our default options with those provided.
  var opts = $.extend(defaults, options);

  return Nagu.SM.create(subject, Nagu.MType.Concept, propertyId, objectId, Nagu.MType.Concept, opts.appId);

};

// 为Concept添加一个类型为Concept的属性值，新的,v3。
ConceptManager.prototype.addConceptPv = function (subject, propertyId, objectId, options) {
  // Extend our default options with those provided.
  var opts = $.extend(Nagu.commonOption, options);

  return Nagu.SM.create(subject, Nagu.MType.Concept, propertyId, objectId, Nagu.MType.Concept, opts.appId);

};

// 为Concept添加一个类型为Literal的属性值
ConceptManager.prototype.addLiteralPropertyValue = function (subject, propertyId, object, options) {
  // Extend our default options with those provided.
  var opts = $.extend(Nagu.commonOption, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var sm = new StatementManager();
  sm.create(subject, Nagu.MType.Concept, propertyId, object, Nagu.MType.Literal, opts.appId).done(function (fs) {
    dtd.resolve(fs);
  });
  return dtd.promise();
};

ConceptManager.prototype.flush = function (conceptId) {
  ConceptManager.removeCachedConcept(conceptId);
}

ConceptManager.prototype.getPropertiesAndValues = function (conceptId, options) {
  // Extend our default options with those provided.
  var opts = $.extend(Nagu.commonOption, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  return $.ajax('http://'+ opts.host + '/MorphemeApi/GetPropertiesAndValues', {
    dataType: 'jsonp',
    data: {
      subjectId: conceptId,
      appId: opts.appId
    },
    success: function (pvs) {
      dtd.resolve(pvs);
    },
    error: function (a, b, c) {
      dtd.reject();
    }
  });
  return dtd.promise();
};

ConceptManager.prototype.addProperty = function (conceptId, propertyId, options) {
  // Extend our default options with those provided.
  var opts = $.extend(Nagu.commonOption, options);

  return $.ajax('http://'+Nagu.commonOption.host+'/MorphemeApi/AddProperty/' + conceptId, {
    data: {
      stype: Nagu.MType.Concept,
      propertyId: propertyId,
      appId: opts.appId
    },
    dataType: 'jsonp'
  });
};

ConceptManager.prototype.format = function (conceptId) {
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  this.isImage(conceptId).done(function (isImage) {
    if (isImage) {
      return '<img src="{ac6dc594-20b3-4f94-b628-a3a098c49308}" />';
    } else {
      $.post('/ConceptApi/GetFormatString/' + conceptId);
    }
  });
};


ConceptManager.prototype.isImage = function (conceptId) {
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  $.post('/ConceptApi/IsInstanceOf/' + conceptId, {
    typeId: Nagu.Concepts.NaguImage
  }).done(function (data) {
    dtd.resolve(data.isInstanceOf);
  });
  return dtd.promise();
};

ConceptManager.PropertyAndValues = [];
ConceptManager.prototype.getPropertyValues = function (conceptId, propertyId, options) {
  var opts = $.extend(Nagu.commonOption, options);

  var dtd = $.Deferred();

  if (opts.flush) ConceptManager.PropertyAndValues[conceptId + propertyId] = undefined;

  if (ConceptManager.PropertyAndValues[conceptId + propertyId] !== undefined)
    dtd.resolve(ConceptManager.PropertyAndValues[conceptId + propertyId]);
  else {
    $.ajax('http://' + opts.host + "/MorphemeApi/GetPropertyValues/", {
      dataType: 'jsonp',
      success: function (fss) {
        ConceptManager.PropertyAndValues[conceptId + propertyId] = fss;
        dtd.resolve(fss);
      },
      error: function (a, b, c) {
        dtd.reject();
      },
      type: 'post',
      data: {
        subjectId: conceptId,
        propertyId: propertyId,
        appId: opts.appId
      }
    });
  }
  return dtd.promise();

}

ConceptManager.prototype.search = function (fn, options) {
  var defaults = {
    typeId: '',
    exact: true
  };
  var opts = $.extend(defaults, options);
  return $.jsonp({
    url: 'http://' + Nagu.hosts[parseInt(Math.random() * Nagu.hosts.length)] + '/ConceptApi/Search/?callback=?',
    data: {
      term: fn,
      typeId: opts.typeId,
      exact: opts.exact
    }
  });
}

ConceptManager.getCachedConcept = function (cid) {
  if ($.jStorage && $.jStorage.storageAvailable()) {
    return $.jStorage.get('concept_' + cid, null);
  } else {
    return ConceptManager.ConceptCache[cid];
  }
};

ConceptManager.setCachedConcept = function (concept) {
  if ($.jStorage && $.jStorage.storageAvailable()) {
    $.jStorage.set('concept_' + concept.ConceptId, concept, {
      // 默认存储时间为3天，为避免同时刷新，增加2个小时之内的随机时间
      TTL: 259200000 + 7200000*Math.random()
    });
  } else {
    ConceptManager.ConceptCache[concept.ConceptId] = concept;
  }
};

ConceptManager.removeCachedConcept = function (cid) {
  if ($.jStorage && $.jStorage.storageAvailable()) {
    $.jStorage.set('concept_' + cid, undefined);
  } else {
    ConceptManager.ConceptCache[cid] = undefined;
  }
};


ConceptManager.prototype.pvsFromType = function (cid, typeId, options) {
  var opts = $.extend(Nagu.commonOption, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var cacheKey = 'subject_' + cid + '_rdfType_' + typeId;
  if (PvsFromBaseClass[cid] === undefined) PvsFromBaseClass[cid] = new Array();
  if (PvsFromBaseClass[cid][typeId] === undefined) {

    var keys = SerializeJsonToStr(opts.keys) == '""' ? '' : SerializeJsonToStr(opts.keys);
    $.ajax('http://' + opts.host + "/MorphemeApi/GetPropertyValuesFormBaseClass/" + cid, {
      dataType: 'jsonp',
      success: function (pvs) {
        PvsFromBaseClass[cid][typeId] = pvs;
        dtd.resolve(pvs);
      },
      error: function (a, b, c) {
        dtd.reject();
      },
      type: 'post',
      data: {
        subject: cid,
        mtype: Nagu.MType.Concept,
        rdfType: typeId,
        appId: opts.appId,
        keys: keys
      }
    });
  } else {
    dtd.resolve(PvsFromBaseClass[cid][typeId]);
  }
  return dtd.promise();
}

ConceptManager.prototype.types = function (cid, options) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.commonOption.host + '/morphemeApi/GetTypes/' + cid, {
    //dataType: 'jsonp',
    success: function (data) {
      dtd.resolve(data);
    }

  });
  return dtd.promise();
};

ConceptManager.prototype.bulkGet = function (cIds, options) {
  options = $.extend(Nagu.commonOption, options);
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  if (cIds === undefined) {
    log('CM.bulkGet error: ids is not undefined');
    dtd.reject();
    return dtd.promise();
  }
  var gettingIds = $.grep(cIds, function (id) {
    var result = ConceptManager.getCachedConcept(id);
    if (options.flush) result = undefined;
    return (result === undefined || result == null);
  });
  if (gettingIds.length > 0) {
    var keys = SerializeJsonToStr(options.keys) == '""' ? '' : SerializeJsonToStr(options.keys);

    $.post('http://' + options.host + "/ConceptApi/BulkGet/", {
      ids: SerializeJsonToStr(gettingIds),
      keys: keys
    }).done(function (cs) {
      if (cs.ret == 0) {
        for (var i = 0; i < gettingIds.length; i++) {
          var c = cs.result[gettingIds[i]];
          if (c && cs.result[gettingIds[i]].ret == 0) {
            ConceptManager.setCachedConcept(cs.result[gettingIds[i]]);
          }
        }
        var cs = [];
        for (var i = 0; i < cIds.length; i++) {
          cs.push(ConceptManager.getCachedConcept(cIds[i]));
        }
        dtd.resolve(cs);
      } else {
        dtd.reject();
      }
    }).fail(function () {
      dtd.reject();
    });

    /*
     $.ajax('http://' + options.host + "/ConceptApi/BulkGet/", {
     dataType: 'jsonp',
     data: {
     ids: SerializeJsonToStr(gettingIds),
     keys: keys
     },
     success: function (cs) {
     if (cs.ret == 0) {
     for (var i = 0; i < gettingIds.length; i++) {
     var c = cs.result[gettingIds[i]];
     if (c && cs.result[gettingIds[i]].ret == 0) {
     ConceptManager.setCachedConcept(cs.result[gettingIds[i]]);
     }
     }
     var cs = [];
     for (var i = 0; i < cIds.length; i++) {
     cs.push(ConceptManager.getCachedConcept(cIds[i]));
     }
     dtd.resolve(cs);
     } else {
     dtd.reject();
     }
     },
     error: function (a, b, c) {
     dtd.reject();
     }
     });*/

  } else {
    var cs = [];
    for (var i = 0; i < cIds.length; i++) {
      cs.push(ConceptManager.getCachedConcept(cIds[i]));
    }
    dtd.resolve(cs);
  }
  return dtd.promise(); // 返回promise对象
};

/***Morpheme操作*****************************************************************************************************************************/
function MorphemeManager(options){
}

MorphemeManager.Cache = new Array();
MorphemeManager.getCachedConcept = function (mid) {
  if ($.jStorage && $.jStorage.storageAvailable()) {
    return $.jStorage.get('morpheme_' + cid, null);
  } else {
    return MorphemeManager.Cache[cid];
  }
};

MorphemeManager.setCachedConcept = function (morpheme) {
  var mid;
  if (morpheme.ConceptId) mid = morpheme.ConceptId;
  else if (morpheme.StatementId) mid = morpheme.StatementId;
  else alert('setCachedConcept error!');

  if ($.jStorage && $.jStorage.storageAvailable()) {
    $.jStorage.set('morpheme_' + mid, morpheme, {
      // 默认存储时间为3天，为避免同时刷新，增加2个小时之内的随机时间
      TTL: 259200000 + 7200000 * Math.random()
    });
  } else {
    MorphemeManager.Cache[mid] = morpheme;
  }
};

MorphemeManager.removeCachedConcept = function (mid) {
  if ($.jStorage && $.jStorage.storageAvailable()) {
    $.jStorage.set('morpheme_' + mid, undefined);
  } else {
    MorphemeManager.Cache[mid] = undefined;
  }
};


/***Statement操作*****************************************************************************************************************************/
function StatementManager(host) {
  if (host == null || host === undefined) this.host = "";
  else this.host = host;
}

StatementManager.StatementsCache = new Array();
StatementManager.generateCacheKey = function (statementId, subjectId, predicateId, objectId, appId) {
  var key = 'sid_' + statementId;
  key += '_sub_' + subjectId;
  key += '_pre_' + predicateId;
  key += '_obj_' + objectId;
  key += '_appId_' + appId;
  return key;
}

StatementManager.prototype.flush = function (statementId, subjectId, predicateId, objectId, appId) {
  if (appId === undefined || appId == "")
    appId = "00000000-0000-0000-0000-000000000000";
  var cacheKey = StatementManager.generateCacheKey(statementId, subjectId, predicateId, objectId, appId);
  StatementManager.StatementsCache[cacheKey] = undefined;
}
StatementManager.prototype.create = function (subjectId, stype, predicateId, object, otype, appId) {
  var params = {
    subjectId: subjectId,
    stype: stype,
    predicateId: predicateId,
    object: object,
    otype: otype,
    appId: appId
  };
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.loggedHosts[0] + "/StatementApi/Create", {
    data: params,
    dataType: 'jsonp',
    success: function (data) {
      dtd.resolve(data);
    },
    error: function (a, b, c) {
      dtd.reject();
    }
  });
  return dtd.promise();
  //return $.post("/StatementApi/Create", params);
};
StatementManager.prototype.findBySP = function (subject, stype, predicate, options) {
  var defaults = {
    appId: '',
    keys: []
  };
  // Extend our default options with those provided.
  var opts = $.extend(defaults, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var cacheKey = StatementManager.generateCacheKey('', subject, predicate, '', opts.appId);
  var keys = SerializeJsonToStr(opts.keys) == '""' ? '' : SerializeJsonToStr(opts.keys);
  if (StatementManager.StatementsCache[cacheKey] === undefined) {
    $.ajax('http://' + Nagu.commonOption.host + "/MorphemeApi/FindBySP/" + subject,
      {
        type: 'POST',
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        },
        data: {
          stype: stype,
          predicateId: predicate,
          appId: opts.appId,
          keys:keys
        },
        success: function (fss) {
          Statments[StatementManager.StatementsCache] = fss;
          dtd.resolve(fss);
        },
        error: function (a, b, c) {
          dtd.reject();
        }
      });
  } else {
    dtd.resolve(Statments[StatementManager.StatementsCache]);
  }
  return dtd.promise();
};
StatementManager.prototype.findByPO = function (predicateId, objectId, oType, options) {
  if (oType === undefined) oType = Nagu.MType.Concept;
  // Extend our default options with those provided.
  options = $.extend(Nagu.commonOption, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var cacheKey = StatementManager.generateCacheKey('', '', predicateId, objectId, options.appId);
  if (StatementManager.StatementsCache[cacheKey] === undefined) {
    var keys = SerializeJsonToStr(options.keys) == '""' ? '' : SerializeJsonToStr(options.keys);
    $.ajax('http://' + options.host + "/MorphemeApi/FindByPO/" + predicateId, {
      dataType: 'jsonp',
      data: {
        otype: oType,
        objectId: objectId,
        appId: options.appId,
        keys: keys,
        pageIndex: options.pageIndex,
        pageSize: options.pageSize
      },
      success: function (fss) {
        StatementManager.StatementsCache[cacheKey] = fss;
        dtd.resolve(fss);
      },
      error: function (a, b, c) {
        dtd.reject();
      }
    });
  } else {
    dtd.resolve(StatementManager.StatementsCache[cacheKey]);
  }
  return dtd.promise();
};

StatementManager.prototype.findBySPO = function (subjectId,  predicateId, objectId, options) {
  var defaults = {
    appId: '',
    stype: Nagu.MType.Concept,
    otype: Nagu.MType.Concept
  };
  // Extend our default options with those provided.
  var opts = $.extend(defaults, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var cacheKey = StatementManager.generateCacheKey('', subjectId, predicateId, objectId, opts.appId);
  if (StatementManager.StatementsCache[cacheKey] === undefined) {
    var keys = SerializeJsonToStr(options.keys) == '""' ? '' : SerializeJsonToStr(options.keys);
    $.ajax('http://' + Nagu.commonOption.host + "/MorphemeApi/FindBySPO/" + subjectId,
      {
        data: {
          stype: opts.stype,
          predicateId: predicateId,
          objectId: objectId,
          otype: opts.otype,
          appId: opts.appId
        },
        dataType: 'jsonp',
        success: function (fss) {
          Statments[StatementManager.StatementsCache] = fss;
          dtd.resolve(fss);
        },
        error: function () { dtd.reject(); }
      });
  } else {
    dtd.resolve(Statments[StatementManager.StatementsCache]);
  }
  return dtd.promise();
};


StatementManager.prototype.findSByPO = function (predicateId, objectId, oType, options) {
  var defaults = {
    appId: ""
  };
  // Extend our default options with those provided.
  var opts = $.extend(defaults, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var cacheKey = StatementManager.generateCacheKey('', '1025', predicateId, objectId, opts.appId);
  if (StatementManager.StatementsCache[cacheKey] === undefined) {
    $.getJSON(host + "/MorphemeApi/FindSByPO/" + predicateId,
      {
        otype: oType,
        objectId: objectId,
        appId: opts.appId
      }).done(function (fss) {
        StatementManager.StatementsCache[cacheKey] = fss;
        dtd.resolve(fss);
      }).fail(function () { dtd.reject(); });
  } else {
    dtd.resolve(StatementManager.StatementsCache[cacheKey]);
  }
  return dtd.promise();
};

// 根据一个主体和多个谓词查询语句集合
StatementManager.prototype.findBySsPs2 = function (subjects, predicates, options) {
  options = $.extend(Nagu.commonOption, options);
  var url = 'http://' + options.host + "/MorphemeApi/FindBySsPs2/";
  return Nagu.Helper.crossAjaxWithCookie(url, {
    subjects: subjects,
    predicates: predicates,
    appId: options.appId,
    keys: options.keys
  });
};

// 根据一个主体和多个谓词查询语句集合
StatementManager.prototype.findBySsPs = function (subjects, predicates, options) {
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var keys = SerializeJsonToStr(options.keys) == '""' ? '' : SerializeJsonToStr(options.keys);
  $.post('http://' + options.host + "/MorphemeApi/FindBySsPs/", {
    subjects: SerializeJsonToStr(subjects),
    predicates: SerializeJsonToStr(predicates),
    appId: options.appId,
    keys: keys
  }).done(function (fss) {
    dtd.resolve(fss);
  }).fail(function () {
    dtd.reject();
  })

  return dtd.promise();
};

// 批量创建语句
StatementManager.prototype.bulkCreate = function (fss, options) {
  for (var i = 0; i < fss.length; i++) {
    if (fss[i].AppId == '') fss[i].AppId = Nagu.App.Public;
  }
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.commonOption.host + '/statementApi/bulkCreate', {
    dataType: 'jsonp',
    success: function (data) {
      dtd.resolve(data);
    },
    data: { fss: SerializeJsonToStr(fss) },
    type: 'post'
  });
  return dtd.promise();
}

StatementManager.prototype.get = function (id) {
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var cacheKey = StatementManager.generateCacheKey(id, '', '', '', '');
  if (StatementManager.StatementsCache[cacheKey] === undefined) {
    $.ajax('http://' + Nagu.commonOption.host + "/StatementApi/Get/" + id, {
      dataType: 'jsonp',
      success: function (fs) {
        StatementManager.StatementsCache[cacheKey] = fs;
        dtd.resolve(fs);
      },
      error: function () { dtd.reject(); }
    });
  } else {
    dtd.resolve(StatementManager.StatementsCache[cacheKey]);
  }
  return dtd.promise();
};

StatementManager.prototype.del = function (id, appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.commonOption.host + "/StatementApi/Delete/" + id, {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data:{
      appId:appId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve();
      } else {
        dtd.reject(result);
      }
    },
    error: function (a, b, c) {
      dtds[i].reject({
        msg: 'error'
      });
    }
  });
  return dtd.promise();
}


/**
 * 为指定的主体、谓词及AppId设置唯一的Object
 **/
StatementManager.prototype.singleForSP = function(subjectId, stype, predicateId, object, otype, options)
{
  // Extend our default options with those provided.
  options = $.extend(Nagu.commonOption, options);

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  var keys = SerializeJsonToStr(options.keys) == '""' ? '' : SerializeJsonToStr(options.keys);
  $.post('http://' + options.host + "/StatementApi/SingleForSP/", {
    subjectId: subjectId,
    predicateId: predicateId,
    object: object,
    stype: stype,
    otype: otype,
    appId: options.appId
  }).done(function (result) {
    dtd.resolve(result.data);
  }).fail(function () {
    dtd.reject();
  })

  return dtd.promise();
}

StatementManager.prototype.bulkSingleForSP = function (fss, options) {

  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.commonOption.host + '/statementApi/BulkSingleForSP',{
    data: {
      fss: SerializeJsonToStr(fss)
    },
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    success: function(result){
      if (result.ret == 0)
        dtd.resolve(result.data);
      else dtd.reject();
    },
    error:function () {
      dtd.reject();
    }
  });
  return dtd.promise();
}

// 从语句集合中取出所有语句的主语ID
StatementManager.prototype.subjectIds = function (fss) {
  var cIds = [];
  $.each(fss, function (i, fs) {
    if (fs.Subject.ConceptId) {
      cIds.push(fs.Subject.ConceptId);
    } else if (fs.Subject.StatementId) {
      cIds.push(fs.Subject.StatementId);
    }
  });
  return cIds.distinct();
}



function pagedByPO(predicateId, objectId, otype, start, count) {
  return $.getJSON("/StatementApi/PagedByPO/" + predicateId,
    {
      objectId: objectId,
      oType: otype,
      start: start,
      count: count
    });
}

function searchWithType(fn, type) {
  return $.getJSON("/ConceptApi/SearchWithType/" + fn,
    {
      type: type
    });
}

function findSByPO(predicateId, objectId, oType) {
  return $.getJSON("/MorphemeApi/FindSByPO/" + predicateId,
    {
      objectId: objectId,
      otype: oType
    });
}

function propertyValuesFormBaseClass(subject, sType, rdfType, appId) {
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  if (appId === undefined) appId = "";
  var cacheKey = 'subject_' + subject + '_rdfType_' + rdfType;
  if (PvsFromBaseClass[subject] === undefined) PvsFromBaseClass[subject] = new Array();
  if (PvsFromBaseClass[subject][rdfType] === undefined) {
    var params = {
      subject: subject,
      mtype: sType,
      rdfType: rdfType,
      appId: appId
    };
    $.getJSON("/MorphemeApi/GetPropertyValuesFormBaseClass/" + subject, params).done(function (pvs) {
      PvsFromBaseClass[subject][rdfType] = pvs;
      dtd.resolve(pvs);
    });
  } else {
    dtd.resolve(PvsFromBaseClass[subject][rdfType]);
  }
  return dtd.promise();
}




/*** MemberManager 类*****************************************************************************************************************************/

function MemberManager(host) {
  if (host == null || host === undefined) this.host = "";
  else this.host = host;
}
MemberManager.Cache = new Array();

MemberManager.prototype.getMe1 = function () {
  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
  if (MemberManager.me === undefined)
    $.ajax('http://' + Nagu.commonOption.host + '/MemberApi/GetMe', {
      dataType: 'jsonp',
      success: function (me) {
        if (me.ret == 0) {
          MemberManager.me = me;
        } else {
          log('getMe()::me.auth = ' + me.auth);
        }
        dtd.resolve(me);
      },
      error: function(a,b,c){
        dtd.reject();
      },
      type: 'post'
    });
  else dtd.resolve(MemberManager.me);
  return dtd.promise();
};

MemberManager.prototype.getMe2 = function () {

  if (MemberManager.mes === undefined) MemberManager.mes = [];
  var dtds = [];
  var loggedHosts = [];
  $.each(Nagu.hosts, function (i, host) {
    dtds[i] = $.Deferred(); //在函数内部，新建一个Deferred对象
    if (MemberManager.mes[host] === undefined)
      $.jsonp({
        url: 'http://'+host + '/MemberApi/GetMe?callback=?',
        success: function (me) {
          if (me.ret == 0) {
            MemberManager.mes[host] = me;
            loggedHosts.push(host);
          }
          dtds[i].resolve();
        },
        error: function (a, b, c) {
          dtds[i].resolve();
        }
      });
    else {
      dtds[i].resolve();
      loggedHosts.push(host);
    }
  });

  var dtd = $.Deferred();
  $.when.apply($, dtds).done(function () {
    if(loggedHosts.length > 0){
      Nagu.loggedHosts = $.unique(loggedHosts);
      dtd.resolve(MemberManager.mes[Nagu.loggedHosts[0]]);
    } else {
      dtd.resolve({ ret: -1 });
    }
  });
  return dtd.promise();
};

MemberManager.prototype.getMe = function () {

  if (MemberManager.mes === undefined) MemberManager.mes = [];
  var dtds = [];
  var loggedHosts = [];
  $.each(Nagu.hosts, function (i, host) {
    dtds[i] = $.Deferred(); //在函数内部，新建一个Deferred对象
    if (MemberManager.mes[host] === undefined)
      $.ajax('http://' + host + '/MemberApi/GetMe',{
        type: 'POST',
        crossDomain: true,
        xhrFields: {
          withCredentials: true
        },
        success: function (me) {
          if (me.ret == 0) {
            MemberManager.mes[host] = me;
            loggedHosts.push(host);
          }
          dtds[i].resolve();
        },
        error: function (a, b, c) {
          dtds[i].resolve();
        }
      });
    else {
      dtds[i].resolve();
      loggedHosts.push(host);
    }
  });

  var dtd = $.Deferred();
  $.when.apply($, dtds).done(function () {
    if (loggedHosts.length > 0) {
      Nagu.loggedHosts = $.unique(loggedHosts);
      dtd.resolve(MemberManager.mes[Nagu.loggedHosts[0]]);
    } else {
      dtd.resolve({ ret: -1 });
    }
  });
  return dtd.promise();
};

MemberManager.prototype.loginFromNagu = function (username, password) {
  return $.getJSON('http://' + Nagu.hosts[0] + "/MemberApi/Login/?callback=?", {
    username: username,
    password: password
  });
};

// 用于检查用户是否已登录
MemberManager.prototype.check = function () {
  var status = {
    nagu: false,
    qc: false,
    weibo: false
  };

  var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象

  try {
    status.qc = QC.Login.check();
  } catch (e) {
  }

  this.getMe().done(function (me) {
    status.nagu = (me.ret == 0);
    dtd.resolve(status);
  }).fail(function () {
    dtd.resolve(status);
  });

  return dtd.promise();
};


MemberManager.prototype.oauthLogin = function (openId, accessToken, source, options) {
  options = $.extend(Nagu.commonOption, options);
  return $.jsonp({
    url: "http://" + options.host + "/MemberApi/OauthLogin/" + openId + "?callback=?",
    data: {
      accessToken: accessToken,
      source: source
    }
  });
};

MemberManager.ManageableApps = undefined;

// 获取指定用户可管理的App
MemberManager.prototype.manageableApps = function (userId) {
  var dtd = $.Deferred();
  if (MemberManager.ManageableApps === undefined) {
    Nagu.SM.findByPO(Nagu.App.Manager, userId, Nagu.MType.Concept).done(function (fss) {
      MemberManager.ManageableApps = fss;
      dtd.resolve(fss);
    });
  } else {
    dtd.resolve(MemberManager.ManageableApps);
  }
  return dtd.promise();
}

// 添加对指定Concept的收藏
MemberManager.prototype.favorite = function (conceptId, groupId) {
  var dtd = $.Deferred();

  this.getMe().done(function (me) {
    var sub, pred;
    if (groupId === undefined) {
      sub = me.Id;
      pred = Nagu.User.Favorite;
    } else {
      sub = groupId;
      pred = Nagu.Rdf.Li;
    }
    Nagu.SM.create(sub, Nagu.MType.Concept, pred, conceptId, Nagu.MType.Concept, me.Id).done(function (fs) {
      dtd.resolve(fs);
    });
  });

  return dtd.promise();
};

MemberManager.prototype.logout = function () {
  var dtds = [];
  $.each(Nagu.loggedHosts, function (i, host) {
    var dtd = $.Deferred();
    dtds.push(dtd);

    $.ajax('http://' + host + '/MemberApi/Logout', {
      type: 'POST',
      crossDomain: true,
      xhrFields: {
        withCredentials: true
      },
      success: function (data) {
        if (data.ret == 0) {
          dtd.resolve();
          MemberManager.mes.pop(host);
        }
      },
      error: function (a, b, c) {
        dtd.reject();
      }
    });
  });
  return $.when.apply($, dtds);
};

// 获取当前用户的收藏分组
MemberManager.prototype.favoriteGroup = function () {
  var dtd = $.Deferred();
  this.getMe().done(function (me) {
    if (me.ret != 0) dtd.reject();
    else
      Nagu.SM.findBySP(me.Id, Nagu.MType.Concept, Nagu.User.FavoriteGroup, {
        appId: me.Id
      }).done(function (fss) {
        dtd.resolve(fss);
      });
  });
  return dtd.promise();
};

// 获取指定分组中的收藏的Concept，若未指定分组，则获取未被分组的。
MemberManager.prototype.favoriteConcepts = function (groupId) {
  var dtd = $.Deferred();
  this.getMe().done(function (me) {
    if (me.ret != 0) dtd.reject();
    else {
      if (groupId === undefined || groupId == '')
      // 如果未指定分组，则从未分组收藏中获取
        Nagu.SM.findBySP(me.Id, Nagu.MType.Concept, Nagu.User.Favorite, {
          appId: me.Id
        }).done(function (fss) {
          dtd.resolve(fss);
        });
      // 否则，则从分组中获取
      else Nagu.SM.findBySP(groupId, Nagu.MType.Concept, Nagu.Rdf.Li, {
        appId: me.Id
      }).done(function (fss) {
        dtd.resolve(fss);
      });
    }
  });
  return dtd.promise();
};

// 检查指定的概念是否被收藏的指定的组中,groupId为undefined时表示未分组
MemberManager.prototype.isFavorite = function (conceptId, groupId) {
  var dtd = $.Deferred();

  this.getMe().done(function (me) {
    var sub, pred;
    if (groupId === undefined) {
      sub = me.Id;
      pred = Nagu.User.Favorite;
    } else {
      sub = groupId;
      pred = Nagu.Rdf.Li;
    }
    Nagu.SM.findBySPO(sub, pred, conceptId, {
      appId: me.Id
    }).done(function (fss) {
      if (fss.length > 0) dtd.resolve(true);
      else dtd.resolve(false);
    });
  });
  return dtd.promise();
};

// 取消对概念的收藏
MemberManager.prototype.removeFavorite = function (conceptId, groupId) {
  var dtd = $.Deferred();

  this.getMe().done(function (me) {
    var sub, pred;
    if (groupId === undefined) {
      sub = me.Id;
      pred = Nagu.User.Favorite;
    } else {
      sub = groupId;
      pred = Nagu.Rdf.Li;
    }
    Nagu.SM.findBySPO(sub, pred, conceptId, {
      appId: me.Id
    }).done(function (fss) {
      if (fss.length > 0) Nagu.SayM.dontSay(fss[0].StatementId).done(function () {
        dtd.resolve();
      });

    });
  });
  return dtd.promise();
};

// 创建一个收藏分组
MemberManager.prototype.createFavoriteGroup = function (name) {
  var dtd = $.Deferred();

  name = $.trim(name);
  if (name) {
    this.getMe().done(function (me) {
      Nagu.CM.create(name, '收藏分组：' + name).done(function (group) {
        Nagu.SM.create(me.Id, Nagu.MType.Concept,
          Nagu.User.FavoriteGroup, group.ConceptId,
          Nagu.MType.Concept, me.Id).done(function (fs) {
            dtd.resolve(group, fs);
          });

        // 添加rdf:Bag类型
        Nagu.SM.create(group.ConceptId, Nagu.MType.Concept,
          Nagu.Rdf.Type,
          Nagu.Rdf.Bag, Nagu.MType.Concept,
          me.Id);
      });
    });
  }
  return dtd.promise();
};

MemberManager.prototype.registerFrom = function (source, userName, openId, accessToken, figure) {
  var dtd = $.Deferred();
  $.post('http://' + Nagu.commonOption.host + '/MemberApi/RegisterFrom', {
    source: source,
    userName: userName,
    openId: openId,
    accessToken: accessToken,
    figure: figure
  }).done(function (data) {
    dtd.resolve(data);
  }).fail(function () {
    dtd.reject();
  })
  return dtd.promise();
  //$.jsonp({
  //    url: Nagu.commonOption.host + '/MemberApi/RegisterFrom',
  //    data: {
  //        source: source,
  //        userName: userName,
  //        openId: openId,
  //        accessToken: accessToken,
  //        figure: figure
  //    },
  //    success: function () {
  //        dtd.resolve()
  //    }
  //});

}

MemberManager.UserInfo = [];
MemberManager.prototype.getUserInfo = function (uid) {
  var dtd = $.Deferred();
  if ($.jStorage && $.jStorage.storageAvailable()) {
    if ($.jStorage.get('user_' + uid, null) != null) {
      dtd.resolve($.jStorage.get('user_' + uid, null));
      return dtd.promise();
    }
  } else {
    if (MemberManager.UserInfo['user_' + uid] !== undefined) {
      dtd.resolve(MemberManager.UserInfo['user_' + uid]);
      return dtd.promise();
    }
  }
  $.post(Nagu.commonOption.host + '/MemberApi/GetUserInfo/' + uid).done(function (user) {
    if ($.jStorage && $.jStorage.storageAvailable()) {
      $.jStorage.set('user_' + uid, user, {
        // 默认存储时间为3天，为避免同时刷新，增加2个小时之内的随机时间
        TTL: 259200000 + 7200000 * Math.random()
      });
    } else {
      MemberManager.UserInfo['user_' + uid] = user;
    }
    dtd.resolve(user);
  });
  return dtd.promise();
};


MemberManager.prototype.wxStatus = function (openId, mpId) {
  return $.post(Nagu.commonOption.host + "/MemberApi/WxStatus", {
    openId: openId,
    mpId: mpId
  });
};

/**
 * 获取当前用户在指定App内拥有的角色
 **/
MemberManager.prototype.roles = function (appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/GetRoles', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      appId: appId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

MemberManager.prototype.allRoles = function (appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/ListRoles', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      appId: appId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

MemberManager.prototype.allMembers = function (appId, predicates) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/ListMembers', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      appId: appId,
      predicates: predicates
    },
    traditional: true,
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

MemberManager.prototype.updateMember = function (userId, appId, fss) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/UpdateMember', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      conceptId: userId,
      appId: appId,
      fss: fss
    },
    traditional: true,
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
}

MemberManager.prototype.getMember = function (userId, appId, predicates) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/GetMember', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      conceptId: userId,
      appId: appId,
      predicates: predicates
    },
    traditional: true,
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
}

MemberManager.prototype.removeMember = function (userId, appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/RemoveMember', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      conceptId: userId,
      appId: appId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve();
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

MemberManager.prototype.changePassword = function (oldPassword, password) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/ChangePassword', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      oldPassword: oldPassword,
      password: password
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve();
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

MemberManager.prototype.create = function (username, password, appId, fss) {

  console.log('member.create: fss.length=' + fss.length);

  var postFss = [];
  if (fss && fss.length > 0) {
    $.each(fss, function (i, fs) {
      postFss.push(SerializeJsonToStr(fs));
    });
  }
  var dtd = $.Deferred();
  $.ajax('http://'+Nagu.hosts[0] + '/MemberApi/CreateMember', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      username: username,
      password: password,
      appId: appId,
      fss: postFss
    },
    traditional: true,
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
}


MemberManager.prototype.rolesForUser = function (userId, appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/GetRolesForUser', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      userId:userId,
      appId: appId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

MemberManager.prototype.usersInRole = function (roleId, appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/GetUsersInRole', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      roleId: roleId,
      appId: appId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

MemberManager.prototype.removeRole = function (userId, roleId, appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/RemoveRole', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      userId: userId,
      appId: appId,
      roleId: roleId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve();
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

MemberManager.prototype.addRole = function (userId, roleId, appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/MemberApi/AddRole', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      userId: userId,
      appId: appId,
      roleId: roleId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve();
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

/*** WeiboManager 类*****************************************************************************************************************************/
function WeiboManager(options) {
}

WeiboManager.prototype.shorten = function (url_long) {

};





/*** AppManager 类*****************************************************************************************************************************/
function AppManager() { }

AppManager.prototype.list = function (options) {
  var dtd = $.Deferred();

  $.ajax('http://' + Nagu.hosts[0] + '/AppApi/List/', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });

  return dtd.promise();
};

AppManager.prototype.get = function (appId, options) {
  var dtd = $.Deferred();
  $.jsonp({
    url: 'http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/Get/' + appId + '?callback=?',
    success: function (c) {
      dtd.resolve(c);
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

AppManager.prototype.get2 = function (appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/AppApi/Get/'+appId, {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function () {
      dtd.reject();
    }
  });
  return dtd.promise();
};

AppManager.prototype.addManager = function (userId, appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.hosts[0] + '/AppApi/AddManager', {
    type: 'POST',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    data: {
      userId: userId,
      appId: appId
    },
    success: function (result) {
      if (result.ret == 0) {
        dtd.resolve(result.data);
      } else {
        dtd.reject(result);
      }
    },
    error: function (a, b, c) {
      dtd.reject({
        ret : -1,
        msg: b
      });
    }
  });
  return dtd.promise();
};

AppManager.prototype.create = function (fn, desc) {
  var dtd = $.Deferred();
  $.jsonp({
    url: 'http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/Create/?callback=?',
    data: {
      fn: fn,
      desc: desc
    }
  }).done(function (app) {
    dtd.resolve(app);
  });
  return dtd.promise();
};

AppManager.prototype.del = function (appId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/Delete/' + appId, {
    dataType:'jsonp'
  }).done(function (data) {
    if (data.ret == 0) {
      dtd.resolve(data);
    } else dtd.reject(data);
  });
  return dtd.promise();
};

AppManager.prototype.addNewKey = function (appId, fn, desc, auth, expire) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/AddKey/' + appId, {
    dataType: 'jsonp',
    data: {
      fn: fn,
      desc: desc,
      auth: auth,
      expire: expire
    }
  }).done(function (key) {
    dtd.resolve(key);
  });
  return dtd.promise();
};

AppManager.prototype.addKey = function (appId, keyId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/AddKey/' + appId, {
    dataType: 'jsonp',
    data: {
      keyId: keyId
    }
  }).done(function (key) {
    dtd.resolve(key);
  });
  return dtd.promise();
};


AppManager.prototype.keys = function (appId) {
  var dtd = $.Deferred();

  // 根据指定的AppId获取Key
  if (appId !== undefined) {
    $.ajax('http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/ListKeys/' + appId, {
      dataType: 'jsonp'
    }).done(function (keys) {
      dtd.resolve(keys);
    });
    // 获取当前用户所管理的所有App的Key
  } else {
    $.ajax('http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/AllKeys/', {
      dataType: 'jsonp'
    }).done(function (keys) {
      dtd.resolve(keys);
    });
  }
  return dtd.promise();
};

AppManager.prototype.getKey = function (keyId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/GetKey/' + keyId, {
    dataType: 'jsonp'
  }).done(function (key) {
    dtd.resolve(key);
  });
  return dtd.promise();
};

AppManager.prototype.deleteKey = function (appId, keyId) {
  var dtd = $.Deferred();
  $.ajax('http://' + Nagu.loggedHosts[Math.round(Math.random() * (Nagu.loggedHosts.length - 1))] + '/AppApi/DeleteKey/', {
    dataType: 'jsonp',
    data: {
      appId: appId,
      keyId: keyId
    }
  }).done(function (data) {
    dtd.resolve(data);
  });
  return dtd.promise();
};

/*** DialogManager 类*****************************************************************************************************************************/
function DialogManager(options) {
}
DialogManager.Cache = new Array();

DialogManager.prototype.get = function (url) {
  var dtd = $.Deferred();


  if ($.jStorage && $.jStorage.storageAvailable()) {

    // 本地存储可用
    var html = $.jStorage.get('dailog' + url, null);
    if (html == null) {
      $.get(url).done(function (data) {
        $.jStorage.set('dailog' + url, data, {
          // 默认存储时间为3天，为避免同时刷新，增加2个小时之内的随机时间
          TTL: 259200000 + 7200000 * Math.random()
        });
        dtd.resolve(data);
      });
    } else {
      dtd.resolve(html);
    }
  } else {
    // 本地存储不可用
    if (DialogManager.Cache[url] === undefined) {
      $.get(url).done(function (data) {
        DialogManager.Cache[url] = data;
        dtd.resolve(data);
      });
    } else {
      dtd.resolve(DialogManager.Cache[url]);
    }
  }

  return dtd.promise();
}




function log(text) {
  //$('#txtDebug').val($('#txtDebug').val() + text + '\r\n');
  try{
    console.log(text);
  } catch (e) {
  }
}


Nagu.F = {
  wrap: function (url) {
    var host = Nagu.hosts[parseInt(Nagu.hosts.length * Math.random())];

    var dtd = $.Deferred();
    $.jsonp({
      url: 'http://' + host + '/func/wrap/?url=' + encodeURIComponent(url) + '&callback=?'
    }).done(function (result) {
      //result.content = $('<div/>').html(result.content).text();
      dtd.resolve(result);
    });
    return dtd.promise();
  },
  bulkWrap: function (urls) {
    var host = Nagu.hosts[parseInt(Nagu.hosts.length * Math.random())];
    urls = SerializeJsonToStr(urls);
    return $.jsonp({
      url: 'http://' + host + '/func/bulkWrap/?urls=' + encodeURIComponent(urls) + '&callback=?'
    });
  },
  shortenUrl: function (longUrl, costemName) {
    var dtd = $.Deferred();
    $.ajax('http://nagu.cc/ShortenUrlApi/Create', {
      dataType: 'jsonp',
      data: {
        longUrl: longUrl,
        costemName: costemName
      },
      success: function (data) {
        if (data.ret == 0) {
          dtd.resolve(data);
        } else {
          dtd.reject();
        }
      },
      error: function(a,b,c){
        dtd.reject();
      },
      type: 'post'
    });
    return dtd.promise();
  },

  resetConfirmationCode: function (selector) {
    var img = $(selector);
    img.attr('src', 'http://' + Nagu.hosts[0] + '/home/confirmationCode/' + Math.random());
  }
};
