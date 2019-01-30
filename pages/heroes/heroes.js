// pages/heroes/heroes.js

const app = getApp();
const data = require("../../utils/data.js");

Page({
  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    heroes: data.heroList,
    races: data.raceList,
    pros: data.proList,
    costs: data.costList,
    raceIdx: 0,
    proIdx: 0,
    costIdx: 0
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    });
  },

  hideModal(e) {
    this.setData({
      modalName: null
    });
  },

  bindRaceChange(e) {
    console.log("race发送选择改变，携带值为", e.detail.value);
    this.setData({
      raceIdx: e.detail.value
    });

    this.refreshHero();
  },

  bindProChange(e) {
    console.log("pro发送选择改变，携带值为", e.detail.value);
    this.setData({
      proIdx: e.detail.value
    });

    this.refreshHero();
  },

  bindCostChange(e) {
    console.log("cost发送选择改变，携带值为", e.detail.value);
    this.setData({
      costIdx: e.detail.value
    });

    this.refreshHero();
  },

  refreshHero: function() {
    var selected = this.selectHero(
      this.data.raceIdx,
      this.data.proIdx,
      this.data.costIdx
    );
    this.setData({
      heroes: selected
    });
  },

  selectHero: function(raceIdx, proIdx, costIdx) {
    console.log("选择: ", raceIdx, "-", proIdx, "-", costIdx);

    var heroes = data.heroList;

    if (raceIdx > 0) {
      heroes = heroes.filter(function(x, index) {
        return x["race"].indexOf(data.raceList[raceIdx]) > -1;
      });
    }

    if (proIdx > 0) {
      heroes = heroes.filter(function(x, index) {
        return x["pro"].indexOf(data.proList[proIdx]) > -1;
      });
    }

    if (costIdx > 0) {
      heroes = heroes.filter(function(x, index) {
        return x["cost"] == data.costList[costIdx];
      });
    }

    return heroes;
  }
});