(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1018:function(t,e,o){"use strict";o(957)},1019:function(t,e,o){"use strict";o(958)},1101:function(t,e,o){"use strict";o.r(e);var a=o(19),i=o.n(a),n=o(46),r=o.n(n),s=o(124),c=o.n(s),m=o(58),l={name:"beginExam",data:function(){return{limit:0,exam_id:this.$route.params.examid,isFrom:this.$route.query.isFrom}},components:{},created:function(){this.beginExam()},methods:{beginExam:function(){var t=this,e=this;new c.a((function(o,a){t.$axios.get(m.a.entry_info,{params:{exam_id:t.exam_id}}).then((function(a){if(0==a.data.errcode)t.limit=a.data.data.limit/60,o(1);else{console.log(a.data.errmsg);var i=a.data.errmsg,n=t.$createElement;t.$msgbox({title:e.$t("CourseAction.Common.Prompt"),center:!0,roundButton:!0,message:n("div",null,[n("div",i)]),showCancelButton:!1,confirmButtonText:e.$t("CourseAction.Common.Ensure"),callback:function(e){var o;"confirm"==e&&t.$router.push({path:r()(o="/cover/".concat(t.exam_id,"?isFrom=")).call(o,t.isFrom)})}})}}))})).then((function(){var o,a,i,n,s=t,c=(t.$createElement,"");0==s.limit?c=r()(o='<div style="font-size: 16px; margin-bottom: 15px;">'.concat(s.$t("Exam.Start.NoLimit"),"</div>\n          <div style ='color: #9B9B9B; border-bottom: 1px solid #eee; margin-bottom: 30px; padding-bottom: 30px;text-align:left;'>")).call(o,s.$t("Exam.Start.Tips"),"</div>"):c=r()(a=r()(i=r()(n='<div style="font-size: 16px; margin-bottom: 15px;">'.concat(s.$t("CourseAction.Quiz.TimeLimit"),' <span style="color: #F84F41">')).call(n,s.limit,"</span> ")).call(i,s.$t("CourseActionM.Quiz.Minute"),"</div>\n          <div style ='color: #9B9B9B; border-bottom: 1px solid #eee; margin-bottom: 30px; padding-bottom: 30px;text-align:left;'>")).call(a,s.$t("Exam.Start.Tips"),"</div>");t.$msgbox({title:e.$t("CourseAction.Common.Prompt"),center:!0,roundButton:!0,customClass:"btnStartMessage",message:c,dangerouslyUseHTMLString:!0,showCancelButton:!0,confirmButtonText:e.$t("Exam.Start.Start"),cancelButtonText:e.$t("Exam.Start.NotStart"),callback:function(e){if("confirm"==e)s.getStartTime();else if("cancel"==e){var o;s.$router.push({path:r()(o="/cover/".concat(t.exam_id,"?isFrom=")).call(o,t.isFrom)})}}})}))},getStartTime:function(){var t=this;this.$axios.post(m.a.start_paper,{exam_id:this.exam_id}).then((function(e){if(0==e.data.errcode){var o;t.$router.replace({path:r()(o="/exam/".concat(t.exam_id,"?isFrom=")).call(o,t.isFrom)})}else{var a=e.data.errmsg;t.$message({message:a,type:"warning"}),i()((function(){var e;t.$router.push({path:r()(e="/cover/".concat(t.exam_id,"?isFrom=")).call(e,t.isFrom)})}),3e3)}})).catch((function(t){}))}}},u=(o(1018),o(1019),o(25)),d=Object(u.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"beginExam"})}),[],!1,null,"04a8ee73",null);e.default=d.exports},957:function(t,e,o){},958:function(t,e,o){}}]);