// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: simplex_v5.ggsk
// Generated 2025-12-03T19:51:30

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((286px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 286px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.ggUpdatePosition=function (useTransition) {
		}
		el=me._up=document.createElement('div');
		els=me._up__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCAgICBjLTAuNDQyLDAuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQuOTM4LTUuNDgxbDQuOTM4LDUuNDgx'+
			'ICAgIGMwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMDIsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSAgICBDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiAgICAgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3Lj'+
			'AyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEgICAgYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4z'+
			'OTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4ICAgIGMtMC40NDIsMC40OTEtMC40MDMsMS4yNDgsMC4wODgsMS42ODljMC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEgICAgYzAuMjM2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41ICAgIEM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLj'+
			'Q5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6ICAgICBNMjMuMTQ3LDIzLjE0NmMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSAgICBjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3'+
			'LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYuOTE5LDEwLjkyM2MtMC4yMjctMC4yNTEtMC41NTEtMC4zOTYtMC44ODktMC4zOTZjLTAuMzM3LDAtMC42NjMsMC4xNDUtMC44ODksMC4zOTZsLTUuODI3LDYuNDY4ICAgIGMtMC40NDIsMC40OTEtMC40MDMsMS4yNDgsMC4wODgsMS42ODlj'+
			'MC40OTEsMC40NDIsMS4yNDcsMC40MDMsMS42ODktMC4wODhsNC45MzgtNS40ODFsNC45MzgsNS40ODEgICAgYzAuMjM2LDAuMjYzLDAuNTYzLDAuMzk2LDAuODksMC4zOTZjMC4yODUsMCwwLjU3MS0wLjEwMiwwLjgtMC4zMDhjMC40OTEtMC40NDEsMC41My0xLjE5OCwwLjA4OC0xLjY4OUwxNi45MTksMTAuOTIzeiBNMTYsMy41ICAgIEM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6ICAgICBNMjMuMTQ3LDIzLjE0NmMtMS'+
			'44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NywyLjk2MSAgICBjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9'+
			'IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTE2LjkxOSwxMC45MjNjLTAuMjI3LTAuMjUxLTAuNTUxLTAuMzk2LTAuODg5LTAuMzk2Yy0wLjMzNywwLTAuNjYzLDAuMTQ1LTAuODg5LDAuMzk2bC01LjgyNyw2LjQ2OCAgICBjLTAuNDQyLDAuNDkxLTAuNDAzLDEuMjQ4LDAuMDg4LDEuNjg5YzAuNDkxLDAuNDQyLDEuMjQ3LDAuNDAzLDEuNjg5LTAuMDg4bDQuOTM4LTUuNDgxbDQuOTM4LDUuNDgxICAgIGMwLjIzNiwwLjI2MywwLjU2MywwLjM5NiwwLjg5LDAuMzk2YzAuMjg1LDAsMC41NzEtMC4xMD'+
			'IsMC44LTAuMzA4YzAuNDkxLTAuNDQxLDAuNTMtMS4xOTgsMC4wODgtMS42ODlMMTYuOTE5LDEwLjkyM3ogTTE2LDMuNSAgICBDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiAgICAgTTIzLjE0NywyMy4xNDZjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMx'+
			'NCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEgICAgYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._up.onmouseenter=function (e) {
			me._up__img.style.visibility='hidden';
			me._up__imgo.style.visibility='inherit';
			me.elementMouseOver['up']=true;
		}
		me._up.onmousedown=function (e) {
			me.elementMouseDown['up']=true;
		}
		me._up.onmouseup=function (e) {
			me.elementMouseDown['up']=false;
		}
		me._up.onmouseleave=function (e) {
			me._up__img.style.visibility='inherit';
			me._up__imgo.style.visibility='hidden';
			me.elementMouseDown['up']=false;
			me.elementMouseOver['up']=false;
		}
		me._up.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['up']) {
				player.changeTiltLog(1,true);
			}
		}
		me._up.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._up);
		el=me._down=document.createElement('div');
		els=me._down__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODktMC4wODggICAgYy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYsMC44ODktMC4zOTZsNS44MjctNi40'+
			'NjggICAgYzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5QzIyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYgICAgYy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgIC'+
			'BjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxICAgIGMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIwLjkwOCwxMy4wMDdsLTQuOTM4LDUuNDgxbC00LjkzOC01LjQ4MWMtMC40NDMtMC40OTEtMS4xOTktMC41MzEtMS42ODkt'+
			'MC4wODggICAgYy0wLjQ5MSwwLjQ0Mi0wLjUzLDEuMTk5LTAuMDg4LDEuNjg5bDUuODI3LDYuNDY4YzAuMjI2LDAuMjUsMC41NTEsMC4zOTYsMC44ODksMC4zOTZzMC42NjMtMC4xNDYsMC44ODktMC4zOTZsNS44MjctNi40NjggICAgYzAuNDQyLTAuNDkxLDAuNDAyLTEuMjQ4LTAuMDg4LTEuNjg5QzIyLjEwNiwxMi40NzcsMjEuMzUsMTIuNTE3LDIwLjkwOCwxMy4wMDd6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy'+
			'41LDE2LDMuNXogTTIzLjE0NywyMy4xNDYgICAgYy0xLjgzMywxLjgzMS00LjM1MywyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ3LDIuOTYxICAgIGMxLjgzMSwxLjgzMywyLjk1OSw0LjM1MiwyLjk2LDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjAuOTA4LDEzLjAwN2wtNC45MzgsNS40ODFsLTQuOTM4LTUuNDgxYy0wLjQ0My0wLjQ5MS0xLjE5OS0wLjUzMS0xLjY4OS0wLjA4OCAgICBjLTAuNDkxLDAuNDQyLTAuNTMsMS4xOTktMC4wODgsMS42ODlsNS44MjcsNi40NjhjMC4yMjYsMC4y'+
			'NSwwLjU1MSwwLjM5NiwwLjg4OSwwLjM5NnMwLjY2My0wLjE0NiwwLjg4OS0wLjM5Nmw1LjgyNy02LjQ2OCAgICBjMC40NDItMC40OTEsMC40MDItMS4yNDgtMC4wODgtMS42ODlDMjIuMTA2LDEyLjQ3NywyMS4zNSwxMi41MTcsMjAuOTA4LDEzLjAwN3ogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0NiAgICBjLTEuODMzLDEuODMxLTQuMzUzLDIuOTYtNy4xNDcsMi45NnMtNS'+
			'4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDcsMi45NjEgICAgYzEuODMxLDEuODMzLDIuOTU5LDQuMzUyLDIuOTYsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwx'+
			'Nikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0yMC45MDgsMTMuMDA3bC00LjkzOCw1LjQ4MWwtNC45MzgtNS40ODFjLTAuNDQzLTAuNDkxLTEuMTk5LTAuNTMxLTEuNjg5LTAuMDg4ICAgIGMtMC40OTEsMC40NDItMC41MywxLjE5OS0wLjA4OCwxLjY4OWw1LjgyNyw2LjQ2OGMwLjIyNiwwLjI1LDAuNTUxLDAuMzk2LDAuODg5LDAuMzk2czAuNjYzLTAuMTQ2LDAuODg5LTAuMzk2bDUuODI3LTYuNDY4ICAgIGMwLjQ0Mi0wLjQ5MSwwLjQwMi0xLjI0OC0wLjA4OC0xLjY4OUMyMi4xMDYsMTIuNDc3LDIxLjM1LDEyLjUxNywyMC45MDgsMTMuMDA3eiBNMTYsMy41Qz'+
			'kuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ2ICAgIGMtMS44MzMsMS44MzEtNC4zNTMsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Ljg5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4x'+
			'Myw3LjE0NywyLjk2MSAgICBjMS44MzEsMS44MzMsMi45NTksNC4zNTIsMi45Niw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 25px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._down.onmouseenter=function (e) {
			me._down__img.style.visibility='hidden';
			me._down__imgo.style.visibility='inherit';
			me.elementMouseOver['down']=true;
		}
		me._down.onmousedown=function (e) {
			me.elementMouseDown['down']=true;
		}
		me._down.onmouseup=function (e) {
			me.elementMouseDown['down']=false;
		}
		me._down.onmouseleave=function (e) {
			me._down__img.style.visibility='inherit';
			me._down__imgo.style.visibility='hidden';
			me.elementMouseDown['down']=false;
			me.elementMouseOver['down']=false;
		}
		me._down.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['down']) {
				player.changeTiltLog(-1,true);
			}
		}
		me._down.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._down);
		el=me._left=document.createElement('div');
		els=me._left__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwQzIyLjkwMywzLjUwMSwyOC40OTksOS4wOTYsMjguNSwxNmwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNNS44OTIsMTZjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2'+
			'MSw3LjE0NmwwLDAgICAgYzEuODMzLDEuODMxLDQuMzUzLDIuOTYsNy4xNDcsMi45NjFsMCwwYzIuNzk0LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDctMi45NjFsMCwwYzEuODMtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEzLTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTQsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NCwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMSwxMC42ODYsNS44OTMsMTMuMjA1LDUuODkyLDE2TDUuODkyLDE2TDUuODkyLDE2eiIvPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMS41Ii'+
			'BzdHJva2U9IiMzQzNDM0MiIGQ9Ik0xNy4zOTEsMjIuNjg2bC02LjQ2OC01LjgyN2MtMC4yNS0wLjIyNi0wLjM5Ni0wLjU1Mi0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSAgICBsMCwwbDYuNDY4LTUuODI2YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5LDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtNS40ODEsNC45MzhsNS40ODEsNC45MzhsMCwwICAgIGMwLjQ5LDAuNDQyLDAuNTMsMS4xOTgsMC4wODgsMS42ODlsMCwwYy0wLjIzNiwwLjI2My0wLjU2MiwwLjM5Ni0wLjg4OSwwLjM5NmwwLDBDMTcuOTA2'+
			'LDIyLjk5MywxNy42MiwyMi44OTEsMTcuMzkxLDIyLjY4NiAgICBMMTcuMzkxLDIyLjY4NnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMEMyMi45MDMsMy41MDEsMjguNDk5LDkuMDk2LDI4LjUsMTZsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTUuODkyLDE2YzAsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMC'+
			'wwICAgIGMxLjgzMywxLjgzMSw0LjM1MywyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMy01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk0LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTQsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjEsMTAuNjg2LDUuODkzLDEzLjIwNSw1Ljg5MiwxNkw1Ljg5MiwxNkw1Ljg5MiwxNnoiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9'+
			'IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTcuMzkxLDIyLjY4NmwtNi40NjgtNS44MjdjLTAuMjUtMC4yMjYtMC4zOTYtMC41NTItMC4zOTYtMC44ODlsMCwwYzAtMC4zMzcsMC4xNDYtMC42NjMsMC4zOTYtMC44ODkgICAgbDAsMGw2LjQ2OC01LjgyNmMwLjQ5MS0wLjQ0MiwxLjI0Ny0wLjQwMywxLjY4OSwwLjA4OGwwLDBjMC40NDIsMC40OSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTUuNDgxLDQuOTM4bDUuNDgxLDQuOTM4bDAsMCAgICBjMC40OSwwLjQ0MiwwLjUzLDEuMTk4LDAuMDg4LDEuNjg5bDAsMGMtMC4yMzYsMC4yNjMtMC41NjIsMC4zOTYtMC44ODksMC4zOTZsMCwwQz'+
			'E3LjkwNiwyMi45OTMsMTcuNjIsMjIuODkxLDE3LjM5MSwyMi42ODYgICAgTDE3LjM5MSwyMi42ODZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTAzLDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCAgICBjLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwz'+
			'LjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE01Ljg5MiwxNmMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMCAgICBjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NCw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk0LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIxLDEwLjY4Niw1Ljg5MywxMy4yMD'+
			'UsNS44OTIsMTZMNS44OTIsMTZMNS44OTIsMTZ6Ii8+CiAgPHBhdGggZD0iTTE3LjM5MSwyMi42ODZsLTYuNDY4LTUuODI3Yy0wLjI1LTAuMjI2LTAuMzk2LTAuNTUyLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5ICAgIGwwLDBsNi40NjgtNS44MjZjMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDksMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC01LjQ4MSw0LjkzOGw1LjQ4MSw0LjkzOGwwLDAgICAgYzAuNDksMC40NDIsMC41MywxLjE5OCwwLjA4OCwxLjY4OWwwLDBjLTAuMjM2LDAuMjYzLTAuNTYyLDAuMzk2'+
			'LTAuODg5LDAuMzk2bDAsMEMxNy45MDYsMjIuOTkzLDE3LjYyLDIyLjg5MSwxNy4zOTEsMjIuNjg2ICAgIEwxNy4zOTEsMjIuNjg2eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTAzLDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCAgICBjLTAuMDAxLDYuOTA0LTUuNTk3LDEyLjQ5OS0xMi41LDEyLjVsMCwwQz'+
			'kuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE01Ljg5MiwxNmMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYxLDcuMTQ2bDAsMCAgICBjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44My0xLjgzMiwyLjk1OS00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LTEuMTMtNS4zMTQtMi45Ni03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NCw1Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk0LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIxLDEwLjY4'+
			'Niw1Ljg5MywxMy4yMDUsNS44OTIsMTZMNS44OTIsMTZMNS44OTIsMTZ6Ii8+CiAgPHBhdGggZD0iTTE3LjM5MSwyMi42ODZsLTYuNDY4LTUuODI3Yy0wLjI1LTAuMjI2LTAuMzk2LTAuNTUyLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5ICAgIGwwLDBsNi40NjgtNS44MjZjMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDksMC40MDIsMS4yNDctMC4wODgsMS42ODlsMCwwbC01LjQ4MSw0LjkzOGw1LjQ4MSw0LjkzOGwwLDAgICAgYzAuNDksMC40NDIsMC41MywxLjE5OCwwLjA4OCwxLjY4OWwwLDBjLTAuMjM2LDAuMj'+
			'YzLTAuNTYyLDAuMzk2LTAuODg5LDAuMzk2bDAsMEMxNy45MDYsMjIuOTkzLDE3LjYyLDIyLjg5MSwxNy4zOTEsMjIuNjg2ICAgIEwxNy4zOTEsMjIuNjg2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left.onmouseenter=function (e) {
			me._left__img.style.visibility='hidden';
			me._left__imgo.style.visibility='inherit';
			me.elementMouseOver['left']=true;
		}
		me._left.onmousedown=function (e) {
			me.elementMouseDown['left']=true;
		}
		me._left.onmouseup=function (e) {
			me.elementMouseDown['left']=false;
		}
		me._left.onmouseleave=function (e) {
			me._left__img.style.visibility='inherit';
			me._left__imgo.style.visibility='hidden';
			me.elementMouseDown['left']=false;
			me.elementMouseOver['left']=false;
		}
		me._left.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['left']) {
				player.changePanLog(1,true);
			}
		}
		me._left.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._left);
		el=me._right=document.createElement('div');
		els=me._right__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTMuNSwxNkMzLjUwMSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwQzIyLjkwNCwzLjUwMSwyOC40OTksOS4wOTYsMjguNSwxNmwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41MDEsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1MyAgICBDNy4wMjIsMTAuNjg2LDUu'+
			'ODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMCwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2LDcuMTQ2bDAsMGMxLjgzMywxLjgzMSw0LjM1MywyLjk2LDcuMTQ3LDIuOTYxbDAsMCAgICBjMi43OTUtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ni0yLjk2MWwwLDBjMS44MzItMS44MzIsMi45NjEtNC4zNTIsMi45NjEtNy4xNDZsMCwwYzAtMi43OTUtMS4xMjktNS4zMTQtMi45NjEtNy4xNDdsMCwwICAgIEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMEMxMy4yMDYsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODUzTDguODUzLDguODUzeiIvPgogIDxwYXRoIHN0cm9rZS13aWR0aD0iMS'+
			'41IiBzdHJva2U9IiMzQzNDM0MiIGQ9Ik0xMi45MiwyMi42NTdjLTAuNDQyLTAuNDkxLTAuNDAzLTEuMjQ3LDAuMDg4LTEuNjg5bDAsMGw1LjQ4MS00LjkzOGwtNS40ODEtNC45Mzd2MCAgICBjLTAuNDkxLTAuNDQyLTAuNTMtMS4xOTktMC4wODgtMS42OWwwLDBjMC40NDEtMC40OTEsMS4xOTgtMC41MzEsMS42ODktMC4wODhsMCwwbDYuNDY4LDUuODI2ICAgIGMwLjI1MSwwLjIyNiwwLjM5NiwwLjU1MSwwLjM5NiwwLjg4OWwwLDBjMCwwLjMzNy0wLjE0NSwwLjY2My0wLjM5NiwwLjg4OWwwLDBsLTYuNDY4LDUuODI2Yy0wLjIyOSwwLjIwNi0wLjUxNSwwLjMwOC0wLjgsMC4zMDggICAgbDAsMEMx'+
			'My40ODIsMjMuMDUzLDEzLjE1NiwyMi45MTksMTIuOTIsMjIuNjU3TDEyLjkyLDIyLjY1N3oiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0zLjUsMTZDMy41MDEsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMEMyMi45MDQsMy41MDEsMjguNDk5LDkuMDk2LDI4LjUsMTZsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNTAxLDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTMgICAgQzcuMDIyLDEwLjY4Niw1Ljg5NCwxMy4yMD'+
			'UsNS44OTMsMTZsMCwwYzAsMi43OTUsMS4xMjksNS4zMTQsMi45Niw3LjE0NmwwLDBjMS44MzMsMS44MzEsNC4zNTMsMi45Niw3LjE0NywyLjk2MWwwLDAgICAgYzIuNzk1LTAuMDAxLDUuMzE0LTEuMTMsNy4xNDYtMi45NjFsMCwwYzEuODMyLTEuODMyLDIuOTYxLTQuMzUyLDIuOTYxLTcuMTQ2bDAsMGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYxLTcuMTQ3bDAsMCAgICBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1Ljg5NCwxNiw1Ljg5M2wwLDBDMTMuMjA2LDUuODk0LDEwLjY4Niw3LjAyMiw4Ljg1Myw4Ljg1M0w4Ljg1Myw4Ljg1M3oiLz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lk'+
			'dGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMTIuOTIsMjIuNjU3Yy0wLjQ0Mi0wLjQ5MS0wLjQwMy0xLjI0NywwLjA4OC0xLjY4OWwwLDBsNS40ODEtNC45MzhsLTUuNDgxLTQuOTM3djAgICAgYy0wLjQ5MS0wLjQ0Mi0wLjUzLTEuMTk5LTAuMDg4LTEuNjlsMCwwYzAuNDQxLTAuNDkxLDEuMTk4LTAuNTMxLDEuNjg5LTAuMDg4bDAsMGw2LjQ2OCw1LjgyNiAgICBjMC4yNTEsMC4yMjYsMC4zOTYsMC41NTEsMC4zOTYsMC44ODlsMCwwYzAsMC4zMzctMC4xNDUsMC42NjMtMC4zOTYsMC44ODlsMCwwbC02LjQ2OCw1LjgyNmMtMC4yMjksMC4yMDYtMC41MTUsMC4zMDgtMC44LDAuMzA4ICAgIG'+
			'wwLDBDMTMuNDgyLDIzLjA1MywxMy4xNTYsMjIuOTE5LDEyLjkyLDIyLjY1N0wxMi45MiwyMi42NTd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTA0LDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCAgICBjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwz'+
			'LjUwMSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUzLDIuOTYsNy4xNDcsMi45NjFsMCwwICAgIGMyLjc5NS0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ2LTIuOTYxbDAsMGMxLjgzMi0xLjgzMiwyLjk2MS00LjM1MiwyLjk2MS03LjE0NmwwLDBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2MS03LjE0N2wwLDAgICAgQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIwNiw1Ljg5NCwxMC42OD'+
			'YsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPHBhdGggZD0iTTEyLjkyLDIyLjY1N2MtMC40NDItMC40OTEtMC40MDMtMS4yNDcsMC4wODgtMS42ODlsMCwwbDUuNDgxLTQuOTM4bC01LjQ4MS00LjkzN3YwICAgIGMtMC40OTEtMC40NDItMC41My0xLjE5OS0wLjA4OC0xLjY5bDAsMGMwLjQ0MS0wLjQ5MSwxLjE5OC0wLjUzMSwxLjY4OS0wLjA4OGwwLDBsNi40NjgsNS44MjYgICAgYzAuMjUxLDAuMjI2LDAuMzk2LDAuNTUxLDAuMzk2LDAuODg5bDAsMGMwLDAuMzM3LTAuMTQ1LDAuNjYzLTAuMzk2LDAuODg5bDAsMGwtNi40NjgsNS44MjZjLTAuMjI5LDAuMjA2LTAuNTE1LDAu'+
			'MzA4LTAuOCwwLjMwOCAgICBsMCwwQzEzLjQ4MiwyMy4wNTMsMTMuMTU2LDIyLjkxOSwxMi45MiwyMi42NTdMMTIuOTIsMjIuNjU3eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNTAxLDkuMDk2LDkuMDk2LDMuNTAxLDE2LDMuNWwwLDBDMjIuOTA0LDMuNTAxLDI4LjQ5OSw5LjA5NiwyOC41LDE2bDAsMCAgICBjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQz'+
			'kuMDk2LDI4LjQ5OSwzLjUwMSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDguODUzICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLDIuNzk1LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDZsMCwwYzEuODMzLDEuODMxLDQuMzUzLDIuOTYsNy4xNDcsMi45NjFsMCwwICAgIGMyLjc5NS0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ2LTIuOTYxbDAsMGMxLjgzMi0xLjgzMiwyLjk2MS00LjM1MiwyLjk2MS03LjE0NmwwLDBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2MS03LjE0N2wwLDAgICAgQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwQzEzLjIw'+
			'Niw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTNMOC44NTMsOC44NTN6Ii8+CiAgPHBhdGggZD0iTTEyLjkyLDIyLjY1N2MtMC40NDItMC40OTEtMC40MDMtMS4yNDcsMC4wODgtMS42ODlsMCwwbDUuNDgxLTQuOTM4bC01LjQ4MS00LjkzN3YwICAgIGMtMC40OTEtMC40NDItMC41My0xLjE5OS0wLjA4OC0xLjY5bDAsMGMwLjQ0MS0wLjQ5MSwxLjE5OC0wLjUzMSwxLjY4OS0wLjA4OGwwLDBsNi40NjgsNS44MjYgICAgYzAuMjUxLDAuMjI2LDAuMzk2LDAuNTUxLDAuMzk2LDAuODg5bDAsMGMwLDAuMzM3LTAuMTQ1LDAuNjYzLTAuMzk2LDAuODg5bDAsMGwtNi40NjgsNS44MjZjLTAuMjI5LD'+
			'AuMjA2LTAuNTE1LDAuMzA4LTAuOCwwLjMwOCAgICBsMCwwQzEzLjQ4MiwyMy4wNTMsMTMuMTU2LDIyLjkxOSwxMi45MiwyMi42NTdMMTIuOTIsMjIuNjU3eiIvPgogPC9nPgo8L3N2Zz4K';
		me._right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right.onmouseenter=function (e) {
			me._right__img.style.visibility='hidden';
			me._right__imgo.style.visibility='inherit';
			me.elementMouseOver['right']=true;
		}
		me._right.onmousedown=function (e) {
			me.elementMouseDown['right']=true;
		}
		me._right.onmouseup=function (e) {
			me.elementMouseDown['right']=false;
		}
		me._right.onmouseleave=function (e) {
			me._right__img.style.visibility='inherit';
			me._right__imgo.style.visibility='hidden';
			me.elementMouseDown['right']=false;
			me.elementMouseOver['right']=false;
		}
		me._right.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['right']) {
				player.changePanLog(-1,true);
			}
		}
		me._right.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._right);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwx'+
			'LjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMT'+
			'QtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMjIuMDYxLDE0LjgwM2gt'+
			'NC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5Lj'+
			'A5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMs'+
			'Ny4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomin__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjIuMDYxLDE0LjgwM2gtNC44NjRWOS45MzhjMC0wLjY2MS0wLjUzNi0xLjE5Ny0xLjE5Ny0xLjE5N2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk3djQuODY1ICAgIEg5LjkzOGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5'+
			'N2MwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoNC44NjZ2NC44NjVjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di00Ljg2NWg0Ljg2NGMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2QzIzLjI1NywxNS4zMzksMjIuNzIyLDE0LjgwMywyMi4wNjEsMTQuODAzeiAgICAgTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy'+
			'41eiBNMjMuMTQ2LDIzLjE0NmMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2ICAgIEM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjEgICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjFjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9r'+
			'ZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTIyLjA2MSwxNC44MDNoLTQuODY0VjkuOTM4YzAtMC42NjEtMC41MzYtMS4xOTctMS4xOTctMS4xOTdjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5N3Y0Ljg2NSAgICBIOS45MzhjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTdjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDQuODY2djQuODY1YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NiAgICBjMC42NjEsMCwxLjE5Ny0wLj'+
			'UzNiwxLjE5Ny0xLjE5NnYtNC44NjVoNC44NjRjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NkMyMy4yNTcsMTUuMzM5LDIyLjcyMiwxNC44MDMsMjIuMDYxLDE0LjgwM3ogICAgIE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDZjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NiAgICBDNy4wMjIsMjEuMzE0LDUu'+
			'ODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ2LTIuOTYxICAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseenter=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomin']=true;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmouseleave=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
			me.elementMouseOver['zoomin']=false;
			me._tt_zoomin.logicBlock_visible();
		}
		me._zoomin.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomin']) {
				player.changeFovLog(-1,true);
			}
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin=document.createElement('div');
		els=me._tt_zoomin__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomin.ggUpdateText=function() {
			var params = [];
			var hs = player._("Zoom In", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomin.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomin'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomin.style.transition='';
				if (me._tt_zoomin.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomin.style.visibility=(Number(me._tt_zoomin.style.opacity)>0||!me._tt_zoomin.style.opacity)?'inherit':'hidden';
					me._tt_zoomin.ggVisible=true;
				}
				else {
					me._tt_zoomin.style.visibility="hidden";
					me._tt_zoomin.ggVisible=false;
				}
			}
		}
		me._tt_zoomin.logicBlock_visible();
		me._tt_zoomin.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomin_white=document.createElement('div');
		els=me._tt_zoomin_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomin_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomin_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Zoom In", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomin_white.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomin_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomin_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_zoomin.appendChild(me._tt_zoomin_white);
		me._zoomin.appendChild(me._tt_zoomin);
		me._controller.appendChild(me._zoomin);
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5'+
			'NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTYxICAgIG'+
			'MxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjc1OCwxNC44MDRIMTAuMjQxYy0wLjY2LDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NiwxLjE5NmgxMS41MTcgICAgYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZDMjIuOTU1LDE1LjMzOSwyMi40MTksMTQuODA0LDIxLjc1OCwxNC44MDR6IE0xNiwzLjVDOS4w'+
			'OTYsMy41LDMuNSw5LjA5NiwzLjUsMTYgICAgYzAsNi45MDMsNS41OTYsMTIuNDk5LDEyLjUsMTIuNWM2LjkwMy0wLjAwMSwxMi40OTktNS41OTcsMTIuNS0xMi41QzI4LjQ5OSw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDYgICAgYy0xLjgzMiwxLjgzMS00LjM1MiwyLjk2LTcuMTQ2LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ2LTIuOTZDNy4wMjIsMjEuMzE0LDUuODk0LDE4Ljc5NSw1Ljg5MywxNiAgICBjMC4wMDEtMi43OTUsMS4xMjktNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ni0yLjk2MWMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLD'+
			'cuMTQ2LDIuOTYxICAgIGMxLjgzMiwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ3QzI2LjEwNiwxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDYsMjMuMTQ2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._zoomout__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjEuNzU4LDE0LjgwNEgxMC4yNDFjLTAuNjYsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDExLjUxNyAgICBjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NkMyMi45NTUsMTUu'+
			'MzM5LDIyLjQxOSwxNC44MDQsMjEuNzU4LDE0LjgwNHogTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNiAgICBjMCw2LjkwMyw1LjU5NiwxMi40OTksMTIuNSwxMi41YzYuOTAzLTAuMDAxLDEyLjQ5OS01LjU5NywxMi41LTEyLjVDMjguNDk5LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0NiAgICBjLTEuODMyLDEuODMxLTQuMzUyLDIuOTYtNy4xNDYsMi45NnMtNS4zMTQtMS4xMjktNy4xNDYtMi45NkM3LjAyMiwyMS4zMTQsNS44OTQsMTguNzk1LDUuODkzLDE2ICAgIGMwLjAwMS0yLjc5NSwxLjEyOS01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0Lj'+
			'M1Mi0yLjk2LDcuMTQ2LTIuOTYxYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NjEgICAgYzEuODMyLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDdDMjYuMTA2LDE4Ljc5NSwyNC45NzksMjEuMzE0LDIzLjE0NiwyMy4xNDZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0yMS43NTgsMTQuODA0SDEwLjI0MWMtMC42NiwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41'+
			'MzYsMS4xOTYsMS4xOTYsMS4xOTZoMTEuNTE3ICAgIGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2QzIyLjk1NSwxNS4zMzksMjIuNDE5LDE0LjgwNCwyMS43NTgsMTQuODA0eiBNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2ICAgIGMwLDYuOTAzLDUuNTk2LDEyLjQ5OSwxMi41LDEyLjVjNi45MDMtMC4wMDEsMTIuNDk5LTUuNTk3LDEyLjUtMTIuNUMyOC40OTksOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ2ICAgIGMtMS44MzIsMS44MzEtNC4zNTIsMi45Ni03LjE0NiwyLjk2cy01LjMxNC0xLjEyOS03LjE0Ni0yLjk2QzcuMDIyLDIxLjMxNCw1Lj'+
			'g5NCwxOC43OTUsNS44OTMsMTYgICAgYzAuMDAxLTIuNzk1LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDYtMi45NjFjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2MSAgICBjMS44MzIsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0N0MyNi4xMDYsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ2LDIzLjE0NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 120px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseenter=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
			me.elementMouseOver['zoomout']=true;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmouseleave=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
			me.elementMouseOver['zoomout']=false;
			me._tt_zoomout.logicBlock_visible();
		}
		me._zoomout.ggUpdateConditionTimer=function () {
			if (me.elementMouseDown['zoomout']) {
				player.changeFovLog(1,true);
			}
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout=document.createElement('div');
		els=me._tt_zoomout__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomout.ggUpdateText=function() {
			var params = [];
			var hs = player._("Zoom Out", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomout.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['zoomout'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_zoomout.style.transition='';
				if (me._tt_zoomout.ggCurrentLogicStateVisible == 0) {
					me._tt_zoomout.style.visibility=(Number(me._tt_zoomout.style.opacity)>0||!me._tt_zoomout.style.opacity)?'inherit':'hidden';
					me._tt_zoomout.ggVisible=true;
				}
				else {
					me._tt_zoomout.style.visibility="hidden";
					me._tt_zoomout.ggVisible=false;
				}
			}
		}
		me._tt_zoomout.logicBlock_visible();
		me._tt_zoomout.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_zoomout_white=document.createElement('div');
		els=me._tt_zoomout_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_zoomout_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_zoomout_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Zoom Out", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_zoomout_white.ggUpdateText();
		el.appendChild(els);
		me._tt_zoomout_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_zoomout_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_zoomout.appendChild(me._tt_zoomout_white);
		me._zoomout.appendChild(me._tt_zoomout);
		me._controller.appendChild(me._zoomout);
		el=me._button_simplex_auto_rotate=document.createElement('div');
		el.ggId="button_simplex_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 160px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_simplex_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_simplex_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_stop_auto_rotate=document.createElement('div');
		els=me._button_stop_auto_rotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTAzLDAsMTIuNDk5LTUuNTk2LDEyLjUtMTIuNSAgIEMyOC40OTgsOS4wOTYsMjIuOTAzLDMuNSwxNiwzLjV6IE0yMy4xNDYsMjMuMTQ3Yy0xLjgzMywxLjgzMS00LjM1MiwyLjk1OS03LjE0NiwyLjk2MWMtMi43OTYtMC4wMDItNS4z'+
			'MTUtMS4xMy03LjE0Ny0yLjk2MSAgIEM3LjAyMSwyMS4zMTQsNS44OTMsMTguNzk1LDUuODkyLDE2YzAuMDAxLTIuNzk1LDEuMTMtNS4zMTQsMi45NjEtNy4xNDdjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45NiAgIGMyLjc5NSwwLjAwMSw1LjMxMywxLjEzLDcuMTQ2LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLjk2LDcuMTQ3UzI0Ljk3OCwyMS4zMTQsMjMuMTQ2LDIzLjE0N3ogTTIzLjkwNywxMy4zOTIgICBjLTAuNzYzLTEuMDI0LTEuOTA2LTEuNzc2LTMuMjYyLTIuMzA1QzE5LjI4NywxMC41NjIsMTcuNywxMC4yNywxNiwxMC4yNjljLTIuMjY4LDAuMDAzLTQuMzMzLD'+
			'AuNTE2LTUuOTI1LDEuNDI0ICAgYy0wLjc5NSwwLjQ1Ni0xLjQ3NywxLjAxNi0xLjk4MywxLjdjLTAuNTA1LDAuNjgtMC44MjgsMS41MDgtMC44MjYsMi4zOTJjLTAuMDAyLDAuODE5LDAuMjc2LDEuNTk1LDAuNzIyLDIuMjQzICAgYzAuNDQ1LDAuNjUxLDEuMDQ5LDEuMTk0LDEuNzU1LDEuNjQ2YzAuMTk5LDAuMTI4LDAuNDIzLDAuMTg4LDAuNjQzLDAuMTg4YzAuMzk1LDAsMC43ODEtMC4xOTUsMS4wMDktMC41NTMgICBjMC4zNTYtMC41NTcsMC4xOTMtMS4yOTYtMC4zNjMtMS42NTFsLTAuMDAxLTAuMDAxYy0wLjQ5LTAuMzEyLTAuODQ4LTAuNjU1LTEuMDY1LTAuOTc3Yy0wLjIxOC0wLjMyNC0w'+
			'LjMwNC0wLjYwOC0wLjMwNi0wLjg5NiAgIGMwLjAwMi0wLjMxLDAuMTAyLTAuNjE3LDAuMzU4LTAuOTcxYzAuMzgxLTAuNTI1LDEuMTUtMS4wOTIsMi4yLTEuNDk1YzEuMDQ4LTAuNDA2LDIuMzYxLTAuNjU4LDMuNzgzLTAuNjU3ICAgYzEuODk1LTAuMDAzLDMuNTk5LDAuNDUxLDQuNzM0LDEuMTA3YzAuNTY5LDAuMzI1LDAuOTkyLDAuNjk2LDEuMjQ4LDEuMDQ1YzAuMjU4LDAuMzU0LDAuMzU2LDAuNjYxLDAuMzU4LDAuOTcxICAgYzAuMDA1LDAuNTAzLTAuMzA1LDEuMTA1LTEuMTM1LDEuNzEyYy0wLjUzNiwwLjM4Ny0wLjY1NiwxLjEzNS0wLjI3MSwxLjY3MWMwLjM4NywwLjUzNSwxLjEzNSwwLj'+
			'Y1NiwxLjY3MSwwLjI3MSAgIGMxLjIxMi0wLjg2NywyLjEyMy0yLjEzLDIuMTI3LTMuNjUzQzI0LjczNSwxNC45LDI0LjQxMiwxNC4wNzIsMjMuOTA3LDEzLjM5MnogTTE5LjM2NCwxNi4xODJjLTAuNDY4LTAuNDY3LTEuMjI2LTAuNDY3LTEuNjkyLDAgICBsLTEuNTU3LDEuNTU4bC0xLjU1OC0xLjU1OGMtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MmwxLjU1NywxLjU1N2wtMS41NTcsMS41NTcgICBjLTAuNDY3LDAuNDY4LTAuNDY3LDEuMjI2LDAsMS42OTJjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMw'+
			'NywwLDAuNjEyLTAuMTE3LDAuODQ2LTAuMzUxbDEuNTU4LTEuNTU4bDEuNTU3LDEuNTU4ICAgYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ny0wLjM1MWMwLjQ2Ny0wLjQ2NywwLjQ2Ny0xLjIyNSwwLTEuNjkybC0xLjU1OC0xLjU1N2wxLjU1OC0xLjU1NyAgIEMxOS44MzEsMTcuNDA2LDE5LjgzMSwxNi42NDgsMTkuMzY0LDE2LjE4MnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMC'+
			'w2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwMywwLDEyLjQ5OS01LjU5NiwxMi41LTEyLjUgICBDMjguNDk4LDkuMDk2LDIyLjkwMywzLjUsMTYsMy41eiBNMjMuMTQ2LDIzLjE0N2MtMS44MzMsMS44MzEtNC4zNTIsMi45NTktNy4xNDYsMi45NjFjLTIuNzk2LTAuMDAyLTUuMzE1LTEuMTMtNy4xNDctMi45NjEgICBDNy4wMjEsMjEuMzE0LDUuODkzLDE4Ljc5NSw1Ljg5MiwxNmMwLjAwMS0yLjc5NSwxLjEzLTUuMzE0LDIuOTYxLTcuMTQ3YzEuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTYgICBjMi43OTUsMC4wMDEsNS4zMTMsMS4xMyw3LjE0NiwyLjk2YzEuODMxLDEuODMz'+
			'LDIuOTYsNC4zNTIsMi45Niw3LjE0N1MyNC45NzgsMjEuMzE0LDIzLjE0NiwyMy4xNDd6IE0yMy45MDcsMTMuMzkyICAgYy0wLjc2My0xLjAyNC0xLjkwNi0xLjc3Ni0zLjI2Mi0yLjMwNUMxOS4yODcsMTAuNTYyLDE3LjcsMTAuMjcsMTYsMTAuMjY5Yy0yLjI2OCwwLjAwMy00LjMzMywwLjUxNi01LjkyNSwxLjQyNCAgIGMtMC43OTUsMC40NTYtMS40NzcsMS4wMTYtMS45ODMsMS43Yy0wLjUwNSwwLjY4LTAuODI4LDEuNTA4LTAuODI2LDIuMzkyYy0wLjAwMiwwLjgxOSwwLjI3NiwxLjU5NSwwLjcyMiwyLjI0MyAgIGMwLjQ0NSwwLjY1MSwxLjA0OSwxLjE5NCwxLjc1NSwxLjY0NmMwLjE5OSwwLj'+
			'EyOCwwLjQyMywwLjE4OCwwLjY0MywwLjE4OGMwLjM5NSwwLDAuNzgxLTAuMTk1LDEuMDA5LTAuNTUzICAgYzAuMzU2LTAuNTU3LDAuMTkzLTEuMjk2LTAuMzYzLTEuNjUxbC0wLjAwMS0wLjAwMWMtMC40OS0wLjMxMi0wLjg0OC0wLjY1NS0xLjA2NS0wLjk3N2MtMC4yMTgtMC4zMjQtMC4zMDQtMC42MDgtMC4zMDYtMC44OTYgICBjMC4wMDItMC4zMSwwLjEwMi0wLjYxNywwLjM1OC0wLjk3MWMwLjM4MS0wLjUyNSwxLjE1LTEuMDkyLDIuMi0xLjQ5NWMxLjA0OC0wLjQwNiwyLjM2MS0wLjY1OCwzLjc4My0wLjY1NyAgIGMxLjg5NS0wLjAwMywzLjU5OSwwLjQ1MSw0LjczNCwxLjEwN2MwLjU2OSww'+
			'LjMyNSwwLjk5MiwwLjY5NiwxLjI0OCwxLjA0NWMwLjI1OCwwLjM1NCwwLjM1NiwwLjY2MSwwLjM1OCwwLjk3MSAgIGMwLjAwNSwwLjUwMy0wLjMwNSwxLjEwNS0xLjEzNSwxLjcxMmMtMC41MzYsMC4zODctMC42NTYsMS4xMzUtMC4yNzEsMS42NzFjMC4zODcsMC41MzUsMS4xMzUsMC42NTYsMS42NzEsMC4yNzEgICBjMS4yMTItMC44NjcsMi4xMjMtMi4xMywyLjEyNy0zLjY1M0MyNC43MzUsMTQuOSwyNC40MTIsMTQuMDcyLDIzLjkwNywxMy4zOTJ6IE0xOS4zNjQsMTYuMTgyYy0wLjQ2OC0wLjQ2Ny0xLjIyNi0wLjQ2Ny0xLjY5MiwwICAgbC0xLjU1NywxLjU1OGwtMS41NTgtMS41NThjLTAuND'+
			'Y3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJsMS41NTcsMS41NTdsLTEuNTU3LDEuNTU3ICAgYy0wLjQ2NywwLjQ2OC0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuMjMzLDAuMjMzLDAuNTQsMC4zNTEsMC44NDYsMC4zNTFjMC4zMDcsMCwwLjYxMi0wLjExNywwLjg0Ni0wLjM1MWwxLjU1OC0xLjU1OGwxLjU1NywxLjU1OCAgIGMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDctMC4zNTFjMC40NjctMC40NjcsMC40NjctMS4yMjUsMC0xLjY5MmwtMS41NTgtMS41NTdsMS41NTgtMS41'+
			'NTcgICBDMTkuODMxLDE3LjQwNiwxOS44MzEsMTYuNjQ4LDE5LjM2NCwxNi4xODJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_stop_auto_rotate__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_stop_auto_rotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41ICAgQzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0Niwy'+
			'My4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYxYy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxICAgQzcuMDIxLDIxLjMxNCw1Ljg5MywxOC43OTUsNS44OTIsMTZjMC4wMDEtMi43OTUsMS4xMy01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2ICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3eiBNMjMuOTA3LDEzLjM5MiAgIGMtMC43NjMtMS4wMjQtMS45MDYtMS43NzYtMy4yNjItMi'+
			'4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQgICBjLTAuNzk1LDAuNDU2LTEuNDc3LDEuMDE2LTEuOTgzLDEuN2MtMC41MDUsMC42OC0wLjgyOCwxLjUwOC0wLjgyNiwyLjM5MmMtMC4wMDIsMC44MTksMC4yNzYsMS41OTUsMC43MjIsMi4yNDMgICBjMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4xMjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1MyAgIGMwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4w'+
			'MDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2ICAgYzAuMDAyLTAuMzEsMC4xMDItMC42MTcsMC4zNTgtMC45NzFjMC4zODEtMC41MjUsMS4xNS0xLjA5MiwyLjItMS40OTVjMS4wNDgtMC40MDYsMi4zNjEtMC42NTgsMy43ODMtMC42NTcgICBjMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzEgICBjMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MT'+
			'JjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxICAgYzEuMjEyLTAuODY3LDIuMTIzLTIuMTMsMi4xMjctMy42NTNDMjQuNzM1LDE0LjksMjQuNDEyLDE0LjA3MiwyMy45MDcsMTMuMzkyeiBNMTkuMzY0LDE2LjE4MmMtMC40NjgtMC40NjctMS4yMjYtMC40NjctMS42OTIsMCAgIGwtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybDEuNTU3LDEuNTU3bC0xLjU1NywxLjU1NyAgIGMtMC40NjcsMC40Njgt'+
			'MC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDYtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTggICBjMC4yMzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ3LTAuMzUxYzAuNDY3LTAuNDY3LDAuNDY3LTEuMjI1LDAtMS42OTJsLTEuNTU4LTEuNTU3bDEuNTU4LTEuNTU3ICAgQzE5LjgzMSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgyeiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT'+
			'0iIzAwMDAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDMsMCwxMi40OTktNS41OTYsMTIuNS0xMi41ICAgQzI4LjQ5OCw5LjA5NiwyMi45MDMsMy41LDE2LDMuNXogTTIzLjE0NiwyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTU5LTcuMTQ2LDIuOTYxYy0yLjc5Ni0wLjAwMi01LjMxNS0xLjEzLTcuMTQ3LTIuOTYxICAgQzcuMDIxLDIxLjMxNCw1Ljg5MywxOC43OTUsNS44OTIsMTZj'+
			'MC4wMDEtMi43OTUsMS4xMy01LjMxNCwyLjk2MS03LjE0N2MxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2ICAgYzIuNzk1LDAuMDAxLDUuMzEzLDEuMTMsNy4xNDYsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYsNy4xNDdTMjQuOTc4LDIxLjMxNCwyMy4xNDYsMjMuMTQ3eiBNMjMuOTA3LDEzLjM5MiAgIGMtMC43NjMtMS4wMjQtMS45MDYtMS43NzYtMy4yNjItMi4zMDVDMTkuMjg3LDEwLjU2MiwxNy43LDEwLjI3LDE2LDEwLjI2OWMtMi4yNjgsMC4wMDMtNC4zMzMsMC41MTYtNS45MjUsMS40MjQgICBjLTAuNzk1LDAuNDU2LTEuNDc3LDEuMDE2LTEuOTgzLDEuN2MtMC'+
			'41MDUsMC42OC0wLjgyOCwxLjUwOC0wLjgyNiwyLjM5MmMtMC4wMDIsMC44MTksMC4yNzYsMS41OTUsMC43MjIsMi4yNDMgICBjMC40NDUsMC42NTEsMS4wNDksMS4xOTQsMS43NTUsMS42NDZjMC4xOTksMC4xMjgsMC40MjMsMC4xODgsMC42NDMsMC4xODhjMC4zOTUsMCwwLjc4MS0wLjE5NSwxLjAwOS0wLjU1MyAgIGMwLjM1Ni0wLjU1NywwLjE5My0xLjI5Ni0wLjM2My0xLjY1MWwtMC4wMDEtMC4wMDFjLTAuNDktMC4zMTItMC44NDgtMC42NTUtMS4wNjUtMC45NzdjLTAuMjE4LTAuMzI0LTAuMzA0LTAuNjA4LTAuMzA2LTAuODk2ICAgYzAuMDAyLTAuMzEsMC4xMDItMC42MTcsMC4zNTgtMC45'+
			'NzFjMC4zODEtMC41MjUsMS4xNS0xLjA5MiwyLjItMS40OTVjMS4wNDgtMC40MDYsMi4zNjEtMC42NTgsMy43ODMtMC42NTcgICBjMS44OTUtMC4wMDMsMy41OTksMC40NTEsNC43MzQsMS4xMDdjMC41NjksMC4zMjUsMC45OTIsMC42OTYsMS4yNDgsMS4wNDVjMC4yNTgsMC4zNTQsMC4zNTYsMC42NjEsMC4zNTgsMC45NzEgICBjMC4wMDUsMC41MDMtMC4zMDUsMS4xMDUtMS4xMzUsMS43MTJjLTAuNTM2LDAuMzg3LTAuNjU2LDEuMTM1LTAuMjcxLDEuNjcxYzAuMzg3LDAuNTM1LDEuMTM1LDAuNjU2LDEuNjcxLDAuMjcxICAgYzEuMjEyLTAuODY3LDIuMTIzLTIuMTMsMi4xMjctMy42NTNDMjQuNz'+
			'M1LDE0LjksMjQuNDEyLDE0LjA3MiwyMy45MDcsMTMuMzkyeiBNMTkuMzY0LDE2LjE4MmMtMC40NjgtMC40NjctMS4yMjYtMC40NjctMS42OTIsMCAgIGwtMS41NTcsMS41NThsLTEuNTU4LTEuNTU4Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkybDEuNTU3LDEuNTU3bC0xLjU1NywxLjU1NyAgIGMtMC40NjcsMC40NjgtMC40NjcsMS4yMjYsMCwxLjY5MmMwLjIzMywwLjIzMywwLjU0LDAuMzUxLDAuODQ2LDAuMzUxYzAuMzA3LDAsMC42MTItMC4xMTcsMC44NDYtMC4zNTFsMS41NTgtMS41NThsMS41NTcsMS41NTggICBjMC4y'+
			'MzMsMC4yMzMsMC41NCwwLjM1MSwwLjg0NiwwLjM1MWMwLjMwNywwLDAuNjEyLTAuMTE3LDAuODQ3LTAuMzUxYzAuNDY3LTAuNDY3LDAuNDY3LTEuMjI1LDAtMS42OTJsLTEuNTU4LTEuNTU3bDEuNTU4LTEuNTU3ICAgQzE5LjgzMSwxNy40MDYsMTkuODMxLDE2LjY0OCwxOS4zNjQsMTYuMTgyeiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_stop_auto_rotate__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button stop auto rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_stop_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_stop_auto_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_stop_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_stop_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_stop_auto_rotate.style.transition='';
				if (me._button_stop_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._button_stop_auto_rotate.style.visibility=(Number(me._button_stop_auto_rotate.style.opacity)>0||!me._button_stop_auto_rotate.style.opacity)?'inherit':'hidden';
					me._button_stop_auto_rotate.ggVisible=true;
				}
				else {
					me._button_stop_auto_rotate.style.visibility="hidden";
					me._button_stop_auto_rotate.ggVisible=false;
				}
			}
		}
		me._button_stop_auto_rotate.logicBlock_visible();
		me._button_stop_auto_rotate.onclick=function (e) {
			player.stopAutorotate();
		}
		me._button_stop_auto_rotate.onmouseenter=function (e) {
			me._button_stop_auto_rotate__img.style.visibility='hidden';
			me._button_stop_auto_rotate__imgo.style.visibility='inherit';
			me.elementMouseOver['button_stop_auto_rotate']=true;
			me._tt_stop_auto_rotate.logicBlock_visible();
		}
		me._button_stop_auto_rotate.onmouseleave=function (e) {
			me._button_stop_auto_rotate__img.style.visibility='inherit';
			me._button_stop_auto_rotate__imgo.style.visibility='hidden';
			me.elementMouseOver['button_stop_auto_rotate']=false;
			me._tt_stop_auto_rotate.logicBlock_visible();
		}
		me._button_stop_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_stop_auto_rotate=document.createElement('div');
		els=me._tt_stop_auto_rotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_stop_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_stop_auto_rotate.ggUpdateText=function() {
			var params = [];
			var hs = player._("Stop Auto Rotate", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_stop_auto_rotate.ggUpdateText();
		el.appendChild(els);
		me._tt_stop_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_stop_auto_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_stop_auto_rotate'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_stop_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_stop_auto_rotate.style.transition='';
				if (me._tt_stop_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_stop_auto_rotate.style.visibility=(Number(me._tt_stop_auto_rotate.style.opacity)>0||!me._tt_stop_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_stop_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_stop_auto_rotate.style.visibility="hidden";
					me._tt_stop_auto_rotate.ggVisible=false;
				}
			}
		}
		me._tt_stop_auto_rotate.logicBlock_visible();
		me._tt_stop_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_stop_auto_rotate_white=document.createElement('div');
		els=me._tt_stop_auto_rotate_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_stop_auto_rotate_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_stop_auto_rotate_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Stop Auto Rotate", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_stop_auto_rotate_white.ggUpdateText();
		el.appendChild(els);
		me._tt_stop_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_stop_auto_rotate_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_stop_auto_rotate.appendChild(me._tt_stop_auto_rotate_white);
		me._button_stop_auto_rotate.appendChild(me._tt_stop_auto_rotate);
		me._button_simplex_auto_rotate.appendChild(me._button_stop_auto_rotate);
		el=me._button_start_auto_rotate=document.createElement('div');
		els=me._button_start_auto_rotate__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQgICAgIGMtMS44MzEsMS44MzMt'+
			'Mi45Niw0LjM1Mi0yLjk2LDcuMTQ3bDAsMGMwLDIuNzk0LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDdsMCwwYzEuODMyLDEuODMsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTQtMi45Ni03LjE0N2wwLDAgICAgIGMtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMD'+
			'csMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwICAgIGMwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTctMC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEtMS4yNDctMS4wNDVsMCwwICAgIGMtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCAg'+
			'ICBjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLjk3OGwwLDAgICAgaDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLTEuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAgICAgYy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMG'+
			'MwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwICAgIGMxLjU5Mi0wLjkwNywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCAgICBjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5MmwwLDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAgICAgYy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4'+
			'NCwxOC4yMTQsMjAuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSAgICBsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LTAuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkgICAgYzAuNDksMC40NDIsMC41MywxLjE5OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC'+
			'41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEgICAgTDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgICBjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4'+
			'Ljg1NCAgICAgYy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwICAgICBjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgYy0xLjgzMy0xLjgzMi00LjM1My0yLjk2LTcuMTQ3LTIuOTZsMCwwQzEzLjIwNSw1Ljg5NCwxMC42ODYsNy4wMjIsOC44NTMsOC44NTRMOC44NTMsOC44NTR6Ii8+Ci'+
			'AgPC9nPgogIDxwYXRoIGQ9Ik0xOC4wNywyMC4wMDFjLTAuMTc0LTAuNjM4LDAuMjAzLTEuMjk1LDAuODQxLTEuNDY5bDAsMGMxLjEzNC0wLjMwNiwyLjA1NS0wLjc4OSwyLjYzMy0xLjMwNWwwLDAgICAgYzAuNTg0LTAuNTI2LDAuNzk3LTEuMDA4LDAuNzk4LTEuNDQ0bDAsMGMtMC4wMDItMC4zMS0wLjEwMi0wLjYxNy0wLjM1OS0wLjk3bDAsMGMtMC4yNTYtMC4zNS0wLjY3OC0wLjcyMS0xLjI0Ny0xLjA0NWwwLDAgICAgYy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAwMS0yLjczNSwwLjI1LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTks'+
			'MC45NjktMi4yMDEsMS40OTVsMCwwICAgIGMtMC4yNTcsMC4zNTQtMC4zNTYsMC42NjEtMC4zNTgsMC45N2wwLDBjMC4wMDEsMC4yODgsMC4wODcsMC41NzEsMC4zMDYsMC44OTVsMCwwYzAuMjE3LDAuMzIxLDAuNTc1LDAuNjY2LDEuMDY1LDAuOTc4bDAsMCAgICBoMC4wMDFjMC41NTcsMC4zNTYsMC43MiwxLjA5NiwwLjM2NCwxLjY1MmwwLDBjLTAuMzU1LDAuNTU3LTEuMDk1LDAuNzItMS42NTIsMC4zNjRsMCwwYy0wLjcwNi0wLjQ1MS0xLjMxLTAuOTk0LTEuNzU1LTEuNjQ2bDAsMCAgICBjLTAuNDQ0LTAuNjQ3LTAuNzIzLTEuNDIzLTAuNzIyLTIuMjQzbDAsMGMtMC4wMDEtMC44ODMsMC4zMj'+
			'EtMS43MTIsMC44MjctMi4zOTJsMCwwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDAgICAgYzEuNTkyLTAuOTA3LDMuNjU3LTEuNDE5LDUuOTI1LTEuNDIzbDAsMGMxLjcsMCwzLjI4OCwwLjI5Myw0LjY0NiwwLjgxOGwwLDBjMS4zNTUsMC41MjksMi40OTgsMS4yODEsMy4yNjEsMi4zMDVsMCwwICAgIGMwLjUwNiwwLjY4LDAuODI5LDEuNTA4LDAuODI2LDIuMzkybDAsMGMwLjAwMSwxLjI4OC0wLjY2OCwyLjQxMy0xLjYwMiwzLjIzM2wwLDBjLTAuOTQyLDAuODMyLTIuMTc4LDEuNDM4LTMuNTk0LDEuODI1bDAsMCAgICBjLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0'+
			'LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4KICA8cGF0aCBkPSJNMTYuMzk2LDIzLjYyMWwtMy4zNzMtMy4wMzljLTAuMjUxLTAuMjI2LTAuMzk2LTAuNTUxLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5ICAgIGwwLDBsMy4zNzQtMy4wMzljMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDkxLDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtMi4zODYsMi4xNWwyLjM4NiwyLjE0OSAgICBjMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LD'+
			'EuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMSAgICBMMTYuMzk2LDIzLjYyMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_start_auto_rotate__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_start_auto_rotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjUsMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgICBjLTAuMDAxLDYuOTA0LTUuNTk2LDEyLjQ5OS0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5'+
			'OSwzLjUsMjIuOTA0LDMuNSwxNkwzLjUsMTZ6IE04Ljg1Myw4Ljg1NCAgICAgYy0xLjgzMSwxLjgzMy0yLjk2LDQuMzUyLTIuOTYsNy4xNDdsMCwwYzAsMi43OTQsMS4xMjksNS4zMTQsMi45Niw3LjE0N2wwLDBjMS44MzIsMS44Myw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwICAgICBjMi43OTUsMCw1LjMxNC0xLjEzLDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMzLDIuOTU5LTQuMzUzLDIuOTYtNy4xNDdsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgYy0xLjgzMy0xLjgzMi00LjM1My0yLjk2LTcuMTQ3LTIuOTZsMCwwQzEzLjIwNSw1Ljg5NCwxMC42OD'+
			'YsNy4wMjIsOC44NTMsOC44NTRMOC44NTMsOC44NTR6Ii8+CiAgPC9nPgogIDxwYXRoIGQ9Ik0xOC4wNywyMC4wMDFjLTAuMTc0LTAuNjM4LDAuMjAzLTEuMjk1LDAuODQxLTEuNDY5bDAsMGMxLjEzNC0wLjMwNiwyLjA1NS0wLjc4OSwyLjYzMy0xLjMwNWwwLDAgICAgYzAuNTg0LTAuNTI2LDAuNzk3LTEuMDA4LDAuNzk4LTEuNDQ0bDAsMGMtMC4wMDItMC4zMS0wLjEwMi0wLjYxNy0wLjM1OS0wLjk3bDAsMGMtMC4yNTYtMC4zNS0wLjY3OC0wLjcyMS0xLjI0Ny0xLjA0NWwwLDAgICAgYy0xLjEzNy0wLjY1Ni0yLjg0LTEuMTEtNC43MzUtMS4xMDZsMCwwYy0xLjQyMi0wLjAwMS0yLjczNSwwLjI1'+
			'LTMuNzgzLDAuNjU3bDAsMGMtMS4wNTEsMC40MDItMS44MTksMC45NjktMi4yMDEsMS40OTVsMCwwICAgIGMtMC4yNTcsMC4zNTQtMC4zNTYsMC42NjEtMC4zNTgsMC45N2wwLDBjMC4wMDEsMC4yODgsMC4wODcsMC41NzEsMC4zMDYsMC44OTVsMCwwYzAuMjE3LDAuMzIxLDAuNTc1LDAuNjY2LDEuMDY1LDAuOTc4bDAsMCAgICBoMC4wMDFjMC41NTcsMC4zNTYsMC43MiwxLjA5NiwwLjM2NCwxLjY1MmwwLDBjLTAuMzU1LDAuNTU3LTEuMDk1LDAuNzItMS42NTIsMC4zNjRsMCwwYy0wLjcwNi0wLjQ1MS0xLjMxLTAuOTk0LTEuNzU1LTEuNjQ2bDAsMCAgICBjLTAuNDQ0LTAuNjQ3LTAuNzIzLTEuND'+
			'IzLTAuNzIyLTIuMjQzbDAsMGMtMC4wMDEtMC44ODMsMC4zMjEtMS43MTIsMC44MjctMi4zOTJsMCwwYzAuNTA3LTAuNjg0LDEuMTg4LTEuMjQ0LDEuOTgzLTEuN2wwLDAgICAgYzEuNTkyLTAuOTA3LDMuNjU3LTEuNDE5LDUuOTI1LTEuNDIzbDAsMGMxLjcsMCwzLjI4OCwwLjI5Myw0LjY0NiwwLjgxOGwwLDBjMS4zNTUsMC41MjksMi40OTgsMS4yODEsMy4yNjEsMi4zMDVsMCwwICAgIGMwLjUwNiwwLjY4LDAuODI5LDEuNTA4LDAuODI2LDIuMzkybDAsMGMwLjAwMSwxLjI4OC0wLjY2OCwyLjQxMy0xLjYwMiwzLjIzM2wwLDBjLTAuOTQyLDAuODMyLTIuMTc4LDEuNDM4LTMuNTk0LDEuODI1bDAs'+
			'MCAgICBjLTAuMTA0LDAuMDI4LTAuMjExLDAuMDQyLTAuMzE0LDAuMDQybDAsMEMxOC42OTYsMjAuODg0LDE4LjIxNCwyMC41MzMsMTguMDcsMjAuMDAxTDE4LjA3LDIwLjAwMXoiLz4KICA8cGF0aCBkPSJNMTYuMzk2LDIzLjYyMWwtMy4zNzMtMy4wMzljLTAuMjUxLTAuMjI2LTAuMzk2LTAuNTUxLTAuMzk2LTAuODg5bDAsMGMwLTAuMzM3LDAuMTQ2LTAuNjYzLDAuMzk2LTAuODg5ICAgIGwwLDBsMy4zNzQtMy4wMzljMC40OTEtMC40NDIsMS4yNDctMC40MDMsMS42ODksMC4wODhsMCwwYzAuNDQyLDAuNDkxLDAuNDAyLDEuMjQ3LTAuMDg4LDEuNjg5bDAsMGwtMi4zODYsMi4xNWwyLjM4NiwyLj'+
			'E0OSAgICBjMC40OSwwLjQ0MiwwLjUzLDEuMTk5LDAuMDg4LDEuNjlsMCwwYy0wLjIzNiwwLjI2Mi0wLjU2MiwwLjM5NS0wLjg5LDAuMzk1bDAsMEMxNi45MTIsMjMuOTI4LDE2LjYyNSwyMy44MjYsMTYuMzk2LDIzLjYyMSAgICBMMTYuMzk2LDIzLjYyMXoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZjMC02LjkwNCw1LjU5Ni0xMi41LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwx'+
			'Mi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsOC44NTQgICAgIGMtMS44MzEsMS44MzMtMi45Niw0LjM1Mi0yLjk2LDcuMTQ3bDAsMGMwLDIuNzk0LDEuMTI5LDUuMzE0LDIuOTYsNy4xNDdsMCwwYzEuODMyLDEuODMsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2bDAsMGMxLjgzMS0xLjgzMywyLjk1OS00LjM1MywyLjk2LTcuMTQ3bDAsMGMtMC4wMDEtMi43OTUtMS4xMjktNS'+
			'4zMTQtMi45Ni03LjE0N2wwLDAgICAgIGMtMS44MzMtMS44MzItNC4zNTMtMi45Ni03LjE0Ny0yLjk2bDAsMEMxMy4yMDUsNS44OTQsMTAuNjg2LDcuMDIyLDguODUzLDguODU0TDguODUzLDguODU0eiIvPgogIDwvZz4KICA8cGF0aCBkPSJNMTguMDcsMjAuMDAxYy0wLjE3NC0wLjYzOCwwLjIwMy0xLjI5NSwwLjg0MS0xLjQ2OWwwLDBjMS4xMzQtMC4zMDYsMi4wNTUtMC43ODksMi42MzMtMS4zMDVsMCwwICAgIGMwLjU4NC0wLjUyNiwwLjc5Ny0xLjAwOCwwLjc5OC0xLjQ0NGwwLDBjLTAuMDAyLTAuMzEtMC4xMDItMC42MTctMC4zNTktMC45N2wwLDBjLTAuMjU2LTAuMzUtMC42NzgtMC43MjEt'+
			'MS4yNDctMS4wNDVsMCwwICAgIGMtMS4xMzctMC42NTYtMi44NC0xLjExLTQuNzM1LTEuMTA2bDAsMGMtMS40MjItMC4wMDEtMi43MzUsMC4yNS0zLjc4MywwLjY1N2wwLDBjLTEuMDUxLDAuNDAyLTEuODE5LDAuOTY5LTIuMjAxLDEuNDk1bDAsMCAgICBjLTAuMjU3LDAuMzU0LTAuMzU2LDAuNjYxLTAuMzU4LDAuOTdsMCwwYzAuMDAxLDAuMjg4LDAuMDg3LDAuNTcxLDAuMzA2LDAuODk1bDAsMGMwLjIxNywwLjMyMSwwLjU3NSwwLjY2NiwxLjA2NSwwLjk3OGwwLDAgICAgaDAuMDAxYzAuNTU3LDAuMzU2LDAuNzIsMS4wOTYsMC4zNjQsMS42NTJsMCwwYy0wLjM1NSwwLjU1Ny0xLjA5NSwwLjcyLT'+
			'EuNjUyLDAuMzY0bDAsMGMtMC43MDYtMC40NTEtMS4zMS0wLjk5NC0xLjc1NS0xLjY0NmwwLDAgICAgYy0wLjQ0NC0wLjY0Ny0wLjcyMy0xLjQyMy0wLjcyMi0yLjI0M2wwLDBjLTAuMDAxLTAuODgzLDAuMzIxLTEuNzEyLDAuODI3LTIuMzkybDAsMGMwLjUwNy0wLjY4NCwxLjE4OC0xLjI0NCwxLjk4My0xLjdsMCwwICAgIGMxLjU5Mi0wLjkwNywzLjY1Ny0xLjQxOSw1LjkyNS0xLjQyM2wwLDBjMS43LDAsMy4yODgsMC4yOTMsNC42NDYsMC44MThsMCwwYzEuMzU1LDAuNTI5LDIuNDk4LDEuMjgxLDMuMjYxLDIuMzA1bDAsMCAgICBjMC41MDYsMC42OCwwLjgyOSwxLjUwOCwwLjgyNiwyLjM5Mmww'+
			'LDBjMC4wMDEsMS4yODgtMC42NjgsMi40MTMtMS42MDIsMy4yMzNsMCwwYy0wLjk0MiwwLjgzMi0yLjE3OCwxLjQzOC0zLjU5NCwxLjgyNWwwLDAgICAgYy0wLjEwNCwwLjAyOC0wLjIxMSwwLjA0Mi0wLjMxNCwwLjA0MmwwLDBDMTguNjk2LDIwLjg4NCwxOC4yMTQsMjAuNTMzLDE4LjA3LDIwLjAwMUwxOC4wNywyMC4wMDF6Ii8+CiAgPHBhdGggZD0iTTE2LjM5NiwyMy42MjFsLTMuMzczLTMuMDM5Yy0wLjI1MS0wLjIyNi0wLjM5Ni0wLjU1MS0wLjM5Ni0wLjg4OWwwLDBjMC0wLjMzNywwLjE0Ni0wLjY2MywwLjM5Ni0wLjg4OSAgICBsMCwwbDMuMzc0LTMuMDM5YzAuNDkxLTAuNDQyLDEuMjQ3LT'+
			'AuNDAzLDEuNjg5LDAuMDg4bDAsMGMwLjQ0MiwwLjQ5MSwwLjQwMiwxLjI0Ny0wLjA4OCwxLjY4OWwwLDBsLTIuMzg2LDIuMTVsMi4zODYsMi4xNDkgICAgYzAuNDksMC40NDIsMC41MywxLjE5OSwwLjA4OCwxLjY5bDAsMGMtMC4yMzYsMC4yNjItMC41NjIsMC4zOTUtMC44OSwwLjM5NWwwLDBDMTYuOTEyLDIzLjkyOCwxNi42MjUsMjMuODI2LDE2LjM5NiwyMy42MjEgICAgTDE2LjM5NiwyMy42MjF6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_start_auto_rotate__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button start auto rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_start_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_start_auto_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsAutorotating() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_start_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_start_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_start_auto_rotate.style.transition='';
				if (me._button_start_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._button_start_auto_rotate.style.visibility="hidden";
					me._button_start_auto_rotate.ggVisible=false;
				}
				else {
					me._button_start_auto_rotate.style.visibility=(Number(me._button_start_auto_rotate.style.opacity)>0||!me._button_start_auto_rotate.style.opacity)?'inherit':'hidden';
					me._button_start_auto_rotate.ggVisible=true;
				}
			}
		}
		me._button_start_auto_rotate.logicBlock_visible();
		me._button_start_auto_rotate.onclick=function (e) {
			player.startAutorotate(0.1,5,1);
		}
		me._button_start_auto_rotate.onmouseenter=function (e) {
			me._button_start_auto_rotate__img.style.visibility='hidden';
			me._button_start_auto_rotate__imgo.style.visibility='inherit';
			me.elementMouseOver['button_start_auto_rotate']=true;
			me._tt_start_auto_rotate.logicBlock_visible();
		}
		me._button_start_auto_rotate.onmouseleave=function (e) {
			me._button_start_auto_rotate__img.style.visibility='inherit';
			me._button_start_auto_rotate__imgo.style.visibility='hidden';
			me.elementMouseOver['button_start_auto_rotate']=false;
			me._tt_start_auto_rotate.logicBlock_visible();
		}
		me._button_start_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_start_auto_rotate=document.createElement('div');
		els=me._tt_start_auto_rotate__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_start_auto_rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_start_auto_rotate.ggUpdateText=function() {
			var params = [];
			var hs = player._("Start Auto Rotate", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_start_auto_rotate.ggUpdateText();
		el.appendChild(els);
		me._tt_start_auto_rotate.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_start_auto_rotate.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_start_auto_rotate'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_start_auto_rotate.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_start_auto_rotate.style.transition='';
				if (me._tt_start_auto_rotate.ggCurrentLogicStateVisible == 0) {
					me._tt_start_auto_rotate.style.visibility=(Number(me._tt_start_auto_rotate.style.opacity)>0||!me._tt_start_auto_rotate.style.opacity)?'inherit':'hidden';
					me._tt_start_auto_rotate.ggVisible=true;
				}
				else {
					me._tt_start_auto_rotate.style.visibility="hidden";
					me._tt_start_auto_rotate.ggVisible=false;
				}
			}
		}
		me._tt_start_auto_rotate.logicBlock_visible();
		me._tt_start_auto_rotate.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_start_auto_rotate_white=document.createElement('div');
		els=me._tt_start_auto_rotate_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_start_auto_rotate_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_start_auto_rotate_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Start Auto Rotate", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_start_auto_rotate_white.ggUpdateText();
		el.appendChild(els);
		me._tt_start_auto_rotate_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_start_auto_rotate_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_start_auto_rotate.appendChild(me._tt_start_auto_rotate_white);
		me._button_start_auto_rotate.appendChild(me._tt_start_auto_rotate);
		me._button_simplex_auto_rotate.appendChild(me._button_start_auto_rotate);
		me._controller.appendChild(me._button_simplex_auto_rotate);
		el=me._info=document.createElement('div');
		els=me._info__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgIGMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzICAgICBDNy4wMjIsMTAuNjg2LDUu'+
			'ODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgIGMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cG'+
			'F0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkgICAgIGMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCAgICAgIGMwLTAuNjYxLTAuNTM2LTEuMTk2'+
			'LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3ICAgICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYgICAgICBDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj'+
			'4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMgICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMjks'+
			'Ny4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgICBDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSAgICAgYzAsMC42NjEtMC41MzYsMS4xOT'+
			'YtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0ICAgICAgYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcgICAgICBjLTAuNjYxLDAtMS4xOTcsMC41'+
			'MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiAgICAgIEMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._info__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTks'+
			'My41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMgICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgICBDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLD'+
			'EwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSAgICAgYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4w'+
			'NjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0ICAgICAgYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcgICAgICBjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiAgICAgIEMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KID'+
			'wvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgIGMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzICAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIw'+
			'NSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgIGMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMT'+
			'QuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkgICAgIGMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCAgICAgIGMwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEu'+
			'MTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3ICAgICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYgICAgICBDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._info__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 190px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info.onclick=function (e) {
			me._userdata.style.transition='none';
			me._userdata.style.visibility=(Number(me._userdata.style.opacity)>0||!me._userdata.style.opacity)?'inherit':'hidden';
			me._userdata.ggVisible=true;
			me._screentint.style.transition='none';
			me._screentint.style.visibility=(Number(me._screentint.style.opacity)>0||!me._screentint.style.opacity)?'inherit':'hidden';
			me._screentint.ggVisible=true;
			me._controller.style.transition='none';
			me._controller.style.visibility='hidden';
			me._controller.ggVisible=false;
		}
		me._info.onmouseenter=function (e) {
			me._info__img.style.visibility='hidden';
			me._info__imgo.style.visibility='inherit';
			me.elementMouseOver['info']=true;
			me._tt_info.logicBlock_visible();
		}
		me._info.onmouseleave=function (e) {
			me._info__img.style.visibility='inherit';
			me._info__imgo.style.visibility='hidden';
			me.elementMouseOver['info']=false;
			me._tt_info.logicBlock_visible();
		}
		me._info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_info=document.createElement('div');
		els=me._tt_info__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_info.ggUpdateText=function() {
			var params = [];
			var hs = player._("Show Information", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_info.ggUpdateText();
		el.appendChild(els);
		me._tt_info.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['info'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_info.style.transition='';
				if (me._tt_info.ggCurrentLogicStateVisible == 0) {
					me._tt_info.style.visibility=(Number(me._tt_info.style.opacity)>0||!me._tt_info.style.opacity)?'inherit':'hidden';
					me._tt_info.ggVisible=true;
				}
				else {
					me._tt_info.style.visibility="hidden";
					me._tt_info.ggVisible=false;
				}
			}
		}
		me._tt_info.logicBlock_visible();
		me._tt_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_info_white=document.createElement('div');
		els=me._tt_info_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_info_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_info_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Show Information", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_info_white.ggUpdateText();
		el.appendChild(els);
		me._tt_info_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_info_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_info.appendChild(me._tt_info_white);
		me._info.appendChild(me._tt_info);
		me._controller.appendChild(me._info);
		el=me._button_simplex_movemode=document.createElement('div');
		el.ggId="button_simplex_movemode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 220px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_simplex_movemode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_simplex_movemode.ggUpdatePosition=function (useTransition) {
		}
		el=me._movemode_drag=document.createElement('div');
		els=me._movemode_drag__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41MDEsOS4wOTYsMy41LDE2YzAsNi45MDQsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDQtMC4wMDEsMTIuNS01LjU5NiwxMi41LTEyLjUgICAgQzI4LjQ5OSw5LjA5NiwyMi45MDQsMy41LDE2LDMuNXogTTIzLjMyNCwyMi45NjJsLTAuNDktMC44OTZjMC42OTQtMS43NiwwLjU2NS0zLjk4OS0wLjE2MS01LjcyMiAg'+
			'ICBjLTAuMDA3LTAuMTMzLTAuMDM2LTAuMjY3LTAuMDk2LTAuMzk1bC0yLjI3OS00Ljk0OGMtMC4yNDctMC41MzMtMC44NzktMC43NjYtMS40MTItMC41MjFjLTAuNTMzLDAuMjQ2LTAuNzY2LDAuODc3LTAuNTIxLDEuNDExICAgIGwxLjQxLDMuMDU4bC0wLjIyNiwwLjA5NWwtMy4yODgtNi4wMDdjLTAuMjgyLTAuNTE1LTAuOTI4LTAuNzA0LTEuNDQzLTAuNDIyYy0wLjUxNSwwLjI4Mi0wLjcwNCwwLjkyOC0wLjQyMiwxLjQ0M2wzLjE4NCw1LjgxNyAgICBsLTAuMjE1LDAuMDlsLTMuODgzLTcuMDk0Yy0wLjI4Mi0wLjUxNi0wLjkyOS0wLjcwNS0xLjQ0My0wLjQyMmMtMC41MTYsMC4yODItMC43MD'+
			'UsMC45MjgtMC40MjIsMS40NDNsMy43OCw2LjkwNWwtMC4yNjMsMC4xMTEgICAgbC0xLjc2Ny0yLjA4MmwtMi4zODUtMi44MTFjLTAuMzgtMC40NDgtMS4wNTEtMC41MDMtMS40OTktMC4xMjNjLTAuNDQ4LDAuMzc5LTAuNTAzLDEuMDUxLTAuMTIzLDEuNDk5bDIuMzg1LDIuODExbDIuMzQsMi43NTkgICAgbDEuMTI5LDIuMzQ4bC0wLjIyNiwwLjE2OGMtMC4wNTQtMC4wNzQtMC4xMTQtMC4xNDUtMC4xODYtMC4yMDdsLTMuMjM1LTIuNzljLTAuNS0wLjQzMi0xLjI1NS0wLjM3Ni0xLjY4NywwLjEyNCAgICBjLTAuNDMyLDAuNS0wLjM3NiwxLjI1NiwwLjEyNCwxLjY4N2wzLjA0NiwyLjYyOWwtMC4w'+
			'MDIsMC4wMDJjMC4wMzQsMC4wMjksMC4wNjgsMC4wNTYsMC4xMDMsMC4wODVsMC4wODcsMC4wNzUgICAgYzAuMDA3LDAuMDA2LDAuMDE1LDAuMDEsMC4wMjIsMC4wMTZjMS41MDIsMS4yNTcsMy4wNjEsMi4wMzksNC42ODgsMi4wNjhsMC4zNjcsMC42NzJjLTAuNzQ0LDAuMTc0LTEuNTE5LDAuMjctMi4zMTgsMC4yNyAgICBjLTIuNzk1LTAuMDAxLTUuMzE0LTEuMTMtNy4xNDctMi45NjFDNy4wMjIsMjEuMzEzLDUuODk0LDE4Ljc5NSw1Ljg5MywxNmMwLjAwMS0yLjc5NCwxLjEyOS01LjMxNCwyLjk2MS03LjE0NyAgICBjMS44MzMtMS44MzEsNC4zNTItMi45NTksNy4xNDctMi45NmMyLjc5NCwwLj'+
			'AwMSw1LjMxNCwxLjEzLDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MywyLjk2MSw3LjE0NyAgICBDMjYuMTA3LDE4LjcwMywyNS4wNSwyMS4xNDYsMjMuMzI0LDIyLjk2MnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNTAxLDkuMDk2LDMuNSwxNmMwLDYuOTA0LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTA0LTAuMDAxLDEyLjUtNS41OTYsMTIuNS0xMi41ICAgIEMyOC40OTksOS4wOTYsMjIuOTA0LDMuNSwxNiwzLjV6IE0yMy4zMjQsMjIuOTYybC0wLjQ5'+
			'LTAuODk2YzAuNjk0LTEuNzYsMC41NjUtMy45ODktMC4xNjEtNS43MjIgICAgYy0wLjAwNy0wLjEzMy0wLjAzNi0wLjI2Ny0wLjA5Ni0wLjM5NWwtMi4yNzktNC45NDhjLTAuMjQ3LTAuNTMzLTAuODc5LTAuNzY2LTEuNDEyLTAuNTIxYy0wLjUzMywwLjI0Ni0wLjc2NiwwLjg3Ny0wLjUyMSwxLjQxMSAgICBsMS40MSwzLjA1OGwtMC4yMjYsMC4wOTVsLTMuMjg4LTYuMDA3Yy0wLjI4Mi0wLjUxNS0wLjkyOC0wLjcwNC0xLjQ0My0wLjQyMmMtMC41MTUsMC4yODItMC43MDQsMC45MjgtMC40MjIsMS40NDNsMy4xODQsNS44MTcgICAgbC0wLjIxNSwwLjA5bC0zLjg4My03LjA5NGMtMC4yODItMC41MT'+
			'YtMC45MjktMC43MDUtMS40NDMtMC40MjJjLTAuNTE2LDAuMjgyLTAuNzA1LDAuOTI4LTAuNDIyLDEuNDQzbDMuNzgsNi45MDVsLTAuMjYzLDAuMTExICAgIGwtMS43NjctMi4wODJsLTIuMzg1LTIuODExYy0wLjM4LTAuNDQ4LTEuMDUxLTAuNTAzLTEuNDk5LTAuMTIzYy0wLjQ0OCwwLjM3OS0wLjUwMywxLjA1MS0wLjEyMywxLjQ5OWwyLjM4NSwyLjgxMWwyLjM0LDIuNzU5ICAgIGwxLjEyOSwyLjM0OGwtMC4yMjYsMC4xNjhjLTAuMDU0LTAuMDc0LTAuMTE0LTAuMTQ1LTAuMTg2LTAuMjA3bC0zLjIzNS0yLjc5Yy0wLjUtMC40MzItMS4yNTUtMC4zNzYtMS42ODcsMC4xMjQgICAgYy0wLjQzMiww'+
			'LjUtMC4zNzYsMS4yNTYsMC4xMjQsMS42ODdsMy4wNDYsMi42MjlsLTAuMDAyLDAuMDAyYzAuMDM0LDAuMDI5LDAuMDY4LDAuMDU2LDAuMTAzLDAuMDg1bDAuMDg3LDAuMDc1ICAgIGMwLjAwNywwLjAwNiwwLjAxNSwwLjAxLDAuMDIyLDAuMDE2YzEuNTAyLDEuMjU3LDMuMDYxLDIuMDM5LDQuNjg4LDIuMDY4bDAuMzY3LDAuNjcyYy0wLjc0NCwwLjE3NC0xLjUxOSwwLjI3LTIuMzE4LDAuMjcgICAgYy0yLjc5NS0wLjAwMS01LjMxNC0xLjEzLTcuMTQ3LTIuOTYxQzcuMDIyLDIxLjMxMyw1Ljg5NCwxOC43OTUsNS44OTMsMTZjMC4wMDEtMi43OTQsMS4xMjktNS4zMTQsMi45NjEtNy4xNDcgICAgYz'+
			'EuODMzLTEuODMxLDQuMzUyLTIuOTU5LDcuMTQ3LTIuOTZjMi43OTQsMC4wMDEsNS4zMTQsMS4xMyw3LjE0NywyLjk2YzEuODMxLDEuODMzLDIuOTYsNC4zNTMsMi45NjEsNy4xNDcgICAgQzI2LjEwNywxOC43MDMsMjUuMDUsMjEuMTQ2LDIzLjMyNCwyMi45NjJ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._movemode_drag__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._movemode_drag__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUwMSw5LjA5NiwzLjUsMTZjMCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwNC0wLjAwMSwxMi41LTUuNTk2LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwNCwzLjUsMTYsMy41eiBNMjMu'+
			'MzI0LDIyLjk2MmwtMC40OS0wLjg5NmMwLjY5NC0xLjc2LDAuNTY1LTMuOTg5LTAuMTYxLTUuNzIyICAgIGMtMC4wMDctMC4xMzMtMC4wMzYtMC4yNjctMC4wOTYtMC4zOTVsLTIuMjc5LTQuOTQ4Yy0wLjI0Ny0wLjUzMy0wLjg3OS0wLjc2Ni0xLjQxMi0wLjUyMWMtMC41MzMsMC4yNDYtMC43NjYsMC44NzctMC41MjEsMS40MTEgICAgbDEuNDEsMy4wNThsLTAuMjI2LDAuMDk1bC0zLjI4OC02LjAwN2MtMC4yODItMC41MTUtMC45MjgtMC43MDQtMS40NDMtMC40MjJjLTAuNTE1LDAuMjgyLTAuNzA0LDAuOTI4LTAuNDIyLDEuNDQzbDMuMTg0LDUuODE3ICAgIGwtMC4yMTUsMC4wOWwtMy44ODMtNy'+
			'4wOTRjLTAuMjgyLTAuNTE2LTAuOTI5LTAuNzA1LTEuNDQzLTAuNDIyYy0wLjUxNiwwLjI4Mi0wLjcwNSwwLjkyOC0wLjQyMiwxLjQ0M2wzLjc4LDYuOTA1bC0wLjI2MywwLjExMSAgICBsLTEuNzY3LTIuMDgybC0yLjM4NS0yLjgxMWMtMC4zOC0wLjQ0OC0xLjA1MS0wLjUwMy0xLjQ5OS0wLjEyM2MtMC40NDgsMC4zNzktMC41MDMsMS4wNTEtMC4xMjMsMS40OTlsMi4zODUsMi44MTFsMi4zNCwyLjc1OSAgICBsMS4xMjksMi4zNDhsLTAuMjI2LDAuMTY4Yy0wLjA1NC0wLjA3NC0wLjExNC0wLjE0NS0wLjE4Ni0wLjIwN2wtMy4yMzUtMi43OWMtMC41LTAuNDMyLTEuMjU1LTAuMzc2LTEuNjg3LDAu'+
			'MTI0ICAgIGMtMC40MzIsMC41LTAuMzc2LDEuMjU2LDAuMTI0LDEuNjg3bDMuMDQ2LDIuNjI5bC0wLjAwMiwwLjAwMmMwLjAzNCwwLjAyOSwwLjA2OCwwLjA1NiwwLjEwMywwLjA4NWwwLjA4NywwLjA3NSAgICBjMC4wMDcsMC4wMDYsMC4wMTUsMC4wMSwwLjAyMiwwLjAxNmMxLjUwMiwxLjI1NywzLjA2MSwyLjAzOSw0LjY4OCwyLjA2OGwwLjM2NywwLjY3MmMtMC43NDQsMC4xNzQtMS41MTksMC4yNy0yLjMxOCwwLjI3ICAgIGMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ny0yLjk2MUM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk0LDEuMTI5LTUuMzE0LD'+
			'IuOTYxLTcuMTQ3ICAgIGMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2YzIuNzk0LDAuMDAxLDUuMzE0LDEuMTMsNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUzLDIuOTYxLDcuMTQ3ICAgIEMyNi4xMDcsMTguNzAzLDI1LjA1LDIxLjE0NiwyMy4zMjQsMjIuOTYyeiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUwMSw5LjA5NiwzLjUsMTZj'+
			'MCw2LjkwNCw1LjU5NiwxMi41LDEyLjUsMTIuNWM2LjkwNC0wLjAwMSwxMi41LTUuNTk2LDEyLjUtMTIuNSAgICBDMjguNDk5LDkuMDk2LDIyLjkwNCwzLjUsMTYsMy41eiBNMjMuMzI0LDIyLjk2MmwtMC40OS0wLjg5NmMwLjY5NC0xLjc2LDAuNTY1LTMuOTg5LTAuMTYxLTUuNzIyICAgIGMtMC4wMDctMC4xMzMtMC4wMzYtMC4yNjctMC4wOTYtMC4zOTVsLTIuMjc5LTQuOTQ4Yy0wLjI0Ny0wLjUzMy0wLjg3OS0wLjc2Ni0xLjQxMi0wLjUyMWMtMC41MzMsMC4yNDYtMC43NjYsMC44NzctMC41MjEsMS40MTEgICAgbDEuNDEsMy4wNThsLTAuMjI2LDAuMDk1bC0zLjI4OC02LjAwN2MtMC4yODItMC'+
			'41MTUtMC45MjgtMC43MDQtMS40NDMtMC40MjJjLTAuNTE1LDAuMjgyLTAuNzA0LDAuOTI4LTAuNDIyLDEuNDQzbDMuMTg0LDUuODE3ICAgIGwtMC4yMTUsMC4wOWwtMy44ODMtNy4wOTRjLTAuMjgyLTAuNTE2LTAuOTI5LTAuNzA1LTEuNDQzLTAuNDIyYy0wLjUxNiwwLjI4Mi0wLjcwNSwwLjkyOC0wLjQyMiwxLjQ0M2wzLjc4LDYuOTA1bC0wLjI2MywwLjExMSAgICBsLTEuNzY3LTIuMDgybC0yLjM4NS0yLjgxMWMtMC4zOC0wLjQ0OC0xLjA1MS0wLjUwMy0xLjQ5OS0wLjEyM2MtMC40NDgsMC4zNzktMC41MDMsMS4wNTEtMC4xMjMsMS40OTlsMi4zODUsMi44MTFsMi4zNCwyLjc1OSAgICBsMS4x'+
			'MjksMi4zNDhsLTAuMjI2LDAuMTY4Yy0wLjA1NC0wLjA3NC0wLjExNC0wLjE0NS0wLjE4Ni0wLjIwN2wtMy4yMzUtMi43OWMtMC41LTAuNDMyLTEuMjU1LTAuMzc2LTEuNjg3LDAuMTI0ICAgIGMtMC40MzIsMC41LTAuMzc2LDEuMjU2LDAuMTI0LDEuNjg3bDMuMDQ2LDIuNjI5bC0wLjAwMiwwLjAwMmMwLjAzNCwwLjAyOSwwLjA2OCwwLjA1NiwwLjEwMywwLjA4NWwwLjA4NywwLjA3NSAgICBjMC4wMDcsMC4wMDYsMC4wMTUsMC4wMSwwLjAyMiwwLjAxNmMxLjUwMiwxLjI1NywzLjA2MSwyLjAzOSw0LjY4OCwyLjA2OGwwLjM2NywwLjY3MmMtMC43NDQsMC4xNzQtMS41MTksMC4yNy0yLjMxOCwwLj'+
			'I3ICAgIGMtMi43OTUtMC4wMDEtNS4zMTQtMS4xMy03LjE0Ny0yLjk2MUM3LjAyMiwyMS4zMTMsNS44OTQsMTguNzk1LDUuODkzLDE2YzAuMDAxLTIuNzk0LDEuMTI5LTUuMzE0LDIuOTYxLTcuMTQ3ICAgIGMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk1OSw3LjE0Ny0yLjk2YzIuNzk0LDAuMDAxLDUuMzE0LDEuMTMsNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUzLDIuOTYxLDcuMTQ3ICAgIEMyNi4xMDcsMTguNzAzLDI1LjA1LDIxLjE0NiwyMy4zMjQsMjIuOTYyeiIvPgogPC9nPgo8L3N2Zz4K';
		me._movemode_drag__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="movemode_drag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._movemode_drag.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._movemode_drag.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewMode() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_drag.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_drag.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._movemode_drag.style.transition='';
				if (me._movemode_drag.ggCurrentLogicStateVisible == 0) {
					me._movemode_drag.style.visibility=(Number(me._movemode_drag.style.opacity)>0||!me._movemode_drag.style.opacity)?'inherit':'hidden';
					me._movemode_drag.ggVisible=true;
				}
				else {
					me._movemode_drag.style.visibility="hidden";
					me._movemode_drag.ggVisible=false;
				}
			}
		}
		me._movemode_drag.logicBlock_visible();
		me._movemode_drag.onclick=function (e) {
			player.changeViewMode(1);
		}
		me._movemode_drag.onmouseenter=function (e) {
			me._movemode_drag__img.style.visibility='hidden';
			me._movemode_drag__imgo.style.visibility='inherit';
			me.elementMouseOver['movemode_drag']=true;
			me._tt_movemode0.logicBlock_visible();
		}
		me._movemode_drag.onmouseleave=function (e) {
			me._movemode_drag__img.style.visibility='inherit';
			me._movemode_drag__imgo.style.visibility='hidden';
			me.elementMouseOver['movemode_drag']=false;
			me._tt_movemode0.logicBlock_visible();
		}
		me._movemode_drag.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_movemode0=document.createElement('div');
		els=me._tt_movemode0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_movemode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_movemode0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Change Control Mode", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_movemode0.ggUpdateText();
		el.appendChild(els);
		me._tt_movemode0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_movemode0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['movemode_drag'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_movemode0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_movemode0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_movemode0.style.transition='';
				if (me._tt_movemode0.ggCurrentLogicStateVisible == 0) {
					me._tt_movemode0.style.visibility=(Number(me._tt_movemode0.style.opacity)>0||!me._tt_movemode0.style.opacity)?'inherit':'hidden';
					me._tt_movemode0.ggVisible=true;
				}
				else {
					me._tt_movemode0.style.visibility="hidden";
					me._tt_movemode0.ggVisible=false;
				}
			}
		}
		me._tt_movemode0.logicBlock_visible();
		me._tt_movemode0.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_movemode_white0=document.createElement('div');
		els=me._tt_movemode_white0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_movemode_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_movemode_white0.ggUpdateText=function() {
			var params = [];
			var hs = player._("Change Control Mode", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_movemode_white0.ggUpdateText();
		el.appendChild(els);
		me._tt_movemode_white0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_movemode_white0.ggUpdatePosition=function (useTransition) {
		}
		me._tt_movemode0.appendChild(me._tt_movemode_white0);
		me._movemode_drag.appendChild(me._tt_movemode0);
		me._button_simplex_movemode.appendChild(me._movemode_drag);
		el=me._movemode_continuous=document.createElement('div');
		els=me._movemode_continuous__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA1LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTA0LDAsMTIuNS01LjU5NiwxMi41LTEyLjUgICBDMjguNSw5LjA5NiwyMi45MDQsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTYtNy4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDctMi45'+
			'NiAgIGMtMS44MzEtMS44MzMtMi45Ni00LjM1My0yLjk2LTcuMTQ4YzAtMi43OTUsMS4xMy01LjMxMywyLjk2LTcuMTQ2YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDctMi45NiAgIGMyLjc5NSwwLDUuMzE0LDEuMTI5LDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0NkMyNi4xMDcsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0N3ogTTI1LjExMywxNS4zMDkgICBsLTIuOTc4LTIuNjgyYy0wLjM4MS0wLjM0NC0wLjk3LTAuMzEzLTEuMzEzLDAuMDY4Yy0wLjM0NCwwLjM4Mi0wLjMxMywwLjk3LDAuMDY5LDEuMzE0aC0wLjAwMWwxLjI3NywwLjkyOG'+
			'gtNS4xMDRWOS44MzMgICBsMC45MjcsMS4yNzZjMC4zNDQsMC4zODEsMC45MzIsMC40MTMsMS4zMTMsMC4wNjhjMC4zODItMC4zNDQsMC40MTMtMC45MzMsMC4wNjktMS4zMTRsLTIuNjgzLTIuOTc4ICAgQzE2LjUxNSw2LjY5MSwxNi4yNjMsNi41NzksMTYsNi41NzljLTAuMjYzLDAtMC41MTYsMC4xMTMtMC42OTEsMC4zMDhsLTIuNjgyLDIuOTc4Yy0wLjM0NCwwLjM4MS0wLjMxMywwLjk3LDAuMDY4LDEuMzE0ICAgYzAuMTc4LDAuMTYsMC40MDEsMC4yMzksMC42MjMsMC4yMzljMC4yNTUsMCwwLjUwOC0wLjEwNCwwLjY5Mi0wLjMwOGgwbDAuOTI4LTEuMjc5djUuMTA2SDkuODMybDEuMjc4LTAu'+
			'OTI4ICAgYzAuMzgxLTAuMzQ0LDAuNDEyLTAuOTMyLDAuMDY4LTEuMzE0cy0wLjkzMi0wLjQxMy0xLjMxMy0wLjA2OWwtMi45NzgsMi42ODNDNi42OTEsMTUuNDg0LDYuNTc4LDE1LjczNyw2LjU3OCwxNiAgIHMwLjExMywwLjUxNSwwLjMwOSwwLjY5MWwyLjk3OCwyLjY4MmMwLjE3OCwwLjE2LDAuNCwwLjIzOSwwLjYyMiwwLjIzOWMwLjI1NCwwLDAuNTA4LTAuMTA0LDAuNjkyLTAuMzA4ICAgYzAuMzQ0LTAuMzgyLDAuMzEzLTAuOTcxLTAuMDY4LTEuMzE0bC0xLjI3Ny0wLjkyN2g1LjEwNHY1LjEwNWwtMC45MjgtMS4yNzhjLTAuMzQ0LTAuMzgyLTAuOTMyLTAuNDEzLTEuMzE0LTAuMDY5ICAgYy'+
			'0wLjM4MiwwLjM0NC0wLjQxMiwwLjkzMy0wLjA2OCwxLjMxNGwyLjY4MiwyLjk3OGMwLjE3NiwwLjE5NSwwLjQyOSwwLjMwOSwwLjY5MSwwLjMwOWMwLjI2MywwLDAuNTE2LTAuMTEzLDAuNjkyLTAuMzA5ICAgbDIuNjgyLTIuOTc4YzAuMzQ0LTAuMzgyLDAuMzEyLTAuOTcxLTAuMDY5LTEuMzE0cy0wLjk3LTAuMzEyLTEuMzEzLDAuMDY5bC0wLjkyNywxLjI3NnYtNS4xMDRoNS4xMDRsLTEuMjc3LDAuOTI4ICAgYy0wLjM4MiwwLjM0My0wLjQxMiwwLjkzMi0wLjA2OCwxLjMxM2MwLjE4NCwwLjIwNCwwLjQzNywwLjMwOCwwLjY5MSwwLjMwOGMwLjIyMiwwLDAuNDQ1LTAuMDc5LDAuNjIzLTAuMjM5'+
			'bDIuOTc3LTIuNjgyICAgYzAuMTk1LTAuMTc2LDAuMzA5LTAuNDI4LDAuMzA5LTAuNjkxQzI1LjQyMiwxNS43MzcsMjUuMzA5LDE1LjQ4NCwyNS4xMTMsMTUuMzA5eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTE2LDMuNUM5LjA5NiwzLjUsMy41LDkuMDk2LDMuNSwxNmMwLDYuOTA1LDUuNTk2LDEyLjUsMTIuNSwxMi41YzYuOTA0LDAsMTIuNS01LjU5NiwxMi41LTEyLjUgICBDMjguNSw5LjA5NiwyMi45MDQsMy41LDE2LDMuNXogTTIzLjE0NywyMy4xNDdjLTEuODMzLDEuODMxLTQuMzUyLDIuOTYtNy'+
			'4xNDcsMi45NnMtNS4zMTQtMS4xMjktNy4xNDctMi45NiAgIGMtMS44MzEtMS44MzMtMi45Ni00LjM1My0yLjk2LTcuMTQ4YzAtMi43OTUsMS4xMy01LjMxMywyLjk2LTcuMTQ2YzEuODMzLTEuODMxLDQuMzUyLTIuOTYsNy4xNDctMi45NiAgIGMyLjc5NSwwLDUuMzE0LDEuMTI5LDcuMTQ3LDIuOTZjMS44MzEsMS44MzMsMi45Niw0LjM1MiwyLjk2MSw3LjE0NkMyNi4xMDcsMTguNzk1LDI0Ljk3OSwyMS4zMTQsMjMuMTQ3LDIzLjE0N3ogTTI1LjExMywxNS4zMDkgICBsLTIuOTc4LTIuNjgyYy0wLjM4MS0wLjM0NC0wLjk3LTAuMzEzLTEuMzEzLDAuMDY4Yy0wLjM0NCwwLjM4Mi0wLjMxMywwLjk3'+
			'LDAuMDY5LDEuMzE0aC0wLjAwMWwxLjI3NywwLjkyOGgtNS4xMDRWOS44MzMgICBsMC45MjcsMS4yNzZjMC4zNDQsMC4zODEsMC45MzIsMC40MTMsMS4zMTMsMC4wNjhjMC4zODItMC4zNDQsMC40MTMtMC45MzMsMC4wNjktMS4zMTRsLTIuNjgzLTIuOTc4ICAgQzE2LjUxNSw2LjY5MSwxNi4yNjMsNi41NzksMTYsNi41NzljLTAuMjYzLDAtMC41MTYsMC4xMTMtMC42OTEsMC4zMDhsLTIuNjgyLDIuOTc4Yy0wLjM0NCwwLjM4MS0wLjMxMywwLjk3LDAuMDY4LDEuMzE0ICAgYzAuMTc4LDAuMTYsMC40MDEsMC4yMzksMC42MjMsMC4yMzljMC4yNTUsMCwwLjUwOC0wLjEwNCwwLjY5Mi0wLjMwOGgwbD'+
			'AuOTI4LTEuMjc5djUuMTA2SDkuODMybDEuMjc4LTAuOTI4ICAgYzAuMzgxLTAuMzQ0LDAuNDEyLTAuOTMyLDAuMDY4LTEuMzE0cy0wLjkzMi0wLjQxMy0xLjMxMy0wLjA2OWwtMi45NzgsMi42ODNDNi42OTEsMTUuNDg0LDYuNTc4LDE1LjczNyw2LjU3OCwxNiAgIHMwLjExMywwLjUxNSwwLjMwOSwwLjY5MWwyLjk3OCwyLjY4MmMwLjE3OCwwLjE2LDAuNCwwLjIzOSwwLjYyMiwwLjIzOWMwLjI1NCwwLDAuNTA4LTAuMTA0LDAuNjkyLTAuMzA4ICAgYzAuMzQ0LTAuMzgyLDAuMzEzLTAuOTcxLTAuMDY4LTEuMzE0bC0xLjI3Ny0wLjkyN2g1LjEwNHY1LjEwNWwtMC45MjgtMS4yNzhjLTAuMzQ0LTAu'+
			'MzgyLTAuOTMyLTAuNDEzLTEuMzE0LTAuMDY5ICAgYy0wLjM4MiwwLjM0NC0wLjQxMiwwLjkzMy0wLjA2OCwxLjMxNGwyLjY4MiwyLjk3OGMwLjE3NiwwLjE5NSwwLjQyOSwwLjMwOSwwLjY5MSwwLjMwOWMwLjI2MywwLDAuNTE2LTAuMTEzLDAuNjkyLTAuMzA5ICAgbDIuNjgyLTIuOTc4YzAuMzQ0LTAuMzgyLDAuMzEyLTAuOTcxLTAuMDY5LTEuMzE0cy0wLjk3LTAuMzEyLTEuMzEzLDAuMDY5bC0wLjkyNywxLjI3NnYtNS4xMDRoNS4xMDRsLTEuMjc3LDAuOTI4ICAgYy0wLjM4MiwwLjM0My0wLjQxMiwwLjkzMi0wLjA2OCwxLjMxM2MwLjE4NCwwLjIwNCwwLjQzNywwLjMwOCwwLjY5MSwwLjMwOG'+
			'MwLjIyMiwwLDAuNDQ1LTAuMDc5LDAuNjIzLTAuMjM5bDIuOTc3LTIuNjgyICAgYzAuMTk1LTAuMTc2LDAuMzA5LTAuNDI4LDAuMzA5LTAuNjkxQzI1LjQyMiwxNS43MzcsMjUuMzA5LDE1LjQ4NCwyNS4xMTMsMTUuMzA5eiIvPgogPC9nPgo8L3N2Zz4K';
		me._movemode_continuous__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._movemode_continuous__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMy41QzkuMDk2LDMuNSwzLjUsOS4wOTYsMy41LDE2YzAsNi45MDUsNS41OTYsMTIuNSwxMi41LDEyLjVjNi45MDQsMCwxMi41LTUuNTk2LDEyLjUtMTIuNSAgIEMyOC41LDkuMDk2LDIyLjkwNCwzLjUsMTYsMy41eiBNMjMuMTQ3LDIzLjE0'+
			'N2MtMS44MzMsMS44MzEtNC4zNTIsMi45Ni03LjE0NywyLjk2cy01LjMxNC0xLjEyOS03LjE0Ny0yLjk2ICAgYy0xLjgzMS0xLjgzMy0yLjk2LTQuMzUzLTIuOTYtNy4xNDhjMC0yLjc5NSwxLjEzLTUuMzEzLDIuOTYtNy4xNDZjMS44MzMtMS44MzEsNC4zNTItMi45Niw3LjE0Ny0yLjk2ICAgYzIuNzk1LDAsNS4zMTQsMS4xMjksNy4xNDcsMi45NmMxLjgzMSwxLjgzMywyLjk2LDQuMzUyLDIuOTYxLDcuMTQ2QzI2LjEwNywxOC43OTUsMjQuOTc5LDIxLjMxNCwyMy4xNDcsMjMuMTQ3eiBNMjUuMTEzLDE1LjMwOSAgIGwtMi45NzgtMi42ODJjLTAuMzgxLTAuMzQ0LTAuOTctMC4zMTMtMS4zMTMsMC'+
			'4wNjhjLTAuMzQ0LDAuMzgyLTAuMzEzLDAuOTcsMC4wNjksMS4zMTRoLTAuMDAxbDEuMjc3LDAuOTI4aC01LjEwNFY5LjgzMyAgIGwwLjkyNywxLjI3NmMwLjM0NCwwLjM4MSwwLjkzMiwwLjQxMywxLjMxMywwLjA2OGMwLjM4Mi0wLjM0NCwwLjQxMy0wLjkzMywwLjA2OS0xLjMxNGwtMi42ODMtMi45NzggICBDMTYuNTE1LDYuNjkxLDE2LjI2Myw2LjU3OSwxNiw2LjU3OWMtMC4yNjMsMC0wLjUxNiwwLjExMy0wLjY5MSwwLjMwOGwtMi42ODIsMi45NzhjLTAuMzQ0LDAuMzgxLTAuMzEzLDAuOTcsMC4wNjgsMS4zMTQgICBjMC4xNzgsMC4xNiwwLjQwMSwwLjIzOSwwLjYyMywwLjIzOWMwLjI1NSww'+
			'LDAuNTA4LTAuMTA0LDAuNjkyLTAuMzA4aDBsMC45MjgtMS4yNzl2NS4xMDZIOS44MzJsMS4yNzgtMC45MjggICBjMC4zODEtMC4zNDQsMC40MTItMC45MzIsMC4wNjgtMS4zMTRzLTAuOTMyLTAuNDEzLTEuMzEzLTAuMDY5bC0yLjk3OCwyLjY4M0M2LjY5MSwxNS40ODQsNi41NzgsMTUuNzM3LDYuNTc4LDE2ICAgczAuMTEzLDAuNTE1LDAuMzA5LDAuNjkxbDIuOTc4LDIuNjgyYzAuMTc4LDAuMTYsMC40LDAuMjM5LDAuNjIyLDAuMjM5YzAuMjU0LDAsMC41MDgtMC4xMDQsMC42OTItMC4zMDggICBjMC4zNDQtMC4zODIsMC4zMTMtMC45NzEtMC4wNjgtMS4zMTRsLTEuMjc3LTAuOTI3aDUuMTA0dj'+
			'UuMTA1bC0wLjkyOC0xLjI3OGMtMC4zNDQtMC4zODItMC45MzItMC40MTMtMS4zMTQtMC4wNjkgICBjLTAuMzgyLDAuMzQ0LTAuNDEyLDAuOTMzLTAuMDY4LDEuMzE0bDIuNjgyLDIuOTc4YzAuMTc2LDAuMTk1LDAuNDI5LDAuMzA5LDAuNjkxLDAuMzA5YzAuMjYzLDAsMC41MTYtMC4xMTMsMC42OTItMC4zMDkgICBsMi42ODItMi45NzhjMC4zNDQtMC4zODIsMC4zMTItMC45NzEtMC4wNjktMS4zMTRzLTAuOTctMC4zMTItMS4zMTMsMC4wNjlsLTAuOTI3LDEuMjc2di01LjEwNGg1LjEwNGwtMS4yNzcsMC45MjggICBjLTAuMzgyLDAuMzQzLTAuNDEyLDAuOTMyLTAuMDY4LDEuMzEzYzAuMTg0LDAu'+
			'MjA0LDAuNDM3LDAuMzA4LDAuNjkxLDAuMzA4YzAuMjIyLDAsMC40NDUtMC4wNzksMC42MjMtMC4yMzlsMi45NzctMi42ODIgICBjMC4xOTUtMC4xNzYsMC4zMDktMC40MjgsMC4zMDktMC42OTFDMjUuNDIyLDE1LjczNywyNS4zMDksMTUuNDg0LDI1LjExMywxNS4zMDl6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xNiwzLjVDOS4wOTYsMy41LDMuNSw5LjA5NiwzLjUsMTZjMCw2LjkwNSw1LjU5Ni'+
			'wxMi41LDEyLjUsMTIuNWM2LjkwNCwwLDEyLjUtNS41OTYsMTIuNS0xMi41ICAgQzI4LjUsOS4wOTYsMjIuOTA0LDMuNSwxNiwzLjV6IE0yMy4xNDcsMjMuMTQ3Yy0xLjgzMywxLjgzMS00LjM1MiwyLjk2LTcuMTQ3LDIuOTZzLTUuMzE0LTEuMTI5LTcuMTQ3LTIuOTYgICBjLTEuODMxLTEuODMzLTIuOTYtNC4zNTMtMi45Ni03LjE0OGMwLTIuNzk1LDEuMTMtNS4zMTMsMi45Ni03LjE0NmMxLjgzMy0xLjgzMSw0LjM1Mi0yLjk2LDcuMTQ3LTIuOTYgICBjMi43OTUsMCw1LjMxNCwxLjEyOSw3LjE0NywyLjk2YzEuODMxLDEuODMzLDIuOTYsNC4zNTIsMi45NjEsNy4xNDZDMjYuMTA3LDE4Ljc5NSwy'+
			'NC45NzksMjEuMzE0LDIzLjE0NywyMy4xNDd6IE0yNS4xMTMsMTUuMzA5ICAgbC0yLjk3OC0yLjY4MmMtMC4zODEtMC4zNDQtMC45Ny0wLjMxMy0xLjMxMywwLjA2OGMtMC4zNDQsMC4zODItMC4zMTMsMC45NywwLjA2OSwxLjMxNGgtMC4wMDFsMS4yNzcsMC45MjhoLTUuMTA0VjkuODMzICAgbDAuOTI3LDEuMjc2YzAuMzQ0LDAuMzgxLDAuOTMyLDAuNDEzLDEuMzEzLDAuMDY4YzAuMzgyLTAuMzQ0LDAuNDEzLTAuOTMzLDAuMDY5LTEuMzE0bC0yLjY4My0yLjk3OCAgIEMxNi41MTUsNi42OTEsMTYuMjYzLDYuNTc5LDE2LDYuNTc5Yy0wLjI2MywwLTAuNTE2LDAuMTEzLTAuNjkxLDAuMzA4bC0yLj'+
			'Y4MiwyLjk3OGMtMC4zNDQsMC4zODEtMC4zMTMsMC45NywwLjA2OCwxLjMxNCAgIGMwLjE3OCwwLjE2LDAuNDAxLDAuMjM5LDAuNjIzLDAuMjM5YzAuMjU1LDAsMC41MDgtMC4xMDQsMC42OTItMC4zMDhoMGwwLjkyOC0xLjI3OXY1LjEwNkg5LjgzMmwxLjI3OC0wLjkyOCAgIGMwLjM4MS0wLjM0NCwwLjQxMi0wLjkzMiwwLjA2OC0xLjMxNHMtMC45MzItMC40MTMtMS4zMTMtMC4wNjlsLTIuOTc4LDIuNjgzQzYuNjkxLDE1LjQ4NCw2LjU3OCwxNS43MzcsNi41NzgsMTYgICBzMC4xMTMsMC41MTUsMC4zMDksMC42OTFsMi45NzgsMi42ODJjMC4xNzgsMC4xNiwwLjQsMC4yMzksMC42MjIsMC4yMzlj'+
			'MC4yNTQsMCwwLjUwOC0wLjEwNCwwLjY5Mi0wLjMwOCAgIGMwLjM0NC0wLjM4MiwwLjMxMy0wLjk3MS0wLjA2OC0xLjMxNGwtMS4yNzctMC45MjdoNS4xMDR2NS4xMDVsLTAuOTI4LTEuMjc4Yy0wLjM0NC0wLjM4Mi0wLjkzMi0wLjQxMy0xLjMxNC0wLjA2OSAgIGMtMC4zODIsMC4zNDQtMC40MTIsMC45MzMtMC4wNjgsMS4zMTRsMi42ODIsMi45NzhjMC4xNzYsMC4xOTUsMC40MjksMC4zMDksMC42OTEsMC4zMDljMC4yNjMsMCwwLjUxNi0wLjExMywwLjY5Mi0wLjMwOSAgIGwyLjY4Mi0yLjk3OGMwLjM0NC0wLjM4MiwwLjMxMi0wLjk3MS0wLjA2OS0xLjMxNHMtMC45Ny0wLjMxMi0xLjMxMywwLj'+
			'A2OWwtMC45MjcsMS4yNzZ2LTUuMTA0aDUuMTA0bC0xLjI3NywwLjkyOCAgIGMtMC4zODIsMC4zNDMtMC40MTIsMC45MzItMC4wNjgsMS4zMTNjMC4xODQsMC4yMDQsMC40MzcsMC4zMDgsMC42OTEsMC4zMDhjMC4yMjIsMCwwLjQ0NS0wLjA3OSwwLjYyMy0wLjIzOWwyLjk3Ny0yLjY4MiAgIGMwLjE5NS0wLjE3NiwwLjMwOS0wLjQyOCwwLjMwOS0wLjY5MUMyNS40MjIsMTUuNzM3LDI1LjMwOSwxNS40ODQsMjUuMTEzLDE1LjMwOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._movemode_continuous__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="movemode_continuous";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._movemode_continuous.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._movemode_continuous.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewMode() == 0))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._movemode_continuous.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._movemode_continuous.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._movemode_continuous.style.transition='';
				if (me._movemode_continuous.ggCurrentLogicStateVisible == 0) {
					me._movemode_continuous.style.visibility="hidden";
					me._movemode_continuous.ggVisible=false;
				}
				else {
					me._movemode_continuous.style.visibility=(Number(me._movemode_continuous.style.opacity)>0||!me._movemode_continuous.style.opacity)?'inherit':'hidden';
					me._movemode_continuous.ggVisible=true;
				}
			}
		}
		me._movemode_continuous.logicBlock_visible();
		me._movemode_continuous.onclick=function (e) {
			player.changeViewMode(0);
		}
		me._movemode_continuous.onmouseenter=function (e) {
			me._movemode_continuous__img.style.visibility='hidden';
			me._movemode_continuous__imgo.style.visibility='inherit';
			me.elementMouseOver['movemode_continuous']=true;
			me._tt_movemode.logicBlock_visible();
		}
		me._movemode_continuous.onmouseleave=function (e) {
			me._movemode_continuous__img.style.visibility='inherit';
			me._movemode_continuous__imgo.style.visibility='hidden';
			me.elementMouseOver['movemode_continuous']=false;
			me._tt_movemode.logicBlock_visible();
		}
		me._movemode_continuous.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_movemode=document.createElement('div');
		els=me._tt_movemode__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_movemode";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -65px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_movemode.ggUpdateText=function() {
			var params = [];
			var hs = player._("Change Control Mode", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_movemode.ggUpdateText();
		el.appendChild(els);
		me._tt_movemode.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_movemode.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['movemode_continuous'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_movemode.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_movemode.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_movemode.style.transition='';
				if (me._tt_movemode.ggCurrentLogicStateVisible == 0) {
					me._tt_movemode.style.visibility=(Number(me._tt_movemode.style.opacity)>0||!me._tt_movemode.style.opacity)?'inherit':'hidden';
					me._tt_movemode.ggVisible=true;
				}
				else {
					me._tt_movemode.style.visibility="hidden";
					me._tt_movemode.ggVisible=false;
				}
			}
		}
		me._tt_movemode.logicBlock_visible();
		me._tt_movemode.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_movemode_white=document.createElement('div');
		els=me._tt_movemode_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_movemode_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 170px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_movemode_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Change Control Mode", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_movemode_white.ggUpdateText();
		el.appendChild(els);
		me._tt_movemode_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_movemode_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_movemode.appendChild(me._tt_movemode_white);
		me._movemode_continuous.appendChild(me._tt_movemode);
		me._button_simplex_movemode.appendChild(me._movemode_continuous);
		me._controller.appendChild(me._button_simplex_movemode);
		el=me._button_simplex_fullscreen=document.createElement('div');
		el.ggId="button_simplex_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_simplex_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_simplex_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_simplex_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_simplex_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_simplex_fullscreen.style.transition='';
				if (me._button_simplex_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_simplex_fullscreen.style.visibility="hidden";
					me._button_simplex_fullscreen.ggVisible=false;
				}
				else {
					me._button_simplex_fullscreen.style.visibility=(Number(me._button_simplex_fullscreen.style.opacity)>0||!me._button_simplex_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_simplex_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_simplex_fullscreen.logicBlock_visible();
		me._button_simplex_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_image_normalscreen=document.createElement('div');
		els=me._button_image_normalscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiAgIGMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICBjMC4yMjYt'+
			'MC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCAgIEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny'+
			'0wLjUzNiwxLjE5Ny0xLjE5N2gwICAgVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3'+
			'NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHogICAgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLj'+
			'E5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2ICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5'+
			'NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4ICAgQzI4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiAgIGgtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5Ni'+
			'wxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEgICBzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMgICBjLTAu'+
			'MjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEgICBsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiAgIGMtMC40Mj'+
			'csMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXogICAgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4x'+
			'NDcgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSAgIEMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi'+
			'45MjR6IE0yNS4xMDQsOS45NzYgICBjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCAgIGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAu'+
			'NjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyICAgYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSAgIGMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0ICAgSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMC'+
			'wxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1ICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAgICBWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSAgIEMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4z'+
			'OTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNS0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiAgICBNMj'+
			'IuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYgICBjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0w'+
			'LjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEgICBjLTAuNjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDggICBDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5Ni'+
			'wxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2ICAgaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSAgIHMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0w'+
			'LjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyAgIGMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMT'+
			'k2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSAgIGwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MWMtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiAgICBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZj'+
			'MCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjkyNHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgIGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxICAgQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMT'+
			'UuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiAgIGMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0ICAgYzAuMTc4LDAsMC4zNTctMC4wNTEs'+
			'MC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTYsMTQuODA0SDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LTAuODQ2LDAuMzUxQzMuNjI3LDE1LjM3NywzLjUsMTUuNjg2LDMuNSwxNnY4LjEyICAgYzAsMC4zMTUsMC4xMjcsMC42MjQsMC4zNSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSww'+
			'LjM1MSwwLjg0NiwwLjM1MUgxNmMwLjMyLDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MSAgIGMwLjIyNi0wLjIyNiwwLjM1LTAuNTI1LDAuMzUtMC44NDZWMTZjMC0wLjMxNC0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzIsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0xNC44MDQsMjIuOTI0ICAgSDUuODkzdi01LjcyOGg4LjkxMVYyMi45MjR6IE00LjY5NywxMy45OThjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDhjMC0wLjY2LTAuNTM2LTEuMTk1LTEuMTk2LTEuMTk1ICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk1djAuMzA4QzMuNSwxMy'+
			'40NjIsNC4wMzYsMTMuOTk4LDQuNjk3LDEzLjk5OHogTTQuNjk3LDEwLjQ3N2MwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk3aDAgICBWOS4wNzZjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NmMwLTAuNjYtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZINC42OTdjLTAuMzE1LDAtMC42MjMsMC4xMjctMC44NDYsMC4zNSAgIEMzLjYyOCw3LjI1NywzLjUsNy41NjQsMy41LDcuODh2MS4zOTlDMy41LDkuOTQsNC4wMzYsMTAuNDc3LDQuNjk3LDEwLjQ3N3ogTTE5LjI4OSw5LjA3NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNS0xLjE5Ni0xLjE5'+
			'Ni0xLjE5NmgtMC4yNDJjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTMTguNjI4LDkuMDc2LDE5LjI4OSw5LjA3NnogTTE2LjEyMiw2LjY4NGgtMC4yNDMgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZzMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDNjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NlMxNi43ODIsNi42ODQsMTYuMTIyLDYuNjg0eiAgICBNMjIuNjk4LDkuMDc2aDAuMjQzYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2LDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOT'+
			'YgICBTMjIuMDM4LDkuMDc2LDIyLjY5OCw5LjA3NnogTTkuMDYsOS4wNzZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2UzkuOTYyLDYuNjg0LDkuMzAyLDYuNjg0SDkuMDYgICBjLTAuNjYxLDAtMS4xOTcsMC41MzYtMS4xOTcsMS4xOTZTOC4zOTksOS4wNzYsOS4wNiw5LjA3NnogTTEyLjQ2OSw5LjA3NmgwLjI0M2MwLjY2MSwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2ICAgcy0wLjUzNi0xLjE5Ni0xLjE5Ni0xLjE5NmgtMC4yNDNjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZTMTEuODA4LDkuMDc2LDEyLjQ2OSw5LjA3NnogTTI3LjMwNCwxMS4xMTEgICBjLTAu'+
			'NjYxLDAtMS4xOTYsMC41MzUtMS4xOTYsMS4xOTZ2MC4zMDhjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NnYtMC4zMDggICBDMjguNSwxMS42NDYsMjcuOTY0LDExLjExMSwyNy4zMDQsMTEuMTExeiBNMjcuMzA0LDE0LjY1Yy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4LjUsMTUuMTg2LDI3Ljk2NCwxNC42NSwyNy4zMDQsMTQuNjV6IE0yNy4zMDQsMjEuNzI4Yy0wLjY2MSwwLT'+
			'EuMTk2LDAuNTM1LTEuMTk2LDEuMTk2ICAgaC0wLjIzNGMtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTYsMS4xOTZoMS40MzFjMC4zMTQsMCwwLjYyMy0wLjEyOCwwLjg0Ni0wLjM1MSAgIHMwLjM1MS0wLjUzLDAuMzUxLTAuODQ2di0xLjE5NkMyOC41LDIyLjI2NCwyNy45NjQsMjEuNzI4LDI3LjMwNCwyMS43Mjh6IE0yNy4zMDQsMTguMTg5Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djAuMzA4ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4QzI4'+
			'LjUsMTguNzI2LDI3Ljk2NCwxOC4xODksMjcuMzA0LDE4LjE4OXogTTI4LjE0OSw3LjAzMyAgIGMtMC4yMjMtMC4yMjItMC41MzEtMC4zNS0wLjg0Ni0wLjM1aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2VjcuODhDMjguNSw3LjU2NCwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDMzeiBNMjEuODYzLDEzLjI2MSAgIGwwLjIyMS0wLjE0N2MwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MW'+
			'MtMC4yODYtMC40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ2ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0QzIxLjUyNCwxMy40MTgsMjEuNzA0LDEzLjM2NywyMS44NjMsMTMuMjYxeiAgICBNMTkuMzI5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzIwLjUyNSwyMy40NiwxOS45OSwyMi45MjQsMTkuMzI5LDIyLjky'+
			'NHogTTE4LjU4NCwxNS4yNjRjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0NyAgIGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5Yy0wLjI4NS0wLjQyOC0wLjg2My0wLjU0Mi0xLjI5MS0wLjI1N2wtMC4yMjIsMC4xNDdjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU2LDEuMjkxICAgQzE3Ljk4OSwxNS4xMTksMTguMjgzLDE1LjI2NCwxOC41ODQsMTUuMjY0eiBNMjIuNzM5LDIyLjkyNGgtMC4yNDJjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgwLjI0MmMwLjY2LDAsMS'+
			'4xOTYtMC41MzUsMS4xOTYtMS4xOTZDMjMuOTM2LDIzLjQ2LDIzLjM5OSwyMi45MjQsMjIuNzM5LDIyLjkyNHogTTI1LjEwNCw5Ljk3NiAgIGMtMC4yODUtMC40MjctMC44NjMtMC41NDItMS4yOTEtMC4yNTZsLTAuMjIxLDAuMTQ3Yy0wLjQyOCwwLjI4NS0wLjU0MiwwLjg2My0wLjI1NiwxLjI5YzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0ICAgYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTYtMC4xNTZsMC4yMjItMC4xNDhDMjUuMjc0LDEwLjk4MSwyNS4zODksMTAuNDAzLDI1LjEwNCw5Ljk3NnoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4y'+
			'IiBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTE2LDE0LjgwNEg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MUMzLjYyNywxNS4zNzcsMy41LDE1LjY4NiwzLjUsMTZ2OC4xMiAgIGMwLDAuMzE1LDAuMTI3LDAuNjI0LDAuMzUsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFIMTZjMC4zMiwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTEgICBjMC4yMjYtMC4yMjYsMC4zNS0wLjUyNSwwLjM1LTAuODQ2VjE2YzAtMC4zMTQtMC4xMjgtMC42Mj'+
			'MtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMyLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMTQuODA0LDIyLjkyNCAgIEg1Ljg5M3YtNS43MjhoOC45MTFWMjIuOTI0eiBNNC42OTcsMTMuOTk4YzAuNjYxLDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4YzAtMC42Ni0wLjUzNi0xLjE5NS0xLjE5Ni0xLjE5NSAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NXYwLjMwOEMzLjUsMTMuNDYyLDQuMDM2LDEzLjk5OCw0LjY5NywxMy45OTh6IE00LjY5NywxMC40NzdjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5N2gwICAgVjkuMDc2YzAuNjYxLDAsMS4xOTYtMC41MzUs'+
			'MS4xOTYtMS4xOTZjMC0wLjY2LTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2SDQuNjk3Yy0wLjMxNSwwLTAuNjIzLDAuMTI3LTAuODQ2LDAuMzUgICBDMy42MjgsNy4yNTcsMy41LDcuNTY0LDMuNSw3Ljg4djEuMzk5QzMuNSw5Ljk0LDQuMDM2LDEwLjQ3Nyw0LjY5NywxMC40Nzd6IE0xOS4yODksOS4wNzZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzUtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQyYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzE4LjYyOCw5LjA3NiwxOS4yODksOS4wNzZ6IE0xNi4xMjIsNi42ODRoLTAuMjQzICAgYy0wLjY2MSwwLT'+
			'EuMTk2LDAuNTM2LTEuMTk2LDEuMTk2czAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDAuMjQzYzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZTMTYuNzgyLDYuNjg0LDE2LjEyMiw2LjY4NHogICAgTTIyLjY5OCw5LjA3NmgwLjI0M2MwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZzLTAuNTM2LTEuMTk2LTEuMTk2LTEuMTk2aC0wLjI0M2MtMC42NiwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgUzIyLjAzOCw5LjA3NiwyMi42OTgsOS4wNzZ6IE05LjA2LDkuMDc2aDAuMjQyYzAuNjYsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NlM5Ljk2Miw2LjY4NCw5LjMwMiw2LjY4NEg5LjA2'+
			'ICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2UzguMzk5LDkuMDc2LDkuMDYsOS4wNzZ6IE0xMi40NjksOS4wNzZoMC4yNDNjMC42NjEsMCwxLjE5Ni0wLjUzNiwxLjE5Ni0xLjE5NiAgIHMtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTAuMjQzYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2UzExLjgwOCw5LjA3NiwxMi40NjksOS4wNzZ6IE0yNy4zMDQsMTEuMTExICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM1LTEuMTk2LDEuMTk2djAuMzA4YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzYsMS4xOTYtMS4xOTZ2LTAuMzA4ICAgQz'+
			'I4LjUsMTEuNjQ2LDI3Ljk2NCwxMS4xMTEsMjcuMzA0LDExLjExMXogTTI3LjMwNCwxNC42NWMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NnYwLjMwOGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE1LjE4NiwyNy45NjQsMTQuNjUsMjcuMzA0LDE0LjY1eiBNMjcuMzA0LDIxLjcyOGMtMC42NjEsMC0xLjE5NiwwLjUzNS0xLjE5NiwxLjE5NiAgIGgtMC4yMzRjLTAuNjYsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk2LDEuMTk2aDEuNDMxYzAuMzE0'+
			'LDAsMC42MjMtMC4xMjgsMC44NDYtMC4zNTEgICBzMC4zNTEtMC41MywwLjM1MS0wLjg0NnYtMS4xOTZDMjguNSwyMi4yNjQsMjcuOTY0LDIxLjcyOCwyNy4zMDQsMjEuNzI4eiBNMjcuMzA0LDE4LjE4OWMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYwLjMwOCAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNTM2LDEuMTk2LTEuMTk2di0wLjMwOEMyOC41LDE4LjcyNiwyNy45NjQsMTguMTg5LDI3LjMwNCwxOC4xODl6IE0yOC4xNDksNy4wMzMgICBjLTAuMjIzLTAuMjIyLTAuNTMxLTAuMzUtMC44NDYtMC4zNWgtMS4xOTZjLTAuNjYxLDAtMS'+
			'4xOTYsMC41MzYtMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NiAgIGMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlY3Ljg4QzI4LjUsNy41NjQsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzM3ogTTIxLjg2MywxMy4yNjEgICBsMC4yMjEtMC4xNDdjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOTFjLTAuMjg2LTAuNDI4LTAuODYzLTAuNTQyLTEuMjkxLTAuMjU2bC0wLjIyMSwwLjE0NiAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OSwwLjQ3NCww'+
			'LjQxNCwwLjc3NCwwLjQxNEMyMS41MjQsMTMuNDE4LDIxLjcwNCwxMy4zNjcsMjEuODYzLDEzLjI2MXogICAgTTE5LjMyOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMyMC41MjUsMjMuNDYsMTkuOTksMjIuOTI0LDE5LjMyOSwyMi45MjR6IE0xOC41ODQsMTUuMjY0YzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDcgICBjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOWMtMC4yODUtMC'+
			'40MjgtMC44NjMtMC41NDItMS4yOTEtMC4yNTdsLTAuMjIyLDAuMTQ3Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NiwxLjI5MSAgIEMxNy45ODksMTUuMTE5LDE4LjI4MywxNS4yNjQsMTguNTg0LDE1LjI2NHogTTIyLjczOSwyMi45MjRoLTAuMjQyYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMC4yNDJjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzIzLjkzNiwyMy40NiwyMy4zOTksMjIuOTI0LDIyLjczOSwyMi45MjR6IE0yNS4xMDQsOS45NzYgICBjLTAuMjg1LTAuNDI3LTAuODYzLTAuNTQyLTEu'+
			'MjkxLTAuMjU2bC0wLjIyMSwwLjE0N2MtMC40MjgsMC4yODUtMC41NDIsMC44NjMtMC4yNTYsMS4yOWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNCAgIGMwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE2LTAuMTU2bDAuMjIyLTAuMTQ4QzI1LjI3NCwxMC45ODEsMjUuMzg5LDEwLjQwMywyNS4xMDQsOS45NzZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_normalscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style.transition='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		me._button_image_normalscreen.logicBlock_visible();
		me._button_image_normalscreen.onclick=function (e) {
			player.exitFullscreen();
		}
		me._button_image_normalscreen.onmouseenter=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_normalscreen']=true;
			me._tt_exit_fullscreen.logicBlock_visible();
		}
		me._button_image_normalscreen.onmouseleave=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_normalscreen']=false;
			me._tt_exit_fullscreen.logicBlock_visible();
		}
		me._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_exit_fullscreen=document.createElement('div');
		els=me._tt_exit_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_exit_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_exit_fullscreen.ggUpdateText=function() {
			var params = [];
			var hs = player._("Exit Fullscreen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_exit_fullscreen.ggUpdateText();
		el.appendChild(els);
		me._tt_exit_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_exit_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_image_normalscreen'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_exit_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_exit_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_exit_fullscreen.style.transition='';
				if (me._tt_exit_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_exit_fullscreen.style.visibility=(Number(me._tt_exit_fullscreen.style.opacity)>0||!me._tt_exit_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_exit_fullscreen.ggVisible=true;
				}
				else {
					me._tt_exit_fullscreen.style.visibility="hidden";
					me._tt_exit_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_exit_fullscreen.logicBlock_visible();
		me._tt_exit_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_exit_fullscreen_white=document.createElement('div');
		els=me._tt_exit_fullscreen_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_exit_fullscreen_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_exit_fullscreen_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Exit Fullscreen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_exit_fullscreen_white.ggUpdateText();
		el.appendChild(els);
		me._tt_exit_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_exit_fullscreen_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_exit_fullscreen.appendChild(me._tt_exit_fullscreen_white);
		me._button_image_normalscreen.appendChild(me._tt_exit_fullscreen);
		me._button_simplex_fullscreen.appendChild(me._button_image_normalscreen);
		el=me._button_image_fullscreen=document.createElement('div');
		els=me._button_image_fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTI4LjE0OSw3LjAzNGMtMC4yMjMtMC4yMjMtMC41MzEtMC4zNTEtMC44NDYtMC4zNTFINC42OTdjLTAuMzE1LDAtMC42MjQsMC4xMjgtMC44NDYsMC4zNTEgICBTMy41LDcuNTY1LDMuNSw3Ljg4djE2LjI0YzAsMC4zMTUsMC4xMjgsMC42MjMsMC4zNTEsMC44NDZjMC4yMjMsMC4yMjQsMC41MzEsMC4zNTEsMC44NDYsMC4zNTFoMjIuNjA3ICAgYzAu'+
			'MzE5LDAsMC42Mi0wLjEyNCwwLjg0Ni0wLjM1MWMwLjIyNy0wLjIyNiwwLjM1MS0wLjUyNiwwLjM1MS0wLjg0NlY3Ljg4QzI4LjUsNy41NjUsMjguMzcyLDcuMjU3LDI4LjE0OSw3LjAzNHogTTUuODkzLDIyLjkyNCAgIFY5LjA3NmgyMC4yMTV2MTMuODQ4SDUuODkzeiBNMTYsMTkuMjRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZ2MC40NDhjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NiAgIGMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZ2LTAuNDQ4QzE3LjE5NiwxOS43NzUsMTYuNjYxLDE5LjI0LDE2LDE5LjI0eiBNMTEuNjcsMTQuODA0aC0wLjM0MiAgIGMtMC'+
			'42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NmMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQyYzAuNjYxLDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTYgICBDMTIuODY2LDE1LjMzOSwxMi4zMzEsMTQuODA0LDExLjY3LDE0LjgwNHogTTguMTk1LDE0LjgwNEg3Ljg1NGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NiAgIGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDAuMzQxYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NkM5LjM5MiwxNS4zMzksOC44NTUsMTQuODA0LDguMTk1LDE0LjgwNHogTTE4LjI4NywxMy40MTIgICBsLTAuMjIyLDAu'+
			'MTQ4Yy0wLjQyNywwLjI4NS0wLjU0MSwwLjg2My0wLjI1NiwxLjI5YzAuMTgsMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3ICAgbDAuMjIxLTAuMTQ4YzAuNDI4LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU3LTEuMjlDMTkuMjkzLDEzLjI0MiwxOC43MTUsMTMuMTI2LDE4LjI4NywxMy40MTJ6IE0yMy44MTMsOS43MmwtMC4yMjIsMC4xNDcgICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODY0LTAuMjU2LDEuMjkxYzAuMTc5LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1N2wwLjIyMS'+
			'0wLjE0OCAgIGMwLjQyNy0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ni0xLjI5MUMyNC44MTgsOS41NDksMjQuMjQxLDkuNDM0LDIzLjgxMyw5LjcyeiBNMTYsMTQuODA0aC0xLjE5NmMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NiAgIGMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMCwwLjY2MSwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZWMTYgICBjMC0wLjMxNS0wLjEyOC0wLjYyMy0wLjM1LTAuODQ2QzE2LjYyMywxNC45MzEsMTYuMzE0LDE0LjgwNCwxNiwxNC44MDR6IE0yMS4wNSwxMS41NjVsLTAuMjIxLDAuMTQ4ICAg'+
			'Yy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2My0wLjI1NywxLjI5MWMwLjE4LDAuMjY4LDAuNDc1LDAuNDEzLDAuNzc0LDAuNDEzYzAuMTc4LDAsMC4zNTctMC4wNTEsMC41MTctMC4xNTdsMC4yMjEtMC4xNDggICBjMC40MjgtMC4yODYsMC41NDItMC44NjMsMC4yNTctMS4yOTFTMjEuNDc4LDExLjI4LDIxLjA1LDExLjU2NXoiLz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiPgogIDxwYXRoIGQ9Ik0yOC4xNDksNy4wMzRjLTAuMjIzLTAuMjIzLTAuNTMxLTAuMzUxLTAuODQ2LTAuMzUxSDQuNjk3Yy0wLjMxNSwwLTAuNjI0LDAuMTI4LT'+
			'AuODQ2LDAuMzUxICAgUzMuNSw3LjU2NSwzLjUsNy44OHYxNi4yNGMwLDAuMzE1LDAuMTI4LDAuNjIzLDAuMzUxLDAuODQ2YzAuMjIzLDAuMjI0LDAuNTMxLDAuMzUxLDAuODQ2LDAuMzUxaDIyLjYwNyAgIGMwLjMxOSwwLDAuNjItMC4xMjQsMC44NDYtMC4zNTFjMC4yMjctMC4yMjYsMC4zNTEtMC41MjYsMC4zNTEtMC44NDZWNy44OEMyOC41LDcuNTY1LDI4LjM3Miw3LjI1NywyOC4xNDksNy4wMzR6IE01Ljg5MywyMi45MjQgICBWOS4wNzZoMjAuMjE1djEzLjg0OEg1Ljg5M3ogTTE2LDE5LjI0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2djAuNDQ4YzAsMC42NjEsMC41MzYsMS4x'+
			'OTYsMS4xOTcsMS4xOTYgICBjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2di0wLjQ0OEMxNy4xOTYsMTkuNzc1LDE2LjY2MSwxOS4yNCwxNiwxOS4yNHogTTExLjY3LDE0LjgwNGgtMC4zNDIgICBjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2MSwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgwLjM0MmMwLjY2MSwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2ICAgQzEyLjg2NiwxNS4zMzksMTIuMzMxLDE0LjgwNCwxMS42NywxNC44MDR6IE04LjE5NSwxNC44MDRINy44NTRjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTYgICBjMCwwLjY2MSwwLjUzNiwxLj'+
			'E5NiwxLjE5NywxLjE5NmgwLjM0MWMwLjY2LDAsMS4xOTYtMC41MzUsMS4xOTYtMS4xOTZDOS4zOTIsMTUuMzM5LDguODU1LDE0LjgwNCw4LjE5NSwxNC44MDR6IE0xOC4yODcsMTMuNDEyICAgbC0wLjIyMiwwLjE0OGMtMC40MjcsMC4yODUtMC41NDEsMC44NjMtMC4yNTYsMS4yOWMwLjE4LDAuMjY5LDAuNDc0LDAuNDE0LDAuNzc0LDAuNDE0YzAuMTc4LDAsMC4zNTctMC4wNSwwLjUxNy0wLjE1NyAgIGwwLjIyMS0wLjE0OGMwLjQyOC0wLjI4NSwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5QzE5LjI5MywxMy4yNDIsMTguNzE1LDEzLjEyNiwxOC4yODcsMTMuNDEyeiBNMjMuODEzLDkuNzJsLTAuMjIy'+
			'LDAuMTQ3ICAgYy0wLjQyNywwLjI4Ni0wLjU0MiwwLjg2NC0wLjI1NiwxLjI5MWMwLjE3OSwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTdsMC4yMjEtMC4xNDggICBjMC40MjctMC4yODUsMC41NDItMC44NjMsMC4yNTYtMS4yOTFDMjQuODE4LDkuNTQ5LDI0LjI0MSw5LjQzNCwyMy44MTMsOS43MnogTTE2LDE0LjgwNGgtMS4xOTZjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTYgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAsMC42NjEsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZjMC42NiwwLDEuMTk2LTAuNT'+
			'M1LDEuMTk2LTEuMTk2VjE2ICAgYzAtMC4zMTUtMC4xMjgtMC42MjMtMC4zNS0wLjg0NkMxNi42MjMsMTQuOTMxLDE2LjMxNCwxNC44MDQsMTYsMTQuODA0eiBNMjEuMDUsMTEuNTY1bC0wLjIyMSwwLjE0OCAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjMtMC4yNTcsMS4yOTFjMC4xOCwwLjI2OCwwLjQ3NSwwLjQxMywwLjc3NCwwLjQxM2MwLjE3OCwwLDAuMzU3LTAuMDUxLDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI4LTAuMjg2LDAuNTQyLTAuODYzLDAuMjU3LTEuMjkxUzIxLjQ3OCwxMS4yOCwyMS4wNSwxMS41NjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSAgIFMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMyww'+
			'LjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcgICBjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5LDcuMDM0eiBNNS44OTMsMjIuOTI0ICAgVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2ICAgYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMT'+
			'k2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NiAgIEMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2ICAgYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1'+
			'LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiAgIGwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTctMC4xNTcgICBsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC'+
			'40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMTk2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiAgIGMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0'+
			'LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDggICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0wLjE1N2wwLjIyMS0wLjE0OCAgIGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYW'+
			'xlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjguMTQ5LDcuMDM0Yy0wLjIyMy0wLjIyMy0wLjUzMS0wLjM1MS0wLjg0Ni0wLjM1MUg0LjY5N2MtMC4zMTUsMC0wLjYyNCwwLjEyOC0wLjg0NiwwLjM1MSAgIFMzLjUsNy41NjUsMy41LDcuODh2MTYuMjRjMCwwLjMxNSwwLjEyOCwwLjYyMywwLjM1MSwwLjg0NmMwLjIyMywwLjIyNCwwLjUzMSwwLjM1MSwwLjg0NiwwLjM1MWgyMi42MDcgICBjMC4zMTksMCwwLjYyLTAuMTI0LDAuODQ2LTAuMzUxYzAuMjI3LTAuMjI2LDAuMzUxLTAuNTI2LDAuMzUxLTAuODQ2VjcuODhDMjguNSw3LjU2NSwyOC4zNzIsNy4yNTcsMjguMTQ5'+
			'LDcuMDM0eiBNNS44OTMsMjIuOTI0ICAgVjkuMDc2aDIwLjIxNXYxMy44NDhINS44OTN6IE0xNiwxOS4yNGMtMC42NjEsMC0xLjE5NywwLjUzNS0xLjE5NywxLjE5NnYwLjQ0OGMwLDAuNjYxLDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2ICAgYzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NnYtMC40NDhDMTcuMTk2LDE5Ljc3NSwxNi42NjEsMTkuMjQsMTYsMTkuMjR6IE0xMS42NywxNC44MDRoLTAuMzQyICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDJjMC42NjEsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5Ni'+
			'AgIEMxMi44NjYsMTUuMzM5LDEyLjMzMSwxNC44MDQsMTEuNjcsMTQuODA0eiBNOC4xOTUsMTQuODA0SDcuODU0Yy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2ICAgYzAsMC42NjEsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMC4zNDFjMC42NiwwLDEuMTk2LTAuNTM1LDEuMTk2LTEuMTk2QzkuMzkyLDE1LjMzOSw4Ljg1NSwxNC44MDQsOC4xOTUsMTQuODA0eiBNMTguMjg3LDEzLjQxMiAgIGwtMC4yMjIsMC4xNDhjLTAuNDI3LDAuMjg1LTAuNTQxLDAuODYzLTAuMjU2LDEuMjljMC4xOCwwLjI2OSwwLjQ3NCwwLjQxNCwwLjc3NCwwLjQxNGMwLjE3OCwwLDAuMzU3LTAuMDUsMC41MTct'+
			'MC4xNTcgICBsMC4yMjEtMC4xNDhjMC40MjgtMC4yODUsMC41NDItMC44NjMsMC4yNTctMS4yOUMxOS4yOTMsMTMuMjQyLDE4LjcxNSwxMy4xMjYsMTguMjg3LDEzLjQxMnogTTIzLjgxMyw5LjcybC0wLjIyMiwwLjE0NyAgIGMtMC40MjcsMC4yODYtMC41NDIsMC44NjQtMC4yNTYsMS4yOTFjMC4xNzksMC4yNjksMC40NzQsMC40MTQsMC43NzQsMC40MTRjMC4xNzgsMCwwLjM1Ny0wLjA1LDAuNTE3LTAuMTU3bDAuMjIxLTAuMTQ4ICAgYzAuNDI3LTAuMjg1LDAuNTQyLTAuODYzLDAuMjU2LTEuMjkxQzI0LjgxOCw5LjU0OSwyNC4yNDEsOS40MzQsMjMuODEzLDkuNzJ6IE0xNiwxNC44MDRoLTEuMT'+
			'k2Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2ICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmMwLDAuNjYxLDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2YzAuNjYsMCwxLjE5Ni0wLjUzNSwxLjE5Ni0xLjE5NlYxNiAgIGMwLTAuMzE1LTAuMTI4LTAuNjIzLTAuMzUtMC44NDZDMTYuNjIzLDE0LjkzMSwxNi4zMTQsMTQuODA0LDE2LDE0LjgwNHogTTIxLjA1LDExLjU2NWwtMC4yMjEsMC4xNDggICBjLTAuNDI3LDAuMjg2LTAuNTQyLDAuODYzLTAuMjU3LDEuMjkxYzAuMTgsMC4yNjgsMC40NzUsMC40MTMsMC43NzQsMC40MTNjMC4xNzgsMCwwLjM1Ny0wLjA1MSwwLjUxNy0w'+
			'LjE1N2wwLjIyMS0wLjE0OCAgIGMwLjQyOC0wLjI4NiwwLjU0Mi0wLjg2MywwLjI1Ny0xLjI5MVMyMS40NzgsMTEuMjgsMjEuMDUsMTEuNTY1eiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_image_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsFullscreen() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style.transition='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		me._button_image_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.onclick=function (e) {
			player.enterFullscreen();
		}
		me._button_image_fullscreen.onmouseenter=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
			me.elementMouseOver['button_image_fullscreen']=true;
			me._tt_enter_fullscreen.logicBlock_visible();
		}
		me._button_image_fullscreen.onmouseleave=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
			me.elementMouseOver['button_image_fullscreen']=false;
			me._tt_enter_fullscreen.logicBlock_visible();
		}
		me._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_fullscreen=document.createElement('div');
		els=me._tt_enter_fullscreen__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -59px;';
		hs+='position : absolute;';
		hs+='top : 36px;';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_enter_fullscreen.ggUpdateText=function() {
			var params = [];
			var hs = player._("Enter Fullscreen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_enter_fullscreen.ggUpdateText();
		el.appendChild(els);
		me._tt_enter_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_fullscreen.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['button_image_fullscreen'] == true)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_enter_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_enter_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_enter_fullscreen.style.transition='';
				if (me._tt_enter_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._tt_enter_fullscreen.style.visibility=(Number(me._tt_enter_fullscreen.style.opacity)>0||!me._tt_enter_fullscreen.style.opacity)?'inherit':'hidden';
					me._tt_enter_fullscreen.ggVisible=true;
				}
				else {
					me._tt_enter_fullscreen.style.visibility="hidden";
					me._tt_enter_fullscreen.ggVisible=false;
				}
			}
		}
		me._tt_enter_fullscreen.logicBlock_visible();
		me._tt_enter_fullscreen.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_enter_fullscreen_white=document.createElement('div');
		els=me._tt_enter_fullscreen_white__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_enter_fullscreen_white";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 18px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_enter_fullscreen_white.ggUpdateText=function() {
			var params = [];
			var hs = player._("Enter Fullscreen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_enter_fullscreen_white.ggUpdateText();
		el.appendChild(els);
		me._tt_enter_fullscreen_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tt_enter_fullscreen_white.ggUpdatePosition=function (useTransition) {
		}
		me._tt_enter_fullscreen.appendChild(me._tt_enter_fullscreen_white);
		me._button_image_fullscreen.appendChild(me._tt_enter_fullscreen);
		me._button_simplex_fullscreen.appendChild(me._button_image_fullscreen);
		me._controller.appendChild(me._button_simplex_fullscreen);
		me.divSkin.appendChild(me._controller);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 58px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 208px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var params = [];
			params.push(player._(String((player.getPercentLoaded()*100.0).toFixed(0))));
			var hs = player._("Loading... %1%", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #808080;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 12px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._screentint=document.createElement('div');
		el.ggId="screentint";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -0.1%;';
		hs+='position : absolute;';
		hs+='top : -0.142857%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._screentint.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint.onclick=function (e) {
			me._close.style.transition='none';
			me._close.style.visibility='hidden';
			me._close.ggVisible=false;
			me._screentint.style.transition='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style.transition='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
			me._popup_video_youtube.ggInitMedia('');
			me._popup_video_youtube.style.transition='none';
			me._popup_video_youtube.style.visibility='hidden';
			me._popup_video_youtube.ggVisible=false;
			me._video_popup_youtube.style.transition='none';
			me._video_popup_youtube.style.visibility='hidden';
			me._video_popup_youtube.ggVisible=false;
			me._popup_video_vimeo.ggInitMedia('');
			me._popup_video_vimeo.style.transition='none';
			me._popup_video_vimeo.style.visibility='hidden';
			me._popup_video_vimeo.ggVisible=false;
			me._video_popup_vimeo.style.transition='none';
			me._video_popup_vimeo.style.visibility='hidden';
			me._video_popup_vimeo.ggVisible=false;
			me._popup_video_url.ggInitMedia('');
			me._popup_video_url.style.transition='none';
			me._popup_video_url.style.visibility='hidden';
			me._popup_video_url.ggVisible=false;
			me._video_popup_url.style.transition='none';
			me._video_popup_url.style.visibility='hidden';
			me._video_popup_url.ggVisible=false;
			me._video_popup_controls_url.style.transition='none';
			me._video_popup_controls_url.style.visibility='hidden';
			me._video_popup_controls_url.ggVisible=false;
			me._popup_video_file.ggInitMedia('');
			me._popup_video_file.style.transition='none';
			me._popup_video_file.style.visibility='hidden';
			me._popup_video_file.ggVisible=false;
			me._video_popup_file.style.transition='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
			me._video_popup_controls_file.style.transition='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._image_popup.style.transition='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggSubElement.src='';
			me._popup_image.style.transition='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
			me._information.style.transition='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._userdata.style.transition='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
		}
		me._screentint.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint);
		el=me._userdata=document.createElement('div');
		el.ggId="userdata";
		el.ggDx=0;
		el.ggDy=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 140px;';
		hs+='left : calc(50% - ((240px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((140px + 0px) / 2) - 10px);';
		hs+='visibility : hidden;';
		hs+='width : 240px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdata.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._userdata.ggUpdatePosition=function (useTransition) {
		}
		el=me._userdatabg=document.createElement('div');
		el.ggId="userdatabg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 138px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 238px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdatabg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdatabg.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdatabg);
		el=me._title=document.createElement('div');
		els=me._title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._title.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("<b>%1<\/b>", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._title.ggUpdateText();
		player.addListener('changenode', function() {
			me._title.ggUpdateText();
		});
		el.appendChild(els);
		me._title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._title.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._title);
		el=me._description=document.createElement('div');
		els=me._description__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="description";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._description.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.description)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._description.ggUpdateText();
		player.addListener('changenode', function() {
			me._description.ggUpdateText();
		});
		el.appendChild(els);
		me._description.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._description.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._description);
		el=me._author=document.createElement('div');
		els=me._author__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="author";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 220px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._author.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.author)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._author.ggUpdateText();
		player.addListener('changenode', function() {
			me._author.ggUpdateText();
		});
		el.appendChild(els);
		me._author.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._author.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._author);
		el=me._datetime=document.createElement('div');
		els=me._datetime__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="datetime";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._datetime.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.datetime)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._datetime.ggUpdateText();
		player.addListener('changenode', function() {
			me._datetime.ggUpdateText();
		});
		el.appendChild(els);
		me._datetime.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._datetime.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._datetime);
		el=me._copyright=document.createElement('div');
		els=me._copyright__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="copyright";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 110px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._copyright.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.copyright)));
			var hs = player._("&#169; %1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._copyright.ggUpdateText();
		player.addListener('changenode', function() {
			me._copyright.ggUpdateText();
		});
		el.appendChild(els);
		me._copyright.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._copyright.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._copyright);
		el=me._userdata_close=document.createElement('div');
		els=me._userdata_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyID'+
			'MyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzICAgYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIy'+
			'NC0wLjQ2Ny0xLjY5MSwwLjAwMSAgIGMtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAgICBsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSAgIGMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC'+
			'44OCwxMi43OTYsNC44OCwxNy42NzgsMCAgIEMyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiAgIGMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEw'+
			'NiwxNiwyNi4xMDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMgICBjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxICAgYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LD'+
			'AsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCAgIGwzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxICAgYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwICAgQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1'+
			'LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2ICAgYzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5ICAgYzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._userdata_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._userdata_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyID'+
			'MyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyAgIGMtMC40NjctMC40Njct'+
			'MS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAgICBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEgICBsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEgICBjLTQuODgyLTQuODgyLTEyLj'+
			'c5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCAgIEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYgICBjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1'+
			'NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDQgICBjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLj'+
			'Q0LDMuNDRsLTMuNDQxLTMuNDQxICAgYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxICAgYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAgICBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQu'+
			'ODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCAgIGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkgICBDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2ICAgYzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLT'+
			'AuOTg0LDUuMTctMi45Niw3LjE0OCAgIEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._userdata_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="userdata_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._userdata_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._userdata_close.onclick=function (e) {
			me._userdata.style.transition='none';
			me._userdata.style.visibility='hidden';
			me._userdata.ggVisible=false;
			me._screentint.style.transition='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style.transition='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
		}
		me._userdata_close.onmouseenter=function (e) {
			me._userdata_close__img.style.visibility='hidden';
			me._userdata_close__imgo.style.visibility='inherit';
			me.elementMouseOver['userdata_close']=true;
		}
		me._userdata_close.onmouseleave=function (e) {
			me._userdata_close__img.style.visibility='inherit';
			me._userdata_close__imgo.style.visibility='hidden';
			me.elementMouseOver['userdata_close']=false;
		}
		me._userdata_close.ggUpdatePosition=function (useTransition) {
		}
		me._userdata.appendChild(me._userdata_close);
		me.divSkin.appendChild(me._userdata);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=2;
		el.ggDy=-25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : calc(50% - ((300px + 0px) / 2) + 2px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((250px + 0px) / 2) - 25px);';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.ggUpdatePosition=function (useTransition) {
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(54,154,208,0.784314);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 398px;';
		hs+='left : -603px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((398px + 4px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 438px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 320px;';
		hs+='left : -582px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((320px + 0px) / 2) + 40px);';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Segoe UI\", Tahoma, sans-serif; font-size: 20px; line-height: 1.2; margin: 0;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: left;';
		hs+='white-space: pre-line;';
		hs+='padding: 20px 5px 20px 5px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._info_text_body.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_text_body.ggUpdateText();
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 80px;';
		hs+='left : -582px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		hs+='font-family: \"Segoe UI\", Tahoma, sans-serif; font-size: 22px; font-weight: bold;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 5px 5px 5px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._info_title.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._info_title.ggUpdateText();
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyID'+
			'MyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzICAgYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIy'+
			'NC0wLjQ2Ny0xLjY5MSwwLjAwMSAgIGMtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAgICBsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSAgIGMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC'+
			'44OCwxMi43OTYsNC44OCwxNy42NzgsMCAgIEMyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiAgIGMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEw'+
			'NiwxNiwyNi4xMDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMgICBjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxICAgYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LD'+
			'AsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCAgIGwzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxICAgYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwICAgQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1'+
			'LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2ICAgYzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5ICAgYzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyID'+
			'MyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyAgIGMtMC40NjctMC40Njct'+
			'MS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAgICBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEgICBsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEgICBjLTQuODgyLTQuODgyLTEyLj'+
			'c5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCAgIEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYgICBjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1'+
			'NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDQgICBjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLj'+
			'Q0LDMuNDRsLTMuNDQxLTMuNDQxICAgYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxICAgYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAgICBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQu'+
			'ODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCAgIGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkgICBDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2ICAgYzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLT'+
			'AuOTg0LDUuMTctMi45Niw3LjE0OCAgIEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			me._information.style.transition='none';
			me._information.style.visibility='hidden';
			me._information.ggVisible=false;
			me._screentint.style.transition='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style.transition='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
		}
		me._ht_info_close.onmouseenter=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_close']=true;
		}
		me._ht_info_close.onmouseleave=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_close']=false;
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9Ij'+
			'MiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjEyNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIg'+
			'MC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4yNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz'+
			'0iMDszOzA7MCIgYmVnaW49IjAuMzc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC41cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC42MjVzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOD'+
			'swLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC44NzVz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjVzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image=document.createElement('div');
		els=me._popup_image__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		hs ='';
		hs += 'position: absolute;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.onload=function() {me._popup_image.ggUpdatePosition();}
		el.appendChild(els);
		el.ggSubElement = els;
		hs ='';
		el.ggAltText="";
		el.ggScrollbars=false;
		el.ggUpdateText = function() {
			me._popup_image.ggSubElement.setAttribute('alt', player._(me._popup_image.ggAltText));
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggSetImage = function(img) {
			me._popup_image.ggText_untranslated = img;
			me._popup_image.ggUpdateImageTranslation();
		}
		el.ggUpdateImage = function() {
			me._popup_image.ggSubElement.style.width = '0px';
			me._popup_image.ggSubElement.style.height = '0px';
			me._popup_image.ggSubElement.src='';
			me._popup_image.ggSubElement.src=me._popup_image.ggText;
		}
		el.ggUpdateImageTranslation = function() {
			if (me._popup_image.ggText != player._(me._popup_image.ggText_untranslated)) {
				me._popup_image.ggText = player._(me._popup_image.ggText_untranslated);
				me._popup_image.ggUpdateImage()
			}
		}
		el.ggText=el.ggText_untranslated=basePath + "";
		el.ggUpdateImage();
		els['ondragstart']=function() { return false; };
		el.ggUpdateText();
		el.ggId="popup_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image.ggUpdatePosition=function (useTransition) {
			var parentWidth = me._popup_image.clientWidth;
			var parentHeight = me._popup_image.clientHeight;
			var img = me._popup_image__img;
			var aspectRatioDiv = me._popup_image.clientWidth / me._popup_image.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = Math.round(parentHeight * aspectRatioImg);
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = Math.round(parentWidth / aspectRatioImg);
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			if (!me._popup_image.ggScrollbars || currentWidth < me._popup_image.clientWidth) {
				img.style.right='';
				img.style.left='50%';
				img.style.marginLeft='-' + currentWidth/2 + 'px';
			} else {
				img.style.right='';
				img.style.left='0px';
				img.style.marginLeft='0px';
				me._popup_image.scrollLeft=currentWidth / 2 - me._popup_image.clientWidth / 2;
			}
			if (!me._popup_image.ggScrollbars || currentHeight < me._popup_image.clientHeight) {
				img.style.bottom='';
				img.style.top='50%';
				img.style.marginTop='-' + currentHeight/2 + 'px';
			} else {
				img.style.bottom='';
				img.style.top='0px';
				img.style.marginTop='0px';
				me._popup_image.scrollTop=currentHeight / 2 - me._popup_image.clientHeight / 2;
			}
		}
		me._image_popup.appendChild(me._popup_image);
		me.divSkin.appendChild(me._image_popup);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9Ij'+
			'MiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjEyNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIg'+
			'MC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4yNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz'+
			'0iMDszOzA7MCIgYmVnaW49IjAuMzc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC41cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC42MjVzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOD'+
			'swLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC44NzVz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjVzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_file.ggVideoNotLoaded == false && me._popup_video_file.ggDeactivate && player.isPlaying('popup_video_file')) { me._popup_video_file.ggDeactivate(); }
				me._popup_video_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('crossOrigin', 'anonymous');
			me._popup_video_file__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_file__vid.setAttribute('disablepictureinpicture', 'true');
			me._popup_video_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_file__vid.setAttribute('autoplay', '');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.style.outline = 'none';
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = true;
			player.changeVolume('popup_video_file', 0.0);
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((284px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		me._seekbar_file.fromBufferSource = false;
		me._seekbar_file.ggMediaId = 'popup_video_file';
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._seekbar_file.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._seekbar_file.mediaEl != null) {
					if (e.target == me._seekbar_file) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._seekbar_file.fromBufferSource) {
							let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
							if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._seekbar_file || e.target == me._seekbar_file__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._seekbar_file.getBoundingClientRect().x;
							if (me._seekbar_file.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
								me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._seekbar_file.getBoundingClientRect().x;
							if (me._seekbar_file.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
								me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_file.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._seekbar_file.onmousedown = me._seekbar_file.ontouchstart = me._seekbar_file.mouseTouchHandling;
		me._seekbar_file.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#ffffff';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject(me._seekbar_file.ggMediaId);
			if (me._seekbar_file.mediaEl) {
				me._seekbar_file.fromBufferSource = false;
			} else {
				me._seekbar_file.mediaEl = player.getMediaBufferSourceObject('popup_video_file');
				me._seekbar_file.fromBufferSource = true;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '1px';
				if (me._seekbar_file.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
				me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._seekbar_file.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function(args) {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState || (me._seekbar_file.fromBufferSource && args && args['id'] == me._seekbar_file.mediaEl.id)) {
					if (me._seekbar_file.fromBufferSource) {
						var percent = me._seekbar_file.mediaEl.bufferSoundCurrentTime() / me._seekbar_file.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) ' + currPos + '%';
					if (me._seekbar_file.fromBufferSource) {
						gradientString += ', rgba(192,192,192,1) ' + currPos +'%, rgba(192,192,192,1) 100%';
					} else {
						for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(192,192,192,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(255,255,255,1) ' + currPos + '%, rgba(255,255,255,1) ' + rangeStart + '%';
									gradientString += ', rgba(192,192,192,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(192,192,192,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(255,255,255,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7px;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
			me._seekbar_file.updatePlayback();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAu'+
			'MjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMCAgICBsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3ogICAgIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNS'+
			'wxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3'+
			'LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLT'+
			'AuNTk5LDEuMDM2bDAsMCAgICBsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3ogICAgIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5'+
			'LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42OD'+
			'csNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwICAgIGMwLjM3LTAuMjE0LDAuODI2LTAuMjE0LDEuMTk2LDBsMCwwbDku'+
			'OTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwICAgIGwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eiAgICAgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPgogIDxwYXRoIGQ9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi'+
			'40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYgICAgbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBjMS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1'+
			'Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLjgyMiwwLjU5OC0xLj'+
			'AzNmwwLDAgICAgYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQyOC0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDAgICAgbC05Ljk3OCw1Ljc2MWMtMC4xODUsMC4xMDctMC4zOTIsMC4xNjEtMC41OTgsMC4xNjFsMCwwQzEyLjMyNCwyMi45NTgsMTIuMTE3LDIyLjkwNCwxMS45MzIsMjIuNzk3TDExLjkzMiwyMi43OTd6ICAgICBNMTMuNzI3LDE5LjY4OUwyMC4xMTYsMTZsLTYuMzktMy42ODlWMTkuNjg5TDEzLjcyNywxOS42ODl6Ii8+CiAgPHBhdGggZD0iTTMuNSwxNkwzLjUs'+
			'MTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2MSw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ni0yLjk2bDAsMGMxLjgzMi0xLjgzMywyLjk2LTQuMzUyLDIuOTYxLTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LT'+
			'EuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODkzLDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.playVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseenter=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_play_file']=true;
		}
		me._ht_video_play_file.onmouseleave=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_play_file']=false;
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiAgICBjMS44MzMsMS44MzEsNC4zNTIsMi45'+
			'Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMj'+
			'AuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUgICAgIGMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVs'+
			'MCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1Mi'+
			'wyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMTQsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQz'+
			'MywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1ICAgICBjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLj'+
			'E5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIy'+
			'LjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMT'+
			'QsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1ICAgICBjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1'+
			'LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwIC'+
			'AgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiAgICBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4w'+
			'MjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OT'+
			'h2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUgICAgIGMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVsMCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_file");
			}
			me._ht_video_pause_file.style.transition='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style.transition='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseenter=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_pause_file']=true;
		}
		me._ht_video_pause_file.onmouseleave=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_pause_file']=false;
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._video_popup_url=document.createElement('div');
		el.ggId="video_popup_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_url=document.createElement('div');
		els=me._loading_video_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9Ij'+
			'MiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjEyNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIg'+
			'MC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4yNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz'+
			'0iMDszOzA7MCIgYmVnaW49IjAuMzc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC41cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC42MjVzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOD'+
			'swLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC44NzVz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjVzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_url";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url.appendChild(me._loading_video_url);
		el=me._popup_video_url=document.createElement('div');
		me._popup_video_url.seekbars = [];
		me._popup_video_url.seekbars.push('seekbar_url');
		me._popup_video_url.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_url.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_url.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_url.hasChildNodes()) {
				me._popup_video_url.removeChild(me._popup_video_url.lastChild);
			}
			if (me._popup_video_url__vid) {
				me._popup_video_url__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_url.ggVideoNotLoaded == false && me._popup_video_url.ggDeactivate && player.isPlaying('popup_video_url')) { me._popup_video_url.ggDeactivate(); }
				me._popup_video_url.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_url');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_url.ggVideoNotLoaded = false;
			me._popup_video_url__vid=document.createElement('video');
			me._popup_video_url__vid.className='ggskin ggskin_video';
			me._popup_video_url__vid.setAttribute('width', '100%');
			me._popup_video_url__vid.setAttribute('height', '100%');
			me._popup_video_url__vid.setAttribute('crossOrigin', 'anonymous');
			me._popup_video_url__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_url__vid.setAttribute('disablepictureinpicture', 'true');
			me._popup_video_url__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_url__vid.setAttribute('autoplay', '');
			me._popup_video_url__source=document.createElement('source');
			me._popup_video_url__source.setAttribute('src', media);
			me._popup_video_url__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_url__vid.setAttribute('style', ';');
			me._popup_video_url__vid.style.outline = 'none';
			me._popup_video_url__vid.appendChild(me._popup_video_url__source);
			me._popup_video_url.appendChild(me._popup_video_url__vid);
			var videoEl = player.registerVideoElement('popup_video_url', me._popup_video_url__vid);
			videoEl.autoplay = true;
			player.changeVolume('popup_video_url', 0.0);
			notifySeekbars();
			me._popup_video_url.ggVideoSource = media;
		}
		el.ggId="popup_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_url.ggIsActive=function() {
			if (me._popup_video_url__vid != null) {
				return (me._popup_video_url__vid.paused == false && me._popup_video_url__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_url.appendChild(me._popup_video_url);
		me.divSkin.appendChild(me._video_popup_url);
		el=me._video_popup_controls_url=document.createElement('div');
		el.ggId="video_popup_controls_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 25px;';
		hs+='left : calc(50% - ((284px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_controls_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._seekbar_url=document.createElement('div');
		me._seekbar_url__playhead=document.createElement('div');
		me._seekbar_url.mediaEl = null;
		me._seekbar_url.fromBufferSource = false;
		me._seekbar_url.ggMediaId = 'popup_video_url';
		el.ggId="seekbar_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._seekbar_url.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._seekbar_url.mediaEl != null) {
					if (e.target == me._seekbar_url) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._seekbar_url.fromBufferSource) {
							let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.bufferSoundDuration();
							me._seekbar_url.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
							if(!isNaN(seekpos)) me._seekbar_url.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._seekbar_url || e.target == me._seekbar_url__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._seekbar_url.getBoundingClientRect().x;
							if (me._seekbar_url.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.bufferSoundDuration();
								me._seekbar_url.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_url.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._seekbar_url.getBoundingClientRect().x;
							if (me._seekbar_url.fromBufferSource) {
								let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.bufferSoundDuration();
								me._seekbar_url.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._seekbar_url.clientWidth) * me._seekbar_url.mediaEl.duration;
								if(!isNaN(seekpos)) me._seekbar_url.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._seekbar_url.onmousedown = me._seekbar_url.ontouchstart = me._seekbar_url.mouseTouchHandling;
		me._seekbar_url.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_url__playhead.style.visibility = 'hidden';
				me._seekbar_url.style.background = '#ffffff';
				me._seekbar_url.ggConnected = false;
			}
			if (me._seekbar_url.mediaEl != null) {
				if (me._seekbar_url.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_url.updatePlayback);
					if (me._seekbar_url.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_url.bufferSoundActivate);
					}
					if (me._seekbar_url.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_url.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_url.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_url.bufferSoundDeactivate);
					}
					if (me._seekbar_url.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_url.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_url.mediaEl.removeEventListener('progress', me._seekbar_url.updatePlayback);
					me._seekbar_url.mediaEl.removeEventListener('canplay', me._seekbar_url.updatePlayback);
					me._seekbar_url.mediaEl.removeEventListener('timeupdate', me._seekbar_url.updatePlayback);
					if (me._seekbar_url.ggActivate) {
						me._seekbar_url.mediaEl.removeEventListener('play', me._seekbar_url.ggActivate);
					}
					if (me._seekbar_url.ggDeactivate) {
						me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggDeactivate);
						me._seekbar_url.mediaEl.removeEventListener('pause', me._seekbar_url.ggDeactivate);
					}
					if (me._seekbar_url.ggMediaEnded) {
						me._seekbar_url.mediaEl.removeEventListener('ended', me._seekbar_url.ggMediaEnded);
					}
				}
			}
			me._seekbar_url.mediaEl = player.getMediaObject(me._seekbar_url.ggMediaId);
			if (me._seekbar_url.mediaEl) {
				me._seekbar_url.fromBufferSource = false;
			} else {
				me._seekbar_url.mediaEl = player.getMediaBufferSourceObject('popup_video_url');
				me._seekbar_url.fromBufferSource = true;
			}
			if (me._seekbar_url.mediaEl != null) {
				me._seekbar_url__playhead.style.visibility = 'inherit';
				me._seekbar_url__playhead.style.left = '1px';
				if (me._seekbar_url.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_url.updatePlayback);
					if (me._seekbar_url.ggActivate) {
						me._seekbar_url.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_url.mediaEl.id) me._seekbar_url.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_url.bufferSoundActivate);
					}
					if (me._seekbar_url.ggDeactivate) {
						me._seekbar_url.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_url.mediaEl.id) me._seekbar_url.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_url.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_url.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_url.bufferSoundDeactivate);
					}
					if (me._seekbar_url.ggMediaEnded) {
						me._seekbar_url.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_url.mediaEl.id) me._seekbar_url.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_url.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_url.mediaEl.addEventListener('progress', me._seekbar_url.updatePlayback);
					me._seekbar_url.mediaEl.addEventListener('canplay', me._seekbar_url.updatePlayback);
					me._seekbar_url.mediaEl.addEventListener('timeupdate', me._seekbar_url.updatePlayback);
					if (me._seekbar_url.ggActivate) {
						me._seekbar_url.mediaEl.addEventListener('play', me._seekbar_url.ggActivate);
					}
					if (me._seekbar_url.ggDeactivate) {
						me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggDeactivate);
						me._seekbar_url.mediaEl.addEventListener('pause', me._seekbar_url.ggDeactivate);
					}
					if (me._seekbar_url.ggMediaEnded) {
						me._seekbar_url.mediaEl.addEventListener('ended', me._seekbar_url.ggMediaEnded);
					}
				}
				me._seekbar_url.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._seekbar_url.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_url.updatePlayback = function(args) {
			if (!me._seekbar_url.ggConnected) return;
			if (me._seekbar_url.mediaEl != null) {
				if (me._seekbar_url.mediaEl.readyState || (me._seekbar_url.fromBufferSource && args && args['id'] == me._seekbar_url.mediaEl.id)) {
					if (me._seekbar_url.fromBufferSource) {
						var percent = me._seekbar_url.mediaEl.bufferSoundCurrentTime() / me._seekbar_url.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_url.mediaEl.currentTime / me._seekbar_url.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_url.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_url__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_url.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(128,128,128,1) ' + currPos + '%';
					if (me._seekbar_url.fromBufferSource) {
						gradientString += ', rgba(192,192,192,1) ' + currPos +'%, rgba(192,192,192,1) 100%';
					} else {
						for (var i = 0; i < me._seekbar_url.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_url.mediaEl.buffered.start(i) / me._seekbar_url.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_url.mediaEl.buffered.end(i) / me._seekbar_url.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(192,192,192,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(255,255,255,1) ' + currPos + '%, rgba(255,255,255,1) ' + rangeStart + '%';
									gradientString += ', rgba(192,192,192,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(192,192,192,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(255,255,255,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_url.style.background = gradientString;
				}
			}
		}
		me._seekbar_url.appendChild(me._seekbar_url__playhead);
		hs+='background : #ffffff;';
		hs+='border : 1px solid #ffffff;';
		hs+='border-radius : 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7px;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._seekbar_url.setAttribute('style', hs);
		me._seekbar_url__playhead.setAttribute('style', hs_playhead);
		me._seekbar_url.ggIsActive=function() {
			if (me._seekbar_url.mediaEl != null) {
				return (me._seekbar_url.mediaEl.paused == false && me._seekbar_url.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_url.ggActivate=function () {
			me._ht_video_pause_url.style.transition='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
			me._ht_video_play_url.style.transition='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
		}
		me._seekbar_url.ggDeactivate=function () {
			me._ht_video_play_url.style.transition='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
			me._ht_video_pause_url.style.transition='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
		}
		me._seekbar_url.ggUpdatePosition=function (useTransition) {
			me._seekbar_url.updatePlayback();
		}
		me._video_popup_controls_url.appendChild(me._seekbar_url);
		el=me._ht_video_play_url=document.createElement('div');
		els=me._ht_video_play_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAu'+
			'MjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMCAgICBsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3ogICAgIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNS'+
			'wxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3'+
			'LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLT'+
			'AuNTk5LDEuMDM2bDAsMCAgICBsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3ogICAgIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNSwxMi41bDAsMEM5'+
			'LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42OD'+
			'csNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_play_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwICAgIGMwLjM3LTAuMjE0LDAuODI2LTAuMjE0LDEuMTk2LDBsMCwwbDku'+
			'OTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwICAgIGwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eiAgICAgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPgogIDxwYXRoIGQ9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi'+
			'40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYgICAgbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBjMS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1'+
			'Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLjgyMiwwLjU5OC0xLj'+
			'AzNmwwLDAgICAgYzAuMzctMC4yMTQsMC44MjYtMC4yMTQsMS4xOTYsMGwwLDBsOS45NzgsNS43NjFjMC4zNywwLjIxNCwwLjU5OSwwLjYwOCwwLjU5OSwxLjAzNmwwLDBjMCwwLjQyOC0wLjIyOSwwLjgyMi0wLjU5OSwxLjAzNmwwLDAgICAgbC05Ljk3OCw1Ljc2MWMtMC4xODUsMC4xMDctMC4zOTIsMC4xNjEtMC41OTgsMC4xNjFsMCwwQzEyLjMyNCwyMi45NTgsMTIuMTE3LDIyLjkwNCwxMS45MzIsMjIuNzk3TDExLjkzMiwyMi43OTd6ICAgICBNMTMuNzI3LDE5LjY4OUwyMC4xMTYsMTZsLTYuMzktMy42ODlWMTkuNjg5TDEzLjcyNywxOS42ODl6Ii8+CiAgPHBhdGggZD0iTTMuNSwxNkwzLjUs'+
			'MTZjMC02LjkwNCw1LjU5Ni0xMi40OTksMTIuNS0xMi41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDMtNS41OTYsMTIuNDk4LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk4LDMuNTAxLDIyLjkwMywzLjUsMTZMMy41LDE2eiBNNS44OTMsMTZjMCwyLjc5NSwxLjEyOSw1LjMxMywyLjk2MSw3LjE0NiAgICBsMCwwYzEuODMzLDEuODMxLDQuMzUyLDIuOTYsNy4xNDcsMi45NmwwLDBjMi43OTQsMCw1LjMxNC0xLjEyOSw3LjE0Ni0yLjk2bDAsMGMxLjgzMi0xLjgzMywyLjk2LTQuMzUyLDIuOTYxLTcuMTQ2bDAsMCAgICBjLTAuMDAxLTIuNzk1LT'+
			'EuMTI5LTUuMzEzLTIuOTYxLTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg3LDUuODkzLDEzLjIwNSw1Ljg5MywxNkw1Ljg5MywxNkw1Ljg5MywxNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_play_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_play_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_url.onclick=function (e) {
			if (me._popup_video_url.ggApiPlayer) {
				if (me._popup_video_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_url.ggApiPlayer.playVideo();
					};
					if (me._popup_video_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_url.ggApiPlayerType == 'vimeo') {
					me._popup_video_url.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_url","1");
			}
			me._ht_video_play_url.style.transition='none';
			me._ht_video_play_url.style.visibility='hidden';
			me._ht_video_play_url.ggVisible=false;
			me._ht_video_pause_url.style.transition='none';
			me._ht_video_pause_url.style.visibility=(Number(me._ht_video_pause_url.style.opacity)>0||!me._ht_video_pause_url.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_url.ggVisible=true;
		}
		me._ht_video_play_url.onmouseenter=function (e) {
			me._ht_video_play_url__img.style.visibility='hidden';
			me._ht_video_play_url__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_play_url']=true;
		}
		me._ht_video_play_url.onmouseleave=function (e) {
			me._ht_video_play_url__img.style.visibility='inherit';
			me._ht_video_play_url__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_play_url']=false;
		}
		me._ht_video_play_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_url.appendChild(me._ht_video_play_url);
		el=me._ht_video_pause_url=document.createElement('div');
		els=me._ht_video_pause_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiAgICBjMS44MzMsMS44MzEsNC4zNTIsMi45'+
			'Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMj'+
			'AuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUgICAgIGMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVs'+
			'MCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1Mi'+
			'wyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMTQsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQz'+
			'MywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1ICAgICBjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLj'+
			'E5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_pause_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIy'+
			'LjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMT'+
			'QsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1ICAgICBjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1'+
			'LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwIC'+
			'AgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiAgICBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4w'+
			'MjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMjAuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OT'+
			'h2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUgICAgIGMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVsMCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_pause_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_pause_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_url.onclick=function (e) {
			if (me._popup_video_url.ggApiPlayer) {
				if (me._popup_video_url.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_url.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_url.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_url.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_url.ggApiPlayerType == 'vimeo') {
					me._popup_video_url.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_url");
			}
			me._ht_video_pause_url.style.transition='none';
			me._ht_video_pause_url.style.visibility='hidden';
			me._ht_video_pause_url.ggVisible=false;
			me._ht_video_play_url.style.transition='none';
			me._ht_video_play_url.style.visibility=(Number(me._ht_video_play_url.style.opacity)>0||!me._ht_video_play_url.style.opacity)?'inherit':'hidden';
			me._ht_video_play_url.ggVisible=true;
		}
		me._ht_video_pause_url.onmouseenter=function (e) {
			me._ht_video_pause_url__img.style.visibility='hidden';
			me._ht_video_pause_url__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_pause_url']=true;
		}
		me._ht_video_pause_url.onmouseleave=function (e) {
			me._ht_video_pause_url__img.style.visibility='inherit';
			me._ht_video_pause_url__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_pause_url']=false;
		}
		me._ht_video_pause_url.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_url.appendChild(me._ht_video_pause_url);
		me.divSkin.appendChild(me._video_popup_controls_url);
		el=me._video_popup_vimeo=document.createElement('div');
		el.ggId="video_popup_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_vimeo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_vimeo=document.createElement('div');
		els=me._loading_video_vimeo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9Ij'+
			'MiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjEyNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIg'+
			'MC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4yNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz'+
			'0iMDszOzA7MCIgYmVnaW49IjAuMzc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC41cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC42MjVzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOD'+
			'swLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC44NzVz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjVzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_vimeo__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_vimeo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_vimeo.appendChild(me._loading_video_vimeo);
		el=me._popup_video_vimeo=document.createElement('div');
		me._popup_video_vimeo.seekbars = [];
		me._popup_video_vimeo.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_vimeo.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_vimeo.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_vimeo.hasChildNodes()) {
				me._popup_video_vimeo.removeChild(me._popup_video_vimeo.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_vimeo.ggVideoNotLoaded == false && me._popup_video_vimeo.ggDeactivate && player.isPlaying('popup_video_vimeo')) { me._popup_video_vimeo.ggDeactivate(); }
				me._popup_video_vimeo.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_vimeo.ggVideoNotLoaded = false;
			me._popup_video_vimeo__vid=document.createElement('iframe');
			me._popup_video_vimeo__vid.className='ggskin ggskin_video';
			var ggVimeoMedia = media;
			var ggTimeParam = '';
			if (ggVimeoMedia.indexOf('#') != -1) {
				ggTimeParam = media.slice(ggVimeoMedia.indexOf('#'));
				ggVimeoMedia = ggVimeoMedia.slice(0, ggVimeoMedia.indexOf('#'));
			}
			var ggVideoParams = '?autoplay=1&amp;loop=0&amp;rel=0';
			var ggVideoUrl = 'https://player.vimeo.com/video/' + ggVimeoMedia + ggVideoParams + ggTimeParam;
			me._popup_video_vimeo__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_vimeo__vid.setAttribute('width', '100%');
			me._popup_video_vimeo__vid.setAttribute('height', '100%');
			me._popup_video_vimeo__vid.setAttribute('allow', 'autoplay');
			me._popup_video_vimeo__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_vimeo__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_vimeo.appendChild(me._popup_video_vimeo__vid);
			me._popup_video_vimeo.ggVideoSource = media;
		}
		el.ggId="popup_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_vimeo.appendChild(me._popup_video_vimeo);
		me.divSkin.appendChild(me._video_popup_vimeo);
		el=me._video_popup_youtube=document.createElement('div');
		el.ggId="video_popup_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=me._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGhlaWdodD0iNjQiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMCIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9Ij'+
			'MiIHRyYW5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjEyNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIg'+
			'MC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC4yNXMiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIGN5PSIzIiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIj4KICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJyIiBkdXI9IjFzIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIHZhbHVlcz'+
			'0iMDszOzA7MCIgYmVnaW49IjAuMzc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC41cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAx'+
			'NiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC42MjVzIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOD'+
			'swLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjc1cyIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiPgogIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InIiIGR1cj0iMXMiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgdmFsdWVzPSIwOzM7MDswIiBiZWdpbj0iMC44NzVz'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiBjeT0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSI+CiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iciIgZHVyPSIxcyIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiB2YWx1ZXM9IjA7MzswOzAiIGJlZ2luPSIwLjVzIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_youtube__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._loading_video_youtube);
		el=me._popup_video_youtube=document.createElement('div');
		me._popup_video_youtube.seekbars = [];
			me._popup_video_youtube.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._popup_video_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._popup_video_youtube.ggVideoNotLoaded == false && me._popup_video_youtube.ggDeactivate && player.isPlaying('popup_video_youtube')) { me._popup_video_youtube.ggDeactivate(); }
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('allow', 'autoplay');
			me._popup_video_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._popup_video_youtube.ggYoutubeApiReady();}
		}
		el.ggId="popup_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._popup_video_youtube);
		me.divSkin.appendChild(me._video_popup_youtube);
		el=me._close=document.createElement('div');
		els=me._close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyID'+
			'MyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzICAgYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIy'+
			'NC0wLjQ2Ny0xLjY5MSwwLjAwMSAgIGMtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAgICBsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSAgIGMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC'+
			'44OCwxMi43OTYsNC44OCwxNy42NzgsMCAgIEMyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiAgIGMwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEw'+
			'NiwxNiwyNi4xMDZ6Ii8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMgICBjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxICAgYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LD'+
			'AsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCAgIGwzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxICAgYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwICAgQzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1'+
			'LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2ICAgYzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5ICAgYzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyID'+
			'MyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyAgIGMtMC40NjctMC40Njct'+
			'MS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAgICBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTFjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDEgICBsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEgICBjLTQuODgyLTQuODgyLTEyLj'+
			'c5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCAgIEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OUM2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTYgICBjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSAgIGMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1'+
			'NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDQgICBjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLj'+
			'Q0LDMuNDRsLTMuNDQxLTMuNDQxICAgYy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxICAgYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAgICBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQu'+
			'ODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCAgIGM0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkgICBDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2ICAgYzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLT'+
			'AuOTg0LDUuMTctMi45Niw3LjE0OCAgIEMyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close.onclick=function (e) {
			me._close.style.transition='none';
			me._close.style.visibility='hidden';
			me._close.ggVisible=false;
			me._screentint.style.transition='none';
			me._screentint.style.visibility='hidden';
			me._screentint.ggVisible=false;
			me._controller.style.transition='none';
			me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
			me._controller.ggVisible=true;
			me._popup_video_youtube.ggInitMedia('');
			me._popup_video_youtube.style.transition='none';
			me._popup_video_youtube.style.visibility='hidden';
			me._popup_video_youtube.ggVisible=false;
			me._video_popup_youtube.style.transition='none';
			me._video_popup_youtube.style.visibility='hidden';
			me._video_popup_youtube.ggVisible=false;
			me._popup_video_vimeo.ggInitMedia('');
			me._popup_video_vimeo.style.transition='none';
			me._popup_video_vimeo.style.visibility='hidden';
			me._popup_video_vimeo.ggVisible=false;
			me._video_popup_vimeo.style.transition='none';
			me._video_popup_vimeo.style.visibility='hidden';
			me._video_popup_vimeo.ggVisible=false;
			me._popup_video_url.ggInitMedia('');
			me._popup_video_url.style.transition='none';
			me._popup_video_url.style.visibility='hidden';
			me._popup_video_url.ggVisible=false;
			me._video_popup_url.style.transition='none';
			me._video_popup_url.style.visibility='hidden';
			me._video_popup_url.ggVisible=false;
			me._video_popup_controls_url.style.transition='none';
			me._video_popup_controls_url.style.visibility='hidden';
			me._video_popup_controls_url.ggVisible=false;
			me._popup_video_file.ggInitMedia('');
			me._popup_video_file.style.transition='none';
			me._popup_video_file.style.visibility='hidden';
			me._popup_video_file.ggVisible=false;
			me._video_popup_file.style.transition='none';
			me._video_popup_file.style.visibility='hidden';
			me._video_popup_file.ggVisible=false;
			me._video_popup_controls_file.style.transition='none';
			me._video_popup_controls_file.style.visibility='hidden';
			me._video_popup_controls_file.ggVisible=false;
			me._image_popup.style.transition='none';
			me._image_popup.style.visibility='hidden';
			me._image_popup.ggVisible=false;
			me._popup_image.ggSubElement.src='';
			me._popup_image.style.transition='none';
			me._popup_image.style.visibility='hidden';
			me._popup_image.ggVisible=false;
		}
		me._close.onmouseenter=function (e) {
			me._close__img.style.visibility='hidden';
			me._close__imgo.style.visibility='inherit';
			me.elementMouseOver['close']=true;
		}
		me._close.onmouseleave=function (e) {
			me._close__img.style.visibility='inherit';
			me._close__imgo.style.visibility='hidden';
			me.elementMouseOver['close']=false;
		}
		me._close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAETklEQVR4nO2dTW7bMBCFR04WBXqC7pubFLlznSx6jrrouidIgSKNumgU2I5IUdTPvOF73y52HFF8H4eUIkudff1uGfrcmyIMXeqN28TrCr4thjzfiXDI/LJoj3fZXgug8NvnIuND6g3RNG9ZH65fEDT0ZuNrAEHEwTT6melVAciRAORIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQk7osvCn6+7uLn7vjyakleDRfAa7DT73GStMC5IKWBP9pdgrwCjjadNNkBUAJP/UaEs0JgBR+yXveNCUAckejtq0ZAVA7+BzENjYhAELHoi/2UoQXACH8gRIJkNprFvwwcK/OHNtOKuzueJpsV39/B1MxwlYAz/DX2D5KJQgpAErnpd'+
			'rRHU/29BLjO7fhBEAJfyDVno+PP6o/uyehBEDosDlEWBSGEcC7o3Lk2oay2EsRQgDP8EsDXNJGz/2DFwBh5HfHk5Ws6XKLQlSgBUAIf+DmYVmIUwJ57evqJ4KQQpvD0O7caF1ykufmYfqzHqxaARB3cIr+/u6i3VP7sGU59+g/6CnAi6kgfv35W/V5xLUAtQC1F3F8+vZzi+a4QC3AFEuO72urwN7TALUAEc7UbQ21AEtBG8010AvgUQWQxKEXwKxMgt9fPu/Qkv2RAK9MSfDhMP7YHaTRXIMEmEEqzOeKaz9QzglIgDNqQ7lNPpOrnr0qhwRYAZTRXIMEuGKLOR15HSAByJEAjiBMHRJghJpgEMKsQQKQIwHIkQAVIK/q5yIBKnjuY3ztqwQJQI4EqOC22+DcrxMSoIKoh3xjSAByJAA5EmCE1v7hk0MCOIIgjQQg'+
			'RwJcscV3A5GPGiTACiCU8lokwBme3wz22pYEcAKlakiAV2oDQaoaNUgAKwsfPcha6AXwCB+patALMEXulq9IQdZCLUDJ6C+55eua7H2LYWoBpsiN4NrRP/W5pbejmwu1AFO3hEuBcgi3BqsKEGHOK2HpftSOfg9Wv1HkWhLs1Vlz27tluzwGEOwUgFhNlhwyIo5+M2ABzLAk2DpAr32FFsAMQ4KS8J9e+nCj3yyAAGa+EpSGlzpfgH6aOYQAZhiVIMWStnnvVxgBzPw7ay7IpX8glABmWBIsnfcR9iWcAGYYHWe2bN5HeaxgSAHM9pMg94jYMUrL/t7n/FOEfnZwySNc1toO8t9bQtgKMIDUmVHm/XPCC2CG0akRVvxjNCGAGYYEUyC2sRkBzDA7eAC1bU0JYObX0bUXl3jTnABmWBIgh28W/DAwx16HiGPbjUSTFW'+
			'Agalnek6YFMItZlvek2SngHAWepvkKIPJIAHIkADkSgBwJQI4EIEcCkCMByJEA5EgAciQAORKAHAlAjgQgRwKQIwHIOZhZOw/BE3PpVAHIGQRQFeCjM7tcA0gCHt6yvp4CJEH7XGQ8tgaQBO3yLtvUZeHDL4LcyEQsJDmo/wGz32qK0t4v2AAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='100% 100%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((window.location.hostname == "peron"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_1.style.transition='';
				if (me._image_1.ggCurrentLogicStateVisible == 0) {
					me._image_1.style.visibility="hidden";
					me._image_1.ggVisible=false;
				}
				else {
					me._image_1.style.visibility="hidden";
					me._image_1.ggVisible=false;
				}
			}
		}
		me._image_1.logicBlock_visible();
		me._image_1.onclick=function (e) {
				player.playSound("1-Pochatok","1");
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_1);
		me.elementMouseOver['up']=false;
		me.elementMouseOver['down']=false;
		me.elementMouseOver['left']=false;
		me.elementMouseOver['right']=false;
		me.elementMouseOver['zoomin']=false;
		me._tt_zoomin.logicBlock_visible();
		me.elementMouseOver['zoomout']=false;
		me._tt_zoomout.logicBlock_visible();
		me._button_stop_auto_rotate.logicBlock_visible();
		me.elementMouseOver['button_stop_auto_rotate']=false;
		me._tt_stop_auto_rotate.logicBlock_visible();
		me._button_start_auto_rotate.logicBlock_visible();
		me.elementMouseOver['button_start_auto_rotate']=false;
		me._tt_start_auto_rotate.logicBlock_visible();
		me.elementMouseOver['info']=false;
		me._tt_info.logicBlock_visible();
		me._movemode_drag.logicBlock_visible();
		me.elementMouseOver['movemode_drag']=false;
		me._tt_movemode0.logicBlock_visible();
		me._movemode_continuous.logicBlock_visible();
		me.elementMouseOver['movemode_continuous']=false;
		me._tt_movemode.logicBlock_visible();
		me._button_simplex_fullscreen.logicBlock_visible();
		me._button_image_normalscreen.logicBlock_visible();
		me.elementMouseOver['button_image_normalscreen']=false;
		me._tt_exit_fullscreen.logicBlock_visible();
		me._button_image_fullscreen.logicBlock_visible();
		me.elementMouseOver['button_image_fullscreen']=false;
		me._tt_enter_fullscreen.logicBlock_visible();
		me.elementMouseOver['userdata_close']=false;
		me.elementMouseOver['ht_info_close']=false;
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		me.elementMouseOver['ht_video_play_file']=false;
		me.elementMouseOver['ht_video_pause_file']=false;
		me._popup_video_url.ggVideoSource = '';
		me._popup_video_url.ggVideoNotLoaded = true;
		me.elementMouseOver['ht_video_play_url']=false;
		me.elementMouseOver['ht_video_pause_url']=false;
		me._popup_video_vimeo.ggVideoSource = '';
		me._popup_video_vimeo.ggVideoNotLoaded = true;
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		me.elementMouseOver['close']=false;
		me._image_1.logicBlock_visible();
		player.addListener('autorotatechanged', function(event) {
			me._button_stop_auto_rotate.logicBlock_visible();
			me._button_start_auto_rotate.logicBlock_visible();
		});
		player.addListener('beforechangenode', function(event) {
			me._loading.style.transition='none';
			me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
			me._loading.ggVisible=true;
		});
		player.addListener('changenode', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changenode();
				}
			}
			me._button_stop_auto_rotate.logicBlock_visible();
			me._button_start_auto_rotate.logicBlock_visible();
			me._movemode_drag.logicBlock_visible();
			me._movemode_continuous.logicBlock_visible();
			me._seekbar_file.ggConnectToMediaEl();
			me._seekbar_url.ggConnectToMediaEl();
		});
		player.addListener('changevisitednodes', function(event) {
			if (hotspotTemplates.hasOwnProperty('ht_node')) {
				for(var i = 0; i < hotspotTemplates['ht_node'].length; i++) {
					hotspotTemplates['ht_node'][i].ggEvent_changevisitednodes();
				}
			}
		});
		player.addListener('configloaded', function(event) {
			me._tt_zoomin.logicBlock_visible();
			me._tt_zoomout.logicBlock_visible();
			me._tt_stop_auto_rotate.logicBlock_visible();
			me._tt_start_auto_rotate.logicBlock_visible();
			me._tt_info.logicBlock_visible();
			me._tt_movemode0.logicBlock_visible();
			me._tt_movemode.logicBlock_visible();
			me._button_simplex_fullscreen.logicBlock_visible();
			me._tt_exit_fullscreen.logicBlock_visible();
			me._tt_enter_fullscreen.logicBlock_visible();
			me._image_1.logicBlock_visible();
		});
		player.addListener('fullscreenenter', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('fullscreenexit', function(event) {
			me._button_image_normalscreen.logicBlock_visible();
			me._button_image_fullscreen.logicBlock_visible();
		});
		player.addListener('imagesready', function(event) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('viewmodechanged', function(event) {
			me._movemode_drag.logicBlock_visible();
			me._movemode_continuous.logicBlock_visible();
		});
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.onclick=function (e) {
			skin._controller.style.transition='none';
			skin._controller.style.visibility='hidden';
			skin._controller.ggVisible=false;
			skin._screentint.style.transition='none';
			skin._screentint.style.visibility=(Number(skin._screentint.style.opacity)>0||!skin._screentint.style.opacity)?'inherit':'hidden';
			skin._screentint.ggVisible=true;
			skin._close.style.transition='none';
			skin._close.style.visibility=(Number(skin._close.style.opacity)>0||!skin._close.style.opacity)?'inherit':'hidden';
			skin._close.ggVisible=true;
			skin._popup_video_youtube.ggInitMedia(player._(player._(me.hotspot.url)));
			if (skin._popup_video_youtube.ggVideoNotLoaded) {
				skin._popup_video_youtube.ggInitMedia(skin._popup_video_youtube.ggVideoSource);
			}
			skin._popup_video_youtube.style.transition='none';
			skin._popup_video_youtube.style.visibility=(Number(skin._popup_video_youtube.style.opacity)>0||!skin._popup_video_youtube.style.opacity)?'inherit':'hidden';
			skin._popup_video_youtube.ggVisible=true;
			skin._video_popup_youtube.style.transition='none';
			skin._video_popup_youtube.style.visibility=(Number(skin._video_popup_youtube.style.opacity)>0||!skin._video_popup_youtube.style.opacity)?'inherit':'hidden';
			skin._video_popup_youtube.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._tt_ht_video_youtube.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_youtube.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_video_youtube=document.createElement('div');
		els=me._ht_video_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40ODQsMTcuNTZ2NS43ODRsNS4wMDktMi44OTNMMTIuNDg0LDE3LjU2eiBNMjguMTc4LDE1Ljc2NGMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMCAgICBsLTIuODQsMS42Mzl2LTIuNjZjMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1NnMtMC4yODYtMC4xODktMC40NTYtMC4xODloLTIuMDdjMS4wNjgtMC45Mzcs'+
			'MS43NDQtMi4zMTEsMS43NDQtMy44NDQgICAgYy0wLjAwMS0yLjgyMy0yLjI4OS01LjExMS01LjExMi01LjExMmMtMi44MjMsMC01LjExMSwyLjI4OS01LjExMiw1LjExMmMwLDEuNTMzLDAuNjc1LDIuOTA3LDEuNzQ0LDMuODQ0aC0zLjQ5NCAgICBjMC42NTEtMC43MDQsMS4wNDktMS42NDUsMS4wNDktMi42NzljMC0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDcgICAgYzAsMS4wMzQsMC4zOTgsMS45NzUsMS4wNDksMi42NzlINC4xNDVjLTAuMTcsMC0wLjMzNiwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MDgsMy41LDE0LjU3NC'+
			'wzLjUsMTQuNzQ0djExLjQ2OCAgICBjMCwwLjE3LDAuMDY5LDAuMzM2LDAuMTg4LDAuNDU2YzAuMTIsMC4xMiwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDRjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4ICAgIHMwLjE4OC0wLjI4NiwwLjE4OC0wLjQ1NnYtMi42NTlsMi44NCwxLjYzOWMwLjEsMC4wNTgsMC4yMTEsMC4wODYsMC4zMjIsMC4wODZzMC4yMjMtMC4wMjgsMC4zMjItMC4wODYgICAgYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU4di04LjMxMkMyOC41LDE2LjA5MiwyOC4zNzcsMTUuODc5LDI4LjE3OCwxNS43NjR6IE0xNC43ODgsMTAuMjU1ICAgIGMw'+
			'LjAwNC0yLjExMSwxLjcxMi0zLjgxOSwzLjgyMy0zLjgyM2MyLjExMSwwLjAwNCwzLjgxOSwxLjcxMiwzLjgyMywzLjgyM2MtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMgICAgQzE2LjUsMTQuMDc1LDE0Ljc5MiwxMi4zNjcsMTQuNzg4LDEwLjI1NXogTTguODUxLDguNzYzYzEuNDY4LDAuMDAyLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY3LTEuMTksMi42NTUtMi42NTgsMi42NTcgICAgYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTUzLDcuMzgzLDguNzY1LDguODUxLDguNzYzeiBNMjMuNDA0LDI1LjU2N0g0Ljc4OVYxNS'+
			'4zODhoMTguNjE1VjI1LjU2N3ogICAgIE0yNy4yMSwyMy41MTdsLTIuNTE3LTEuNDUzdi0zLjE3MmwyLjUxNy0xLjQ1MlYyMy41MTd6Ii8+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40ODQsMTcuNTZ2NS43ODRsNS4wMDktMi44OTNMMTIuNDg0LDE3LjU2eiBNMjguMTc4LDE1Ljc2NGMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMCAgICBsLTIuODQsMS42Mzl2LTIuNjZjMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1NnMtMC4yODYtMC4xODktMC40NTYtMC4x'+
			'ODloLTIuMDdjMS4wNjgtMC45MzcsMS43NDQtMi4zMTEsMS43NDQtMy44NDQgICAgYy0wLjAwMS0yLjgyMy0yLjI4OS01LjExMS01LjExMi01LjExMmMtMi44MjMsMC01LjExMSwyLjI4OS01LjExMiw1LjExMmMwLDEuNTMzLDAuNjc1LDIuOTA3LDEuNzQ0LDMuODQ0aC0zLjQ5NCAgICBjMC42NTEtMC43MDQsMS4wNDktMS42NDUsMS4wNDktMi42NzljMC0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDcgICAgYzAsMS4wMzQsMC4zOTgsMS45NzUsMS4wNDksMi42NzlINC4xNDVjLTAuMTcsMC0wLjMzNiwwLjA2OS0wLjQ1NiwwLjE4OEMzLj'+
			'U2OCwxNC40MDgsMy41LDE0LjU3NCwzLjUsMTQuNzQ0djExLjQ2OCAgICBjMCwwLjE3LDAuMDY5LDAuMzM2LDAuMTg4LDAuNDU2YzAuMTIsMC4xMiwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDRjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4ICAgIHMwLjE4OC0wLjI4NiwwLjE4OC0wLjQ1NnYtMi42NTlsMi44NCwxLjYzOWMwLjEsMC4wNTgsMC4yMTEsMC4wODYsMC4zMjIsMC4wODZzMC4yMjMtMC4wMjgsMC4zMjItMC4wODYgICAgYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU4di04LjMxMkMyOC41LDE2LjA5MiwyOC4zNzcsMTUuODc5LDI4LjE3OCwxNS43NjR6'+
			'IE0xNC43ODgsMTAuMjU1ICAgIGMwLjAwNC0yLjExMSwxLjcxMi0zLjgxOSwzLjgyMy0zLjgyM2MyLjExMSwwLjAwNCwzLjgxOSwxLjcxMiwzLjgyMywzLjgyM2MtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMgICAgQzE2LjUsMTQuMDc1LDE0Ljc5MiwxMi4zNjcsMTQuNzg4LDEwLjI1NXogTTguODUxLDguNzYzYzEuNDY4LDAuMDAyLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY3LTEuMTksMi42NTUtMi42NTgsMi42NTcgICAgYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTUzLDcuMzgzLDguNzY1LDguODUxLDguNzYzeiBNMj'+
			'MuNDA0LDI1LjU2N0g0Ljc4OVYxNS4zODhoMTguNjE1VjI1LjU2N3ogICAgIE0yNy4yMSwyMy41MTdsLTIuNTE3LTEuNDUzdi0zLjE3MmwyLjUxNy0xLjQ1MlYyMy41MTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_youtube__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_youtube__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQ4NCwxNy41NnY1Ljc4NGw1LjAwOS0yLjg5M0wxMi40ODQsMTcuNTZ6IE0yOC4xNzgsMTUuNzY0Yy0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwICAgIGwtMi44NCwxLjYzOXYtMi42NmMwLTAuMTY5LTAuMDY4LTAu'+
			'MzM1LTAuMTg4LTAuNDU2cy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wN2MxLjA2OC0wLjkzNywxLjc0NC0yLjMxMSwxLjc0NC0zLjg0NCAgICBjLTAuMDAxLTIuODIzLTIuMjg5LTUuMTExLTUuMTEyLTUuMTEyYy0yLjgyMywwLTUuMTExLDIuMjg5LTUuMTEyLDUuMTEyYzAsMS41MzMsMC42NzUsMi45MDcsMS43NDQsMy44NDRoLTMuNDk0ICAgIGMwLjY1MS0wLjcwNCwxLjA0OS0xLjY0NSwxLjA0OS0yLjY3OWMwLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0NyAgICBjMCwxLjAzNCwwLjM5OCwxLjk3NSwxLjA0OSwyLjY3OUg0Lj'+
			'E0NWMtMC4xNywwLTAuMzM2LDAuMDY5LTAuNDU2LDAuMTg4QzMuNTY4LDE0LjQwOCwzLjUsMTQuNTc0LDMuNSwxNC43NDR2MTEuNDY4ICAgIGMwLDAuMTcsMC4wNjksMC4zMzYsMC4xODgsMC40NTZjMC4xMiwwLjEyLDAuMjg2LDAuMTg4LDAuNDU2LDAuMTg4aDE5LjkwNGMwLjE3LDAsMC4zMzYtMC4wNjgsMC40NTYtMC4xODggICAgczAuMTg4LTAuMjg2LDAuMTg4LTAuNDU2di0yLjY1OWwyLjg0LDEuNjM5YzAuMSwwLjA1OCwwLjIxMSwwLjA4NiwwLjMyMiwwLjA4NnMwLjIyMy0wLjAyOCwwLjMyMi0wLjA4NiAgICBjMC4xOTktMC4xMTUsMC4zMjItMC4zMjgsMC4zMjItMC41NTh2LTguMzEyQzI4'+
			'LjUsMTYuMDkyLDI4LjM3NywxNS44NzksMjguMTc4LDE1Ljc2NHogTTE0Ljc4OCwxMC4yNTUgICAgYzAuMDA0LTIuMTExLDEuNzEyLTMuODE5LDMuODIzLTMuODIzYzIuMTExLDAuMDA0LDMuODE5LDEuNzEyLDMuODIzLDMuODIzYy0wLjAwNCwyLjExMS0xLjcxMiwzLjgxOS0zLjgyMywzLjgyMyAgICBDMTYuNSwxNC4wNzUsMTQuNzkyLDEyLjM2NywxNC43ODgsMTAuMjU1eiBNOC44NTEsOC43NjNjMS40NjgsMC4wMDIsMi42NTUsMS4xOSwyLjY1OCwyLjY1OGMtMC4wMDIsMS40NjctMS4xOSwyLjY1NS0yLjY1OCwyLjY1NyAgICBjLTEuNDY3LTAuMDAyLTIuNjU1LTEuMTktMi42NTctMi42NTdDNi'+
			'4xOTYsOS45NTMsNy4zODMsOC43NjUsOC44NTEsOC43NjN6IE0yMy40MDQsMjUuNTY3SDQuNzg5VjE1LjM4OGgxOC42MTVWMjUuNTY3eiAgICAgTTI3LjIxLDIzLjUxN2wtMi41MTctMS40NTN2LTMuMTcybDIuNTE3LTEuNDUyVjIzLjUxN3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxnPgogICA8cGF0aCBkPSJNMTIuNDg0LDE3LjU2djUuNzg0bDUuMDA5LTIuODkzTDEyLjQ4NCwxNy41NnogTTI4LjE3'+
			'OCwxNS43NjRjLTAuMTk5LTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ1LDAgICAgbC0yLjg0LDEuNjM5di0yLjY2YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTZzLTAuMjg2LTAuMTg5LTAuNDU2LTAuMTg5aC0yLjA3YzEuMDY4LTAuOTM3LDEuNzQ0LTIuMzExLDEuNzQ0LTMuODQ0ICAgIGMtMC4wMDEtMi44MjMtMi4yODktNS4xMTEtNS4xMTItNS4xMTJjLTIuODIzLDAtNS4xMTEsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUzMywwLjY3NSwyLjkwNywxLjc0NCwzLjg0NGgtMy40OTQgICAgYzAuNjUxLTAuNzA0LDEuMDQ5LTEuNjQ1LDEuMDQ5LTIuNjc5YzAtMi4xOC0xLjc2Ny0zLjk0Ni0zLj'+
			'k0Ny0zLjk0N2MtMi4xOCwwLTMuOTQ2LDEuNzY3LTMuOTQ3LDMuOTQ3ICAgIGMwLDEuMDM0LDAuMzk4LDEuOTc1LDEuMDQ5LDIuNjc5SDQuMTQ1Yy0wLjE3LDAtMC4zMzYsMC4wNjktMC40NTYsMC4xODhDMy41NjgsMTQuNDA4LDMuNSwxNC41NzQsMy41LDE0Ljc0NHYxMS40NjggICAgYzAsMC4xNywwLjA2OSwwLjMzNiwwLjE4OCwwLjQ1NmMwLjEyLDAuMTIsMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA0YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OCAgICBzMC4xODgtMC4yODYsMC4xODgtMC40NTZ2LTIuNjU5bDIuODQsMS42MzljMC4xLDAuMDU4LDAuMjExLDAuMDg2LDAuMzIy'+
			'LDAuMDg2czAuMjIzLTAuMDI4LDAuMzIyLTAuMDg2ICAgIGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OHYtOC4zMTJDMjguNSwxNi4wOTIsMjguMzc3LDE1Ljg3OSwyOC4xNzgsMTUuNzY0eiBNMTQuNzg4LDEwLjI1NSAgICBjMC4wMDQtMi4xMTEsMS43MTItMy44MTksMy44MjMtMy44MjNjMi4xMTEsMC4wMDQsMy44MTksMS43MTIsMy44MjMsMy44MjNjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzICAgIEMxNi41LDE0LjA3NSwxNC43OTIsMTIuMzY3LDE0Ljc4OCwxMC4yNTV6IE04Ljg1MSw4Ljc2M2MxLjQ2OCwwLjAwMiwyLjY1NSwxLjE5LDIuNjU4LDIuNj'+
			'U4Yy0wLjAwMiwxLjQ2Ny0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3ICAgIGMtMS40NjctMC4wMDItMi42NTUtMS4xOS0yLjY1Ny0yLjY1N0M2LjE5Niw5Ljk1Myw3LjM4Myw4Ljc2NSw4Ljg1MSw4Ljc2M3ogTTIzLjQwNCwyNS41NjdINC43ODlWMTUuMzg4aDE4LjYxNVYyNS41Njd6ICAgICBNMjcuMjEsMjMuNTE3bC0yLjUxNy0xLjQ1M3YtMy4xNzJsMi41MTctMS40NTJWMjMuNTE3eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_video_youtube__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_youtube.onmouseenter=function (e) {
			me._ht_video_video_youtube__img.style.visibility='hidden';
			me._ht_video_video_youtube__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_video_youtube']=true;
		}
		me._ht_video_video_youtube.onmouseleave=function (e) {
			me._ht_video_video_youtube__img.style.visibility='inherit';
			me._ht_video_video_youtube__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_video_youtube']=false;
		}
		me._ht_video_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._ht_video_video_youtube);
		el=me._tt_ht_video_youtube=document.createElement('div');
		els=me._tt_ht_video_youtube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 3px 3px 3px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_youtube.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_youtube.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_youtube.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_youtube.style.transition='';
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_youtube.ggVisible=true;
				}
				else {
					me._tt_ht_video_youtube.style.visibility="hidden";
					me._tt_ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_visible();
		me._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_youtube.appendChild(me._tt_ht_video_youtube);
		me.elementMouseOver['ht_video_youtube']=false;
		me.elementMouseOver['ht_video_video_youtube']=false;
		me._tt_ht_video_youtube.logicBlock_visible();
			me.__div = me._ht_video_youtube;
	};
	function SkinHotspotClass_ht_video_vimeo(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_vimeo=document.createElement('div');
		el.ggId="ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_vimeo.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_vimeo.onclick=function (e) {
			skin._controller.style.transition='none';
			skin._controller.style.visibility='hidden';
			skin._controller.ggVisible=false;
			skin._screentint.style.transition='none';
			skin._screentint.style.visibility=(Number(skin._screentint.style.opacity)>0||!skin._screentint.style.opacity)?'inherit':'hidden';
			skin._screentint.ggVisible=true;
			skin._close.style.transition='none';
			skin._close.style.visibility=(Number(skin._close.style.opacity)>0||!skin._close.style.opacity)?'inherit':'hidden';
			skin._close.ggVisible=true;
			skin._popup_video_vimeo.ggInitMedia(player._(player._(me.hotspot.url)));
			if (skin._popup_video_vimeo.ggVideoNotLoaded) {
				skin._popup_video_vimeo.ggInitMedia(skin._popup_video_vimeo.ggVideoSource);
			}
			skin._popup_video_vimeo.style.transition='none';
			skin._popup_video_vimeo.style.visibility=(Number(skin._popup_video_vimeo.style.opacity)>0||!skin._popup_video_vimeo.style.opacity)?'inherit':'hidden';
			skin._popup_video_vimeo.ggVisible=true;
			skin._video_popup_vimeo.style.transition='none';
			skin._video_popup_vimeo.style.visibility=(Number(skin._video_popup_vimeo.style.opacity)>0||!skin._video_popup_vimeo.style.opacity)?'inherit':'hidden';
			skin._video_popup_vimeo.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_vimeo']=true;
			me._tt_ht_video_vimeo.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_vimeo.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_vimeo']=false;
			me._tt_ht_video_vimeo.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_video_vimeo=document.createElement('div');
		els=me._ht_video_video_vimeo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40ODQsMTcuNTZ2NS43ODRsNS4wMDktMi44OTNMMTIuNDg0LDE3LjU2eiBNMjguMTc4LDE1Ljc2NGMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMCAgICBsLTIuODQsMS42Mzl2LTIuNjZjMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1NnMtMC4yODYtMC4xODktMC40NTYtMC4xODloLTIuMDdjMS4wNjgtMC45Mzcs'+
			'MS43NDQtMi4zMTEsMS43NDQtMy44NDQgICAgYy0wLjAwMS0yLjgyMy0yLjI4OS01LjExMS01LjExMi01LjExMmMtMi44MjMsMC01LjExMSwyLjI4OS01LjExMiw1LjExMmMwLDEuNTMzLDAuNjc1LDIuOTA3LDEuNzQ0LDMuODQ0aC0zLjQ5NCAgICBjMC42NTEtMC43MDQsMS4wNDktMS42NDUsMS4wNDktMi42NzljMC0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDcgICAgYzAsMS4wMzQsMC4zOTgsMS45NzUsMS4wNDksMi42NzlINC4xNDVjLTAuMTcsMC0wLjMzNiwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MDgsMy41LDE0LjU3NC'+
			'wzLjUsMTQuNzQ0djExLjQ2OCAgICBjMCwwLjE3LDAuMDY5LDAuMzM2LDAuMTg4LDAuNDU2YzAuMTIsMC4xMiwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDRjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4ICAgIHMwLjE4OC0wLjI4NiwwLjE4OC0wLjQ1NnYtMi42NTlsMi44NCwxLjYzOWMwLjEsMC4wNTgsMC4yMTEsMC4wODYsMC4zMjIsMC4wODZzMC4yMjMtMC4wMjgsMC4zMjItMC4wODYgICAgYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU4di04LjMxMkMyOC41LDE2LjA5MiwyOC4zNzcsMTUuODc5LDI4LjE3OCwxNS43NjR6IE0xNC43ODgsMTAuMjU1ICAgIGMw'+
			'LjAwNC0yLjExMSwxLjcxMi0zLjgxOSwzLjgyMy0zLjgyM2MyLjExMSwwLjAwNCwzLjgxOSwxLjcxMiwzLjgyMywzLjgyM2MtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMgICAgQzE2LjUsMTQuMDc1LDE0Ljc5MiwxMi4zNjcsMTQuNzg4LDEwLjI1NXogTTguODUxLDguNzYzYzEuNDY4LDAuMDAyLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY3LTEuMTksMi42NTUtMi42NTgsMi42NTcgICAgYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTUzLDcuMzgzLDguNzY1LDguODUxLDguNzYzeiBNMjMuNDA0LDI1LjU2N0g0Ljc4OVYxNS'+
			'4zODhoMTguNjE1VjI1LjU2N3ogICAgIE0yNy4yMSwyMy41MTdsLTIuNTE3LTEuNDUzdi0zLjE3MmwyLjUxNy0xLjQ1MlYyMy41MTd6Ii8+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40ODQsMTcuNTZ2NS43ODRsNS4wMDktMi44OTNMMTIuNDg0LDE3LjU2eiBNMjguMTc4LDE1Ljc2NGMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMCAgICBsLTIuODQsMS42Mzl2LTIuNjZjMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1NnMtMC4yODYtMC4xODktMC40NTYtMC4x'+
			'ODloLTIuMDdjMS4wNjgtMC45MzcsMS43NDQtMi4zMTEsMS43NDQtMy44NDQgICAgYy0wLjAwMS0yLjgyMy0yLjI4OS01LjExMS01LjExMi01LjExMmMtMi44MjMsMC01LjExMSwyLjI4OS01LjExMiw1LjExMmMwLDEuNTMzLDAuNjc1LDIuOTA3LDEuNzQ0LDMuODQ0aC0zLjQ5NCAgICBjMC42NTEtMC43MDQsMS4wNDktMS42NDUsMS4wNDktMi42NzljMC0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDcgICAgYzAsMS4wMzQsMC4zOTgsMS45NzUsMS4wNDksMi42NzlINC4xNDVjLTAuMTcsMC0wLjMzNiwwLjA2OS0wLjQ1NiwwLjE4OEMzLj'+
			'U2OCwxNC40MDgsMy41LDE0LjU3NCwzLjUsMTQuNzQ0djExLjQ2OCAgICBjMCwwLjE3LDAuMDY5LDAuMzM2LDAuMTg4LDAuNDU2YzAuMTIsMC4xMiwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDRjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4ICAgIHMwLjE4OC0wLjI4NiwwLjE4OC0wLjQ1NnYtMi42NTlsMi44NCwxLjYzOWMwLjEsMC4wNTgsMC4yMTEsMC4wODYsMC4zMjIsMC4wODZzMC4yMjMtMC4wMjgsMC4zMjItMC4wODYgICAgYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU4di04LjMxMkMyOC41LDE2LjA5MiwyOC4zNzcsMTUuODc5LDI4LjE3OCwxNS43NjR6'+
			'IE0xNC43ODgsMTAuMjU1ICAgIGMwLjAwNC0yLjExMSwxLjcxMi0zLjgxOSwzLjgyMy0zLjgyM2MyLjExMSwwLjAwNCwzLjgxOSwxLjcxMiwzLjgyMywzLjgyM2MtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMgICAgQzE2LjUsMTQuMDc1LDE0Ljc5MiwxMi4zNjcsMTQuNzg4LDEwLjI1NXogTTguODUxLDguNzYzYzEuNDY4LDAuMDAyLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY3LTEuMTksMi42NTUtMi42NTgsMi42NTcgICAgYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTUzLDcuMzgzLDguNzY1LDguODUxLDguNzYzeiBNMj'+
			'MuNDA0LDI1LjU2N0g0Ljc4OVYxNS4zODhoMTguNjE1VjI1LjU2N3ogICAgIE0yNy4yMSwyMy41MTdsLTIuNTE3LTEuNDUzdi0zLjE3MmwyLjUxNy0xLjQ1MlYyMy41MTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_vimeo__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_vimeo__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQ4NCwxNy41NnY1Ljc4NGw1LjAwOS0yLjg5M0wxMi40ODQsMTcuNTZ6IE0yOC4xNzgsMTUuNzY0Yy0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwICAgIGwtMi44NCwxLjYzOXYtMi42NmMwLTAuMTY5LTAuMDY4LTAu'+
			'MzM1LTAuMTg4LTAuNDU2cy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wN2MxLjA2OC0wLjkzNywxLjc0NC0yLjMxMSwxLjc0NC0zLjg0NCAgICBjLTAuMDAxLTIuODIzLTIuMjg5LTUuMTExLTUuMTEyLTUuMTEyYy0yLjgyMywwLTUuMTExLDIuMjg5LTUuMTEyLDUuMTEyYzAsMS41MzMsMC42NzUsMi45MDcsMS43NDQsMy44NDRoLTMuNDk0ICAgIGMwLjY1MS0wLjcwNCwxLjA0OS0xLjY0NSwxLjA0OS0yLjY3OWMwLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0NyAgICBjMCwxLjAzNCwwLjM5OCwxLjk3NSwxLjA0OSwyLjY3OUg0Lj'+
			'E0NWMtMC4xNywwLTAuMzM2LDAuMDY5LTAuNDU2LDAuMTg4QzMuNTY4LDE0LjQwOCwzLjUsMTQuNTc0LDMuNSwxNC43NDR2MTEuNDY4ICAgIGMwLDAuMTcsMC4wNjksMC4zMzYsMC4xODgsMC40NTZjMC4xMiwwLjEyLDAuMjg2LDAuMTg4LDAuNDU2LDAuMTg4aDE5LjkwNGMwLjE3LDAsMC4zMzYtMC4wNjgsMC40NTYtMC4xODggICAgczAuMTg4LTAuMjg2LDAuMTg4LTAuNDU2di0yLjY1OWwyLjg0LDEuNjM5YzAuMSwwLjA1OCwwLjIxMSwwLjA4NiwwLjMyMiwwLjA4NnMwLjIyMy0wLjAyOCwwLjMyMi0wLjA4NiAgICBjMC4xOTktMC4xMTUsMC4zMjItMC4zMjgsMC4zMjItMC41NTh2LTguMzEyQzI4'+
			'LjUsMTYuMDkyLDI4LjM3NywxNS44NzksMjguMTc4LDE1Ljc2NHogTTE0Ljc4OCwxMC4yNTUgICAgYzAuMDA0LTIuMTExLDEuNzEyLTMuODE5LDMuODIzLTMuODIzYzIuMTExLDAuMDA0LDMuODE5LDEuNzEyLDMuODIzLDMuODIzYy0wLjAwNCwyLjExMS0xLjcxMiwzLjgxOS0zLjgyMywzLjgyMyAgICBDMTYuNSwxNC4wNzUsMTQuNzkyLDEyLjM2NywxNC43ODgsMTAuMjU1eiBNOC44NTEsOC43NjNjMS40NjgsMC4wMDIsMi42NTUsMS4xOSwyLjY1OCwyLjY1OGMtMC4wMDIsMS40NjctMS4xOSwyLjY1NS0yLjY1OCwyLjY1NyAgICBjLTEuNDY3LTAuMDAyLTIuNjU1LTEuMTktMi42NTctMi42NTdDNi'+
			'4xOTYsOS45NTMsNy4zODMsOC43NjUsOC44NTEsOC43NjN6IE0yMy40MDQsMjUuNTY3SDQuNzg5VjE1LjM4OGgxOC42MTVWMjUuNTY3eiAgICAgTTI3LjIxLDIzLjUxN2wtMi41MTctMS40NTN2LTMuMTcybDIuNTE3LTEuNDUyVjIzLjUxN3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxnPgogICA8cGF0aCBkPSJNMTIuNDg0LDE3LjU2djUuNzg0bDUuMDA5LTIuODkzTDEyLjQ4NCwxNy41NnogTTI4LjE3'+
			'OCwxNS43NjRjLTAuMTk5LTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ1LDAgICAgbC0yLjg0LDEuNjM5di0yLjY2YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTZzLTAuMjg2LTAuMTg5LTAuNDU2LTAuMTg5aC0yLjA3YzEuMDY4LTAuOTM3LDEuNzQ0LTIuMzExLDEuNzQ0LTMuODQ0ICAgIGMtMC4wMDEtMi44MjMtMi4yODktNS4xMTEtNS4xMTItNS4xMTJjLTIuODIzLDAtNS4xMTEsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUzMywwLjY3NSwyLjkwNywxLjc0NCwzLjg0NGgtMy40OTQgICAgYzAuNjUxLTAuNzA0LDEuMDQ5LTEuNjQ1LDEuMDQ5LTIuNjc5YzAtMi4xOC0xLjc2Ny0zLjk0Ni0zLj'+
			'k0Ny0zLjk0N2MtMi4xOCwwLTMuOTQ2LDEuNzY3LTMuOTQ3LDMuOTQ3ICAgIGMwLDEuMDM0LDAuMzk4LDEuOTc1LDEuMDQ5LDIuNjc5SDQuMTQ1Yy0wLjE3LDAtMC4zMzYsMC4wNjktMC40NTYsMC4xODhDMy41NjgsMTQuNDA4LDMuNSwxNC41NzQsMy41LDE0Ljc0NHYxMS40NjggICAgYzAsMC4xNywwLjA2OSwwLjMzNiwwLjE4OCwwLjQ1NmMwLjEyLDAuMTIsMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA0YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OCAgICBzMC4xODgtMC4yODYsMC4xODgtMC40NTZ2LTIuNjU5bDIuODQsMS42MzljMC4xLDAuMDU4LDAuMjExLDAuMDg2LDAuMzIy'+
			'LDAuMDg2czAuMjIzLTAuMDI4LDAuMzIyLTAuMDg2ICAgIGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OHYtOC4zMTJDMjguNSwxNi4wOTIsMjguMzc3LDE1Ljg3OSwyOC4xNzgsMTUuNzY0eiBNMTQuNzg4LDEwLjI1NSAgICBjMC4wMDQtMi4xMTEsMS43MTItMy44MTksMy44MjMtMy44MjNjMi4xMTEsMC4wMDQsMy44MTksMS43MTIsMy44MjMsMy44MjNjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzICAgIEMxNi41LDE0LjA3NSwxNC43OTIsMTIuMzY3LDE0Ljc4OCwxMC4yNTV6IE04Ljg1MSw4Ljc2M2MxLjQ2OCwwLjAwMiwyLjY1NSwxLjE5LDIuNjU4LDIuNj'+
			'U4Yy0wLjAwMiwxLjQ2Ny0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3ICAgIGMtMS40NjctMC4wMDItMi42NTUtMS4xOS0yLjY1Ny0yLjY1N0M2LjE5Niw5Ljk1Myw3LjM4Myw4Ljc2NSw4Ljg1MSw4Ljc2M3ogTTIzLjQwNCwyNS41NjdINC43ODlWMTUuMzg4aDE4LjYxNVYyNS41Njd6ICAgICBNMjcuMjEsMjMuNTE3bC0yLjUxNy0xLjQ1M3YtMy4xNzJsMi41MTctMS40NTJWMjMuNTE3eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_video_vimeo__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_vimeo.onmouseenter=function (e) {
			me._ht_video_video_vimeo__img.style.visibility='hidden';
			me._ht_video_video_vimeo__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_video_vimeo']=true;
		}
		me._ht_video_video_vimeo.onmouseleave=function (e) {
			me._ht_video_video_vimeo__img.style.visibility='inherit';
			me._ht_video_video_vimeo__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_video_vimeo']=false;
		}
		me._ht_video_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._ht_video_video_vimeo);
		el=me._tt_ht_video_vimeo=document.createElement('div');
		els=me._tt_ht_video_vimeo__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 3px 5px 3px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_vimeo.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_vimeo.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_vimeo.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_vimeo.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_vimeo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_vimeo'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_vimeo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_vimeo.style.transition='';
				if (me._tt_ht_video_vimeo.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_vimeo.style.visibility=(Number(me._tt_ht_video_vimeo.style.opacity)>0||!me._tt_ht_video_vimeo.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_vimeo.ggVisible=true;
				}
				else {
					me._tt_ht_video_vimeo.style.visibility="hidden";
					me._tt_ht_video_vimeo.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_vimeo.logicBlock_visible();
		me._tt_ht_video_vimeo.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_vimeo.appendChild(me._tt_ht_video_vimeo);
		me.elementMouseOver['ht_video_vimeo']=false;
		me.elementMouseOver['ht_video_video_vimeo']=false;
		me._tt_ht_video_vimeo.logicBlock_visible();
			me.__div = me._ht_video_vimeo;
	};
	function SkinHotspotClass_ht_video_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_url=document.createElement('div');
		el.ggId="ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_url.onclick=function (e) {
			skin._controller.style.transition='none';
			skin._controller.style.visibility='hidden';
			skin._controller.ggVisible=false;
			skin._screentint.style.transition='none';
			skin._screentint.style.visibility=(Number(skin._screentint.style.opacity)>0||!skin._screentint.style.opacity)?'inherit':'hidden';
			skin._screentint.ggVisible=true;
			skin._close.style.transition='none';
			skin._close.style.visibility=(Number(skin._close.style.opacity)>0||!skin._close.style.opacity)?'inherit':'hidden';
			skin._close.ggVisible=true;
			skin._video_popup_controls_url.style.transition='none';
			skin._video_popup_controls_url.style.visibility=(Number(skin._video_popup_controls_url.style.opacity)>0||!skin._video_popup_controls_url.style.opacity)?'inherit':'hidden';
			skin._video_popup_controls_url.ggVisible=true;
			skin._popup_video_url.ggInitMedia(player._(player._(me.hotspot.url)));
			if (skin._popup_video_url.ggVideoNotLoaded) {
				skin._popup_video_url.ggInitMedia(skin._popup_video_url.ggVideoSource);
			}
			skin._popup_video_url.style.transition='none';
			skin._popup_video_url.style.visibility=(Number(skin._popup_video_url.style.opacity)>0||!skin._popup_video_url.style.opacity)?'inherit':'hidden';
			skin._popup_video_url.ggVisible=true;
			skin._video_popup_url.style.transition='none';
			skin._video_popup_url.style.visibility=(Number(skin._video_popup_url.style.opacity)>0||!skin._video_popup_url.style.opacity)?'inherit':'hidden';
			skin._video_popup_url.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_url']=true;
			me._tt_ht_video_url.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_url']=false;
			me._tt_ht_video_url.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_video_url=document.createElement('div');
		els=me._ht_video_video_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40ODQsMTcuNTZ2NS43ODRsNS4wMDktMi44OTNMMTIuNDg0LDE3LjU2eiBNMjguMTc4LDE1Ljc2NGMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMCAgICBsLTIuODQsMS42Mzl2LTIuNjZjMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1NnMtMC4yODYtMC4xODktMC40NTYtMC4xODloLTIuMDdjMS4wNjgtMC45Mzcs'+
			'MS43NDQtMi4zMTEsMS43NDQtMy44NDQgICAgYy0wLjAwMS0yLjgyMy0yLjI4OS01LjExMS01LjExMi01LjExMmMtMi44MjMsMC01LjExMSwyLjI4OS01LjExMiw1LjExMmMwLDEuNTMzLDAuNjc1LDIuOTA3LDEuNzQ0LDMuODQ0aC0zLjQ5NCAgICBjMC42NTEtMC43MDQsMS4wNDktMS42NDUsMS4wNDktMi42NzljMC0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDcgICAgYzAsMS4wMzQsMC4zOTgsMS45NzUsMS4wNDksMi42NzlINC4xNDVjLTAuMTcsMC0wLjMzNiwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MDgsMy41LDE0LjU3NC'+
			'wzLjUsMTQuNzQ0djExLjQ2OCAgICBjMCwwLjE3LDAuMDY5LDAuMzM2LDAuMTg4LDAuNDU2YzAuMTIsMC4xMiwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDRjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4ICAgIHMwLjE4OC0wLjI4NiwwLjE4OC0wLjQ1NnYtMi42NTlsMi44NCwxLjYzOWMwLjEsMC4wNTgsMC4yMTEsMC4wODYsMC4zMjIsMC4wODZzMC4yMjMtMC4wMjgsMC4zMjItMC4wODYgICAgYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU4di04LjMxMkMyOC41LDE2LjA5MiwyOC4zNzcsMTUuODc5LDI4LjE3OCwxNS43NjR6IE0xNC43ODgsMTAuMjU1ICAgIGMw'+
			'LjAwNC0yLjExMSwxLjcxMi0zLjgxOSwzLjgyMy0zLjgyM2MyLjExMSwwLjAwNCwzLjgxOSwxLjcxMiwzLjgyMywzLjgyM2MtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMgICAgQzE2LjUsMTQuMDc1LDE0Ljc5MiwxMi4zNjcsMTQuNzg4LDEwLjI1NXogTTguODUxLDguNzYzYzEuNDY4LDAuMDAyLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY3LTEuMTksMi42NTUtMi42NTgsMi42NTcgICAgYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTUzLDcuMzgzLDguNzY1LDguODUxLDguNzYzeiBNMjMuNDA0LDI1LjU2N0g0Ljc4OVYxNS'+
			'4zODhoMTguNjE1VjI1LjU2N3ogICAgIE0yNy4yMSwyMy41MTdsLTIuNTE3LTEuNDUzdi0zLjE3MmwyLjUxNy0xLjQ1MlYyMy41MTd6Ii8+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40ODQsMTcuNTZ2NS43ODRsNS4wMDktMi44OTNMMTIuNDg0LDE3LjU2eiBNMjguMTc4LDE1Ljc2NGMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMCAgICBsLTIuODQsMS42Mzl2LTIuNjZjMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1NnMtMC4yODYtMC4xODktMC40NTYtMC4x'+
			'ODloLTIuMDdjMS4wNjgtMC45MzcsMS43NDQtMi4zMTEsMS43NDQtMy44NDQgICAgYy0wLjAwMS0yLjgyMy0yLjI4OS01LjExMS01LjExMi01LjExMmMtMi44MjMsMC01LjExMSwyLjI4OS01LjExMiw1LjExMmMwLDEuNTMzLDAuNjc1LDIuOTA3LDEuNzQ0LDMuODQ0aC0zLjQ5NCAgICBjMC42NTEtMC43MDQsMS4wNDktMS42NDUsMS4wNDktMi42NzljMC0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDcgICAgYzAsMS4wMzQsMC4zOTgsMS45NzUsMS4wNDksMi42NzlINC4xNDVjLTAuMTcsMC0wLjMzNiwwLjA2OS0wLjQ1NiwwLjE4OEMzLj'+
			'U2OCwxNC40MDgsMy41LDE0LjU3NCwzLjUsMTQuNzQ0djExLjQ2OCAgICBjMCwwLjE3LDAuMDY5LDAuMzM2LDAuMTg4LDAuNDU2YzAuMTIsMC4xMiwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDRjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4ICAgIHMwLjE4OC0wLjI4NiwwLjE4OC0wLjQ1NnYtMi42NTlsMi44NCwxLjYzOWMwLjEsMC4wNTgsMC4yMTEsMC4wODYsMC4zMjIsMC4wODZzMC4yMjMtMC4wMjgsMC4zMjItMC4wODYgICAgYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU4di04LjMxMkMyOC41LDE2LjA5MiwyOC4zNzcsMTUuODc5LDI4LjE3OCwxNS43NjR6'+
			'IE0xNC43ODgsMTAuMjU1ICAgIGMwLjAwNC0yLjExMSwxLjcxMi0zLjgxOSwzLjgyMy0zLjgyM2MyLjExMSwwLjAwNCwzLjgxOSwxLjcxMiwzLjgyMywzLjgyM2MtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMgICAgQzE2LjUsMTQuMDc1LDE0Ljc5MiwxMi4zNjcsMTQuNzg4LDEwLjI1NXogTTguODUxLDguNzYzYzEuNDY4LDAuMDAyLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY3LTEuMTksMi42NTUtMi42NTgsMi42NTcgICAgYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTUzLDcuMzgzLDguNzY1LDguODUxLDguNzYzeiBNMj'+
			'MuNDA0LDI1LjU2N0g0Ljc4OVYxNS4zODhoMTguNjE1VjI1LjU2N3ogICAgIE0yNy4yMSwyMy41MTdsLTIuNTE3LTEuNDUzdi0zLjE3MmwyLjUxNy0xLjQ1MlYyMy41MTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQ4NCwxNy41NnY1Ljc4NGw1LjAwOS0yLjg5M0wxMi40ODQsMTcuNTZ6IE0yOC4xNzgsMTUuNzY0Yy0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwICAgIGwtMi44NCwxLjYzOXYtMi42NmMwLTAuMTY5LTAuMDY4LTAu'+
			'MzM1LTAuMTg4LTAuNDU2cy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wN2MxLjA2OC0wLjkzNywxLjc0NC0yLjMxMSwxLjc0NC0zLjg0NCAgICBjLTAuMDAxLTIuODIzLTIuMjg5LTUuMTExLTUuMTEyLTUuMTEyYy0yLjgyMywwLTUuMTExLDIuMjg5LTUuMTEyLDUuMTEyYzAsMS41MzMsMC42NzUsMi45MDcsMS43NDQsMy44NDRoLTMuNDk0ICAgIGMwLjY1MS0wLjcwNCwxLjA0OS0xLjY0NSwxLjA0OS0yLjY3OWMwLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0NyAgICBjMCwxLjAzNCwwLjM5OCwxLjk3NSwxLjA0OSwyLjY3OUg0Lj'+
			'E0NWMtMC4xNywwLTAuMzM2LDAuMDY5LTAuNDU2LDAuMTg4QzMuNTY4LDE0LjQwOCwzLjUsMTQuNTc0LDMuNSwxNC43NDR2MTEuNDY4ICAgIGMwLDAuMTcsMC4wNjksMC4zMzYsMC4xODgsMC40NTZjMC4xMiwwLjEyLDAuMjg2LDAuMTg4LDAuNDU2LDAuMTg4aDE5LjkwNGMwLjE3LDAsMC4zMzYtMC4wNjgsMC40NTYtMC4xODggICAgczAuMTg4LTAuMjg2LDAuMTg4LTAuNDU2di0yLjY1OWwyLjg0LDEuNjM5YzAuMSwwLjA1OCwwLjIxMSwwLjA4NiwwLjMyMiwwLjA4NnMwLjIyMy0wLjAyOCwwLjMyMi0wLjA4NiAgICBjMC4xOTktMC4xMTUsMC4zMjItMC4zMjgsMC4zMjItMC41NTh2LTguMzEyQzI4'+
			'LjUsMTYuMDkyLDI4LjM3NywxNS44NzksMjguMTc4LDE1Ljc2NHogTTE0Ljc4OCwxMC4yNTUgICAgYzAuMDA0LTIuMTExLDEuNzEyLTMuODE5LDMuODIzLTMuODIzYzIuMTExLDAuMDA0LDMuODE5LDEuNzEyLDMuODIzLDMuODIzYy0wLjAwNCwyLjExMS0xLjcxMiwzLjgxOS0zLjgyMywzLjgyMyAgICBDMTYuNSwxNC4wNzUsMTQuNzkyLDEyLjM2NywxNC43ODgsMTAuMjU1eiBNOC44NTEsOC43NjNjMS40NjgsMC4wMDIsMi42NTUsMS4xOSwyLjY1OCwyLjY1OGMtMC4wMDIsMS40NjctMS4xOSwyLjY1NS0yLjY1OCwyLjY1NyAgICBjLTEuNDY3LTAuMDAyLTIuNjU1LTEuMTktMi42NTctMi42NTdDNi'+
			'4xOTYsOS45NTMsNy4zODMsOC43NjUsOC44NTEsOC43NjN6IE0yMy40MDQsMjUuNTY3SDQuNzg5VjE1LjM4OGgxOC42MTVWMjUuNTY3eiAgICAgTTI3LjIxLDIzLjUxN2wtMi41MTctMS40NTN2LTMuMTcybDIuNTE3LTEuNDUyVjIzLjUxN3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxnPgogICA8cGF0aCBkPSJNMTIuNDg0LDE3LjU2djUuNzg0bDUuMDA5LTIuODkzTDEyLjQ4NCwxNy41NnogTTI4LjE3'+
			'OCwxNS43NjRjLTAuMTk5LTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ1LDAgICAgbC0yLjg0LDEuNjM5di0yLjY2YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTZzLTAuMjg2LTAuMTg5LTAuNDU2LTAuMTg5aC0yLjA3YzEuMDY4LTAuOTM3LDEuNzQ0LTIuMzExLDEuNzQ0LTMuODQ0ICAgIGMtMC4wMDEtMi44MjMtMi4yODktNS4xMTEtNS4xMTItNS4xMTJjLTIuODIzLDAtNS4xMTEsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUzMywwLjY3NSwyLjkwNywxLjc0NCwzLjg0NGgtMy40OTQgICAgYzAuNjUxLTAuNzA0LDEuMDQ5LTEuNjQ1LDEuMDQ5LTIuNjc5YzAtMi4xOC0xLjc2Ny0zLjk0Ni0zLj'+
			'k0Ny0zLjk0N2MtMi4xOCwwLTMuOTQ2LDEuNzY3LTMuOTQ3LDMuOTQ3ICAgIGMwLDEuMDM0LDAuMzk4LDEuOTc1LDEuMDQ5LDIuNjc5SDQuMTQ1Yy0wLjE3LDAtMC4zMzYsMC4wNjktMC40NTYsMC4xODhDMy41NjgsMTQuNDA4LDMuNSwxNC41NzQsMy41LDE0Ljc0NHYxMS40NjggICAgYzAsMC4xNywwLjA2OSwwLjMzNiwwLjE4OCwwLjQ1NmMwLjEyLDAuMTIsMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA0YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OCAgICBzMC4xODgtMC4yODYsMC4xODgtMC40NTZ2LTIuNjU5bDIuODQsMS42MzljMC4xLDAuMDU4LDAuMjExLDAuMDg2LDAuMzIy'+
			'LDAuMDg2czAuMjIzLTAuMDI4LDAuMzIyLTAuMDg2ICAgIGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OHYtOC4zMTJDMjguNSwxNi4wOTIsMjguMzc3LDE1Ljg3OSwyOC4xNzgsMTUuNzY0eiBNMTQuNzg4LDEwLjI1NSAgICBjMC4wMDQtMi4xMTEsMS43MTItMy44MTksMy44MjMtMy44MjNjMi4xMTEsMC4wMDQsMy44MTksMS43MTIsMy44MjMsMy44MjNjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzICAgIEMxNi41LDE0LjA3NSwxNC43OTIsMTIuMzY3LDE0Ljc4OCwxMC4yNTV6IE04Ljg1MSw4Ljc2M2MxLjQ2OCwwLjAwMiwyLjY1NSwxLjE5LDIuNjU4LDIuNj'+
			'U4Yy0wLjAwMiwxLjQ2Ny0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3ICAgIGMtMS40NjctMC4wMDItMi42NTUtMS4xOS0yLjY1Ny0yLjY1N0M2LjE5Niw5Ljk1Myw3LjM4Myw4Ljc2NSw4Ljg1MSw4Ljc2M3ogTTIzLjQwNCwyNS41NjdINC43ODlWMTUuMzg4aDE4LjYxNVYyNS41Njd6ICAgICBNMjcuMjEsMjMuNTE3bC0yLjUxNy0xLjQ1M3YtMy4xNzJsMi41MTctMS40NTJWMjMuNTE3eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_video_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_url.onmouseenter=function (e) {
			me._ht_video_video_url__img.style.visibility='hidden';
			me._ht_video_video_url__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_video_url']=true;
		}
		me._ht_video_video_url.onmouseleave=function (e) {
			me._ht_video_video_url__img.style.visibility='inherit';
			me._ht_video_video_url__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_video_url']=false;
		}
		me._ht_video_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._ht_video_video_url);
		el=me._tt_ht_video_url=document.createElement('div');
		els=me._tt_ht_video_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 3px 5px 3px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_url.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_url.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_url.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_url'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_url.style.transition='';
				if (me._tt_ht_video_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_url.style.visibility=(Number(me._tt_ht_video_url.style.opacity)>0||!me._tt_ht_video_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_url.ggVisible=true;
				}
				else {
					me._tt_ht_video_url.style.visibility="hidden";
					me._tt_ht_video_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_url.logicBlock_visible();
		me._tt_ht_video_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_url.appendChild(me._tt_ht_video_url);
		me.elementMouseOver['ht_video_url']=false;
		me.elementMouseOver['ht_video_video_url']=false;
		me._tt_ht_video_url.logicBlock_visible();
			me.__div = me._ht_video_url;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
			skin._controller.style.transition='none';
			skin._controller.style.visibility='hidden';
			skin._controller.ggVisible=false;
			skin._screentint.style.transition='none';
			skin._screentint.style.visibility=(Number(skin._screentint.style.opacity)>0||!skin._screentint.style.opacity)?'inherit':'hidden';
			skin._screentint.ggVisible=true;
			skin._close.style.transition='none';
			skin._close.style.visibility=(Number(skin._close.style.opacity)>0||!skin._close.style.opacity)?'inherit':'hidden';
			skin._close.ggVisible=true;
			skin._video_popup_controls_file.style.transition='none';
			skin._video_popup_controls_file.style.visibility=(Number(skin._video_popup_controls_file.style.opacity)>0||!skin._video_popup_controls_file.style.opacity)?'inherit':'hidden';
			skin._video_popup_controls_file.ggVisible=true;
			skin._popup_video_file.ggInitMedia(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			if (skin._popup_video_file.ggVideoNotLoaded) {
				skin._popup_video_file.ggInitMedia(skin._popup_video_file.ggVideoSource);
			}
			skin._popup_video_file.style.transition='none';
			skin._popup_video_file.style.visibility=(Number(skin._popup_video_file.style.opacity)>0||!skin._popup_video_file.style.opacity)?'inherit':'hidden';
			skin._popup_video_file.ggVisible=true;
			skin._video_popup_file.style.transition='none';
			skin._video_popup_file.style.visibility=(Number(skin._video_popup_file.style.opacity)>0||!skin._video_popup_file.style.opacity)?'inherit':'hidden';
			skin._video_popup_file.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._tt_ht_video_file.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_video_file.onmouseleave=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_video_file=document.createElement('div');
		els=me._ht_video_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40ODQsMTcuNTZ2NS43ODRsNS4wMDktMi44OTNMMTIuNDg0LDE3LjU2eiBNMjguMTc4LDE1Ljc2NGMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMCAgICBsLTIuODQsMS42Mzl2LTIuNjZjMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1NnMtMC4yODYtMC4xODktMC40NTYtMC4xODloLTIuMDdjMS4wNjgtMC45Mzcs'+
			'MS43NDQtMi4zMTEsMS43NDQtMy44NDQgICAgYy0wLjAwMS0yLjgyMy0yLjI4OS01LjExMS01LjExMi01LjExMmMtMi44MjMsMC01LjExMSwyLjI4OS01LjExMiw1LjExMmMwLDEuNTMzLDAuNjc1LDIuOTA3LDEuNzQ0LDMuODQ0aC0zLjQ5NCAgICBjMC42NTEtMC43MDQsMS4wNDktMS42NDUsMS4wNDktMi42NzljMC0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDcgICAgYzAsMS4wMzQsMC4zOTgsMS45NzUsMS4wNDksMi42NzlINC4xNDVjLTAuMTcsMC0wLjMzNiwwLjA2OS0wLjQ1NiwwLjE4OEMzLjU2OCwxNC40MDgsMy41LDE0LjU3NC'+
			'wzLjUsMTQuNzQ0djExLjQ2OCAgICBjMCwwLjE3LDAuMDY5LDAuMzM2LDAuMTg4LDAuNDU2YzAuMTIsMC4xMiwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDRjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4ICAgIHMwLjE4OC0wLjI4NiwwLjE4OC0wLjQ1NnYtMi42NTlsMi44NCwxLjYzOWMwLjEsMC4wNTgsMC4yMTEsMC4wODYsMC4zMjIsMC4wODZzMC4yMjMtMC4wMjgsMC4zMjItMC4wODYgICAgYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU4di04LjMxMkMyOC41LDE2LjA5MiwyOC4zNzcsMTUuODc5LDI4LjE3OCwxNS43NjR6IE0xNC43ODgsMTAuMjU1ICAgIGMw'+
			'LjAwNC0yLjExMSwxLjcxMi0zLjgxOSwzLjgyMy0zLjgyM2MyLjExMSwwLjAwNCwzLjgxOSwxLjcxMiwzLjgyMywzLjgyM2MtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMgICAgQzE2LjUsMTQuMDc1LDE0Ljc5MiwxMi4zNjcsMTQuNzg4LDEwLjI1NXogTTguODUxLDguNzYzYzEuNDY4LDAuMDAyLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY3LTEuMTksMi42NTUtMi42NTgsMi42NTcgICAgYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTUzLDcuMzgzLDguNzY1LDguODUxLDguNzYzeiBNMjMuNDA0LDI1LjU2N0g0Ljc4OVYxNS'+
			'4zODhoMTguNjE1VjI1LjU2N3ogICAgIE0yNy4yMSwyMy41MTdsLTIuNTE3LTEuNDUzdi0zLjE3MmwyLjUxNy0xLjQ1MlYyMy41MTd6Ii8+CiAgPC9nPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzAwMDAwMCI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40ODQsMTcuNTZ2NS43ODRsNS4wMDktMi44OTNMMTIuNDg0LDE3LjU2eiBNMjguMTc4LDE1Ljc2NGMtMC4xOTktMC4xMTUtMC40NDUtMC4xMTUtMC42NDUsMCAgICBsLTIuODQsMS42Mzl2LTIuNjZjMC0wLjE2OS0wLjA2OC0wLjMzNS0wLjE4OC0wLjQ1NnMtMC4yODYtMC4xODktMC40NTYtMC4x'+
			'ODloLTIuMDdjMS4wNjgtMC45MzcsMS43NDQtMi4zMTEsMS43NDQtMy44NDQgICAgYy0wLjAwMS0yLjgyMy0yLjI4OS01LjExMS01LjExMi01LjExMmMtMi44MjMsMC01LjExMSwyLjI4OS01LjExMiw1LjExMmMwLDEuNTMzLDAuNjc1LDIuOTA3LDEuNzQ0LDMuODQ0aC0zLjQ5NCAgICBjMC42NTEtMC43MDQsMS4wNDktMS42NDUsMS4wNDktMi42NzljMC0yLjE4LTEuNzY3LTMuOTQ2LTMuOTQ3LTMuOTQ3Yy0yLjE4LDAtMy45NDYsMS43NjctMy45NDcsMy45NDcgICAgYzAsMS4wMzQsMC4zOTgsMS45NzUsMS4wNDksMi42NzlINC4xNDVjLTAuMTcsMC0wLjMzNiwwLjA2OS0wLjQ1NiwwLjE4OEMzLj'+
			'U2OCwxNC40MDgsMy41LDE0LjU3NCwzLjUsMTQuNzQ0djExLjQ2OCAgICBjMCwwLjE3LDAuMDY5LDAuMzM2LDAuMTg4LDAuNDU2YzAuMTIsMC4xMiwwLjI4NiwwLjE4OCwwLjQ1NiwwLjE4OGgxOS45MDRjMC4xNywwLDAuMzM2LTAuMDY4LDAuNDU2LTAuMTg4ICAgIHMwLjE4OC0wLjI4NiwwLjE4OC0wLjQ1NnYtMi42NTlsMi44NCwxLjYzOWMwLjEsMC4wNTgsMC4yMTEsMC4wODYsMC4zMjIsMC4wODZzMC4yMjMtMC4wMjgsMC4zMjItMC4wODYgICAgYzAuMTk5LTAuMTE1LDAuMzIyLTAuMzI4LDAuMzIyLTAuNTU4di04LjMxMkMyOC41LDE2LjA5MiwyOC4zNzcsMTUuODc5LDI4LjE3OCwxNS43NjR6'+
			'IE0xNC43ODgsMTAuMjU1ICAgIGMwLjAwNC0yLjExMSwxLjcxMi0zLjgxOSwzLjgyMy0zLjgyM2MyLjExMSwwLjAwNCwzLjgxOSwxLjcxMiwzLjgyMywzLjgyM2MtMC4wMDQsMi4xMTEtMS43MTIsMy44MTktMy44MjMsMy44MjMgICAgQzE2LjUsMTQuMDc1LDE0Ljc5MiwxMi4zNjcsMTQuNzg4LDEwLjI1NXogTTguODUxLDguNzYzYzEuNDY4LDAuMDAyLDIuNjU1LDEuMTksMi42NTgsMi42NThjLTAuMDAyLDEuNDY3LTEuMTksMi42NTUtMi42NTgsMi42NTcgICAgYy0xLjQ2Ny0wLjAwMi0yLjY1NS0xLjE5LTIuNjU3LTIuNjU3QzYuMTk2LDkuOTUzLDcuMzgzLDguNzY1LDguODUxLDguNzYzeiBNMj'+
			'MuNDA0LDI1LjU2N0g0Ljc4OVYxNS4zODhoMTguNjE1VjI1LjU2N3ogICAgIE0yNy4yMSwyMy41MTdsLTIuNTE3LTEuNDUzdi0zLjE3MmwyLjUxNy0xLjQ1MlYyMy41MTd6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQ4NCwxNy41NnY1Ljc4NGw1LjAwOS0yLjg5M0wxMi40ODQsMTcuNTZ6IE0yOC4xNzgsMTUuNzY0Yy0wLjE5OS0wLjExNS0wLjQ0NS0wLjExNS0wLjY0NSwwICAgIGwtMi44NCwxLjYzOXYtMi42NmMwLTAuMTY5LTAuMDY4LTAu'+
			'MzM1LTAuMTg4LTAuNDU2cy0wLjI4Ni0wLjE4OS0wLjQ1Ni0wLjE4OWgtMi4wN2MxLjA2OC0wLjkzNywxLjc0NC0yLjMxMSwxLjc0NC0zLjg0NCAgICBjLTAuMDAxLTIuODIzLTIuMjg5LTUuMTExLTUuMTEyLTUuMTEyYy0yLjgyMywwLTUuMTExLDIuMjg5LTUuMTEyLDUuMTEyYzAsMS41MzMsMC42NzUsMi45MDcsMS43NDQsMy44NDRoLTMuNDk0ICAgIGMwLjY1MS0wLjcwNCwxLjA0OS0xLjY0NSwxLjA0OS0yLjY3OWMwLTIuMTgtMS43NjctMy45NDYtMy45NDctMy45NDdjLTIuMTgsMC0zLjk0NiwxLjc2Ny0zLjk0NywzLjk0NyAgICBjMCwxLjAzNCwwLjM5OCwxLjk3NSwxLjA0OSwyLjY3OUg0Lj'+
			'E0NWMtMC4xNywwLTAuMzM2LDAuMDY5LTAuNDU2LDAuMTg4QzMuNTY4LDE0LjQwOCwzLjUsMTQuNTc0LDMuNSwxNC43NDR2MTEuNDY4ICAgIGMwLDAuMTcsMC4wNjksMC4zMzYsMC4xODgsMC40NTZjMC4xMiwwLjEyLDAuMjg2LDAuMTg4LDAuNDU2LDAuMTg4aDE5LjkwNGMwLjE3LDAsMC4zMzYtMC4wNjgsMC40NTYtMC4xODggICAgczAuMTg4LTAuMjg2LDAuMTg4LTAuNDU2di0yLjY1OWwyLjg0LDEuNjM5YzAuMSwwLjA1OCwwLjIxMSwwLjA4NiwwLjMyMiwwLjA4NnMwLjIyMy0wLjAyOCwwLjMyMi0wLjA4NiAgICBjMC4xOTktMC4xMTUsMC4zMjItMC4zMjgsMC4zMjItMC41NTh2LTguMzEyQzI4'+
			'LjUsMTYuMDkyLDI4LjM3NywxNS44NzksMjguMTc4LDE1Ljc2NHogTTE0Ljc4OCwxMC4yNTUgICAgYzAuMDA0LTIuMTExLDEuNzEyLTMuODE5LDMuODIzLTMuODIzYzIuMTExLDAuMDA0LDMuODE5LDEuNzEyLDMuODIzLDMuODIzYy0wLjAwNCwyLjExMS0xLjcxMiwzLjgxOS0zLjgyMywzLjgyMyAgICBDMTYuNSwxNC4wNzUsMTQuNzkyLDEyLjM2NywxNC43ODgsMTAuMjU1eiBNOC44NTEsOC43NjNjMS40NjgsMC4wMDIsMi42NTUsMS4xOSwyLjY1OCwyLjY1OGMtMC4wMDIsMS40NjctMS4xOSwyLjY1NS0yLjY1OCwyLjY1NyAgICBjLTEuNDY3LTAuMDAyLTIuNjU1LTEuMTktMi42NTctMi42NTdDNi'+
			'4xOTYsOS45NTMsNy4zODMsOC43NjUsOC44NTEsOC43NjN6IE0yMy40MDQsMjUuNTY3SDQuNzg5VjE1LjM4OGgxOC42MTVWMjUuNTY3eiAgICAgTTI3LjIxLDIzLjUxN2wtMi41MTctMS40NTN2LTMuMTcybDIuNTE3LTEuNDUyVjIzLjUxN3oiLz4KICA8L2c+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxnPgogICA8cGF0aCBkPSJNMTIuNDg0LDE3LjU2djUuNzg0bDUuMDA5LTIuODkzTDEyLjQ4NCwxNy41NnogTTI4LjE3'+
			'OCwxNS43NjRjLTAuMTk5LTAuMTE1LTAuNDQ1LTAuMTE1LTAuNjQ1LDAgICAgbC0yLjg0LDEuNjM5di0yLjY2YzAtMC4xNjktMC4wNjgtMC4zMzUtMC4xODgtMC40NTZzLTAuMjg2LTAuMTg5LTAuNDU2LTAuMTg5aC0yLjA3YzEuMDY4LTAuOTM3LDEuNzQ0LTIuMzExLDEuNzQ0LTMuODQ0ICAgIGMtMC4wMDEtMi44MjMtMi4yODktNS4xMTEtNS4xMTItNS4xMTJjLTIuODIzLDAtNS4xMTEsMi4yODktNS4xMTIsNS4xMTJjMCwxLjUzMywwLjY3NSwyLjkwNywxLjc0NCwzLjg0NGgtMy40OTQgICAgYzAuNjUxLTAuNzA0LDEuMDQ5LTEuNjQ1LDEuMDQ5LTIuNjc5YzAtMi4xOC0xLjc2Ny0zLjk0Ni0zLj'+
			'k0Ny0zLjk0N2MtMi4xOCwwLTMuOTQ2LDEuNzY3LTMuOTQ3LDMuOTQ3ICAgIGMwLDEuMDM0LDAuMzk4LDEuOTc1LDEuMDQ5LDIuNjc5SDQuMTQ1Yy0wLjE3LDAtMC4zMzYsMC4wNjktMC40NTYsMC4xODhDMy41NjgsMTQuNDA4LDMuNSwxNC41NzQsMy41LDE0Ljc0NHYxMS40NjggICAgYzAsMC4xNywwLjA2OSwwLjMzNiwwLjE4OCwwLjQ1NmMwLjEyLDAuMTIsMC4yODYsMC4xODgsMC40NTYsMC4xODhoMTkuOTA0YzAuMTcsMCwwLjMzNi0wLjA2OCwwLjQ1Ni0wLjE4OCAgICBzMC4xODgtMC4yODYsMC4xODgtMC40NTZ2LTIuNjU5bDIuODQsMS42MzljMC4xLDAuMDU4LDAuMjExLDAuMDg2LDAuMzIy'+
			'LDAuMDg2czAuMjIzLTAuMDI4LDAuMzIyLTAuMDg2ICAgIGMwLjE5OS0wLjExNSwwLjMyMi0wLjMyOCwwLjMyMi0wLjU1OHYtOC4zMTJDMjguNSwxNi4wOTIsMjguMzc3LDE1Ljg3OSwyOC4xNzgsMTUuNzY0eiBNMTQuNzg4LDEwLjI1NSAgICBjMC4wMDQtMi4xMTEsMS43MTItMy44MTksMy44MjMtMy44MjNjMi4xMTEsMC4wMDQsMy44MTksMS43MTIsMy44MjMsMy44MjNjLTAuMDA0LDIuMTExLTEuNzEyLDMuODE5LTMuODIzLDMuODIzICAgIEMxNi41LDE0LjA3NSwxNC43OTIsMTIuMzY3LDE0Ljc4OCwxMC4yNTV6IE04Ljg1MSw4Ljc2M2MxLjQ2OCwwLjAwMiwyLjY1NSwxLjE5LDIuNjU4LDIuNj'+
			'U4Yy0wLjAwMiwxLjQ2Ny0xLjE5LDIuNjU1LTIuNjU4LDIuNjU3ICAgIGMtMS40NjctMC4wMDItMi42NTUtMS4xOS0yLjY1Ny0yLjY1N0M2LjE5Niw5Ljk1Myw3LjM4Myw4Ljc2NSw4Ljg1MSw4Ljc2M3ogTTIzLjQwNCwyNS41NjdINC43ODlWMTUuMzg4aDE4LjYxNVYyNS41Njd6ICAgICBNMjcuMjEsMjMuNTE3bC0yLjUxNy0xLjQ1M3YtMy4xNzJsMi41MTctMS40NTJWMjMuNTE3eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_video_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_video_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_file.onmouseenter=function (e) {
			me._ht_video_video_file__img.style.visibility='hidden';
			me._ht_video_video_file__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_video_video_file']=true;
		}
		me._ht_video_video_file.onmouseleave=function (e) {
			me._ht_video_video_file__img.style.visibility='inherit';
			me._ht_video_video_file__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_video_video_file']=false;
		}
		me._ht_video_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_video_file);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.666667);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 3px 5px 3px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tt_ht_video_file.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_ht_video_file.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_ht_video_file.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style.transition='';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible();
		me._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		me.elementMouseOver['ht_video_file']=false;
		me.elementMouseOver['ht_video_video_file']=false;
		me._tt_ht_video_file.logicBlock_visible();
			me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
			skin._controller.style.transition='none';
			skin._controller.style.visibility='hidden';
			skin._controller.ggVisible=false;
			skin._screentint.style.transition='none';
			skin._screentint.style.visibility=(Number(skin._screentint.style.opacity)>0||!skin._screentint.style.opacity)?'inherit':'hidden';
			skin._screentint.ggVisible=true;
			skin._close.style.transition='none';
			skin._close.style.visibility=(Number(skin._close.style.opacity)>0||!skin._close.style.opacity)?'inherit':'hidden';
			skin._close.ggVisible=true;
			skin._popup_image.ggSetImage(player._(player.getBasePath()+""+player._(me.hotspot.url)));
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			skin._popup_image.style.transition='none';
			skin._popup_image.style.visibility=(Number(skin._popup_image.style.opacity)>0||!skin._popup_image.style.opacity)?'inherit':'hidden';
			skin._popup_image.ggVisible=true;
			skin._popup_image.ggSubElement.src=skin._popup_image.ggText;
			skin._image_popup.style.transition='none';
			skin._image_popup.style.visibility=(Number(skin._image_popup.style.opacity)>0||!skin._image_popup.style.opacity)?'inherit':'hidden';
			skin._image_popup.ggVisible=true;
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._hstext_image.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_image.onmouseleave=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._hstext_image.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._hstext_image=document.createElement('div');
		els=me._hstext_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hstext_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -49px;';
		hs+='position : absolute;';
		hs+='top : 20px;';
		hs+='visibility : hidden;';
		hs+='width : calc(99px + 2px);';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hstext_image.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hstext_image.ggUpdateText();
		player.addListener('changenode', function() {
			me._hstext_image.ggUpdateText();
		});
		el.appendChild(els);
		me._hstext_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hstext_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hstext_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hstext_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hstext_image.style.transition='';
				if (me._hstext_image.ggCurrentLogicStateVisible == 0) {
					me._hstext_image.style.visibility=(Number(me._hstext_image.style.opacity)>0||!me._hstext_image.style.opacity)?'inherit':'hidden';
					me._hstext_image.ggVisible=true;
				}
				else {
					me._hstext_image.style.visibility="hidden";
					me._hstext_image.ggVisible=false;
				}
			}
		}
		me._hstext_image.logicBlock_visible();
		me._hstext_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._hstext_image);
		el=me._hsimage_image=document.createElement('div');
		els=me._hsimage_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTEzLjcxMiwxMy40MDljMS4wMDUsMCwxLjgyLTAuODE1LDEuODItMS44MjFjMC0xLjAwNS0wLjgxNS0xLjgyMS0xLjgyLTEuODIxICAgYy0xLjAwNiwwLTEuODIxLDAuODE1LTEuODIxLDEuODIxQzExLjg5MiwxMi41OTQsMTIuNzA3LDEzLjQwOSwxMy43MTIsMTMuNDA5eiBNMjguMzA0LDcuMzE5ICAgYy0wLjEyNS0wLjEyNS0wLjI5Ny0wLjE5Ni0w'+
			'LjQ3My0wLjE5Nkg0LjE2OWMtMC4xNzYsMC0wLjM0OSwwLjA3MS0wLjQ3NCwwLjE5NkMzLjU3MSw3LjQ0NCwzLjUsNy42MTcsMy41LDcuNzkzdjE2LjQxNCAgIGMwLDAuMTc2LDAuMDcxLDAuMzQ4LDAuMTk2LDAuNDczYzAuMTI1LDAuMTI1LDAuMjk3LDAuMTk3LDAuNDczLDAuMTk3aDIzLjY2MmMwLjE3NiwwLDAuMzQ4LTAuMDcyLDAuNDczLTAuMTk3ICAgczAuMTk2LTAuMjk3LDAuMTk2LTAuNDczVjcuNzkzQzI4LjUsNy42MTcsMjguNDI5LDcuNDQ0LDI4LjMwNCw3LjMxOXogTTQuODM5LDguNDYySDI3LjE2bDAuMDAxLDcuMTg0ICAgYy0wLjU1Ny0wLjM3OC0xLjI5LTAuODc1LTIuMDk1LTEuND'+
			'IxYy0xLjAwMS0wLjY3Ni0yLjI1NC0wLjk4Ni0zLjUwMy0wLjk4OWMtMS4yNjYsMC4wMDItMi41NCwwLjMyMS0zLjU2LDEuMDA5bC0zLjU3NSwyLjQyNiAgIGMtMC4zMjktMC4yMjMtMC44MTMtMC41NTItMS4zNTMtMC45MThjLTAuNTE0LTAuMzQ0LTEuMTI5LTAuNDY2LTEuNzc0LTAuNDY5Yy0xLjE1NiwwLjAwNC0yLjQ1NCwwLjQwNy0zLjU1OCwxLjE1bC0yLjkwNSwxLjk3MSAgIFY4LjQ2MnogTTQuODM5LDIzLjUzN3YtMy41MTJsMy42NTgtMi40ODJjMC44NjctMC41OTQsMS45NzItMC45MjMsMi44MDUtMC45MTljMC40NjYtMC4wMDIsMC44MzEsMC4xMDMsMS4wMjIsMC4yMzggICBjMC4zMzMs'+
			'MC4yMjYsMC42NDUsMC40MzcsMC45MTMsMC42MTlsLTMuODY5LDIuNjI3Yy0wLjMwNiwwLjIwNy0wLjM4NiwwLjYyMy0wLjE3OSwwLjkzYzAuMTMsMC4xODksMC4zNCwwLjI5MywwLjU1NSwwLjI5MyAgIGMwLjEyOSwwLDAuMjYtMC4wMzcsMC4zNzUtMC4xMTVsOC42MzgtNS44NjFjMC43MzQtMC41MDIsMS43Ny0wLjc4LDIuODA3LTAuNzc4YzEuMDIzLTAuMDAyLDIuMDM2LDAuMjY5LDIuNzUxLDAuNzU3ICAgYzEuMjU4LDAuODUzLDIuMzQ2LDEuNTkxLDIuODQ3LDEuOTMxdjYuMjczSDQuODM5eiIvPgogPC9nPgogPGcgZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIz'+
			'AwMDAwMCI+CiAgPHBhdGggZD0iTTEzLjcxMiwxMy40MDljMS4wMDUsMCwxLjgyLTAuODE1LDEuODItMS44MjFjMC0xLjAwNS0wLjgxNS0xLjgyMS0xLjgyLTEuODIxICAgYy0xLjAwNiwwLTEuODIxLDAuODE1LTEuODIxLDEuODIxQzExLjg5MiwxMi41OTQsMTIuNzA3LDEzLjQwOSwxMy43MTIsMTMuNDA5eiBNMjguMzA0LDcuMzE5ICAgYy0wLjEyNS0wLjEyNS0wLjI5Ny0wLjE5Ni0wLjQ3My0wLjE5Nkg0LjE2OWMtMC4xNzYsMC0wLjM0OSwwLjA3MS0wLjQ3NCwwLjE5NkMzLjU3MSw3LjQ0NCwzLjUsNy42MTcsMy41LDcuNzkzdjE2LjQxNCAgIGMwLDAuMTc2LDAuMDcxLDAuMzQ4LDAuMTk2LDAu'+
			'NDczYzAuMTI1LDAuMTI1LDAuMjk3LDAuMTk3LDAuNDczLDAuMTk3aDIzLjY2MmMwLjE3NiwwLDAuMzQ4LTAuMDcyLDAuNDczLTAuMTk3ICAgczAuMTk2LTAuMjk3LDAuMTk2LTAuNDczVjcuNzkzQzI4LjUsNy42MTcsMjguNDI5LDcuNDQ0LDI4LjMwNCw3LjMxOXogTTQuODM5LDguNDYySDI3LjE2bDAuMDAxLDcuMTg0ICAgYy0wLjU1Ny0wLjM3OC0xLjI5LTAuODc1LTIuMDk1LTEuNDIxYy0xLjAwMS0wLjY3Ni0yLjI1NC0wLjk4Ni0zLjUwMy0wLjk4OWMtMS4yNjYsMC4wMDItMi41NCwwLjMyMS0zLjU2LDEuMDA5bC0zLjU3NSwyLjQyNiAgIGMtMC4zMjktMC4yMjMtMC44MTMtMC41NTItMS4zNT'+
			'MtMC45MThjLTAuNTE0LTAuMzQ0LTEuMTI5LTAuNDY2LTEuNzc0LTAuNDY5Yy0xLjE1NiwwLjAwNC0yLjQ1NCwwLjQwNy0zLjU1OCwxLjE1bC0yLjkwNSwxLjk3MSAgIFY4LjQ2MnogTTQuODM5LDIzLjUzN3YtMy41MTJsMy42NTgtMi40ODJjMC44NjctMC41OTQsMS45NzItMC45MjMsMi44MDUtMC45MTljMC40NjYtMC4wMDIsMC44MzEsMC4xMDMsMS4wMjIsMC4yMzggICBjMC4zMzMsMC4yMjYsMC42NDUsMC40MzcsMC45MTMsMC42MTlsLTMuODY5LDIuNjI3Yy0wLjMwNiwwLjIwNy0wLjM4NiwwLjYyMy0wLjE3OSwwLjkzYzAuMTMsMC4xODksMC4zNCwwLjI5MywwLjU1NSwwLjI5MyAgIGMwLjEy'+
			'OSwwLDAuMjYtMC4wMzcsMC4zNzUtMC4xMTVsOC42MzgtNS44NjFjMC43MzQtMC41MDIsMS43Ny0wLjc4LDIuODA3LTAuNzc4YzEuMDIzLTAuMDAyLDIuMDM2LDAuMjY5LDIuNzUxLDAuNzU3ICAgYzEuMjU4LDAuODUzLDIuMzQ2LDEuNTkxLDIuODQ3LDEuOTMxdjYuMjczSDQuODM5eiIvPgogPC9nPgo8L3N2Zz4K';
		me._hsimage_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hsimage_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8cGF0aCBkPSJNMTMuNzEyLDEzLjQwOWMxLjAwNSwwLDEuODItMC44MTUsMS44Mi0xLjgyMWMwLTEuMDA1LTAuODE1LTEuODIxLTEuODItMS44MjEgICBjLTEuMDA2LDAtMS44MjEsMC44MTUtMS44MjEsMS44MjFDMTEuODkyLDEyLjU5NCwxMi43MDcsMTMuNDA5'+
			'LDEzLjcxMiwxMy40MDl6IE0yOC4zMDQsNy4zMTkgICBjLTAuMTI1LTAuMTI1LTAuMjk3LTAuMTk2LTAuNDczLTAuMTk2SDQuMTY5Yy0wLjE3NiwwLTAuMzQ5LDAuMDcxLTAuNDc0LDAuMTk2QzMuNTcxLDcuNDQ0LDMuNSw3LjYxNywzLjUsNy43OTN2MTYuNDE0ICAgYzAsMC4xNzYsMC4wNzEsMC4zNDgsMC4xOTYsMC40NzNjMC4xMjUsMC4xMjUsMC4yOTcsMC4xOTcsMC40NzMsMC4xOTdoMjMuNjYyYzAuMTc2LDAsMC4zNDgtMC4wNzIsMC40NzMtMC4xOTcgICBzMC4xOTYtMC4yOTcsMC4xOTYtMC40NzNWNy43OTNDMjguNSw3LjYxNywyOC40MjksNy40NDQsMjguMzA0LDcuMzE5eiBNNC44MzksOC'+
			'40NjJIMjcuMTZsMC4wMDEsNy4xODQgICBjLTAuNTU3LTAuMzc4LTEuMjktMC44NzUtMi4wOTUtMS40MjFjLTEuMDAxLTAuNjc2LTIuMjU0LTAuOTg2LTMuNTAzLTAuOTg5Yy0xLjI2NiwwLjAwMi0yLjU0LDAuMzIxLTMuNTYsMS4wMDlsLTMuNTc1LDIuNDI2ICAgYy0wLjMyOS0wLjIyMy0wLjgxMy0wLjU1Mi0xLjM1My0wLjkxOGMtMC41MTQtMC4zNDQtMS4xMjktMC40NjYtMS43NzQtMC40NjljLTEuMTU2LDAuMDA0LTIuNDU0LDAuNDA3LTMuNTU4LDEuMTVsLTIuOTA1LDEuOTcxICAgVjguNDYyeiBNNC44MzksMjMuNTM3di0zLjUxMmwzLjY1OC0yLjQ4MmMwLjg2Ny0wLjU5NCwxLjk3Mi0wLjky'+
			'MywyLjgwNS0wLjkxOWMwLjQ2Ni0wLjAwMiwwLjgzMSwwLjEwMywxLjAyMiwwLjIzOCAgIGMwLjMzMywwLjIyNiwwLjY0NSwwLjQzNywwLjkxMywwLjYxOWwtMy44NjksMi42MjdjLTAuMzA2LDAuMjA3LTAuMzg2LDAuNjIzLTAuMTc5LDAuOTNjMC4xMywwLjE4OSwwLjM0LDAuMjkzLDAuNTU1LDAuMjkzICAgYzAuMTI5LDAsMC4yNi0wLjAzNywwLjM3NS0wLjExNWw4LjYzOC01Ljg2MWMwLjczNC0wLjUwMiwxLjc3LTAuNzgsMi44MDctMC43NzhjMS4wMjMtMC4wMDIsMi4wMzYsMC4yNjksMi43NTEsMC43NTcgICBjMS4yNTgsMC44NTMsMi4zNDYsMS41OTEsMi44NDcsMS45MzF2Ni4yNzNINC44Mz'+
			'l6Ii8+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xMy43MTIsMTMuNDA5YzEuMDA1LDAsMS44Mi0wLjgxNSwxLjgyLTEuODIxYzAtMS4wMDUtMC44MTUtMS44MjEtMS44Mi0xLjgyMSAgIGMtMS4wMDYsMC0xLjgyMSwwLjgxNS0xLjgyMSwxLjgyMUMxMS44OTIsMTIuNTk0LDEyLjcwNywxMy40MDksMTMuNzEyLDEzLjQwOXogTTI4LjMwNCw3LjMxOSAgIGMtMC4xMjUtMC4xMjUtMC4yOTctMC4xOTYtMC40'+
			'NzMtMC4xOTZINC4xNjljLTAuMTc2LDAtMC4zNDksMC4wNzEtMC40NzQsMC4xOTZDMy41NzEsNy40NDQsMy41LDcuNjE3LDMuNSw3Ljc5M3YxNi40MTQgICBjMCwwLjE3NiwwLjA3MSwwLjM0OCwwLjE5NiwwLjQ3M2MwLjEyNSwwLjEyNSwwLjI5NywwLjE5NywwLjQ3MywwLjE5N2gyMy42NjJjMC4xNzYsMCwwLjM0OC0wLjA3MiwwLjQ3My0wLjE5NyAgIHMwLjE5Ni0wLjI5NywwLjE5Ni0wLjQ3M1Y3Ljc5M0MyOC41LDcuNjE3LDI4LjQyOSw3LjQ0NCwyOC4zMDQsNy4zMTl6IE00LjgzOSw4LjQ2MkgyNy4xNmwwLjAwMSw3LjE4NCAgIGMtMC41NTctMC4zNzgtMS4yOS0wLjg3NS0yLjA5NS0xLjQyMW'+
			'MtMS4wMDEtMC42NzYtMi4yNTQtMC45ODYtMy41MDMtMC45ODljLTEuMjY2LDAuMDAyLTIuNTQsMC4zMjEtMy41NiwxLjAwOWwtMy41NzUsMi40MjYgICBjLTAuMzI5LTAuMjIzLTAuODEzLTAuNTUyLTEuMzUzLTAuOTE4Yy0wLjUxNC0wLjM0NC0xLjEyOS0wLjQ2Ni0xLjc3NC0wLjQ2OWMtMS4xNTYsMC4wMDQtMi40NTQsMC40MDctMy41NTgsMS4xNWwtMi45MDUsMS45NzEgICBWOC40NjJ6IE00LjgzOSwyMy41Mzd2LTMuNTEybDMuNjU4LTIuNDgyYzAuODY3LTAuNTk0LDEuOTcyLTAuOTIzLDIuODA1LTAuOTE5YzAuNDY2LTAuMDAyLDAuODMxLDAuMTAzLDEuMDIyLDAuMjM4ICAgYzAuMzMzLDAu'+
			'MjI2LDAuNjQ1LDAuNDM3LDAuOTEzLDAuNjE5bC0zLjg2OSwyLjYyN2MtMC4zMDYsMC4yMDctMC4zODYsMC42MjMtMC4xNzksMC45M2MwLjEzLDAuMTg5LDAuMzQsMC4yOTMsMC41NTUsMC4yOTMgICBjMC4xMjksMCwwLjI2LTAuMDM3LDAuMzc1LTAuMTE1bDguNjM4LTUuODYxYzAuNzM0LTAuNTAyLDEuNzctMC43OCwyLjgwNy0wLjc3OGMxLjAyMy0wLjAwMiwyLjAzNiwwLjI2OSwyLjc1MSwwLjc1NyAgIGMxLjI1OCwwLjg1MywyLjM0NiwxLjU5MSwyLjg0NywxLjkzMXY2LjI3M0g0LjgzOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hsimage_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hsimage_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hsimage_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage_image.onmouseenter=function (e) {
			me._hsimage_image__img.style.visibility='hidden';
			me._hsimage_image__imgo.style.visibility='inherit';
			me.elementMouseOver['hsimage_image']=true;
		}
		me._hsimage_image.onmouseleave=function (e) {
			me._hsimage_image__img.style.visibility='inherit';
			me._hsimage_image__imgo.style.visibility='hidden';
			me.elementMouseOver['hsimage_image']=false;
		}
		me._hsimage_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._hsimage_image);
		me.elementMouseOver['ht_image']=false;
		me._hstext_image.logicBlock_visible();
		me.elementMouseOver['hsimage_image']=false;
			me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._controller.style.transition='none';
			skin._controller.style.visibility='hidden';
			skin._controller.ggVisible=false;
			skin._screentint.style.transition='none';
			skin._screentint.style.visibility=(Number(skin._screentint.style.opacity)>0||!skin._screentint.style.opacity)?'inherit':'hidden';
			skin._screentint.ggVisible=true;
				skin._info_title.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.title)));
					var hs = player._("<b>%1<\/b>", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_title.ggUpdateText();
			skin._info_title.ggTextDiv.scrollTop = 0;
				skin._info_text_body.ggUpdateText=function() {
					var params = [];
					params.push(String(player._(me.hotspot.description)));
					var hs = player._("%1", params);
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			skin._info_text_body.ggUpdateText();
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			skin._information.ggVisible = !skin._information.ggVisible;
			var flag=skin._information.ggVisible;
			skin._information.style.transition='none';
			skin._information.style.visibility=((flag)&&(Number(skin._information.style.opacity)>0||!skin._information.style.opacity))?'inherit':'hidden';
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_info.onmouseleave=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgIGMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzICAgICBDNy4wMjIsMTAuNjg2LDUu'+
			'ODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgIGMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cG'+
			'F0aCBkPSJNMTQuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkgICAgIGMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCAgICAgIGMwLTAuNjYxLTAuNTM2LTEuMTk2'+
			'LTEuMTk2LTEuMTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3ICAgICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYgICAgICBDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMDAwMDAwIj'+
			'4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMgICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMjks'+
			'Ny4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgICBDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLDEwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSAgICAgYzAsMC42NjEtMC41MzYsMS4xOT'+
			'YtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4wNjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0ICAgICAgYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcgICAgICBjLTAuNjYxLDAtMS4xOTcsMC41'+
			'MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiAgICAgIEMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBoZWlnaHQ9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIGJhc2VQcm9maWxlPSJiYXNpYyIgdmlld0JveD0iMCAwIDMyIDMyIiB5PSIwcHgiIHg9IjBweCIgaWQ9IkxheWVyXzEiIHhtbG5zOnhsaW5rPSJodHRwOi'+
			'8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40IiBzdHJva2U9IiMzQzNDM0MiIHN0cm9rZS13aWR0aD0iMS41Ij4KICA8Zz4KICAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41LDE2LDMuNWwwLDBjNi45MDMsMCwxMi40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICAgYy0wLjAwMSw2LjkwMy01LjU5NywxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTks'+
			'My41LDIyLjkwMywzLjUsMTZMMy41LDE2eiBNOC44NTQsOC44NTMgICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGMwLjAwMSwyLjc5NSwxLjEyOSw1LjMxNCwyLjk2MSw3LjE0NmwwLDBjMS44MzIsMS44MzEsNC4zNTIsMi45Niw3LjE0NiwyLjk2bDAsMCAgICAgYzIuNzk1LDAsNS4zMTQtMS4xMjksNy4xNDctMi45NmwwLDBjMS44MzEtMS44MzIsMi45NTktNC4zNTIsMi45Ni03LjE0NmwwLDBjLTAuMDAxLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwICAgICBDMjEuMzEzLDcuMDIyLDE4Ljc5NSw1Ljg5MywxNiw1Ljg5MmwwLDBDMTMuMjA1LDUuODkzLD'+
			'EwLjY4Niw3LjAyMiw4Ljg1NCw4Ljg1M0w4Ljg1NCw4Ljg1M3oiLz4KICA8L2c+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xNC45NjMsMTAuMDVWOS41MjFjMC0wLjY2MSwwLjUzNi0xLjE5NiwxLjE5Ny0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM2LDEuMTk2LDEuMTk2bDAsMHYwLjUyOSAgICAgYzAsMC42NjEtMC41MzYsMS4xOTYtMS4xOTYsMS4xOTZsMCwwQzE1LjUsMTEuMjQ3LDE0Ljk2MywxMC43MTEsMTQuOTYzLDEwLjA1TDE0Ljk2MywxMC4wNXoiLz4KICAgPGc+CiAgICA8cGF0aCBkPSJNMTguNTMyLDIwLjM5MWgtMS4xNzZ2LTYuNDczYzAtMC4wMjEtMC4wMDUtMC4wNDItMC4wMDYtMC4w'+
			'NjNjMC0wLjAxNCwwLjAwNC0wLjAyNiwwLjAwNC0wLjA0ICAgICAgYzAtMC42NjEtMC41MzYtMS4xOTYtMS4xOTYtMS4xOTZoLTIuMjI2Yy0wLjY2MSwwLTEuMTk3LDAuNTM2LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5NmgxLjAzMXY1LjM3OWgtMS4yMDcgICAgICBjLTAuNjYxLDAtMS4xOTcsMC41MzUtMS4xOTcsMS4xOTZjMCwwLjY2LDAuNTM2LDEuMTk2LDEuMTk3LDEuMTk2aDQuNzc1YzAuNjYsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NiAgICAgIEMxOS43MjksMjAuOTI2LDE5LjE5MiwyMC4zOTEsMTguNTMyLDIwLjM5MXoiLz4KICAgPC9nPgogIDwvZz4KID'+
			'wvZz4KIDxnIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBzdHJva2U9IiMwMDAwMDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0zLjUsMTZDMy41LDkuMDk2LDkuMDk2LDMuNSwxNiwzLjVsMCwwYzYuOTAzLDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgIGMtMC4wMDEsNi45MDMtNS41OTcsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTguODU0LDguODUzICAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIw'+
			'NSw1Ljg5MywxNmwwLDBjMC4wMDEsMi43OTUsMS4xMjksNS4zMTQsMi45NjEsNy4xNDZsMCwwYzEuODMyLDEuODMxLDQuMzUyLDIuOTYsNy4xNDYsMi45NmwwLDAgICAgIGMyLjc5NSwwLDUuMzE0LTEuMTI5LDcuMTQ3LTIuOTZsMCwwYzEuODMxLTEuODMyLDIuOTU5LTQuMzUyLDIuOTYtNy4xNDZsMCwwYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMCAgICAgQzIxLjMxMyw3LjAyMiwxOC43OTUsNS44OTMsMTYsNS44OTJsMCwwQzEzLjIwNSw1Ljg5MywxMC42ODYsNy4wMjIsOC44NTQsOC44NTNMOC44NTQsOC44NTN6Ii8+CiAgPC9nPgogIDxnPgogICA8cGF0aCBkPSJNMT'+
			'QuOTYzLDEwLjA1VjkuNTIxYzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTctMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNiwxLjE5NiwxLjE5NmwwLDB2MC41MjkgICAgIGMwLDAuNjYxLTAuNTM2LDEuMTk2LTEuMTk2LDEuMTk2bDAsMEMxNS41LDExLjI0NywxNC45NjMsMTAuNzExLDE0Ljk2MywxMC4wNUwxNC45NjMsMTAuMDV6Ii8+CiAgIDxnPgogICAgPHBhdGggZD0iTTE4LjUzMiwyMC4zOTFoLTEuMTc2di02LjQ3M2MwLTAuMDIxLTAuMDA1LTAuMDQyLTAuMDA2LTAuMDYzYzAtMC4wMTQsMC4wMDQtMC4wMjYsMC4wMDQtMC4wNCAgICAgIGMwLTAuNjYxLTAuNTM2LTEuMTk2LTEuMTk2LTEu'+
			'MTk2aC0yLjIyNmMtMC42NjEsMC0xLjE5NywwLjUzNi0xLjE5NywxLjE5NmMwLDAuNjYsMC41MzYsMS4xOTYsMS4xOTcsMS4xOTZoMS4wMzF2NS4zNzloLTEuMjA3ICAgICAgYy0wLjY2MSwwLTEuMTk3LDAuNTM1LTEuMTk3LDEuMTk2YzAsMC42NiwwLjUzNiwxLjE5NiwxLjE5NywxLjE5Nmg0Ljc3NWMwLjY2LDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTYgICAgICBDMTkuNzI5LDIwLjkyNiwxOS4xOTIsMjAuMzkxLDE4LjUzMiwyMC4zOTF6Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -14px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.onmouseenter=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
			me.elementMouseOver['ht_info_image']=true;
		}
		me._ht_info_image.onmouseleave=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
			me.elementMouseOver['ht_info_image']=false;
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='background : rgba(150,150,150,0.784314);';
		hs+='border : 2px solid #000000;';
		hs+='border-radius : 16px;';
		hs+='color : #000000;';
		hs+='cursor : default;';
		hs+='height : 68px;';
		hs+='left : -51px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 143px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre-line;';
		hs+='padding: 4px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._tt_information.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("<span style=\"font-size: 18px;\">%1<\/span>\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tt_information.ggUpdateText();
		player.addListener('changenode', function() {
			me._tt_information.ggUpdateText();
		});
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style.transition='';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.logicBlock_visible();
		me._tt_information.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info.appendChild(me._tt_information);
		me.elementMouseOver['ht_info']=false;
		me.elementMouseOver['ht_info_image']=false;
		me._tt_information.logicBlock_visible();
			me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.onclick=function (e) {
			player.openUrl(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._hstext_url.logicBlock_alpha();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_url.onmouseleave=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._hstext_url.logicBlock_alpha();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage_url=document.createElement('div');
		els=me._hsimage_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLm'+
			'Fkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgdmlld0JveD0iMCAwIDMyIDMyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgeT0iMHB4IiB4PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIj4KIDxnIGlkPSJMYXllcl8xIi8+'+
			'CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIG9wYWNpdHk9IjAuNCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTTI4LjA4NCwxNiAgICAgYzAtNi40NzctNS4yNy0xMS43NDYtMTEuNzQ2LTExLjc0NkM5Ljg2MSw0LjI1NCw0LjU5Miw5LjUyMiw0LjU5MiwxNmMwLDYuNDMyLDUuMiwxMS42NywxMS42MTUsMTEuNzQxICAgICBjMC4wMzcsMC4wMDQsMC4wNzIsMC4wMDYsMC4xMDcsMC4wMDZjMC4wMTIsMCwwLj'+
			'AyMi0wLjAwMiwwLjAzMi0wLjAwMkMyMi44MTksMjcuNzQsMjguMDg0LDIyLjQ3MywyOC4wODQsMTZ6IE01Ljk5MywxNi42ODYgICAgIGgzLjMwNGMwLjA1NiwxLjY1NiwwLjMwNiwzLjIwOSwwLjcxNiw0LjZINy40MkM2LjYwOCwxOS45Miw2LjEwMywxOC4zNTksNS45OTMsMTYuNjg2eiBNMjYuNjg0LDE1LjMxMmgtMy4zNTIgICAgIGMtMC4wNTUtMS42NTEtMC4zMDMtMy4yLTAuNzEyLTQuNTg2aDIuNjQ0QzI2LjA3LDEyLjA4NiwyNi41NzIsMTMuNjQ2LDI2LjY4NCwxNS4zMTJ6IE0yMS45NTcsMTUuMzEyaC00LjkzMnYtNC41ODZoNC4xMyAgICAgQzIxLjYwNywxMi4wOTQsMjEuODk0LDEzLjY1'+
			'NywyMS45NTcsMTUuMzEyeiBNMTcuMDI1LDkuMzUxVjUuNzE5YzEuNDE4LDAuMzQzLDIuNjg5LDEuNjkyLDMuNTg5LDMuNjMySDE3LjAyNXogTTE1LjY1MSw1LjcwNyAgICAgdjMuNjQ0aC0zLjYzNUMxMi45MjQsNy4zOTEsMTQuMjEzLDYuMDMzLDE1LjY1MSw1LjcwN3ogTTE1LjY1MSwxMC43Mjd2NC41ODZoLTQuOTc3YzAuMDYzLTEuNjU2LDAuMzQ3LTMuMjE5LDAuOC00LjU4NkgxNS42NTF6ICAgICAgTTkuMjk3LDE1LjMxMkg1Ljk5M2MwLjEwOC0xLjY2NiwwLjYxNC0zLjIyNiwxLjQyLTQuNTg2aDIuNTk4QzkuNjAyLDEyLjExMyw5LjM1MywxMy42NjEsOS4yOTcsMTUuMzEyeiBNMTAuNjc0LD'+
			'E2LjY4Nmg0Ljk3NyAgICAgdjQuNmgtNC4xNzRDMTEuMDIyLDE5LjkxNCwxMC43MzcsMTguMzQ4LDEwLjY3NCwxNi42ODZ6IE0xNS42NTEsMjIuNjZ2My42MzNjLTEuNDM1LTAuMzI0LTIuNzIyLTEuNjc4LTMuNjMtMy42MzNIMTUuNjUxeiAgICAgIE0xNy4wMjUsMjYuMjgxVjIyLjY2aDMuNTgzQzE5LjcxMSwyNC41OTQsMTguNDQsMjUuOTM5LDE3LjAyNSwyNi4yODF6IE0xNy4wMjUsMjEuMjg1di00LjZoNC45MzIgICAgIGMtMC4wNjMsMS42NjItMC4zNSwzLjIyOS0wLjgwNSw0LjZIMTcuMDI1eiBNMjMuMzMyLDE2LjY4NmgzLjM1MmMtMC4xMTEsMS42NzQtMC42MTcsMy4yMzQtMS40MjgsNC42'+
			'aC0yLjYzOSAgICAgQzIzLjAyNywxOS44OTUsMjMuMjc3LDE4LjM0MiwyMy4zMzIsMTYuNjg2eiBNMjQuMjg5LDkuMzUxaC0yLjE0NWMtMC40NDctMS4xMDItMS4wMDItMi4wNjQtMS42NDUtMi44NDggICAgIEMyMS45NzMsNy4xNTIsMjMuMjcsOC4xMzIsMjQuMjg5LDkuMzUxeiBNMTIuMTAzLDYuNTM4Yy0wLjYzLDAuNzc2LTEuMTc3LDEuNzI3LTEuNjE2LDIuODEzSDguMzg1ICAgICBDOS4zOTEsOC4xNTIsMTAuNjU5LDcuMTg2LDEyLjEwMyw2LjUzOHogTTguMzk3LDIyLjY2aDIuMDk0YzAuNDM4LDEuMDgyLDAuOTgxLDIuMDI3LDEuNjA5LDIuODAxICAgICBDMTAuNjYyLDI0LjgxNCw5LjM5OC'+
			'wyMy44NTQsOC4zOTcsMjIuNjZ6IE0yMC41MDIsMjUuNDk0YzAuNjM5LTAuNzc5LDEuMTkyLTEuNzM4LDEuNjM4LTIuODM0aDIuMTQgICAgIEMyMy4yNiwyMy44NzMsMjEuOTcsMjQuODUsMjAuNTAyLDI1LjQ5NHoiLz4KICAgPC9nPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTYuMTk3LDI3Ljg0QzkuNzQ3LDI3Ljc3LDQuNDkyLDIyLjQ1OCw0LjQ5MiwxNmMwLTYuNTMyLDUuMzE0LTExLjg0NiwxMS44NDYtMTEuODQ2ICAgIGM2LjUzMiwwLDExLjg0Niw1LjMxNCwxMS44NDYsMTEuODQ2YzAsNi41MjctNS4zMSwxMS44NC0xMS44MzcsMTEuODQ0bC0wLjAzMiwwLjAwMkMxNi4yNzYsMjcu'+
			'ODQ2LDE2LjIzNywyNy44NDQsMTYuMTk3LDI3Ljg0eiAgICAgTTEyLjE3OCwyMi43NmMwLjg5NCwxLjg1NywyLjA4MywzLjA1OSwzLjM3MywzLjQwNVYyMi43NkgxMi4xNzh6IE0xNy4xMjUsMjYuMTUxYzEuMjcxLTAuMzYyLDIuNDQ0LTEuNTU5LDMuMzI1LTMuMzkyaC0zLjMyNSAgICBWMjYuMTUxeiBNMjIuMjA3LDIyLjc2Yy0wLjM4NSwwLjkzNS0wLjg0NiwxLjc2My0xLjM3MSwyLjQ3YzEuMjE5LTAuNTk3LDIuMzI1LTEuNDQyLDMuMjI2LTIuNDdIMjIuMjA3eiBNOC42MTQsMjIuNzYgICAgYzAuODc4LDEuMDAyLDEuOTU4LDEuODM1LDMuMTUxLDIuNDMyYy0wLjUxNS0wLjY5OS0wLjk2NS0xLj'+
			'UxNS0xLjM0Mi0yLjQzMkg4LjYxNHogTTYuMSwxNi43ODUgICAgYzAuMTIxLDEuNTg2LDAuNTkzLDMuMDgyLDEuNDA2LDQuNDQ5bDIuMzc1LTAuMDQ3QzkuNDg4LDE5LjgxNiw5LjI2LDE4LjMzNyw5LjIsMTYuNzg1SDYuMXogTTI1LjI1NiwyMS4xODYgICAgYzAuNzI4LTEuMzIsMS4xOTktMi44MTUsMS4zMi00LjRoLTMuMTQ3Yy0wLjA1OSwxLjU1MS0wLjI4NiwzLjAyOS0wLjY3OSw0LjRIMjUuMjU2eiBNMjEuMDgsMjEuMTg2ICAgIGMwLjQzOC0xLjM0NiwwLjcwNS0yLjg2MywwLjc3Mi00LjRoLTQuNzI4djQuNEgyMS4wOHogTTE1LjU1MSwyMS4xODZ2LTQuNGgtNC43NzNjMC4wNjcsMS41Mzcs'+
			'MC4zMzMsMy4wNTUsMC43NzEsNC40SDE1LjU1MXogICAgIE0yNi41NzYsMTUuMjEyYy0wLjEyMS0xLjU2My0wLjYwNC0zLjA5NS0xLjM5OC00LjQzNWwtMi40MjUsMC4wNDdjMC4zOSwxLjM2MywwLjYxNywyLjgzOCwwLjY3Niw0LjM4OEgyNi41NzZ6IE0yMS44NTMsMTUuMjEyICAgIGMtMC4wNjctMS41MjktMC4zMzMtMy4wNDItMC43Ny00LjM4NmgtMy45NTh2NC4zODZIMjEuODUzeiBNMTUuNTUxLDE1LjIxMnYtNC4zODZoLTQuMDA1Yy0wLjQzNiwxLjM0LTAuNzAxLDIuODUzLTAuNzY4LDQuMzg2ICAgIEgxNS41NTF6IE05LjIsMTUuMjEyYzAuMDYtMS41NDcsMC4yODctMy4wMjEsMC42NzctNC'+
			'4zODZINy40N2MtMC43ODEsMS4zMzUtMS4yNTMsMi44NDgtMS4zNyw0LjM4Nkg5LjJ6IE0yNC4wNzIsOS4yNTEgICAgYy0wLjg5OS0xLjAyOS0yLjAwOS0xLjg4LTMuMjM3LTIuNDgyYzAuNTI3LDAuNzA5LDAuOTksMS41NDIsMS4zNzcsMi40ODJIMjQuMDcyeiBNMjAuNDU2LDkuMjUxICAgIGMtMC44ODItMS44MzgtMi4wNTgtMy4wMzktMy4zMzEtMy40MDJ2My40MDJIMjAuNDU2eiBNMTUuNTUxLDkuMjUxVjUuODM1Yy0xLjI5MiwwLjM0OC0yLjQ4MywxLjU1My0zLjM3NywzLjQxNkgxNS41NTF6ICAgICBNMTAuNDE5LDkuMjUxYzAuMzc4LTAuOTIxLDAuODMxLTEuNzQyLDEuMzQ5LTIuNDQ0Yy0x'+
			'LjE5NywwLjU5Ny0yLjI4MSwxLjQzNC0zLjE2NiwyLjQ0NEgxMC40MTl6Ii8+CiAgIDxwYXRoIGZpbGw9IiMxQTE3MUIiIGQ9Ik0xNi4zMzgsNC4yNTRjNi40NzcsMCwxMS43NDYsNS4yNjksMTEuNzQ2LDExLjc0NmMwLDYuNDczLTUuMjY1LDExLjc0MS0xMS43MzcsMTEuNzQ1ICAgIGMtMC4wMSwwLTAuMDIxLDAuMDAyLTAuMDMyLDAuMDAyYy0wLjAzNSwwLTAuMDctMC4wMDItMC4xMDctMC4wMDZDOS43OTIsMjcuNjcsNC41OTIsMjIuNDMyLDQuNTkyLDE2ICAgIEM0LjU5Miw5LjUyMiw5Ljg2MSw0LjI1NCwxNi4zMzgsNC4yNTQgTTEyLjAxNiw5LjM1MWgzLjYzNVY1LjcwN0MxNC4yMTMsNi4wMz'+
			'MsMTIuOTI0LDcuMzkxLDEyLjAxNiw5LjM1MSBNMTcuMDI1LDkuMzUxaDMuNTg5ICAgIGMtMC44OTktMS45NC0yLjE3MS0zLjI4OS0zLjU4OS0zLjYzMlY5LjM1MSBNMjIuMTQ1LDkuMzUxaDIuMTQ1Yy0xLjAyLTEuMjE5LTIuMzE2LTIuMTk5LTMuNzg5LTIuODQ4ICAgIEMyMS4xNDMsNy4yODcsMjEuNjk3LDguMjQ5LDIyLjE0NSw5LjM1MSBNOC4zODUsOS4zNTFoMi4xMDFjMC40MzktMS4wODYsMC45ODYtMi4wMzcsMS42MTYtMi44MTMgICAgQzEwLjY1OSw3LjE4Niw5LjM5MSw4LjE1Miw4LjM4NSw5LjM1MSBNMjMuMzMyLDE1LjMxMmgzLjM1MmMtMC4xMTEtMS42NjYtMC42MTMtMy4yMjYtMS40'+
			'Mi00LjU4NkgyMi42MiAgICBDMjMuMDI5LDEyLjExMywyMy4yNzcsMTMuNjYxLDIzLjMzMiwxNS4zMTIgTTE3LjAyNSwxNS4zMTJoNC45MzJjLTAuMDYzLTEuNjU2LTAuMzUtMy4yMTktMC44MDItNC41ODZoLTQuMTNWMTUuMzEyICAgICBNMTAuNjc0LDE1LjMxMmg0Ljk3N3YtNC41ODZoLTQuMTc3QzExLjAyMSwxMi4wOTQsMTAuNzM3LDEzLjY1NywxMC42NzQsMTUuMzEyIE01Ljk5MywxNS4zMTJoMy4zMDQgICAgYzAuMDU2LTEuNjUxLDAuMzA1LTMuMiwwLjcxMy00LjU4Nkg3LjQxM0M2LjYwNywxMi4wODYsNi4xMDEsMTMuNjQ2LDUuOTkzLDE1LjMxMiBNMjIuNjE3LDIxLjI4NWgyLjYzOSAgIC'+
			'BjMC44MTEtMS4zNjUsMS4zMTYtMi45MjYsMS40MjgtNC42aC0zLjM1MkMyMy4yNzcsMTguMzQyLDIzLjAyNywxOS44OTUsMjIuNjE3LDIxLjI4NSBNMTcuMDI1LDIxLjI4NWg0LjEyNyAgICBjMC40NTUtMS4zNzEsMC43NDEtMi45MzgsMC44MDUtNC42aC00LjkzMlYyMS4yODUgTTExLjQ3NywyMS4yODVoNC4xNzR2LTQuNmgtNC45NzdDMTAuNzM3LDE4LjM0OCwxMS4wMjIsMTkuOTE0LDExLjQ3NywyMS4yODUgICAgIE03LjQyLDIxLjI4NWgyLjU5M2MtMC40MS0xLjM5MS0wLjY2MS0yLjk0My0wLjcxNi00LjZINS45OTNDNi4xMDMsMTguMzU5LDYuNjA4LDE5LjkyLDcuNDIsMjEuMjg1IE0yMC41'+
			'MDIsMjUuNDk0ICAgIGMxLjQ2OC0wLjY0NSwyLjc1OC0xLjYyMSwzLjc3Ny0yLjgzNGgtMi4xNEMyMS42OTQsMjMuNzU2LDIxLjE0MSwyNC43MTUsMjAuNTAyLDI1LjQ5NCBNMTcuMDI1LDI2LjI4MSAgICBjMS40MTUtMC4zNDIsMi42ODYtMS42ODgsMy41ODMtMy42MjFoLTMuNTgzVjI2LjI4MSBNMTUuNjUxLDI2LjI5M1YyMi42NmgtMy42M0MxMi45MjksMjQuNjE1LDE0LjIxNiwyNS45NjksMTUuNjUxLDI2LjI5MyAgICAgTTEyLjEsMjUuNDYxYy0wLjYyNy0wLjc3My0xLjE3MS0xLjcxOS0xLjYwOS0yLjgwMUg4LjM5N0M5LjM5OCwyMy44NTQsMTAuNjYyLDI0LjgxNCwxMi4xLDI1LjQ2MSBNMT'+
			'YuMzM4LDQuMDU0ICAgIEM5Ljc1MSw0LjA1NCw0LjM5Miw5LjQxMyw0LjM5MiwxNmMwLDYuNTEzLDUuMjk5LDExLjg3LDExLjgxMywxMS45NDFjMC4wMjUsMC4wMDMsMC4wNjcsMC4wMDYsMC4xMDksMC4wMDYgICAgYzYuNjE0LTAuMDA2LDExLjk3LTUuMzY0LDExLjk3LTExLjk0N0MyOC4yODQsOS40MTMsMjIuOTI1LDQuMDU0LDE2LjMzOCw0LjA1NEwxNi4zMzgsNC4wNTR6IE0xMi4zMzQsOS4xNTEgICAgYzAuODQyLTEuNjk0LDEuOTM1LTIuODEsMy4xMTctMy4xODN2My4xODNIMTIuMzM0TDEyLjMzNCw5LjE1MXogTTE3LjIyNiw5LjE1MVY1Ljk4NGMxLjE2MywwLjM4NywyLjIzOSwxLjQ5Nywz'+
			'LjA3LDMuMTY3SDE3LjIyNiAgICBMMTcuMjI2LDkuMTUxeiBNMjIuMjc4LDkuMTUxYy0wLjMyNC0wLjc3OC0wLjcwMS0xLjQ4My0xLjEyNC0yLjEwNGMxLjAwOCwwLjU0NSwxLjkyNCwxLjI2LDIuNjk0LDIuMTA0SDIyLjI3OEwyMi4yNzgsOS4xNTF6ICAgICBNOC44MjYsOS4xNTFjMC43NTQtMC44MjQsMS42NDYtMS41MjUsMi42MjItMi4wNjJjLTAuNDEzLDAuNjEyLTAuNzc5LDEuMzAzLTEuMDk2LDIuMDYySDguODI2TDguODI2LDkuMTUxeiBNMjIuODg2LDEwLjkyNyAgICBoMi4yNjRjMC43MzQsMS4yNzIsMS4xODgsMi43MTMsMS4zMTgsNC4xODZoLTIuOTQzQzIzLjQ2MiwxMy42MzksMjMuMj'+
			'Q4LDEyLjIzMiwyMi44ODYsMTAuOTI3TDIyLjg4NiwxMC45Mjd6IE0xNy4yMjYsMTAuOTI3ICAgIGgzLjc4NGMwLjQxMSwxLjI4OCwwLjY2NSwyLjcyOCwwLjczOCw0LjE4NmgtNC41MjJWMTAuOTI3TDE3LjIyNiwxMC45Mjd6IE0xMS42MTksMTAuOTI3aDMuODMydjQuMTg2aC00LjU2OCAgICBDMTAuOTU2LDEzLjY1LDExLjIwOSwxMi4yMSwxMS42MTksMTAuOTI3TDExLjYxOSwxMC45Mjd6IE03LjUyNywxMC45MjdoMi4yMThjLTAuMzYyLDEuMzA4LTAuNTc4LDIuNzEzLTAuNjQxLDQuMTg2SDYuMjA4ICAgIEM2LjMzNiwxMy42NDYsNi43ODksMTIuMjA1LDcuNTI3LDEwLjkyN0w3LjUyNywxMC45'+
			'Mjd6IE0yMy41MjQsMTYuODg2aDIuOTQzYy0wLjEzLDEuNDkxLTAuNTc1LDIuOTAzLTEuMzI2LDQuMTk5aC0yLjI1OSAgICBDMjMuMjQ3LDE5Ljc3MSwyMy40NjIsMTguMzYxLDIzLjUyNCwxNi44ODZMMjMuNTI0LDE2Ljg4NnogTTE3LjIyNiwxNi44ODZoNC41MjJjLTAuMDczLDEuNDY2LTAuMzI4LDIuOTEtMC43NDEsNC4xOTloLTMuNzgxICAgIFYxNi44ODZMMTcuMjI2LDE2Ljg4NnogTTEwLjg4MywxNi44ODZoNC41Njh2NC4xOTloLTMuODI5QzExLjIwOSwxOS43OTYsMTAuOTU2LDE4LjM1MiwxMC44ODMsMTYuODg2TDEwLjg4MywxNi44ODZ6ICAgICBNNi4yMDgsMTYuODg2aDIuODk2YzAuMD'+
			'YzLDEuNDc2LDAuMjc5LDIuODg2LDAuNjQ0LDQuMTk5SDcuNTM0QzYuNzgzLDE5Ljc4OSw2LjMzNywxOC4zNzgsNi4yMDgsMTYuODg2TDYuMjA4LDE2Ljg4NnogICAgIE0yMi4yNzMsMjIuODZoMS41NjRjLTAuNzcxLDAuODQxLTEuNjg0LDEuNTUyLTIuNjgzLDIuMDkyQzIxLjU3NiwyNC4zMzMsMjEuOTUxLDIzLjYzMywyMi4yNzMsMjIuODZMMjIuMjczLDIyLjg2eiAgICAgTTE3LjIyNiwyMi44NmgzLjA2NGMtMC44MjksMS42NjQtMS45MDMsMi43NzEtMy4wNjQsMy4xNTVWMjIuODZMMTcuMjI2LDIyLjg2eiBNMTIuMzM5LDIyLjg2aDMuMTEydjMuMTcyICAgIEMxNC4yNzEsMjUuNjYsMTMuMTgx'+
			'LDI0LjU0OSwxMi4zMzksMjIuODZMMTIuMzM5LDIyLjg2eiBNOC44MzgsMjIuODZoMS41MThjMC4zMTQsMC43NTUsMC42NzksMS40NCwxLjA4OCwyLjA1ICAgIEMxMC40NzMsMjQuMzc0LDkuNTg3LDIzLjY3OCw4LjgzOCwyMi44Nkw4LjgzOCwyMi44NnoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._hsimage_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hsimage_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLm'+
			'Fkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgdmlld0JveD0iMCAwIDMyIDMyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgeT0iMHB4IiB4PSIwcHgiIHhtbG5zOmk9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVJbGx1c3RyYXRvci8xMC4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIj4KIDxnIGlkPSJMYXllcl8xIi8+'+
			'CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibXVsdGlwbHkiIG9wYWNpdHk9IjAuNCI+CiAgICA8cGF0aCBmaWxsPSJub25lIiBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im5vcm1hbCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzFBMTcxQiIgZD0iTTI5LjI1OSwxNS45OTkgICAgIGMwLTcuMTI1LTUuNzk2LTEyLjkyLTEyLjkyMS0xMi45MmMtNy4xMjQsMC0xMi45Miw1Ljc5NS0xMi45MiwxMi45MmMwLDcuMDc1LDUuNzIsMTIuODM4LDEyLjc3NywxMi45MTUgICAgIGMwLjA0LDAuMDA0LDAuMDc4LDAuMDA3LDAuMTE3LDAuMDA3YzAuMDEzLD'+
			'AsMC4wMjQtMC4wMDMsMC4wMzUtMC4wMDNDMjMuNDY4LDI4LjkxNCwyOS4yNTksMjMuMTIsMjkuMjU5LDE1Ljk5OXogTTQuOTU5LDE2Ljc1NCAgICAgaDMuNjM0YzAuMDYyLDEuODIyLDAuMzM3LDMuNTMsMC43ODgsNS4wNkg2LjUyOEM1LjYzNiwyMC4zMTIsNS4wOCwxOC41OTUsNC45NTksMTYuNzU0eiBNMjcuNzE5LDE1LjI0M2gtMy42ODcgICAgIGMtMC4wNjEtMS44MTYtMC4zMzMtMy41Mi0wLjc4My01LjA0NGgyLjkwN0MyNy4wNDQsMTEuNjk1LDI3LjU5NiwxMy40MTEsMjcuNzE5LDE1LjI0M3ogTTIyLjUyLDE1LjI0M2gtNS40MjV2LTUuMDQ0aDQuNTQzICAgICBDMjIuMTM1LDExLjcwMywy'+
			'Mi40NDksMTMuNDIyLDIyLjUyLDE1LjI0M3ogTTE3LjA5NSw4LjY4NlY0LjY5YzEuNTYsMC4zNzgsMi45NTgsMS44NjEsMy45NDcsMy45OTVIMTcuMDk1eiBNMTUuNTgzLDQuNjc4djQuMDA4ICAgICBoLTMuOTk5QzEyLjU4Myw2LjUyOSwxNC4wMDEsNS4wMzYsMTUuNTgzLDQuNjc4eiBNMTUuNTgzLDEwLjE5OXY1LjA0NGgtNS40NzZjMC4wNjktMS44MjEsMC4zODItMy41NCwwLjg4LTUuMDQ0SDE1LjU4M3ogICAgICBNOC41OTMsMTUuMjQzSDQuOTU5YzAuMTE5LTEuODMyLDAuNjc1LTMuNTQ4LDEuNTYyLTUuMDQ0aDIuODU3QzguOTI5LDExLjcyNCw4LjY1NCwxMy40MjcsOC41OTMsMTUuMjQzei'+
			'BNMTAuMTA3LDE2Ljc1NGg1LjQ3NiAgICAgdjUuMDZoLTQuNTkyQzEwLjQ5MSwyMC4zMDYsMTAuMTc3LDE4LjU4MiwxMC4xMDcsMTYuNzU0eiBNMTUuNTgzLDIzLjMyNnYzLjk5NmMtMS41NzgtMC4zNTYtMi45OTUtMS44NDYtMy45OTQtMy45OTZIMTUuNTgzeiAgICAgIE0xNy4wOTUsMjcuMzF2LTMuOTgzaDMuOTQxQzIwLjA0OSwyNS40NTMsMTguNjUxLDI2LjkzNCwxNy4wOTUsMjcuMzF6IE0xNy4wOTUsMjEuODEzdi01LjA2aDUuNDI1ICAgICBjLTAuMDcsMS44MjgtMC4zODUsMy41NTItMC44ODYsNS4wNkgxNy4wOTV6IE0yNC4wMzIsMTYuNzU0aDMuNjg3Yy0wLjEyMywxLjg0MS0wLjY3OSwz'+
			'LjU1OC0xLjU3LDUuMDZoLTIuOTAzICAgICBDMjMuNjk2LDIwLjI4NCwyMy45NzIsMTguNTc2LDI0LjAzMiwxNi43NTR6IE0yNS4wODUsOC42ODZoLTIuMzU5Yy0wLjQ5Mi0xLjIxMi0xLjEwMy0yLjI3MS0xLjgwOS0zLjEzMyAgICAgQzIyLjUzNiw2LjI2NywyMy45NjMsNy4zNDUsMjUuMDg1LDguNjg2eiBNMTEuNjgsNS41OTJjLTAuNjkzLDAuODU0LTEuMjk1LDEuODk5LTEuNzc4LDMuMDk0SDcuNTkxICAgICBDOC42OTYsNy4zNjcsMTAuMDkyLDYuMzA0LDExLjY4LDUuNTkyeiBNNy42MDQsMjMuMzI2aDIuMzAzYzAuNDgxLDEuMTksMS4wOCwyLjIyOSwxLjc3LDMuMDgxICAgICBDMTAuMDk1LD'+
			'I1LjY5NSw4LjcwNCwyNC42MzksNy42MDQsMjMuMzI2eiBNMjAuOTE5LDI2LjQ0M2MwLjcwMi0wLjg1NywxLjMxMi0xLjkxMiwxLjgwMi0zLjExN2gyLjM1NCAgICAgQzIzLjk1MiwyNC42NiwyMi41MzMsMjUuNzM0LDIwLjkxOSwyNi40NDN6Ii8+CiAgIDwvZz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTE2LjE4NiwyOS4wMTRDOS4wOTQsMjguOTM3LDMuMzE4LDIzLjA5OCwzLjMxOCwxNS45OTljMC03LjE3OSw1Ljg0MS0xMy4wMiwxMy4wMi0xMy4wMiAgICBjNy4xOCwwLDEzLjAyMSw1Ljg0MSwxMy4wMjEsMTMuMDJjMCw3LjE3NS01LjgzNiwxMy4wMTUtMTMuMDExLDEzLjAxOWwtMC4w'+
			'MzUsMC4wMDNDMTYuMjcsMjkuMDIxLDE2LjIyOSwyOS4wMTgsMTYuMTg2LDI5LjAxNHogICAgIE0xMS43NDcsMjMuNDI2YzAuOTg4LDIuMDYxLDIuMzA3LDMuMzkxLDMuNzM2LDMuNzY5di0zLjc2OUgxMS43NDd6IE0xNy4xOTQsMjcuMThjMS40MDktMC4zOTYsMi43MS0xLjcyMSwzLjY4NC0zLjc1NGgtMy42ODQgICAgVjI3LjE4eiBNMjIuNzg4LDIzLjQyNmMtMC40MywxLjA0NC0wLjk0NSwxLjk2OC0xLjUzNSwyLjc1M2MxLjM2My0wLjY2LDIuNi0xLjYwNCwzLjYwNC0yLjc1M0gyMi43ODh6IE03LjgyMSwyMy40MjYgICAgYzAuOTc3LDEuMTIsMi4xODQsMi4wNSwzLjUyLDIuNzEzYy0wLjU3OS'+
			'0wLjc4LTEuMDgzLTEuNjktMS41MDItMi43MTNINy44MjF6IE01LjA2NiwxNi44NTRjMC4xMzEsMS43NSwwLjY1MSwzLjQsMS41NDgsNC45MDkgICAgbDIuNjM0LTAuMDQ3Yy0wLjQzNS0xLjUxMy0wLjY4Ny0zLjE0Ny0wLjc1Mi00Ljg2Mkg1LjA2NnogTTI2LjE0OCwyMS43MTRjMC44MTEtMS40NiwxLjMzLTMuMTEsMS40NjMtNC44NmgtMy40ODIgICAgYy0wLjA2NCwxLjcxNC0wLjMxNiwzLjM0Ny0wLjc1MSw0Ljg2SDI2LjE0OHogTTIxLjU2MiwyMS43MTRjMC40ODUtMS40ODMsMC43NzktMy4xNiwwLjg1NC00Ljg2aC01LjIyMXY0Ljg2SDIxLjU2MnogICAgIE0xNS40ODMsMjEuNzE0di00Ljg2'+
			'aC01LjI3MWMwLjA3NCwxLjY5OCwwLjM2NywzLjM3NSwwLjg1Miw0Ljg2SDE1LjQ4M3ogTTI3LjYxMSwxNS4xNDNjLTAuMTMzLTEuNzI2LTAuNjY0LTMuNDE1LTEuNTQxLTQuODkzICAgIGwtMi42ODgsMC4wNDZjMC40MzIsMS41MDMsMC42ODMsMy4xMzIsMC43NDcsNC44NDZIMjcuNjExeiBNMjIuNDE1LDE1LjE0M2MtMC4wNzQtMS42ODktMC4zNjctMy4zNi0wLjg1LTQuODQ0aC00LjM3MXY0Ljg0NCAgICBIMjIuNDE1eiBNMTUuNDgzLDE1LjE0M3YtNC44NDRIMTEuMDZjLTAuNDgyLDEuNDc5LTAuNzc0LDMuMTUtMC44NDgsNC44NDRIMTUuNDgzeiBNOC40OTYsMTUuMTQzICAgIGMwLjA2NS0xLj'+
			'cwOCwwLjMxNy0zLjMzNywwLjc0OS00Ljg0NEg2LjU3OGMtMC44NjMsMS40NzMtMS4zODQsMy4xNDUtMS41MTEsNC44NDRIOC40OTZ6IE0yNC44NjgsOC41ODUgICAgYy0xLjAwMi0xLjE1MS0yLjI0Mi0yLjEtMy42MTYtMi43NjhjMC41OTIsMC43ODksMS4xMDksMS43MTgsMS41NDEsMi43NjhIMjQuODY4eiBNMjAuODg1LDguNTg1ICAgIGMtMC45NzYtMi4wMzktMi4yNzgtMy4zNjgtMy42OS0zLjc2NnYzLjc2NkgyMC44ODV6IE0xNS40ODMsOC41ODV2LTMuNzhjLTEuNDMzLDAuMzgtMi43NTMsMS43MTQtMy43NDEsMy43OEgxNS40ODN6ICAgICBNOS44MzQsOC41ODVjMC40MjItMS4wMywwLjky'+
			'OS0xLjk0NCwxLjUxLTIuNzI1Yy0xLjMzOSwwLjY2Mi0yLjU1MSwxLjU5Ni0zLjUzNiwyLjcyNUg5LjgzNHoiLz4KICAgPHBhdGggZmlsbD0iIzFBMTcxQiIgZD0iTTE2LjMzOCwzLjA3OWM3LjEyNSwwLDEyLjkyMSw1Ljc5NSwxMi45MjEsMTIuOTJjMCw3LjEyMS01Ljc5MSwxMi45MTUtMTIuOTExLDEyLjkxOSAgICBjLTAuMDExLDAtMC4wMjIsMC4wMDMtMC4wMzUsMC4wMDNjLTAuMDM5LDAtMC4wNzctMC4wMDMtMC4xMTctMC4wMDdjLTcuMDU4LTAuMDc3LTEyLjc3Ny01Ljg0LTEyLjc3Ny0xMi45MTUgICAgQzMuNDE4LDguODc0LDkuMjE0LDMuMDc5LDE2LjMzOCwzLjA3OSBNMTEuNTg0LDguNj'+
			'g2aDMuOTk5VjQuNjc4QzE0LjAwMSw1LjAzNiwxMi41ODMsNi41MjksMTEuNTg0LDguNjg2IE0xNy4wOTUsOC42ODZoMy45NDcgICAgYy0wLjk4OS0yLjEzNC0yLjM4OC0zLjYxNy0zLjk0Ny0zLjk5NVY4LjY4NiBNMjIuNzI2LDguNjg2aDIuMzU5Yy0xLjEyMi0xLjM0MS0yLjU0OS0yLjQxOS00LjE2OC0zLjEzMyAgICBDMjEuNjIzLDYuNDE1LDIyLjIzMyw3LjQ3NCwyMi43MjYsOC42ODYgTTcuNTkxLDguNjg2aDIuMzExYzAuNDgzLTEuMTk0LDEuMDg1LTIuMjQsMS43NzgtMy4wOTQgICAgQzEwLjA5Miw2LjMwNCw4LjY5Niw3LjM2Nyw3LjU5MSw4LjY4NiBNMjQuMDMyLDE1LjI0M2gzLjY4N2Mt'+
			'MC4xMjMtMS44MzItMC42NzUtMy41NDgtMS41NjItNS4wNDRoLTIuOTA3ICAgIEMyMy42OTksMTEuNzI0LDIzLjk3MiwxMy40MjcsMjQuMDMyLDE1LjI0MyBNMTcuMDk1LDE1LjI0M2g1LjQyNWMtMC4wNy0xLjgyMS0wLjM4NS0zLjU0LTAuODgyLTUuMDQ0aC00LjU0M1YxNS4yNDMgICAgIE0xMC4xMDcsMTUuMjQzaDUuNDc2di01LjA0NGgtNC41OTZDMTAuNDg5LDExLjcwMywxMC4xNzcsMTMuNDIyLDEwLjEwNywxNS4yNDMgTTQuOTU5LDE1LjI0M2gzLjYzNCAgICBjMC4wNjItMS44MTYsMC4zMzYtMy41MiwwLjc4NS01LjA0NEg2LjUyMUM1LjYzNCwxMS42OTUsNS4wNzgsMTMuNDExLDQuOTU5LD'+
			'E1LjI0MyBNMjMuMjQ1LDIxLjgxM2gyLjkwMyAgICBjMC44OTItMS41MDIsMS40NDctMy4yMTksMS41Ny01LjA2aC0zLjY4N0MyMy45NzIsMTguNTc2LDIzLjY5NiwyMC4yODQsMjMuMjQ1LDIxLjgxMyBNMTcuMDk1LDIxLjgxM2g0LjUzOSAgICBjMC41MDEtMS41MDgsMC44MTUtMy4yMzEsMC44ODYtNS4wNmgtNS40MjVWMjEuODEzIE0xMC45OTEsMjEuODEzaDQuNTkydi01LjA2aC01LjQ3NkMxMC4xNzcsMTguNTgyLDEwLjQ5MSwyMC4zMDYsMTAuOTkxLDIxLjgxMyAgICAgTTYuNTI4LDIxLjgxM2gyLjg1M2MtMC40NTEtMS41MjktMC43MjctMy4yMzctMC43ODgtNS4wNkg0Ljk1OUM1LjA4LDE4'+
			'LjU5NSw1LjYzNiwyMC4zMTIsNi41MjgsMjEuODEzIE0yMC45MTksMjYuNDQzICAgIGMxLjYxNC0wLjcwOSwzLjAzMy0xLjc4Myw0LjE1NS0zLjExN2gtMi4zNTRDMjIuMjMsMjQuNTMxLDIxLjYyMSwyNS41ODYsMjAuOTE5LDI2LjQ0MyBNMTcuMDk1LDI3LjMxICAgIGMxLjU1Ny0wLjM3NiwyLjk1NC0xLjg1NiwzLjk0MS0zLjk4M2gtMy45NDFWMjcuMzEgTTE1LjU4MywyNy4zMjJ2LTMuOTk2aC0zLjk5NEMxMi41ODgsMjUuNDc3LDE0LjAwNSwyNi45NjYsMTUuNTgzLDI3LjMyMiAgICAgTTExLjY3NiwyNi40MDdjLTAuNjg5LTAuODUyLTEuMjg4LTEuODkxLTEuNzctMy4wODFINy42MDRDOC43MD'+
			'QsMjQuNjM5LDEwLjA5NSwyNS42OTUsMTEuNjc2LDI2LjQwNyBNMTYuMzM4LDIuODc5ICAgIGMtNy4yMzQsMC0xMy4xMiw1Ljg4Ni0xMy4xMiwxMy4xMmMwLDcuMTUzLDUuODIxLDEzLjAzNywxMi45NzYsMTMuMTE1YzAuMDI5LDAuMDAzLDAuMDc0LDAuMDA3LDAuMTE5LDAuMDA3ICAgIGM3LjI2NS0wLjAwNywxMy4xNDYtNS44OTMsMTMuMTQ2LTEzLjEyMkMyOS40NTksOC43NjUsMjMuNTczLDIuODc5LDE2LjMzOCwyLjg3OUwxNi4zMzgsMi44Nzl6IE0xMS45MDEsOC40ODUgICAgYzAuOTM3LTEuODk3LDIuMTU5LTMuMTQyLDMuNDgxLTMuNTQ3djMuNTQ3SDExLjkwMUwxMS45MDEsOC40ODV6IE0x'+
			'Ny4yOTUsOC40ODVWNC45NTVjMS4zMDIsMC40MjIsMi41MDUsMS42NiwzLjQzLDMuNTMxSDE3LjI5NSAgICBMMTcuMjk1LDguNDg1eiBNMjIuODU5LDguNDg1Yy0wLjM2OS0wLjg4OC0wLjgtMS42ODgtMS4yODYtMi4zOTJjMS4xNTEsMC42MTIsMi4xOTcsMS40MjYsMy4wNzIsMi4zOTJIMjIuODU5TDIyLjg1OSw4LjQ4NXogICAgIE04LjAzMSw4LjQ4NWMwLjg1Ni0wLjk0MywxLjg3NS0xLjc0MSwyLjk5MS0yLjM0NmMtMC40NzQsMC42OTMtMC44OTUsMS40NzktMS4yNTUsMi4zNDZIOC4wMzFMOC4wMzEsOC40ODV6IE0yMy41MTUsMTAuMzk5ICAgIGgyLjUyN2MwLjgxNiwxLjQxLDEuMzE5LDMuMD'+
			'A5LDEuNDYxLDQuNjQ0aC0zLjI3OEMyNC4xNTYsMTMuNDA1LDIzLjkxOCwxMS44NDYsMjMuNTE1LDEwLjM5OUwyMy41MTUsMTAuMzk5eiBNMTcuMjk1LDEwLjM5OSAgICBoNC4xOTdjMC40NTcsMS40MjcsMC43MzgsMy4wMjUsMC44MTgsNC42NDRoLTUuMDE2VjEwLjM5OUwxNy4yOTUsMTAuMzk5eiBNMTEuMTMyLDEwLjM5OWg0LjI1djQuNjQ0aC01LjA2NiAgICBDMTAuMzk2LDEzLjQyMSwxMC42NzYsMTEuODIzLDExLjEzMiwxMC4zOTlMMTEuMTMyLDEwLjM5OXogTTYuNjM1LDEwLjM5OWgyLjQ3OGMtMC40MDQsMS40NS0wLjY0NCwzLjAxLTAuNzEyLDQuNjQ0SDUuMTc0ICAgIEM1LjMxMiwxMy40'+
			'MTUsNS44MTUsMTEuODE2LDYuNjM1LDEwLjM5OUw2LjYzNSwxMC4zOTl6IE0yNC4yMjUsMTYuOTU0aDMuMjc4Yy0wLjE0MiwxLjY1Ni0wLjYzNSwzLjIyMy0xLjQ2OSw0LjY1OWgtMi41MjMgICAgQzIzLjkxNywyMC4xNTcsMjQuMTU3LDE4LjU5MiwyNC4yMjUsMTYuOTU0TDI0LjIyNSwxNi45NTR6IE0xNy4yOTUsMTYuOTU0aDUuMDE2Yy0wLjA4LDEuNjI5LTAuMzYyLDMuMjMyLTAuODIyLDQuNjU5aC00LjE5MyAgICBWMTYuOTU0TDE3LjI5NSwxNi45NTR6IE0xMC4zMTYsMTYuOTU0aDUuMDY2djQuNjU5aC00LjI0N0MxMC42NzcsMjAuMTg1LDEwLjM5NiwxOC41ODEsMTAuMzE2LDE2Ljk1NEwxMC'+
			'4zMTYsMTYuOTU0eiAgICAgTTUuMTc1LDE2Ljk1NEg4LjRjMC4wNjksMS42MzksMC4zMDksMy4yMDQsMC43MTUsNC42NTlINi42NDNDNS44MDgsMjAuMTc2LDUuMzE0LDE4LjYxLDUuMTc1LDE2Ljk1NEw1LjE3NSwxNi45NTR6ICAgICBNMjIuODU0LDIzLjUyNmgxLjc3OWMtMC44NzYsMC45NjItMS45MTcsMS43NzEtMy4wNTksMi4zNzdDMjIuMDU5LDI1LjIwNCwyMi40ODcsMjQuNDA4LDIyLjg1NCwyMy41MjZMMjIuODU0LDIzLjUyNnogICAgIE0xNy4yOTUsMjMuNTI2aDMuNDI0Yy0wLjkyMywxLjg2NS0yLjEyNSwzLjA5OS0zLjQyNCwzLjUyVjIzLjUyNkwxNy4yOTUsMjMuNTI2eiBNMTEuOTA3'+
			'LDIzLjUyNmgzLjQ3NnYzLjUzNiAgICBDMTQuMDYzLDI2LjY1OCwxMi44NDMsMjUuNDE4LDExLjkwNywyMy41MjZMMTEuOTA3LDIzLjUyNnogTTguMDQzLDIzLjUyNmgxLjcyOWMwLjM1NywwLjg2LDAuNzc0LDEuNjQyLDEuMjQ3LDIuMzMyICAgIEM5LjkwNSwyNS4yNTQsOC44OTMsMjQuNDYxLDguMDQzLDIzLjUyNkw4LjA0MywyMy41MjZ6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._hsimage_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hsimage_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hsimage_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage_url.onmouseenter=function (e) {
			me._hsimage_url__img.style.visibility='hidden';
			me._hsimage_url__imgo.style.visibility='inherit';
			me.elementMouseOver['hsimage_url']=true;
		}
		me._hsimage_url.onmouseleave=function (e) {
			me._hsimage_url__img.style.visibility='inherit';
			me._hsimage_url__imgo.style.visibility='hidden';
			me.elementMouseOver['hsimage_url']=false;
		}
		me._hsimage_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._hsimage_url);
		el=me._hstext_url=document.createElement('div');
		els=me._hstext_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="hstext_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : -50px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background : rgba(255,255,255,0.705882);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._hstext_url.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hstext_url.ggUpdateText();
		player.addListener('changenode', function() {
			me._hstext_url.ggUpdateText();
		});
		el.appendChild(els);
		me._hstext_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hstext_url.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_url'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hstext_url.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hstext_url.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hstext_url.style.transition='opacity 500ms ease 0ms';
				if (me._hstext_url.ggCurrentLogicStateAlpha == 0) {
					me._hstext_url.style.visibility=me._hstext_url.ggVisible?'inherit':'hidden';
					me._hstext_url.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hstext_url.style.opacity == 0.0) { me._hstext_url.style.visibility="hidden"; } }, 505);
					me._hstext_url.style.opacity=0;
				}
			}
		}
		me._hstext_url.logicBlock_alpha();
		me._hstext_url.ggUpdatePosition=function (useTransition) {
		}
		me._ht_url.appendChild(me._hstext_url);
		me.elementMouseOver['ht_url']=false;
		me.elementMouseOver['hsimage_url']=false;
		me._hstext_url.logicBlock_alpha();
			me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 140px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),player._(me.hotspot.target));
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._hotspot_preview.logicBlock_visible();
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._hotspot_preview.logicBlock_visible();
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
			player.setActiveHotspot(null);
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage_node=document.createElement('div');
		els=me._hsimage_node__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgNDMzNjMpICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB2aWV3Qm94PSIwIDAgMz'+
			'IgMzIiIHk9IjBweCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgb3BhY2l0eT0iMC40Ij4KICA8Zz4KICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4ICAgIGMwLTEuMDQ4LTAuODQ5LTEuODk5LTEuODk3LTEuODk5Yy0xLjA0OSwwLTEuODk3LDAuODUxLTEuODk3LDEuODk5djEuOTg2'+
			'Yy0zLjM1MiwwLjczNS01Ljk4MywzLjM2OS02LjcyLDYuNzE3SDUuMzk4ICAgIEM0LjM0OCwxNC4xMDEsMy41LDE0Ljk1MSwzLjUsMTZzMC44NTEsMS44OTYsMS44OTksMS44OTZoMS45ODVjMC43MzUsMy4zNSwzLjM2OCw1Ljk4NCw2LjcyLDYuNzE5djEuOTg5ICAgIGMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2ICAgIGMxLjA0OSwwLDEuODk3LTAuODQ4LDEuODk3LTEuODk2QzI4LjUwMSwxNC45NTEsMjcuNjUyLDE0LjEwMywyNi42MDQsMT'+
			'QuMTAzeiBNMTYsMjEuMDI5Yy0yLjc3Ny0wLjAwNS01LjAyMy0yLjI1MS01LjAzLTUuMDI2ICAgIHYtMC4wMDFjMC0wLjAwMSwwLTAuMDAxLDAtMC4wMDNjMC4wMDYtMi43NzcsMi4yNTMtNS4wMjIsNS4wMy01LjAyNWMyLjc3NywwLjAwNSw1LjAyNSwyLjI1MSw1LjAyNiw1LjAyOGgwLjAwMiAgICBDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4KICA8L2c+CiAgPGNpcmNsZSByPSIyLjEwOSIgZmlsbD0iI0ZGRkZGRiIgY3g9IjE2LjAwMiIgY3k9IjE2Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0'+
			'cm9rZT0iIzAwMDAwMCIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4ICAgIGMwLTEuMDQ4LTAuODQ5LTEuODk5LTEuODk3LTEuODk5Yy0xLjA0OSwwLTEuODk3LDAuODUxLTEuODk3LDEuODk5djEuOTg2Yy0zLjM1MiwwLjczNS01Ljk4MywzLjM2OS02LjcyLDYuNzE3SDUuMzk4ICAgIEM0LjM0OCwxNC4xMDEsMy41LDE0Ljk1MSwzLjUsMTZzMC44NTEsMS44OTYsMS44OTksMS44OTZoMS45ODVjMC43MzUsMy4zNSwzLjM2OCw1Ljk4NCw2LjcyLDYuNzE5djEuOTg5ICAgIGMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuOD'+
			'k2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2ICAgIGMxLjA0OSwwLDEuODk3LTAuODQ4LDEuODk3LTEuODk2QzI4LjUwMSwxNC45NTEsMjcuNjUyLDE0LjEwMywyNi42MDQsMTQuMTAzeiBNMTYsMjEuMDI5Yy0yLjc3Ny0wLjAwNS01LjAyMy0yLjI1MS01LjAzLTUuMDI2ICAgIHYtMC4wMDFjMC0wLjAwMSwwLTAuMDAxLDAtMC4wMDNjMC4wMDYtMi43NzcsMi4yNTMtNS4wMjIsNS4wMy01LjAyNWMyLjc3NywwLjAwNSw1LjAyNSwyLjI1MSw1LjAyNiw1LjAyOGgwLjAwMiAgICBDMjEuMDI1LDE4Ljc3'+
			'OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4KICA8L2c+CiAgPGNpcmNsZSByPSIyLjEwOSIgZmlsbD0iI0ZGRkZGRiIgY3g9IjE2LjAwMiIgY3k9IjE2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._hsimage_node__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hsimage_node__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgNDMzNjMpICAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIGhlaWdodD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgYmFzZVByb2ZpbGU9ImJhc2ljIiB2aWV3Qm94PSIwIDAgMz'+
			'IgMzIiIHk9IjBweCIgeD0iMHB4IiBpZD0iTGF5ZXJfMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMnB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGcgb3BhY2l0eT0iMC40Ij4KICA8Zz4KICAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4ICAgIGMwLTEuMDQ4LTAuODQ5LTEuODk5LTEuODk3LTEuODk5Yy0xLjA0OSwwLTEuODk3LDAuODUxLTEuODk3LDEuODk5djEuOTg2'+
			'Yy0zLjM1MiwwLjczNS01Ljk4MywzLjM2OS02LjcyLDYuNzE3SDUuMzk4ICAgIEM0LjM0OCwxNC4xMDEsMy41LDE0Ljk1MSwzLjUsMTZzMC44NTEsMS44OTYsMS44OTksMS44OTZoMS45ODVjMC43MzUsMy4zNSwzLjM2OCw1Ljk4NCw2LjcyLDYuNzE5djEuOTg5ICAgIGMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuODk2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2ICAgIGMxLjA0OSwwLDEuODk3LTAuODQ4LDEuODk3LTEuODk2QzI4LjUwMSwxNC45NTEsMjcuNjUyLDE0LjEwMywyNi42MDQsMT'+
			'QuMTAzeiBNMTYsMjEuMDI5Yy0yLjc3Ny0wLjAwNS01LjAyMy0yLjI1MS01LjAzLTUuMDI2ICAgIHYtMC4wMDFjMC0wLjAwMSwwLTAuMDAxLDAtMC4wMDNjMC4wMDYtMi43NzcsMi4yNTMtNS4wMjIsNS4wMy01LjAyNWMyLjc3NywwLjAwNSw1LjAyNSwyLjI1MSw1LjAyNiw1LjAyOGgwLjAwMiAgICBDMjEuMDI1LDE4Ljc3OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4KICA8L2c+CiAgPGNpcmNsZSByPSIyLjEwOSIgZmlsbD0iI0ZGRkZGRiIgY3g9IjE2LjAwMiIgY3k9IjE2Ii8+CiA8L2c+CiA8Zz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0'+
			'cm9rZT0iIzAwMDAwMCIgZD0iTTI2LjYwNCwxNC4xMDNoLTEuOTg5Yy0wLjczNC0zLjM1LTMuMzY4LTUuOTgxLTYuNzE2LTYuNzE3VjUuMzk4ICAgIGMwLTEuMDQ4LTAuODQ5LTEuODk5LTEuODk3LTEuODk5Yy0xLjA0OSwwLTEuODk3LDAuODUxLTEuODk3LDEuODk5djEuOTg2Yy0zLjM1MiwwLjczNS01Ljk4MywzLjM2OS02LjcyLDYuNzE3SDUuMzk4ICAgIEM0LjM0OCwxNC4xMDEsMy41LDE0Ljk1MSwzLjUsMTZzMC44NTEsMS44OTYsMS44OTksMS44OTZoMS45ODVjMC43MzUsMy4zNSwzLjM2OCw1Ljk4NCw2LjcyLDYuNzE5djEuOTg5ICAgIGMwLDEuMDQ2LDAuODQ4LDEuODk2LDEuODk3LDEuOD'+
			'k2YzEuMDQ4LDAsMS44OTYtMC44NTEsMS44OTYtMS44OTZ2LTEuOTg5YzMuMzUxLTAuNzM2LDUuOTg0LTMuMzY5LDYuNzE5LTYuNzE5aDEuOTg2ICAgIGMxLjA0OSwwLDEuODk3LTAuODQ4LDEuODk3LTEuODk2QzI4LjUwMSwxNC45NTEsMjcuNjUyLDE0LjEwMywyNi42MDQsMTQuMTAzeiBNMTYsMjEuMDI5Yy0yLjc3Ny0wLjAwNS01LjAyMy0yLjI1MS01LjAzLTUuMDI2ICAgIHYtMC4wMDFjMC0wLjAwMSwwLTAuMDAxLDAtMC4wMDNjMC4wMDYtMi43NzcsMi4yNTMtNS4wMjIsNS4wMy01LjAyNWMyLjc3NywwLjAwNSw1LjAyNSwyLjI1MSw1LjAyNiw1LjAyOGgwLjAwMiAgICBDMjEuMDI1LDE4Ljc3'+
			'OCwxOC43NzcsMjEuMDI0LDE2LDIxLjAyOXoiLz4KICA8L2c+CiAgPGNpcmNsZSByPSIyLjEwOSIgZmlsbD0iI0ZGRkZGRiIgY3g9IjE2LjAwMiIgY3k9IjE2Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._hsimage_node__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hsimage_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hsimage_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage_node.onmouseenter=function (e) {
			me._hsimage_node__img.style.visibility='hidden';
			me._hsimage_node__imgo.style.visibility='inherit';
			me.elementMouseOver['hsimage_node']=true;
		}
		me._hsimage_node.onmouseleave=function (e) {
			me._hsimage_node__img.style.visibility='inherit';
			me._hsimage_node__imgo.style.visibility='hidden';
			me.elementMouseOver['hsimage_node']=false;
		}
		me._hsimage_node.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hsimage_node);
		el=me._hotspot_preview=document.createElement('div');
		el.ggId="hotspot_preview";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 103px;';
		hs+='left : -73px;';
		hs+='position : absolute;';
		hs+='top : -128px;';
		hs+='visibility : hidden;';
		hs+='width : 153px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_preview.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_preview.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hotspot_preview.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hotspot_preview.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hotspot_preview.style.transition='';
				if (me._hotspot_preview.ggCurrentLogicStateVisible == 0) {
					me._hotspot_preview.style.visibility=(Number(me._hotspot_preview.style.opacity)>0||!me._hotspot_preview.style.opacity)?'inherit':'hidden';
					me._hotspot_preview.ggVisible=true;
				}
				else {
					me._hotspot_preview.style.visibility="hidden";
					me._hotspot_preview.ggVisible=false;
				}
			}
		}
		me._hotspot_preview.logicBlock_visible();
		me._hotspot_preview.ggUpdatePosition=function (useTransition) {
		}
		el=me._preview_picture_frame_=document.createElement('div');
		el.ggId="preview_picture_frame ";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,255,255,0.784314);';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 149px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._preview_picture_frame_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._preview_picture_frame_.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_picture_frame_);
		el=me._preview_nodeimage=document.createElement('div');
		els=me._preview_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		if (nodeId) els.setAttribute('src',basePath + "images/preview_nodeimage_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Preview NodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._preview_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._preview_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._preview_nodeimage);
		el=me._tooltip_bg=document.createElement('div');
		el.ggId="tooltip_bg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 77px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._tooltip_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip_bg.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip_bg);
		el=me._tooltip_drop_shadow=document.createElement('div');
		els=me._tooltip_drop_shadow__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_drop_shadow";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(0,0,0,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 80px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip_drop_shadow.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_drop_shadow.ggUpdateText();
		player.addListener('changenode', function() {
			me._tooltip_drop_shadow.ggUpdateText();
		});
		el.appendChild(els);
		me._tooltip_drop_shadow.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip_drop_shadow.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip_drop_shadow);
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 79px;';
		hs+='visibility : inherit;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.hotspot.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip.ggUpdateText();
		player.addListener('changenode', function() {
			me._tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._tooltip);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLm'+
			'Fkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6YT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZVNWR1ZpZXdlckV4dGVuc2lvbnMvMy4wLyIgdmlld0JveD0iLTM3MjIgLTI2MDYgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHk9IjBweCIgeD0iMHB4IiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNz'+
			'E3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgz'+
			'N3oiLz4KICAgPC9nPgogICA8ZyBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Lj'+
			'k1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgIDxwYXRoIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43'+
			'MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC'+
			'43ODcsOC43ODdsLTIuMjkxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYt'+
			'MC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBkPSJNLTM2OTUuNDczLTI1OTguMTQ2ICAgICBjLTAuNTE5LTAuNTE5LTEuMzYxLTAuNTE5LTEuODc5LDBsLTguNzg3LDguNzg3bC0yLjI5MS0yLjI0M2MtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLj'+
			'AyICAgICBjLTAuNTEzLDAuNTI1LTAuNTA0LDEuMzY3LDAuMDIxLDEuODhsMy4yMywzLjE2M2MwLjI1OSwwLjI1MywwLjU5NCwwLjM3OSwwLjkzLDAuMzc5YzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNzE3ICAgICBDLTM2OTQuOTU0LTI1OTYuNzg1LTM2OTQuOTU0LTI1OTcuNjI2LTM2OTUuNDczLTI1OTguMTQ2eiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjIiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNLTM2OTkuOTYtMjU4My44MzcgICAgIGgtMTIuMzI1di0xMi4z'+
			'MjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4Yy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOSAgICAgYzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuMiIgc3Ryb2tlPSIjMUExNzFCIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
			'c+Cg==';
		me._checkmark_tick__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 110px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 36px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style.transition='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.logicBlock_visible();
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_preview.appendChild(me._checkmark_tick);
		me._ht_node.appendChild(me._hotspot_preview);
		me.elementMouseOver['ht_node']=false;
		me.elementMouseOver['hsimage_node']=false;
		me._hotspot_preview.logicBlock_visible();
		me._checkmark_tick.logicBlock_visible();
			me.ggEvent_changenode=function() {
				me._checkmark_tick.logicBlock_visible();
			};
			me.ggEvent_changevisitednodes=function() {
				me._checkmark_tick.logicBlock_visible();
			};
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_url') {
				hotspot.skinid = 'ht_url';
				hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_info') {
				hotspot.skinid = 'ht_info';
				hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_image') {
				hotspot.skinid = 'ht_image';
				hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_file') {
				hotspot.skinid = 'ht_video_file';
				hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_url') {
				hotspot.skinid = 'ht_video_url';
				hsinst = new SkinHotspotClass_ht_video_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_video_vimeo') {
				hotspot.skinid = 'ht_video_vimeo';
				hsinst = new SkinHotspotClass_ht_video_vimeo(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_video_youtube';
				hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._up.ggUpdateConditionTimer();
		me._down.ggUpdateConditionTimer();
		me._left.ggUpdateConditionTimer();
		me._right.ggUpdateConditionTimer();
		me._zoomin.ggUpdateConditionTimer();
		me._zoomout.ggUpdateConditionTimer();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style.transform=hs;
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};