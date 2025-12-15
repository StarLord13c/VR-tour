// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: simplex_v5.ggsk
// Generated 2025-12-15T16:08:19

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
		el.ggDx=-2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 9px;';
		hs+='height : 76px;';
		hs+='left : calc(50% - ((402px + 0px) / 2) - 2px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 402px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmNmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDUwNS41LDMzMS41IEMgNTE5LjY3NywzMzAuMzkxIDUzMS44NDMsMzM0LjcyNCA1NDIsMzQ0LjVDIDU5OS42MDEsNDI0LjAzNCA2NTcuOTM1LDUwMy4wMzQgNzE3LDU4MS41QyA3MjcuMjM5LDYwNC4wNDkgNzIyLjQwNSw2MjIuNTQ5IDcwMi41LDYzN0MgNjc2LjA5OCw2NDcuODY3IDY1Ni4yNjUsNjQwLjcgNjQzLDYxNS41QyA1OTkuMzMzLDU1Ni41IDU1NS42NjcsNDk3LjUgNTEyLDQzOC41QyA0NjQuMzc4LDUwMi45MTEgNDE2Ljg3OCw1NjcuNDExIDM2OS41LDYzMkMgMzQ5LjY1NCw2NDYuNjUzIDMzMC40ODgsNjQ1LjgxOSAzMTIsNjI5Lj'+
			'VDIDI5OS4yNTksNjEzLjE5NiAyOTguMjU5LDU5Ni4xOTYgMzA5LDU3OC41QyAzNjcuMTU1LDUwMC44NTYgNDI0LjgyMSw0MjIuODU2IDQ4MiwzNDQuNUMgNDg4LjY2NywzMzcuOTIgNDk2LjUsMzMzLjU4NiA1MDUuNSwzMzEuNSBaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._up__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._up__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmNmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDUwNS41LDMzMS41IEMgNTE5LjY3NywzMzAuMzkxIDUzMS44NDMsMzM0LjcyNCA1NDIsMzQ0LjVDIDU5OS42MDEsNDI0LjAzNCA2NTcuOTM1LDUwMy4wMzQgNzE3LDU4MS41QyA3MjcuMjM5LDYwNC4wNDkgNzIyLjQwNSw2MjIuNTQ5IDcwMi41LDYzN0MgNjc2LjA5OCw2NDcuODY3IDY1Ni4yNjUsNjQwLjcgNjQzLDYxNS41QyA1OTkuMzMzLDU1Ni41IDU1NS42NjcsNDk3LjUgNTEyLDQzOC41QyA0NjQuMzc4LDUwMi45MTEgNDE2Ljg3OCw1NjcuNDExIDM2OS41LDYzMkMgMzQ5LjY1NCw2NDYuNjUzIDMzMC40ODgsNjQ1LjgxOSAzMTIsNjI5Lj'+
			'VDIDI5OS4yNTksNjEzLjE5NiAyOTguMjU5LDU5Ni4xOTYgMzA5LDU3OC41QyAzNjcuMTU1LDUwMC44NTYgNDI0LjgyMSw0MjIuODU2IDQ4MiwzNDQuNUMgNDg4LjY2NywzMzcuOTIgNDk2LjUsMzMzLjU4NiA1MDUuNSwzMzEuNSBaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._up__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmNmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDMzNS41LDM4MS41IEMgMzQ5LjY3NywzODAuMzkxIDM2MS44NDMsMzg0LjcyNCAzNzIsMzk0LjVDIDQxOC40MjIsNDU4LjM0NCA0NjUuMDg5LDUyMi4wMTEgNTEyLDU4NS41QyA1NTcuOTExLDUyMy4zNDQgNjAzLjU3OCw0NjEuMDExIDY0OSwzOTguNUMgNjYzLjgwNCwzODEuMDEgNjgxLjYzNywzNzcuMTc2IDcwMi41LDM4N0MgNzIwLjgxNiwzOTkuOTUxIDcyNi4zMTYsNDE3LjExOCA3MTksNDM4LjVDIDY2My4yNDQsNTE0LjM0NSA2MDcuMjQ0LDU5MC4wMTEgNTUxLDY2NS41QyA1MzcuNzM1LDY5MC43IDUxNy45MDIsNjk3Ljg2NyA0OTEuNS'+
			'w2ODdDIDQ4OC4zMzMsNjg0LjUgNDg1LjE2Nyw2ODIgNDgyLDY3OS41QyA0MjQuNDM4LDU5OS45MzcgMzY2LjEwNSw1MjAuOTM3IDMwNyw0NDIuNUMgMjk2Ljc2MSw0MTkuOTUxIDMwMS41OTUsNDAxLjQ1MSAzMjEuNSwzODdDIDMyNi4xNTksMzg0Ljg0MiAzMzAuODI1LDM4My4wMDkgMzM1LjUsMzgxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._down__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._down__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmNmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDMzNS41LDM4MS41IEMgMzQ5LjY3NywzODAuMzkxIDM2MS44NDMsMzg0LjcyNCAzNzIsMzk0LjVDIDQxOC40MjIsNDU4LjM0NCA0NjUuMDg5LDUyMi4wMTEgNTEyLDU4NS41QyA1NTcuOTExLDUyMy4zNDQgNjAzLjU3OCw0NjEuMDExIDY0OSwzOTguNUMgNjYzLjgwNCwzODEuMDEgNjgxLjYzNywzNzcuMTc2IDcwMi41LDM4N0MgNzIwLjgxNiwzOTkuOTUxIDcyNi4zMTYsNDE3LjExOCA3MTksNDM4LjVDIDY2My4yNDQsNTE0LjM0NSA2MDcuMjQ0LDU5MC4wMTEgNTUxLDY2NS41QyA1MzcuNzM1LDY5MC43IDUxNy45MDIsNjk3Ljg2NyA0OTEuNS'+
			'w2ODdDIDQ4OC4zMzMsNjg0LjUgNDg1LjE2Nyw2ODIgNDgyLDY3OS41QyA0MjQuNDM4LDU5OS45MzcgMzY2LjEwNSw1MjAuOTM3IDMwNyw0NDIuNUMgMjk2Ljc2MSw0MTkuOTUxIDMwMS41OTUsNDAxLjQ1MSAzMjEuNSwzODdDIDMyNi4xNTksMzg0Ljg0MiAzMzAuODI1LDM4My4wMDkgMzM1LjUsMzgxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._down__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 38px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDYxNS41LDMxMS41IEMgNjQ2Ljk3MywzMTEuNDczIDY2Mi40NzMsMzI3LjEzOSA2NjIsMzU4LjVDIDY1OS41NzUsMzcwLjg2OCA2NTMuMDc1LDM4MC4zNjggNjQyLjUsMzg3QyA1NzYuODI4LDQyOC4xNjcgNTExLjQ5NSw0NjkuODM0IDQ0Ni41LDUxMkMgNTE1LjI1NSw1NTUuNzkzIDU4My43NTUsNTk5Ljk1OSA2NTIsNjQ0LjVDIDY2Niw2NjIuODMzIDY2Niw2ODEuMTY3IDY1Miw2OTkuNUMgNjM2Ljk0NSw3MTMuNzEyIDYyMC4xMTIsNzE2LjIxMiA2MDEuNSw3MDdDIDUxNy4zMzYsNjUyLjc1IDQzMy4wMDMsNTk4Ljc1IDM0OC41LDU0NUMgMz'+
			'MxLjAxLDUzMC4xOTYgMzI3LjE3Niw1MTIuMzYzIDMzNyw0OTEuNUMgMzM5LjgwNCw0ODYuMzk2IDM0My42MzcsNDgyLjIzIDM0OC41LDQ3OUMgNDMzLjAwMyw0MjUuMjUgNTE3LjMzNiwzNzEuMjUgNjAxLjUsMzE3QyA2MDYuMTU5LDMxNC44NDIgNjEwLjgyNSwzMTMuMDA5IDYxNS41LDMxMS41IFoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._left__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._left__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDYxNS41LDMxMS41IEMgNjQ2Ljk3MywzMTEuNDczIDY2Mi40NzMsMzI3LjEzOSA2NjIsMzU4LjVDIDY1OS41NzUsMzcwLjg2OCA2NTMuMDc1LDM4MC4zNjggNjQyLjUsMzg3QyA1NzYuODI4LDQyOC4xNjcgNTExLjQ5NSw0NjkuODM0IDQ0Ni41LDUxMkMgNTE1LjI1NSw1NTUuNzkzIDU4My43NTUsNTk5Ljk1OSA2NTIsNjQ0LjVDIDY2Niw2NjIuODMzIDY2Niw2ODEuMTY3IDY1Miw2OTkuNUMgNjM2Ljk0NSw3MTMuNzEyIDYyMC4xMTIsNzE2LjIxMiA2MDEuNSw3MDdDIDUxNy4zMzYsNjUyLjc1IDQzMy4wMDMsNTk4Ljc1IDM0OC41LDU0NUMgMz'+
			'MxLjAxLDUzMC4xOTYgMzI3LjE3Niw1MTIuMzYzIDMzNyw0OTEuNUMgMzM5LjgwNCw0ODYuMzk2IDM0My42MzcsNDgyLjIzIDM0OC41LDQ3OUMgNDMzLjAwMyw0MjUuMjUgNTE3LjMzNiwzNzEuMjUgNjAxLjUsMzE3QyA2MDYuMTU5LDMxNC44NDIgNjEwLjgyNSwzMTMuMDA5IDYxNS41LDMxMS41IFoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._left__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM5NS41LDMxMS41IEMgNDA1LjA1NiwzMTAuNjM5IDQxNC4wNTYsMzEyLjQ3MyA0MjIuNSwzMTdDIDUwNi4zMjQsMzcxLjc0OSA1OTAuNjU4LDQyNS43NDkgNjc1LjUsNDc5QyA2OTIuOTksNDkzLjgwNCA2OTYuODI0LDUxMS42MzcgNjg3LDUzMi41QyA2ODQuMTk2LDUzNy42MDQgNjgwLjM2Myw1NDEuNzcgNjc1LjUsNTQ1QyA1OTAuNjU4LDU5OC4yNTEgNTA2LjMyNCw2NTIuMjUxIDQyMi41LDcwN0MgNDAzLjg4OCw3MTYuMjEyIDM4Ny4wNTUsNzEzLjcxMiAzNzIsNjk5LjVDIDM1OCw2ODEuMTY3IDM1OCw2NjIuODMzIDM3Miw2NDQuNUMgND'+
			'QwLjIzMSw1OTkuOTM5IDUwOC43MzEsNTU1Ljc3MyA1NzcuNSw1MTJDIDUwOC43MzEsNDY4LjIyNyA0NDAuMjMxLDQyNC4wNjEgMzcyLDM3OS41QyAzNTcuMzQ3LDM1OS42NTQgMzU4LjE4MSwzNDAuNDg4IDM3NC41LDMyMkMgMzgwLjc2NywzMTYuODY3IDM4Ny43NjcsMzEzLjM2NyAzOTUuNSwzMTEuNSBaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._right__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._right__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM5NS41LDMxMS41IEMgNDA1LjA1NiwzMTAuNjM5IDQxNC4wNTYsMzEyLjQ3MyA0MjIuNSwzMTdDIDUwNi4zMjQsMzcxLjc0OSA1OTAuNjU4LDQyNS43NDkgNjc1LjUsNDc5QyA2OTIuOTksNDkzLjgwNCA2OTYuODI0LDUxMS42MzcgNjg3LDUzMi41QyA2ODQuMTk2LDUzNy42MDQgNjgwLjM2Myw1NDEuNzcgNjc1LjUsNTQ1QyA1OTAuNjU4LDU5OC4yNTEgNTA2LjMyNCw2NTIuMjUxIDQyMi41LDcwN0MgNDAzLjg4OCw3MTYuMjEyIDM4Ny4wNTUsNzEzLjcxMiAzNzIsNjk5LjVDIDM1OCw2ODEuMTY3IDM1OCw2NjIuODMzIDM3Miw2NDQuNUMgND'+
			'QwLjIzMSw1OTkuOTM5IDUwOC43MzEsNTU1Ljc3MyA1NzcuNSw1MTJDIDUwOC43MzEsNDY4LjIyNyA0NDAuMjMxLDQyNC4wNjEgMzcyLDM3OS41QyAzNTcuMzQ3LDM1OS42NTQgMzU4LjE4MSwzNDAuNDg4IDM3NC41LDMyMkMgMzgwLjc2NywzMTYuODY3IDM4Ny43NjcsMzEzLjM2NyAzOTUuNSwzMTEuNSBaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._right__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : 50px;';
		hs+='position : absolute;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
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
		me._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._zoomin__imgo.setAttribute('src',basePath + 'images/zoomin__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : 93px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
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
		me._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._zoomout__imgo.setAttribute('src',basePath + 'images/zoomout__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : 142px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
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
		hs+='height : 55px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
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
		me._button_stop_auto_rotate__img.setAttribute('src',basePath + 'images/button_stop_auto_rotate.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_stop_auto_rotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._button_stop_auto_rotate__imgo.setAttribute('src',basePath + 'images/button_stop_auto_rotate__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button stop auto rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 55px;';
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
		me._button_start_auto_rotate__img.setAttribute('src',basePath + 'images/button_start_auto_rotate.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_start_auto_rotate__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._button_start_auto_rotate__imgo.setAttribute('src',basePath + 'images/button_start_auto_rotate__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button start auto rotate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 55px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 55px;';
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
		me._info__img.setAttribute('src',basePath + 'images/info.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._info__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._info__imgo.setAttribute('src',basePath + 'images/info__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 72px;';
		hs+='left : 243px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 72px;';
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
		hs+='height : 48px;';
		hs+='left : 305px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
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
		me._movemode_drag__img.setAttribute('src',basePath + 'images/movemode_drag.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._movemode_drag__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._movemode_drag__imgo.setAttribute('src',basePath + 'images/movemode_drag__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="movemode_drag";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -7px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : hidden;';
		hs+='width : 64px;';
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
		me._movemode_continuous__img.setAttribute('src',basePath + 'images/movemode_continuous.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._movemode_continuous__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._movemode_continuous__imgo.setAttribute('src',basePath + 'images/movemode_continuous__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="movemode_continuous";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 64px;';
		hs+='left : -7px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
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
		hs+='height : 48px;';
		hs+='left : 355px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDMzNS41LDMwMS41IEMgMzg0LjMzMywzMDIuNzk5IDQzMy4xNjcsMzAyLjc5OSA0ODIsMzAxLjVDIDQ5My44MDksMzAxLjc2NiA1MDMuODA5LDMwNi4wOTkgNTEyLDMxNC41QyA1MTguNDYyLDMwNy44NTEgNTI2LjI5NiwzMDMuNjg0IDUzNS41LDMwMkMgNTg2LjUsMzAxLjMzMyA2MzcuNSwzMDEuMzMzIDY4OC41LDMwMkMgNzA3LDMwNS44MzMgNzE4LjE2NywzMTcgNzIyLDMzNS41QyA3MjIuNjY3LDM4Ni41IDcyMi42NjcsNDM3LjUgNzIyLDQ4OC41QyA3MjAuMzE2LDQ5Ny43MDQgNzE2LjE0OSw1MDUuNTM4IDcwOS41LDUxMkMgNzE3LjkwMS'+
			'w1MjAuMTkxIDcyMi4yMzQsNTMwLjE5MSA3MjIuNSw1NDJDIDcyMS4xNjcsNTg4LjY2NyA3MjEuMTY3LDYzNS4zMzMgNzIyLjUsNjgyQyA3MjAuMzMzLDcwNi44MzMgNzA2LjgzMyw3MjAuMzMzIDY4Miw3MjIuNUMgNjM1LjMzMyw3MjEuMTY3IDU4OC42NjcsNzIxLjE2NyA1NDIsNzIyLjVDIDUzMC4xOTEsNzIyLjIzNCA1MjAuMTkxLDcxNy45MDEgNTEyLDcwOS41QyA1MDUuNTM4LDcxNi4xNDkgNDk3LjcwNCw3MjAuMzE2IDQ4OC41LDcyMkMgNDM3LjUsNzIyLjY2NyAzODYuNSw3MjIuNjY3IDMzNS41LDcyMkMgMzE3LDcxOC4xNjcgMzA1LjgzMyw3MDcgMzAyLDY4OC41QyAzMDEuMzMzLDYzNy41'+
			'IDMwMS4zMzMsNTg2LjUgMzAyLDUzNS41QyAzMDMuNjg0LDUyNi4yOTYgMzA3Ljg1MSw1MTguNDYyIDMxNC41LDUxMkMgMzA2LjA5OSw1MDMuODA5IDMwMS43NjYsNDkzLjgwOSAzMDEuNSw0ODJDIDMwMi44MzMsNDM1LjMzMyAzMDIuODMzLDM4OC42NjcgMzAxLjUsMzQyQyAzMDMuMzYzLDMyMC4zODkgMzE0LjY5NiwzMDYuODg5IDMzNS41LDMwMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNTQ4LjUsMzgyLjUgQyA1NzkuNSwzODIuNSA2MTAuNSwzODIuNSA2NDEuNSwzODIuNUMgNjQxLjUsNDEzLjUgNjQxLjUsNDQ0LjUgNj'+
			'QxLjUsNDc1LjVDIDY0MC4zOTEsNDg5LjY3NyA2NDQuNzI0LDUwMS44NDMgNjU0LjUsNTEyQyA2NDcuOTIsNTE4LjY2NyA2NDMuNTg2LDUyNi41IDY0MS41LDUzNS41QyA2NDAuNTAyLDU3MC4zMjkgNjQwLjE2OCw2MDUuMzI5IDY0MC41LDY0MC41QyA2MDUuMzI5LDY0MC4xNjggNTcwLjMyOSw2NDAuNTAyIDUzNS41LDY0MS41QyA1MjYuNSw2NDMuNTg2IDUxOC42NjcsNjQ3LjkyIDUxMiw2NTQuNUMgNTAxLjg0Myw2NDQuNzI0IDQ4OS42NzcsNjQwLjM5MSA0NzUuNSw2NDEuNUMgNDQ0LjUsNjQxLjUgNDEzLjUsNjQxLjUgMzgyLjUsNjQxLjVDIDM4Mi41LDYxMC41IDM4Mi41LDU3OS41IDM4Mi41'+
			'LDU0OC41QyAzODMuNjA5LDUzNC4zMjMgMzc5LjI3Niw1MjIuMTU3IDM2OS41LDUxMkMgMzc2LjA4LDUwNS4zMzMgMzgwLjQxNCw0OTcuNSAzODIuNSw0ODguNUMgMzgzLjQ5OCw0NTMuNjcxIDM4My44MzIsNDE4LjY3MSAzODMuNSwzODMuNUMgNDE4LjY3MSwzODMuODMyIDQ1My42NzEsMzgzLjQ5OCA0ODguNSwzODIuNUMgNDk3LjUsMzgwLjQxNCA1MDUuMzMzLDM3Ni4wOCA1MTIsMzY5LjVDIDUyMi4xNTcsMzc5LjI3NiA1MzQuMzIzLDM4My42MDkgNTQ4LjUsMzgyLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iIzM3Nzk5NyIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA1NDguNSwzOD'+
			'IuNSBDIDU3OS42NjIsMzgxLjUwMiA2MTAuOTk2LDM4MS4xNjggNjQyLjUsMzgxLjVDIDY0Mi44MzIsNDEzLjAwNCA2NDIuNDk4LDQ0NC4zMzggNjQxLjUsNDc1LjVDIDY0MS41LDQ0NC41IDY0MS41LDQxMy41IDY0MS41LDM4Mi41QyA2MTAuNSwzODIuNSA1NzkuNSwzODIuNSA1NDguNSwzODIuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjMzc3YTk3IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ4OC41LDM4Mi41IEMgNDUzLjY3MSwzODMuNDk4IDQxOC42NzEsMzgzLjgzMiAzODMuNSwzODMuNUMgMzgzLjgzMiw0MTguNjcxIDM4My40OTgsNDUzLjY3MSAzODIuNSw0ODguNUMgMzgy'+
			'LjUsNDUzLjE2NyAzODIuNSw0MTcuODMzIDM4Mi41LDM4Mi41QyA0MTcuODMzLDM4Mi41IDQ1My4xNjcsMzgyLjUgNDg4LjUsMzgyLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iIzM3N2E5NyIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA2NDEuNSw1MzUuNSBDIDY0MS41LDU3MC44MzMgNjQxLjUsNjA2LjE2NyA2NDEuNSw2NDEuNUMgNjA2LjE2Nyw2NDEuNSA1NzAuODMzLDY0MS41IDUzNS41LDY0MS41QyA1NzAuMzI5LDY0MC41MDIgNjA1LjMyOSw2NDAuMTY4IDY0MC41LDY0MC41QyA2NDAuMTY4LDYwNS4zMjkgNjQwLjUwMiw1NzAuMzI5IDY0MS41LDUzNS41IFoiLz4KIDwvZz4KID'+
			'xnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzgyLjUsNTQ4LjUgQyAzODIuNSw1NzkuNSAzODIuNSw2MTAuNSAzODIuNSw2NDEuNUMgNDEzLjUsNjQxLjUgNDQ0LjUsNjQxLjUgNDc1LjUsNjQxLjVDIDQ0NC4zMzgsNjQyLjQ5OCA0MTMuMDA0LDY0Mi44MzIgMzgxLjUsNjQyLjVDIDM4MS4xNjgsNjEwLjk5NiAzODEuNTAyLDU3OS42NjIgMzgyLjUsNTQ4LjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_normalscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_normalscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmVmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNzQ1LjUsMj'+
			'UzLjUgQyA3NDQuNSwyNTMuNSA3NDMuNSwyNTMuNSA3NDIuNSwyNTMuNUMgNzQxLjM5MSwyNTIuNzEgNzQwLjA1OCwyNTIuMjEgNzM4LjUsMjUyQyA2ODkuMTY3LDI1MS4zMzMgNjM5LjgzMywyNTEuMzMzIDU5MC41LDI1MkMgNTY5LjU4OSwyNTcuMTM4IDU1OC4yNTYsMjcwLjQ3MSA1NTYuNSwyOTJDIDU1OC4yNTYsMzEzLjUyOSA1NjkuNTg5LDMyNi44NjIgNTkwLjUsMzMyQyA1OTQuODIxLDMzMi40OTkgNTk5LjE1NCwzMzIuNjY2IDYwMy41LDMzMi41QyA2MzIuODMzLDMzMi41IDY2Mi4xNjcsMzMyLjUgNjkxLjUsMzMyLjVDIDY5MS41LDM2MS44MzMgNjkxLjUsMzkxLjE2NyA2OTEuNSw0MjAu'+
			'NUMgNjkwLjAyNyw0NDAuMzk5IDY5OC4wMjcsNDU0Ljg5OSA3MTUuNSw0NjRDIDczNi44ODIsNDcxLjMxNiA3NTQuMDQ5LDQ2NS44MTYgNzY3LDQ0Ny41QyA3NjkuMjYxLDQ0My4wNSA3NzAuOTI4LDQzOC4zODMgNzcyLDQzMy41QyA3NzIuNjY3LDM4NC4xNjcgNzcyLjY2NywzMzQuODMzIDc3MiwyODUuNUMgNzcxLjYyMSwyODIuOTcgNzcwLjc4NywyODAuNjM3IDc2OS41LDI3OC41QyA3NjkuNSwyNzcuODMzIDc2OS44MzMsMjc3LjUgNzcwLjUsMjc3LjVDIDg0NS42MzksMzY0LjY4OCA4NzMuNDczLDQ2NS4zNTQgODU0LDU3OS41QyA4NDEuMTkzLDY0Mi43ODMgODEzLjM1OSw2OTguMTE3IDc3MC'+
			'41LDc0NS41QyA3NzAuNSw3NDQuNSA3NzAuNSw3NDMuNSA3NzAuNSw3NDIuNUMgNzcxLjk1NCw3MzkuMjgyIDc3Mi42MjEsNzM1Ljc4MiA3NzIuNSw3MzJDIDc3MS4xNjcsNjg3IDc3MS4xNjcsNjQyIDc3Mi41LDU5N0MgNzcwLjc0NCw1NzUuNDcxIDc1OS40MTEsNTYyLjEzOCA3MzguNSw1NTdDIDcxMy43MjQsNTU1LjYzNCA2OTguMDU3LDU2Ni44MDEgNjkxLjUsNTkwLjVDIDY5MC41MDIsNjIzLjY2MiA2OTAuMTY4LDY1Ni45OTYgNjkwLjUsNjkwLjVDIDY1Ni45OTYsNjkwLjE2OCA2MjMuNjYyLDY5MC41MDIgNTkwLjUsNjkxLjVDIDU2Mi4wMDUsNzAwLjQ4MyA1NTEuODM4LDcxOS40ODMgNTYw'+
			'LDc0OC41QyA1NjcuNjksNzYzLjUyIDU4MC4wMjMsNzcxLjUyIDU5Nyw3NzIuNUMgNjQyLDc3MS4xNjcgNjg3LDc3MS4xNjcgNzMyLDc3Mi41QyA3MzUuNzgyLDc3Mi42MjEgNzM5LjI4Miw3NzEuOTU0IDc0Mi41LDc3MC41QyA3NDMuNSw3NzAuNSA3NDQuNSw3NzAuNSA3NDUuNSw3NzAuNUMgNjY5LjcyMSw4MzcuMzcxIDU4MS4wNTQsODY2Ljg3MSA0NzkuNSw4NTlDIDQwMi40MjMsODUwLjk0NCAzMzUuMDg5LDgyMS40NDQgMjc3LjUsNzcwLjVDIDI3Ny41LDc2OS44MzMgMjc3LjgzMyw3NjkuNSAyNzguNSw3NjkuNUMgMjgwLjYzNyw3NzAuNzg3IDI4Mi45Nyw3NzEuNjIxIDI4NS41LDc3MkMgMz'+
			'M0LjgzMyw3NzIuNjY3IDM4NC4xNjcsNzcyLjY2NyA0MzMuNSw3NzJDIDQ1NC40MTEsNzY2Ljg2MiA0NjUuNzQ0LDc1My41MjkgNDY3LjUsNzMyQyA0NjUuNzQ0LDcxMC40NzEgNDU0LjQxMSw2OTcuMTM4IDQzMy41LDY5MkMgNDI5LjE3OSw2OTEuNTAxIDQyNC44NDYsNjkxLjMzNCA0MjAuNSw2OTEuNUMgMzkxLjE2Nyw2OTEuNSAzNjEuODMzLDY5MS41IDMzMi41LDY5MS41QyAzMzIuNSw2NjIuMTY3IDMzMi41LDYzMi44MzMgMzMyLjUsNjAzLjVDIDMzMy45NzMsNTgzLjYwMSAzMjUuOTczLDU2OS4xMDEgMzA4LjUsNTYwQyAyODcuMTE4LDU1Mi42ODQgMjY5Ljk1MSw1NTguMTg0IDI1Nyw1NzYu'+
			'NUMgMjU0LjczOSw1ODAuOTUgMjUzLjA3Miw1ODUuNjE3IDI1Miw1OTAuNUMgMjUxLjMzMyw2MzkuODMzIDI1MS4zMzMsNjg5LjE2NyAyNTIsNzM4LjVDIDI1Mi4yMSw3NDAuMDU4IDI1Mi43MSw3NDEuMzkxIDI1My41LDc0Mi41QyAyNTMuNSw3NDMuNSAyNTMuNSw3NDQuNSAyNTMuNSw3NDUuNUMgMTg2LjYyOSw2NjkuNzIxIDE1Ny4xMjksNTgxLjA1NCAxNjUsNDc5LjVDIDE3My4wNTYsNDAyLjQyMyAyMDIuNTU2LDMzNS4wODkgMjUzLjUsMjc3LjVDIDI1NC4xNjcsMjc3LjUgMjU0LjUsMjc3LjgzMyAyNTQuNSwyNzguNUMgMjUyLjMyNywyODIuNjk2IDI1MS4zMjcsMjg3LjE5NiAyNTEuNSwyOT'+
			'JDIDI1Mi44MzMsMzM3IDI1Mi44MzMsMzgyIDI1MS41LDQyN0MgMjUzLjI1Niw0NDguNTI5IDI2NC41ODksNDYxLjg2MiAyODUuNSw0NjdDIDMxMC4yNzYsNDY4LjM2NiAzMjUuOTQzLDQ1Ny4xOTkgMzMyLjUsNDMzLjVDIDMzMy40OTgsNDAwLjMzOCAzMzMuODMyLDM2Ny4wMDQgMzMzLjUsMzMzLjVDIDM2Ny4wMDQsMzMzLjgzMiA0MDAuMzM4LDMzMy40OTggNDMzLjUsMzMyLjVDIDQ2MS45OTUsMzIzLjUxNyA0NzIuMTYyLDMwNC41MTcgNDY0LDI3NS41QyA0NTYuMzEsMjYwLjQ4IDQ0My45NzcsMjUyLjQ4IDQyNywyNTEuNUMgMzgyLDI1Mi44MzMgMzM3LDI1Mi44MzMgMjkyLDI1MS41QyAyODcu'+
			'MTk2LDI1MS4zMjcgMjgyLjY5NiwyNTIuMzI3IDI3OC41LDI1NC41QyAyNzcuODMzLDI1NC41IDI3Ny41LDI1NC4xNjcgMjc3LjUsMjUzLjVDIDM2NC42ODgsMTc4LjM2MSA0NjUuMzU0LDE1MC41MjcgNTc5LjUsMTcwQyA2NDIuNzgzLDE4Mi44MDcgNjk4LjExNywyMTAuNjQxIDc0NS41LDI1My41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZkZmQiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDMzLjUsMzMyLjUgQyAzOTkuODMzLDMzMi41IDM2Ni4xNjcsMzMyLjUgMzMyLjUsMzMyLjVDIDMzMi41LDM2Ni4xNjcgMzMyLjUsMzk5LjgzMyAzMzIuNSw0MzMuNUMgMzI1Ljk0Myw0NT'+
			'cuMTk5IDMxMC4yNzYsNDY4LjM2NiAyODUuNSw0NjdDIDI2NC41ODksNDYxLjg2MiAyNTMuMjU2LDQ0OC41MjkgMjUxLjUsNDI3QyAyNTIuODMzLDM4MiAyNTIuODMzLDMzNyAyNTEuNSwyOTJDIDI1MS4zMjcsMjg3LjE5NiAyNTIuMzI3LDI4Mi42OTYgMjU0LjUsMjc4LjVDIDI1Ni42NDQsMjczLjQ5OSAyNTkuNDc3LDI2OC44MzIgMjYzLDI2NC41QyAyNjcuODI0LDI2MC40ODQgMjcyLjk5MSwyNTcuMTUxIDI3OC41LDI1NC41QyAyODIuNjk2LDI1Mi4zMjcgMjg3LjE5NiwyNTEuMzI3IDI5MiwyNTEuNUMgMzM3LDI1Mi44MzMgMzgyLDI1Mi44MzMgNDI3LDI1MS41QyA0NDMuOTc3LDI1Mi40OCA0'+
			'NTYuMzEsMjYwLjQ4IDQ2NCwyNzUuNUMgNDcyLjE2MiwzMDQuNTE3IDQ2MS45OTUsMzIzLjUxNyA0MzMuNSwzMzIuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDc0Mi41LDI1My41IEMgNzU1LjUzMiwyNTcuNTEgNzY0LjUzMiwyNjUuODQzIDc2OS41LDI3OC41QyA3NzAuNzg3LDI4MC42MzcgNzcxLjYyMSwyODIuOTcgNzcyLDI4NS41QyA3NzIuNjY3LDMzNC44MzMgNzcyLjY2NywzODQuMTY3IDc3Miw0MzMuNUMgNzcwLjkyOCw0MzguMzgzIDc2OS4yNjEsNDQzLjA1IDc2Nyw0NDcuNUMgNzU0LjA0OSw0NjUuODE2IDczNi44OD'+
			'IsNDcxLjMxNiA3MTUuNSw0NjRDIDY5OC4wMjcsNDU0Ljg5OSA2OTAuMDI3LDQ0MC4zOTkgNjkxLjUsNDIwLjVDIDY5Mi40OTgsMzkxLjAwNSA2OTIuODMxLDM2MS4zMzggNjkyLjUsMzMxLjVDIDY2Mi42NjIsMzMxLjE2OSA2MzIuOTk1LDMzMS41MDIgNjAzLjUsMzMyLjVDIDU5OS4xNTQsMzMyLjY2NiA1OTQuODIxLDMzMi40OTkgNTkwLjUsMzMyQyA1NjkuNTg5LDMyNi44NjIgNTU4LjI1NiwzMTMuNTI5IDU1Ni41LDI5MkMgNTU4LjI1NiwyNzAuNDcxIDU2OS41ODksMjU3LjEzOCA1OTAuNSwyNTJDIDYzOS44MzMsMjUxLjMzMyA2ODkuMTY3LDI1MS4zMzMgNzM4LjUsMjUyQyA3NDAuMDU4LDI1'+
			'Mi4yMSA3NDEuMzkxLDI1Mi43MSA3NDIuNSwyNTMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZDRkNGQ1IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDI3Ny41LDI1My41IEMgMjc3LjUsMjU0LjE2NyAyNzcuODMzLDI1NC41IDI3OC41LDI1NC41QyAyNzIuOTkxLDI1Ny4xNTEgMjY3LjgyNCwyNjAuNDg0IDI2MywyNjQuNUMgMjU5LjQ3NywyNjguODMyIDI1Ni42NDQsMjczLjQ5OSAyNTQuNSwyNzguNUMgMjU0LjUsMjc3LjgzMyAyNTQuMTY3LDI3Ny41IDI1My41LDI3Ny41QyAyNTcuODMzLDI2NS44MzMgMjY1LjgzMywyNTcuODMzIDI3Ny41LDI1My41IFoiLz4KIDwvZz4KIDxnPg'+
			'ogIDxwYXRoIGZpbGw9IiNkM2Q0ZDQiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNzQyLjUsMjUzLjUgQyA3NDMuNSwyNTMuNSA3NDQuNSwyNTMuNSA3NDUuNSwyNTMuNUMgNzU3LjczMSwyNTcuMzk3IDc2Ni4wNjUsMjY1LjM5NyA3NzAuNSwyNzcuNUMgNzY5LjgzMywyNzcuNSA3NjkuNSwyNzcuODMzIDc2OS41LDI3OC41QyA3NjQuNTMyLDI2NS44NDMgNzU1LjUzMiwyNTcuNTEgNzQyLjUsMjUzLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iIzM3N2E5NyIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0MzMuNSwzMzIuNSBDIDQwMC4zMzgsMzMzLjQ5OCAzNjcuMDA0LDMzMy44MzIgMzMz'+
			'LjUsMzMzLjVDIDMzMy44MzIsMzY3LjAwNCAzMzMuNDk4LDQwMC4zMzggMzMyLjUsNDMzLjVDIDMzMi41LDM5OS44MzMgMzMyLjUsMzY2LjE2NyAzMzIuNSwzMzIuNUMgMzY2LjE2NywzMzIuNSAzOTkuODMzLDMzMi41IDQzMy41LDMzMi41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNjAzLjUsMzMyLjUgQyA2MzIuOTk1LDMzMS41MDIgNjYyLjY2MiwzMzEuMTY5IDY5Mi41LDMzMS41QyA2OTIuODMxLDM2MS4zMzggNjkyLjQ5OCwzOTEuMDA1IDY5MS41LDQyMC41QyA2OTEuNSwzOTEuMTY3IDY5MS41LDM2MS44MzMgNjkxLjUsMz'+
			'MyLjVDIDY2Mi4xNjcsMzMyLjUgNjMyLjgzMywzMzIuNSA2MDMuNSwzMzIuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDMzMi41LDYwMy41IEMgMzMxLjUwMiw2MzIuOTk1IDMzMS4xNjksNjYyLjY2MiAzMzEuNSw2OTIuNUMgMzYxLjMzOCw2OTIuODMxIDM5MS4wMDUsNjkyLjQ5OCA0MjAuNSw2OTEuNUMgNDI0Ljg0Niw2OTEuMzM0IDQyOS4xNzksNjkxLjUwMSA0MzMuNSw2OTJDIDQ1NC40MTEsNjk3LjEzOCA0NjUuNzQ0LDcxMC40NzEgNDY3LjUsNzMyQyA0NjUuNzQ0LDc1My41MjkgNDU0LjQxMSw3NjYuODYyIDQzMy41LDc3'+
			'MkMgMzg0LjE2Nyw3NzIuNjY3IDMzNC44MzMsNzcyLjY2NyAyODUuNSw3NzJDIDI4Mi45Nyw3NzEuNjIxIDI4MC42MzcsNzcwLjc4NyAyNzguNSw3NjkuNUMgMjY1Ljg0Myw3NjQuNTMyIDI1Ny41MSw3NTUuNTMyIDI1My41LDc0Mi41QyAyNTIuNzEsNzQxLjM5MSAyNTIuMjEsNzQwLjA1OCAyNTIsNzM4LjVDIDI1MS4zMzMsNjg5LjE2NyAyNTEuMzMzLDYzOS44MzMgMjUyLDU5MC41QyAyNTMuMDcyLDU4NS42MTcgMjU0LjczOSw1ODAuOTUgMjU3LDU3Ni41QyAyNjkuOTUxLDU1OC4xODQgMjg3LjExOCw1NTIuNjg0IDMwOC41LDU2MEMgMzI1Ljk3Myw1NjkuMTAxIDMzMy45NzMsNTgzLjYwMSAzMz'+
			'IuNSw2MDMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDc3MC41LDc0Mi41IEMgNzY3LjM2Miw3NTIuNDc4IDc2MS4zNjIsNzYwLjMxMSA3NTIuNSw3NjZDIDc0OS4xMDcsNzY3LjYyIDc0NS43NzQsNzY5LjEyIDc0Mi41LDc3MC41QyA3MzkuMjgyLDc3MS45NTQgNzM1Ljc4Miw3NzIuNjIxIDczMiw3NzIuNUMgNjg3LDc3MS4xNjcgNjQyLDc3MS4xNjcgNTk3LDc3Mi41QyA1ODAuMDIzLDc3MS41MiA1NjcuNjksNzYzLjUyIDU2MCw3NDguNUMgNTUxLjgzOCw3MTkuNDgzIDU2Mi4wMDUsNzAwLjQ4MyA1OTAuNSw2OTEuNUMgNjI0'+
			'LjE2Nyw2OTEuNSA2NTcuODMzLDY5MS41IDY5MS41LDY5MS41QyA2OTEuNSw2NTcuODMzIDY5MS41LDYyNC4xNjcgNjkxLjUsNTkwLjVDIDY5OC4wNTcsNTY2LjgwMSA3MTMuNzI0LDU1NS42MzQgNzM4LjUsNTU3QyA3NTkuNDExLDU2Mi4xMzggNzcwLjc0NCw1NzUuNDcxIDc3Mi41LDU5N0MgNzcxLjE2Nyw2NDIgNzcxLjE2Nyw2ODcgNzcyLjUsNzMyQyA3NzIuNjIxLDczNS43ODIgNzcxLjk1NCw3MzkuMjgyIDc3MC41LDc0Mi41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNjkxLjUsNTkwLjUgQyA2OTEuNSw2MjQuMTY3IDY5MS'+
			'41LDY1Ny44MzMgNjkxLjUsNjkxLjVDIDY1Ny44MzMsNjkxLjUgNjI0LjE2Nyw2OTEuNSA1OTAuNSw2OTEuNUMgNjIzLjY2Miw2OTAuNTAyIDY1Ni45OTYsNjkwLjE2OCA2OTAuNSw2OTAuNUMgNjkwLjE2OCw2NTYuOTk2IDY5MC41MDIsNjIzLjY2MiA2OTEuNSw1OTAuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjMzc3OTk3IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDMzMi41LDYwMy41IEMgMzMyLjUsNjMyLjgzMyAzMzIuNSw2NjIuMTY3IDMzMi41LDY5MS41QyAzNjEuODMzLDY5MS41IDM5MS4xNjcsNjkxLjUgNDIwLjUsNjkxLjVDIDM5MS4wMDUsNjkyLjQ5OCAzNjEuMzM4LDY5'+
			'Mi44MzEgMzMxLjUsNjkyLjVDIDMzMS4xNjksNjYyLjY2MiAzMzEuNTAyLDYzMi45OTUgMzMyLjUsNjAzLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2QyZDNkNCIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSAyNTMuNSw3NDIuNSBDIDI1Ny41MSw3NTUuNTMyIDI2NS44NDMsNzY0LjUzMiAyNzguNSw3NjkuNUMgMjc3LjgzMyw3NjkuNSAyNzcuNSw3NjkuODMzIDI3Ny41LDc3MC41QyAyNjUuMzk3LDc2Ni4wNjUgMjU3LjM5Nyw3NTcuNzMxIDI1My41LDc0NS41QyAyNTMuNSw3NDQuNSAyNTMuNSw3NDMuNSAyNTMuNSw3NDIuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjY2'+
			'ZkMWQyIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDc3MC41LDc0Mi41IEMgNzcwLjUsNzQzLjUgNzcwLjUsNzQ0LjUgNzcwLjUsNzQ1LjVDIDc2Ni41LDc1OC4xNjcgNzU4LjE2Nyw3NjYuNSA3NDUuNSw3NzAuNUMgNzQ0LjUsNzcwLjUgNzQzLjUsNzcwLjUgNzQyLjUsNzcwLjVDIDc0NS43NzQsNzY5LjEyIDc0OS4xMDcsNzY3LjYyIDc1Mi41LDc2NkMgNzYxLjM2Miw3NjAuMzExIDc2Ny4zNjIsNzUyLjQ3OCA3NzAuNSw3NDIuNSBaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_normalscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_normalscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 48px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmVmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNzQ1LjUsMj'+
			'UzLjUgQyA3NDQuNSwyNTMuNSA3NDMuNSwyNTMuNSA3NDIuNSwyNTMuNUMgNzQxLjM5MSwyNTIuNzEgNzQwLjA1OCwyNTIuMjEgNzM4LjUsMjUyQyA2ODkuMTY3LDI1MS4zMzMgNjM5LjgzMywyNTEuMzMzIDU5MC41LDI1MkMgNTY5LjU4OSwyNTcuMTM4IDU1OC4yNTYsMjcwLjQ3MSA1NTYuNSwyOTJDIDU1OC4yNTYsMzEzLjUyOSA1NjkuNTg5LDMyNi44NjIgNTkwLjUsMzMyQyA1OTQuODIxLDMzMi40OTkgNTk5LjE1NCwzMzIuNjY2IDYwMy41LDMzMi41QyA2MzIuODMzLDMzMi41IDY2Mi4xNjcsMzMyLjUgNjkxLjUsMzMyLjVDIDY5MS41LDM2MS44MzMgNjkxLjUsMzkxLjE2NyA2OTEuNSw0MjAu'+
			'NUMgNjkwLjAyNyw0NDAuMzk5IDY5OC4wMjcsNDU0Ljg5OSA3MTUuNSw0NjRDIDczNi44ODIsNDcxLjMxNiA3NTQuMDQ5LDQ2NS44MTYgNzY3LDQ0Ny41QyA3NjkuMjYxLDQ0My4wNSA3NzAuOTI4LDQzOC4zODMgNzcyLDQzMy41QyA3NzIuNjY3LDM4NC4xNjcgNzcyLjY2NywzMzQuODMzIDc3MiwyODUuNUMgNzcxLjYyMSwyODIuOTcgNzcwLjc4NywyODAuNjM3IDc2OS41LDI3OC41QyA3NjkuNSwyNzcuODMzIDc2OS44MzMsMjc3LjUgNzcwLjUsMjc3LjVDIDg0NS42MzksMzY0LjY4OCA4NzMuNDczLDQ2NS4zNTQgODU0LDU3OS41QyA4NDEuMTkzLDY0Mi43ODMgODEzLjM1OSw2OTguMTE3IDc3MC'+
			'41LDc0NS41QyA3NzAuNSw3NDQuNSA3NzAuNSw3NDMuNSA3NzAuNSw3NDIuNUMgNzcxLjk1NCw3MzkuMjgyIDc3Mi42MjEsNzM1Ljc4MiA3NzIuNSw3MzJDIDc3MS4xNjcsNjg3IDc3MS4xNjcsNjQyIDc3Mi41LDU5N0MgNzcwLjc0NCw1NzUuNDcxIDc1OS40MTEsNTYyLjEzOCA3MzguNSw1NTdDIDcxMy43MjQsNTU1LjYzNCA2OTguMDU3LDU2Ni44MDEgNjkxLjUsNTkwLjVDIDY5MC41MDIsNjIzLjY2MiA2OTAuMTY4LDY1Ni45OTYgNjkwLjUsNjkwLjVDIDY1Ni45OTYsNjkwLjE2OCA2MjMuNjYyLDY5MC41MDIgNTkwLjUsNjkxLjVDIDU2Mi4wMDUsNzAwLjQ4MyA1NTEuODM4LDcxOS40ODMgNTYw'+
			'LDc0OC41QyA1NjcuNjksNzYzLjUyIDU4MC4wMjMsNzcxLjUyIDU5Nyw3NzIuNUMgNjQyLDc3MS4xNjcgNjg3LDc3MS4xNjcgNzMyLDc3Mi41QyA3MzUuNzgyLDc3Mi42MjEgNzM5LjI4Miw3NzEuOTU0IDc0Mi41LDc3MC41QyA3NDMuNSw3NzAuNSA3NDQuNSw3NzAuNSA3NDUuNSw3NzAuNUMgNjY5LjcyMSw4MzcuMzcxIDU4MS4wNTQsODY2Ljg3MSA0NzkuNSw4NTlDIDQwMi40MjMsODUwLjk0NCAzMzUuMDg5LDgyMS40NDQgMjc3LjUsNzcwLjVDIDI3Ny41LDc2OS44MzMgMjc3LjgzMyw3NjkuNSAyNzguNSw3NjkuNUMgMjgwLjYzNyw3NzAuNzg3IDI4Mi45Nyw3NzEuNjIxIDI4NS41LDc3MkMgMz'+
			'M0LjgzMyw3NzIuNjY3IDM4NC4xNjcsNzcyLjY2NyA0MzMuNSw3NzJDIDQ1NC40MTEsNzY2Ljg2MiA0NjUuNzQ0LDc1My41MjkgNDY3LjUsNzMyQyA0NjUuNzQ0LDcxMC40NzEgNDU0LjQxMSw2OTcuMTM4IDQzMy41LDY5MkMgNDI5LjE3OSw2OTEuNTAxIDQyNC44NDYsNjkxLjMzNCA0MjAuNSw2OTEuNUMgMzkxLjE2Nyw2OTEuNSAzNjEuODMzLDY5MS41IDMzMi41LDY5MS41QyAzMzIuNSw2NjIuMTY3IDMzMi41LDYzMi44MzMgMzMyLjUsNjAzLjVDIDMzMy45NzMsNTgzLjYwMSAzMjUuOTczLDU2OS4xMDEgMzA4LjUsNTYwQyAyODcuMTE4LDU1Mi42ODQgMjY5Ljk1MSw1NTguMTg0IDI1Nyw1NzYu'+
			'NUMgMjU0LjczOSw1ODAuOTUgMjUzLjA3Miw1ODUuNjE3IDI1Miw1OTAuNUMgMjUxLjMzMyw2MzkuODMzIDI1MS4zMzMsNjg5LjE2NyAyNTIsNzM4LjVDIDI1Mi4yMSw3NDAuMDU4IDI1Mi43MSw3NDEuMzkxIDI1My41LDc0Mi41QyAyNTMuNSw3NDMuNSAyNTMuNSw3NDQuNSAyNTMuNSw3NDUuNUMgMTg2LjYyOSw2NjkuNzIxIDE1Ny4xMjksNTgxLjA1NCAxNjUsNDc5LjVDIDE3My4wNTYsNDAyLjQyMyAyMDIuNTU2LDMzNS4wODkgMjUzLjUsMjc3LjVDIDI1NC4xNjcsMjc3LjUgMjU0LjUsMjc3LjgzMyAyNTQuNSwyNzguNUMgMjUyLjMyNywyODIuNjk2IDI1MS4zMjcsMjg3LjE5NiAyNTEuNSwyOT'+
			'JDIDI1Mi44MzMsMzM3IDI1Mi44MzMsMzgyIDI1MS41LDQyN0MgMjUzLjI1Niw0NDguNTI5IDI2NC41ODksNDYxLjg2MiAyODUuNSw0NjdDIDMxMC4yNzYsNDY4LjM2NiAzMjUuOTQzLDQ1Ny4xOTkgMzMyLjUsNDMzLjVDIDMzMy40OTgsNDAwLjMzOCAzMzMuODMyLDM2Ny4wMDQgMzMzLjUsMzMzLjVDIDM2Ny4wMDQsMzMzLjgzMiA0MDAuMzM4LDMzMy40OTggNDMzLjUsMzMyLjVDIDQ2MS45OTUsMzIzLjUxNyA0NzIuMTYyLDMwNC41MTcgNDY0LDI3NS41QyA0NTYuMzEsMjYwLjQ4IDQ0My45NzcsMjUyLjQ4IDQyNywyNTEuNUMgMzgyLDI1Mi44MzMgMzM3LDI1Mi44MzMgMjkyLDI1MS41QyAyODcu'+
			'MTk2LDI1MS4zMjcgMjgyLjY5NiwyNTIuMzI3IDI3OC41LDI1NC41QyAyNzcuODMzLDI1NC41IDI3Ny41LDI1NC4xNjcgMjc3LjUsMjUzLjVDIDM2NC42ODgsMTc4LjM2MSA0NjUuMzU0LDE1MC41MjcgNTc5LjUsMTcwQyA2NDIuNzgzLDE4Mi44MDcgNjk4LjExNywyMTAuNjQxIDc0NS41LDI1My41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZkZmQiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDMzLjUsMzMyLjUgQyAzOTkuODMzLDMzMi41IDM2Ni4xNjcsMzMyLjUgMzMyLjUsMzMyLjVDIDMzMi41LDM2Ni4xNjcgMzMyLjUsMzk5LjgzMyAzMzIuNSw0MzMuNUMgMzI1Ljk0Myw0NT'+
			'cuMTk5IDMxMC4yNzYsNDY4LjM2NiAyODUuNSw0NjdDIDI2NC41ODksNDYxLjg2MiAyNTMuMjU2LDQ0OC41MjkgMjUxLjUsNDI3QyAyNTIuODMzLDM4MiAyNTIuODMzLDMzNyAyNTEuNSwyOTJDIDI1MS4zMjcsMjg3LjE5NiAyNTIuMzI3LDI4Mi42OTYgMjU0LjUsMjc4LjVDIDI1Ni42NDQsMjczLjQ5OSAyNTkuNDc3LDI2OC44MzIgMjYzLDI2NC41QyAyNjcuODI0LDI2MC40ODQgMjcyLjk5MSwyNTcuMTUxIDI3OC41LDI1NC41QyAyODIuNjk2LDI1Mi4zMjcgMjg3LjE5NiwyNTEuMzI3IDI5MiwyNTEuNUMgMzM3LDI1Mi44MzMgMzgyLDI1Mi44MzMgNDI3LDI1MS41QyA0NDMuOTc3LDI1Mi40OCA0'+
			'NTYuMzEsMjYwLjQ4IDQ2NCwyNzUuNUMgNDcyLjE2MiwzMDQuNTE3IDQ2MS45OTUsMzIzLjUxNyA0MzMuNSwzMzIuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDc0Mi41LDI1My41IEMgNzU1LjUzMiwyNTcuNTEgNzY0LjUzMiwyNjUuODQzIDc2OS41LDI3OC41QyA3NzAuNzg3LDI4MC42MzcgNzcxLjYyMSwyODIuOTcgNzcyLDI4NS41QyA3NzIuNjY3LDMzNC44MzMgNzcyLjY2NywzODQuMTY3IDc3Miw0MzMuNUMgNzcwLjkyOCw0MzguMzgzIDc2OS4yNjEsNDQzLjA1IDc2Nyw0NDcuNUMgNzU0LjA0OSw0NjUuODE2IDczNi44OD'+
			'IsNDcxLjMxNiA3MTUuNSw0NjRDIDY5OC4wMjcsNDU0Ljg5OSA2OTAuMDI3LDQ0MC4zOTkgNjkxLjUsNDIwLjVDIDY5Mi40OTgsMzkxLjAwNSA2OTIuODMxLDM2MS4zMzggNjkyLjUsMzMxLjVDIDY2Mi42NjIsMzMxLjE2OSA2MzIuOTk1LDMzMS41MDIgNjAzLjUsMzMyLjVDIDU5OS4xNTQsMzMyLjY2NiA1OTQuODIxLDMzMi40OTkgNTkwLjUsMzMyQyA1NjkuNTg5LDMyNi44NjIgNTU4LjI1NiwzMTMuNTI5IDU1Ni41LDI5MkMgNTU4LjI1NiwyNzAuNDcxIDU2OS41ODksMjU3LjEzOCA1OTAuNSwyNTJDIDYzOS44MzMsMjUxLjMzMyA2ODkuMTY3LDI1MS4zMzMgNzM4LjUsMjUyQyA3NDAuMDU4LDI1'+
			'Mi4yMSA3NDEuMzkxLDI1Mi43MSA3NDIuNSwyNTMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZDRkNGQ1IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDI3Ny41LDI1My41IEMgMjc3LjUsMjU0LjE2NyAyNzcuODMzLDI1NC41IDI3OC41LDI1NC41QyAyNzIuOTkxLDI1Ny4xNTEgMjY3LjgyNCwyNjAuNDg0IDI2MywyNjQuNUMgMjU5LjQ3NywyNjguODMyIDI1Ni42NDQsMjczLjQ5OSAyNTQuNSwyNzguNUMgMjU0LjUsMjc3LjgzMyAyNTQuMTY3LDI3Ny41IDI1My41LDI3Ny41QyAyNTcuODMzLDI2NS44MzMgMjY1LjgzMywyNTcuODMzIDI3Ny41LDI1My41IFoiLz4KIDwvZz4KIDxnPg'+
			'ogIDxwYXRoIGZpbGw9IiNkM2Q0ZDQiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNzQyLjUsMjUzLjUgQyA3NDMuNSwyNTMuNSA3NDQuNSwyNTMuNSA3NDUuNSwyNTMuNUMgNzU3LjczMSwyNTcuMzk3IDc2Ni4wNjUsMjY1LjM5NyA3NzAuNSwyNzcuNUMgNzY5LjgzMywyNzcuNSA3NjkuNSwyNzcuODMzIDc2OS41LDI3OC41QyA3NjQuNTMyLDI2NS44NDMgNzU1LjUzMiwyNTcuNTEgNzQyLjUsMjUzLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iIzM3N2E5NyIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0MzMuNSwzMzIuNSBDIDQwMC4zMzgsMzMzLjQ5OCAzNjcuMDA0LDMzMy44MzIgMzMz'+
			'LjUsMzMzLjVDIDMzMy44MzIsMzY3LjAwNCAzMzMuNDk4LDQwMC4zMzggMzMyLjUsNDMzLjVDIDMzMi41LDM5OS44MzMgMzMyLjUsMzY2LjE2NyAzMzIuNSwzMzIuNUMgMzY2LjE2NywzMzIuNSAzOTkuODMzLDMzMi41IDQzMy41LDMzMi41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNjAzLjUsMzMyLjUgQyA2MzIuOTk1LDMzMS41MDIgNjYyLjY2MiwzMzEuMTY5IDY5Mi41LDMzMS41QyA2OTIuODMxLDM2MS4zMzggNjkyLjQ5OCwzOTEuMDA1IDY5MS41LDQyMC41QyA2OTEuNSwzOTEuMTY3IDY5MS41LDM2MS44MzMgNjkxLjUsMz'+
			'MyLjVDIDY2Mi4xNjcsMzMyLjUgNjMyLjgzMywzMzIuNSA2MDMuNSwzMzIuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDMzMi41LDYwMy41IEMgMzMxLjUwMiw2MzIuOTk1IDMzMS4xNjksNjYyLjY2MiAzMzEuNSw2OTIuNUMgMzYxLjMzOCw2OTIuODMxIDM5MS4wMDUsNjkyLjQ5OCA0MjAuNSw2OTEuNUMgNDI0Ljg0Niw2OTEuMzM0IDQyOS4xNzksNjkxLjUwMSA0MzMuNSw2OTJDIDQ1NC40MTEsNjk3LjEzOCA0NjUuNzQ0LDcxMC40NzEgNDY3LjUsNzMyQyA0NjUuNzQ0LDc1My41MjkgNDU0LjQxMSw3NjYuODYyIDQzMy41LDc3'+
			'MkMgMzg0LjE2Nyw3NzIuNjY3IDMzNC44MzMsNzcyLjY2NyAyODUuNSw3NzJDIDI4Mi45Nyw3NzEuNjIxIDI4MC42MzcsNzcwLjc4NyAyNzguNSw3NjkuNUMgMjY1Ljg0Myw3NjQuNTMyIDI1Ny41MSw3NTUuNTMyIDI1My41LDc0Mi41QyAyNTIuNzEsNzQxLjM5MSAyNTIuMjEsNzQwLjA1OCAyNTIsNzM4LjVDIDI1MS4zMzMsNjg5LjE2NyAyNTEuMzMzLDYzOS44MzMgMjUyLDU5MC41QyAyNTMuMDcyLDU4NS42MTcgMjU0LjczOSw1ODAuOTUgMjU3LDU3Ni41QyAyNjkuOTUxLDU1OC4xODQgMjg3LjExOCw1NTIuNjg0IDMwOC41LDU2MEMgMzI1Ljk3Myw1NjkuMTAxIDMzMy45NzMsNTgzLjYwMSAzMz'+
			'IuNSw2MDMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDc3MC41LDc0Mi41IEMgNzY3LjM2Miw3NTIuNDc4IDc2MS4zNjIsNzYwLjMxMSA3NTIuNSw3NjZDIDc0OS4xMDcsNzY3LjYyIDc0NS43NzQsNzY5LjEyIDc0Mi41LDc3MC41QyA3MzkuMjgyLDc3MS45NTQgNzM1Ljc4Miw3NzIuNjIxIDczMiw3NzIuNUMgNjg3LDc3MS4xNjcgNjQyLDc3MS4xNjcgNTk3LDc3Mi41QyA1ODAuMDIzLDc3MS41MiA1NjcuNjksNzYzLjUyIDU2MCw3NDguNUMgNTUxLjgzOCw3MTkuNDgzIDU2Mi4wMDUsNzAwLjQ4MyA1OTAuNSw2OTEuNUMgNjI0'+
			'LjE2Nyw2OTEuNSA2NTcuODMzLDY5MS41IDY5MS41LDY5MS41QyA2OTEuNSw2NTcuODMzIDY5MS41LDYyNC4xNjcgNjkxLjUsNTkwLjVDIDY5OC4wNTcsNTY2LjgwMSA3MTMuNzI0LDU1NS42MzQgNzM4LjUsNTU3QyA3NTkuNDExLDU2Mi4xMzggNzcwLjc0NCw1NzUuNDcxIDc3Mi41LDU5N0MgNzcxLjE2Nyw2NDIgNzcxLjE2Nyw2ODcgNzcyLjUsNzMyQyA3NzIuNjIxLDczNS43ODIgNzcxLjk1NCw3MzkuMjgyIDc3MC41LDc0Mi41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNjkxLjUsNTkwLjUgQyA2OTEuNSw2MjQuMTY3IDY5MS'+
			'41LDY1Ny44MzMgNjkxLjUsNjkxLjVDIDY1Ny44MzMsNjkxLjUgNjI0LjE2Nyw2OTEuNSA1OTAuNSw2OTEuNUMgNjIzLjY2Miw2OTAuNTAyIDY1Ni45OTYsNjkwLjE2OCA2OTAuNSw2OTAuNUMgNjkwLjE2OCw2NTYuOTk2IDY5MC41MDIsNjIzLjY2MiA2OTEuNSw1OTAuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjMzc3OTk3IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDMzMi41LDYwMy41IEMgMzMyLjUsNjMyLjgzMyAzMzIuNSw2NjIuMTY3IDMzMi41LDY5MS41QyAzNjEuODMzLDY5MS41IDM5MS4xNjcsNjkxLjUgNDIwLjUsNjkxLjVDIDM5MS4wMDUsNjkyLjQ5OCAzNjEuMzM4LDY5'+
			'Mi44MzEgMzMxLjUsNjkyLjVDIDMzMS4xNjksNjYyLjY2MiAzMzEuNTAyLDYzMi45OTUgMzMyLjUsNjAzLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2QyZDNkNCIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSAyNTMuNSw3NDIuNSBDIDI1Ny41MSw3NTUuNTMyIDI2NS44NDMsNzY0LjUzMiAyNzguNSw3NjkuNUMgMjc3LjgzMyw3NjkuNSAyNzcuNSw3NjkuODMzIDI3Ny41LDc3MC41QyAyNjUuMzk3LDc2Ni4wNjUgMjU3LjM5Nyw3NTcuNzMxIDI1My41LDc0NS41QyAyNTMuNSw3NDQuNSAyNTMuNSw3NDMuNSAyNTMuNSw3NDIuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjY2'+
			'ZkMWQyIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDc3MC41LDc0Mi41IEMgNzcwLjUsNzQzLjUgNzcwLjUsNzQ0LjUgNzcwLjUsNzQ1LjVDIDc2Ni41LDc1OC4xNjcgNzU4LjE2Nyw3NjYuNSA3NDUuNSw3NzAuNUMgNzQ0LjUsNzcwLjUgNzQzLjUsNzcwLjUgNzQyLjUsNzcwLjVDIDc0NS43NzQsNzY5LjEyIDc0OS4xMDcsNzY3LjYyIDc1Mi41LDc2NkMgNzYxLjM2Miw3NjAuMzExIDc2Ny4zNjIsNzUyLjQ3OCA3NzAuNSw3NDIuNSBaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._button_image_fullscreen__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._button_image_fullscreen__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDMzNS41LDMwMS41IEMgMzg0LjMzMywzMDIuNzk5IDQzMy4xNjcsMzAyLjc5OSA0ODIsMzAxLjVDIDQ5My44MDksMzAxLjc2NiA1MDMuODA5LDMwNi4wOTkgNTEyLDMxNC41QyA1MTguNDYyLDMwNy44NTEgNTI2LjI5NiwzMDMuNjg0IDUzNS41LDMwMkMgNTg2LjUsMzAxLjMzMyA2MzcuNSwzMDEuMzMzIDY4OC41LDMwMkMgNzA3LDMwNS44MzMgNzE4LjE2NywzMTcgNzIyLDMzNS41QyA3MjIuNjY3LDM4Ni41IDcyMi42NjcsNDM3LjUgNzIyLDQ4OC41QyA3MjAuMzE2LDQ5Ny43MDQgNzE2LjE0OSw1MDUuNTM4IDcwOS41LDUxMkMgNzE3LjkwMS'+
			'w1MjAuMTkxIDcyMi4yMzQsNTMwLjE5MSA3MjIuNSw1NDJDIDcyMS4xNjcsNTg4LjY2NyA3MjEuMTY3LDYzNS4zMzMgNzIyLjUsNjgyQyA3MjAuMzMzLDcwNi44MzMgNzA2LjgzMyw3MjAuMzMzIDY4Miw3MjIuNUMgNjM1LjMzMyw3MjEuMTY3IDU4OC42NjcsNzIxLjE2NyA1NDIsNzIyLjVDIDUzMC4xOTEsNzIyLjIzNCA1MjAuMTkxLDcxNy45MDEgNTEyLDcwOS41QyA1MDUuNTM4LDcxNi4xNDkgNDk3LjcwNCw3MjAuMzE2IDQ4OC41LDcyMkMgNDM3LjUsNzIyLjY2NyAzODYuNSw3MjIuNjY3IDMzNS41LDcyMkMgMzE3LDcxOC4xNjcgMzA1LjgzMyw3MDcgMzAyLDY4OC41QyAzMDEuMzMzLDYzNy41'+
			'IDMwMS4zMzMsNTg2LjUgMzAyLDUzNS41QyAzMDMuNjg0LDUyNi4yOTYgMzA3Ljg1MSw1MTguNDYyIDMxNC41LDUxMkMgMzA2LjA5OSw1MDMuODA5IDMwMS43NjYsNDkzLjgwOSAzMDEuNSw0ODJDIDMwMi44MzMsNDM1LjMzMyAzMDIuODMzLDM4OC42NjcgMzAxLjUsMzQyQyAzMDMuMzYzLDMyMC4zODkgMzE0LjY5NiwzMDYuODg5IDMzNS41LDMwMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNTQ4LjUsMzgyLjUgQyA1NzkuNSwzODIuNSA2MTAuNSwzODIuNSA2NDEuNSwzODIuNUMgNjQxLjUsNDEzLjUgNjQxLjUsNDQ0LjUgNj'+
			'QxLjUsNDc1LjVDIDY0MC4zOTEsNDg5LjY3NyA2NDQuNzI0LDUwMS44NDMgNjU0LjUsNTEyQyA2NDcuOTIsNTE4LjY2NyA2NDMuNTg2LDUyNi41IDY0MS41LDUzNS41QyA2NDAuNTAyLDU3MC4zMjkgNjQwLjE2OCw2MDUuMzI5IDY0MC41LDY0MC41QyA2MDUuMzI5LDY0MC4xNjggNTcwLjMyOSw2NDAuNTAyIDUzNS41LDY0MS41QyA1MjYuNSw2NDMuNTg2IDUxOC42NjcsNjQ3LjkyIDUxMiw2NTQuNUMgNTAxLjg0Myw2NDQuNzI0IDQ4OS42NzcsNjQwLjM5MSA0NzUuNSw2NDEuNUMgNDQ0LjUsNjQxLjUgNDEzLjUsNjQxLjUgMzgyLjUsNjQxLjVDIDM4Mi41LDYxMC41IDM4Mi41LDU3OS41IDM4Mi41'+
			'LDU0OC41QyAzODMuNjA5LDUzNC4zMjMgMzc5LjI3Niw1MjIuMTU3IDM2OS41LDUxMkMgMzc2LjA4LDUwNS4zMzMgMzgwLjQxNCw0OTcuNSAzODIuNSw0ODguNUMgMzgzLjQ5OCw0NTMuNjcxIDM4My44MzIsNDE4LjY3MSAzODMuNSwzODMuNUMgNDE4LjY3MSwzODMuODMyIDQ1My42NzEsMzgzLjQ5OCA0ODguNSwzODIuNUMgNDk3LjUsMzgwLjQxNCA1MDUuMzMzLDM3Ni4wOCA1MTIsMzY5LjVDIDUyMi4xNTcsMzc5LjI3NiA1MzQuMzIzLDM4My42MDkgNTQ4LjUsMzgyLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iIzM3Nzk5NyIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA1NDguNSwzOD'+
			'IuNSBDIDU3OS42NjIsMzgxLjUwMiA2MTAuOTk2LDM4MS4xNjggNjQyLjUsMzgxLjVDIDY0Mi44MzIsNDEzLjAwNCA2NDIuNDk4LDQ0NC4zMzggNjQxLjUsNDc1LjVDIDY0MS41LDQ0NC41IDY0MS41LDQxMy41IDY0MS41LDM4Mi41QyA2MTAuNSwzODIuNSA1NzkuNSwzODIuNSA1NDguNSwzODIuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjMzc3YTk3IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ4OC41LDM4Mi41IEMgNDUzLjY3MSwzODMuNDk4IDQxOC42NzEsMzgzLjgzMiAzODMuNSwzODMuNUMgMzgzLjgzMiw0MTguNjcxIDM4My40OTgsNDUzLjY3MSAzODIuNSw0ODguNUMgMzgy'+
			'LjUsNDUzLjE2NyAzODIuNSw0MTcuODMzIDM4Mi41LDM4Mi41QyA0MTcuODMzLDM4Mi41IDQ1My4xNjcsMzgyLjUgNDg4LjUsMzgyLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iIzM3N2E5NyIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA2NDEuNSw1MzUuNSBDIDY0MS41LDU3MC44MzMgNjQxLjUsNjA2LjE2NyA2NDEuNSw2NDEuNUMgNjA2LjE2Nyw2NDEuNSA1NzAuODMzLDY0MS41IDUzNS41LDY0MS41QyA1NzAuMzI5LDY0MC41MDIgNjA1LjMyOSw2NDAuMTY4IDY0MC41LDY0MC41QyA2NDAuMTY4LDYwNS4zMjkgNjQwLjUwMiw1NzAuMzI5IDY0MS41LDUzNS41IFoiLz4KIDwvZz4KID'+
			'xnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzgyLjUsNTQ4LjUgQyAzODIuNSw1NzkuNSAzODIuNSw2MTAuNSAzODIuNSw2NDEuNUMgNDEzLjUsNjQxLjUgNDQ0LjUsNjQxLjUgNDc1LjUsNjQxLjVDIDQ0NC4zMzgsNjQyLjQ5OCA0MTMuMDA0LDY0Mi44MzIgMzgxLjUsNjQyLjVDIDM4MS4xNjgsNjEwLjk5NiAzODEuNTAyLDU3OS42NjIgMzgyLjUsNTQ4LjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._button_image_fullscreen__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="button_image_fullscreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg toolbar-btn";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBoZWlnaHQ9IjI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2Ij4KIDxwYXRoIGZpbGw9IiM2NjY2NjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEsMSkiIGQ9Ik0wIDAgQzUuNDAwNDk3MzYgMC4zMTc2NzYzMiA3LjUyMzM3MDY1IDMuMTk5OTYzMjcgMTEgNyBDMTMuODgxOTg3NzMgNS44MjU4NTY4NSAxNS4zMDY3MDA2OSA0LjY3Nzk2NDI4IDE3LjUgMi4zNzUgQzIwIC0wIDIwIC0wIDI0IDAgQzIzLjY4MjMyMzY4IDUuNDAwNDk3MzYgMjAuODAwMDM2NzMgNy'+
			'41MjMzNzA2NSAxNyAxMSBDMTguMTc0MTQzMTUgMTMuODgxOTg3NzMgMTkuMzIyMDM1NzIgMTUuMzA2NzAwNjkgMjEuNjI1IDE3LjUgQzI0IDIwIDI0IDIwIDI0IDI0IEMxOC41OTk1MDI2NCAyMy42ODIzMjM2OCAxNi40NzY2MjkzNSAyMC44MDAwMzY3MyAxMyAxNyBDMTAuMTE4MDEyMjcgMTguMTc0MTQzMTUgOC42OTMyOTkzMSAxOS4zMjIwMzU3MiA2LjUgMjEuNjI1IEM0IDI0IDQgMjQgMCAyNCBDMC4zMTc2NzYzMiAxOC41OTk1MDI2NCAzLjE5OTk2MzI3IDE2LjQ3NjYyOTM1IDcgMTMgQzUuODI1ODU2ODUgMTAuMTE4MDEyMjcgNC42Nzc5NjQyOCA4LjY5MzI5OTMxIDIuMzc1IDYuNSBDMCA0'+
			'IDAgNCAwIDAgWiAiLz4KPC9zdmc+Cg==';
		me._userdata_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._userdata_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBoZWlnaHQ9IjI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2Ij4KIDxwYXRoIGZpbGw9IiNENjI3MjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMjUsLTAuMzc1KSIgZD0iTTAgMCBDMy44MzI5NTgxOSAwLjUyMjY3NjEyIDUuMTA2ODU2ODQgMi42NjQwODM5NCA3Ljc1IDUuMzc1IEM5LjA3IDUuMzc1IDEwLjM5IDUuMzc1IDExLjc1IDUuMzc1IEMxMi41NTQzNzUgNC41NSAxMy4zNTg3NSAzLjcyNSAxNC4xODc1IDIuODc1IEMxNi43NSAwLjM3NSAxNi43NS'+
			'AwLjM3NSAxOS41IDAgQzIxLjc1IDAuMzc1IDIxLjc1IDAuMzc1IDIyLjc1IDEuMzc1IEMyMy4xMjUgNC42MjUgMjMuMTI1IDQuNjI1IDIyLjc1IDguMzc1IEMyMC4yNSAxMS4zMTI1IDIwLjI1IDExLjMxMjUgMTcuNzUgMTMuMzc1IEMxOC40OTA2ODIzOSAxNi40NjE2OTI5MSAxOC40OTA2ODIzOSAxNi40NjE2OTI5MSAyMC44MTI1IDE4LjEyNSBDMjIuNzUgMjAuMzc1IDIyLjc1IDIwLjM3NSAyMyAyNC4xMjUgQzIyLjkxNzUgMjUuMTk3NSAyMi44MzUgMjYuMjcgMjIuNzUgMjcuMzc1IEMxOS41NjI1IDI3LjY4NzUgMTkuNTYyNSAyNy42ODc1IDE1Ljc1IDI3LjM3NSBDMTIuODEyNSAyNC44NzUg'+
			'MTIuODEyNSAyNC44NzUgMTAuNzUgMjIuMzc1IEM3LjY2MzMwNzA5IDIzLjExNTY4MjM5IDcuNjYzMzA3MDkgMjMuMTE1NjgyMzkgNiAyNS40Mzc1IEMzLjc1IDI3LjM3NSAzLjc1IDI3LjM3NSAwIDI3LjYyNSBDLTEuMDcyNSAyNy41NDI1IC0yLjE0NSAyNy40NiAtMy4yNSAyNy4zNzUgQy0zLjU2MjUgMjQuMTg3NSAtMy41NjI1IDI0LjE4NzUgLTMuMjUgMjAuMzc1IEMtMC43NSAxNy40Mzc1IC0wLjc1IDE3LjQzNzUgMS43NSAxNS4zNzUgQzAuNzUxODg4NDIgMTMuMTQ4NDQzMzkgMC4wNDM5OTQyNCAxMS42MTI0NTY4OCAtMS44NzUgMTAuMDYyNSBDLTQuMDgzNjY2NTggNy4zNTE4NjM3NCAtMy'+
			'40OTg1MjY0MSA0LjczMDEwNjU4IC0zLjI1IDEuMzc1IEMtMi4yNSAwLjM3NSAtMi4yNSAwLjM3NSAwIDAgWiAiLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBoZWlnaHQ9IjI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2Ij4KIDxwYXRoIGZpbGw9IiM2NjY2NjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEsMSkiIGQ9Ik0wIDAgQzUuNDAwNDk3MzYgMC4zMTc2NzYzMiA3LjUyMzM3MDY1IDMuMTk5OTYzMjcgMTEgNyBDMTMuODgxOTg3NzMgNS44MjU4NTY4NSAxNS4zMDY3MDA2OSA0LjY3Nzk2NDI4IDE3LjUgMi4zNzUgQzIwIC0wIDIwIC0wIDI0IDAgQzIzLjY4MjMyMzY4IDUuNDAwNDk3MzYgMjAuODAwMDM2NzMgNy'+
			'41MjMzNzA2NSAxNyAxMSBDMTguMTc0MTQzMTUgMTMuODgxOTg3NzMgMTkuMzIyMDM1NzIgMTUuMzA2NzAwNjkgMjEuNjI1IDE3LjUgQzI0IDIwIDI0IDIwIDI0IDI0IEMxOC41OTk1MDI2NCAyMy42ODIzMjM2OCAxNi40NzY2MjkzNSAyMC44MDAwMzY3MyAxMyAxNyBDMTAuMTE4MDEyMjcgMTguMTc0MTQzMTUgOC42OTMyOTkzMSAxOS4zMjIwMzU3MiA2LjUgMjEuNjI1IEM0IDI0IDQgMjQgMCAyNCBDMC4zMTc2NzYzMiAxOC41OTk1MDI2NCAzLjE5OTk2MzI3IDE2LjQ3NjYyOTM1IDcgMTMgQzUuODI1ODU2ODUgMTAuMTE4MDEyMjcgNC42Nzc5NjQyOCA4LjY5MzI5OTMxIDIuMzc1IDYuNSBDMCA0'+
			'IDAgNCAwIDAgWiAiLz4KPC9zdmc+Cg==';
		me._ht_info_close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBoZWlnaHQ9IjI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2Ij4KIDxwYXRoIGZpbGw9IiNENjI3MjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMjUsLTAuMzc1KSIgZD0iTTAgMCBDMy44MzI5NTgxOSAwLjUyMjY3NjEyIDUuMTA2ODU2ODQgMi42NjQwODM5NCA3Ljc1IDUuMzc1IEM5LjA3IDUuMzc1IDEwLjM5IDUuMzc1IDExLjc1IDUuMzc1IEMxMi41NTQzNzUgNC41NSAxMy4zNTg3NSAzLjcyNSAxNC4xODc1IDIuODc1IEMxNi43NSAwLjM3NSAxNi43NS'+
			'AwLjM3NSAxOS41IDAgQzIxLjc1IDAuMzc1IDIxLjc1IDAuMzc1IDIyLjc1IDEuMzc1IEMyMy4xMjUgNC42MjUgMjMuMTI1IDQuNjI1IDIyLjc1IDguMzc1IEMyMC4yNSAxMS4zMTI1IDIwLjI1IDExLjMxMjUgMTcuNzUgMTMuMzc1IEMxOC40OTA2ODIzOSAxNi40NjE2OTI5MSAxOC40OTA2ODIzOSAxNi40NjE2OTI5MSAyMC44MTI1IDE4LjEyNSBDMjIuNzUgMjAuMzc1IDIyLjc1IDIwLjM3NSAyMyAyNC4xMjUgQzIyLjkxNzUgMjUuMTk3NSAyMi44MzUgMjYuMjcgMjIuNzUgMjcuMzc1IEMxOS41NjI1IDI3LjY4NzUgMTkuNTYyNSAyNy42ODc1IDE1Ljc1IDI3LjM3NSBDMTIuODEyNSAyNC44NzUg'+
			'MTIuODEyNSAyNC44NzUgMTAuNzUgMjIuMzc1IEM3LjY2MzMwNzA5IDIzLjExNTY4MjM5IDcuNjYzMzA3MDkgMjMuMTE1NjgyMzkgNiAyNS40Mzc1IEMzLjc1IDI3LjM3NSAzLjc1IDI3LjM3NSAwIDI3LjYyNSBDLTEuMDcyNSAyNy41NDI1IC0yLjE0NSAyNy40NiAtMy4yNSAyNy4zNzUgQy0zLjU2MjUgMjQuMTg3NSAtMy41NjI1IDI0LjE4NzUgLTMuMjUgMjAuMzc1IEMtMC43NSAxNy40Mzc1IC0wLjc1IDE3LjQzNzUgMS43NSAxNS4zNzUgQzAuNzUxODg4NDIgMTMuMTQ4NDQzMzkgMC4wNDM5OTQyNCAxMS42MTI0NTY4OCAtMS44NzUgMTAuMDYyNSBDLTQuMDgzNjY2NTggNy4zNTE4NjM3NCAtMy'+
			'40OTg1MjY0MSA0LjczMDEwNjU4IC0zLjI1IDEuMzc1IEMtMi4yNSAwLjM3NSAtMi4yNSAwLjM3NSAwIDAgWiAiLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAu'+
			'MiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9In'+
			'NwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAu'+
			'MiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9In'+
			'NwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAu'+
			'MjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMCAgICBsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3ogICAgIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNS'+
			'wxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3'+
			'LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLT'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwICAgIGMwLjM3LTAuMjE0LDAuODI2LTAuMjE0LDEuMTk2LDBsMCwwbDku'+
			'OTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwICAgIGwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eiAgICAgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPgogIDxwYXRoIGQ9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi'+
			'40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYgICAgbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBjMS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1'+
			'Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLjgyMiwwLjU5OC0xLj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiAgICBjMS44MzMsMS44MzEsNC4zNTIsMi45'+
			'Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMj'+
			'AuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUgICAgIGMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVs'+
			'MCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1Mi'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIy'+
			'LjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMT'+
			'QsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1ICAgICBjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1'+
			'LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwIC'+
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAu'+
			'MiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9In'+
			'NwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAu'+
			'MjI5LDAuODIyLTAuNTk5LDEuMDM2bDAsMCAgICBsLTkuOTc4LDUuNzYxYy0wLjE4NSwwLjEwNy0wLjM5MiwwLjE2MS0wLjU5OCwwLjE2MWwwLDBDMTIuMzI0LDIyLjk1OCwxMi4xMTcsMjIuOTA0LDExLjkzMiwyMi43OTdMMTEuOTMyLDIyLjc5N3ogICAgIE0xMy43MjcsMTkuNjg5TDIwLjExNiwxNmwtNi4zOS0zLjY4OVYxOS42ODlMMTMuNzI3LDE5LjY4OXoiLz4KICA8cGF0aCBkPSJNMy41LDE2TDMuNSwxNmMwLTYuOTA0LDUuNTk2LTEyLjQ5OSwxMi41LTEyLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwMy01LjU5NiwxMi40OTgtMTIuNS'+
			'wxMi41bDAsMEM5LjA5NiwyOC40OTgsMy41MDEsMjIuOTAzLDMuNSwxNkwzLjUsMTZ6IE01Ljg5MywxNmMwLDIuNzk1LDEuMTI5LDUuMzEzLDIuOTYxLDcuMTQ2ICAgIGwwLDBjMS44MzMsMS44MzEsNC4zNTIsMi45Niw3LjE0NywyLjk2bDAsMGMyLjc5NCwwLDUuMzE0LTEuMTI5LDcuMTQ2LTIuOTZsMCwwYzEuODMyLTEuODMzLDIuOTYtNC4zNTIsMi45NjEtNy4xNDZsMCwwICAgIGMtMC4wMDEtMi43OTUtMS4xMjktNS4zMTMtMi45NjEtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3'+
			'LjAyMiwxMC42ODcsNS44OTMsMTMuMjA1LDUuODkzLDE2TDUuODkzLDE2TDUuODkzLDE2eiIvPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0ZGRkZGRiI+CiAgPHBhdGggZD0iTTExLjkzMiwyMi43OTdjLTAuMzctMC4yMTMtMC41OTgtMC42MDgtMC41OTgtMS4wMzVsMCwwVjEwLjIzOWMwLTAuNDI4LDAuMjI4LTAuODIyLDAuNTk4LTEuMDM2bDAsMCAgICBjMC4zNy0wLjIxNCwwLjgyNi0wLjIxNCwxLjE5NiwwbDAsMGw5Ljk3OCw1Ljc2MWMwLjM3LDAuMjE0LDAuNTk5LDAuNjA4LDAuNTk5LDEuMDM2bDAsMGMwLDAuNDI4LTAuMjI5LDAuODIyLT'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTEuOTMyLDIyLjc5N2MtMC4zNy0wLjIxMy0wLjU5OC0wLjYwOC0wLjU5OC0xLjAzNWwwLDBWMTAuMjM5YzAtMC40MjgsMC4yMjgtMC44MjIsMC41OTgtMS4wMzZsMCwwICAgIGMwLjM3LTAuMjE0LDAuODI2LTAuMjE0LDEuMTk2LDBsMCwwbDku'+
			'OTc4LDUuNzYxYzAuMzcsMC4yMTQsMC41OTksMC42MDgsMC41OTksMS4wMzZsMCwwYzAsMC40MjgtMC4yMjksMC44MjItMC41OTksMS4wMzZsMCwwICAgIGwtOS45NzgsNS43NjFjLTAuMTg1LDAuMTA3LTAuMzkyLDAuMTYxLTAuNTk4LDAuMTYxbDAsMEMxMi4zMjQsMjIuOTU4LDEyLjExNywyMi45MDQsMTEuOTMyLDIyLjc5N0wxMS45MzIsMjIuNzk3eiAgICAgTTEzLjcyNywxOS42ODlMMjAuMTE2LDE2bC02LjM5LTMuNjg5VjE5LjY4OUwxMy43MjcsMTkuNjg5eiIvPgogIDxwYXRoIGQ9Ik0zLjUsMTZMMy41LDE2YzAtNi45MDQsNS41OTYtMTIuNDk5LDEyLjUtMTIuNWwwLDBjNi45MDQsMCwxMi'+
			'40OTksNS41OTYsMTIuNSwxMi41bDAsMCAgICBjLTAuMDAxLDYuOTAzLTUuNTk2LDEyLjQ5OC0xMi41LDEyLjVsMCwwQzkuMDk2LDI4LjQ5OCwzLjUwMSwyMi45MDMsMy41LDE2TDMuNSwxNnogTTUuODkzLDE2YzAsMi43OTUsMS4xMjksNS4zMTMsMi45NjEsNy4xNDYgICAgbDAsMGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTZsMCwwYzIuNzk0LDAsNS4zMTQtMS4xMjksNy4xNDYtMi45NmwwLDBjMS44MzItMS44MzMsMi45Ni00LjM1MiwyLjk2MS03LjE0NmwwLDAgICAgYy0wLjAwMS0yLjc5NS0xLjEyOS01LjMxMy0yLjk2MS03LjE0N2wwLDBDMjEuMzE0LDcuMDIyLDE4Ljc5NSw1'+
			'Ljg5NCwxNiw1Ljg5M2wwLDBjLTIuNzk1LDAtNS4zMTQsMS4xMjktNy4xNDcsMi45NmwwLDAgICAgQzcuMDIyLDEwLjY4Nyw1Ljg5MywxMy4yMDUsNS44OTMsMTZMNS44OTMsMTZMNS44OTMsMTZ6Ii8+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xMS45MzIsMjIuNzk3Yy0wLjM3LTAuMjEzLTAuNTk4LTAuNjA4LTAuNTk4LTEuMDM1bDAsMFYxMC4yMzljMC0wLjQyOCwwLjIyOC0wLjgyMiwwLjU5OC0xLj'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwICAgIGMtMC4wMDEsNi45MDQtNS41OTYsMTIuNDk5LTEyLjUsMTIuNWwwLDBDOS4wOTYsMjguNDk5LDMuNSwyMi45MDQsMy41LDE2TDMuNSwxNnogTTguODUzLDIzLjE0NiAgICBjMS44MzMsMS44MzEsNC4zNTIsMi45'+
			'Niw3LjE0NywyLjk2MWwwLDBjMi43OTQtMC4wMDEsNS4zMTQtMS4xMyw3LjE0Ny0yLjk2MWwwLDBjMS44MzEtMS44MzIsMi45Ni00LjM1MiwyLjk2LTcuMTQ2bDAsMCAgICBjMC0yLjc5NS0xLjEyOS01LjMxNC0yLjk2LTcuMTQ3bDAsMEMyMS4zMTQsNy4wMjIsMTguNzk1LDUuODk0LDE2LDUuODkzbDAsMGMtMi43OTUsMC01LjMxNCwxLjEyOS03LjE0NywyLjk2bDAsMCAgICBDNy4wMjIsMTAuNjg2LDUuODk0LDEzLjIwNSw1Ljg5MywxNmwwLDBoMEM1Ljg5NCwxOC43OTUsNy4wMjIsMjEuMzE0LDguODUzLDIzLjE0Nkw4Ljg1MywyMy4xNDZ6Ii8+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0xMi40MzMsMj'+
			'AuNDk4di04Ljk5NWMwLTAuNjYxLDAuNTM2LTEuMTk2LDEuMTk2LTEuMTk2bDAsMGMwLjY2MSwwLDEuMTk2LDAuNTM1LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTIuOTY5LDIxLjY5MywxMi40MzMsMjEuMTU4LDEyLjQzMywyMC40OThMMTIuNDMzLDIwLjQ5OHoiLz4KICAgPHBhdGggZD0iTTE3LjE3NSwyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzUtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYsMCwxLjE5NiwwLjUzNSwxLjE5NiwxLjE5NmwwLDB2OC45OTUgICAgIGMwLDAuNjYtMC41MzYsMS4xOTUtMS4xOTYsMS4xOTVs'+
			'MCwwQzE3LjcxLDIxLjY5MywxNy4xNzUsMjEuMTU4LDE3LjE3NSwyMC40OThMMTcuMTc1LDIwLjQ5OHoiLz4KICA8L2c+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIyLjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1Mi'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMy41LDE2QzMuNSw5LjA5Niw5LjA5NiwzLjUwMSwxNiwzLjVsMCwwYzYuOTA0LDAsMTIuNDk5LDUuNTk2LDEyLjUsMTIuNWwwLDAgICAgYy0wLjAwMSw2LjkwNC01LjU5NiwxMi40OTktMTIuNSwxMi41bDAsMEM5LjA5NiwyOC40OTksMy41LDIy'+
			'LjkwNCwzLjUsMTZMMy41LDE2eiBNOC44NTMsMjMuMTQ2ICAgIGMxLjgzMywxLjgzMSw0LjM1MiwyLjk2LDcuMTQ3LDIuOTYxbDAsMGMyLjc5NC0wLjAwMSw1LjMxNC0xLjEzLDcuMTQ3LTIuOTYxbDAsMGMxLjgzMS0xLjgzMiwyLjk2LTQuMzUyLDIuOTYtNy4xNDZsMCwwICAgIGMwLTIuNzk1LTEuMTI5LTUuMzE0LTIuOTYtNy4xNDdsMCwwQzIxLjMxNCw3LjAyMiwxOC43OTUsNS44OTQsMTYsNS44OTNsMCwwYy0yLjc5NSwwLTUuMzE0LDEuMTI5LTcuMTQ3LDIuOTZsMCwwICAgIEM3LjAyMiwxMC42ODYsNS44OTQsMTMuMjA1LDUuODkzLDE2bDAsMGgwQzUuODk0LDE4Ljc5NSw3LjAyMiwyMS4zMT'+
			'QsOC44NTMsMjMuMTQ2TDguODUzLDIzLjE0NnoiLz4KICA8Zz4KICAgPHBhdGggZD0iTTEyLjQzMywyMC40OTh2LTguOTk1YzAtMC42NjEsMC41MzYtMS4xOTYsMS4xOTYtMS4xOTZsMCwwYzAuNjYxLDAsMS4xOTYsMC41MzUsMS4xOTYsMS4xOTZsMCwwdjguOTk1ICAgICBjMCwwLjY2LTAuNTM2LDEuMTk1LTEuMTk2LDEuMTk1bDAsMEMxMi45NjksMjEuNjkzLDEyLjQzMywyMS4xNTgsMTIuNDMzLDIwLjQ5OEwxMi40MzMsMjAuNDk4eiIvPgogICA8cGF0aCBkPSJNMTcuMTc1LDIwLjQ5OHYtOC45OTVjMC0wLjY2MSwwLjUzNS0xLjE5NiwxLjE5Ni0xLjE5NmwwLDBjMC42NiwwLDEuMTk2LDAuNTM1'+
			'LDEuMTk2LDEuMTk2bDAsMHY4Ljk5NSAgICAgYzAsMC42Ni0wLjUzNiwxLjE5NS0xLjE5NiwxLjE5NWwwLDBDMTcuNzEsMjEuNjkzLDE3LjE3NSwyMS4xNTgsMTcuMTc1LDIwLjQ5OEwxNy4xNzUsMjAuNDk4eiIvPgogIDwvZz4KIDwvZz4KIDxnIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNGRkZGRkYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSI+CiAgPHBhdGggZD0iTTMuNSwxNkMzLjUsOS4wOTYsOS4wOTYsMy41MDEsMTYsMy41bDAsMGM2LjkwNCwwLDEyLjQ5OSw1LjU5NiwxMi41LDEyLjVsMCwwIC'+
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAu'+
			'MiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9In'+
			'NwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjY0IiBmaWxsPSJ3aGl0ZSIgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbn'+
			'Nmb3JtPSJyb3RhdGUoNDUgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuMTI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDkwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAu'+
			'MiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGNhbGNNb2RlPSJzcGxpbmUiIGF0dHJpYnV0ZU5hbWU9InIiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSByPSIwIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDEzNSAxNiAxNikiIGN5PSIzIj4KICA8YW5pbWF0ZSB2YWx1ZXM9IjA7MzswOzAiIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBkdXI9IjFzIiBiZWdpbj0iMC4zNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9In'+
			'NwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjI1IDE2IDE2KSIg'+
			'Y3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjYyNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC'+
			'40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNzVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgY2FsY01vZGU9InNwbGluZSIgYXR0cmlidXRlTmFtZT0iciIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIHI9IjAiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMzE1IDE2IDE2KSIgY3k9IjMiPgogIDxhbmltYXRlIHZhbHVlcz0iMDszOzA7MCIga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGR1cj0iMXMiIGJlZ2luPSIwLjg3NXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJy'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgcj0iMCIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgMTYgMTYpIiBjeT0iMyI+CiAgPGFuaW1hdGUgdmFsdWVzPSIwOzM7MDswIiBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgZHVyPSIxcyIgYmVnaW49IjAuNXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBjYWxjTW9kZT0ic3BsaW5lIiBhdHRyaWJ1dGVOYW1lPSJyIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBoZWlnaHQ9IjI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2Ij4KIDxwYXRoIGZpbGw9IiM2NjY2NjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEsMSkiIGQ9Ik0wIDAgQzUuNDAwNDk3MzYgMC4zMTc2NzYzMiA3LjUyMzM3MDY1IDMuMTk5OTYzMjcgMTEgNyBDMTMuODgxOTg3NzMgNS44MjU4NTY4NSAxNS4zMDY3MDA2OSA0LjY3Nzk2NDI4IDE3LjUgMi4zNzUgQzIwIC0wIDIwIC0wIDI0IDAgQzIzLjY4MjMyMzY4IDUuNDAwNDk3MzYgMjAuODAwMDM2NzMgNy'+
			'41MjMzNzA2NSAxNyAxMSBDMTguMTc0MTQzMTUgMTMuODgxOTg3NzMgMTkuMzIyMDM1NzIgMTUuMzA2NzAwNjkgMjEuNjI1IDE3LjUgQzI0IDIwIDI0IDIwIDI0IDI0IEMxOC41OTk1MDI2NCAyMy42ODIzMjM2OCAxNi40NzY2MjkzNSAyMC44MDAwMzY3MyAxMyAxNyBDMTAuMTE4MDEyMjcgMTguMTc0MTQzMTUgOC42OTMyOTkzMSAxOS4zMjIwMzU3MiA2LjUgMjEuNjI1IEM0IDI0IDQgMjQgMCAyNCBDMC4zMTc2NzYzMiAxOC41OTk1MDI2NCAzLjE5OTk2MzI3IDE2LjQ3NjYyOTM1IDcgMTMgQzUuODI1ODU2ODUgMTAuMTE4MDEyMjcgNC42Nzc5NjQyOCA4LjY5MzI5OTMxIDIuMzc1IDYuNSBDMCA0'+
			'IDAgNCAwIDAgWiAiLz4KPC9zdmc+Cg==';
		me._close__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBoZWlnaHQ9IjI3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI2Ij4KIDxwYXRoIGZpbGw9IiNENjI3MjciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuMjUsLTAuMzc1KSIgZD0iTTAgMCBDMy44MzI5NTgxOSAwLjUyMjY3NjEyIDUuMTA2ODU2ODQgMi42NjQwODM5NCA3Ljc1IDUuMzc1IEM5LjA3IDUuMzc1IDEwLjM5IDUuMzc1IDExLjc1IDUuMzc1IEMxMi41NTQzNzUgNC41NSAxMy4zNTg3NSAzLjcyNSAxNC4xODc1IDIuODc1IEMxNi43NSAwLjM3NSAxNi43NS'+
			'AwLjM3NSAxOS41IDAgQzIxLjc1IDAuMzc1IDIxLjc1IDAuMzc1IDIyLjc1IDEuMzc1IEMyMy4xMjUgNC42MjUgMjMuMTI1IDQuNjI1IDIyLjc1IDguMzc1IEMyMC4yNSAxMS4zMTI1IDIwLjI1IDExLjMxMjUgMTcuNzUgMTMuMzc1IEMxOC40OTA2ODIzOSAxNi40NjE2OTI5MSAxOC40OTA2ODIzOSAxNi40NjE2OTI5MSAyMC44MTI1IDE4LjEyNSBDMjIuNzUgMjAuMzc1IDIyLjc1IDIwLjM3NSAyMyAyNC4xMjUgQzIyLjkxNzUgMjUuMTk3NSAyMi44MzUgMjYuMjcgMjIuNzUgMjcuMzc1IEMxOS41NjI1IDI3LjY4NzUgMTkuNTYyNSAyNy42ODc1IDE1Ljc1IDI3LjM3NSBDMTIuODEyNSAyNC44NzUg'+
			'MTIuODEyNSAyNC44NzUgMTAuNzUgMjIuMzc1IEM3LjY2MzMwNzA5IDIzLjExNTY4MjM5IDcuNjYzMzA3MDkgMjMuMTE1NjgyMzkgNiAyNS40Mzc1IEMzLjc1IDI3LjM3NSAzLjc1IDI3LjM3NSAwIDI3LjYyNSBDLTEuMDcyNSAyNy41NDI1IC0yLjE0NSAyNy40NiAtMy4yNSAyNy4zNzUgQy0zLjU2MjUgMjQuMTg3NSAtMy41NjI1IDI0LjE4NzUgLTMuMjUgMjAuMzc1IEMtMC43NSAxNy40Mzc1IC0wLjc1IDE3LjQzNzUgMS43NSAxNS4zNzUgQzAuNzUxODg4NDIgMTMuMTQ4NDQzMzkgMC4wNDM5OTQyNCAxMS42MTI0NTY4OCAtMS44NzUgMTAuMDYyNSBDLTQuMDgzNjY2NTggNy4zNTE4NjM3NCAtMy'+
			'40OTg1MjY0MSA0LjczMDEwNjU4IC0zLjI1IDEuMzc1IEMtMi4yNSAwLjM3NSAtMi4yNSAwLjM3NSAwIDAgWiAiLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM3My41LDM3MS41IEMgNDY1LjgzNCwzNzEuMzMzIDU1OC4xNjcsMzcxLjUgNjUwLjUsMzcyQyA2ODQuNzIxLDM3Ny4wMjcgNzA3LjU1NCwzOTUuODYgNzE5LDQyOC41QyA3MjAuNDc2LDQzMy40MDYgNzIxLjQ3Niw0MzguNDA2IDcyMiw0NDMuNUMgNzIyLjY2Nyw0ODkuMTY3IDcyMi42NjcsNTM0LjgzMyA3MjIsNTgwLjVDIDcxNi45NzMsNjE0LjcyMSA2OTguMTQsNjM3LjU1NCA2NjUuNSw2NDlDIDY2MC41OTQsNjUwLjQ3NiA2NTUuNTk0LDY1MS40NzYgNjUwLjUsNjUyQyA1NTguMTY3LDY1Mi42NjcgNDY1LjgzMyw2NTIuNjY3IDM3My41LD'+
			'Y1MkMgMzM5LjI3OSw2NDYuOTczIDMxNi40NDYsNjI4LjE0IDMwNSw1OTUuNUMgMzAzLjUyNCw1OTAuNTk0IDMwMi41MjQsNTg1LjU5NCAzMDIsNTgwLjVDIDMwMS4wMzQsNTMyLjQ3MiAzMDEuMzY4LDQ4NC40NzIgMzAzLDQzNi41QyAzMTIuNjY2LDM5OS42NjEgMzM2LjE2NiwzNzcuOTk1IDM3My41LDM3MS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzc1LjUsNDA3LjUgQyA0NjYuNTAxLDQwNy4zMzMgNTU3LjUwMSw0MDcuNSA2NDguNSw0MDhDIDY2OS42NjcsNDExLjgzMyA2ODIuMTY3LDQyNC4zMzMgNjg2LDQ0NS41QyA2'+
			'ODYuNjY3LDQ4OS44MzMgNjg2LjY2Nyw1MzQuMTY3IDY4Niw1NzguNUMgNjgyLjE2Nyw1OTkuNjY3IDY2OS42NjcsNjEyLjE2NyA2NDguNSw2MTZDIDU1Ny41LDYxNi42NjcgNDY2LjUsNjE2LjY2NyAzNzUuNSw2MTZDIDM1NC4zMzMsNjEyLjE2NyAzNDEuODMzLDU5OS42NjcgMzM4LDU3OC41QyAzMzcuMzMzLDUzNC4xNjcgMzM3LjMzMyw0ODkuODMzIDMzOCw0NDUuNUMgMzQyLjAxMyw0MjQuMzIxIDM1NC41MTMsNDExLjY1NCAzNzUuNSw0MDcuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZGVlNGU2IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQyNy41LDQzMS41IEMgNDI2LjUsND'+
			'MxLjUgNDI1LjUsNDMxLjUgNDI0LjUsNDMxLjVDIDQyNC41LDQ4NS4xNjcgNDI0LjUsNTM4LjgzMyA0MjQuNSw1OTIuNUMgNDI1LjUsNTkyLjUgNDI2LjUsNTkyLjUgNDI3LjUsNTkyLjVDIDQyNi40NjksNTkzLjI0OSA0MjUuMzAyLDU5My45MTUgNDI0LDU5NC41QyA0MjMuMzMzLDUzOS41IDQyMy4zMzMsNDg0LjUgNDI0LDQyOS41QyA0MjUuMzAyLDQzMC4wODUgNDI2LjQ2OSw0MzAuNzUxIDQyNy41LDQzMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZlZmUiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDI3LjUsNDMxLjUgQyA0OTcuNTE1LDQ1OC4yMjggNTY3LjUxNSw0ODUu'+
			'MDYyIDYzNy41LDUxMkMgNTY3LjUxNSw1MzguOTM4IDQ5Ny41MTUsNTY1Ljc3MiA0MjcuNSw1OTIuNUMgNDI2LjUsNTkyLjUgNDI1LjUsNTkyLjUgNDI0LjUsNTkyLjVDIDQyNC41LDUzOC44MzMgNDI0LjUsNDg1LjE2NyA0MjQuNSw0MzEuNUMgNDI1LjUsNDMxLjUgNDI2LjUsNDMxLjUgNDI3LjUsNDMxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_youtube__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_youtube__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM3My41LDM3MS41IEMgNDY1LjgzNCwzNzEuMzMzIDU1OC4xNjcsMzcxLjUgNjUwLjUsMzcyQyA2ODQuNzIxLDM3Ny4wMjcgNzA3LjU1NCwzOTUuODYgNzE5LDQyOC41QyA3MjAuNDc2LDQzMy40MDYgNzIxLjQ3Niw0MzguNDA2IDcyMiw0NDMuNUMgNzIyLjY2Nyw0ODkuMTY3IDcyMi42NjcsNTM0LjgzMyA3MjIsNTgwLjVDIDcxNi45NzMsNjE0LjcyMSA2OTguMTQsNjM3LjU1NCA2NjUuNSw2NDlDIDY2MC41OTQsNjUwLjQ3NiA2NTUuNTk0LDY1MS40NzYgNjUwLjUsNjUyQyA1NTguMTY3LDY1Mi42NjcgNDY1LjgzMyw2NTIuNjY3IDM3My41LD'+
			'Y1MkMgMzM5LjI3OSw2NDYuOTczIDMxNi40NDYsNjI4LjE0IDMwNSw1OTUuNUMgMzAzLjUyNCw1OTAuNTk0IDMwMi41MjQsNTg1LjU5NCAzMDIsNTgwLjVDIDMwMS4wMzQsNTMyLjQ3MiAzMDEuMzY4LDQ4NC40NzIgMzAzLDQzNi41QyAzMTIuNjY2LDM5OS42NjEgMzM2LjE2NiwzNzcuOTk1IDM3My41LDM3MS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzc1LjUsNDA3LjUgQyA0NjYuNTAxLDQwNy4zMzMgNTU3LjUwMSw0MDcuNSA2NDguNSw0MDhDIDY2OS42NjcsNDExLjgzMyA2ODIuMTY3LDQyNC4zMzMgNjg2LDQ0NS41QyA2'+
			'ODYuNjY3LDQ4OS44MzMgNjg2LjY2Nyw1MzQuMTY3IDY4Niw1NzguNUMgNjgyLjE2Nyw1OTkuNjY3IDY2OS42NjcsNjEyLjE2NyA2NDguNSw2MTZDIDU1Ny41LDYxNi42NjcgNDY2LjUsNjE2LjY2NyAzNzUuNSw2MTZDIDM1NC4zMzMsNjEyLjE2NyAzNDEuODMzLDU5OS42NjcgMzM4LDU3OC41QyAzMzcuMzMzLDUzNC4xNjcgMzM3LjMzMyw0ODkuODMzIDMzOCw0NDUuNUMgMzQyLjAxMyw0MjQuMzIxIDM1NC41MTMsNDExLjY1NCAzNzUuNSw0MDcuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZGVlNGU2IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQyNy41LDQzMS41IEMgNDI2LjUsND'+
			'MxLjUgNDI1LjUsNDMxLjUgNDI0LjUsNDMxLjVDIDQyNC41LDQ4NS4xNjcgNDI0LjUsNTM4LjgzMyA0MjQuNSw1OTIuNUMgNDI1LjUsNTkyLjUgNDI2LjUsNTkyLjUgNDI3LjUsNTkyLjVDIDQyNi40NjksNTkzLjI0OSA0MjUuMzAyLDU5My45MTUgNDI0LDU5NC41QyA0MjMuMzMzLDUzOS41IDQyMy4zMzMsNDg0LjUgNDI0LDQyOS41QyA0MjUuMzAyLDQzMC4wODUgNDI2LjQ2OSw0MzAuNzUxIDQyNy41LDQzMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZlZmUiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDI3LjUsNDMxLjUgQyA0OTcuNTE1LDQ1OC4yMjggNTY3LjUxNSw0ODUu'+
			'MDYyIDYzNy41LDUxMkMgNTY3LjUxNSw1MzguOTM4IDQ5Ny41MTUsNTY1Ljc3MiA0MjcuNSw1OTIuNUMgNDI2LjUsNTkyLjUgNDI1LjUsNTkyLjUgNDI0LjUsNTkyLjVDIDQyNC41LDUzOC44MzMgNDI0LjUsNDg1LjE2NyA0MjQuNSw0MzEuNUMgNDI1LjUsNDMxLjUgNDI2LjUsNDMxLjUgNDI3LjUsNDMxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_youtube__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg pulse";
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM3My41LDM3MS41IEMgNDY1LjgzNCwzNzEuMzMzIDU1OC4xNjcsMzcxLjUgNjUwLjUsMzcyQyA2ODQuNzIxLDM3Ny4wMjcgNzA3LjU1NCwzOTUuODYgNzE5LDQyOC41QyA3MjAuNDc2LDQzMy40MDYgNzIxLjQ3Niw0MzguNDA2IDcyMiw0NDMuNUMgNzIyLjY2Nyw0ODkuMTY3IDcyMi42NjcsNTM0LjgzMyA3MjIsNTgwLjVDIDcxNi45NzMsNjE0LjcyMSA2OTguMTQsNjM3LjU1NCA2NjUuNSw2NDlDIDY2MC41OTQsNjUwLjQ3NiA2NTUuNTk0LDY1MS40NzYgNjUwLjUsNjUyQyA1NTguMTY3LDY1Mi42NjcgNDY1LjgzMyw2NTIuNjY3IDM3My41LD'+
			'Y1MkMgMzM5LjI3OSw2NDYuOTczIDMxNi40NDYsNjI4LjE0IDMwNSw1OTUuNUMgMzAzLjUyNCw1OTAuNTk0IDMwMi41MjQsNTg1LjU5NCAzMDIsNTgwLjVDIDMwMS4wMzQsNTMyLjQ3MiAzMDEuMzY4LDQ4NC40NzIgMzAzLDQzNi41QyAzMTIuNjY2LDM5OS42NjEgMzM2LjE2NiwzNzcuOTk1IDM3My41LDM3MS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzc1LjUsNDA3LjUgQyA0NjYuNTAxLDQwNy4zMzMgNTU3LjUwMSw0MDcuNSA2NDguNSw0MDhDIDY2OS42NjcsNDExLjgzMyA2ODIuMTY3LDQyNC4zMzMgNjg2LDQ0NS41QyA2'+
			'ODYuNjY3LDQ4OS44MzMgNjg2LjY2Nyw1MzQuMTY3IDY4Niw1NzguNUMgNjgyLjE2Nyw1OTkuNjY3IDY2OS42NjcsNjEyLjE2NyA2NDguNSw2MTZDIDU1Ny41LDYxNi42NjcgNDY2LjUsNjE2LjY2NyAzNzUuNSw2MTZDIDM1NC4zMzMsNjEyLjE2NyAzNDEuODMzLDU5OS42NjcgMzM4LDU3OC41QyAzMzcuMzMzLDUzNC4xNjcgMzM3LjMzMyw0ODkuODMzIDMzOCw0NDUuNUMgMzQyLjAxMyw0MjQuMzIxIDM1NC41MTMsNDExLjY1NCAzNzUuNSw0MDcuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZGVlNGU2IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQyNy41LDQzMS41IEMgNDI2LjUsND'+
			'MxLjUgNDI1LjUsNDMxLjUgNDI0LjUsNDMxLjVDIDQyNC41LDQ4NS4xNjcgNDI0LjUsNTM4LjgzMyA0MjQuNSw1OTIuNUMgNDI1LjUsNTkyLjUgNDI2LjUsNTkyLjUgNDI3LjUsNTkyLjVDIDQyNi40NjksNTkzLjI0OSA0MjUuMzAyLDU5My45MTUgNDI0LDU5NC41QyA0MjMuMzMzLDUzOS41IDQyMy4zMzMsNDg0LjUgNDI0LDQyOS41QyA0MjUuMzAyLDQzMC4wODUgNDI2LjQ2OSw0MzAuNzUxIDQyNy41LDQzMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZlZmUiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDI3LjUsNDMxLjUgQyA0OTcuNTE1LDQ1OC4yMjggNTY3LjUxNSw0ODUu'+
			'MDYyIDYzNy41LDUxMkMgNTY3LjUxNSw1MzguOTM4IDQ5Ny41MTUsNTY1Ljc3MiA0MjcuNSw1OTIuNUMgNDI2LjUsNTkyLjUgNDI1LjUsNTkyLjUgNDI0LjUsNTkyLjVDIDQyNC41LDUzOC44MzMgNDI0LjUsNDg1LjE2NyA0MjQuNSw0MzEuNUMgNDI1LjUsNDMxLjUgNDI2LjUsNDMxLjUgNDI3LjUsNDMxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_vimeo__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_vimeo__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM3My41LDM3MS41IEMgNDY1LjgzNCwzNzEuMzMzIDU1OC4xNjcsMzcxLjUgNjUwLjUsMzcyQyA2ODQuNzIxLDM3Ny4wMjcgNzA3LjU1NCwzOTUuODYgNzE5LDQyOC41QyA3MjAuNDc2LDQzMy40MDYgNzIxLjQ3Niw0MzguNDA2IDcyMiw0NDMuNUMgNzIyLjY2Nyw0ODkuMTY3IDcyMi42NjcsNTM0LjgzMyA3MjIsNTgwLjVDIDcxNi45NzMsNjE0LjcyMSA2OTguMTQsNjM3LjU1NCA2NjUuNSw2NDlDIDY2MC41OTQsNjUwLjQ3NiA2NTUuNTk0LDY1MS40NzYgNjUwLjUsNjUyQyA1NTguMTY3LDY1Mi42NjcgNDY1LjgzMyw2NTIuNjY3IDM3My41LD'+
			'Y1MkMgMzM5LjI3OSw2NDYuOTczIDMxNi40NDYsNjI4LjE0IDMwNSw1OTUuNUMgMzAzLjUyNCw1OTAuNTk0IDMwMi41MjQsNTg1LjU5NCAzMDIsNTgwLjVDIDMwMS4wMzQsNTMyLjQ3MiAzMDEuMzY4LDQ4NC40NzIgMzAzLDQzNi41QyAzMTIuNjY2LDM5OS42NjEgMzM2LjE2NiwzNzcuOTk1IDM3My41LDM3MS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzc1LjUsNDA3LjUgQyA0NjYuNTAxLDQwNy4zMzMgNTU3LjUwMSw0MDcuNSA2NDguNSw0MDhDIDY2OS42NjcsNDExLjgzMyA2ODIuMTY3LDQyNC4zMzMgNjg2LDQ0NS41QyA2'+
			'ODYuNjY3LDQ4OS44MzMgNjg2LjY2Nyw1MzQuMTY3IDY4Niw1NzguNUMgNjgyLjE2Nyw1OTkuNjY3IDY2OS42NjcsNjEyLjE2NyA2NDguNSw2MTZDIDU1Ny41LDYxNi42NjcgNDY2LjUsNjE2LjY2NyAzNzUuNSw2MTZDIDM1NC4zMzMsNjEyLjE2NyAzNDEuODMzLDU5OS42NjcgMzM4LDU3OC41QyAzMzcuMzMzLDUzNC4xNjcgMzM3LjMzMyw0ODkuODMzIDMzOCw0NDUuNUMgMzQyLjAxMyw0MjQuMzIxIDM1NC41MTMsNDExLjY1NCAzNzUuNSw0MDcuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZGVlNGU2IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQyNy41LDQzMS41IEMgNDI2LjUsND'+
			'MxLjUgNDI1LjUsNDMxLjUgNDI0LjUsNDMxLjVDIDQyNC41LDQ4NS4xNjcgNDI0LjUsNTM4LjgzMyA0MjQuNSw1OTIuNUMgNDI1LjUsNTkyLjUgNDI2LjUsNTkyLjUgNDI3LjUsNTkyLjVDIDQyNi40NjksNTkzLjI0OSA0MjUuMzAyLDU5My45MTUgNDI0LDU5NC41QyA0MjMuMzMzLDUzOS41IDQyMy4zMzMsNDg0LjUgNDI0LDQyOS41QyA0MjUuMzAyLDQzMC4wODUgNDI2LjQ2OSw0MzAuNzUxIDQyNy41LDQzMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZlZmUiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDI3LjUsNDMxLjUgQyA0OTcuNTE1LDQ1OC4yMjggNTY3LjUxNSw0ODUu'+
			'MDYyIDYzNy41LDUxMkMgNTY3LjUxNSw1MzguOTM4IDQ5Ny41MTUsNTY1Ljc3MiA0MjcuNSw1OTIuNUMgNDI2LjUsNTkyLjUgNDI1LjUsNTkyLjUgNDI0LjUsNTkyLjVDIDQyNC41LDUzOC44MzMgNDI0LjUsNDg1LjE2NyA0MjQuNSw0MzEuNUMgNDI1LjUsNDMxLjUgNDI2LjUsNDMxLjUgNDI3LjUsNDMxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_vimeo__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_video_vimeo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg pulse";
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM3My41LDM3MS41IEMgNDY1LjgzNCwzNzEuMzMzIDU1OC4xNjcsMzcxLjUgNjUwLjUsMzcyQyA2ODQuNzIxLDM3Ny4wMjcgNzA3LjU1NCwzOTUuODYgNzE5LDQyOC41QyA3MjAuNDc2LDQzMy40MDYgNzIxLjQ3Niw0MzguNDA2IDcyMiw0NDMuNUMgNzIyLjY2Nyw0ODkuMTY3IDcyMi42NjcsNTM0LjgzMyA3MjIsNTgwLjVDIDcxNi45NzMsNjE0LjcyMSA2OTguMTQsNjM3LjU1NCA2NjUuNSw2NDlDIDY2MC41OTQsNjUwLjQ3NiA2NTUuNTk0LDY1MS40NzYgNjUwLjUsNjUyQyA1NTguMTY3LDY1Mi42NjcgNDY1LjgzMyw2NTIuNjY3IDM3My41LD'+
			'Y1MkMgMzM5LjI3OSw2NDYuOTczIDMxNi40NDYsNjI4LjE0IDMwNSw1OTUuNUMgMzAzLjUyNCw1OTAuNTk0IDMwMi41MjQsNTg1LjU5NCAzMDIsNTgwLjVDIDMwMS4wMzQsNTMyLjQ3MiAzMDEuMzY4LDQ4NC40NzIgMzAzLDQzNi41QyAzMTIuNjY2LDM5OS42NjEgMzM2LjE2NiwzNzcuOTk1IDM3My41LDM3MS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzc1LjUsNDA3LjUgQyA0NjYuNTAxLDQwNy4zMzMgNTU3LjUwMSw0MDcuNSA2NDguNSw0MDhDIDY2OS42NjcsNDExLjgzMyA2ODIuMTY3LDQyNC4zMzMgNjg2LDQ0NS41QyA2'+
			'ODYuNjY3LDQ4OS44MzMgNjg2LjY2Nyw1MzQuMTY3IDY4Niw1NzguNUMgNjgyLjE2Nyw1OTkuNjY3IDY2OS42NjcsNjEyLjE2NyA2NDguNSw2MTZDIDU1Ny41LDYxNi42NjcgNDY2LjUsNjE2LjY2NyAzNzUuNSw2MTZDIDM1NC4zMzMsNjEyLjE2NyAzNDEuODMzLDU5OS42NjcgMzM4LDU3OC41QyAzMzcuMzMzLDUzNC4xNjcgMzM3LjMzMyw0ODkuODMzIDMzOCw0NDUuNUMgMzQyLjAxMyw0MjQuMzIxIDM1NC41MTMsNDExLjY1NCAzNzUuNSw0MDcuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZGVlNGU2IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQyNy41LDQzMS41IEMgNDI2LjUsND'+
			'MxLjUgNDI1LjUsNDMxLjUgNDI0LjUsNDMxLjVDIDQyNC41LDQ4NS4xNjcgNDI0LjUsNTM4LjgzMyA0MjQuNSw1OTIuNUMgNDI1LjUsNTkyLjUgNDI2LjUsNTkyLjUgNDI3LjUsNTkyLjVDIDQyNi40NjksNTkzLjI0OSA0MjUuMzAyLDU5My45MTUgNDI0LDU5NC41QyA0MjMuMzMzLDUzOS41IDQyMy4zMzMsNDg0LjUgNDI0LDQyOS41QyA0MjUuMzAyLDQzMC4wODUgNDI2LjQ2OSw0MzAuNzUxIDQyNy41LDQzMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZlZmUiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDI3LjUsNDMxLjUgQyA0OTcuNTE1LDQ1OC4yMjggNTY3LjUxNSw0ODUu'+
			'MDYyIDYzNy41LDUxMkMgNTY3LjUxNSw1MzguOTM4IDQ5Ny41MTUsNTY1Ljc3MiA0MjcuNSw1OTIuNUMgNDI2LjUsNTkyLjUgNDI1LjUsNTkyLjUgNDI0LjUsNTkyLjVDIDQyNC41LDUzOC44MzMgNDI0LjUsNDg1LjE2NyA0MjQuNSw0MzEuNUMgNDI1LjUsNDMxLjUgNDI2LjUsNDMxLjUgNDI3LjUsNDMxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM3My41LDM3MS41IEMgNDY1LjgzNCwzNzEuMzMzIDU1OC4xNjcsMzcxLjUgNjUwLjUsMzcyQyA2ODQuNzIxLDM3Ny4wMjcgNzA3LjU1NCwzOTUuODYgNzE5LDQyOC41QyA3MjAuNDc2LDQzMy40MDYgNzIxLjQ3Niw0MzguNDA2IDcyMiw0NDMuNUMgNzIyLjY2Nyw0ODkuMTY3IDcyMi42NjcsNTM0LjgzMyA3MjIsNTgwLjVDIDcxNi45NzMsNjE0LjcyMSA2OTguMTQsNjM3LjU1NCA2NjUuNSw2NDlDIDY2MC41OTQsNjUwLjQ3NiA2NTUuNTk0LDY1MS40NzYgNjUwLjUsNjUyQyA1NTguMTY3LDY1Mi42NjcgNDY1LjgzMyw2NTIuNjY3IDM3My41LD'+
			'Y1MkMgMzM5LjI3OSw2NDYuOTczIDMxNi40NDYsNjI4LjE0IDMwNSw1OTUuNUMgMzAzLjUyNCw1OTAuNTk0IDMwMi41MjQsNTg1LjU5NCAzMDIsNTgwLjVDIDMwMS4wMzQsNTMyLjQ3MiAzMDEuMzY4LDQ4NC40NzIgMzAzLDQzNi41QyAzMTIuNjY2LDM5OS42NjEgMzM2LjE2NiwzNzcuOTk1IDM3My41LDM3MS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzc1LjUsNDA3LjUgQyA0NjYuNTAxLDQwNy4zMzMgNTU3LjUwMSw0MDcuNSA2NDguNSw0MDhDIDY2OS42NjcsNDExLjgzMyA2ODIuMTY3LDQyNC4zMzMgNjg2LDQ0NS41QyA2'+
			'ODYuNjY3LDQ4OS44MzMgNjg2LjY2Nyw1MzQuMTY3IDY4Niw1NzguNUMgNjgyLjE2Nyw1OTkuNjY3IDY2OS42NjcsNjEyLjE2NyA2NDguNSw2MTZDIDU1Ny41LDYxNi42NjcgNDY2LjUsNjE2LjY2NyAzNzUuNSw2MTZDIDM1NC4zMzMsNjEyLjE2NyAzNDEuODMzLDU5OS42NjcgMzM4LDU3OC41QyAzMzcuMzMzLDUzNC4xNjcgMzM3LjMzMyw0ODkuODMzIDMzOCw0NDUuNUMgMzQyLjAxMyw0MjQuMzIxIDM1NC41MTMsNDExLjY1NCAzNzUuNSw0MDcuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZGVlNGU2IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQyNy41LDQzMS41IEMgNDI2LjUsND'+
			'MxLjUgNDI1LjUsNDMxLjUgNDI0LjUsNDMxLjVDIDQyNC41LDQ4NS4xNjcgNDI0LjUsNTM4LjgzMyA0MjQuNSw1OTIuNUMgNDI1LjUsNTkyLjUgNDI2LjUsNTkyLjUgNDI3LjUsNTkyLjVDIDQyNi40NjksNTkzLjI0OSA0MjUuMzAyLDU5My45MTUgNDI0LDU5NC41QyA0MjMuMzMzLDUzOS41IDQyMy4zMzMsNDg0LjUgNDI0LDQyOS41QyA0MjUuMzAyLDQzMC4wODUgNDI2LjQ2OSw0MzAuNzUxIDQyNy41LDQzMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZlZmUiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDI3LjUsNDMxLjUgQyA0OTcuNTE1LDQ1OC4yMjggNTY3LjUxNSw0ODUu'+
			'MDYyIDYzNy41LDUxMkMgNTY3LjUxNSw1MzguOTM4IDQ5Ny41MTUsNTY1Ljc3MiA0MjcuNSw1OTIuNUMgNDI2LjUsNTkyLjUgNDI1LjUsNTkyLjUgNDI0LjUsNTkyLjVDIDQyNC41LDUzOC44MzMgNDI0LjUsNDg1LjE2NyA0MjQuNSw0MzEuNUMgNDI1LjUsNDMxLjUgNDI2LjUsNDMxLjUgNDI3LjUsNDMxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_video_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg pulse";
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM3My41LDM3MS41IEMgNDY1LjgzNCwzNzEuMzMzIDU1OC4xNjcsMzcxLjUgNjUwLjUsMzcyQyA2ODQuNzIxLDM3Ny4wMjcgNzA3LjU1NCwzOTUuODYgNzE5LDQyOC41QyA3MjAuNDc2LDQzMy40MDYgNzIxLjQ3Niw0MzguNDA2IDcyMiw0NDMuNUMgNzIyLjY2Nyw0ODkuMTY3IDcyMi42NjcsNTM0LjgzMyA3MjIsNTgwLjVDIDcxNi45NzMsNjE0LjcyMSA2OTguMTQsNjM3LjU1NCA2NjUuNSw2NDlDIDY2MC41OTQsNjUwLjQ3NiA2NTUuNTk0LDY1MS40NzYgNjUwLjUsNjUyQyA1NTguMTY3LDY1Mi42NjcgNDY1LjgzMyw2NTIuNjY3IDM3My41LD'+
			'Y1MkMgMzM5LjI3OSw2NDYuOTczIDMxNi40NDYsNjI4LjE0IDMwNSw1OTUuNUMgMzAzLjUyNCw1OTAuNTk0IDMwMi41MjQsNTg1LjU5NCAzMDIsNTgwLjVDIDMwMS4wMzQsNTMyLjQ3MiAzMDEuMzY4LDQ4NC40NzIgMzAzLDQzNi41QyAzMTIuNjY2LDM5OS42NjEgMzM2LjE2NiwzNzcuOTk1IDM3My41LDM3MS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzc1LjUsNDA3LjUgQyA0NjYuNTAxLDQwNy4zMzMgNTU3LjUwMSw0MDcuNSA2NDguNSw0MDhDIDY2OS42NjcsNDExLjgzMyA2ODIuMTY3LDQyNC4zMzMgNjg2LDQ0NS41QyA2'+
			'ODYuNjY3LDQ4OS44MzMgNjg2LjY2Nyw1MzQuMTY3IDY4Niw1NzguNUMgNjgyLjE2Nyw1OTkuNjY3IDY2OS42NjcsNjEyLjE2NyA2NDguNSw2MTZDIDU1Ny41LDYxNi42NjcgNDY2LjUsNjE2LjY2NyAzNzUuNSw2MTZDIDM1NC4zMzMsNjEyLjE2NyAzNDEuODMzLDU5OS42NjcgMzM4LDU3OC41QyAzMzcuMzMzLDUzNC4xNjcgMzM3LjMzMyw0ODkuODMzIDMzOCw0NDUuNUMgMzQyLjAxMyw0MjQuMzIxIDM1NC41MTMsNDExLjY1NCAzNzUuNSw0MDcuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZGVlNGU2IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQyNy41LDQzMS41IEMgNDI2LjUsND'+
			'MxLjUgNDI1LjUsNDMxLjUgNDI0LjUsNDMxLjVDIDQyNC41LDQ4NS4xNjcgNDI0LjUsNTM4LjgzMyA0MjQuNSw1OTIuNUMgNDI1LjUsNTkyLjUgNDI2LjUsNTkyLjUgNDI3LjUsNTkyLjVDIDQyNi40NjksNTkzLjI0OSA0MjUuMzAyLDU5My45MTUgNDI0LDU5NC41QyA0MjMuMzMzLDUzOS41IDQyMy4zMzMsNDg0LjUgNDI0LDQyOS41QyA0MjUuMzAyLDQzMC4wODUgNDI2LjQ2OSw0MzAuNzUxIDQyNy41LDQzMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZlZmUiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDI3LjUsNDMxLjUgQyA0OTcuNTE1LDQ1OC4yMjggNTY3LjUxNSw0ODUu'+
			'MDYyIDYzNy41LDUxMkMgNTY3LjUxNSw1MzguOTM4IDQ5Ny41MTUsNTY1Ljc3MiA0MjcuNSw1OTIuNUMgNDI2LjUsNTkyLjUgNDI1LjUsNTkyLjUgNDI0LjUsNTkyLjVDIDQyNC41LDUzOC44MzMgNDI0LjUsNDg1LjE2NyA0MjQuNSw0MzEuNUMgNDI1LjUsNDMxLjUgNDI2LjUsNDMxLjUgNDI3LjUsNDMxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_file__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmRmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDM3My41LDM3MS41IEMgNDY1LjgzNCwzNzEuMzMzIDU1OC4xNjcsMzcxLjUgNjUwLjUsMzcyQyA2ODQuNzIxLDM3Ny4wMjcgNzA3LjU1NCwzOTUuODYgNzE5LDQyOC41QyA3MjAuNDc2LDQzMy40MDYgNzIxLjQ3Niw0MzguNDA2IDcyMiw0NDMuNUMgNzIyLjY2Nyw0ODkuMTY3IDcyMi42NjcsNTM0LjgzMyA3MjIsNTgwLjVDIDcxNi45NzMsNjE0LjcyMSA2OTguMTQsNjM3LjU1NCA2NjUuNSw2NDlDIDY2MC41OTQsNjUwLjQ3NiA2NTUuNTk0LDY1MS40NzYgNjUwLjUsNjUyQyA1NTguMTY3LDY1Mi42NjcgNDY1LjgzMyw2NTIuNjY3IDM3My41LD'+
			'Y1MkMgMzM5LjI3OSw2NDYuOTczIDMxNi40NDYsNjI4LjE0IDMwNSw1OTUuNUMgMzAzLjUyNCw1OTAuNTk0IDMwMi41MjQsNTg1LjU5NCAzMDIsNTgwLjVDIDMwMS4wMzQsNTMyLjQ3MiAzMDEuMzY4LDQ4NC40NzIgMzAzLDQzNi41QyAzMTIuNjY2LDM5OS42NjEgMzM2LjE2NiwzNzcuOTk1IDM3My41LDM3MS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzc1LjUsNDA3LjUgQyA0NjYuNTAxLDQwNy4zMzMgNTU3LjUwMSw0MDcuNSA2NDguNSw0MDhDIDY2OS42NjcsNDExLjgzMyA2ODIuMTY3LDQyNC4zMzMgNjg2LDQ0NS41QyA2'+
			'ODYuNjY3LDQ4OS44MzMgNjg2LjY2Nyw1MzQuMTY3IDY4Niw1NzguNUMgNjgyLjE2Nyw1OTkuNjY3IDY2OS42NjcsNjEyLjE2NyA2NDguNSw2MTZDIDU1Ny41LDYxNi42NjcgNDY2LjUsNjE2LjY2NyAzNzUuNSw2MTZDIDM1NC4zMzMsNjEyLjE2NyAzNDEuODMzLDU5OS42NjcgMzM4LDU3OC41QyAzMzcuMzMzLDUzNC4xNjcgMzM3LjMzMyw0ODkuODMzIDMzOCw0NDUuNUMgMzQyLjAxMyw0MjQuMzIxIDM1NC41MTMsNDExLjY1NCAzNzUuNSw0MDcuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjZGVlNGU2IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQyNy41LDQzMS41IEMgNDI2LjUsND'+
			'MxLjUgNDI1LjUsNDMxLjUgNDI0LjUsNDMxLjVDIDQyNC41LDQ4NS4xNjcgNDI0LjUsNTM4LjgzMyA0MjQuNSw1OTIuNUMgNDI1LjUsNTkyLjUgNDI2LjUsNTkyLjUgNDI3LjUsNTkyLjVDIDQyNi40NjksNTkzLjI0OSA0MjUuMzAyLDU5My45MTUgNDI0LDU5NC41QyA0MjMuMzMzLDUzOS41IDQyMy4zMzMsNDg0LjUgNDI0LDQyOS41QyA0MjUuMzAyLDQzMC4wODUgNDI2LjQ2OSw0MzAuNzUxIDQyNy41LDQzMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZGZlZmUiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDI3LjUsNDMxLjUgQyA0OTcuNTE1LDQ1OC4yMjggNTY3LjUxNSw0ODUu'+
			'MDYyIDYzNy41LDUxMkMgNTY3LjUxNSw1MzguOTM4IDQ5Ny41MTUsNTY1Ljc3MiA0MjcuNSw1OTIuNUMgNDI2LjUsNTkyLjUgNDI1LjUsNTkyLjUgNDI0LjUsNTkyLjVDIDQyNC41LDUzOC44MzMgNDI0LjUsNDg1LjE2NyA0MjQuNSw0MzEuNUMgNDI1LjUsNDMxLjUgNDI2LjUsNDMxLjUgNDI3LjUsNDMxLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_video_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg pulse";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSI+CiAgPHBhdGggZD0iTTEzLjcxMiwxMy40MDljMS4wMDUsMCwxLjgyLTAuODE1LDEuODItMS44MjFjMC0xLjAwNS0wLjgxNS0xLjgyMS0xLjgyLTEuODIxICAgYy0xLjAwNiwwLTEuODIxLDAuODE1LTEuODIxLDEuODIxQzExLjg5MiwxMi41OTQsMTIuNzA3LDEzLjQwOSwxMy43MTIsMTMuNDA5eiBNMjguMzA0LDcuMzE5ICAgYy0wLjEyNS0wLjEyNS0wLjI5Ny0wLjE5Ni0w'+
			'LjQ3My0wLjE5Nkg0LjE2OWMtMC4xNzYsMC0wLjM0OSwwLjA3MS0wLjQ3NCwwLjE5NkMzLjU3MSw3LjQ0NCwzLjUsNy42MTcsMy41LDcuNzkzdjE2LjQxNCAgIGMwLDAuMTc2LDAuMDcxLDAuMzQ4LDAuMTk2LDAuNDczYzAuMTI1LDAuMTI1LDAuMjk3LDAuMTk3LDAuNDczLDAuMTk3aDIzLjY2MmMwLjE3NiwwLDAuMzQ4LTAuMDcyLDAuNDczLTAuMTk3ICAgczAuMTk2LTAuMjk3LDAuMTk2LTAuNDczVjcuNzkzQzI4LjUsNy42MTcsMjguNDI5LDcuNDQ0LDI4LjMwNCw3LjMxOXogTTQuODM5LDguNDYySDI3LjE2bDAuMDAxLDcuMTg0ICAgYy0wLjU1Ny0wLjM3OC0xLjI5LTAuODc1LTIuMDk1LTEuND'+
			'IxYy0xLjAwMS0wLjY3Ni0yLjI1NC0wLjk4Ni0zLjUwMy0wLjk4OWMtMS4yNjYsMC4wMDItMi41NCwwLjMyMS0zLjU2LDEuMDA5bC0zLjU3NSwyLjQyNiAgIGMtMC4zMjktMC4yMjMtMC44MTMtMC41NTItMS4zNTMtMC45MThjLTAuNTE0LTAuMzQ0LTEuMTI5LTAuNDY2LTEuNzc0LTAuNDY5Yy0xLjE1NiwwLjAwNC0yLjQ1NCwwLjQwNy0zLjU1OCwxLjE1bC0yLjkwNSwxLjk3MSAgIFY4LjQ2MnogTTQuODM5LDIzLjUzN3YtMy41MTJsMy42NTgtMi40ODJjMC44NjctMC41OTQsMS45NzItMC45MjMsMi44MDUtMC45MTljMC40NjYtMC4wMDIsMC44MzEsMC4xMDMsMS4wMjIsMC4yMzggICBjMC4zMzMs'+
			'MC4yMjYsMC42NDUsMC40MzcsMC45MTMsMC42MTlsLTMuODY5LDIuNjI3Yy0wLjMwNiwwLjIwNy0wLjM4NiwwLjYyMy0wLjE3OSwwLjkzYzAuMTMsMC4xODksMC4zNCwwLjI5MywwLjU1NSwwLjI5MyAgIGMwLjEyOSwwLDAuMjYtMC4wMzcsMC4zNzUtMC4xMTVsOC42MzgtNS44NjFjMC43MzQtMC41MDIsMS43Ny0wLjc4LDIuODA3LTAuNzc4YzEuMDIzLTAuMDAyLDIuMDM2LDAuMjY5LDIuNzUxLDAuNzU3ICAgYzEuMjU4LDAuODUzLDIuMzQ2LDEuNTkxLDIuODQ3LDEuOTMxdjYuMjczSDQuODM5eiIvPgogPC9nPgogPGcgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI0'+
			'ZGRkZGRiI+CiAgPHBhdGggZD0iTTEzLjcxMiwxMy40MDljMS4wMDUsMCwxLjgyLTAuODE1LDEuODItMS44MjFjMC0xLjAwNS0wLjgxNS0xLjgyMS0xLjgyLTEuODIxICAgYy0xLjAwNiwwLTEuODIxLDAuODE1LTEuODIxLDEuODIxQzExLjg5MiwxMi41OTQsMTIuNzA3LDEzLjQwOSwxMy43MTIsMTMuNDA5eiBNMjguMzA0LDcuMzE5ICAgYy0wLjEyNS0wLjEyNS0wLjI5Ny0wLjE5Ni0wLjQ3My0wLjE5Nkg0LjE2OWMtMC4xNzYsMC0wLjM0OSwwLjA3MS0wLjQ3NCwwLjE5NkMzLjU3MSw3LjQ0NCwzLjUsNy42MTcsMy41LDcuNzkzdjE2LjQxNCAgIGMwLDAuMTc2LDAuMDcxLDAuMzQ4LDAuMTk2LDAu'+
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEgQmFzaWMvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEtYmFzaWMuZHRkJz4KPCEtLSBHYXJkZW4gR25vbWUgU29mdHdhcmUgLSBTa2luIEJ1dHRvbnMgLS0+CjxzdmcgYmFzZVByb2ZpbGU9ImJhc2ljIiBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSIzMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMycHgiIH'+
			'htbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4Ij4KIDxnIG9wYWNpdHk9IjAuNCIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMTMuNzEyLDEzLjQwOWMxLjAwNSwwLDEuODItMC44MTUsMS44Mi0xLjgyMWMwLTEuMDA1LTAuODE1LTEuODIxLTEuODItMS44MjEgICBjLTEuMDA2LDAtMS44MjEsMC44MTUtMS44MjEsMS44MjFDMTEuODkyLDEyLjU5NCwxMi43MDcsMTMuNDA5'+
			'LDEzLjcxMiwxMy40MDl6IE0yOC4zMDQsNy4zMTkgICBjLTAuMTI1LTAuMTI1LTAuMjk3LTAuMTk2LTAuNDczLTAuMTk2SDQuMTY5Yy0wLjE3NiwwLTAuMzQ5LDAuMDcxLTAuNDc0LDAuMTk2QzMuNTcxLDcuNDQ0LDMuNSw3LjYxNywzLjUsNy43OTN2MTYuNDE0ICAgYzAsMC4xNzYsMC4wNzEsMC4zNDgsMC4xOTYsMC40NzNjMC4xMjUsMC4xMjUsMC4yOTcsMC4xOTcsMC40NzMsMC4xOTdoMjMuNjYyYzAuMTc2LDAsMC4zNDgtMC4wNzIsMC40NzMtMC4xOTcgICBzMC4xOTYtMC4yOTcsMC4xOTYtMC40NzNWNy43OTNDMjguNSw3LjYxNywyOC40MjksNy40NDQsMjguMzA0LDcuMzE5eiBNNC44MzksOC'+
			'40NjJIMjcuMTZsMC4wMDEsNy4xODQgICBjLTAuNTU3LTAuMzc4LTEuMjktMC44NzUtMi4wOTUtMS40MjFjLTEuMDAxLTAuNjc2LTIuMjU0LTAuOTg2LTMuNTAzLTAuOTg5Yy0xLjI2NiwwLjAwMi0yLjU0LDAuMzIxLTMuNTYsMS4wMDlsLTMuNTc1LDIuNDI2ICAgYy0wLjMyOS0wLjIyMy0wLjgxMy0wLjU1Mi0xLjM1My0wLjkxOGMtMC41MTQtMC4zNDQtMS4xMjktMC40NjYtMS43NzQtMC40NjljLTEuMTU2LDAuMDA0LTIuNDU0LDAuNDA3LTMuNTU4LDEuMTVsLTIuOTA1LDEuOTcxICAgVjguNDYyeiBNNC44MzksMjMuNTM3di0zLjUxMmwzLjY1OC0yLjQ4MmMwLjg2Ny0wLjU5NCwxLjk3Mi0wLjky'+
			'MywyLjgwNS0wLjkxOWMwLjQ2Ni0wLjAwMiwwLjgzMSwwLjEwMywxLjAyMiwwLjIzOCAgIGMwLjMzMywwLjIyNiwwLjY0NSwwLjQzNywwLjkxMywwLjYxOWwtMy44NjksMi42MjdjLTAuMzA2LDAuMjA3LTAuMzg2LDAuNjIzLTAuMTc5LDAuOTNjMC4xMywwLjE4OSwwLjM0LDAuMjkzLDAuNTU1LDAuMjkzICAgYzAuMTI5LDAsMC4yNi0wLjAzNywwLjM3NS0wLjExNWw4LjYzOC01Ljg2MWMwLjczNC0wLjUwMiwxLjc3LTAuNzgsMi44MDctMC43NzhjMS4wMjMtMC4wMDIsMi4wMzYsMC4yNjksMi43NTEsMC43NTcgICBjMS4yNTgsMC44NTMsMi4zNDYsMS41OTEsMi44NDcsMS45MzF2Ni4yNzNINC44Mz'+
			'l6Ii8+CiA8L2c+CiA8ZyBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSIjRkZGRkZGIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNiwxNikgc2NhbGUoMS4xKSB0cmFuc2xhdGUoLTE2LC0xNikiPgogIDxwYXRoIGQ9Ik0xMy43MTIsMTMuNDA5YzEuMDA1LDAsMS44Mi0wLjgxNSwxLjgyLTEuODIxYzAtMS4wMDUtMC44MTUtMS44MjEtMS44Mi0xLjgyMSAgIGMtMS4wMDYsMC0xLjgyMSwwLjgxNS0xLjgyMSwxLjgyMUMxMS44OTIsMTIuNTk0LDEyLjcwNywxMy40MDksMTMuNzEyLDEzLjQwOXogTTI4LjMwNCw3LjMxOSAgIGMtMC4xMjUtMC4xMjUtMC4yOTctMC4xOTYtMC40'+
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
		me._ht_info_image__img.setAttribute('src',basePath + 'images/ht_info_image.svg');
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me._ht_info_image__imgo.setAttribute('src',basePath + 'images/ht_info_image__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg pulse";
		el.ggType='svg';
		hs ='';
		hs+='height : 52px;';
		hs+='left : -26px;';
		hs+='position : absolute;';
		hs+='top : -25px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
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
		hs+='background : rgba(59,137,172,0.784314);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 16px;';
		hs+='color : rgba(255,255,255,1);';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmNmY2ZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDUwNy41LDMyNy41IEMgNTEzLjUzMywzMjYuOTY1IDUxOS4xOTksMzI4LjEzMiA1MjQuNSwzMzFDIDU2NC44MzksMzU1LjE3MiA2MDUuNTA2LDM3OC44MzggNjQ2LjUsNDAyQyA2NTIuMjIxLDQwNS41MjcgNjU4LjIyMSw0MDguNTI3IDY2NC41LDQxMUMgNjcwLjQyOSw0MTUuMDIgNjc0LjI2Miw0MjAuNTIgNjc2LDQyNy41QyA2NzYuNjY3LDQ4My44MzMgNjc2LjY2Nyw1NDAuMTY3IDY3Niw1OTYuNUMgNjc0LjI2Miw2MDMuNDggNjcwLjQyOSw2MDguOTggNjY0LjUsNjEzQyA2MTcuNTA4LDYzOS4xNjEgNTcwLjg0MSw2NjUuODI4IDUyNC41LD'+
			'Y5M0MgNTE2LjE2Nyw2OTcuNjY3IDUwNy44MzMsNjk3LjY2NyA0OTkuNSw2OTNDIDQ1My4xNTksNjY1LjgyOCA0MDYuNDkyLDYzOS4xNjEgMzU5LjUsNjEzQyAzNTEuODg4LDYwOC4xMTQgMzQ3Ljg4OCw2MDEuMTE0IDM0Ny41LDU5MkMgMzQ4LjgzMyw1MzguNjY3IDM0OC44MzMsNDg1LjMzMyAzNDcuNSw0MzJDIDM0OS4wNzYsNDE4LjA4MyAzNTYuNzQzLDQwOS40MTcgMzcwLjUsNDA2QyA0MTYuMzA0LDM3OS43NzQgNDYxLjk3MSwzNTMuNjA3IDUwNy41LDMyNy41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNTExLjUsMzc5LjUg'+
			'QyA1NDIuMzAyLDM5Ni43MzUgNTcyLjk2OSw0MTQuMjM1IDYwMy41LDQzMkMgNTczLjA4Miw0NDkuNjI2IDU0Mi41ODIsNDY3LjEyNiA1MTIsNDg0LjVDIDQ4MS40MTgsNDY3LjEyNiA0NTAuOTE4LDQ0OS42MjYgNDIwLjUsNDMyQyA0NTAuODk2LDQxNC40NzMgNDgxLjIyOSwzOTYuOTczIDUxMS41LDM3OS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg3YWEiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNjI3LjUsNDcyLjUgQyA2MjguODI5LDQ5OC4zMzYgNjI4LjgyOSw1MjQuMzM2IDYyNy41LDU1MC41QyA2MDUuMTY3LDUzNy42NjcgNTgyLjgzMyw1MjQuODMzIDU2MC41LDUxMk'+
			'MgNTgyLjg5Niw0OTguODA3IDYwNS4yMyw0ODUuNjQgNjI3LjUsNDcyLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iIzM5ODdhOSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSAzOTYuNSw0NzMuNSBDIDQxOS4yNzQsNDg2LjA1NiA0NDEuOTQxLDQ5OC44OSA0NjQuNSw1MTJDIDQ0Mi4xNjcsNTI0LjgzMyA0MTkuODMzLDUzNy42NjcgMzk3LjUsNTUwLjVDIDM5Ni41LDUyNC44NDIgMzk2LjE2Nyw0OTkuMTc1IDM5Ni41LDQ3My41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg3YWEiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDg2LjUsNTUzLjUgQyA0ODcuODMzLDU2Ni4x'+
			'NDkgNDg4LjQ5OSw1NzkuMTQ5IDQ4OC41LDU5Mi41QyA0ODguMzMzLDYwNS41IDQ4OC4xNjcsNjE4LjUgNDg4LDYzMS41QyA0NjUuNDE4LDYxOC40NTkgNDQyLjkxOCw2MDUuMjkzIDQyMC41LDU5MkMgNDQyLjcyNyw1NzkuMzkyIDQ2NC43MjcsNTY2LjU1OSA0ODYuNSw1NTMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjMzk4N2E5IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDUzNi41LDU1My41IEMgNTU5LjI3NCw1NjYuMDU2IDU4MS45NDEsNTc4Ljg5IDYwNC41LDU5MkMgNTgyLjE2Nyw2MDQuODMzIDU1OS44MzMsNjE3LjY2NyA1MzcuNSw2MzAuNUMgNTM2LjUsNjA0Ljg0MiA1Mz'+
			'YuMTY3LDU3OS4xNzUgNTM2LjUsNTUzLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._hsimage_url__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hsimage_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmNmY2ZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDUwNy41LDMyNy41IEMgNTEzLjUzMywzMjYuOTY1IDUxOS4xOTksMzI4LjEzMiA1MjQuNSwzMzFDIDU2NC44MzksMzU1LjE3MiA2MDUuNTA2LDM3OC44MzggNjQ2LjUsNDAyQyA2NTIuMjIxLDQwNS41MjcgNjU4LjIyMSw0MDguNTI3IDY2NC41LDQxMUMgNjcwLjQyOSw0MTUuMDIgNjc0LjI2Miw0MjAuNTIgNjc2LDQyNy41QyA2NzYuNjY3LDQ4My44MzMgNjc2LjY2Nyw1NDAuMTY3IDY3Niw1OTYuNUMgNjc0LjI2Miw2MDMuNDggNjcwLjQyOSw2MDguOTggNjY0LjUsNjEzQyA2MTcuNTA4LDYzOS4xNjEgNTcwLjg0MSw2NjUuODI4IDUyNC41LD'+
			'Y5M0MgNTE2LjE2Nyw2OTcuNjY3IDUwNy44MzMsNjk3LjY2NyA0OTkuNSw2OTNDIDQ1My4xNTksNjY1LjgyOCA0MDYuNDkyLDYzOS4xNjEgMzU5LjUsNjEzQyAzNTEuODg4LDYwOC4xMTQgMzQ3Ljg4OCw2MDEuMTE0IDM0Ny41LDU5MkMgMzQ4LjgzMyw1MzguNjY3IDM0OC44MzMsNDg1LjMzMyAzNDcuNSw0MzJDIDM0OS4wNzYsNDE4LjA4MyAzNTYuNzQzLDQwOS40MTcgMzcwLjUsNDA2QyA0MTYuMzA0LDM3OS43NzQgNDYxLjk3MSwzNTMuNjA3IDUwNy41LDMyNy41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNTExLjUsMzc5LjUg'+
			'QyA1NDIuMzAyLDM5Ni43MzUgNTcyLjk2OSw0MTQuMjM1IDYwMy41LDQzMkMgNTczLjA4Miw0NDkuNjI2IDU0Mi41ODIsNDY3LjEyNiA1MTIsNDg0LjVDIDQ4MS40MTgsNDY3LjEyNiA0NTAuOTE4LDQ0OS42MjYgNDIwLjUsNDMyQyA0NTAuODk2LDQxNC40NzMgNDgxLjIyOSwzOTYuOTczIDUxMS41LDM3OS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg3YWEiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNjI3LjUsNDcyLjUgQyA2MjguODI5LDQ5OC4zMzYgNjI4LjgyOSw1MjQuMzM2IDYyNy41LDU1MC41QyA2MDUuMTY3LDUzNy42NjcgNTgyLjgzMyw1MjQuODMzIDU2MC41LDUxMk'+
			'MgNTgyLjg5Niw0OTguODA3IDYwNS4yMyw0ODUuNjQgNjI3LjUsNDcyLjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iIzM5ODdhOSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSAzOTYuNSw0NzMuNSBDIDQxOS4yNzQsNDg2LjA1NiA0NDEuOTQxLDQ5OC44OSA0NjQuNSw1MTJDIDQ0Mi4xNjcsNTI0LjgzMyA0MTkuODMzLDUzNy42NjcgMzk3LjUsNTUwLjVDIDM5Ni41LDUyNC44NDIgMzk2LjE2Nyw0OTkuMTc1IDM5Ni41LDQ3My41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg3YWEiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDg2LjUsNTUzLjUgQyA0ODcuODMzLDU2Ni4x'+
			'NDkgNDg4LjQ5OSw1NzkuMTQ5IDQ4OC41LDU5Mi41QyA0ODguMzMzLDYwNS41IDQ4OC4xNjcsNjE4LjUgNDg4LDYzMS41QyA0NjUuNDE4LDYxOC40NTkgNDQyLjkxOCw2MDUuMjkzIDQyMC41LDU5MkMgNDQyLjcyNyw1NzkuMzkyIDQ2NC43MjcsNTY2LjU1OSA0ODYuNSw1NTMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjMzk4N2E5IiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDUzNi41LDU1My41IEMgNTU5LjI3NCw1NjYuMDU2IDU4MS45NDEsNTc4Ljg5IDYwNC41LDU5MkMgNTgyLjE2Nyw2MDQuODMzIDU1OS44MzMsNjE3LjY2NyA1MzcuNSw2MzAuNUMgNTM2LjUsNjA0Ljg0MiA1Mz'+
			'YuMTY3LDU3OS4xNzUgNTM2LjUsNTUzLjUgWiIvPgogPC9nPgo8L3N2Zz4K';
		me._hsimage_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hsimage_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg pulse";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 52px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 52px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmNmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDU0MC41LDI5Ni41IEMgNTQwLjUsMzE5LjE2NyA1NDAuNSwzNDEuODMzIDU0MC41LDM2NC41QyA1NDEuODMzLDM2NC41IDU0My4xNjcsMzY0LjUgNTQ0LjUsMzY0LjVDIDYwNC41LDM4MS4xNjcgNjQyLjgzMyw0MTkuNSA2NTkuNSw0NzkuNUMgNjU5LjUsNDgxLjE2NyA2NTkuNSw0ODIuODMzIDY1OS41LDQ4NC41QyA2NzguNjc0LDQ4NC44MyA2OTcuNjc0LDQ4NC40OTcgNzE2LjUsNDgzLjVDIDczOS42NDMsNDgzLjE0MiA3NTAuODA5LDQ5NC40NzUgNzUwLDUxNy41QyA3NDYuOTg1LDUyOS42ODEgNzM5LjQ4NSw1MzcuMzQ3IDcyNy41LDU0MC'+
			'41QyA3MDQuODMzLDU0MC41IDY4Mi4xNjcsNTQwLjUgNjU5LjUsNTQwLjVDIDY1OS41LDU0MS44MzMgNjU5LjUsNTQzLjE2NyA2NTkuNSw1NDQuNUMgNjQyLjgzMyw2MDQuNSA2MDQuNSw2NDIuODMzIDU0NC41LDY1OS41QyA1NDMuMTY3LDY1OS41IDU0MS44MzMsNjU5LjUgNTQwLjUsNjU5LjVDIDU0MC41LDY4Mi4xNjcgNTQwLjUsNzA0LjgzMyA1NDAuNSw3MjcuNUMgNTMyLjMxNSw3NDguNzUzIDUxNy42NDgsNzU0LjkyIDQ5Ni41LDc0NkMgNDg2LjYwOCw3MzguNzA4IDQ4Mi4yNzQsNzI4Ljg3NCA0ODMuNSw3MTYuNUMgNDg0LjQ5Nyw2OTcuNjc0IDQ4NC44Myw2NzguNjc0IDQ4NC41LDY1OS41'+
			'QyA0ODIuODMzLDY1OS41IDQ4MS4xNjcsNjU5LjUgNDc5LjUsNjU5LjVDIDQxOS41LDY0Mi44MzMgMzgxLjE2Nyw2MDQuNSAzNjQuNSw1NDQuNUMgMzY0LjUsNTQzLjE2NyAzNjQuNSw1NDEuODMzIDM2NC41LDU0MC41QyAzNDEuODMzLDU0MC41IDMxOS4xNjcsNTQwLjUgMjk2LjUsNTQwLjVDIDI3NS4yNDcsNTMyLjMxNSAyNjkuMDgsNTE3LjY0OCAyNzgsNDk2LjVDIDI4NS4yOTIsNDg2LjYwOCAyOTUuMTI2LDQ4Mi4yNzQgMzA3LjUsNDgzLjVDIDMyNi4zMjYsNDg0LjQ5NyAzNDUuMzI2LDQ4NC44MyAzNjQuNSw0ODQuNUMgMzY0LjUsNDgyLjgzMyAzNjQuNSw0ODEuMTY3IDM2NC41LDQ3OS41Qy'+
			'AzNzAuNjUyLDQ1NC4xOTMgMzgyLjMxOSw0MzEuODU5IDM5OS41LDQxMi41QyA0MDUuNDQyLDQwOC4yMjcgNDEwLjc3Niw0MDMuMjI3IDQxNS41LDM5Ny41QyA0MjcuNDU2LDM4Ni41MDggNDQxLjEyMiwzNzguMDA4IDQ1Ni41LDM3MkMgNDY0LjI0OSwzNjkuMzYxIDQ3MS45MTYsMzY2Ljg2MSA0NzkuNSwzNjQuNUMgNDgxLjE2NywzNjQuNSA0ODIuODMzLDM2NC41IDQ4NC41LDM2NC41QyA0ODQuODMsMzQ1LjMyNiA0ODQuNDk3LDMyNi4zMjYgNDgzLjUsMzA3LjVDIDQ4My4xNDIsMjg0LjM1NyA0OTQuNDc1LDI3My4xOTEgNTE3LjUsMjc0QyA1MjkuNjgxLDI3Ny4wMTUgNTM3LjM0NywyODQuNTE1'+
			'IDU0MC41LDI5Ni41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNTQwLjUsMjk2LjUgQyA1NDEuNDk3LDMxOC42NiA1NDEuODMxLDM0MC45OTQgNTQxLjUsMzYzLjVDIDU0Mi43OTEsMzYzLjI2MyA1NDMuNzkxLDM2My41OTYgNTQ0LjUsMzY0LjVDIDU0My4xNjcsMzY0LjUgNTQxLjgzMywzNjQuNSA1NDAuNSwzNjQuNUMgNTQwLjUsMzQxLjgzMyA1NDAuNSwzMTkuMTY3IDU0MC41LDI5Ni41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDgzLjUsMzA3LjUgQyA0OD'+
			'QuNDk3LDMyNi4zMjYgNDg0LjgzLDM0NS4zMjYgNDg0LjUsMzY0LjVDIDQ4Mi44MzMsMzY0LjUgNDgxLjE2NywzNjQuNSA0NzkuNSwzNjQuNUMgNDgwLjU2OCwzNjMuNTY2IDQ4MS45MDEsMzYzLjIzMiA0ODMuNSwzNjMuNUMgNDgzLjUsMzQ0LjgzMyA0ODMuNSwzMjYuMTY3IDQ4My41LDMwNy41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNkNGRjZTAiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDE1LjUsMzk3LjUgQyA0MTAuNzc2LDQwMy4yMjcgNDA1LjQ0Miw0MDguMjI3IDM5OS41LDQxMi41QyA0MDQuMjI0LDQwNi43NzMgNDA5LjU1OCw0MDEuNzczIDQxNS41LDM5Ny41IFoiLz4K'+
			'IDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWEiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDgzLjUsNDIxLjUgQyA0ODAuODkzLDQzNS41NDcgNDg1LjIyNiw0NDcuMDQ3IDQ5Ni41LDQ1NkMgNTEyLjA2Myw0NjMuOTgzIDUyNS4yMyw0NjEuMTQ5IDUzNiw0NDcuNUMgNTQwLjAyNyw0MzkuNjcxIDU0MS41MjcsNDMxLjMzNyA1NDAuNSw0MjIuNUMgNTcxLjI0Niw0MzIuNzQ2IDU5MS45MTMsNDUzLjI0NiA2MDIuNSw0ODRDIDU4NS4yMDMsNDgwLjczMiA1NzIuNzAzLDQ4Ni44OTkgNTY1LDUwMi41QyA1NjAuOTMzLDUyMS41NCA1NjguMDk5LDUzNC4wNCA1ODYuNSw1NDBDIDU5MS40ODksNT'+
			'QwLjQ5OSA1OTYuNDg5LDU0MC42NjYgNjAxLjUsNTQwLjVDIDU5My4yNzQsNTY2LjkgNTc2LjYwNyw1ODYuMDY3IDU1MS41LDU5OEMgNTQ3Ljk3OSw1OTkuNjc0IDU0NC4zMTMsNjAwLjg0IDU0MC41LDYwMS41QyA1NDMuMDc4LDU4Mi40NTcgNTM1LjQxMSw1NjkuOTU3IDUxNy41LDU2NEMgNTAwLjEzNSw1NjIuMzc3IDQ4OC45NjgsNTY5Ljg3NyA0ODQsNTg2LjVDIDQ4My42NDEsNTkxLjg1OSA0ODMuNjQxLDU5Ny4xOTMgNDg0LDYwMi41QyA0NTMuMjQ2LDU5MS45MTMgNDMyLjc0Niw1NzEuMjQ2IDQyMi41LDU0MC41QyA0NDEuNTQzLDU0My4wNzggNDU0LjA0Myw1MzUuNDExIDQ2MCw1MTcuNUMg'+
			'NDYxLjYyMyw1MDAuMTM1IDQ1NC4xMjMsNDg4Ljk2OCA0MzcuNSw0ODRDIDQzMi4xNDEsNDgzLjY0MSA0MjYuODA3LDQ4My42NDEgNDIxLjUsNDg0QyA0MzIuMzUxLDQ1My4zMTYgNDUzLjAxOCw0MzIuNDgzIDQ4My41LDQyMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzY0LjUsNDc5LjUgQyAzNjQuNSw0ODEuMTY3IDM2NC41LDQ4Mi44MzMgMzY0LjUsNDg0LjVDIDM0NS4zMjYsNDg0LjgzIDMyNi4zMjYsNDg0LjQ5NyAzMDcuNSw0ODMuNUMgMzI2LjE2Nyw0ODMuNSAzNDQuODMzLDQ4My41IDM2My41LDQ4My41QyAzNjMuMj'+
			'MyLDQ4MS45MDEgMzYzLjU2Niw0ODAuNTY4IDM2NC41LDQ3OS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNjU5LjUsNDc5LjUgQyA2NjAuNDM0LDQ4MC41NjggNjYwLjc2OCw0ODEuOTAxIDY2MC41LDQ4My41QyA2NzkuMTY3LDQ4My41IDY5Ny44MzMsNDgzLjUgNzE2LjUsNDgzLjVDIDY5Ny42NzQsNDg0LjQ5NyA2NzguNjc0LDQ4NC44MyA2NTkuNSw0ODQuNUMgNjU5LjUsNDgyLjgzMyA2NTkuNSw0ODEuMTY3IDY1OS41LDQ3OS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmOGZhZmEiIHN0eWxlPSJvcGFjaXR5'+
			'OjEiIGQ9Ik0gNTA3LjUsNDg3LjUgQyA1MjYuOTc2LDQ4Ny40NzUgNTM2LjQ3Niw0OTcuMTQyIDUzNiw1MTYuNUMgNTMxLjcwNSw1MzAuNTY3IDUyMi4yMDUsNTM3LjA2NyA1MDcuNSw1MzZDIDQ5My40MzMsNTMxLjcwNSA0ODYuOTMzLDUyMi4yMDUgNDg4LDUwNy41QyA0OTAuNjgyLDQ5Ni45ODYgNDk3LjE4Miw0OTAuMzE5IDUwNy41LDQ4Ny41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMjk2LjUsNTQwLjUgQyAzMTkuMTY3LDU0MC41IDM0MS44MzMsNTQwLjUgMzY0LjUsNTQwLjVDIDM2NC41LDU0MS44MzMgMzY0LjUsNTQzLj'+
			'E2NyAzNjQuNSw1NDQuNUMgMzYzLjU5Niw1NDMuNzkxIDM2My4yNjMsNTQyLjc5MSAzNjMuNSw1NDEuNUMgMzQwLjk5NCw1NDEuODMxIDMxOC42Niw1NDEuNDk3IDI5Ni41LDU0MC41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNzI3LjUsNTQwLjUgQyA3MDUuMzQsNTQxLjQ5NyA2ODMuMDA2LDU0MS44MzEgNjYwLjUsNTQxLjVDIDY2MC43MzcsNTQyLjc5MSA2NjAuNDA0LDU0My43OTEgNjU5LjUsNTQ0LjVDIDY1OS41LDU0My4xNjcgNjU5LjUsNTQxLjgzMyA2NTkuNSw1NDAuNUMgNjgyLjE2Nyw1NDAuNSA3MDQuODMzLDU0MC41'+
			'IDcyNy41LDU0MC41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDc5LjUsNjU5LjUgQyA0ODEuMTY3LDY1OS41IDQ4Mi44MzMsNjU5LjUgNDg0LjUsNjU5LjVDIDQ4NC44Myw2NzguNjc0IDQ4NC40OTcsNjk3LjY3NCA0ODMuNSw3MTYuNUMgNDgzLjUsNjk3LjgzMyA0ODMuNSw2NzkuMTY3IDQ4My41LDY2MC41QyA0ODEuOTAxLDY2MC43NjggNDgwLjU2OCw2NjAuNDM0IDQ3OS41LDY1OS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNTQ0LjUsNjU5LjUgQyA1ND'+
			'MuNzkxLDY2MC40MDQgNTQyLjc5MSw2NjAuNzM3IDU0MS41LDY2MC41QyA1NDEuODMxLDY4My4wMDYgNTQxLjQ5Nyw3MDUuMzQgNTQwLjUsNzI3LjVDIDU0MC41LDcwNC44MzMgNTQwLjUsNjgyLjE2NyA1NDAuNSw2NTkuNUMgNTQxLjgzMyw2NTkuNSA1NDMuMTY3LDY1OS41IDU0NC41LDY1OS41IFoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hsimage_node__img.setAttribute('src',hs);
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._hsimage_node__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPHN2ZyBoZWlnaHQ9IjEwMjRweCIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOm'+
			'V2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDI0cHgiPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTEuNSw4MS41IEMgNjI5LjU1Niw3OC41Mzg1IDc0NC43MjIsMTI3Ljg3MiA4MzcsMjI5LjVDIDkyMC43MzcsMzI5LjQyMSA5NTQuNDA0LDQ0NC40MjEgOTM4LDU3NC41QyA5MTQuNjE5LDcxMS4yMDkgODQzLjc4Niw4MTUuMDQzIDcyNS41LDg4NkMgNjExLjE4OCw5NDguMzAxIDQ5Mi4xODgsOTU4Ljk2OCAzNjguNSw5MThDIDI2OC41NjUsODgxLjM5MSAxOTEuNzMy'+
			'LDgxNy4yMjQgMTM4LDcyNS41QyA3NS42OTg5LDYxMS4xODggNjUuMDMyMyw0OTIuMTg4IDEwNiwzNjguNUMgMTQyLjYwOSwyNjguNTY1IDIwNi43NzYsMTkxLjczMiAyOTguNSwxMzhDIDM1OC42MDEsMTA0LjM5NSA0MjIuOTM0LDg1LjU2MTYgNDkxLjUsODEuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIjM2E4OWFjIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDQ5Mi41LDExNy41IEMgNjExLjExOCwxMTQuNTE3IDcxMi4yODUsMTU0LjUxNyA3OTYsMjM3LjVDIDg4My4wNDYsMzMxLjk4OCA5MTguMzc5LDQ0My4zMjEgOTAyLDU3MS41QyA4ODEuNjksNjg5LjM2MiA4MjEuODU3LDc4MC'+
			'44NjIgNzIyLjUsODQ2QyA2MTMuMjk0LDkxMS4yODggNDk4LjI5NCw5MjMuNjIxIDM3Ny41LDg4M0MgMjYzLjMzMyw4MzkuNSAxODQuNSw3NjAuNjY3IDE0MSw2NDYuNUMgMTAyLjI1Miw1MzIuMzY4IDExMS41ODYsNDIyLjM2OCAxNjksMzE2LjVDIDIzMi43MjgsMjA5LjQ5NSAzMjYuMjI4LDE0NC44MjggNDQ5LjUsMTIyLjVDIDQ2My45MzEsMTIwLjM1OSA0NzguMjY0LDExOC42OTMgNDkyLjUsMTE3LjUgWiIvPgogPC9nPgogPGc+CiAgPHBhdGggZmlsbD0iI2ZlZmZmZSIgc3R5bGU9Im9wYWNpdHk6MSIgZD0iTSA0OTIuNSwxMzkuNSBDIDYxMy42NTgsMTM2LjUxOCA3MTQuNDkyLDE3OS44NTIg'+
			'Nzk1LDI2OS41QyA4NzcuMDksMzcwLjU1OCA5MDIuNDI0LDQ4NC41NTggODcxLDYxMS41QyA4MzguMDA3LDcyMi40ODkgNzY5LjE3NCw4MDIuNjU2IDY2NC41LDg1MkMgNTYyLjgzMyw4OTUuMzMzIDQ2MS4xNjcsODk1LjMzMyAzNTkuNSw4NTJDIDI1Ny41OTUsODAzLjc1OSAxODkuNDI5LDcyNS45MjYgMTU1LDYxOC41QyAxMjEuNjM5LDQ5NC45NzggMTQzLjMwNiwzODIuMzExIDIyMCwyODAuNUMgMjkwLjY1LDE5NS4wODggMzgxLjQ4NCwxNDguMDg4IDQ5Mi41LDEzOS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWIiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDkzLjUsMT'+
			'YzLjUgQyA2MTkuNjQ4LDE2MC45OTggNzIwLjQ4MSwyMDkuNjY1IDc5NiwzMDkuNUMgODYyLjQwMiw0MDguMDI4IDg3Ny40MDIsNTE0LjAyOCA4NDEsNjI3LjVDIDc5NS43ODQsNzQ2LjA0NSA3MTEuNjE3LDgyMC44NzggNTg4LjUsODUyQyA0NzIuODg5LDg3NC43NjYgMzcwLjIyMyw4NDguNDMzIDI4MC41LDc3M0MgMTkwLjg4Nyw2ODguODYxIDE1My4wNTQsNTg1LjM2MSAxNjcsNDYyLjVDIDE4NS40NzEsMzUxLjk1NCAyNDIuMzA0LDI2Ny43ODcgMzM3LjUsMjEwQyAzODYuMDYsMTgyLjY0NCA0MzguMDYsMTY3LjE0NCA0OTMuNSwxNjMuNSBaIi8+CiA8L2c+CiA8Zz4KICA8cGF0aCBmaWxsPSIj'+
			'ZmNmZGZkIiBzdHlsZT0ib3BhY2l0eToxIiBkPSJNIDU0MC41LDI5Ni41IEMgNTQwLjUsMzE5LjE2NyA1NDAuNSwzNDEuODMzIDU0MC41LDM2NC41QyA1NDEuODMzLDM2NC41IDU0My4xNjcsMzY0LjUgNTQ0LjUsMzY0LjVDIDYwNC41LDM4MS4xNjcgNjQyLjgzMyw0MTkuNSA2NTkuNSw0NzkuNUMgNjU5LjUsNDgxLjE2NyA2NTkuNSw0ODIuODMzIDY1OS41LDQ4NC41QyA2NzguNjc0LDQ4NC44MyA2OTcuNjc0LDQ4NC40OTcgNzE2LjUsNDgzLjVDIDczOS42NDMsNDgzLjE0MiA3NTAuODA5LDQ5NC40NzUgNzUwLDUxNy41QyA3NDYuOTg1LDUyOS42ODEgNzM5LjQ4NSw1MzcuMzQ3IDcyNy41LDU0MC'+
			'41QyA3MDQuODMzLDU0MC41IDY4Mi4xNjcsNTQwLjUgNjU5LjUsNTQwLjVDIDY1OS41LDU0MS44MzMgNjU5LjUsNTQzLjE2NyA2NTkuNSw1NDQuNUMgNjQyLjgzMyw2MDQuNSA2MDQuNSw2NDIuODMzIDU0NC41LDY1OS41QyA1NDMuMTY3LDY1OS41IDU0MS44MzMsNjU5LjUgNTQwLjUsNjU5LjVDIDU0MC41LDY4Mi4xNjcgNTQwLjUsNzA0LjgzMyA1NDAuNSw3MjcuNUMgNTMyLjMxNSw3NDguNzUzIDUxNy42NDgsNzU0LjkyIDQ5Ni41LDc0NkMgNDg2LjYwOCw3MzguNzA4IDQ4Mi4yNzQsNzI4Ljg3NCA0ODMuNSw3MTYuNUMgNDg0LjQ5Nyw2OTcuNjc0IDQ4NC44Myw2NzguNjc0IDQ4NC41LDY1OS41'+
			'QyA0ODIuODMzLDY1OS41IDQ4MS4xNjcsNjU5LjUgNDc5LjUsNjU5LjVDIDQxOS41LDY0Mi44MzMgMzgxLjE2Nyw2MDQuNSAzNjQuNSw1NDQuNUMgMzY0LjUsNTQzLjE2NyAzNjQuNSw1NDEuODMzIDM2NC41LDU0MC41QyAzNDEuODMzLDU0MC41IDMxOS4xNjcsNTQwLjUgMjk2LjUsNTQwLjVDIDI3NS4yNDcsNTMyLjMxNSAyNjkuMDgsNTE3LjY0OCAyNzgsNDk2LjVDIDI4NS4yOTIsNDg2LjYwOCAyOTUuMTI2LDQ4Mi4yNzQgMzA3LjUsNDgzLjVDIDMyNi4zMjYsNDg0LjQ5NyAzNDUuMzI2LDQ4NC44MyAzNjQuNSw0ODQuNUMgMzY0LjUsNDgyLjgzMyAzNjQuNSw0ODEuMTY3IDM2NC41LDQ3OS41Qy'+
			'AzNzAuNjUyLDQ1NC4xOTMgMzgyLjMxOSw0MzEuODU5IDM5OS41LDQxMi41QyA0MDUuNDQyLDQwOC4yMjcgNDEwLjc3Niw0MDMuMjI3IDQxNS41LDM5Ny41QyA0MjcuNDU2LDM4Ni41MDggNDQxLjEyMiwzNzguMDA4IDQ1Ni41LDM3MkMgNDY0LjI0OSwzNjkuMzYxIDQ3MS45MTYsMzY2Ljg2MSA0NzkuNSwzNjQuNUMgNDgxLjE2NywzNjQuNSA0ODIuODMzLDM2NC41IDQ4NC41LDM2NC41QyA0ODQuODMsMzQ1LjMyNiA0ODQuNDk3LDMyNi4zMjYgNDgzLjUsMzA3LjVDIDQ4My4xNDIsMjg0LjM1NyA0OTQuNDc1LDI3My4xOTEgNTE3LjUsMjc0QyA1MjkuNjgxLDI3Ny4wMTUgNTM3LjM0NywyODQuNTE1'+
			'IDU0MC41LDI5Ni41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNTQwLjUsMjk2LjUgQyA1NDEuNDk3LDMxOC42NiA1NDEuODMxLDM0MC45OTQgNTQxLjUsMzYzLjVDIDU0Mi43OTEsMzYzLjI2MyA1NDMuNzkxLDM2My41OTYgNTQ0LjUsMzY0LjVDIDU0My4xNjcsMzY0LjUgNTQxLjgzMywzNjQuNSA1NDAuNSwzNjQuNUMgNTQwLjUsMzQxLjgzMyA1NDAuNSwzMTkuMTY3IDU0MC41LDI5Ni41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDgzLjUsMzA3LjUgQyA0OD'+
			'QuNDk3LDMyNi4zMjYgNDg0LjgzLDM0NS4zMjYgNDg0LjUsMzY0LjVDIDQ4Mi44MzMsMzY0LjUgNDgxLjE2NywzNjQuNSA0NzkuNSwzNjQuNUMgNDgwLjU2OCwzNjMuNTY2IDQ4MS45MDEsMzYzLjIzMiA0ODMuNSwzNjMuNUMgNDgzLjUsMzQ0LjgzMyA0ODMuNSwzMjYuMTY3IDQ4My41LDMwNy41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNkNGRjZTAiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDE1LjUsMzk3LjUgQyA0MTAuNzc2LDQwMy4yMjcgNDA1LjQ0Miw0MDguMjI3IDM5OS41LDQxMi41QyA0MDQuMjI0LDQwNi43NzMgNDA5LjU1OCw0MDEuNzczIDQxNS41LDM5Ny41IFoiLz4K'+
			'IDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzOTg4YWEiIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDgzLjUsNDIxLjUgQyA0ODAuODkzLDQzNS41NDcgNDg1LjIyNiw0NDcuMDQ3IDQ5Ni41LDQ1NkMgNTEyLjA2Myw0NjMuOTgzIDUyNS4yMyw0NjEuMTQ5IDUzNiw0NDcuNUMgNTQwLjAyNyw0MzkuNjcxIDU0MS41MjcsNDMxLjMzNyA1NDAuNSw0MjIuNUMgNTcxLjI0Niw0MzIuNzQ2IDU5MS45MTMsNDUzLjI0NiA2MDIuNSw0ODRDIDU4NS4yMDMsNDgwLjczMiA1NzIuNzAzLDQ4Ni44OTkgNTY1LDUwMi41QyA1NjAuOTMzLDUyMS41NCA1NjguMDk5LDUzNC4wNCA1ODYuNSw1NDBDIDU5MS40ODksNT'+
			'QwLjQ5OSA1OTYuNDg5LDU0MC42NjYgNjAxLjUsNTQwLjVDIDU5My4yNzQsNTY2LjkgNTc2LjYwNyw1ODYuMDY3IDU1MS41LDU5OEMgNTQ3Ljk3OSw1OTkuNjc0IDU0NC4zMTMsNjAwLjg0IDU0MC41LDYwMS41QyA1NDMuMDc4LDU4Mi40NTcgNTM1LjQxMSw1NjkuOTU3IDUxNy41LDU2NEMgNTAwLjEzNSw1NjIuMzc3IDQ4OC45NjgsNTY5Ljg3NyA0ODQsNTg2LjVDIDQ4My42NDEsNTkxLjg1OSA0ODMuNjQxLDU5Ny4xOTMgNDg0LDYwMi41QyA0NTMuMjQ2LDU5MS45MTMgNDMyLjc0Niw1NzEuMjQ2IDQyMi41LDU0MC41QyA0NDEuNTQzLDU0My4wNzggNDU0LjA0Myw1MzUuNDExIDQ2MCw1MTcuNUMg'+
			'NDYxLjYyMyw1MDAuMTM1IDQ1NC4xMjMsNDg4Ljk2OCA0MzcuNSw0ODRDIDQzMi4xNDEsNDgzLjY0MSA0MjYuODA3LDQ4My42NDEgNDIxLjUsNDg0QyA0MzIuMzUxLDQ1My4zMTYgNDUzLjAxOCw0MzIuNDgzIDQ4My41LDQyMS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMzY0LjUsNDc5LjUgQyAzNjQuNSw0ODEuMTY3IDM2NC41LDQ4Mi44MzMgMzY0LjUsNDg0LjVDIDM0NS4zMjYsNDg0LjgzIDMyNi4zMjYsNDg0LjQ5NyAzMDcuNSw0ODMuNUMgMzI2LjE2Nyw0ODMuNSAzNDQuODMzLDQ4My41IDM2My41LDQ4My41QyAzNjMuMj'+
			'MyLDQ4MS45MDEgMzYzLjU2Niw0ODAuNTY4IDM2NC41LDQ3OS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNjU5LjUsNDc5LjUgQyA2NjAuNDM0LDQ4MC41NjggNjYwLjc2OCw0ODEuOTAxIDY2MC41LDQ4My41QyA2NzkuMTY3LDQ4My41IDY5Ny44MzMsNDgzLjUgNzE2LjUsNDgzLjVDIDY5Ny42NzQsNDg0LjQ5NyA2NzguNjc0LDQ4NC44MyA2NTkuNSw0ODQuNUMgNjU5LjUsNDgyLjgzMyA2NTkuNSw0ODEuMTY3IDY1OS41LDQ3OS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmOGZhZmEiIHN0eWxlPSJvcGFjaXR5'+
			'OjEiIGQ9Ik0gNTA3LjUsNDg3LjUgQyA1MjYuOTc2LDQ4Ny40NzUgNTM2LjQ3Niw0OTcuMTQyIDUzNiw1MTYuNUMgNTMxLjcwNSw1MzAuNTY3IDUyMi4yMDUsNTM3LjA2NyA1MDcuNSw1MzZDIDQ5My40MzMsNTMxLjcwNSA0ODYuOTMzLDUyMi4yMDUgNDg4LDUwNy41QyA0OTAuNjgyLDQ5Ni45ODYgNDk3LjE4Miw0OTAuMzE5IDUwNy41LDQ4Ny41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gMjk2LjUsNTQwLjUgQyAzMTkuMTY3LDU0MC41IDM0MS44MzMsNTQwLjUgMzY0LjUsNTQwLjVDIDM2NC41LDU0MS44MzMgMzY0LjUsNTQzLj'+
			'E2NyAzNjQuNSw1NDQuNUMgMzYzLjU5Niw1NDMuNzkxIDM2My4yNjMsNTQyLjc5MSAzNjMuNSw1NDEuNUMgMzQwLjk5NCw1NDEuODMxIDMxOC42Niw1NDEuNDk3IDI5Ni41LDU0MC41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNzI3LjUsNTQwLjUgQyA3MDUuMzQsNTQxLjQ5NyA2ODMuMDA2LDU0MS44MzEgNjYwLjUsNTQxLjVDIDY2MC43MzcsNTQyLjc5MSA2NjAuNDA0LDU0My43OTEgNjU5LjUsNTQ0LjVDIDY1OS41LDU0My4xNjcgNjU5LjUsNTQxLjgzMyA2NTkuNSw1NDAuNUMgNjgyLjE2Nyw1NDAuNSA3MDQuODMzLDU0MC41'+
			'IDcyNy41LDU0MC41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzc5OTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNDc5LjUsNjU5LjUgQyA0ODEuMTY3LDY1OS41IDQ4Mi44MzMsNjU5LjUgNDg0LjUsNjU5LjVDIDQ4NC44Myw2NzguNjc0IDQ4NC40OTcsNjk3LjY3NCA0ODMuNSw3MTYuNUMgNDgzLjUsNjk3LjgzMyA0ODMuNSw2NzkuMTY3IDQ4My41LDY2MC41QyA0ODEuOTAxLDY2MC43NjggNDgwLjU2OCw2NjAuNDM0IDQ3OS41LDY1OS41IFoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMzNzdhOTciIHN0eWxlPSJvcGFjaXR5OjEiIGQ9Ik0gNTQ0LjUsNjU5LjUgQyA1ND'+
			'MuNzkxLDY2MC40MDQgNTQyLjc5MSw2NjAuNzM3IDU0MS41LDY2MC41QyA1NDEuODMxLDY4My4wMDYgNTQxLjQ5Nyw3MDUuMzQgNTQwLjUsNzI3LjVDIDU0MC41LDcwNC44MzMgNTQwLjUsNjgyLjE2NyA1NDAuNSw2NTkuNUMgNTQxLjgzMyw2NTkuNSA1NDMuMTY3LDY1OS41IDU0NC41LDY1OS41IFoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._hsimage_node__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggSubElementOver = elo;
		el.ggId="hsimage_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg pulse";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 48px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTM3MjIgLTI2MDYgMzIgMzIiIHhtbG5zOmdyYXBoPSJodHRwOi8vbnMuYWRvYmUuY29tL0dyYXBocy8xLjAvIiBoZWlnaHQ9IjMycH'+
			'giIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9Ii0zNzIyIC0yNjA2IDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmE9Imh0dHA6Ly9ucy5hZG9iZS5jb20vQWRvYmVTVkdWaWV3ZXJFeHRlbnNpb25zLzMuMC8iIHdpZHRoPSIzMnB4IiB4bWxuczppPSJodHRwOi8vbnMuYWRvYmUuY29tL0Fkb2JlSWxsdXN0cmF0b3IvMTAuMC8iIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOng9Imh0dHA6Ly9ucy5hZG9iZS5jb20vRXh0ZW5zaWJpbGl0eS8xLjAvIiB4PSIwcHgiIHk9IjBweCI+CiA8'+
			'ZyBpZD0iTGF5ZXJfMSIvPgogPGcgaWQ9IkViZW5lXzEiLz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPGc+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDMgICAgIGMtMC41MjUtMC41MTMtMS4zNjYtMC41MDQtMS44OCwwLjAyYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMSwxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OSAgICAgYzAuMzQsMCwwLjY4LTAuMTMsMC45NC0wLjM5bDkuNzE3LTkuNz'+
			'E3Qy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiLz4KICAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzN2gtMTIuMzI1di0xMi4zMjZoMTEuODIxbDIuMjUyLTIuMjUyYy0wLjE2Ni0wLjA4Ni0wLjM1Mi0wLjE0MS0wLjU1Mi0wLjE0MWgtMTQuNzE4ICAgICBjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5YzAsMC42NiwwLjUzNSwxLjE5NiwxLjE5NiwxLjE5NmgxNC43MThjMC42NjEsMCwxLjE5Ny0wLjUzNiwxLjE5Ny0xLjE5NnYtMTAuNDAzICAgICBsLTIuMzkzLDIuMzkzVi0yNTgzLjgz'+
			'N3oiLz4KICAgPC9nPgogICA8ZyBhOmFkb2JlLWJsZW5kaW5nLW1vZGU9Im11bHRpcGx5IiBvcGFjaXR5PSIwLjQiPgogICAgPHBhdGggYTphZG9iZS1ibGVuZGluZy1tb2RlPSJub3JtYWwiIHN0cm9rZT0iIzFBMTcxQiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iICAgICBNLTM2OTUuNDczLTI1OTguMTQ2Yy0wLjUxOS0wLjUxOS0xLjM2MS0wLjUxOS0xLjg3OSwwbC04Ljc4Nyw4Ljc4N2wtMi4yOTEtMi4yNDNjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMiAgICAgYy0wLjUxMywwLjUyNS0wLjUwNCwxLjM2NywwLjAyMS'+
			'wxLjg4bDMuMjMsMy4xNjNjMC4yNTksMC4yNTMsMC41OTQsMC4zNzksMC45MywwLjM3OWMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxNyAgICAgQy0zNjk0Ljk1NC0yNTk2Ljc4NS0zNjk0Ljk1NC0yNTk3LjYyNi0zNjk1LjQ3My0yNTk4LjE0NnoiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGE6YWRvYmUtYmxlbmRpbmctbW9kZT0ibm9ybWFsIiBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMS41IiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9IiAgICAgTS0zNjk5Ljk2LTI1ODMuODM3aC0xMi4zMjV2LTEyLjMyNmgxMS44'+
			'MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MTggICAgIGMtMC42NjEsMC0xLjE5NiwwLjUzNi0xLjE5NiwxLjE5NnYxNC43MTljMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDMgICAgIGwtMi4zOTMsMi4zOTNWLTI1ODMuODM3eiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogICA8L2c+CiAgIDxnPgogICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0zNjk1LjQ3My0yNTk4LjE0NmMtMC41MTktMC41MTktMS4zNjEtMC41MTktMS44NzksMGwtOC'+
			'43ODcsOC43ODdsLTIuMjkxLTIuMjQzICAgICBjLTAuNTI1LTAuNTEzLTEuMzY2LTAuNTA0LTEuODgsMC4wMmMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzkgICAgIGMwLjM0LDAsMC42OC0wLjEzLDAuOTQtMC4zOWw5LjcxNy05LjcxN0MtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6Ii8+CiAgICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTM2OTkuOTYtMjU4My44MzdoLTEyLjMyNXYtMTIuMzI2aDExLjgyMWwyLjI1Mi0yLjI1MmMtMC4xNjYt'+
			'MC4wODYtMC4zNTItMC4xNDEtMC41NTItMC4xNDFoLTE0LjcxOCAgICAgYy0wLjY2MSwwLTEuMTk2LDAuNTM2LTEuMTk2LDEuMTk2djE0LjcxOWMwLDAuNjYsMC41MzUsMS4xOTYsMS4xOTYsMS4xOTZoMTQuNzE4YzAuNjYxLDAsMS4xOTctMC41MzYsMS4xOTctMS4xOTZ2LTEwLjQwMyAgICAgbC0yLjM5MywyLjM5M1YtMjU4My44Mzd6Ii8+CiAgIDwvZz4KICAgPGc+CiAgICA8cGF0aCBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0tMzY5NS40NzMtMjU5OC4xNDYgICAgIGMtMC41MTktMC41MTktMS4zNjEtMC'+
			'41MTktMS44NzksMGwtOC43ODcsOC43ODdsLTIuMjkxLTIuMjQzYy0wLjUyNS0wLjUxMy0xLjM2Ni0wLjUwNC0xLjg4LDAuMDIgICAgIGMtMC41MTMsMC41MjUtMC41MDQsMS4zNjcsMC4wMjEsMS44OGwzLjIzLDMuMTYzYzAuMjU5LDAuMjUzLDAuNTk0LDAuMzc5LDAuOTMsMC4zNzljMC4zNCwwLDAuNjgtMC4xMywwLjk0LTAuMzlsOS43MTctOS43MTcgICAgIEMtMzY5NC45NTQtMjU5Ni43ODUtMzY5NC45NTQtMjU5Ny42MjYtMzY5NS40NzMtMjU5OC4xNDZ6IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBzdHJva2U9IiMxQTE3MUIiIHN0cm9rZS13aWR0aD0iMC4yIiBmaWxs'+
			'PSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0tMzY5OS45Ni0yNTgzLjgzNyAgICAgaC0xMi4zMjV2LTEyLjMyNmgxMS44MjFsMi4yNTItMi4yNTJjLTAuMTY2LTAuMDg2LTAuMzUyLTAuMTQxLTAuNTUyLTAuMTQxaC0xNC43MThjLTAuNjYxLDAtMS4xOTYsMC41MzYtMS4xOTYsMS4xOTZ2MTQuNzE5ICAgICBjMCwwLjY2LDAuNTM1LDEuMTk2LDEuMTk2LDEuMTk2aDE0LjcxOGMwLjY2MSwwLDEuMTk3LTAuNTM2LDEuMTk3LTEuMTk2di0xMC40MDNsLTIuMzkzLDIuMzkzVi0yNTgzLjgzN3oiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdm'+
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
	style.appendChild(document.createTextNode('@keyframes pulse { 0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0px rgba(58,137,172,0.0); } 50% { transform: scale(1.18); opacity: 0.8; box-shadow: 0 0 12px rgba(58,137,172,0.9); } 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0px rgba(58,137,172,0.0); } } @keyframes pulse { 0% { transform: scale(1); opacity: 1; box-shadow: 0 0 0px rgba(58,137,172,0.0); } 50% { transform: scale(1.18); opacity: 0.8; box-shadow: 0 0 16px rgba(58,137,172,0.9); } 100% { transform: scale(1); opacity: 1; box-shadow: 0 0 0px rgba(58,137,172,0.0); } } .pulse { animation: pulse 1s infinite ease-in-out; transform-origin: center center; /* ГОЛОВНЕ: робимо елемент круглим */ border-radius: 50%; } .toolbar-btn { transition: transform 0.15s ease-out, filter 0.15s ease-out; border-radius: 50%; } .toolbar-btn:hover { transform: scale(1.12) translateY(-1px); filter: brightness(1.08); } .toolbar-btn:active { transform: scale(0.96) translateY(0); filter: brightness(0.95); }'));
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