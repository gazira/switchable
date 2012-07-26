define("#switchable/0.9.5/carousel",["./switchable","$","#widget/0.9.16/widget","#base/0.9.16/base","#events/0.9.1/events","#class/0.9.2/class"],function(e,t,n){var r=e("./switchable"),i=e("$"),s=e("./const");n.exports=r.extend({attrs:{circular:!0,prevBtn:{getter:function(e){return i(e).eq(0)}},nextBtn:{getter:function(e){return i(e).eq(0)}}},_parseRole:function(){r.prototype._parseRole.call(this);var e=this.dataset.role;if(!e)return;var t=this.get("prevBtn"),n=this.get("nextBtn");!t[0]&&e.prev&&(t=this.$(e.prev),this.set("prevBtn",t)),!n[0]&&e.next&&(n=this.$(e.next),this.set("nextBtn",n)),t.addClass(s.PREV_BTN_CLASS),n.addClass(s.NEXT_BTN_CLASS)},_initTriggers:function(){r.prototype._initTriggers.call(this);var e=this,t=this.get("circular");this.get("prevBtn").click(function(n){n.preventDefault(),(t||e.get("activeIndex")>0)&&e.prev()}),this.get("nextBtn").click(function(n){n.preventDefault();var r=e.get("length")-1;(t||e.get("activeIndex")<r)&&e.next()}),t||this.on("switch",function(t){e._updateButtonStatus(t)})},_updateButtonStatus:function(e){var t=this.get("prevBtn"),n=this.get("nextBtn");t.removeClass(s.DISABLED_BTN_CLASS),n.removeClass(s.DISABLED_BTN_CLASS),e===0?t.addClass(s.DISABLED_BTN_CLASS):e===this.get("length")-1&&n.addClass(s.DISABLED_BTN_CLASS)}})});