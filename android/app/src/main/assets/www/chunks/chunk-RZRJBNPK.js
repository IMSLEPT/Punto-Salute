var lo="170",Rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},pt={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},sc=0,bf=1,Bc=2;var XC=1,rc=2,_t=3,Ye=0,ve=1,ke=2,Yt=0,kn=1,Rf=2,gf=3,xf=4,oc=5,An=100,fc=101,Cc=102,ac=103,cc=104,lc=200,hc=201,Ac=202,uc=203,QB=204,Dr=205,dc=206,pc=207,mc=208,yc=209,bc=210,Rc=211,gc=212,xc=213,Tc=214,er=0,tr=1,nr=2,Gn=3,ir=4,sr=5,Br=6,rr=7,kC=0,Hc=1,_c=2,$t=0,wc=1,vc=2,Mc=3,ho=4,Sc=5,Lc=6,Vc=7,Tf="attached",qc="detached",JC=300,Un=301,Zn=302,or=303,fr=304,sB=306,pn=1e3,wt=1001,Mi=1002,Me=1003,Ao=1004;var jn=1005;var Oe=1006,Hi=1007;var ut=1008;var St=1009,zC=1010,WC=1011,Si=1012,uo=1013,mn=1014,ft=1015,ki=1016,po=1017,mo=1018,Kn=1020,GC=35902,UC=1021,ZC=1022,Ze=1023,KC=1024,YC=1025,Jn=1026,Yn=1027,yo=1028,bo=1029,$C=1030,Ro=1031;var go=1033,Hs=33776,_s=33777,ws=33778,vs=33779,Cr=35840,ar=35841,cr=35842,lr=35843,hr=36196,Ar=37492,ur=37496,dr=37808,pr=37809,mr=37810,yr=37811,br=37812,Rr=37813,gr=37814,xr=37815,Tr=37816,Hr=37817,_r=37818,wr=37819,vr=37820,Mr=37821,Ms=36492,Sr=36494,Lr=36495,QC=36283,Vr=36284,qr=36285,Er=36286;var $n=2300,Qn=2301,pB=2302,Hf=2400,_f=2401,wf=2402,Ec=2500;var Da=0,BB=1,Ji=2,Pc=3200,Fc=3201;var ea=0,Oc=1,Zt="",be="srgb",Le="srgb-linear",rB="linear",ne="srgb";var Hn=7680;var vf=519,Nc=512,Ic=513,jc=514,ta=515,Xc=516,kc=517,Jc=518,zc=519,Pr=35044;var Mf="300 es",vt=2e3,Ss=2001,Lt=class{addEventListener(D,e){this._listeners===void 0&&(this._listeners={});let t=this._listeners;t[D]===void 0&&(t[D]=[]),t[D].indexOf(e)===-1&&t[D].push(e)}hasEventListener(D,e){if(this._listeners===void 0)return!1;let t=this._listeners;return t[D]!==void 0&&t[D].indexOf(e)!==-1}removeEventListener(D,e){if(this._listeners===void 0)return;let i=this._listeners[D];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(D){if(this._listeners===void 0)return;let t=this._listeners[D.type];if(t!==void 0){D.target=this;let i=t.slice(0);for(let s=0,B=i.length;s<B;s++)i[s].call(this,D);D.target=null}}},_e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sf=1234567,_i=Math.PI/180,Di=180/Math.PI;function Ct(){let n=Math.random()*4294967295|0,D=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0;return(_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]+"-"+_e[D&255]+_e[D>>8&255]+"-"+_e[D>>16&15|64]+_e[D>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[t&255]+_e[t>>8&255]+_e[t>>16&255]+_e[t>>24&255]).toLowerCase()}function Ae(n,D,e){return Math.max(D,Math.min(e,n))}function xo(n,D){return(n%D+D)%D}function Wc(n,D,e,t,i){return t+(n-D)*(i-t)/(e-D)}function Gc(n,D,e){return n!==D?(e-n)/(D-n):0}function wi(n,D,e){return(1-e)*n+e*D}function Uc(n,D,e,t){return wi(n,D,1-Math.exp(-e*t))}function Zc(n,D=1){return D-Math.abs(xo(n,D*2)-D)}function Kc(n,D,e){return n<=D?0:n>=e?1:(n=(n-D)/(e-D),n*n*(3-2*n))}function Yc(n,D,e){return n<=D?0:n>=e?1:(n=(n-D)/(e-D),n*n*n*(n*(n*6-15)+10))}function $c(n,D){return n+Math.floor(Math.random()*(D-n+1))}function Qc(n,D){return n+Math.random()*(D-n)}function D3(n){return n*(.5-Math.random())}function e3(n){n!==void 0&&(Sf=n);let D=Sf+=1831565813;return D=Math.imul(D^D>>>15,D|1),D^=D+Math.imul(D^D>>>7,D|61),((D^D>>>14)>>>0)/4294967296}function t3(n){return n*_i}function n3(n){return n*Di}function i3(n){return(n&n-1)===0&&n!==0}function s3(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function B3(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function r3(n,D,e,t,i){let s=Math.cos,B=Math.sin,r=s(e/2),o=B(e/2),f=s((D+t)/2),C=B((D+t)/2),a=s((D-t)/2),c=B((D-t)/2),l=s((t-D)/2),u=B((t-D)/2);switch(i){case"XYX":n.set(r*C,o*a,o*c,r*f);break;case"YZY":n.set(o*c,r*C,o*a,r*f);break;case"ZXZ":n.set(o*a,o*c,r*C,r*f);break;case"XZX":n.set(r*C,o*u,o*l,r*f);break;case"YXY":n.set(o*l,r*C,o*u,r*f);break;case"ZYZ":n.set(o*u,o*l,r*C,r*f);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ot(n,D){switch(D.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function te(n,D){switch(D.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var gn={DEG2RAD:_i,RAD2DEG:Di,generateUUID:Ct,clamp:Ae,euclideanModulo:xo,mapLinear:Wc,inverseLerp:Gc,lerp:wi,damp:Uc,pingpong:Zc,smoothstep:Kc,smootherstep:Yc,randInt:$c,randFloat:Qc,randFloatSpread:D3,seededRandom:e3,degToRad:t3,radToDeg:n3,isPowerOfTwo:i3,ceilPowerOfTwo:s3,floorPowerOfTwo:B3,setQuaternionFromProperEuler:r3,normalize:te,denormalize:ot},wD=class n{constructor(D=0,e=0){n.prototype.isVector2=!0,this.x=D,this.y=e}get width(){return this.x}set width(D){this.x=D}get height(){return this.y}set height(D){this.y=D}set(D,e){return this.x=D,this.y=e,this}setScalar(D){return this.x=D,this.y=D,this}setX(D){return this.x=D,this}setY(D){return this.y=D,this}setComponent(D,e){switch(D){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+D)}return this}getComponent(D){switch(D){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+D)}}clone(){return new this.constructor(this.x,this.y)}copy(D){return this.x=D.x,this.y=D.y,this}add(D){return this.x+=D.x,this.y+=D.y,this}addScalar(D){return this.x+=D,this.y+=D,this}addVectors(D,e){return this.x=D.x+e.x,this.y=D.y+e.y,this}addScaledVector(D,e){return this.x+=D.x*e,this.y+=D.y*e,this}sub(D){return this.x-=D.x,this.y-=D.y,this}subScalar(D){return this.x-=D,this.y-=D,this}subVectors(D,e){return this.x=D.x-e.x,this.y=D.y-e.y,this}multiply(D){return this.x*=D.x,this.y*=D.y,this}multiplyScalar(D){return this.x*=D,this.y*=D,this}divide(D){return this.x/=D.x,this.y/=D.y,this}divideScalar(D){return this.multiplyScalar(1/D)}applyMatrix3(D){let e=this.x,t=this.y,i=D.elements;return this.x=i[0]*e+i[3]*t+i[6],this.y=i[1]*e+i[4]*t+i[7],this}min(D){return this.x=Math.min(this.x,D.x),this.y=Math.min(this.y,D.y),this}max(D){return this.x=Math.max(this.x,D.x),this.y=Math.max(this.y,D.y),this}clamp(D,e){return this.x=Math.max(D.x,Math.min(e.x,this.x)),this.y=Math.max(D.y,Math.min(e.y,this.y)),this}clampScalar(D,e){return this.x=Math.max(D,Math.min(e,this.x)),this.y=Math.max(D,Math.min(e,this.y)),this}clampLength(D,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(D,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(D){return this.x*D.x+this.y*D.y}cross(D){return this.x*D.y-this.y*D.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(D){let e=Math.sqrt(this.lengthSq()*D.lengthSq());if(e===0)return Math.PI/2;let t=this.dot(D)/e;return Math.acos(Ae(t,-1,1))}distanceTo(D){return Math.sqrt(this.distanceToSquared(D))}distanceToSquared(D){let e=this.x-D.x,t=this.y-D.y;return e*e+t*t}manhattanDistanceTo(D){return Math.abs(this.x-D.x)+Math.abs(this.y-D.y)}setLength(D){return this.normalize().multiplyScalar(D)}lerp(D,e){return this.x+=(D.x-this.x)*e,this.y+=(D.y-this.y)*e,this}lerpVectors(D,e,t){return this.x=D.x+(e.x-D.x)*t,this.y=D.y+(e.y-D.y)*t,this}equals(D){return D.x===this.x&&D.y===this.y}fromArray(D,e=0){return this.x=D[e],this.y=D[e+1],this}toArray(D=[],e=0){return D[e]=this.x,D[e+1]=this.y,D}fromBufferAttribute(D,e){return this.x=D.getX(e),this.y=D.getY(e),this}rotateAround(D,e){let t=Math.cos(e),i=Math.sin(e),s=this.x-D.x,B=this.y-D.y;return this.x=s*t-B*i+D.x,this.y=s*i+B*t+D.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ND=class n{constructor(D,e,t,i,s,B,r,o,f){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],D!==void 0&&this.set(D,e,t,i,s,B,r,o,f)}set(D,e,t,i,s,B,r,o,f){let C=this.elements;return C[0]=D,C[1]=i,C[2]=r,C[3]=e,C[4]=s,C[5]=o,C[6]=t,C[7]=B,C[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(D){let e=this.elements,t=D.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],this}extractBasis(D,e,t){return D.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),t.setFromMatrix3Column(this,2),this}setFromMatrix4(D){let e=D.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(D){return this.multiplyMatrices(this,D)}premultiply(D){return this.multiplyMatrices(D,this)}multiplyMatrices(D,e){let t=D.elements,i=e.elements,s=this.elements,B=t[0],r=t[3],o=t[6],f=t[1],C=t[4],a=t[7],c=t[2],l=t[5],u=t[8],d=i[0],A=i[3],h=i[6],g=i[1],x=i[4],y=i[7],E=i[2],w=i[5],v=i[8];return s[0]=B*d+r*g+o*E,s[3]=B*A+r*x+o*w,s[6]=B*h+r*y+o*v,s[1]=f*d+C*g+a*E,s[4]=f*A+C*x+a*w,s[7]=f*h+C*y+a*v,s[2]=c*d+l*g+u*E,s[5]=c*A+l*x+u*w,s[8]=c*h+l*y+u*v,this}multiplyScalar(D){let e=this.elements;return e[0]*=D,e[3]*=D,e[6]*=D,e[1]*=D,e[4]*=D,e[7]*=D,e[2]*=D,e[5]*=D,e[8]*=D,this}determinant(){let D=this.elements,e=D[0],t=D[1],i=D[2],s=D[3],B=D[4],r=D[5],o=D[6],f=D[7],C=D[8];return e*B*C-e*r*f-t*s*C+t*r*o+i*s*f-i*B*o}invert(){let D=this.elements,e=D[0],t=D[1],i=D[2],s=D[3],B=D[4],r=D[5],o=D[6],f=D[7],C=D[8],a=C*B-r*f,c=r*o-C*s,l=f*s-B*o,u=e*a+t*c+i*l;if(u===0)return this.set(0,0,0,0,0,0,0,0,0);let d=1/u;return D[0]=a*d,D[1]=(i*f-C*t)*d,D[2]=(r*t-i*B)*d,D[3]=c*d,D[4]=(C*e-i*o)*d,D[5]=(i*s-r*e)*d,D[6]=l*d,D[7]=(t*o-f*e)*d,D[8]=(B*e-t*s)*d,this}transpose(){let D,e=this.elements;return D=e[1],e[1]=e[3],e[3]=D,D=e[2],e[2]=e[6],e[6]=D,D=e[5],e[5]=e[7],e[7]=D,this}getNormalMatrix(D){return this.setFromMatrix4(D).invert().transpose()}transposeIntoArray(D){let e=this.elements;return D[0]=e[0],D[1]=e[3],D[2]=e[6],D[3]=e[1],D[4]=e[4],D[5]=e[7],D[6]=e[2],D[7]=e[5],D[8]=e[8],this}setUvTransform(D,e,t,i,s,B,r){let o=Math.cos(s),f=Math.sin(s);return this.set(t*o,t*f,-t*(o*B+f*r)+B+D,-i*f,i*o,-i*(-f*B+o*r)+r+e,0,0,1),this}scale(D,e){return this.premultiply(mB.makeScale(D,e)),this}rotate(D){return this.premultiply(mB.makeRotation(-D)),this}translate(D,e){return this.premultiply(mB.makeTranslation(D,e)),this}makeTranslation(D,e){return D.isVector2?this.set(1,0,D.x,0,1,D.y,0,0,1):this.set(1,0,D,0,1,e,0,0,1),this}makeRotation(D){let e=Math.cos(D),t=Math.sin(D);return this.set(e,-t,0,t,e,0,0,0,1),this}makeScale(D,e){return this.set(D,0,0,0,e,0,0,0,1),this}equals(D){let e=this.elements,t=D.elements;for(let i=0;i<9;i++)if(e[i]!==t[i])return!1;return!0}fromArray(D,e=0){for(let t=0;t<9;t++)this.elements[t]=D[t+e];return this}toArray(D=[],e=0){let t=this.elements;return D[e]=t[0],D[e+1]=t[1],D[e+2]=t[2],D[e+3]=t[3],D[e+4]=t[4],D[e+5]=t[5],D[e+6]=t[6],D[e+7]=t[7],D[e+8]=t[8],D}clone(){return new this.constructor().fromArray(this.elements)}},mB=new ND;function na(n){for(let D=n.length-1;D>=0;--D)if(n[D]>=65535)return!0;return!1}function Li(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function o3(){let n=Li("canvas");return n.style.display="block",n}var Lf={};function xi(n){n in Lf||(Lf[n]=!0,console.warn(n))}function f3(n,D,e){return new Promise(function(t,i){function s(){switch(n.clientWaitSync(D,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:t()}}setTimeout(s,e)})}function C3(n){let D=n.elements;D[2]=.5*D[2]+.5*D[3],D[6]=.5*D[6]+.5*D[7],D[10]=.5*D[10]+.5*D[11],D[14]=.5*D[14]+.5*D[15]}function a3(n){let D=n.elements;D[11]===-1?(D[10]=-D[10]-1,D[14]=-D[14]):(D[10]=-D[10],D[14]=-D[14]+1)}var zD={enabled:!0,workingColorSpace:Le,spaces:{},convert:function(n,D,e){return this.enabled===!1||D===e||!D||!e||(this.spaces[D].transfer===ne&&(n.r=Mt(n.r),n.g=Mt(n.g),n.b=Mt(n.b)),this.spaces[D].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[D].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(n.r=zn(n.r),n.g=zn(n.g),n.b=zn(n.b))),n},fromWorkingColorSpace:function(n,D){return this.convert(n,this.workingColorSpace,D)},toWorkingColorSpace:function(n,D){return this.convert(n,D,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Zt?rB:this.spaces[n].transfer},getLuminanceCoefficients:function(n,D=this.workingColorSpace){return n.fromArray(this.spaces[D].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,D,e){return n.copy(this.spaces[D].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Mt(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function zn(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Vf=[.64,.33,.3,.6,.15,.06],qf=[.2126,.7152,.0722],Ef=[.3127,.329],Pf=new ND().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ff=new ND().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);zD.define({[Le]:{primaries:Vf,whitePoint:Ef,transfer:rB,toXYZ:Pf,fromXYZ:Ff,luminanceCoefficients:qf,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Vf,whitePoint:Ef,transfer:ne,toXYZ:Pf,fromXYZ:Ff,luminanceCoefficients:qf,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});var _n,Fr=class{static getDataURL(D){if(/^data:/i.test(D.src)||typeof HTMLCanvasElement>"u")return D.src;let e;if(D instanceof HTMLCanvasElement)e=D;else{_n===void 0&&(_n=Li("canvas")),_n.width=D.width,_n.height=D.height;let t=_n.getContext("2d");D instanceof ImageData?t.putImageData(D,0,0):t.drawImage(D,0,0,D.width,D.height),e=_n}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",D),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(D){if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){let e=Li("canvas");e.width=D.width,e.height=D.height;let t=e.getContext("2d");t.drawImage(D,0,0,D.width,D.height);let i=t.getImageData(0,0,D.width,D.height),s=i.data;for(let B=0;B<s.length;B++)s[B]=Mt(s[B]/255)*255;return t.putImageData(i,0,0),e}else if(D.data){let e=D.data.slice(0);for(let t=0;t<e.length;t++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[t]=Math.floor(Mt(e[t]/255)*255):e[t]=Mt(e[t]);return{data:e,width:D.width,height:D.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),D}},c3=0,Ls=class{constructor(D=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c3++}),this.uuid=Ct(),this.data=D,this.dataReady=!0,this.version=0}set needsUpdate(D){D===!0&&this.version++}toJSON(D){let e=D===void 0||typeof D=="string";if(!e&&D.images[this.uuid]!==void 0)return D.images[this.uuid];let t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let B=0,r=i.length;B<r;B++)i[B].isDataTexture?s.push(yB(i[B].image)):s.push(yB(i[B]))}else s=yB(i);t.url=s}return e||(D.images[this.uuid]=t),t}};function yB(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var l3=0,xe=class n extends Lt{constructor(D=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,t=wt,i=wt,s=Oe,B=ut,r=Ze,o=St,f=n.DEFAULT_ANISOTROPY,C=Zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l3++}),this.uuid=Ct(),this.name="",this.source=new Ls(D),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=t,this.wrapT=i,this.magFilter=s,this.minFilter=B,this.anisotropy=f,this.format=r,this.internalFormat=null,this.type=o,this.offset=new wD(0,0),this.repeat=new wD(1,1),this.center=new wD(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ND,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=C,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(D=null){this.source.data=D}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(D){return this.name=D.name,this.source=D.source,this.mipmaps=D.mipmaps.slice(0),this.mapping=D.mapping,this.channel=D.channel,this.wrapS=D.wrapS,this.wrapT=D.wrapT,this.magFilter=D.magFilter,this.minFilter=D.minFilter,this.anisotropy=D.anisotropy,this.format=D.format,this.internalFormat=D.internalFormat,this.type=D.type,this.offset.copy(D.offset),this.repeat.copy(D.repeat),this.center.copy(D.center),this.rotation=D.rotation,this.matrixAutoUpdate=D.matrixAutoUpdate,this.matrix.copy(D.matrix),this.generateMipmaps=D.generateMipmaps,this.premultiplyAlpha=D.premultiplyAlpha,this.flipY=D.flipY,this.unpackAlignment=D.unpackAlignment,this.colorSpace=D.colorSpace,this.userData=JSON.parse(JSON.stringify(D.userData)),this.needsUpdate=!0,this}toJSON(D){let e=D===void 0||typeof D=="string";if(!e&&D.textures[this.uuid]!==void 0)return D.textures[this.uuid];let t={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(D).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(t.userData=this.userData),e||(D.textures[this.uuid]=t),t}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(D){if(this.mapping!==JC)return D;if(D.applyMatrix3(this.matrix),D.x<0||D.x>1)switch(this.wrapS){case pn:D.x=D.x-Math.floor(D.x);break;case wt:D.x=D.x<0?0:1;break;case Mi:Math.abs(Math.floor(D.x)%2)===1?D.x=Math.ceil(D.x)-D.x:D.x=D.x-Math.floor(D.x);break}if(D.y<0||D.y>1)switch(this.wrapT){case pn:D.y=D.y-Math.floor(D.y);break;case wt:D.y=D.y<0?0:1;break;case Mi:Math.abs(Math.floor(D.y)%2)===1?D.y=Math.ceil(D.y)-D.y:D.y=D.y-Math.floor(D.y);break}return this.flipY&&(D.y=1-D.y),D}set needsUpdate(D){D===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(D){D===!0&&this.pmremVersion++}};xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=JC;xe.DEFAULT_ANISOTROPY=1;var YD=class n{constructor(D=0,e=0,t=0,i=1){n.prototype.isVector4=!0,this.x=D,this.y=e,this.z=t,this.w=i}get width(){return this.z}set width(D){this.z=D}get height(){return this.w}set height(D){this.w=D}set(D,e,t,i){return this.x=D,this.y=e,this.z=t,this.w=i,this}setScalar(D){return this.x=D,this.y=D,this.z=D,this.w=D,this}setX(D){return this.x=D,this}setY(D){return this.y=D,this}setZ(D){return this.z=D,this}setW(D){return this.w=D,this}setComponent(D,e){switch(D){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+D)}return this}getComponent(D){switch(D){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+D)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(D){return this.x=D.x,this.y=D.y,this.z=D.z,this.w=D.w!==void 0?D.w:1,this}add(D){return this.x+=D.x,this.y+=D.y,this.z+=D.z,this.w+=D.w,this}addScalar(D){return this.x+=D,this.y+=D,this.z+=D,this.w+=D,this}addVectors(D,e){return this.x=D.x+e.x,this.y=D.y+e.y,this.z=D.z+e.z,this.w=D.w+e.w,this}addScaledVector(D,e){return this.x+=D.x*e,this.y+=D.y*e,this.z+=D.z*e,this.w+=D.w*e,this}sub(D){return this.x-=D.x,this.y-=D.y,this.z-=D.z,this.w-=D.w,this}subScalar(D){return this.x-=D,this.y-=D,this.z-=D,this.w-=D,this}subVectors(D,e){return this.x=D.x-e.x,this.y=D.y-e.y,this.z=D.z-e.z,this.w=D.w-e.w,this}multiply(D){return this.x*=D.x,this.y*=D.y,this.z*=D.z,this.w*=D.w,this}multiplyScalar(D){return this.x*=D,this.y*=D,this.z*=D,this.w*=D,this}applyMatrix4(D){let e=this.x,t=this.y,i=this.z,s=this.w,B=D.elements;return this.x=B[0]*e+B[4]*t+B[8]*i+B[12]*s,this.y=B[1]*e+B[5]*t+B[9]*i+B[13]*s,this.z=B[2]*e+B[6]*t+B[10]*i+B[14]*s,this.w=B[3]*e+B[7]*t+B[11]*i+B[15]*s,this}divide(D){return this.x/=D.x,this.y/=D.y,this.z/=D.z,this.w/=D.w,this}divideScalar(D){return this.multiplyScalar(1/D)}setAxisAngleFromQuaternion(D){this.w=2*Math.acos(D.w);let e=Math.sqrt(1-D.w*D.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=D.x/e,this.y=D.y/e,this.z=D.z/e),this}setAxisAngleFromRotationMatrix(D){let e,t,i,s,o=D.elements,f=o[0],C=o[4],a=o[8],c=o[1],l=o[5],u=o[9],d=o[2],A=o[6],h=o[10];if(Math.abs(C-c)<.01&&Math.abs(a-d)<.01&&Math.abs(u-A)<.01){if(Math.abs(C+c)<.1&&Math.abs(a+d)<.1&&Math.abs(u+A)<.1&&Math.abs(f+l+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(f+1)/2,y=(l+1)/2,E=(h+1)/2,w=(C+c)/4,v=(a+d)/4,P=(u+A)/4;return x>y&&x>E?x<.01?(t=0,i=.707106781,s=.707106781):(t=Math.sqrt(x),i=w/t,s=v/t):y>E?y<.01?(t=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),t=w/i,s=P/i):E<.01?(t=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),t=v/s,i=P/s),this.set(t,i,s,e),this}let g=Math.sqrt((A-u)*(A-u)+(a-d)*(a-d)+(c-C)*(c-C));return Math.abs(g)<.001&&(g=1),this.x=(A-u)/g,this.y=(a-d)/g,this.z=(c-C)/g,this.w=Math.acos((f+l+h-1)/2),this}setFromMatrixPosition(D){let e=D.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(D){return this.x=Math.min(this.x,D.x),this.y=Math.min(this.y,D.y),this.z=Math.min(this.z,D.z),this.w=Math.min(this.w,D.w),this}max(D){return this.x=Math.max(this.x,D.x),this.y=Math.max(this.y,D.y),this.z=Math.max(this.z,D.z),this.w=Math.max(this.w,D.w),this}clamp(D,e){return this.x=Math.max(D.x,Math.min(e.x,this.x)),this.y=Math.max(D.y,Math.min(e.y,this.y)),this.z=Math.max(D.z,Math.min(e.z,this.z)),this.w=Math.max(D.w,Math.min(e.w,this.w)),this}clampScalar(D,e){return this.x=Math.max(D,Math.min(e,this.x)),this.y=Math.max(D,Math.min(e,this.y)),this.z=Math.max(D,Math.min(e,this.z)),this.w=Math.max(D,Math.min(e,this.w)),this}clampLength(D,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(D,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(D){return this.x*D.x+this.y*D.y+this.z*D.z+this.w*D.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(D){return this.normalize().multiplyScalar(D)}lerp(D,e){return this.x+=(D.x-this.x)*e,this.y+=(D.y-this.y)*e,this.z+=(D.z-this.z)*e,this.w+=(D.w-this.w)*e,this}lerpVectors(D,e,t){return this.x=D.x+(e.x-D.x)*t,this.y=D.y+(e.y-D.y)*t,this.z=D.z+(e.z-D.z)*t,this.w=D.w+(e.w-D.w)*t,this}equals(D){return D.x===this.x&&D.y===this.y&&D.z===this.z&&D.w===this.w}fromArray(D,e=0){return this.x=D[e],this.y=D[e+1],this.z=D[e+2],this.w=D[e+3],this}toArray(D=[],e=0){return D[e]=this.x,D[e+1]=this.y,D[e+2]=this.z,D[e+3]=this.w,D}fromBufferAttribute(D,e){return this.x=D.getX(e),this.y=D.getY(e),this.z=D.getZ(e),this.w=D.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Or=class extends Lt{constructor(D=1,e=1,t={}){super(),this.isRenderTarget=!0,this.width=D,this.height=e,this.depth=1,this.scissor=new YD(0,0,D,e),this.scissorTest=!1,this.viewport=new YD(0,0,D,e);let i={width:D,height:e,depth:1};t=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},t);let s=new xe(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace);s.flipY=!1,s.generateMipmaps=t.generateMipmaps,s.internalFormat=t.internalFormat,this.textures=[];let B=t.count;for(let r=0;r<B;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.depthTexture=t.depthTexture,this.samples=t.samples}get texture(){return this.textures[0]}set texture(D){this.textures[0]=D}setSize(D,e,t=1){if(this.width!==D||this.height!==e||this.depth!==t){this.width=D,this.height=e,this.depth=t;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=D,this.textures[i].image.height=e,this.textures[i].image.depth=t;this.dispose()}this.viewport.set(0,0,D,e),this.scissor.set(0,0,D,e)}clone(){return new this.constructor().copy(this)}copy(D){this.width=D.width,this.height=D.height,this.depth=D.depth,this.scissor.copy(D.scissor),this.scissorTest=D.scissorTest,this.viewport.copy(D.viewport),this.textures.length=0;for(let t=0,i=D.textures.length;t<i;t++)this.textures[t]=D.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let e=Object.assign({},D.texture.image);return this.texture.source=new Ls(e),this.depthBuffer=D.depthBuffer,this.stencilBuffer=D.stencilBuffer,this.resolveDepthBuffer=D.resolveDepthBuffer,this.resolveStencilBuffer=D.resolveStencilBuffer,D.depthTexture!==null&&(this.depthTexture=D.depthTexture.clone()),this.samples=D.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vt=class extends Or{constructor(D=1,e=1,t={}){super(D,e,t),this.isWebGLRenderTarget=!0}},Vs=class extends xe{constructor(D=null,e=1,t=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:D,width:e,height:t,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(D){this.layerUpdates.add(D)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nr=class extends xe{constructor(D=null,e=1,t=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:D,width:e,height:t,depth:i},this.magFilter=Me,this.minFilter=Me,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ge=class{constructor(D=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=D,this._y=e,this._z=t,this._w=i}static slerpFlat(D,e,t,i,s,B,r){let o=t[i+0],f=t[i+1],C=t[i+2],a=t[i+3],c=s[B+0],l=s[B+1],u=s[B+2],d=s[B+3];if(r===0){D[e+0]=o,D[e+1]=f,D[e+2]=C,D[e+3]=a;return}if(r===1){D[e+0]=c,D[e+1]=l,D[e+2]=u,D[e+3]=d;return}if(a!==d||o!==c||f!==l||C!==u){let A=1-r,h=o*c+f*l+C*u+a*d,g=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){let E=Math.sqrt(x),w=Math.atan2(E,h*g);A=Math.sin(A*w)/E,r=Math.sin(r*w)/E}let y=r*g;if(o=o*A+c*y,f=f*A+l*y,C=C*A+u*y,a=a*A+d*y,A===1-r){let E=1/Math.sqrt(o*o+f*f+C*C+a*a);o*=E,f*=E,C*=E,a*=E}}D[e]=o,D[e+1]=f,D[e+2]=C,D[e+3]=a}static multiplyQuaternionsFlat(D,e,t,i,s,B){let r=t[i],o=t[i+1],f=t[i+2],C=t[i+3],a=s[B],c=s[B+1],l=s[B+2],u=s[B+3];return D[e]=r*u+C*a+o*l-f*c,D[e+1]=o*u+C*c+f*a-r*l,D[e+2]=f*u+C*l+r*c-o*a,D[e+3]=C*u-r*a-o*c-f*l,D}get x(){return this._x}set x(D){this._x=D,this._onChangeCallback()}get y(){return this._y}set y(D){this._y=D,this._onChangeCallback()}get z(){return this._z}set z(D){this._z=D,this._onChangeCallback()}get w(){return this._w}set w(D){this._w=D,this._onChangeCallback()}set(D,e,t,i){return this._x=D,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(D){return this._x=D.x,this._y=D.y,this._z=D.z,this._w=D.w,this._onChangeCallback(),this}setFromEuler(D,e=!0){let t=D._x,i=D._y,s=D._z,B=D._order,r=Math.cos,o=Math.sin,f=r(t/2),C=r(i/2),a=r(s/2),c=o(t/2),l=o(i/2),u=o(s/2);switch(B){case"XYZ":this._x=c*C*a+f*l*u,this._y=f*l*a-c*C*u,this._z=f*C*u+c*l*a,this._w=f*C*a-c*l*u;break;case"YXZ":this._x=c*C*a+f*l*u,this._y=f*l*a-c*C*u,this._z=f*C*u-c*l*a,this._w=f*C*a+c*l*u;break;case"ZXY":this._x=c*C*a-f*l*u,this._y=f*l*a+c*C*u,this._z=f*C*u+c*l*a,this._w=f*C*a-c*l*u;break;case"ZYX":this._x=c*C*a-f*l*u,this._y=f*l*a+c*C*u,this._z=f*C*u-c*l*a,this._w=f*C*a+c*l*u;break;case"YZX":this._x=c*C*a+f*l*u,this._y=f*l*a+c*C*u,this._z=f*C*u-c*l*a,this._w=f*C*a-c*l*u;break;case"XZY":this._x=c*C*a-f*l*u,this._y=f*l*a-c*C*u,this._z=f*C*u+c*l*a,this._w=f*C*a+c*l*u;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+B)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(D,e){let t=e/2,i=Math.sin(t);return this._x=D.x*i,this._y=D.y*i,this._z=D.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(D){let e=D.elements,t=e[0],i=e[4],s=e[8],B=e[1],r=e[5],o=e[9],f=e[2],C=e[6],a=e[10],c=t+r+a;if(c>0){let l=.5/Math.sqrt(c+1);this._w=.25/l,this._x=(C-o)*l,this._y=(s-f)*l,this._z=(B-i)*l}else if(t>r&&t>a){let l=2*Math.sqrt(1+t-r-a);this._w=(C-o)/l,this._x=.25*l,this._y=(i+B)/l,this._z=(s+f)/l}else if(r>a){let l=2*Math.sqrt(1+r-t-a);this._w=(s-f)/l,this._x=(i+B)/l,this._y=.25*l,this._z=(o+C)/l}else{let l=2*Math.sqrt(1+a-t-r);this._w=(B-i)/l,this._x=(s+f)/l,this._y=(o+C)/l,this._z=.25*l}return this._onChangeCallback(),this}setFromUnitVectors(D,e){let t=D.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(D.x)>Math.abs(D.z)?(this._x=-D.y,this._y=D.x,this._z=0,this._w=t):(this._x=0,this._y=-D.z,this._z=D.y,this._w=t)):(this._x=D.y*e.z-D.z*e.y,this._y=D.z*e.x-D.x*e.z,this._z=D.x*e.y-D.y*e.x,this._w=t),this.normalize()}angleTo(D){return 2*Math.acos(Math.abs(Ae(this.dot(D),-1,1)))}rotateTowards(D,e){let t=this.angleTo(D);if(t===0)return this;let i=Math.min(1,e/t);return this.slerp(D,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(D){return this._x*D._x+this._y*D._y+this._z*D._z+this._w*D._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let D=this.length();return D===0?(this._x=0,this._y=0,this._z=0,this._w=1):(D=1/D,this._x=this._x*D,this._y=this._y*D,this._z=this._z*D,this._w=this._w*D),this._onChangeCallback(),this}multiply(D){return this.multiplyQuaternions(this,D)}premultiply(D){return this.multiplyQuaternions(D,this)}multiplyQuaternions(D,e){let t=D._x,i=D._y,s=D._z,B=D._w,r=e._x,o=e._y,f=e._z,C=e._w;return this._x=t*C+B*r+i*f-s*o,this._y=i*C+B*o+s*r-t*f,this._z=s*C+B*f+t*o-i*r,this._w=B*C-t*r-i*o-s*f,this._onChangeCallback(),this}slerp(D,e){if(e===0)return this;if(e===1)return this.copy(D);let t=this._x,i=this._y,s=this._z,B=this._w,r=B*D._w+t*D._x+i*D._y+s*D._z;if(r<0?(this._w=-D._w,this._x=-D._x,this._y=-D._y,this._z=-D._z,r=-r):this.copy(D),r>=1)return this._w=B,this._x=t,this._y=i,this._z=s,this;let o=1-r*r;if(o<=Number.EPSILON){let l=1-e;return this._w=l*B+e*this._w,this._x=l*t+e*this._x,this._y=l*i+e*this._y,this._z=l*s+e*this._z,this.normalize(),this}let f=Math.sqrt(o),C=Math.atan2(f,r),a=Math.sin((1-e)*C)/f,c=Math.sin(e*C)/f;return this._w=B*a+this._w*c,this._x=t*a+this._x*c,this._y=i*a+this._y*c,this._z=s*a+this._z*c,this._onChangeCallback(),this}slerpQuaternions(D,e,t){return this.copy(D).slerp(e,t)}random(){let D=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),t=Math.random(),i=Math.sqrt(1-t),s=Math.sqrt(t);return this.set(i*Math.sin(D),i*Math.cos(D),s*Math.sin(e),s*Math.cos(e))}equals(D){return D._x===this._x&&D._y===this._y&&D._z===this._z&&D._w===this._w}fromArray(D,e=0){return this._x=D[e],this._y=D[e+1],this._z=D[e+2],this._w=D[e+3],this._onChangeCallback(),this}toArray(D=[],e=0){return D[e]=this._x,D[e+1]=this._y,D[e+2]=this._z,D[e+3]=this._w,D}fromBufferAttribute(D,e){return this._x=D.getX(e),this._y=D.getY(e),this._z=D.getZ(e),this._w=D.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(D){return this._onChangeCallback=D,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(D=0,e=0,t=0){n.prototype.isVector3=!0,this.x=D,this.y=e,this.z=t}set(D,e,t){return t===void 0&&(t=this.z),this.x=D,this.y=e,this.z=t,this}setScalar(D){return this.x=D,this.y=D,this.z=D,this}setX(D){return this.x=D,this}setY(D){return this.y=D,this}setZ(D){return this.z=D,this}setComponent(D,e){switch(D){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+D)}return this}getComponent(D){switch(D){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+D)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(D){return this.x=D.x,this.y=D.y,this.z=D.z,this}add(D){return this.x+=D.x,this.y+=D.y,this.z+=D.z,this}addScalar(D){return this.x+=D,this.y+=D,this.z+=D,this}addVectors(D,e){return this.x=D.x+e.x,this.y=D.y+e.y,this.z=D.z+e.z,this}addScaledVector(D,e){return this.x+=D.x*e,this.y+=D.y*e,this.z+=D.z*e,this}sub(D){return this.x-=D.x,this.y-=D.y,this.z-=D.z,this}subScalar(D){return this.x-=D,this.y-=D,this.z-=D,this}subVectors(D,e){return this.x=D.x-e.x,this.y=D.y-e.y,this.z=D.z-e.z,this}multiply(D){return this.x*=D.x,this.y*=D.y,this.z*=D.z,this}multiplyScalar(D){return this.x*=D,this.y*=D,this.z*=D,this}multiplyVectors(D,e){return this.x=D.x*e.x,this.y=D.y*e.y,this.z=D.z*e.z,this}applyEuler(D){return this.applyQuaternion(Of.setFromEuler(D))}applyAxisAngle(D,e){return this.applyQuaternion(Of.setFromAxisAngle(D,e))}applyMatrix3(D){let e=this.x,t=this.y,i=this.z,s=D.elements;return this.x=s[0]*e+s[3]*t+s[6]*i,this.y=s[1]*e+s[4]*t+s[7]*i,this.z=s[2]*e+s[5]*t+s[8]*i,this}applyNormalMatrix(D){return this.applyMatrix3(D).normalize()}applyMatrix4(D){let e=this.x,t=this.y,i=this.z,s=D.elements,B=1/(s[3]*e+s[7]*t+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*t+s[8]*i+s[12])*B,this.y=(s[1]*e+s[5]*t+s[9]*i+s[13])*B,this.z=(s[2]*e+s[6]*t+s[10]*i+s[14])*B,this}applyQuaternion(D){let e=this.x,t=this.y,i=this.z,s=D.x,B=D.y,r=D.z,o=D.w,f=2*(B*i-r*t),C=2*(r*e-s*i),a=2*(s*t-B*e);return this.x=e+o*f+B*a-r*C,this.y=t+o*C+r*f-s*a,this.z=i+o*a+s*C-B*f,this}project(D){return this.applyMatrix4(D.matrixWorldInverse).applyMatrix4(D.projectionMatrix)}unproject(D){return this.applyMatrix4(D.projectionMatrixInverse).applyMatrix4(D.matrixWorld)}transformDirection(D){let e=this.x,t=this.y,i=this.z,s=D.elements;return this.x=s[0]*e+s[4]*t+s[8]*i,this.y=s[1]*e+s[5]*t+s[9]*i,this.z=s[2]*e+s[6]*t+s[10]*i,this.normalize()}divide(D){return this.x/=D.x,this.y/=D.y,this.z/=D.z,this}divideScalar(D){return this.multiplyScalar(1/D)}min(D){return this.x=Math.min(this.x,D.x),this.y=Math.min(this.y,D.y),this.z=Math.min(this.z,D.z),this}max(D){return this.x=Math.max(this.x,D.x),this.y=Math.max(this.y,D.y),this.z=Math.max(this.z,D.z),this}clamp(D,e){return this.x=Math.max(D.x,Math.min(e.x,this.x)),this.y=Math.max(D.y,Math.min(e.y,this.y)),this.z=Math.max(D.z,Math.min(e.z,this.z)),this}clampScalar(D,e){return this.x=Math.max(D,Math.min(e,this.x)),this.y=Math.max(D,Math.min(e,this.y)),this.z=Math.max(D,Math.min(e,this.z)),this}clampLength(D,e){let t=this.length();return this.divideScalar(t||1).multiplyScalar(Math.max(D,Math.min(e,t)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(D){return this.x*D.x+this.y*D.y+this.z*D.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(D){return this.normalize().multiplyScalar(D)}lerp(D,e){return this.x+=(D.x-this.x)*e,this.y+=(D.y-this.y)*e,this.z+=(D.z-this.z)*e,this}lerpVectors(D,e,t){return this.x=D.x+(e.x-D.x)*t,this.y=D.y+(e.y-D.y)*t,this.z=D.z+(e.z-D.z)*t,this}cross(D){return this.crossVectors(this,D)}crossVectors(D,e){let t=D.x,i=D.y,s=D.z,B=e.x,r=e.y,o=e.z;return this.x=i*o-s*r,this.y=s*B-t*o,this.z=t*r-i*B,this}projectOnVector(D){let e=D.lengthSq();if(e===0)return this.set(0,0,0);let t=D.dot(this)/e;return this.copy(D).multiplyScalar(t)}projectOnPlane(D){return bB.copy(this).projectOnVector(D),this.sub(bB)}reflect(D){return this.sub(bB.copy(D).multiplyScalar(2*this.dot(D)))}angleTo(D){let e=Math.sqrt(this.lengthSq()*D.lengthSq());if(e===0)return Math.PI/2;let t=this.dot(D)/e;return Math.acos(Ae(t,-1,1))}distanceTo(D){return Math.sqrt(this.distanceToSquared(D))}distanceToSquared(D){let e=this.x-D.x,t=this.y-D.y,i=this.z-D.z;return e*e+t*t+i*i}manhattanDistanceTo(D){return Math.abs(this.x-D.x)+Math.abs(this.y-D.y)+Math.abs(this.z-D.z)}setFromSpherical(D){return this.setFromSphericalCoords(D.radius,D.phi,D.theta)}setFromSphericalCoords(D,e,t){let i=Math.sin(e)*D;return this.x=i*Math.sin(t),this.y=Math.cos(e)*D,this.z=i*Math.cos(t),this}setFromCylindrical(D){return this.setFromCylindricalCoords(D.radius,D.theta,D.y)}setFromCylindricalCoords(D,e,t){return this.x=D*Math.sin(e),this.y=t,this.z=D*Math.cos(e),this}setFromMatrixPosition(D){let e=D.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(D){let e=this.setFromMatrixColumn(D,0).length(),t=this.setFromMatrixColumn(D,1).length(),i=this.setFromMatrixColumn(D,2).length();return this.x=e,this.y=t,this.z=i,this}setFromMatrixColumn(D,e){return this.fromArray(D.elements,e*4)}setFromMatrix3Column(D,e){return this.fromArray(D.elements,e*3)}setFromEuler(D){return this.x=D._x,this.y=D._y,this.z=D._z,this}setFromColor(D){return this.x=D.r,this.y=D.g,this.z=D.b,this}equals(D){return D.x===this.x&&D.y===this.y&&D.z===this.z}fromArray(D,e=0){return this.x=D[e],this.y=D[e+1],this.z=D[e+2],this}toArray(D=[],e=0){return D[e]=this.x,D[e+1]=this.y,D[e+2]=this.z,D}fromBufferAttribute(D,e){return this.x=D.getX(e),this.y=D.getY(e),this.z=D.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let D=Math.random()*Math.PI*2,e=Math.random()*2-1,t=Math.sqrt(1-e*e);return this.x=t*Math.cos(D),this.y=e,this.z=t*Math.sin(D),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},bB=new H,Of=new ge,Se=class{constructor(D=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=D,this.max=e}set(D,e){return this.min.copy(D),this.max.copy(e),this}setFromArray(D){this.makeEmpty();for(let e=0,t=D.length;e<t;e+=3)this.expandByPoint(it.fromArray(D,e));return this}setFromBufferAttribute(D){this.makeEmpty();for(let e=0,t=D.count;e<t;e++)this.expandByPoint(it.fromBufferAttribute(D,e));return this}setFromPoints(D){this.makeEmpty();for(let e=0,t=D.length;e<t;e++)this.expandByPoint(D[e]);return this}setFromCenterAndSize(D,e){let t=it.copy(e).multiplyScalar(.5);return this.min.copy(D).sub(t),this.max.copy(D).add(t),this}setFromObject(D,e=!1){return this.makeEmpty(),this.expandByObject(D,e)}clone(){return new this.constructor().copy(this)}copy(D){return this.min.copy(D.min),this.max.copy(D.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(D){return this.isEmpty()?D.set(0,0,0):D.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(D){return this.isEmpty()?D.set(0,0,0):D.subVectors(this.max,this.min)}expandByPoint(D){return this.min.min(D),this.max.max(D),this}expandByVector(D){return this.min.sub(D),this.max.add(D),this}expandByScalar(D){return this.min.addScalar(-D),this.max.addScalar(D),this}expandByObject(D,e=!1){D.updateWorldMatrix(!1,!1);let t=D.geometry;if(t!==void 0){let s=t.getAttribute("position");if(e===!0&&s!==void 0&&D.isInstancedMesh!==!0)for(let B=0,r=s.count;B<r;B++)D.isMesh===!0?D.getVertexPosition(B,it):it.fromBufferAttribute(s,B),it.applyMatrix4(D.matrixWorld),this.expandByPoint(it);else D.boundingBox!==void 0?(D.boundingBox===null&&D.computeBoundingBox(),$i.copy(D.boundingBox)):(t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox)),$i.applyMatrix4(D.matrixWorld),this.union($i)}let i=D.children;for(let s=0,B=i.length;s<B;s++)this.expandByObject(i[s],e);return this}containsPoint(D){return D.x>=this.min.x&&D.x<=this.max.x&&D.y>=this.min.y&&D.y<=this.max.y&&D.z>=this.min.z&&D.z<=this.max.z}containsBox(D){return this.min.x<=D.min.x&&D.max.x<=this.max.x&&this.min.y<=D.min.y&&D.max.y<=this.max.y&&this.min.z<=D.min.z&&D.max.z<=this.max.z}getParameter(D,e){return e.set((D.x-this.min.x)/(this.max.x-this.min.x),(D.y-this.min.y)/(this.max.y-this.min.y),(D.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(D){return D.max.x>=this.min.x&&D.min.x<=this.max.x&&D.max.y>=this.min.y&&D.min.y<=this.max.y&&D.max.z>=this.min.z&&D.min.z<=this.max.z}intersectsSphere(D){return this.clampPoint(D.center,it),it.distanceToSquared(D.center)<=D.radius*D.radius}intersectsPlane(D){let e,t;return D.normal.x>0?(e=D.normal.x*this.min.x,t=D.normal.x*this.max.x):(e=D.normal.x*this.max.x,t=D.normal.x*this.min.x),D.normal.y>0?(e+=D.normal.y*this.min.y,t+=D.normal.y*this.max.y):(e+=D.normal.y*this.max.y,t+=D.normal.y*this.min.y),D.normal.z>0?(e+=D.normal.z*this.min.z,t+=D.normal.z*this.max.z):(e+=D.normal.z*this.max.z,t+=D.normal.z*this.min.z),e<=-D.constant&&t>=-D.constant}intersectsTriangle(D){if(this.isEmpty())return!1;this.getCenter(ui),Qi.subVectors(this.max,ui),wn.subVectors(D.a,ui),vn.subVectors(D.b,ui),Mn.subVectors(D.c,ui),kt.subVectors(vn,wn),Jt.subVectors(Mn,vn),on.subVectors(wn,Mn);let e=[0,-kt.z,kt.y,0,-Jt.z,Jt.y,0,-on.z,on.y,kt.z,0,-kt.x,Jt.z,0,-Jt.x,on.z,0,-on.x,-kt.y,kt.x,0,-Jt.y,Jt.x,0,-on.y,on.x,0];return!RB(e,wn,vn,Mn,Qi)||(e=[1,0,0,0,1,0,0,0,1],!RB(e,wn,vn,Mn,Qi))?!1:(Ds.crossVectors(kt,Jt),e=[Ds.x,Ds.y,Ds.z],RB(e,wn,vn,Mn,Qi))}clampPoint(D,e){return e.copy(D).clamp(this.min,this.max)}distanceToPoint(D){return this.clampPoint(D,it).distanceTo(D)}getBoundingSphere(D){return this.isEmpty()?D.makeEmpty():(this.getCenter(D.center),D.radius=this.getSize(it).length()*.5),D}intersect(D){return this.min.max(D.min),this.max.min(D.max),this.isEmpty()&&this.makeEmpty(),this}union(D){return this.min.min(D.min),this.max.max(D.max),this}applyMatrix4(D){return this.isEmpty()?this:(bt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(D),bt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(D),bt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(D),bt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(D),bt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(D),bt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(D),bt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(D),bt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(D),this.setFromPoints(bt),this)}translate(D){return this.min.add(D),this.max.add(D),this}equals(D){return D.min.equals(this.min)&&D.max.equals(this.max)}},bt=[new H,new H,new H,new H,new H,new H,new H,new H],it=new H,$i=new Se,wn=new H,vn=new H,Mn=new H,kt=new H,Jt=new H,on=new H,ui=new H,Qi=new H,Ds=new H,fn=new H;function RB(n,D,e,t,i){for(let s=0,B=n.length-3;s<=B;s+=3){fn.fromArray(n,s);let r=i.x*Math.abs(fn.x)+i.y*Math.abs(fn.y)+i.z*Math.abs(fn.z),o=D.dot(fn),f=e.dot(fn),C=t.dot(fn);if(Math.max(-Math.max(o,f,C),Math.min(o,f,C))>r)return!1}return!0}var h3=new Se,di=new H,gB=new H,Je=class{constructor(D=new H,e=-1){this.isSphere=!0,this.center=D,this.radius=e}set(D,e){return this.center.copy(D),this.radius=e,this}setFromPoints(D,e){let t=this.center;e!==void 0?t.copy(e):h3.setFromPoints(D).getCenter(t);let i=0;for(let s=0,B=D.length;s<B;s++)i=Math.max(i,t.distanceToSquared(D[s]));return this.radius=Math.sqrt(i),this}copy(D){return this.center.copy(D.center),this.radius=D.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(D){return D.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(D){return D.distanceTo(this.center)-this.radius}intersectsSphere(D){let e=this.radius+D.radius;return D.center.distanceToSquared(this.center)<=e*e}intersectsBox(D){return D.intersectsSphere(this)}intersectsPlane(D){return Math.abs(D.distanceToPoint(this.center))<=this.radius}clampPoint(D,e){let t=this.center.distanceToSquared(D);return e.copy(D),t>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(D){return this.isEmpty()?(D.makeEmpty(),D):(D.set(this.center,this.center),D.expandByScalar(this.radius),D)}applyMatrix4(D){return this.center.applyMatrix4(D),this.radius=this.radius*D.getMaxScaleOnAxis(),this}translate(D){return this.center.add(D),this}expandByPoint(D){if(this.isEmpty())return this.center.copy(D),this.radius=0,this;di.subVectors(D,this.center);let e=di.lengthSq();if(e>this.radius*this.radius){let t=Math.sqrt(e),i=(t-this.radius)*.5;this.center.addScaledVector(di,i/t),this.radius+=i}return this}union(D){return D.isEmpty()?this:this.isEmpty()?(this.copy(D),this):(this.center.equals(D.center)===!0?this.radius=Math.max(this.radius,D.radius):(gB.subVectors(D.center,this.center).setLength(D.radius),this.expandByPoint(di.copy(D.center).add(gB)),this.expandByPoint(di.copy(D.center).sub(gB))),this)}equals(D){return D.center.equals(this.center)&&D.radius===this.radius}clone(){return new this.constructor().copy(this)}},Rt=new H,xB=new H,es=new H,zt=new H,TB=new H,ts=new H,HB=new H,qt=class{constructor(D=new H,e=new H(0,0,-1)){this.origin=D,this.direction=e}set(D,e){return this.origin.copy(D),this.direction.copy(e),this}copy(D){return this.origin.copy(D.origin),this.direction.copy(D.direction),this}at(D,e){return e.copy(this.origin).addScaledVector(this.direction,D)}lookAt(D){return this.direction.copy(D).sub(this.origin).normalize(),this}recast(D){return this.origin.copy(this.at(D,Rt)),this}closestPointToPoint(D,e){e.subVectors(D,this.origin);let t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,t)}distanceToPoint(D){return Math.sqrt(this.distanceSqToPoint(D))}distanceSqToPoint(D){let e=Rt.subVectors(D,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(D):(Rt.copy(this.origin).addScaledVector(this.direction,e),Rt.distanceToSquared(D))}distanceSqToSegment(D,e,t,i){xB.copy(D).add(e).multiplyScalar(.5),es.copy(e).sub(D).normalize(),zt.copy(this.origin).sub(xB);let s=D.distanceTo(e)*.5,B=-this.direction.dot(es),r=zt.dot(this.direction),o=-zt.dot(es),f=zt.lengthSq(),C=Math.abs(1-B*B),a,c,l,u;if(C>0)if(a=B*o-r,c=B*r-o,u=s*C,a>=0)if(c>=-u)if(c<=u){let d=1/C;a*=d,c*=d,l=a*(a+B*c+2*r)+c*(B*a+c+2*o)+f}else c=s,a=Math.max(0,-(B*c+r)),l=-a*a+c*(c+2*o)+f;else c=-s,a=Math.max(0,-(B*c+r)),l=-a*a+c*(c+2*o)+f;else c<=-u?(a=Math.max(0,-(-B*s+r)),c=a>0?-s:Math.min(Math.max(-s,-o),s),l=-a*a+c*(c+2*o)+f):c<=u?(a=0,c=Math.min(Math.max(-s,-o),s),l=c*(c+2*o)+f):(a=Math.max(0,-(B*s+r)),c=a>0?s:Math.min(Math.max(-s,-o),s),l=-a*a+c*(c+2*o)+f);else c=B>0?-s:s,a=Math.max(0,-(B*c+r)),l=-a*a+c*(c+2*o)+f;return t&&t.copy(this.origin).addScaledVector(this.direction,a),i&&i.copy(xB).addScaledVector(es,c),l}intersectSphere(D,e){Rt.subVectors(D.center,this.origin);let t=Rt.dot(this.direction),i=Rt.dot(Rt)-t*t,s=D.radius*D.radius;if(i>s)return null;let B=Math.sqrt(s-i),r=t-B,o=t+B;return o<0?null:r<0?this.at(o,e):this.at(r,e)}intersectsSphere(D){return this.distanceSqToPoint(D.center)<=D.radius*D.radius}distanceToPlane(D){let e=D.normal.dot(this.direction);if(e===0)return D.distanceToPoint(this.origin)===0?0:null;let t=-(this.origin.dot(D.normal)+D.constant)/e;return t>=0?t:null}intersectPlane(D,e){let t=this.distanceToPlane(D);return t===null?null:this.at(t,e)}intersectsPlane(D){let e=D.distanceToPoint(this.origin);return e===0||D.normal.dot(this.direction)*e<0}intersectBox(D,e){let t,i,s,B,r,o,f=1/this.direction.x,C=1/this.direction.y,a=1/this.direction.z,c=this.origin;return f>=0?(t=(D.min.x-c.x)*f,i=(D.max.x-c.x)*f):(t=(D.max.x-c.x)*f,i=(D.min.x-c.x)*f),C>=0?(s=(D.min.y-c.y)*C,B=(D.max.y-c.y)*C):(s=(D.max.y-c.y)*C,B=(D.min.y-c.y)*C),t>B||s>i||((s>t||isNaN(t))&&(t=s),(B<i||isNaN(i))&&(i=B),a>=0?(r=(D.min.z-c.z)*a,o=(D.max.z-c.z)*a):(r=(D.max.z-c.z)*a,o=(D.min.z-c.z)*a),t>o||r>i)||((r>t||t!==t)&&(t=r),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(D){return this.intersectBox(D,Rt)!==null}intersectTriangle(D,e,t,i,s){TB.subVectors(e,D),ts.subVectors(t,D),HB.crossVectors(TB,ts);let B=this.direction.dot(HB),r;if(B>0){if(i)return null;r=1}else if(B<0)r=-1,B=-B;else return null;zt.subVectors(this.origin,D);let o=r*this.direction.dot(ts.crossVectors(zt,ts));if(o<0)return null;let f=r*this.direction.dot(TB.cross(zt));if(f<0||o+f>B)return null;let C=-r*zt.dot(HB);return C<0?null:this.at(C/B,s)}applyMatrix4(D){return this.origin.applyMatrix4(D),this.direction.transformDirection(D),this}equals(D){return D.origin.equals(this.origin)&&D.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},VD=class n{constructor(D,e,t,i,s,B,r,o,f,C,a,c,l,u,d,A){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],D!==void 0&&this.set(D,e,t,i,s,B,r,o,f,C,a,c,l,u,d,A)}set(D,e,t,i,s,B,r,o,f,C,a,c,l,u,d,A){let h=this.elements;return h[0]=D,h[4]=e,h[8]=t,h[12]=i,h[1]=s,h[5]=B,h[9]=r,h[13]=o,h[2]=f,h[6]=C,h[10]=a,h[14]=c,h[3]=l,h[7]=u,h[11]=d,h[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(D){let e=this.elements,t=D.elements;return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],this}copyPosition(D){let e=this.elements,t=D.elements;return e[12]=t[12],e[13]=t[13],e[14]=t[14],this}setFromMatrix3(D){let e=D.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(D,e,t){return D.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),t.setFromMatrixColumn(this,2),this}makeBasis(D,e,t){return this.set(D.x,e.x,t.x,0,D.y,e.y,t.y,0,D.z,e.z,t.z,0,0,0,0,1),this}extractRotation(D){let e=this.elements,t=D.elements,i=1/Sn.setFromMatrixColumn(D,0).length(),s=1/Sn.setFromMatrixColumn(D,1).length(),B=1/Sn.setFromMatrixColumn(D,2).length();return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=0,e[4]=t[4]*s,e[5]=t[5]*s,e[6]=t[6]*s,e[7]=0,e[8]=t[8]*B,e[9]=t[9]*B,e[10]=t[10]*B,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(D){let e=this.elements,t=D.x,i=D.y,s=D.z,B=Math.cos(t),r=Math.sin(t),o=Math.cos(i),f=Math.sin(i),C=Math.cos(s),a=Math.sin(s);if(D.order==="XYZ"){let c=B*C,l=B*a,u=r*C,d=r*a;e[0]=o*C,e[4]=-o*a,e[8]=f,e[1]=l+u*f,e[5]=c-d*f,e[9]=-r*o,e[2]=d-c*f,e[6]=u+l*f,e[10]=B*o}else if(D.order==="YXZ"){let c=o*C,l=o*a,u=f*C,d=f*a;e[0]=c+d*r,e[4]=u*r-l,e[8]=B*f,e[1]=B*a,e[5]=B*C,e[9]=-r,e[2]=l*r-u,e[6]=d+c*r,e[10]=B*o}else if(D.order==="ZXY"){let c=o*C,l=o*a,u=f*C,d=f*a;e[0]=c-d*r,e[4]=-B*a,e[8]=u+l*r,e[1]=l+u*r,e[5]=B*C,e[9]=d-c*r,e[2]=-B*f,e[6]=r,e[10]=B*o}else if(D.order==="ZYX"){let c=B*C,l=B*a,u=r*C,d=r*a;e[0]=o*C,e[4]=u*f-l,e[8]=c*f+d,e[1]=o*a,e[5]=d*f+c,e[9]=l*f-u,e[2]=-f,e[6]=r*o,e[10]=B*o}else if(D.order==="YZX"){let c=B*o,l=B*f,u=r*o,d=r*f;e[0]=o*C,e[4]=d-c*a,e[8]=u*a+l,e[1]=a,e[5]=B*C,e[9]=-r*C,e[2]=-f*C,e[6]=l*a+u,e[10]=c-d*a}else if(D.order==="XZY"){let c=B*o,l=B*f,u=r*o,d=r*f;e[0]=o*C,e[4]=-a,e[8]=f*C,e[1]=c*a+d,e[5]=B*C,e[9]=l*a-u,e[2]=u*a-l,e[6]=r*C,e[10]=d*a+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(D){return this.compose(A3,D,u3)}lookAt(D,e,t){let i=this.elements;return je.subVectors(D,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Wt.crossVectors(t,je),Wt.lengthSq()===0&&(Math.abs(t.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Wt.crossVectors(t,je)),Wt.normalize(),ns.crossVectors(je,Wt),i[0]=Wt.x,i[4]=ns.x,i[8]=je.x,i[1]=Wt.y,i[5]=ns.y,i[9]=je.y,i[2]=Wt.z,i[6]=ns.z,i[10]=je.z,this}multiply(D){return this.multiplyMatrices(this,D)}premultiply(D){return this.multiplyMatrices(D,this)}multiplyMatrices(D,e){let t=D.elements,i=e.elements,s=this.elements,B=t[0],r=t[4],o=t[8],f=t[12],C=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],A=t[10],h=t[14],g=t[3],x=t[7],y=t[11],E=t[15],w=i[0],v=i[4],P=i[8],R=i[12],m=i[1],M=i[5],X=i[9],I=i[13],z=i[2],$=i[6],W=i[10],DD=i[14],J=i[3],iD=i[7],BD=i[11],pD=i[15];return s[0]=B*w+r*m+o*z+f*J,s[4]=B*v+r*M+o*$+f*iD,s[8]=B*P+r*X+o*W+f*BD,s[12]=B*R+r*I+o*DD+f*pD,s[1]=C*w+a*m+c*z+l*J,s[5]=C*v+a*M+c*$+l*iD,s[9]=C*P+a*X+c*W+l*BD,s[13]=C*R+a*I+c*DD+l*pD,s[2]=u*w+d*m+A*z+h*J,s[6]=u*v+d*M+A*$+h*iD,s[10]=u*P+d*X+A*W+h*BD,s[14]=u*R+d*I+A*DD+h*pD,s[3]=g*w+x*m+y*z+E*J,s[7]=g*v+x*M+y*$+E*iD,s[11]=g*P+x*X+y*W+E*BD,s[15]=g*R+x*I+y*DD+E*pD,this}multiplyScalar(D){let e=this.elements;return e[0]*=D,e[4]*=D,e[8]*=D,e[12]*=D,e[1]*=D,e[5]*=D,e[9]*=D,e[13]*=D,e[2]*=D,e[6]*=D,e[10]*=D,e[14]*=D,e[3]*=D,e[7]*=D,e[11]*=D,e[15]*=D,this}determinant(){let D=this.elements,e=D[0],t=D[4],i=D[8],s=D[12],B=D[1],r=D[5],o=D[9],f=D[13],C=D[2],a=D[6],c=D[10],l=D[14],u=D[3],d=D[7],A=D[11],h=D[15];return u*(+s*o*a-i*f*a-s*r*c+t*f*c+i*r*l-t*o*l)+d*(+e*o*l-e*f*c+s*B*c-i*B*l+i*f*C-s*o*C)+A*(+e*f*a-e*r*l-s*B*a+t*B*l+s*r*C-t*f*C)+h*(-i*r*C-e*o*a+e*r*c+i*B*a-t*B*c+t*o*C)}transpose(){let D=this.elements,e;return e=D[1],D[1]=D[4],D[4]=e,e=D[2],D[2]=D[8],D[8]=e,e=D[6],D[6]=D[9],D[9]=e,e=D[3],D[3]=D[12],D[12]=e,e=D[7],D[7]=D[13],D[13]=e,e=D[11],D[11]=D[14],D[14]=e,this}setPosition(D,e,t){let i=this.elements;return D.isVector3?(i[12]=D.x,i[13]=D.y,i[14]=D.z):(i[12]=D,i[13]=e,i[14]=t),this}invert(){let D=this.elements,e=D[0],t=D[1],i=D[2],s=D[3],B=D[4],r=D[5],o=D[6],f=D[7],C=D[8],a=D[9],c=D[10],l=D[11],u=D[12],d=D[13],A=D[14],h=D[15],g=a*A*f-d*c*f+d*o*l-r*A*l-a*o*h+r*c*h,x=u*c*f-C*A*f-u*o*l+B*A*l+C*o*h-B*c*h,y=C*d*f-u*a*f+u*r*l-B*d*l-C*r*h+B*a*h,E=u*a*o-C*d*o-u*r*c+B*d*c+C*r*A-B*a*A,w=e*g+t*x+i*y+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let v=1/w;return D[0]=g*v,D[1]=(d*c*s-a*A*s-d*i*l+t*A*l+a*i*h-t*c*h)*v,D[2]=(r*A*s-d*o*s+d*i*f-t*A*f-r*i*h+t*o*h)*v,D[3]=(a*o*s-r*c*s-a*i*f+t*c*f+r*i*l-t*o*l)*v,D[4]=x*v,D[5]=(C*A*s-u*c*s+u*i*l-e*A*l-C*i*h+e*c*h)*v,D[6]=(u*o*s-B*A*s-u*i*f+e*A*f+B*i*h-e*o*h)*v,D[7]=(B*c*s-C*o*s+C*i*f-e*c*f-B*i*l+e*o*l)*v,D[8]=y*v,D[9]=(u*a*s-C*d*s-u*t*l+e*d*l+C*t*h-e*a*h)*v,D[10]=(B*d*s-u*r*s+u*t*f-e*d*f-B*t*h+e*r*h)*v,D[11]=(C*r*s-B*a*s-C*t*f+e*a*f+B*t*l-e*r*l)*v,D[12]=E*v,D[13]=(C*d*i-u*a*i+u*t*c-e*d*c-C*t*A+e*a*A)*v,D[14]=(u*r*i-B*d*i-u*t*o+e*d*o+B*t*A-e*r*A)*v,D[15]=(B*a*i-C*r*i+C*t*o-e*a*o-B*t*c+e*r*c)*v,this}scale(D){let e=this.elements,t=D.x,i=D.y,s=D.z;return e[0]*=t,e[4]*=i,e[8]*=s,e[1]*=t,e[5]*=i,e[9]*=s,e[2]*=t,e[6]*=i,e[10]*=s,e[3]*=t,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let D=this.elements,e=D[0]*D[0]+D[1]*D[1]+D[2]*D[2],t=D[4]*D[4]+D[5]*D[5]+D[6]*D[6],i=D[8]*D[8]+D[9]*D[9]+D[10]*D[10];return Math.sqrt(Math.max(e,t,i))}makeTranslation(D,e,t){return D.isVector3?this.set(1,0,0,D.x,0,1,0,D.y,0,0,1,D.z,0,0,0,1):this.set(1,0,0,D,0,1,0,e,0,0,1,t,0,0,0,1),this}makeRotationX(D){let e=Math.cos(D),t=Math.sin(D);return this.set(1,0,0,0,0,e,-t,0,0,t,e,0,0,0,0,1),this}makeRotationY(D){let e=Math.cos(D),t=Math.sin(D);return this.set(e,0,t,0,0,1,0,0,-t,0,e,0,0,0,0,1),this}makeRotationZ(D){let e=Math.cos(D),t=Math.sin(D);return this.set(e,-t,0,0,t,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(D,e){let t=Math.cos(e),i=Math.sin(e),s=1-t,B=D.x,r=D.y,o=D.z,f=s*B,C=s*r;return this.set(f*B+t,f*r-i*o,f*o+i*r,0,f*r+i*o,C*r+t,C*o-i*B,0,f*o-i*r,C*o+i*B,s*o*o+t,0,0,0,0,1),this}makeScale(D,e,t){return this.set(D,0,0,0,0,e,0,0,0,0,t,0,0,0,0,1),this}makeShear(D,e,t,i,s,B){return this.set(1,t,s,0,D,1,B,0,e,i,1,0,0,0,0,1),this}compose(D,e,t){let i=this.elements,s=e._x,B=e._y,r=e._z,o=e._w,f=s+s,C=B+B,a=r+r,c=s*f,l=s*C,u=s*a,d=B*C,A=B*a,h=r*a,g=o*f,x=o*C,y=o*a,E=t.x,w=t.y,v=t.z;return i[0]=(1-(d+h))*E,i[1]=(l+y)*E,i[2]=(u-x)*E,i[3]=0,i[4]=(l-y)*w,i[5]=(1-(c+h))*w,i[6]=(A+g)*w,i[7]=0,i[8]=(u+x)*v,i[9]=(A-g)*v,i[10]=(1-(c+d))*v,i[11]=0,i[12]=D.x,i[13]=D.y,i[14]=D.z,i[15]=1,this}decompose(D,e,t){let i=this.elements,s=Sn.set(i[0],i[1],i[2]).length(),B=Sn.set(i[4],i[5],i[6]).length(),r=Sn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),D.x=i[12],D.y=i[13],D.z=i[14],st.copy(this);let f=1/s,C=1/B,a=1/r;return st.elements[0]*=f,st.elements[1]*=f,st.elements[2]*=f,st.elements[4]*=C,st.elements[5]*=C,st.elements[6]*=C,st.elements[8]*=a,st.elements[9]*=a,st.elements[10]*=a,e.setFromRotationMatrix(st),t.x=s,t.y=B,t.z=r,this}makePerspective(D,e,t,i,s,B,r=vt){let o=this.elements,f=2*s/(e-D),C=2*s/(t-i),a=(e+D)/(e-D),c=(t+i)/(t-i),l,u;if(r===vt)l=-(B+s)/(B-s),u=-2*B*s/(B-s);else if(r===Ss)l=-B/(B-s),u=-B*s/(B-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return o[0]=f,o[4]=0,o[8]=a,o[12]=0,o[1]=0,o[5]=C,o[9]=c,o[13]=0,o[2]=0,o[6]=0,o[10]=l,o[14]=u,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(D,e,t,i,s,B,r=vt){let o=this.elements,f=1/(e-D),C=1/(t-i),a=1/(B-s),c=(e+D)*f,l=(t+i)*C,u,d;if(r===vt)u=(B+s)*a,d=-2*a;else if(r===Ss)u=s*a,d=-1*a;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return o[0]=2*f,o[4]=0,o[8]=0,o[12]=-c,o[1]=0,o[5]=2*C,o[9]=0,o[13]=-l,o[2]=0,o[6]=0,o[10]=d,o[14]=-u,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(D){let e=this.elements,t=D.elements;for(let i=0;i<16;i++)if(e[i]!==t[i])return!1;return!0}fromArray(D,e=0){for(let t=0;t<16;t++)this.elements[t]=D[t+e];return this}toArray(D=[],e=0){let t=this.elements;return D[e]=t[0],D[e+1]=t[1],D[e+2]=t[2],D[e+3]=t[3],D[e+4]=t[4],D[e+5]=t[5],D[e+6]=t[6],D[e+7]=t[7],D[e+8]=t[8],D[e+9]=t[9],D[e+10]=t[10],D[e+11]=t[11],D[e+12]=t[12],D[e+13]=t[13],D[e+14]=t[14],D[e+15]=t[15],D}},Sn=new H,st=new VD,A3=new H(0,0,0),u3=new H(1,1,1),Wt=new H,ns=new H,je=new H,Nf=new VD,If=new ge,$e=class n{constructor(D=0,e=0,t=0,i=n.DEFAULT_ORDER){this.isEuler=!0,this._x=D,this._y=e,this._z=t,this._order=i}get x(){return this._x}set x(D){this._x=D,this._onChangeCallback()}get y(){return this._y}set y(D){this._y=D,this._onChangeCallback()}get z(){return this._z}set z(D){this._z=D,this._onChangeCallback()}get order(){return this._order}set order(D){this._order=D,this._onChangeCallback()}set(D,e,t,i=this._order){return this._x=D,this._y=e,this._z=t,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(D){return this._x=D._x,this._y=D._y,this._z=D._z,this._order=D._order,this._onChangeCallback(),this}setFromRotationMatrix(D,e=this._order,t=!0){let i=D.elements,s=i[0],B=i[4],r=i[8],o=i[1],f=i[5],C=i[9],a=i[2],c=i[6],l=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-C,l),this._z=Math.atan2(-B,s)):(this._x=Math.atan2(c,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(C,-1,1)),Math.abs(C)<.9999999?(this._y=Math.atan2(r,l),this._z=Math.atan2(o,f)):(this._y=Math.atan2(-a,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-a,l),this._z=Math.atan2(-B,f)):(this._y=0,this._z=Math.atan2(o,s));break;case"ZYX":this._y=Math.asin(-Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,l),this._z=Math.atan2(o,s)):(this._x=0,this._z=Math.atan2(-B,f));break;case"YZX":this._z=Math.asin(Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-C,f),this._y=Math.atan2(-a,s)):(this._x=0,this._y=Math.atan2(r,l));break;case"XZY":this._z=Math.asin(-Ae(B,-1,1)),Math.abs(B)<.9999999?(this._x=Math.atan2(c,f),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-C,l),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,t===!0&&this._onChangeCallback(),this}setFromQuaternion(D,e,t){return Nf.makeRotationFromQuaternion(D),this.setFromRotationMatrix(Nf,e,t)}setFromVector3(D,e=this._order){return this.set(D.x,D.y,D.z,e)}reorder(D){return If.setFromEuler(this),this.setFromQuaternion(If,D)}equals(D){return D._x===this._x&&D._y===this._y&&D._z===this._z&&D._order===this._order}fromArray(D){return this._x=D[0],this._y=D[1],this._z=D[2],D[3]!==void 0&&(this._order=D[3]),this._onChangeCallback(),this}toArray(D=[],e=0){return D[e]=this._x,D[e+1]=this._y,D[e+2]=this._z,D[e+3]=this._order,D}_onChange(D){return this._onChangeCallback=D,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var Vi=class{constructor(){this.mask=1}set(D){this.mask=(1<<D|0)>>>0}enable(D){this.mask|=1<<D|0}enableAll(){this.mask=-1}toggle(D){this.mask^=1<<D|0}disable(D){this.mask&=~(1<<D|0)}disableAll(){this.mask=0}test(D){return(this.mask&D.mask)!==0}isEnabled(D){return(this.mask&(1<<D|0))!==0}},d3=0,jf=new H,Ln=new ge,gt=new VD,is=new H,pi=new H,p3=new H,m3=new ge,Xf=new H(1,0,0),kf=new H(0,1,0),Jf=new H(0,0,1),zf={type:"added"},y3={type:"removed"},Vn={type:"childadded",child:null},_B={type:"childremoved",child:null},ae=class n extends Lt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d3++}),this.uuid=Ct(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let D=new H,e=new $e,t=new ge,i=new H(1,1,1);function s(){t.setFromEuler(e,!1)}function B(){e.setFromQuaternion(t,void 0,!1)}e._onChange(s),t._onChange(B),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:D},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:t},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new VD},normalMatrix:{value:new ND}}),this.matrix=new VD,this.matrixWorld=new VD,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(D){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(D),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(D){return this.quaternion.premultiply(D),this}setRotationFromAxisAngle(D,e){this.quaternion.setFromAxisAngle(D,e)}setRotationFromEuler(D){this.quaternion.setFromEuler(D,!0)}setRotationFromMatrix(D){this.quaternion.setFromRotationMatrix(D)}setRotationFromQuaternion(D){this.quaternion.copy(D)}rotateOnAxis(D,e){return Ln.setFromAxisAngle(D,e),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(D,e){return Ln.setFromAxisAngle(D,e),this.quaternion.premultiply(Ln),this}rotateX(D){return this.rotateOnAxis(Xf,D)}rotateY(D){return this.rotateOnAxis(kf,D)}rotateZ(D){return this.rotateOnAxis(Jf,D)}translateOnAxis(D,e){return jf.copy(D).applyQuaternion(this.quaternion),this.position.add(jf.multiplyScalar(e)),this}translateX(D){return this.translateOnAxis(Xf,D)}translateY(D){return this.translateOnAxis(kf,D)}translateZ(D){return this.translateOnAxis(Jf,D)}localToWorld(D){return this.updateWorldMatrix(!0,!1),D.applyMatrix4(this.matrixWorld)}worldToLocal(D){return this.updateWorldMatrix(!0,!1),D.applyMatrix4(gt.copy(this.matrixWorld).invert())}lookAt(D,e,t){D.isVector3?is.copy(D):is.set(D,e,t);let i=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gt.lookAt(pi,is,this.up):gt.lookAt(is,pi,this.up),this.quaternion.setFromRotationMatrix(gt),i&&(gt.extractRotation(i.matrixWorld),Ln.setFromRotationMatrix(gt),this.quaternion.premultiply(Ln.invert()))}add(D){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return D===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",D),this):(D&&D.isObject3D?(D.removeFromParent(),D.parent=this,this.children.push(D),D.dispatchEvent(zf),Vn.child=D,this.dispatchEvent(Vn),Vn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",D),this)}remove(D){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}let e=this.children.indexOf(D);return e!==-1&&(D.parent=null,this.children.splice(e,1),D.dispatchEvent(y3),_B.child=D,this.dispatchEvent(_B),_B.child=null),this}removeFromParent(){let D=this.parent;return D!==null&&D.remove(this),this}clear(){return this.remove(...this.children)}attach(D){return this.updateWorldMatrix(!0,!1),gt.copy(this.matrixWorld).invert(),D.parent!==null&&(D.parent.updateWorldMatrix(!0,!1),gt.multiply(D.parent.matrixWorld)),D.applyMatrix4(gt),D.removeFromParent(),D.parent=this,this.children.push(D),D.updateWorldMatrix(!1,!0),D.dispatchEvent(zf),Vn.child=D,this.dispatchEvent(Vn),Vn.child=null,this}getObjectById(D){return this.getObjectByProperty("id",D)}getObjectByName(D){return this.getObjectByProperty("name",D)}getObjectByProperty(D,e){if(this[D]===e)return this;for(let t=0,i=this.children.length;t<i;t++){let B=this.children[t].getObjectByProperty(D,e);if(B!==void 0)return B}}getObjectsByProperty(D,e,t=[]){this[D]===e&&t.push(this);let i=this.children;for(let s=0,B=i.length;s<B;s++)i[s].getObjectsByProperty(D,e,t);return t}getWorldPosition(D){return this.updateWorldMatrix(!0,!1),D.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(D){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,D,p3),D}getWorldScale(D){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,m3,D),D}getWorldDirection(D){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return D.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(D){D(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverse(D)}traverseVisible(D){if(this.visible===!1)return;D(this);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].traverseVisible(D)}traverseAncestors(D){let e=this.parent;e!==null&&(D(e),e.traverseAncestors(D))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(D){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||D)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,D=!0);let e=this.children;for(let t=0,i=e.length;t<i;t++)e[t].updateMatrixWorld(D)}updateWorldMatrix(D,e){let t=this.parent;if(D===!0&&t!==null&&t.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,B=i.length;s<B;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(D){let e=D===void 0||typeof D=="string",t={};e&&(D={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},t.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(D),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(D)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(r,o){return r[o.uuid]===void 0&&(r[o.uuid]=o.toJSON(D)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(D).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(D).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(D.geometries,this.geometry);let r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){let o=r.shapes;if(Array.isArray(o))for(let f=0,C=o.length;f<C;f++){let a=o[f];s(D.shapes,a)}else s(D.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(D.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let r=[];for(let o=0,f=this.material.length;o<f;o++)r.push(s(D.materials,this.material[o]));i.material=r}else i.material=s(D.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(D).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){let o=this.animations[r];i.animations.push(s(D.animations,o))}}if(e){let r=B(D.geometries),o=B(D.materials),f=B(D.textures),C=B(D.images),a=B(D.shapes),c=B(D.skeletons),l=B(D.animations),u=B(D.nodes);r.length>0&&(t.geometries=r),o.length>0&&(t.materials=o),f.length>0&&(t.textures=f),C.length>0&&(t.images=C),a.length>0&&(t.shapes=a),c.length>0&&(t.skeletons=c),l.length>0&&(t.animations=l),u.length>0&&(t.nodes=u)}return t.object=i,t;function B(r){let o=[];for(let f in r){let C=r[f];delete C.metadata,o.push(C)}return o}}clone(D){return new this.constructor().copy(this,D)}copy(D,e=!0){if(this.name=D.name,this.up.copy(D.up),this.position.copy(D.position),this.rotation.order=D.rotation.order,this.quaternion.copy(D.quaternion),this.scale.copy(D.scale),this.matrix.copy(D.matrix),this.matrixWorld.copy(D.matrixWorld),this.matrixAutoUpdate=D.matrixAutoUpdate,this.matrixWorldAutoUpdate=D.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=D.matrixWorldNeedsUpdate,this.layers.mask=D.layers.mask,this.visible=D.visible,this.castShadow=D.castShadow,this.receiveShadow=D.receiveShadow,this.frustumCulled=D.frustumCulled,this.renderOrder=D.renderOrder,this.animations=D.animations.slice(),this.userData=JSON.parse(JSON.stringify(D.userData)),e===!0)for(let t=0;t<D.children.length;t++){let i=D.children[t];this.add(i.clone())}return this}};ae.DEFAULT_UP=new H(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bt=new H,xt=new H,wB=new H,Tt=new H,qn=new H,En=new H,Wf=new H,vB=new H,MB=new H,SB=new H,LB=new YD,VB=new YD,qB=new YD,un=class n{constructor(D=new H,e=new H,t=new H){this.a=D,this.b=e,this.c=t}static getNormal(D,e,t,i){i.subVectors(t,e),Bt.subVectors(D,e),i.cross(Bt);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(D,e,t,i,s){Bt.subVectors(i,e),xt.subVectors(t,e),wB.subVectors(D,e);let B=Bt.dot(Bt),r=Bt.dot(xt),o=Bt.dot(wB),f=xt.dot(xt),C=xt.dot(wB),a=B*f-r*r;if(a===0)return s.set(0,0,0),null;let c=1/a,l=(f*o-r*C)*c,u=(B*C-r*o)*c;return s.set(1-l-u,u,l)}static containsPoint(D,e,t,i){return this.getBarycoord(D,e,t,i,Tt)===null?!1:Tt.x>=0&&Tt.y>=0&&Tt.x+Tt.y<=1}static getInterpolation(D,e,t,i,s,B,r,o){return this.getBarycoord(D,e,t,i,Tt)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(s,Tt.x),o.addScaledVector(B,Tt.y),o.addScaledVector(r,Tt.z),o)}static getInterpolatedAttribute(D,e,t,i,s,B){return LB.setScalar(0),VB.setScalar(0),qB.setScalar(0),LB.fromBufferAttribute(D,e),VB.fromBufferAttribute(D,t),qB.fromBufferAttribute(D,i),B.setScalar(0),B.addScaledVector(LB,s.x),B.addScaledVector(VB,s.y),B.addScaledVector(qB,s.z),B}static isFrontFacing(D,e,t,i){return Bt.subVectors(t,e),xt.subVectors(D,e),Bt.cross(xt).dot(i)<0}set(D,e,t){return this.a.copy(D),this.b.copy(e),this.c.copy(t),this}setFromPointsAndIndices(D,e,t,i){return this.a.copy(D[e]),this.b.copy(D[t]),this.c.copy(D[i]),this}setFromAttributeAndIndices(D,e,t,i){return this.a.fromBufferAttribute(D,e),this.b.fromBufferAttribute(D,t),this.c.fromBufferAttribute(D,i),this}clone(){return new this.constructor().copy(this)}copy(D){return this.a.copy(D.a),this.b.copy(D.b),this.c.copy(D.c),this}getArea(){return Bt.subVectors(this.c,this.b),xt.subVectors(this.a,this.b),Bt.cross(xt).length()*.5}getMidpoint(D){return D.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(D){return n.getNormal(this.a,this.b,this.c,D)}getPlane(D){return D.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(D,e){return n.getBarycoord(D,this.a,this.b,this.c,e)}getInterpolation(D,e,t,i,s){return n.getInterpolation(D,this.a,this.b,this.c,e,t,i,s)}containsPoint(D){return n.containsPoint(D,this.a,this.b,this.c)}isFrontFacing(D){return n.isFrontFacing(this.a,this.b,this.c,D)}intersectsBox(D){return D.intersectsTriangle(this)}closestPointToPoint(D,e){let t=this.a,i=this.b,s=this.c,B,r;qn.subVectors(i,t),En.subVectors(s,t),vB.subVectors(D,t);let o=qn.dot(vB),f=En.dot(vB);if(o<=0&&f<=0)return e.copy(t);MB.subVectors(D,i);let C=qn.dot(MB),a=En.dot(MB);if(C>=0&&a<=C)return e.copy(i);let c=o*a-C*f;if(c<=0&&o>=0&&C<=0)return B=o/(o-C),e.copy(t).addScaledVector(qn,B);SB.subVectors(D,s);let l=qn.dot(SB),u=En.dot(SB);if(u>=0&&l<=u)return e.copy(s);let d=l*f-o*u;if(d<=0&&f>=0&&u<=0)return r=f/(f-u),e.copy(t).addScaledVector(En,r);let A=C*u-l*a;if(A<=0&&a-C>=0&&l-u>=0)return Wf.subVectors(s,i),r=(a-C)/(a-C+(l-u)),e.copy(i).addScaledVector(Wf,r);let h=1/(A+d+c);return B=d*h,r=c*h,e.copy(t).addScaledVector(qn,B).addScaledVector(En,r)}equals(D){return D.a.equals(this.a)&&D.b.equals(this.b)&&D.c.equals(this.c)}},ia={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gt={h:0,s:0,l:0},ss={h:0,s:0,l:0};function EB(n,D,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(D-n)*6*e:e<1/2?D:e<2/3?n+(D-n)*6*(2/3-e):n}var _D=class{constructor(D,e,t){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(D,e,t)}set(D,e,t){if(e===void 0&&t===void 0){let i=D;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(D,e,t);return this}setScalar(D){return this.r=D,this.g=D,this.b=D,this}setHex(D,e=be){return D=Math.floor(D),this.r=(D>>16&255)/255,this.g=(D>>8&255)/255,this.b=(D&255)/255,zD.toWorkingColorSpace(this,e),this}setRGB(D,e,t,i=zD.workingColorSpace){return this.r=D,this.g=e,this.b=t,zD.toWorkingColorSpace(this,i),this}setHSL(D,e,t,i=zD.workingColorSpace){if(D=xo(D,1),e=Ae(e,0,1),t=Ae(t,0,1),e===0)this.r=this.g=this.b=t;else{let s=t<=.5?t*(1+e):t+e-t*e,B=2*t-s;this.r=EB(B,s,D+1/3),this.g=EB(B,s,D),this.b=EB(B,s,D-1/3)}return zD.toWorkingColorSpace(this,i),this}setStyle(D,e=be){function t(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+D+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(D)){let s,B=i[1],r=i[2];switch(B){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return t(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return t(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return t(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+D)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(D)){let s=i[1],B=s.length;if(B===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(B===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+D)}else if(D&&D.length>0)return this.setColorName(D,e);return this}setColorName(D,e=be){let t=ia[D.toLowerCase()];return t!==void 0?this.setHex(t,e):console.warn("THREE.Color: Unknown color "+D),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(D){return this.r=D.r,this.g=D.g,this.b=D.b,this}copySRGBToLinear(D){return this.r=Mt(D.r),this.g=Mt(D.g),this.b=Mt(D.b),this}copyLinearToSRGB(D){return this.r=zn(D.r),this.g=zn(D.g),this.b=zn(D.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(D=be){return zD.fromWorkingColorSpace(we.copy(this),D),Math.round(Ae(we.r*255,0,255))*65536+Math.round(Ae(we.g*255,0,255))*256+Math.round(Ae(we.b*255,0,255))}getHexString(D=be){return("000000"+this.getHex(D).toString(16)).slice(-6)}getHSL(D,e=zD.workingColorSpace){zD.fromWorkingColorSpace(we.copy(this),e);let t=we.r,i=we.g,s=we.b,B=Math.max(t,i,s),r=Math.min(t,i,s),o,f,C=(r+B)/2;if(r===B)o=0,f=0;else{let a=B-r;switch(f=C<=.5?a/(B+r):a/(2-B-r),B){case t:o=(i-s)/a+(i<s?6:0);break;case i:o=(s-t)/a+2;break;case s:o=(t-i)/a+4;break}o/=6}return D.h=o,D.s=f,D.l=C,D}getRGB(D,e=zD.workingColorSpace){return zD.fromWorkingColorSpace(we.copy(this),e),D.r=we.r,D.g=we.g,D.b=we.b,D}getStyle(D=be){zD.fromWorkingColorSpace(we.copy(this),D);let e=we.r,t=we.g,i=we.b;return D!==be?`color(${D} ${e.toFixed(3)} ${t.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(t*255)},${Math.round(i*255)})`}offsetHSL(D,e,t){return this.getHSL(Gt),this.setHSL(Gt.h+D,Gt.s+e,Gt.l+t)}add(D){return this.r+=D.r,this.g+=D.g,this.b+=D.b,this}addColors(D,e){return this.r=D.r+e.r,this.g=D.g+e.g,this.b=D.b+e.b,this}addScalar(D){return this.r+=D,this.g+=D,this.b+=D,this}sub(D){return this.r=Math.max(0,this.r-D.r),this.g=Math.max(0,this.g-D.g),this.b=Math.max(0,this.b-D.b),this}multiply(D){return this.r*=D.r,this.g*=D.g,this.b*=D.b,this}multiplyScalar(D){return this.r*=D,this.g*=D,this.b*=D,this}lerp(D,e){return this.r+=(D.r-this.r)*e,this.g+=(D.g-this.g)*e,this.b+=(D.b-this.b)*e,this}lerpColors(D,e,t){return this.r=D.r+(e.r-D.r)*t,this.g=D.g+(e.g-D.g)*t,this.b=D.b+(e.b-D.b)*t,this}lerpHSL(D,e){this.getHSL(Gt),D.getHSL(ss);let t=wi(Gt.h,ss.h,e),i=wi(Gt.s,ss.s,e),s=wi(Gt.l,ss.l,e);return this.setHSL(t,i,s),this}setFromVector3(D){return this.r=D.x,this.g=D.y,this.b=D.z,this}applyMatrix3(D){let e=this.r,t=this.g,i=this.b,s=D.elements;return this.r=s[0]*e+s[3]*t+s[6]*i,this.g=s[1]*e+s[4]*t+s[7]*i,this.b=s[2]*e+s[5]*t+s[8]*i,this}equals(D){return D.r===this.r&&D.g===this.g&&D.b===this.b}fromArray(D,e=0){return this.r=D[e],this.g=D[e+1],this.b=D[e+2],this}toArray(D=[],e=0){return D[e]=this.r,D[e+1]=this.g,D[e+2]=this.b,D}fromBufferAttribute(D,e){return this.r=D.getX(e),this.g=D.getY(e),this.b=D.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},we=new _D;_D.NAMES=ia;var b3=0,ze=class extends Lt{static get type(){return"Material"}get type(){return this.constructor.type}set type(D){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b3++}),this.uuid=Ct(),this.name="",this.blending=kn,this.side=Ye,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=QB,this.blendDst=Dr,this.blendEquation=An,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _D(0,0,0),this.blendAlpha=0,this.depthFunc=Gn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hn,this.stencilZFail=Hn,this.stencilZPass=Hn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(D){this._alphaTest>0!=D>0&&this.version++,this._alphaTest=D}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(D){if(D!==void 0)for(let e in D){let t=D[e];if(t===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(t):i&&i.isVector3&&t&&t.isVector3?i.copy(t):this[e]=t}}toJSON(D){let e=D===void 0||typeof D=="string";e&&(D={textures:{},images:{}});let t={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),this.color&&this.color.isColor&&(t.color=this.color.getHex()),this.roughness!==void 0&&(t.roughness=this.roughness),this.metalness!==void 0&&(t.metalness=this.metalness),this.sheen!==void 0&&(t.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(t.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(t.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(t.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(t.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(t.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(t.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(t.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(t.shininess=this.shininess),this.clearcoat!==void 0&&(t.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(t.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(t.clearcoatMap=this.clearcoatMap.toJSON(D).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(t.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(D).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(t.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(D).uuid,t.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(t.dispersion=this.dispersion),this.iridescence!==void 0&&(t.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(t.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(t.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(t.iridescenceMap=this.iridescenceMap.toJSON(D).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(t.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(D).uuid),this.anisotropy!==void 0&&(t.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(t.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(t.anisotropyMap=this.anisotropyMap.toJSON(D).uuid),this.map&&this.map.isTexture&&(t.map=this.map.toJSON(D).uuid),this.matcap&&this.matcap.isTexture&&(t.matcap=this.matcap.toJSON(D).uuid),this.alphaMap&&this.alphaMap.isTexture&&(t.alphaMap=this.alphaMap.toJSON(D).uuid),this.lightMap&&this.lightMap.isTexture&&(t.lightMap=this.lightMap.toJSON(D).uuid,t.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(t.aoMap=this.aoMap.toJSON(D).uuid,t.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(t.bumpMap=this.bumpMap.toJSON(D).uuid,t.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(t.normalMap=this.normalMap.toJSON(D).uuid,t.normalMapType=this.normalMapType,t.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(t.displacementMap=this.displacementMap.toJSON(D).uuid,t.displacementScale=this.displacementScale,t.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(t.roughnessMap=this.roughnessMap.toJSON(D).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(t.metalnessMap=this.metalnessMap.toJSON(D).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(t.emissiveMap=this.emissiveMap.toJSON(D).uuid),this.specularMap&&this.specularMap.isTexture&&(t.specularMap=this.specularMap.toJSON(D).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(t.specularIntensityMap=this.specularIntensityMap.toJSON(D).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(t.specularColorMap=this.specularColorMap.toJSON(D).uuid),this.envMap&&this.envMap.isTexture&&(t.envMap=this.envMap.toJSON(D).uuid,this.combine!==void 0&&(t.combine=this.combine)),this.envMapRotation!==void 0&&(t.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(t.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(t.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(t.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(t.gradientMap=this.gradientMap.toJSON(D).uuid),this.transmission!==void 0&&(t.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(t.transmissionMap=this.transmissionMap.toJSON(D).uuid),this.thickness!==void 0&&(t.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(t.thicknessMap=this.thicknessMap.toJSON(D).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(t.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(t.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(t.size=this.size),this.shadowSide!==null&&(t.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(t.sizeAttenuation=this.sizeAttenuation),this.blending!==kn&&(t.blending=this.blending),this.side!==Ye&&(t.side=this.side),this.vertexColors===!0&&(t.vertexColors=!0),this.opacity<1&&(t.opacity=this.opacity),this.transparent===!0&&(t.transparent=!0),this.blendSrc!==QB&&(t.blendSrc=this.blendSrc),this.blendDst!==Dr&&(t.blendDst=this.blendDst),this.blendEquation!==An&&(t.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(t.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(t.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(t.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(t.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(t.blendAlpha=this.blendAlpha),this.depthFunc!==Gn&&(t.depthFunc=this.depthFunc),this.depthTest===!1&&(t.depthTest=this.depthTest),this.depthWrite===!1&&(t.depthWrite=this.depthWrite),this.colorWrite===!1&&(t.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(t.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(t.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(t.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(t.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hn&&(t.stencilFail=this.stencilFail),this.stencilZFail!==Hn&&(t.stencilZFail=this.stencilZFail),this.stencilZPass!==Hn&&(t.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(t.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(t.rotation=this.rotation),this.polygonOffset===!0&&(t.polygonOffset=!0),this.polygonOffsetFactor!==0&&(t.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(t.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(t.linewidth=this.linewidth),this.dashSize!==void 0&&(t.dashSize=this.dashSize),this.gapSize!==void 0&&(t.gapSize=this.gapSize),this.scale!==void 0&&(t.scale=this.scale),this.dithering===!0&&(t.dithering=!0),this.alphaTest>0&&(t.alphaTest=this.alphaTest),this.alphaHash===!0&&(t.alphaHash=!0),this.alphaToCoverage===!0&&(t.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(t.premultipliedAlpha=!0),this.forceSinglePass===!0&&(t.forceSinglePass=!0),this.wireframe===!0&&(t.wireframe=!0),this.wireframeLinewidth>1&&(t.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(t.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(t.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(t.flatShading=!0),this.visible===!1&&(t.visible=!1),this.toneMapped===!1&&(t.toneMapped=!1),this.fog===!1&&(t.fog=!1),Object.keys(this.userData).length>0&&(t.userData=this.userData);function i(s){let B=[];for(let r in s){let o=s[r];delete o.metadata,B.push(o)}return B}if(e){let s=i(D.textures),B=i(D.images);s.length>0&&(t.textures=s),B.length>0&&(t.images=B)}return t}clone(){return new this.constructor().copy(this)}copy(D){this.name=D.name,this.blending=D.blending,this.side=D.side,this.vertexColors=D.vertexColors,this.opacity=D.opacity,this.transparent=D.transparent,this.blendSrc=D.blendSrc,this.blendDst=D.blendDst,this.blendEquation=D.blendEquation,this.blendSrcAlpha=D.blendSrcAlpha,this.blendDstAlpha=D.blendDstAlpha,this.blendEquationAlpha=D.blendEquationAlpha,this.blendColor.copy(D.blendColor),this.blendAlpha=D.blendAlpha,this.depthFunc=D.depthFunc,this.depthTest=D.depthTest,this.depthWrite=D.depthWrite,this.stencilWriteMask=D.stencilWriteMask,this.stencilFunc=D.stencilFunc,this.stencilRef=D.stencilRef,this.stencilFuncMask=D.stencilFuncMask,this.stencilFail=D.stencilFail,this.stencilZFail=D.stencilZFail,this.stencilZPass=D.stencilZPass,this.stencilWrite=D.stencilWrite;let e=D.clippingPlanes,t=null;if(e!==null){let i=e.length;t=new Array(i);for(let s=0;s!==i;++s)t[s]=e[s].clone()}return this.clippingPlanes=t,this.clipIntersection=D.clipIntersection,this.clipShadows=D.clipShadows,this.shadowSide=D.shadowSide,this.colorWrite=D.colorWrite,this.precision=D.precision,this.polygonOffset=D.polygonOffset,this.polygonOffsetFactor=D.polygonOffsetFactor,this.polygonOffsetUnits=D.polygonOffsetUnits,this.dithering=D.dithering,this.alphaTest=D.alphaTest,this.alphaHash=D.alphaHash,this.alphaToCoverage=D.alphaToCoverage,this.premultipliedAlpha=D.premultipliedAlpha,this.forceSinglePass=D.forceSinglePass,this.visible=D.visible,this.toneMapped=D.toneMapped,this.userData=JSON.parse(JSON.stringify(D.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(D){D===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Qe=class extends ze{static get type(){return"MeshBasicMaterial"}constructor(D){super(),this.isMeshBasicMaterial=!0,this.color=new _D(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=kC,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(D)}copy(D){return super.copy(D),this.color.copy(D.color),this.map=D.map,this.lightMap=D.lightMap,this.lightMapIntensity=D.lightMapIntensity,this.aoMap=D.aoMap,this.aoMapIntensity=D.aoMapIntensity,this.specularMap=D.specularMap,this.alphaMap=D.alphaMap,this.envMap=D.envMap,this.envMapRotation.copy(D.envMapRotation),this.combine=D.combine,this.reflectivity=D.reflectivity,this.refractionRatio=D.refractionRatio,this.wireframe=D.wireframe,this.wireframeLinewidth=D.wireframeLinewidth,this.wireframeLinecap=D.wireframeLinecap,this.wireframeLinejoin=D.wireframeLinejoin,this.fog=D.fog,this}};var le=new H,Bs=new wD,he=class{constructor(D,e,t=!1){if(Array.isArray(D))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=D,this.itemSize=e,this.count=D!==void 0?D.length/e:0,this.normalized=t,this.usage=Pr,this.updateRanges=[],this.gpuType=ft,this.version=0}onUploadCallback(){}set needsUpdate(D){D===!0&&this.version++}setUsage(D){return this.usage=D,this}addUpdateRange(D,e){this.updateRanges.push({start:D,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(D){return this.name=D.name,this.array=new D.array.constructor(D.array),this.itemSize=D.itemSize,this.count=D.count,this.normalized=D.normalized,this.usage=D.usage,this.gpuType=D.gpuType,this}copyAt(D,e,t){D*=this.itemSize,t*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[D+i]=e.array[t+i];return this}copyArray(D){return this.array.set(D),this}applyMatrix3(D){if(this.itemSize===2)for(let e=0,t=this.count;e<t;e++)Bs.fromBufferAttribute(this,e),Bs.applyMatrix3(D),this.setXY(e,Bs.x,Bs.y);else if(this.itemSize===3)for(let e=0,t=this.count;e<t;e++)le.fromBufferAttribute(this,e),le.applyMatrix3(D),this.setXYZ(e,le.x,le.y,le.z);return this}applyMatrix4(D){for(let e=0,t=this.count;e<t;e++)le.fromBufferAttribute(this,e),le.applyMatrix4(D),this.setXYZ(e,le.x,le.y,le.z);return this}applyNormalMatrix(D){for(let e=0,t=this.count;e<t;e++)le.fromBufferAttribute(this,e),le.applyNormalMatrix(D),this.setXYZ(e,le.x,le.y,le.z);return this}transformDirection(D){for(let e=0,t=this.count;e<t;e++)le.fromBufferAttribute(this,e),le.transformDirection(D),this.setXYZ(e,le.x,le.y,le.z);return this}set(D,e=0){return this.array.set(D,e),this}getComponent(D,e){let t=this.array[D*this.itemSize+e];return this.normalized&&(t=ot(t,this.array)),t}setComponent(D,e,t){return this.normalized&&(t=te(t,this.array)),this.array[D*this.itemSize+e]=t,this}getX(D){let e=this.array[D*this.itemSize];return this.normalized&&(e=ot(e,this.array)),e}setX(D,e){return this.normalized&&(e=te(e,this.array)),this.array[D*this.itemSize]=e,this}getY(D){let e=this.array[D*this.itemSize+1];return this.normalized&&(e=ot(e,this.array)),e}setY(D,e){return this.normalized&&(e=te(e,this.array)),this.array[D*this.itemSize+1]=e,this}getZ(D){let e=this.array[D*this.itemSize+2];return this.normalized&&(e=ot(e,this.array)),e}setZ(D,e){return this.normalized&&(e=te(e,this.array)),this.array[D*this.itemSize+2]=e,this}getW(D){let e=this.array[D*this.itemSize+3];return this.normalized&&(e=ot(e,this.array)),e}setW(D,e){return this.normalized&&(e=te(e,this.array)),this.array[D*this.itemSize+3]=e,this}setXY(D,e,t){return D*=this.itemSize,this.normalized&&(e=te(e,this.array),t=te(t,this.array)),this.array[D+0]=e,this.array[D+1]=t,this}setXYZ(D,e,t,i){return D*=this.itemSize,this.normalized&&(e=te(e,this.array),t=te(t,this.array),i=te(i,this.array)),this.array[D+0]=e,this.array[D+1]=t,this.array[D+2]=i,this}setXYZW(D,e,t,i,s){return D*=this.itemSize,this.normalized&&(e=te(e,this.array),t=te(t,this.array),i=te(i,this.array),s=te(s,this.array)),this.array[D+0]=e,this.array[D+1]=t,this.array[D+2]=i,this.array[D+3]=s,this}onUpload(D){return this.onUploadCallback=D,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let D={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(D.name=this.name),this.usage!==Pr&&(D.usage=this.usage),D}};var qs=class extends he{constructor(D,e,t){super(new Uint16Array(D),e,t)}};var Es=class extends he{constructor(D,e,t){super(new Uint32Array(D),e,t)}};var Re=class extends he{constructor(D,e,t){super(new Float32Array(D),e,t)}},R3=0,Ue=new VD,PB=new ae,Pn=new H,Xe=new Se,mi=new Se,ye=new H,Te=class n extends Lt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:R3++}),this.uuid=Ct(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(D){return Array.isArray(D)?this.index=new(na(D)?Es:qs)(D,1):this.index=D,this}setIndirect(D){return this.indirect=D,this}getIndirect(){return this.indirect}getAttribute(D){return this.attributes[D]}setAttribute(D,e){return this.attributes[D]=e,this}deleteAttribute(D){return delete this.attributes[D],this}hasAttribute(D){return this.attributes[D]!==void 0}addGroup(D,e,t=0){this.groups.push({start:D,count:e,materialIndex:t})}clearGroups(){this.groups=[]}setDrawRange(D,e){this.drawRange.start=D,this.drawRange.count=e}applyMatrix4(D){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(D),e.needsUpdate=!0);let t=this.attributes.normal;if(t!==void 0){let s=new ND().getNormalMatrix(D);t.applyNormalMatrix(s),t.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(D),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(D){return Ue.makeRotationFromQuaternion(D),this.applyMatrix4(Ue),this}rotateX(D){return Ue.makeRotationX(D),this.applyMatrix4(Ue),this}rotateY(D){return Ue.makeRotationY(D),this.applyMatrix4(Ue),this}rotateZ(D){return Ue.makeRotationZ(D),this.applyMatrix4(Ue),this}translate(D,e,t){return Ue.makeTranslation(D,e,t),this.applyMatrix4(Ue),this}scale(D,e,t){return Ue.makeScale(D,e,t),this.applyMatrix4(Ue),this}lookAt(D){return PB.lookAt(D),PB.updateMatrix(),this.applyMatrix4(PB.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pn).negate(),this.translate(Pn.x,Pn.y,Pn.z),this}setFromPoints(D){let e=this.getAttribute("position");if(e===void 0){let t=[];for(let i=0,s=D.length;i<s;i++){let B=D[i];t.push(B.x,B.y,B.z||0)}this.setAttribute("position",new Re(t,3))}else{for(let t=0,i=e.count;t<i;t++){let s=D[t];e.setXYZ(t,s.x,s.y,s.z||0)}D.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Se);let D=this.attributes.position,e=this.morphAttributes.position;if(D&&D.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(D!==void 0){if(this.boundingBox.setFromBufferAttribute(D),e)for(let t=0,i=e.length;t<i;t++){let s=e[t];Xe.setFromBufferAttribute(s),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,Xe.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,Xe.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(Xe.min),this.boundingBox.expandByPoint(Xe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Je);let D=this.attributes.position,e=this.morphAttributes.position;if(D&&D.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(D){let t=this.boundingSphere.center;if(Xe.setFromBufferAttribute(D),e)for(let s=0,B=e.length;s<B;s++){let r=e[s];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(Xe.min,mi.min),Xe.expandByPoint(ye),ye.addVectors(Xe.max,mi.max),Xe.expandByPoint(ye)):(Xe.expandByPoint(mi.min),Xe.expandByPoint(mi.max))}Xe.getCenter(t);let i=0;for(let s=0,B=D.count;s<B;s++)ye.fromBufferAttribute(D,s),i=Math.max(i,t.distanceToSquared(ye));if(e)for(let s=0,B=e.length;s<B;s++){let r=e[s],o=this.morphTargetsRelative;for(let f=0,C=r.count;f<C;f++)ye.fromBufferAttribute(r,f),o&&(Pn.fromBufferAttribute(D,f),ye.add(Pn)),i=Math.max(i,t.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let D=this.index,e=this.attributes;if(D===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let t=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new he(new Float32Array(4*t.count),4));let B=this.getAttribute("tangent"),r=[],o=[];for(let P=0;P<t.count;P++)r[P]=new H,o[P]=new H;let f=new H,C=new H,a=new H,c=new wD,l=new wD,u=new wD,d=new H,A=new H;function h(P,R,m){f.fromBufferAttribute(t,P),C.fromBufferAttribute(t,R),a.fromBufferAttribute(t,m),c.fromBufferAttribute(s,P),l.fromBufferAttribute(s,R),u.fromBufferAttribute(s,m),C.sub(f),a.sub(f),l.sub(c),u.sub(c);let M=1/(l.x*u.y-u.x*l.y);isFinite(M)&&(d.copy(C).multiplyScalar(u.y).addScaledVector(a,-l.y).multiplyScalar(M),A.copy(a).multiplyScalar(l.x).addScaledVector(C,-u.x).multiplyScalar(M),r[P].add(d),r[R].add(d),r[m].add(d),o[P].add(A),o[R].add(A),o[m].add(A))}let g=this.groups;g.length===0&&(g=[{start:0,count:D.count}]);for(let P=0,R=g.length;P<R;++P){let m=g[P],M=m.start,X=m.count;for(let I=M,z=M+X;I<z;I+=3)h(D.getX(I+0),D.getX(I+1),D.getX(I+2))}let x=new H,y=new H,E=new H,w=new H;function v(P){E.fromBufferAttribute(i,P),w.copy(E);let R=r[P];x.copy(R),x.sub(E.multiplyScalar(E.dot(R))).normalize(),y.crossVectors(w,R);let M=y.dot(o[P])<0?-1:1;B.setXYZW(P,x.x,x.y,x.z,M)}for(let P=0,R=g.length;P<R;++P){let m=g[P],M=m.start,X=m.count;for(let I=M,z=M+X;I<z;I+=3)v(D.getX(I+0)),v(D.getX(I+1)),v(D.getX(I+2))}}computeVertexNormals(){let D=this.index,e=this.getAttribute("position");if(e!==void 0){let t=this.getAttribute("normal");if(t===void 0)t=new he(new Float32Array(e.count*3),3),this.setAttribute("normal",t);else for(let c=0,l=t.count;c<l;c++)t.setXYZ(c,0,0,0);let i=new H,s=new H,B=new H,r=new H,o=new H,f=new H,C=new H,a=new H;if(D)for(let c=0,l=D.count;c<l;c+=3){let u=D.getX(c+0),d=D.getX(c+1),A=D.getX(c+2);i.fromBufferAttribute(e,u),s.fromBufferAttribute(e,d),B.fromBufferAttribute(e,A),C.subVectors(B,s),a.subVectors(i,s),C.cross(a),r.fromBufferAttribute(t,u),o.fromBufferAttribute(t,d),f.fromBufferAttribute(t,A),r.add(C),o.add(C),f.add(C),t.setXYZ(u,r.x,r.y,r.z),t.setXYZ(d,o.x,o.y,o.z),t.setXYZ(A,f.x,f.y,f.z)}else for(let c=0,l=e.count;c<l;c+=3)i.fromBufferAttribute(e,c+0),s.fromBufferAttribute(e,c+1),B.fromBufferAttribute(e,c+2),C.subVectors(B,s),a.subVectors(i,s),C.cross(a),t.setXYZ(c+0,C.x,C.y,C.z),t.setXYZ(c+1,C.x,C.y,C.z),t.setXYZ(c+2,C.x,C.y,C.z);this.normalizeNormals(),t.needsUpdate=!0}}normalizeNormals(){let D=this.attributes.normal;for(let e=0,t=D.count;e<t;e++)ye.fromBufferAttribute(D,e),ye.normalize(),D.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function D(r,o){let f=r.array,C=r.itemSize,a=r.normalized,c=new f.constructor(o.length*C),l=0,u=0;for(let d=0,A=o.length;d<A;d++){r.isInterleavedBufferAttribute?l=o[d]*r.data.stride+r.offset:l=o[d]*C;for(let h=0;h<C;h++)c[u++]=f[l++]}return new he(c,C,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,t=this.index.array,i=this.attributes;for(let r in i){let o=i[r],f=D(o,t);e.setAttribute(r,f)}let s=this.morphAttributes;for(let r in s){let o=[],f=s[r];for(let C=0,a=f.length;C<a;C++){let c=f[C],l=D(c,t);o.push(l)}e.morphAttributes[r]=o}e.morphTargetsRelative=this.morphTargetsRelative;let B=this.groups;for(let r=0,o=B.length;r<o;r++){let f=B[r];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){let D={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(D.uuid=this.uuid,D.type=this.type,this.name!==""&&(D.name=this.name),Object.keys(this.userData).length>0&&(D.userData=this.userData),this.parameters!==void 0){let o=this.parameters;for(let f in o)o[f]!==void 0&&(D[f]=o[f]);return D}D.data={attributes:{}};let e=this.index;e!==null&&(D.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let t=this.attributes;for(let o in t){let f=t[o];D.data.attributes[o]=f.toJSON(D.data)}let i={},s=!1;for(let o in this.morphAttributes){let f=this.morphAttributes[o],C=[];for(let a=0,c=f.length;a<c;a++){let l=f[a];C.push(l.toJSON(D.data))}C.length>0&&(i[o]=C,s=!0)}s&&(D.data.morphAttributes=i,D.data.morphTargetsRelative=this.morphTargetsRelative);let B=this.groups;B.length>0&&(D.data.groups=JSON.parse(JSON.stringify(B)));let r=this.boundingSphere;return r!==null&&(D.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),D}clone(){return new this.constructor().copy(this)}copy(D){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=D.name;let t=D.index;t!==null&&this.setIndex(t.clone(e));let i=D.attributes;for(let f in i){let C=i[f];this.setAttribute(f,C.clone(e))}let s=D.morphAttributes;for(let f in s){let C=[],a=s[f];for(let c=0,l=a.length;c<l;c++)C.push(a[c].clone(e));this.morphAttributes[f]=C}this.morphTargetsRelative=D.morphTargetsRelative;let B=D.groups;for(let f=0,C=B.length;f<C;f++){let a=B[f];this.addGroup(a.start,a.count,a.materialIndex)}let r=D.boundingBox;r!==null&&(this.boundingBox=r.clone());let o=D.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=D.drawRange.start,this.drawRange.count=D.drawRange.count,this.userData=D.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gf=new VD,Cn=new qt,rs=new Je,Uf=new H,os=new H,fs=new H,Cs=new H,FB=new H,as=new H,Zf=new H,cs=new H,KD=class extends ae{constructor(D=new Te,e=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=D,this.material=e,this.updateMorphTargets()}copy(D,e){return super.copy(D,e),D.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=D.morphTargetInfluences.slice()),D.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},D.morphTargetDictionary)),this.material=Array.isArray(D.material)?D.material.slice():D.material,this.geometry=D.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,B=i.length;s<B;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(D,e){let t=this.geometry,i=t.attributes.position,s=t.morphAttributes.position,B=t.morphTargetsRelative;e.fromBufferAttribute(i,D);let r=this.morphTargetInfluences;if(s&&r){as.set(0,0,0);for(let o=0,f=s.length;o<f;o++){let C=r[o],a=s[o];C!==0&&(FB.fromBufferAttribute(a,D),B?as.addScaledVector(FB,C):as.addScaledVector(FB.sub(e),C))}e.add(as)}return e}raycast(D,e){let t=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere),rs.applyMatrix4(s),Cn.copy(D.ray).recast(D.near),!(rs.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(rs,Uf)===null||Cn.origin.distanceToSquared(Uf)>(D.far-D.near)**2))&&(Gf.copy(s).invert(),Cn.copy(D.ray).applyMatrix4(Gf),!(t.boundingBox!==null&&Cn.intersectsBox(t.boundingBox)===!1)&&this._computeIntersections(D,e,Cn)))}_computeIntersections(D,e,t){let i,s=this.geometry,B=this.material,r=s.index,o=s.attributes.position,f=s.attributes.uv,C=s.attributes.uv1,a=s.attributes.normal,c=s.groups,l=s.drawRange;if(r!==null)if(Array.isArray(B))for(let u=0,d=c.length;u<d;u++){let A=c[u],h=B[A.materialIndex],g=Math.max(A.start,l.start),x=Math.min(r.count,Math.min(A.start+A.count,l.start+l.count));for(let y=g,E=x;y<E;y+=3){let w=r.getX(y),v=r.getX(y+1),P=r.getX(y+2);i=ls(this,h,D,t,f,C,a,w,v,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=A.materialIndex,e.push(i))}}else{let u=Math.max(0,l.start),d=Math.min(r.count,l.start+l.count);for(let A=u,h=d;A<h;A+=3){let g=r.getX(A),x=r.getX(A+1),y=r.getX(A+2);i=ls(this,B,D,t,f,C,a,g,x,y),i&&(i.faceIndex=Math.floor(A/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(B))for(let u=0,d=c.length;u<d;u++){let A=c[u],h=B[A.materialIndex],g=Math.max(A.start,l.start),x=Math.min(o.count,Math.min(A.start+A.count,l.start+l.count));for(let y=g,E=x;y<E;y+=3){let w=y,v=y+1,P=y+2;i=ls(this,h,D,t,f,C,a,w,v,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=A.materialIndex,e.push(i))}}else{let u=Math.max(0,l.start),d=Math.min(o.count,l.start+l.count);for(let A=u,h=d;A<h;A+=3){let g=A,x=A+1,y=A+2;i=ls(this,B,D,t,f,C,a,g,x,y),i&&(i.faceIndex=Math.floor(A/3),e.push(i))}}}};function g3(n,D,e,t,i,s,B,r){let o;if(D.side===ve?o=t.intersectTriangle(B,s,i,!0,r):o=t.intersectTriangle(i,s,B,D.side===Ye,r),o===null)return null;cs.copy(r),cs.applyMatrix4(n.matrixWorld);let f=e.ray.origin.distanceTo(cs);return f<e.near||f>e.far?null:{distance:f,point:cs.clone(),object:n}}function ls(n,D,e,t,i,s,B,r,o,f){n.getVertexPosition(r,os),n.getVertexPosition(o,fs),n.getVertexPosition(f,Cs);let C=g3(n,D,e,t,os,fs,Cs,Zf);if(C){let a=new H;un.getBarycoord(Zf,os,fs,Cs,a),i&&(C.uv=un.getInterpolatedAttribute(i,r,o,f,a,new wD)),s&&(C.uv1=un.getInterpolatedAttribute(s,r,o,f,a,new wD)),B&&(C.normal=un.getInterpolatedAttribute(B,r,o,f,a,new H),C.normal.dot(t.direction)>0&&C.normal.multiplyScalar(-1));let c={a:r,b:o,c:f,normal:new H,materialIndex:0};un.getNormal(os,fs,Cs,c.normal),C.face=c,C.barycoord=a}return C}var yn=class n extends Te{constructor(D=1,e=1,t=1,i=1,s=1,B=1){super(),this.type="BoxGeometry",this.parameters={width:D,height:e,depth:t,widthSegments:i,heightSegments:s,depthSegments:B};let r=this;i=Math.floor(i),s=Math.floor(s),B=Math.floor(B);let o=[],f=[],C=[],a=[],c=0,l=0;u("z","y","x",-1,-1,t,e,D,B,s,0),u("z","y","x",1,-1,t,e,-D,B,s,1),u("x","z","y",1,1,D,t,e,i,B,2),u("x","z","y",1,-1,D,t,-e,i,B,3),u("x","y","z",1,-1,D,e,t,i,s,4),u("x","y","z",-1,-1,D,e,-t,i,s,5),this.setIndex(o),this.setAttribute("position",new Re(f,3)),this.setAttribute("normal",new Re(C,3)),this.setAttribute("uv",new Re(a,2));function u(d,A,h,g,x,y,E,w,v,P,R){let m=y/v,M=E/P,X=y/2,I=E/2,z=w/2,$=v+1,W=P+1,DD=0,J=0,iD=new H;for(let BD=0;BD<W;BD++){let pD=BD*M-I;for(let SD=0;SD<$;SD++){let F=SD*m-X;iD[d]=F*g,iD[A]=pD*x,iD[h]=z,f.push(iD.x,iD.y,iD.z),iD[d]=0,iD[A]=0,iD[h]=w>0?1:-1,C.push(iD.x,iD.y,iD.z),a.push(SD/v),a.push(1-BD/P),DD+=1}}for(let BD=0;BD<P;BD++)for(let pD=0;pD<v;pD++){let SD=c+pD+$*BD,F=c+pD+$*(BD+1),_=c+(pD+1)+$*(BD+1),N=c+(pD+1)+$*BD;o.push(SD,F,N),o.push(F,_,N),J+=6}r.addGroup(l,J,R),l+=J,c+=DD}}copy(D){return super.copy(D),this.parameters=Object.assign({},D.parameters),this}static fromJSON(D){return new n(D.width,D.height,D.depth,D.widthSegments,D.heightSegments,D.depthSegments)}};function ei(n){let D={};for(let e in n){D[e]={};for(let t in n[e]){let i=n[e][t];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),D[e][t]=null):D[e][t]=i.clone():Array.isArray(i)?D[e][t]=i.slice():D[e][t]=i}}return D}function Ee(n){let D={};for(let e=0;e<n.length;e++){let t=ei(n[e]);for(let i in t)D[i]=t[i]}return D}function x3(n){let D=[];for(let e=0;e<n.length;e++)D.push(n[e].clone());return D}function sa(n){let D=n.getRenderTarget();return D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:zD.workingColorSpace}var T3={clone:ei,merge:Ee},H3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dt=class extends ze{static get type(){return"ShaderMaterial"}constructor(D){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H3,this.fragmentShader=_3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,D!==void 0&&this.setValues(D)}copy(D){return super.copy(D),this.fragmentShader=D.fragmentShader,this.vertexShader=D.vertexShader,this.uniforms=ei(D.uniforms),this.uniformsGroups=x3(D.uniformsGroups),this.defines=Object.assign({},D.defines),this.wireframe=D.wireframe,this.wireframeLinewidth=D.wireframeLinewidth,this.fog=D.fog,this.lights=D.lights,this.clipping=D.clipping,this.extensions=Object.assign({},D.extensions),this.glslVersion=D.glslVersion,this}toJSON(D){let e=super.toJSON(D);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let B=this.uniforms[i].value;B&&B.isTexture?e.uniforms[i]={type:"t",value:B.toJSON(D).uuid}:B&&B.isColor?e.uniforms[i]={type:"c",value:B.getHex()}:B&&B.isVector2?e.uniforms[i]={type:"v2",value:B.toArray()}:B&&B.isVector3?e.uniforms[i]={type:"v3",value:B.toArray()}:B&&B.isVector4?e.uniforms[i]={type:"v4",value:B.toArray()}:B&&B.isMatrix3?e.uniforms[i]={type:"m3",value:B.toArray()}:B&&B.isMatrix4?e.uniforms[i]={type:"m4",value:B.toArray()}:e.uniforms[i]={value:B}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let t={};for(let i in this.extensions)this.extensions[i]===!0&&(t[i]=!0);return Object.keys(t).length>0&&(e.extensions=t),e}},Ps=class extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new VD,this.projectionMatrix=new VD,this.projectionMatrixInverse=new VD,this.coordinateSystem=vt}copy(D,e){return super.copy(D,e),this.matrixWorldInverse.copy(D.matrixWorldInverse),this.projectionMatrix.copy(D.projectionMatrix),this.projectionMatrixInverse.copy(D.projectionMatrixInverse),this.coordinateSystem=D.coordinateSystem,this}getWorldDirection(D){return super.getWorldDirection(D).negate()}updateMatrixWorld(D){super.updateMatrixWorld(D),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(D,e){super.updateWorldMatrix(D,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ut=new H,Kf=new wD,Yf=new wD,ue=class extends Ps{constructor(D=50,e=1,t=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=D,this.zoom=1,this.near=t,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(D,e){return super.copy(D,e),this.fov=D.fov,this.zoom=D.zoom,this.near=D.near,this.far=D.far,this.focus=D.focus,this.aspect=D.aspect,this.view=D.view===null?null:Object.assign({},D.view),this.filmGauge=D.filmGauge,this.filmOffset=D.filmOffset,this}setFocalLength(D){let e=.5*this.getFilmHeight()/D;this.fov=Di*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let D=Math.tan(_i*.5*this.fov);return .5*this.getFilmHeight()/D}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(_i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(D,e,t){Ut.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ut.x,Ut.y).multiplyScalar(-D/Ut.z),Ut.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ut.x,Ut.y).multiplyScalar(-D/Ut.z)}getViewSize(D,e){return this.getViewBounds(D,Kf,Yf),e.subVectors(Yf,Kf)}setViewOffset(D,e,t,i,s,B){this.aspect=D/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=D,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=s,this.view.height=B,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let D=this.near,e=D*Math.tan(_i*.5*this.fov)/this.zoom,t=2*e,i=this.aspect*t,s=-.5*i,B=this.view;if(this.view!==null&&this.view.enabled){let o=B.fullWidth,f=B.fullHeight;s+=B.offsetX*i/o,e-=B.offsetY*t/f,i*=B.width/o,t*=B.height/f}let r=this.filmOffset;r!==0&&(s+=D*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-t,D,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(D){let e=super.toJSON(D);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Fn=-90,On=1,Ir=class extends ae{constructor(D,e,t){super(),this.type="CubeCamera",this.renderTarget=t,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ue(Fn,On,D,e);i.layers=this.layers,this.add(i);let s=new ue(Fn,On,D,e);s.layers=this.layers,this.add(s);let B=new ue(Fn,On,D,e);B.layers=this.layers,this.add(B);let r=new ue(Fn,On,D,e);r.layers=this.layers,this.add(r);let o=new ue(Fn,On,D,e);o.layers=this.layers,this.add(o);let f=new ue(Fn,On,D,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){let D=this.coordinateSystem,e=this.children.concat(),[t,i,s,B,r,o]=e;for(let f of e)this.remove(f);if(D===vt)t.up.set(0,1,0),t.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),B.up.set(0,0,1),B.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(D===Ss)t.up.set(0,-1,0),t.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),B.up.set(0,0,-1),B.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+D);for(let f of e)this.add(f),f.updateMatrixWorld()}update(D,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:t,activeMipmapLevel:i}=this;this.coordinateSystem!==D.coordinateSystem&&(this.coordinateSystem=D.coordinateSystem,this.updateCoordinateSystem());let[s,B,r,o,f,C]=this.children,a=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel(),u=D.xr.enabled;D.xr.enabled=!1;let d=t.texture.generateMipmaps;t.texture.generateMipmaps=!1,D.setRenderTarget(t,0,i),D.render(e,s),D.setRenderTarget(t,1,i),D.render(e,B),D.setRenderTarget(t,2,i),D.render(e,r),D.setRenderTarget(t,3,i),D.render(e,o),D.setRenderTarget(t,4,i),D.render(e,f),t.texture.generateMipmaps=d,D.setRenderTarget(t,5,i),D.render(e,C),D.setRenderTarget(a,c,l),D.xr.enabled=u,t.texture.needsPMREMUpdate=!0}},Fs=class extends xe{constructor(D,e,t,i,s,B,r,o,f,C){D=D!==void 0?D:[],e=e!==void 0?e:Un,super(D,e,t,i,s,B,r,o,f,C),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(D){this.image=D}},jr=class extends Vt{constructor(D=1,e={}){super(D,D,e),this.isWebGLCubeRenderTarget=!0;let t={width:D,height:D,depth:1},i=[t,t,t,t,t,t];this.texture=new Fs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Oe}fromEquirectangularTexture(D,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let t={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new yn(5,5,5),s=new dt({name:"CubemapFromEquirect",uniforms:ei(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:ve,blending:Yt});s.uniforms.tEquirect.value=e;let B=new KD(i,s),r=e.minFilter;return e.minFilter===ut&&(e.minFilter=Oe),new Ir(1,10,this).update(D,B),e.minFilter=r,B.geometry.dispose(),B.material.dispose(),this}clear(D,e,t,i){let s=D.getRenderTarget();for(let B=0;B<6;B++)D.setRenderTarget(this,B),D.clear(e,t,i);D.setRenderTarget(s)}},OB=new H,w3=new H,v3=new ND,rt=class{constructor(D=new H(1,0,0),e=0){this.isPlane=!0,this.normal=D,this.constant=e}set(D,e){return this.normal.copy(D),this.constant=e,this}setComponents(D,e,t,i){return this.normal.set(D,e,t),this.constant=i,this}setFromNormalAndCoplanarPoint(D,e){return this.normal.copy(D),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(D,e,t){let i=OB.subVectors(t,e).cross(w3.subVectors(D,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,D),this}copy(D){return this.normal.copy(D.normal),this.constant=D.constant,this}normalize(){let D=1/this.normal.length();return this.normal.multiplyScalar(D),this.constant*=D,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(D){return this.normal.dot(D)+this.constant}distanceToSphere(D){return this.distanceToPoint(D.center)-D.radius}projectPoint(D,e){return e.copy(D).addScaledVector(this.normal,-this.distanceToPoint(D))}intersectLine(D,e){let t=D.delta(OB),i=this.normal.dot(t);if(i===0)return this.distanceToPoint(D.start)===0?e.copy(D.start):null;let s=-(D.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(D.start).addScaledVector(t,s)}intersectsLine(D){let e=this.distanceToPoint(D.start),t=this.distanceToPoint(D.end);return e<0&&t>0||t<0&&e>0}intersectsBox(D){return D.intersectsPlane(this)}intersectsSphere(D){return D.intersectsPlane(this)}coplanarPoint(D){return D.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(D,e){let t=e||v3.getNormalMatrix(D),i=this.coplanarPoint(OB).applyMatrix4(D),s=this.normal.applyMatrix3(t).normalize();return this.constant=-i.dot(s),this}translate(D){return this.constant-=D.dot(this.normal),this}equals(D){return D.normal.equals(this.normal)&&D.constant===this.constant}clone(){return new this.constructor().copy(this)}},an=new Je,hs=new H,qi=class{constructor(D=new rt,e=new rt,t=new rt,i=new rt,s=new rt,B=new rt){this.planes=[D,e,t,i,s,B]}set(D,e,t,i,s,B){let r=this.planes;return r[0].copy(D),r[1].copy(e),r[2].copy(t),r[3].copy(i),r[4].copy(s),r[5].copy(B),this}copy(D){let e=this.planes;for(let t=0;t<6;t++)e[t].copy(D.planes[t]);return this}setFromProjectionMatrix(D,e=vt){let t=this.planes,i=D.elements,s=i[0],B=i[1],r=i[2],o=i[3],f=i[4],C=i[5],a=i[6],c=i[7],l=i[8],u=i[9],d=i[10],A=i[11],h=i[12],g=i[13],x=i[14],y=i[15];if(t[0].setComponents(o-s,c-f,A-l,y-h).normalize(),t[1].setComponents(o+s,c+f,A+l,y+h).normalize(),t[2].setComponents(o+B,c+C,A+u,y+g).normalize(),t[3].setComponents(o-B,c-C,A-u,y-g).normalize(),t[4].setComponents(o-r,c-a,A-d,y-x).normalize(),e===vt)t[5].setComponents(o+r,c+a,A+d,y+x).normalize();else if(e===Ss)t[5].setComponents(r,a,d,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(D){if(D.boundingSphere!==void 0)D.boundingSphere===null&&D.computeBoundingSphere(),an.copy(D.boundingSphere).applyMatrix4(D.matrixWorld);else{let e=D.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),an.copy(e.boundingSphere).applyMatrix4(D.matrixWorld)}return this.intersectsSphere(an)}intersectsSprite(D){return an.center.set(0,0,0),an.radius=.7071067811865476,an.applyMatrix4(D.matrixWorld),this.intersectsSphere(an)}intersectsSphere(D){let e=this.planes,t=D.center,i=-D.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(t)<i)return!1;return!0}intersectsBox(D){let e=this.planes;for(let t=0;t<6;t++){let i=e[t];if(hs.x=i.normal.x>0?D.max.x:D.min.x,hs.y=i.normal.y>0?D.max.y:D.min.y,hs.z=i.normal.z>0?D.max.z:D.min.z,i.distanceToPoint(hs)<0)return!1}return!0}containsPoint(D){let e=this.planes;for(let t=0;t<6;t++)if(e[t].distanceToPoint(D)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Ba(){let n=null,D=!1,e=null,t=null;function i(s,B){e(s,B),t=n.requestAnimationFrame(i)}return{start:function(){D!==!0&&e!==null&&(t=n.requestAnimationFrame(i),D=!0)},stop:function(){n.cancelAnimationFrame(t),D=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function M3(n){let D=new WeakMap;function e(r,o){let f=r.array,C=r.usage,a=f.byteLength,c=n.createBuffer();n.bindBuffer(o,c),n.bufferData(o,f,C),r.onUploadCallback();let l;if(f instanceof Float32Array)l=n.FLOAT;else if(f instanceof Uint16Array)r.isFloat16BufferAttribute?l=n.HALF_FLOAT:l=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)l=n.SHORT;else if(f instanceof Uint32Array)l=n.UNSIGNED_INT;else if(f instanceof Int32Array)l=n.INT;else if(f instanceof Int8Array)l=n.BYTE;else if(f instanceof Uint8Array)l=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)l=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:c,type:l,bytesPerElement:f.BYTES_PER_ELEMENT,version:r.version,size:a}}function t(r,o,f){let C=o.array,a=o.updateRanges;if(n.bindBuffer(f,r),a.length===0)n.bufferSubData(f,0,C);else{a.sort((l,u)=>l.start-u.start);let c=0;for(let l=1;l<a.length;l++){let u=a[c],d=a[l];d.start<=u.start+u.count+1?u.count=Math.max(u.count,d.start+d.count-u.start):(++c,a[c]=d)}a.length=c+1;for(let l=0,u=a.length;l<u;l++){let d=a[l];n.bufferSubData(f,d.start*C.BYTES_PER_ELEMENT,C,d.start,d.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),D.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);let o=D.get(r);o&&(n.deleteBuffer(o.buffer),D.delete(r))}function B(r,o){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){let C=D.get(r);(!C||C.version<r.version)&&D.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}let f=D.get(r);if(f===void 0)D.set(r,e(r,o));else if(f.version<r.version){if(f.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");t(f.buffer,r,o),f.version=r.version}}return{get:i,remove:s,update:B}}var Os=class n extends Te{constructor(D=1,e=1,t=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:D,height:e,widthSegments:t,heightSegments:i};let s=D/2,B=e/2,r=Math.floor(t),o=Math.floor(i),f=r+1,C=o+1,a=D/r,c=e/o,l=[],u=[],d=[],A=[];for(let h=0;h<C;h++){let g=h*c-B;for(let x=0;x<f;x++){let y=x*a-s;u.push(y,-g,0),d.push(0,0,1),A.push(x/r),A.push(1-h/o)}}for(let h=0;h<o;h++)for(let g=0;g<r;g++){let x=g+f*h,y=g+f*(h+1),E=g+1+f*(h+1),w=g+1+f*h;l.push(x,y,w),l.push(y,E,w)}this.setIndex(l),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(A,2))}copy(D){return super.copy(D),this.parameters=Object.assign({},D.parameters),this}static fromJSON(D){return new n(D.width,D.height,D.widthSegments,D.heightSegments)}},S3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,V3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,q3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,O3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,N3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,I3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,j3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,X3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k3=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,J3=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,z3=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W3=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,G3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,U3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Y3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Q3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,el=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,il=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bl=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rl="gl_FragColor = linearToOutputTexel( gl_FragColor );",ol=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,al=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ll=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Al=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ul=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pl=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ml=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xl=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tl=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hl=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_l=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wl=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vl=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ml=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sl=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ll=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vl=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ql=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,El=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pl=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fl=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ol=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nl=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Il=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jl=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xl=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kl=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jl=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zl=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wl=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Gl=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ul=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zl=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yl=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$l=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ql=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ih=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ch=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ah=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ch=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ah=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ph=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Th=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_h=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Mh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ph=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Fh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Oh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ih=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jh=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,zh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zh=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$h=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jD={alphahash_fragment:S3,alphahash_pars_fragment:L3,alphamap_fragment:V3,alphamap_pars_fragment:q3,alphatest_fragment:E3,alphatest_pars_fragment:P3,aomap_fragment:F3,aomap_pars_fragment:O3,batching_pars_vertex:N3,batching_vertex:I3,begin_vertex:j3,beginnormal_vertex:X3,bsdfs:k3,iridescence_fragment:J3,bumpmap_pars_fragment:z3,clipping_planes_fragment:W3,clipping_planes_pars_fragment:G3,clipping_planes_pars_vertex:U3,clipping_planes_vertex:Z3,color_fragment:K3,color_pars_fragment:Y3,color_pars_vertex:$3,color_vertex:Q3,common:Dl,cube_uv_reflection_fragment:el,defaultnormal_vertex:tl,displacementmap_pars_vertex:nl,displacementmap_vertex:il,emissivemap_fragment:sl,emissivemap_pars_fragment:Bl,colorspace_fragment:rl,colorspace_pars_fragment:ol,envmap_fragment:fl,envmap_common_pars_fragment:Cl,envmap_pars_fragment:al,envmap_pars_vertex:cl,envmap_physical_pars_fragment:gl,envmap_vertex:ll,fog_vertex:hl,fog_pars_vertex:Al,fog_fragment:ul,fog_pars_fragment:dl,gradientmap_pars_fragment:pl,lightmap_pars_fragment:ml,lights_lambert_fragment:yl,lights_lambert_pars_fragment:bl,lights_pars_begin:Rl,lights_toon_fragment:xl,lights_toon_pars_fragment:Tl,lights_phong_fragment:Hl,lights_phong_pars_fragment:_l,lights_physical_fragment:wl,lights_physical_pars_fragment:vl,lights_fragment_begin:Ml,lights_fragment_maps:Sl,lights_fragment_end:Ll,logdepthbuf_fragment:Vl,logdepthbuf_pars_fragment:ql,logdepthbuf_pars_vertex:El,logdepthbuf_vertex:Pl,map_fragment:Fl,map_pars_fragment:Ol,map_particle_fragment:Nl,map_particle_pars_fragment:Il,metalnessmap_fragment:jl,metalnessmap_pars_fragment:Xl,morphinstance_vertex:kl,morphcolor_vertex:Jl,morphnormal_vertex:zl,morphtarget_pars_vertex:Wl,morphtarget_vertex:Gl,normal_fragment_begin:Ul,normal_fragment_maps:Zl,normal_pars_fragment:Kl,normal_pars_vertex:Yl,normal_vertex:$l,normalmap_pars_fragment:Ql,clearcoat_normal_fragment_begin:Dh,clearcoat_normal_fragment_maps:eh,clearcoat_pars_fragment:th,iridescence_pars_fragment:nh,opaque_fragment:ih,packing:sh,premultiplied_alpha_fragment:Bh,project_vertex:rh,dithering_fragment:oh,dithering_pars_fragment:fh,roughnessmap_fragment:Ch,roughnessmap_pars_fragment:ah,shadowmap_pars_fragment:ch,shadowmap_pars_vertex:lh,shadowmap_vertex:hh,shadowmask_pars_fragment:Ah,skinbase_vertex:uh,skinning_pars_vertex:dh,skinning_vertex:ph,skinnormal_vertex:mh,specularmap_fragment:yh,specularmap_pars_fragment:bh,tonemapping_fragment:Rh,tonemapping_pars_fragment:gh,transmission_fragment:xh,transmission_pars_fragment:Th,uv_pars_fragment:Hh,uv_pars_vertex:_h,uv_vertex:wh,worldpos_vertex:vh,background_vert:Mh,background_frag:Sh,backgroundCube_vert:Lh,backgroundCube_frag:Vh,cube_vert:qh,cube_frag:Eh,depth_vert:Ph,depth_frag:Fh,distanceRGBA_vert:Oh,distanceRGBA_frag:Nh,equirect_vert:Ih,equirect_frag:jh,linedashed_vert:Xh,linedashed_frag:kh,meshbasic_vert:Jh,meshbasic_frag:zh,meshlambert_vert:Wh,meshlambert_frag:Gh,meshmatcap_vert:Uh,meshmatcap_frag:Zh,meshnormal_vert:Kh,meshnormal_frag:Yh,meshphong_vert:$h,meshphong_frag:Qh,meshphysical_vert:DA,meshphysical_frag:eA,meshtoon_vert:tA,meshtoon_frag:nA,points_vert:iA,points_frag:sA,shadow_vert:BA,shadow_frag:rA,sprite_vert:oA,sprite_frag:fA},sD={common:{diffuse:{value:new _D(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ND},alphaMap:{value:null},alphaMapTransform:{value:new ND},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ND}},envmap:{envMap:{value:null},envMapRotation:{value:new ND},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ND}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ND}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ND},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ND},normalScale:{value:new wD(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ND},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ND}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ND}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ND}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _D(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _D(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ND},alphaTest:{value:0},uvTransform:{value:new ND}},sprite:{diffuse:{value:new _D(16777215)},opacity:{value:1},center:{value:new wD(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ND},alphaMap:{value:null},alphaMapTransform:{value:new ND},alphaTest:{value:0}}},At={basic:{uniforms:Ee([sD.common,sD.specularmap,sD.envmap,sD.aomap,sD.lightmap,sD.fog]),vertexShader:jD.meshbasic_vert,fragmentShader:jD.meshbasic_frag},lambert:{uniforms:Ee([sD.common,sD.specularmap,sD.envmap,sD.aomap,sD.lightmap,sD.emissivemap,sD.bumpmap,sD.normalmap,sD.displacementmap,sD.fog,sD.lights,{emissive:{value:new _D(0)}}]),vertexShader:jD.meshlambert_vert,fragmentShader:jD.meshlambert_frag},phong:{uniforms:Ee([sD.common,sD.specularmap,sD.envmap,sD.aomap,sD.lightmap,sD.emissivemap,sD.bumpmap,sD.normalmap,sD.displacementmap,sD.fog,sD.lights,{emissive:{value:new _D(0)},specular:{value:new _D(1118481)},shininess:{value:30}}]),vertexShader:jD.meshphong_vert,fragmentShader:jD.meshphong_frag},standard:{uniforms:Ee([sD.common,sD.envmap,sD.aomap,sD.lightmap,sD.emissivemap,sD.bumpmap,sD.normalmap,sD.displacementmap,sD.roughnessmap,sD.metalnessmap,sD.fog,sD.lights,{emissive:{value:new _D(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jD.meshphysical_vert,fragmentShader:jD.meshphysical_frag},toon:{uniforms:Ee([sD.common,sD.aomap,sD.lightmap,sD.emissivemap,sD.bumpmap,sD.normalmap,sD.displacementmap,sD.gradientmap,sD.fog,sD.lights,{emissive:{value:new _D(0)}}]),vertexShader:jD.meshtoon_vert,fragmentShader:jD.meshtoon_frag},matcap:{uniforms:Ee([sD.common,sD.bumpmap,sD.normalmap,sD.displacementmap,sD.fog,{matcap:{value:null}}]),vertexShader:jD.meshmatcap_vert,fragmentShader:jD.meshmatcap_frag},points:{uniforms:Ee([sD.points,sD.fog]),vertexShader:jD.points_vert,fragmentShader:jD.points_frag},dashed:{uniforms:Ee([sD.common,sD.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jD.linedashed_vert,fragmentShader:jD.linedashed_frag},depth:{uniforms:Ee([sD.common,sD.displacementmap]),vertexShader:jD.depth_vert,fragmentShader:jD.depth_frag},normal:{uniforms:Ee([sD.common,sD.bumpmap,sD.normalmap,sD.displacementmap,{opacity:{value:1}}]),vertexShader:jD.meshnormal_vert,fragmentShader:jD.meshnormal_frag},sprite:{uniforms:Ee([sD.sprite,sD.fog]),vertexShader:jD.sprite_vert,fragmentShader:jD.sprite_frag},background:{uniforms:{uvTransform:{value:new ND},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jD.background_vert,fragmentShader:jD.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ND}},vertexShader:jD.backgroundCube_vert,fragmentShader:jD.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jD.cube_vert,fragmentShader:jD.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jD.equirect_vert,fragmentShader:jD.equirect_frag},distanceRGBA:{uniforms:Ee([sD.common,sD.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jD.distanceRGBA_vert,fragmentShader:jD.distanceRGBA_frag},shadow:{uniforms:Ee([sD.lights,sD.fog,{color:{value:new _D(0)},opacity:{value:1}}]),vertexShader:jD.shadow_vert,fragmentShader:jD.shadow_frag}};At.physical={uniforms:Ee([At.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ND},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ND},clearcoatNormalScale:{value:new wD(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ND},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ND},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ND},sheen:{value:0},sheenColor:{value:new _D(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ND},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ND},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ND},transmissionSamplerSize:{value:new wD},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ND},attenuationDistance:{value:0},attenuationColor:{value:new _D(0)},specularColor:{value:new _D(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ND},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ND},anisotropyVector:{value:new wD},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ND}}]),vertexShader:jD.meshphysical_vert,fragmentShader:jD.meshphysical_frag};var As={r:0,b:0,g:0},cn=new $e,CA=new VD;function aA(n,D,e,t,i,s,B){let r=new _D(0),o=s===!0?0:1,f,C,a=null,c=0,l=null;function u(g){let x=g.isScene===!0?g.background:null;return x&&x.isTexture&&(x=(g.backgroundBlurriness>0?e:D).get(x)),x}function d(g){let x=!1,y=u(g);y===null?h(r,o):y&&y.isColor&&(h(y,1),x=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,B):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,B),(n.autoClear||x)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function A(g,x){let y=u(x);y&&(y.isCubeTexture||y.mapping===sB)?(C===void 0&&(C=new KD(new yn(1,1,1),new dt({name:"BackgroundCubeMaterial",uniforms:ei(At.backgroundCube.uniforms),vertexShader:At.backgroundCube.vertexShader,fragmentShader:At.backgroundCube.fragmentShader,side:ve,depthTest:!1,depthWrite:!1,fog:!1})),C.geometry.deleteAttribute("normal"),C.geometry.deleteAttribute("uv"),C.onBeforeRender=function(E,w,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(C.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(C)),cn.copy(x.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),C.material.uniforms.envMap.value=y,C.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,C.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,C.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,C.material.uniforms.backgroundRotation.value.setFromMatrix4(CA.makeRotationFromEuler(cn)),C.material.toneMapped=zD.getTransfer(y.colorSpace)!==ne,(a!==y||c!==y.version||l!==n.toneMapping)&&(C.material.needsUpdate=!0,a=y,c=y.version,l=n.toneMapping),C.layers.enableAll(),g.unshift(C,C.geometry,C.material,0,0,null)):y&&y.isTexture&&(f===void 0&&(f=new KD(new Os(2,2),new dt({name:"BackgroundMaterial",uniforms:ei(At.background.uniforms),vertexShader:At.background.vertexShader,fragmentShader:At.background.fragmentShader,side:Ye,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(f)),f.material.uniforms.t2D.value=y,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.toneMapped=zD.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),f.material.uniforms.uvTransform.value.copy(y.matrix),(a!==y||c!==y.version||l!==n.toneMapping)&&(f.material.needsUpdate=!0,a=y,c=y.version,l=n.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null))}function h(g,x){g.getRGB(As,sa(n)),t.buffers.color.setClear(As.r,As.g,As.b,x,B)}return{getClearColor:function(){return r},setClearColor:function(g,x=1){r.set(g),o=x,h(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,h(r,o)},render:d,addToRenderList:A}}function cA(n,D){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),t={},i=c(null),s=i,B=!1;function r(m,M,X,I,z){let $=!1,W=a(I,X,M);s!==W&&(s=W,f(s.object)),$=l(m,I,X,z),$&&u(m,I,X,z),z!==null&&D.update(z,n.ELEMENT_ARRAY_BUFFER),($||B)&&(B=!1,y(m,M,X,I),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,D.get(z).buffer))}function o(){return n.createVertexArray()}function f(m){return n.bindVertexArray(m)}function C(m){return n.deleteVertexArray(m)}function a(m,M,X){let I=X.wireframe===!0,z=t[m.id];z===void 0&&(z={},t[m.id]=z);let $=z[M.id];$===void 0&&($={},z[M.id]=$);let W=$[I];return W===void 0&&(W=c(o()),$[I]=W),W}function c(m){let M=[],X=[],I=[];for(let z=0;z<e;z++)M[z]=0,X[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:X,attributeDivisors:I,object:m,attributes:{},index:null}}function l(m,M,X,I){let z=s.attributes,$=M.attributes,W=0,DD=X.getAttributes();for(let J in DD)if(DD[J].location>=0){let BD=z[J],pD=$[J];if(pD===void 0&&(J==="instanceMatrix"&&m.instanceMatrix&&(pD=m.instanceMatrix),J==="instanceColor"&&m.instanceColor&&(pD=m.instanceColor)),BD===void 0||BD.attribute!==pD||pD&&BD.data!==pD.data)return!0;W++}return s.attributesNum!==W||s.index!==I}function u(m,M,X,I){let z={},$=M.attributes,W=0,DD=X.getAttributes();for(let J in DD)if(DD[J].location>=0){let BD=$[J];BD===void 0&&(J==="instanceMatrix"&&m.instanceMatrix&&(BD=m.instanceMatrix),J==="instanceColor"&&m.instanceColor&&(BD=m.instanceColor));let pD={};pD.attribute=BD,BD&&BD.data&&(pD.data=BD.data),z[J]=pD,W++}s.attributes=z,s.attributesNum=W,s.index=I}function d(){let m=s.newAttributes;for(let M=0,X=m.length;M<X;M++)m[M]=0}function A(m){h(m,0)}function h(m,M){let X=s.newAttributes,I=s.enabledAttributes,z=s.attributeDivisors;X[m]=1,I[m]===0&&(n.enableVertexAttribArray(m),I[m]=1),z[m]!==M&&(n.vertexAttribDivisor(m,M),z[m]=M)}function g(){let m=s.newAttributes,M=s.enabledAttributes;for(let X=0,I=M.length;X<I;X++)M[X]!==m[X]&&(n.disableVertexAttribArray(X),M[X]=0)}function x(m,M,X,I,z,$,W){W===!0?n.vertexAttribIPointer(m,M,X,z,$):n.vertexAttribPointer(m,M,X,I,z,$)}function y(m,M,X,I){d();let z=I.attributes,$=X.getAttributes(),W=M.defaultAttributeValues;for(let DD in $){let J=$[DD];if(J.location>=0){let iD=z[DD];if(iD===void 0&&(DD==="instanceMatrix"&&m.instanceMatrix&&(iD=m.instanceMatrix),DD==="instanceColor"&&m.instanceColor&&(iD=m.instanceColor)),iD!==void 0){let BD=iD.normalized,pD=iD.itemSize,SD=D.get(iD);if(SD===void 0)continue;let F=SD.buffer,_=SD.type,N=SD.bytesPerElement,Z=_===n.INT||_===n.UNSIGNED_INT||iD.gpuType===uo;if(iD.isInterleavedBufferAttribute){let Q=iD.data,rD=Q.stride,lD=iD.offset;if(Q.isInstancedInterleavedBuffer){for(let TD=0;TD<J.locationSize;TD++)h(J.location+TD,Q.meshPerAttribute);m.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let TD=0;TD<J.locationSize;TD++)A(J.location+TD);n.bindBuffer(n.ARRAY_BUFFER,F);for(let TD=0;TD<J.locationSize;TD++)x(J.location+TD,pD/J.locationSize,_,BD,rD*N,(lD+pD/J.locationSize*TD)*N,Z)}else{if(iD.isInstancedBufferAttribute){for(let Q=0;Q<J.locationSize;Q++)h(J.location+Q,iD.meshPerAttribute);m.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=iD.meshPerAttribute*iD.count)}else for(let Q=0;Q<J.locationSize;Q++)A(J.location+Q);n.bindBuffer(n.ARRAY_BUFFER,F);for(let Q=0;Q<J.locationSize;Q++)x(J.location+Q,pD/J.locationSize,_,BD,pD*N,pD/J.locationSize*Q*N,Z)}}else if(W!==void 0){let BD=W[DD];if(BD!==void 0)switch(BD.length){case 2:n.vertexAttrib2fv(J.location,BD);break;case 3:n.vertexAttrib3fv(J.location,BD);break;case 4:n.vertexAttrib4fv(J.location,BD);break;default:n.vertexAttrib1fv(J.location,BD)}}}}g()}function E(){P();for(let m in t){let M=t[m];for(let X in M){let I=M[X];for(let z in I)C(I[z].object),delete I[z];delete M[X]}delete t[m]}}function w(m){if(t[m.id]===void 0)return;let M=t[m.id];for(let X in M){let I=M[X];for(let z in I)C(I[z].object),delete I[z];delete M[X]}delete t[m.id]}function v(m){for(let M in t){let X=t[M];if(X[m.id]===void 0)continue;let I=X[m.id];for(let z in I)C(I[z].object),delete I[z];delete X[m.id]}}function P(){R(),B=!0,s!==i&&(s=i,f(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:P,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:v,initAttributes:d,enableAttribute:A,disableUnusedAttributes:g}}function lA(n,D,e){let t;function i(f){t=f}function s(f,C){n.drawArrays(t,f,C),e.update(C,t,1)}function B(f,C,a){a!==0&&(n.drawArraysInstanced(t,f,C,a),e.update(C,t,a))}function r(f,C,a){if(a===0)return;D.get("WEBGL_multi_draw").multiDrawArraysWEBGL(t,f,0,C,0,a);let l=0;for(let u=0;u<a;u++)l+=C[u];e.update(l,t,1)}function o(f,C,a,c){if(a===0)return;let l=D.get("WEBGL_multi_draw");if(l===null)for(let u=0;u<f.length;u++)B(f[u],C[u],c[u]);else{l.multiDrawArraysInstancedWEBGL(t,f,0,C,0,c,0,a);let u=0;for(let d=0;d<a;d++)u+=C[d]*c[d];e.update(u,t,1)}}this.setMode=i,this.render=s,this.renderInstances=B,this.renderMultiDraw=r,this.renderMultiDrawInstances=o}function hA(n,D,e,t){let i;function s(){if(i!==void 0)return i;if(D.has("EXT_texture_filter_anisotropic")===!0){let v=D.get("EXT_texture_filter_anisotropic");i=n.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function B(v){return!(v!==Ze&&t.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(v){let P=v===ki&&(D.has("EXT_color_buffer_half_float")||D.has("EXT_color_buffer_float"));return!(v!==St&&t.convert(v)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&v!==ft&&!P)}function o(v){if(v==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp",C=o(f);C!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",C,"instead."),f=C);let a=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&D.has("EXT_clip_control"),l=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),u=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),A=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=u>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:o,textureFormatReadable:B,textureTypeReadable:r,precision:f,logarithmicDepthBuffer:a,reverseDepthBuffer:c,maxTextures:l,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:A,maxAttributes:h,maxVertexUniforms:g,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,maxSamples:w}}function AA(n){let D=this,e=null,t=0,i=!1,s=!1,B=new rt,r=new ND,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,c){let l=a.length!==0||c||t!==0||i;return i=c,t=a.length,l},this.beginShadows=function(){s=!0,C(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(a,c){e=C(a,c,0)},this.setState=function(a,c,l){let u=a.clippingPlanes,d=a.clipIntersection,A=a.clipShadows,h=n.get(a);if(!i||u===null||u.length===0||s&&!A)s?C(null):f();else{let g=s?0:t,x=g*4,y=h.clippingState||null;o.value=y,y=C(u,c,x,l);for(let E=0;E!==x;++E)y[E]=e[E];h.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=g}};function f(){o.value!==e&&(o.value=e,o.needsUpdate=t>0),D.numPlanes=t,D.numIntersection=0}function C(a,c,l,u){let d=a!==null?a.length:0,A=null;if(d!==0){if(A=o.value,u!==!0||A===null){let h=l+d*4,g=c.matrixWorldInverse;r.getNormalMatrix(g),(A===null||A.length<h)&&(A=new Float32Array(h));for(let x=0,y=l;x!==d;++x,y+=4)B.copy(a[x]).applyMatrix4(g,r),B.normal.toArray(A,y),A[y+3]=B.constant}o.value=A,o.needsUpdate=!0}return D.numPlanes=d,D.numIntersection=0,A}}function uA(n){let D=new WeakMap;function e(B,r){return r===or?B.mapping=Un:r===fr&&(B.mapping=Zn),B}function t(B){if(B&&B.isTexture){let r=B.mapping;if(r===or||r===fr)if(D.has(B)){let o=D.get(B).texture;return e(o,B.mapping)}else{let o=B.image;if(o&&o.height>0){let f=new jr(o.height);return f.fromEquirectangularTexture(n,B),D.set(B,f),B.addEventListener("dispose",i),e(f.texture,B.mapping)}else return null}}return B}function i(B){let r=B.target;r.removeEventListener("dispose",i);let o=D.get(r);o!==void 0&&(D.delete(r),o.dispose())}function s(){D=new WeakMap}return{get:t,dispose:s}}var ti=class extends Ps{constructor(D=-1,e=1,t=1,i=-1,s=.1,B=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=D,this.right=e,this.top=t,this.bottom=i,this.near=s,this.far=B,this.updateProjectionMatrix()}copy(D,e){return super.copy(D,e),this.left=D.left,this.right=D.right,this.top=D.top,this.bottom=D.bottom,this.near=D.near,this.far=D.far,this.zoom=D.zoom,this.view=D.view===null?null:Object.assign({},D.view),this}setViewOffset(D,e,t,i,s,B){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=D,this.view.fullHeight=e,this.view.offsetX=t,this.view.offsetY=i,this.view.width=s,this.view.height=B,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let D=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),t=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=t-D,B=t+D,r=i+e,o=i-e;if(this.view!==null&&this.view.enabled){let f=(this.right-this.left)/this.view.fullWidth/this.zoom,C=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,B=s+f*this.view.width,r-=C*this.view.offsetY,o=r-C*this.view.height}this.projectionMatrix.makeOrthographic(s,B,r,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(D){let e=super.toJSON(D);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Xn=4,$f=[.125,.215,.35,.446,.526,.582],dn=20,NB=new ti,Qf=new _D,IB=null,jB=0,XB=0,kB=!1,hn=(1+Math.sqrt(5))/2,Nn=1/hn,DC=[new H(-hn,Nn,0),new H(hn,Nn,0),new H(-Nn,0,hn),new H(Nn,0,hn),new H(0,hn,-Nn),new H(0,hn,Nn),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],ni=class{constructor(D){this._renderer=D,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(D,e=0,t=.1,i=100){IB=this._renderer.getRenderTarget(),jB=this._renderer.getActiveCubeFace(),XB=this._renderer.getActiveMipmapLevel(),kB=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(D,t,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(D,e=null){return this._fromTexture(D,e)}fromCubemap(D,e=null){return this._fromTexture(D,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nC(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tC(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(D){this._lodMax=Math.floor(Math.log2(D)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let D=0;D<this._lodPlanes.length;D++)this._lodPlanes[D].dispose()}_cleanup(D){this._renderer.setRenderTarget(IB,jB,XB),this._renderer.xr.enabled=kB,D.scissorTest=!1,us(D,0,0,D.width,D.height)}_fromTexture(D,e){D.mapping===Un||D.mapping===Zn?this._setSize(D.image.length===0?16:D.image[0].width||D.image[0].image.width):this._setSize(D.image.width/4),IB=this._renderer.getRenderTarget(),jB=this._renderer.getActiveCubeFace(),XB=this._renderer.getActiveMipmapLevel(),kB=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let t=e||this._allocateTargets();return this._textureToCubeUV(D,t),this._applyPMREM(t),this._cleanup(t),t}_allocateTargets(){let D=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,t={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:ki,format:Ze,colorSpace:Le,depthBuffer:!1},i=eC(D,e,t);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==D||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eC(D,e,t);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dA(s)),this._blurMaterial=pA(s,D,e)}return i}_compileMaterial(D){let e=new KD(this._lodPlanes[0],D);this._renderer.compile(e,NB)}_sceneToCubeUV(D,e,t,i){let r=new ue(90,1,e,t),o=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],C=this._renderer,a=C.autoClear,c=C.toneMapping;C.getClearColor(Qf),C.toneMapping=$t,C.autoClear=!1;let l=new Qe({name:"PMREM.Background",side:ve,depthWrite:!1,depthTest:!1}),u=new KD(new yn,l),d=!1,A=D.background;A?A.isColor&&(l.color.copy(A),D.background=null,d=!0):(l.color.copy(Qf),d=!0);for(let h=0;h<6;h++){let g=h%3;g===0?(r.up.set(0,o[h],0),r.lookAt(f[h],0,0)):g===1?(r.up.set(0,0,o[h]),r.lookAt(0,f[h],0)):(r.up.set(0,o[h],0),r.lookAt(0,0,f[h]));let x=this._cubeSize;us(i,g*x,h>2?x:0,x,x),C.setRenderTarget(i),d&&C.render(u,r),C.render(D,r)}u.geometry.dispose(),u.material.dispose(),C.toneMapping=c,C.autoClear=a,D.background=A}_textureToCubeUV(D,e){let t=this._renderer,i=D.mapping===Un||D.mapping===Zn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=nC()),this._cubemapMaterial.uniforms.flipEnvMap.value=D.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tC());let s=i?this._cubemapMaterial:this._equirectMaterial,B=new KD(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=D;let o=this._cubeSize;us(e,0,0,3*o,2*o),t.setRenderTarget(e),t.render(B,NB)}_applyPMREM(D){let e=this._renderer,t=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let B=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=DC[(i-s-1)%DC.length];this._blur(D,s-1,s,B,r)}e.autoClear=t}_blur(D,e,t,i,s){let B=this._pingPongRenderTarget;this._halfBlur(D,B,e,t,i,"latitudinal",s),this._halfBlur(B,D,t,t,i,"longitudinal",s)}_halfBlur(D,e,t,i,s,B,r){let o=this._renderer,f=this._blurMaterial;B!=="latitudinal"&&B!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let C=3,a=new KD(this._lodPlanes[i],f),c=f.uniforms,l=this._sizeLods[t]-1,u=isFinite(s)?Math.PI/(2*l):2*Math.PI/(2*dn-1),d=s/u,A=isFinite(s)?1+Math.floor(C*d):dn;A>dn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${dn}`);let h=[],g=0;for(let v=0;v<dn;++v){let P=v/d,R=Math.exp(-P*P/2);h.push(R),v===0?g+=R:v<A&&(g+=2*R)}for(let v=0;v<h.length;v++)h[v]=h[v]/g;c.envMap.value=D.texture,c.samples.value=A,c.weights.value=h,c.latitudinal.value=B==="latitudinal",r&&(c.poleAxis.value=r);let{_lodMax:x}=this;c.dTheta.value=u,c.mipInt.value=x-t;let y=this._sizeLods[i],E=3*y*(i>x-Xn?i-x+Xn:0),w=4*(this._cubeSize-y);us(e,E,w,3*y,2*y),o.setRenderTarget(e),o.render(a,NB)}};function dA(n){let D=[],e=[],t=[],i=n,s=n-Xn+1+$f.length;for(let B=0;B<s;B++){let r=Math.pow(2,i);e.push(r);let o=1/r;B>n-Xn?o=$f[B-n+Xn-1]:B===0&&(o=0),t.push(o);let f=1/(r-2),C=-f,a=1+f,c=[C,C,a,C,a,a,C,C,a,a,C,a],l=6,u=6,d=3,A=2,h=1,g=new Float32Array(d*u*l),x=new Float32Array(A*u*l),y=new Float32Array(h*u*l);for(let w=0;w<l;w++){let v=w%3*2/3-1,P=w>2?0:-1,R=[v,P,0,v+2/3,P,0,v+2/3,P+1,0,v,P,0,v+2/3,P+1,0,v,P+1,0];g.set(R,d*u*w),x.set(c,A*u*w);let m=[w,w,w,w,w,w];y.set(m,h*u*w)}let E=new Te;E.setAttribute("position",new he(g,d)),E.setAttribute("uv",new he(x,A)),E.setAttribute("faceIndex",new he(y,h)),D.push(E),i>Xn&&i--}return{lodPlanes:D,sizeLods:e,sigmas:t}}function eC(n,D,e){let t=new Vt(n,D,e);return t.texture.mapping=sB,t.texture.name="PMREM.cubeUv",t.scissorTest=!0,t}function us(n,D,e,t,i){n.viewport.set(D,e,t,i),n.scissor.set(D,e,t,i)}function pA(n,D,e){let t=new Float32Array(dn),i=new H(0,1,0);return new dt({name:"SphericalGaussianBlur",defines:{n:dn,CUBEUV_TEXEL_WIDTH:1/D,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function tC(){return new dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function nC(){return new dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mA(n){let D=new WeakMap,e=null;function t(r){if(r&&r.isTexture){let o=r.mapping,f=o===or||o===fr,C=o===Un||o===Zn;if(f||C){let a=D.get(r),c=a!==void 0?a.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==c)return e===null&&(e=new ni(n)),a=f?e.fromEquirectangular(r,a):e.fromCubemap(r,a),a.texture.pmremVersion=r.pmremVersion,D.set(r,a),a.texture;if(a!==void 0)return a.texture;{let l=r.image;return f&&l&&l.height>0||C&&l&&i(l)?(e===null&&(e=new ni(n)),a=f?e.fromEquirectangular(r):e.fromCubemap(r),a.texture.pmremVersion=r.pmremVersion,D.set(r,a),r.addEventListener("dispose",s),a.texture):null}}}return r}function i(r){let o=0,f=6;for(let C=0;C<f;C++)r[C]!==void 0&&o++;return o===f}function s(r){let o=r.target;o.removeEventListener("dispose",s);let f=D.get(o);f!==void 0&&(D.delete(o),f.dispose())}function B(){D=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:t,dispose:B}}function yA(n){let D={};function e(t){if(D[t]!==void 0)return D[t];let i;switch(t){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(t)}return D[t]=i,i}return{has:function(t){return e(t)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(t){let i=e(t);return i===null&&xi("THREE.WebGLRenderer: "+t+" extension not supported."),i}}}function bA(n,D,e,t){let i={},s=new WeakMap;function B(a){let c=a.target;c.index!==null&&D.remove(c.index);for(let u in c.attributes)D.remove(c.attributes[u]);for(let u in c.morphAttributes){let d=c.morphAttributes[u];for(let A=0,h=d.length;A<h;A++)D.remove(d[A])}c.removeEventListener("dispose",B),delete i[c.id];let l=s.get(c);l&&(D.remove(l),s.delete(c)),t.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function r(a,c){return i[c.id]===!0||(c.addEventListener("dispose",B),i[c.id]=!0,e.memory.geometries++),c}function o(a){let c=a.attributes;for(let u in c)D.update(c[u],n.ARRAY_BUFFER);let l=a.morphAttributes;for(let u in l){let d=l[u];for(let A=0,h=d.length;A<h;A++)D.update(d[A],n.ARRAY_BUFFER)}}function f(a){let c=[],l=a.index,u=a.attributes.position,d=0;if(l!==null){let g=l.array;d=l.version;for(let x=0,y=g.length;x<y;x+=3){let E=g[x+0],w=g[x+1],v=g[x+2];c.push(E,w,w,v,v,E)}}else if(u!==void 0){let g=u.array;d=u.version;for(let x=0,y=g.length/3-1;x<y;x+=3){let E=x+0,w=x+1,v=x+2;c.push(E,w,w,v,v,E)}}else return;let A=new(na(c)?Es:qs)(c,1);A.version=d;let h=s.get(a);h&&D.remove(h),s.set(a,A)}function C(a){let c=s.get(a);if(c){let l=a.index;l!==null&&c.version<l.version&&f(a)}else f(a);return s.get(a)}return{get:r,update:o,getWireframeAttribute:C}}function RA(n,D,e){let t;function i(c){t=c}let s,B;function r(c){s=c.type,B=c.bytesPerElement}function o(c,l){n.drawElements(t,l,s,c*B),e.update(l,t,1)}function f(c,l,u){u!==0&&(n.drawElementsInstanced(t,l,s,c*B,u),e.update(l,t,u))}function C(c,l,u){if(u===0)return;D.get("WEBGL_multi_draw").multiDrawElementsWEBGL(t,l,0,s,c,0,u);let A=0;for(let h=0;h<u;h++)A+=l[h];e.update(A,t,1)}function a(c,l,u,d){if(u===0)return;let A=D.get("WEBGL_multi_draw");if(A===null)for(let h=0;h<c.length;h++)f(c[h]/B,l[h],d[h]);else{A.multiDrawElementsInstancedWEBGL(t,l,0,s,c,0,d,0,u);let h=0;for(let g=0;g<u;g++)h+=l[g]*d[g];e.update(h,t,1)}}this.setMode=i,this.setIndex=r,this.render=o,this.renderInstances=f,this.renderMultiDraw=C,this.renderMultiDrawInstances=a}function gA(n){let D={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function t(s,B,r){switch(e.calls++,B){case n.TRIANGLES:e.triangles+=r*(s/3);break;case n.LINES:e.lines+=r*(s/2);break;case n.LINE_STRIP:e.lines+=r*(s-1);break;case n.LINE_LOOP:e.lines+=r*s;break;case n.POINTS:e.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",B);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:D,render:e,programs:null,autoReset:!0,reset:i,update:t}}function xA(n,D,e){let t=new WeakMap,i=new YD;function s(B,r,o){let f=B.morphTargetInfluences,C=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,a=C!==void 0?C.length:0,c=t.get(r);if(c===void 0||c.count!==a){let R=function(){v.dispose(),t.delete(r),r.removeEventListener("dispose",R)};c!==void 0&&c.texture.dispose();let l=r.morphAttributes.position!==void 0,u=r.morphAttributes.normal!==void 0,d=r.morphAttributes.color!==void 0,A=r.morphAttributes.position||[],h=r.morphAttributes.normal||[],g=r.morphAttributes.color||[],x=0;l===!0&&(x=1),u===!0&&(x=2),d===!0&&(x=3);let y=r.attributes.position.count*x,E=1;y>D.maxTextureSize&&(E=Math.ceil(y/D.maxTextureSize),y=D.maxTextureSize);let w=new Float32Array(y*E*4*a),v=new Vs(w,y,E,a);v.type=ft,v.needsUpdate=!0;let P=x*4;for(let m=0;m<a;m++){let M=A[m],X=h[m],I=g[m],z=y*E*4*m;for(let $=0;$<M.count;$++){let W=$*P;l===!0&&(i.fromBufferAttribute(M,$),w[z+W+0]=i.x,w[z+W+1]=i.y,w[z+W+2]=i.z,w[z+W+3]=0),u===!0&&(i.fromBufferAttribute(X,$),w[z+W+4]=i.x,w[z+W+5]=i.y,w[z+W+6]=i.z,w[z+W+7]=0),d===!0&&(i.fromBufferAttribute(I,$),w[z+W+8]=i.x,w[z+W+9]=i.y,w[z+W+10]=i.z,w[z+W+11]=I.itemSize===4?i.w:1)}}c={count:a,texture:v,size:new wD(y,E)},t.set(r,c),r.addEventListener("dispose",R)}if(B.isInstancedMesh===!0&&B.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",B.morphTexture,e);else{let l=0;for(let d=0;d<f.length;d++)l+=f[d];let u=r.morphTargetsRelative?1:1-l;o.getUniforms().setValue(n,"morphTargetBaseInfluence",u),o.getUniforms().setValue(n,"morphTargetInfluences",f)}o.getUniforms().setValue(n,"morphTargetsTexture",c.texture,e),o.getUniforms().setValue(n,"morphTargetsTextureSize",c.size)}return{update:s}}function TA(n,D,e,t){let i=new WeakMap;function s(o){let f=t.render.frame,C=o.geometry,a=D.get(o,C);if(i.get(a)!==f&&(D.update(a),i.set(a,f)),o.isInstancedMesh&&(o.hasEventListener("dispose",r)===!1&&o.addEventListener("dispose",r),i.get(o)!==f&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),i.set(o,f))),o.isSkinnedMesh){let c=o.skeleton;i.get(c)!==f&&(c.update(),i.set(c,f))}return a}function B(){i=new WeakMap}function r(o){let f=o.target;f.removeEventListener("dispose",r),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:s,dispose:B}}var Ns=class extends xe{constructor(D,e,t,i,s,B,r,o,f,C=Jn){if(C!==Jn&&C!==Yn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");t===void 0&&C===Jn&&(t=mn),t===void 0&&C===Yn&&(t=Kn),super(null,i,s,B,r,o,C,t,f),this.isDepthTexture=!0,this.image={width:D,height:e},this.magFilter=r!==void 0?r:Me,this.minFilter=o!==void 0?o:Me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(D){return super.copy(D),this.compareFunction=D.compareFunction,this}toJSON(D){let e=super.toJSON(D);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ra=new xe,iC=new Ns(1,1),oa=new Vs,fa=new Nr,Ca=new Fs,sC=[],BC=[],rC=new Float32Array(16),oC=new Float32Array(9),fC=new Float32Array(4);function fi(n,D,e){let t=n[0];if(t<=0||t>0)return n;let i=D*e,s=sC[i];if(s===void 0&&(s=new Float32Array(i),sC[i]=s),D!==0){t.toArray(s,0);for(let B=1,r=0;B!==D;++B)r+=e,n[B].toArray(s,r)}return s}function de(n,D){if(n.length!==D.length)return!1;for(let e=0,t=n.length;e<t;e++)if(n[e]!==D[e])return!1;return!0}function pe(n,D){for(let e=0,t=D.length;e<t;e++)n[e]=D[e]}function oB(n,D){let e=BC[D];e===void 0&&(e=new Int32Array(D),BC[D]=e);for(let t=0;t!==D;++t)e[t]=n.allocateTextureUnit();return e}function HA(n,D){let e=this.cache;e[0]!==D&&(n.uniform1f(this.addr,D),e[0]=D)}function _A(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y)&&(n.uniform2f(this.addr,D.x,D.y),e[0]=D.x,e[1]=D.y);else{if(de(e,D))return;n.uniform2fv(this.addr,D),pe(e,D)}}function wA(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y||e[2]!==D.z)&&(n.uniform3f(this.addr,D.x,D.y,D.z),e[0]=D.x,e[1]=D.y,e[2]=D.z);else if(D.r!==void 0)(e[0]!==D.r||e[1]!==D.g||e[2]!==D.b)&&(n.uniform3f(this.addr,D.r,D.g,D.b),e[0]=D.r,e[1]=D.g,e[2]=D.b);else{if(de(e,D))return;n.uniform3fv(this.addr,D),pe(e,D)}}function vA(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y||e[2]!==D.z||e[3]!==D.w)&&(n.uniform4f(this.addr,D.x,D.y,D.z,D.w),e[0]=D.x,e[1]=D.y,e[2]=D.z,e[3]=D.w);else{if(de(e,D))return;n.uniform4fv(this.addr,D),pe(e,D)}}function MA(n,D){let e=this.cache,t=D.elements;if(t===void 0){if(de(e,D))return;n.uniformMatrix2fv(this.addr,!1,D),pe(e,D)}else{if(de(e,t))return;fC.set(t),n.uniformMatrix2fv(this.addr,!1,fC),pe(e,t)}}function SA(n,D){let e=this.cache,t=D.elements;if(t===void 0){if(de(e,D))return;n.uniformMatrix3fv(this.addr,!1,D),pe(e,D)}else{if(de(e,t))return;oC.set(t),n.uniformMatrix3fv(this.addr,!1,oC),pe(e,t)}}function LA(n,D){let e=this.cache,t=D.elements;if(t===void 0){if(de(e,D))return;n.uniformMatrix4fv(this.addr,!1,D),pe(e,D)}else{if(de(e,t))return;rC.set(t),n.uniformMatrix4fv(this.addr,!1,rC),pe(e,t)}}function VA(n,D){let e=this.cache;e[0]!==D&&(n.uniform1i(this.addr,D),e[0]=D)}function qA(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y)&&(n.uniform2i(this.addr,D.x,D.y),e[0]=D.x,e[1]=D.y);else{if(de(e,D))return;n.uniform2iv(this.addr,D),pe(e,D)}}function EA(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y||e[2]!==D.z)&&(n.uniform3i(this.addr,D.x,D.y,D.z),e[0]=D.x,e[1]=D.y,e[2]=D.z);else{if(de(e,D))return;n.uniform3iv(this.addr,D),pe(e,D)}}function PA(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y||e[2]!==D.z||e[3]!==D.w)&&(n.uniform4i(this.addr,D.x,D.y,D.z,D.w),e[0]=D.x,e[1]=D.y,e[2]=D.z,e[3]=D.w);else{if(de(e,D))return;n.uniform4iv(this.addr,D),pe(e,D)}}function FA(n,D){let e=this.cache;e[0]!==D&&(n.uniform1ui(this.addr,D),e[0]=D)}function OA(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y)&&(n.uniform2ui(this.addr,D.x,D.y),e[0]=D.x,e[1]=D.y);else{if(de(e,D))return;n.uniform2uiv(this.addr,D),pe(e,D)}}function NA(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y||e[2]!==D.z)&&(n.uniform3ui(this.addr,D.x,D.y,D.z),e[0]=D.x,e[1]=D.y,e[2]=D.z);else{if(de(e,D))return;n.uniform3uiv(this.addr,D),pe(e,D)}}function IA(n,D){let e=this.cache;if(D.x!==void 0)(e[0]!==D.x||e[1]!==D.y||e[2]!==D.z||e[3]!==D.w)&&(n.uniform4ui(this.addr,D.x,D.y,D.z,D.w),e[0]=D.x,e[1]=D.y,e[2]=D.z,e[3]=D.w);else{if(de(e,D))return;n.uniform4uiv(this.addr,D),pe(e,D)}}function jA(n,D,e){let t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i);let s;this.type===n.SAMPLER_2D_SHADOW?(iC.compareFunction=ta,s=iC):s=ra,e.setTexture2D(D||s,i)}function XA(n,D,e){let t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture3D(D||fa,i)}function kA(n,D,e){let t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTextureCube(D||Ca,i)}function JA(n,D,e){let t=this.cache,i=e.allocateTextureUnit();t[0]!==i&&(n.uniform1i(this.addr,i),t[0]=i),e.setTexture2DArray(D||oa,i)}function zA(n){switch(n){case 5126:return HA;case 35664:return _A;case 35665:return wA;case 35666:return vA;case 35674:return MA;case 35675:return SA;case 35676:return LA;case 5124:case 35670:return VA;case 35667:case 35671:return qA;case 35668:case 35672:return EA;case 35669:case 35673:return PA;case 5125:return FA;case 36294:return OA;case 36295:return NA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return JA}}function WA(n,D){n.uniform1fv(this.addr,D)}function GA(n,D){let e=fi(D,this.size,2);n.uniform2fv(this.addr,e)}function UA(n,D){let e=fi(D,this.size,3);n.uniform3fv(this.addr,e)}function ZA(n,D){let e=fi(D,this.size,4);n.uniform4fv(this.addr,e)}function KA(n,D){let e=fi(D,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function YA(n,D){let e=fi(D,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function $A(n,D){let e=fi(D,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function QA(n,D){n.uniform1iv(this.addr,D)}function Du(n,D){n.uniform2iv(this.addr,D)}function eu(n,D){n.uniform3iv(this.addr,D)}function tu(n,D){n.uniform4iv(this.addr,D)}function nu(n,D){n.uniform1uiv(this.addr,D)}function iu(n,D){n.uniform2uiv(this.addr,D)}function su(n,D){n.uniform3uiv(this.addr,D)}function Bu(n,D){n.uniform4uiv(this.addr,D)}function ru(n,D,e){let t=this.cache,i=D.length,s=oB(e,i);de(t,s)||(n.uniform1iv(this.addr,s),pe(t,s));for(let B=0;B!==i;++B)e.setTexture2D(D[B]||ra,s[B])}function ou(n,D,e){let t=this.cache,i=D.length,s=oB(e,i);de(t,s)||(n.uniform1iv(this.addr,s),pe(t,s));for(let B=0;B!==i;++B)e.setTexture3D(D[B]||fa,s[B])}function fu(n,D,e){let t=this.cache,i=D.length,s=oB(e,i);de(t,s)||(n.uniform1iv(this.addr,s),pe(t,s));for(let B=0;B!==i;++B)e.setTextureCube(D[B]||Ca,s[B])}function Cu(n,D,e){let t=this.cache,i=D.length,s=oB(e,i);de(t,s)||(n.uniform1iv(this.addr,s),pe(t,s));for(let B=0;B!==i;++B)e.setTexture2DArray(D[B]||oa,s[B])}function au(n){switch(n){case 5126:return WA;case 35664:return GA;case 35665:return UA;case 35666:return ZA;case 35674:return KA;case 35675:return YA;case 35676:return $A;case 5124:case 35670:return QA;case 35667:case 35671:return Du;case 35668:case 35672:return eu;case 35669:case 35673:return tu;case 5125:return nu;case 36294:return iu;case 36295:return su;case 36296:return Bu;case 35678:case 36198:case 36298:case 36306:case 35682:return ru;case 35679:case 36299:case 36307:return ou;case 35680:case 36300:case 36308:case 36293:return fu;case 36289:case 36303:case 36311:case 36292:return Cu}}var Xr=class{constructor(D,e,t){this.id=D,this.addr=t,this.cache=[],this.type=e.type,this.setValue=zA(e.type)}},kr=class{constructor(D,e,t){this.id=D,this.addr=t,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=au(e.type)}},Jr=class{constructor(D){this.id=D,this.seq=[],this.map={}}setValue(D,e,t){let i=this.seq;for(let s=0,B=i.length;s!==B;++s){let r=i[s];r.setValue(D,e[r.id],t)}}},JB=/(\w+)(\])?(\[|\.)?/g;function CC(n,D){n.seq.push(D),n.map[D.id]=D}function cu(n,D,e){let t=n.name,i=t.length;for(JB.lastIndex=0;;){let s=JB.exec(t),B=JB.lastIndex,r=s[1],o=s[2]==="]",f=s[3];if(o&&(r=r|0),f===void 0||f==="["&&B+2===i){CC(e,f===void 0?new Xr(r,n,D):new kr(r,n,D));break}else{let a=e.map[r];a===void 0&&(a=new Jr(r),CC(e,a)),e=a}}}var Wn=class{constructor(D,e){this.seq=[],this.map={};let t=D.getProgramParameter(e,D.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){let s=D.getActiveUniform(e,i),B=D.getUniformLocation(e,s.name);cu(s,B,this)}}setValue(D,e,t,i){let s=this.map[e];s!==void 0&&s.setValue(D,t,i)}setOptional(D,e,t){let i=e[t];i!==void 0&&this.setValue(D,t,i)}static upload(D,e,t,i){for(let s=0,B=e.length;s!==B;++s){let r=e[s],o=t[r.id];o.needsUpdate!==!1&&r.setValue(D,o.value,i)}}static seqWithValue(D,e){let t=[];for(let i=0,s=D.length;i!==s;++i){let B=D[i];B.id in e&&t.push(B)}return t}};function aC(n,D,e){let t=n.createShader(D);return n.shaderSource(t,e),n.compileShader(t),t}var lu=37297,hu=0;function Au(n,D){let e=n.split(`
`),t=[],i=Math.max(D-6,0),s=Math.min(D+6,e.length);for(let B=i;B<s;B++){let r=B+1;t.push(`${r===D?">":" "} ${r}: ${e[B]}`)}return t.join(`
`)}var cC=new ND;function uu(n){zD._getMatrix(cC,zD.workingColorSpace,n);let D=`mat3( ${cC.elements.map(e=>e.toFixed(4))} )`;switch(zD.getTransfer(n)){case rB:return[D,"LinearTransferOETF"];case ne:return[D,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[D,"LinearTransferOETF"]}}function lC(n,D,e){let t=n.getShaderParameter(D,n.COMPILE_STATUS),i=n.getShaderInfoLog(D).trim();if(t&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let B=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Au(n.getShaderSource(D),B)}else return i}function du(n,D){let e=uu(D);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function pu(n,D){let e;switch(D){case wc:e="Linear";break;case vc:e="Reinhard";break;case Mc:e="Cineon";break;case ho:e="ACESFilmic";break;case Lc:e="AgX";break;case Vc:e="Neutral";break;case Sc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",D),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ds=new H;function mu(){zD.getLuminanceCoefficients(ds);let n=ds.x.toFixed(4),D=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${D}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yu(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ti).join(`
`)}function bu(n){let D=[];for(let e in n){let t=n[e];t!==!1&&D.push("#define "+e+" "+t)}return D.join(`
`)}function Ru(n,D){let e={},t=n.getProgramParameter(D,n.ACTIVE_ATTRIBUTES);for(let i=0;i<t;i++){let s=n.getActiveAttrib(D,i),B=s.name,r=1;s.type===n.FLOAT_MAT2&&(r=2),s.type===n.FLOAT_MAT3&&(r=3),s.type===n.FLOAT_MAT4&&(r=4),e[B]={type:s.type,location:n.getAttribLocation(D,B),locationSize:r}}return e}function Ti(n){return n!==""}function hC(n,D){let e=D.numSpotLightShadows+D.numSpotLightMaps-D.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,D.numDirLights).replace(/NUM_SPOT_LIGHTS/g,D.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,D.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,D.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,D.numPointLights).replace(/NUM_HEMI_LIGHTS/g,D.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,D.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,D.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,D.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,D.numPointLightShadows)}function AC(n,D){return n.replace(/NUM_CLIPPING_PLANES/g,D.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,D.numClippingPlanes-D.numClipIntersection)}var gu=/^[ \t]*#include +<([\w\d./]+)>/gm;function zr(n){return n.replace(gu,Tu)}var xu=new Map;function Tu(n,D){let e=jD[D];if(e===void 0){let t=xu.get(D);if(t!==void 0)e=jD[t],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',D,t);else throw new Error("Can not resolve #include <"+D+">")}return zr(e)}var Hu=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uC(n){return n.replace(Hu,_u)}function _u(n,D,e,t){let i="";for(let s=parseInt(D);s<parseInt(e);s++)i+=t.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function dC(n){let D=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?D+=`
#define HIGH_PRECISION`:n.precision==="mediump"?D+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(D+=`
#define LOW_PRECISION`),D}function wu(n){let D="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===XC?D="SHADOWMAP_TYPE_PCF":n.shadowMapType===rc?D="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===_t&&(D="SHADOWMAP_TYPE_VSM"),D}function vu(n){let D="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Un:case Zn:D="ENVMAP_TYPE_CUBE";break;case sB:D="ENVMAP_TYPE_CUBE_UV";break}return D}function Mu(n){let D="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zn:D="ENVMAP_MODE_REFRACTION";break}return D}function Su(n){let D="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kC:D="ENVMAP_BLENDING_MULTIPLY";break;case Hc:D="ENVMAP_BLENDING_MIX";break;case _c:D="ENVMAP_BLENDING_ADD";break}return D}function Lu(n){let D=n.envMapCubeUVHeight;if(D===null)return null;let e=Math.log2(D)-2,t=1/D;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:t,maxMip:e}}function Vu(n,D,e,t){let i=n.getContext(),s=e.defines,B=e.vertexShader,r=e.fragmentShader,o=wu(e),f=vu(e),C=Mu(e),a=Su(e),c=Lu(e),l=yu(e),u=bu(s),d=i.createProgram(),A,h,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ti).join(`
`),A.length>0&&(A+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u].filter(Ti).join(`
`),h.length>0&&(h+=`
`)):(A=[dC(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+C:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ti).join(`
`),h=[dC(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,u,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+C:"",e.envMap?"#define "+a:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==$t?"#define TONE_MAPPING":"",e.toneMapping!==$t?jD.tonemapping_pars_fragment:"",e.toneMapping!==$t?pu("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jD.colorspace_pars_fragment,du("linearToOutputTexel",e.outputColorSpace),mu(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ti).join(`
`)),B=zr(B),B=hC(B,e),B=AC(B,e),r=zr(r),r=hC(r,e),r=AC(r,e),B=uC(B),r=uC(r),e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,A=[l,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,h=["#define varying in",e.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let x=g+A+B,y=g+h+r,E=aC(i,i.VERTEX_SHADER,x),w=aC(i,i.FRAGMENT_SHADER,y);i.attachShader(d,E),i.attachShader(d,w),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d);function v(M){if(n.debug.checkShaderErrors){let X=i.getProgramInfoLog(d).trim(),I=i.getShaderInfoLog(E).trim(),z=i.getShaderInfoLog(w).trim(),$=!0,W=!0;if(i.getProgramParameter(d,i.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,d,E,w);else{let DD=lC(i,E,"vertex"),J=lC(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+X+`
`+DD+`
`+J)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(I===""||z==="")&&(W=!1);W&&(M.diagnostics={runnable:$,programLog:X,vertexShader:{log:I,prefix:A},fragmentShader:{log:z,prefix:h}})}i.deleteShader(E),i.deleteShader(w),P=new Wn(i,d),R=Ru(i,d)}let P;this.getUniforms=function(){return P===void 0&&v(this),P};let R;this.getAttributes=function(){return R===void 0&&v(this),R};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=i.getProgramParameter(d,lu)),m},this.destroy=function(){t.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=hu++,this.cacheKey=D,this.usedTimes=1,this.program=d,this.vertexShader=E,this.fragmentShader=w,this}var qu=0,Wr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(D){let e=D.vertexShader,t=D.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(t),B=this._getShaderCacheForMaterial(D);return B.has(i)===!1&&(B.add(i),i.usedTimes++),B.has(s)===!1&&(B.add(s),s.usedTimes++),this}remove(D){let e=this.materialCache.get(D);for(let t of e)t.usedTimes--,t.usedTimes===0&&this.shaderCache.delete(t.code);return this.materialCache.delete(D),this}getVertexShaderID(D){return this._getShaderStage(D.vertexShader).id}getFragmentShaderID(D){return this._getShaderStage(D.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(D){let e=this.materialCache,t=e.get(D);return t===void 0&&(t=new Set,e.set(D,t)),t}_getShaderStage(D){let e=this.shaderCache,t=e.get(D);return t===void 0&&(t=new Gr(D),e.set(D,t)),t}},Gr=class{constructor(D){this.id=qu++,this.code=D,this.usedTimes=0}};function Eu(n,D,e,t,i,s,B){let r=new Vi,o=new Wr,f=new Set,C=[],a=i.logarithmicDepthBuffer,c=i.vertexTextures,l=i.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(R){return f.add(R),R===0?"uv":`uv${R}`}function A(R,m,M,X,I){let z=X.fog,$=I.geometry,W=R.isMeshStandardMaterial?X.environment:null,DD=(R.isMeshStandardMaterial?e:D).get(R.envMap||W),J=DD&&DD.mapping===sB?DD.image.height:null,iD=u[R.type];R.precision!==null&&(l=i.getMaxPrecision(R.precision),l!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",l,"instead."));let BD=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pD=BD!==void 0?BD.length:0,SD=0;$.morphAttributes.position!==void 0&&(SD=1),$.morphAttributes.normal!==void 0&&(SD=2),$.morphAttributes.color!==void 0&&(SD=3);let F,_,N,Z;if(iD){let ee=At[iD];F=ee.vertexShader,_=ee.fragmentShader}else F=R.vertexShader,_=R.fragmentShader,o.update(R),N=o.getVertexShaderID(R),Z=o.getFragmentShaderID(R);let Q=n.getRenderTarget(),rD=n.state.buffers.depth.getReversed(),lD=I.isInstancedMesh===!0,TD=I.isBatchedMesh===!0,WD=!!R.map,ED=!!R.matcap,De=!!DD,q=!!R.aoMap,Pe=!!R.lightMap,XD=!!R.bumpMap,JD=!!R.normalMap,HD=!!R.displacementMap,se=!!R.emissiveMap,RD=!!R.metalnessMap,T=!!R.roughnessMap,p=R.anisotropy>0,O=R.clearcoat>0,K=R.dispersion>0,eD=R.iridescence>0,U=R.sheen>0,gD=R.transmission>0,CD=p&&!!R.anisotropyMap,AD=O&&!!R.clearcoatMap,UD=O&&!!R.clearcoatNormalMap,tD=O&&!!R.clearcoatRoughnessMap,uD=eD&&!!R.iridescenceMap,vD=eD&&!!R.iridescenceThicknessMap,LD=U&&!!R.sheenColorMap,dD=U&&!!R.sheenRoughnessMap,GD=!!R.specularMap,ID=!!R.specularColorMap,Be=!!R.specularIntensityMap,S=gD&&!!R.transmissionMap,oD=gD&&!!R.thicknessMap,G=!!R.gradientMap,Y=!!R.alphaMap,hD=R.alphaTest>0,aD=!!R.alphaHash,FD=!!R.extensions,ce=$t;R.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ce=n.toneMapping);let He={shaderID:iD,shaderType:R.type,shaderName:R.name,vertexShader:F,fragmentShader:_,defines:R.defines,customVertexShaderID:N,customFragmentShaderID:Z,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:l,batching:TD,batchingColor:TD&&I._colorsTexture!==null,instancing:lD,instancingColor:lD&&I.instanceColor!==null,instancingMorph:lD&&I.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:Q===null?n.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Le,alphaToCoverage:!!R.alphaToCoverage,map:WD,matcap:ED,envMap:De,envMapMode:De&&DD.mapping,envMapCubeUVHeight:J,aoMap:q,lightMap:Pe,bumpMap:XD,normalMap:JD,displacementMap:c&&HD,emissiveMap:se,normalMapObjectSpace:JD&&R.normalMapType===Oc,normalMapTangentSpace:JD&&R.normalMapType===ea,metalnessMap:RD,roughnessMap:T,anisotropy:p,anisotropyMap:CD,clearcoat:O,clearcoatMap:AD,clearcoatNormalMap:UD,clearcoatRoughnessMap:tD,dispersion:K,iridescence:eD,iridescenceMap:uD,iridescenceThicknessMap:vD,sheen:U,sheenColorMap:LD,sheenRoughnessMap:dD,specularMap:GD,specularColorMap:ID,specularIntensityMap:Be,transmission:gD,transmissionMap:S,thicknessMap:oD,gradientMap:G,opaque:R.transparent===!1&&R.blending===kn&&R.alphaToCoverage===!1,alphaMap:Y,alphaTest:hD,alphaHash:aD,combine:R.combine,mapUv:WD&&d(R.map.channel),aoMapUv:q&&d(R.aoMap.channel),lightMapUv:Pe&&d(R.lightMap.channel),bumpMapUv:XD&&d(R.bumpMap.channel),normalMapUv:JD&&d(R.normalMap.channel),displacementMapUv:HD&&d(R.displacementMap.channel),emissiveMapUv:se&&d(R.emissiveMap.channel),metalnessMapUv:RD&&d(R.metalnessMap.channel),roughnessMapUv:T&&d(R.roughnessMap.channel),anisotropyMapUv:CD&&d(R.anisotropyMap.channel),clearcoatMapUv:AD&&d(R.clearcoatMap.channel),clearcoatNormalMapUv:UD&&d(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tD&&d(R.clearcoatRoughnessMap.channel),iridescenceMapUv:uD&&d(R.iridescenceMap.channel),iridescenceThicknessMapUv:vD&&d(R.iridescenceThicknessMap.channel),sheenColorMapUv:LD&&d(R.sheenColorMap.channel),sheenRoughnessMapUv:dD&&d(R.sheenRoughnessMap.channel),specularMapUv:GD&&d(R.specularMap.channel),specularColorMapUv:ID&&d(R.specularColorMap.channel),specularIntensityMapUv:Be&&d(R.specularIntensityMap.channel),transmissionMapUv:S&&d(R.transmissionMap.channel),thicknessMapUv:oD&&d(R.thicknessMap.channel),alphaMapUv:Y&&d(R.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(JD||p),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!$.attributes.uv&&(WD||Y),fog:!!z,useFog:R.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:a,reverseDepthBuffer:rD,skinning:I.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:pD,morphTextureStride:SD,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:B.numPlanes,numClipIntersection:B.numIntersection,dithering:R.dithering,shadowMapEnabled:n.shadowMap.enabled&&M.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,decodeVideoTexture:WD&&R.map.isVideoTexture===!0&&zD.getTransfer(R.map.colorSpace)===ne,decodeVideoTextureEmissive:se&&R.emissiveMap.isVideoTexture===!0&&zD.getTransfer(R.emissiveMap.colorSpace)===ne,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ke,flipSided:R.side===ve,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:FD&&R.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(FD&&R.extensions.multiDraw===!0||TD)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return He.vertexUv1s=f.has(1),He.vertexUv2s=f.has(2),He.vertexUv3s=f.has(3),f.clear(),He}function h(R){let m=[];if(R.shaderID?m.push(R.shaderID):(m.push(R.customVertexShaderID),m.push(R.customFragmentShaderID)),R.defines!==void 0)for(let M in R.defines)m.push(M),m.push(R.defines[M]);return R.isRawShaderMaterial===!1&&(g(m,R),x(m,R),m.push(n.outputColorSpace)),m.push(R.customProgramCacheKey),m.join()}function g(R,m){R.push(m.precision),R.push(m.outputColorSpace),R.push(m.envMapMode),R.push(m.envMapCubeUVHeight),R.push(m.mapUv),R.push(m.alphaMapUv),R.push(m.lightMapUv),R.push(m.aoMapUv),R.push(m.bumpMapUv),R.push(m.normalMapUv),R.push(m.displacementMapUv),R.push(m.emissiveMapUv),R.push(m.metalnessMapUv),R.push(m.roughnessMapUv),R.push(m.anisotropyMapUv),R.push(m.clearcoatMapUv),R.push(m.clearcoatNormalMapUv),R.push(m.clearcoatRoughnessMapUv),R.push(m.iridescenceMapUv),R.push(m.iridescenceThicknessMapUv),R.push(m.sheenColorMapUv),R.push(m.sheenRoughnessMapUv),R.push(m.specularMapUv),R.push(m.specularColorMapUv),R.push(m.specularIntensityMapUv),R.push(m.transmissionMapUv),R.push(m.thicknessMapUv),R.push(m.combine),R.push(m.fogExp2),R.push(m.sizeAttenuation),R.push(m.morphTargetsCount),R.push(m.morphAttributeCount),R.push(m.numDirLights),R.push(m.numPointLights),R.push(m.numSpotLights),R.push(m.numSpotLightMaps),R.push(m.numHemiLights),R.push(m.numRectAreaLights),R.push(m.numDirLightShadows),R.push(m.numPointLightShadows),R.push(m.numSpotLightShadows),R.push(m.numSpotLightShadowsWithMaps),R.push(m.numLightProbes),R.push(m.shadowMapType),R.push(m.toneMapping),R.push(m.numClippingPlanes),R.push(m.numClipIntersection),R.push(m.depthPacking)}function x(R,m){r.disableAll(),m.supportsVertexTextures&&r.enable(0),m.instancing&&r.enable(1),m.instancingColor&&r.enable(2),m.instancingMorph&&r.enable(3),m.matcap&&r.enable(4),m.envMap&&r.enable(5),m.normalMapObjectSpace&&r.enable(6),m.normalMapTangentSpace&&r.enable(7),m.clearcoat&&r.enable(8),m.iridescence&&r.enable(9),m.alphaTest&&r.enable(10),m.vertexColors&&r.enable(11),m.vertexAlphas&&r.enable(12),m.vertexUv1s&&r.enable(13),m.vertexUv2s&&r.enable(14),m.vertexUv3s&&r.enable(15),m.vertexTangents&&r.enable(16),m.anisotropy&&r.enable(17),m.alphaHash&&r.enable(18),m.batching&&r.enable(19),m.dispersion&&r.enable(20),m.batchingColor&&r.enable(21),R.push(r.mask),r.disableAll(),m.fog&&r.enable(0),m.useFog&&r.enable(1),m.flatShading&&r.enable(2),m.logarithmicDepthBuffer&&r.enable(3),m.reverseDepthBuffer&&r.enable(4),m.skinning&&r.enable(5),m.morphTargets&&r.enable(6),m.morphNormals&&r.enable(7),m.morphColors&&r.enable(8),m.premultipliedAlpha&&r.enable(9),m.shadowMapEnabled&&r.enable(10),m.doubleSided&&r.enable(11),m.flipSided&&r.enable(12),m.useDepthPacking&&r.enable(13),m.dithering&&r.enable(14),m.transmission&&r.enable(15),m.sheen&&r.enable(16),m.opaque&&r.enable(17),m.pointsUvs&&r.enable(18),m.decodeVideoTexture&&r.enable(19),m.decodeVideoTextureEmissive&&r.enable(20),m.alphaToCoverage&&r.enable(21),R.push(r.mask)}function y(R){let m=u[R.type],M;if(m){let X=At[m];M=T3.clone(X.uniforms)}else M=R.uniforms;return M}function E(R,m){let M;for(let X=0,I=C.length;X<I;X++){let z=C[X];if(z.cacheKey===m){M=z,++M.usedTimes;break}}return M===void 0&&(M=new Vu(n,m,R,s),C.push(M)),M}function w(R){if(--R.usedTimes===0){let m=C.indexOf(R);C[m]=C[C.length-1],C.pop(),R.destroy()}}function v(R){o.remove(R)}function P(){o.dispose()}return{getParameters:A,getProgramCacheKey:h,getUniforms:y,acquireProgram:E,releaseProgram:w,releaseShaderCache:v,programs:C,dispose:P}}function Pu(){let n=new WeakMap;function D(B){return n.has(B)}function e(B){let r=n.get(B);return r===void 0&&(r={},n.set(B,r)),r}function t(B){n.delete(B)}function i(B,r,o){n.get(B)[r]=o}function s(){n=new WeakMap}return{has:D,get:e,remove:t,update:i,dispose:s}}function Fu(n,D){return n.groupOrder!==D.groupOrder?n.groupOrder-D.groupOrder:n.renderOrder!==D.renderOrder?n.renderOrder-D.renderOrder:n.material.id!==D.material.id?n.material.id-D.material.id:n.z!==D.z?n.z-D.z:n.id-D.id}function pC(n,D){return n.groupOrder!==D.groupOrder?n.groupOrder-D.groupOrder:n.renderOrder!==D.renderOrder?n.renderOrder-D.renderOrder:n.z!==D.z?D.z-n.z:n.id-D.id}function mC(){let n=[],D=0,e=[],t=[],i=[];function s(){D=0,e.length=0,t.length=0,i.length=0}function B(a,c,l,u,d,A){let h=n[D];return h===void 0?(h={id:a.id,object:a,geometry:c,material:l,groupOrder:u,renderOrder:a.renderOrder,z:d,group:A},n[D]=h):(h.id=a.id,h.object=a,h.geometry=c,h.material=l,h.groupOrder=u,h.renderOrder=a.renderOrder,h.z=d,h.group=A),D++,h}function r(a,c,l,u,d,A){let h=B(a,c,l,u,d,A);l.transmission>0?t.push(h):l.transparent===!0?i.push(h):e.push(h)}function o(a,c,l,u,d,A){let h=B(a,c,l,u,d,A);l.transmission>0?t.unshift(h):l.transparent===!0?i.unshift(h):e.unshift(h)}function f(a,c){e.length>1&&e.sort(a||Fu),t.length>1&&t.sort(c||pC),i.length>1&&i.sort(c||pC)}function C(){for(let a=D,c=n.length;a<c;a++){let l=n[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}}return{opaque:e,transmissive:t,transparent:i,init:s,push:r,unshift:o,finish:C,sort:f}}function Ou(){let n=new WeakMap;function D(t,i){let s=n.get(t),B;return s===void 0?(B=new mC,n.set(t,[B])):i>=s.length?(B=new mC,s.push(B)):B=s[i],B}function e(){n=new WeakMap}return{get:D,dispose:e}}function Nu(){let n={};return{get:function(D){if(n[D.id]!==void 0)return n[D.id];let e;switch(D.type){case"DirectionalLight":e={direction:new H,color:new _D};break;case"SpotLight":e={position:new H,direction:new H,color:new _D,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new _D,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new _D,groundColor:new _D};break;case"RectAreaLight":e={color:new _D,position:new H,halfWidth:new H,halfHeight:new H};break}return n[D.id]=e,e}}}function Iu(){let n={};return{get:function(D){if(n[D.id]!==void 0)return n[D.id];let e;switch(D.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wD};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wD};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wD,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[D.id]=e,e}}}var ju=0;function Xu(n,D){return(D.castShadow?2:0)-(n.castShadow?2:0)+(D.map?1:0)-(n.map?1:0)}function ku(n){let D=new Nu,e=Iu(),t={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)t.probe.push(new H);let i=new H,s=new VD,B=new VD;function r(f){let C=0,a=0,c=0;for(let R=0;R<9;R++)t.probe[R].set(0,0,0);let l=0,u=0,d=0,A=0,h=0,g=0,x=0,y=0,E=0,w=0,v=0;f.sort(Xu);for(let R=0,m=f.length;R<m;R++){let M=f[R],X=M.color,I=M.intensity,z=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)C+=X.r*I,a+=X.g*I,c+=X.b*I;else if(M.isLightProbe){for(let W=0;W<9;W++)t.probe[W].addScaledVector(M.sh.coefficients[W],I);v++}else if(M.isDirectionalLight){let W=D.get(M);if(W.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let DD=M.shadow,J=e.get(M);J.shadowIntensity=DD.intensity,J.shadowBias=DD.bias,J.shadowNormalBias=DD.normalBias,J.shadowRadius=DD.radius,J.shadowMapSize=DD.mapSize,t.directionalShadow[l]=J,t.directionalShadowMap[l]=$,t.directionalShadowMatrix[l]=M.shadow.matrix,g++}t.directional[l]=W,l++}else if(M.isSpotLight){let W=D.get(M);W.position.setFromMatrixPosition(M.matrixWorld),W.color.copy(X).multiplyScalar(I),W.distance=z,W.coneCos=Math.cos(M.angle),W.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),W.decay=M.decay,t.spot[d]=W;let DD=M.shadow;if(M.map&&(t.spotLightMap[E]=M.map,E++,DD.updateMatrices(M),M.castShadow&&w++),t.spotLightMatrix[d]=DD.matrix,M.castShadow){let J=e.get(M);J.shadowIntensity=DD.intensity,J.shadowBias=DD.bias,J.shadowNormalBias=DD.normalBias,J.shadowRadius=DD.radius,J.shadowMapSize=DD.mapSize,t.spotShadow[d]=J,t.spotShadowMap[d]=$,y++}d++}else if(M.isRectAreaLight){let W=D.get(M);W.color.copy(X).multiplyScalar(I),W.halfWidth.set(M.width*.5,0,0),W.halfHeight.set(0,M.height*.5,0),t.rectArea[A]=W,A++}else if(M.isPointLight){let W=D.get(M);if(W.color.copy(M.color).multiplyScalar(M.intensity),W.distance=M.distance,W.decay=M.decay,M.castShadow){let DD=M.shadow,J=e.get(M);J.shadowIntensity=DD.intensity,J.shadowBias=DD.bias,J.shadowNormalBias=DD.normalBias,J.shadowRadius=DD.radius,J.shadowMapSize=DD.mapSize,J.shadowCameraNear=DD.camera.near,J.shadowCameraFar=DD.camera.far,t.pointShadow[u]=J,t.pointShadowMap[u]=$,t.pointShadowMatrix[u]=M.shadow.matrix,x++}t.point[u]=W,u++}else if(M.isHemisphereLight){let W=D.get(M);W.skyColor.copy(M.color).multiplyScalar(I),W.groundColor.copy(M.groundColor).multiplyScalar(I),t.hemi[h]=W,h++}}A>0&&(n.has("OES_texture_float_linear")===!0?(t.rectAreaLTC1=sD.LTC_FLOAT_1,t.rectAreaLTC2=sD.LTC_FLOAT_2):(t.rectAreaLTC1=sD.LTC_HALF_1,t.rectAreaLTC2=sD.LTC_HALF_2)),t.ambient[0]=C,t.ambient[1]=a,t.ambient[2]=c;let P=t.hash;(P.directionalLength!==l||P.pointLength!==u||P.spotLength!==d||P.rectAreaLength!==A||P.hemiLength!==h||P.numDirectionalShadows!==g||P.numPointShadows!==x||P.numSpotShadows!==y||P.numSpotMaps!==E||P.numLightProbes!==v)&&(t.directional.length=l,t.spot.length=d,t.rectArea.length=A,t.point.length=u,t.hemi.length=h,t.directionalShadow.length=g,t.directionalShadowMap.length=g,t.pointShadow.length=x,t.pointShadowMap.length=x,t.spotShadow.length=y,t.spotShadowMap.length=y,t.directionalShadowMatrix.length=g,t.pointShadowMatrix.length=x,t.spotLightMatrix.length=y+E-w,t.spotLightMap.length=E,t.numSpotLightShadowsWithMaps=w,t.numLightProbes=v,P.directionalLength=l,P.pointLength=u,P.spotLength=d,P.rectAreaLength=A,P.hemiLength=h,P.numDirectionalShadows=g,P.numPointShadows=x,P.numSpotShadows=y,P.numSpotMaps=E,P.numLightProbes=v,t.version=ju++)}function o(f,C){let a=0,c=0,l=0,u=0,d=0,A=C.matrixWorldInverse;for(let h=0,g=f.length;h<g;h++){let x=f[h];if(x.isDirectionalLight){let y=t.directional[a];y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(A),a++}else if(x.isSpotLight){let y=t.spot[l];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(A),y.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(A),l++}else if(x.isRectAreaLight){let y=t.rectArea[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(A),B.identity(),s.copy(x.matrixWorld),s.premultiply(A),B.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(B),y.halfHeight.applyMatrix4(B),u++}else if(x.isPointLight){let y=t.point[c];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(A),c++}else if(x.isHemisphereLight){let y=t.hemi[d];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(A),d++}}}return{setup:r,setupView:o,state:t}}function yC(n){let D=new ku(n),e=[],t=[];function i(C){f.camera=C,e.length=0,t.length=0}function s(C){e.push(C)}function B(C){t.push(C)}function r(){D.setup(e)}function o(C){D.setupView(e,C)}let f={lightsArray:e,shadowsArray:t,camera:null,lights:D,transmissionRenderTarget:{}};return{init:i,state:f,setupLights:r,setupLightsView:o,pushLight:s,pushShadow:B}}function Ju(n){let D=new WeakMap;function e(i,s=0){let B=D.get(i),r;return B===void 0?(r=new yC(n),D.set(i,[r])):s>=B.length?(r=new yC(n),B.push(r)):r=B[s],r}function t(){D=new WeakMap}return{get:e,dispose:t}}var Ur=class extends ze{static get type(){return"MeshDepthMaterial"}constructor(D){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Pc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(D)}copy(D){return super.copy(D),this.depthPacking=D.depthPacking,this.map=D.map,this.alphaMap=D.alphaMap,this.displacementMap=D.displacementMap,this.displacementScale=D.displacementScale,this.displacementBias=D.displacementBias,this.wireframe=D.wireframe,this.wireframeLinewidth=D.wireframeLinewidth,this}},Zr=class extends ze{static get type(){return"MeshDistanceMaterial"}constructor(D){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(D)}copy(D){return super.copy(D),this.map=D.map,this.alphaMap=D.alphaMap,this.displacementMap=D.displacementMap,this.displacementScale=D.displacementScale,this.displacementBias=D.displacementBias,this}},zu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Gu(n,D,e){let t=new qi,i=new wD,s=new wD,B=new YD,r=new Ur({depthPacking:Fc}),o=new Zr,f={},C=e.maxTextureSize,a={[Ye]:ve,[ve]:Ye,[ke]:ke},c=new dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wD},radius:{value:4}},vertexShader:zu,fragmentShader:Wu}),l=c.clone();l.defines.HORIZONTAL_PASS=1;let u=new Te;u.setAttribute("position",new he(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let d=new KD(u,c),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=XC;let h=this.type;this.render=function(w,v,P){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||w.length===0)return;let R=n.getRenderTarget(),m=n.getActiveCubeFace(),M=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Yt),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let I=h!==_t&&this.type===_t,z=h===_t&&this.type!==_t;for(let $=0,W=w.length;$<W;$++){let DD=w[$],J=DD.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",DD,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);let iD=J.getFrameExtents();if(i.multiply(iD),s.copy(J.mapSize),(i.x>C||i.y>C)&&(i.x>C&&(s.x=Math.floor(C/iD.x),i.x=s.x*iD.x,J.mapSize.x=s.x),i.y>C&&(s.y=Math.floor(C/iD.y),i.y=s.y*iD.y,J.mapSize.y=s.y)),J.map===null||I===!0||z===!0){let pD=this.type!==_t?{minFilter:Me,magFilter:Me}:{};J.map!==null&&J.map.dispose(),J.map=new Vt(i.x,i.y,pD),J.map.texture.name=DD.name+".shadowMap",J.camera.updateProjectionMatrix()}n.setRenderTarget(J.map),n.clear();let BD=J.getViewportCount();for(let pD=0;pD<BD;pD++){let SD=J.getViewport(pD);B.set(s.x*SD.x,s.y*SD.y,s.x*SD.z,s.y*SD.w),X.viewport(B),J.updateMatrices(DD,pD),t=J.getFrustum(),y(v,P,J.camera,DD,this.type)}J.isPointLightShadow!==!0&&this.type===_t&&g(J,P),J.needsUpdate=!1}h=this.type,A.needsUpdate=!1,n.setRenderTarget(R,m,M)};function g(w,v){let P=D.update(d);c.defines.VSM_SAMPLES!==w.blurSamples&&(c.defines.VSM_SAMPLES=w.blurSamples,l.defines.VSM_SAMPLES=w.blurSamples,c.needsUpdate=!0,l.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Vt(i.x,i.y)),c.uniforms.shadow_pass.value=w.map.texture,c.uniforms.resolution.value=w.mapSize,c.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(v,null,P,c,d,null),l.uniforms.shadow_pass.value=w.mapPass.texture,l.uniforms.resolution.value=w.mapSize,l.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(v,null,P,l,d,null)}function x(w,v,P,R){let m=null,M=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(M!==void 0)m=M;else if(m=P.isPointLight===!0?o:r,n.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0){let X=m.uuid,I=v.uuid,z=f[X];z===void 0&&(z={},f[X]=z);let $=z[I];$===void 0&&($=m.clone(),z[I]=$,v.addEventListener("dispose",E)),m=$}if(m.visible=v.visible,m.wireframe=v.wireframe,R===_t?m.side=v.shadowSide!==null?v.shadowSide:v.side:m.side=v.shadowSide!==null?v.shadowSide:a[v.side],m.alphaMap=v.alphaMap,m.alphaTest=v.alphaTest,m.map=v.map,m.clipShadows=v.clipShadows,m.clippingPlanes=v.clippingPlanes,m.clipIntersection=v.clipIntersection,m.displacementMap=v.displacementMap,m.displacementScale=v.displacementScale,m.displacementBias=v.displacementBias,m.wireframeLinewidth=v.wireframeLinewidth,m.linewidth=v.linewidth,P.isPointLight===!0&&m.isMeshDistanceMaterial===!0){let X=n.properties.get(m);X.light=P}return m}function y(w,v,P,R,m){if(w.visible===!1)return;if(w.layers.test(v.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&m===_t)&&(!w.frustumCulled||t.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);let I=D.update(w),z=w.material;if(Array.isArray(z)){let $=I.groups;for(let W=0,DD=$.length;W<DD;W++){let J=$[W],iD=z[J.materialIndex];if(iD&&iD.visible){let BD=x(w,iD,R,m);w.onBeforeShadow(n,w,v,P,I,BD,J),n.renderBufferDirect(P,null,I,BD,w,J),w.onAfterShadow(n,w,v,P,I,BD,J)}}}else if(z.visible){let $=x(w,z,R,m);w.onBeforeShadow(n,w,v,P,I,$,null),n.renderBufferDirect(P,null,I,$,w,null),w.onAfterShadow(n,w,v,P,I,$,null)}}let X=w.children;for(let I=0,z=X.length;I<z;I++)y(X[I],v,P,R,m)}function E(w){w.target.removeEventListener("dispose",E);for(let P in f){let R=f[P],m=w.target.uuid;m in R&&(R[m].dispose(),delete R[m])}}}var Uu={[er]:tr,[nr]:Br,[ir]:rr,[Gn]:sr,[tr]:er,[Br]:nr,[rr]:ir,[sr]:Gn};function Zu(n,D){function e(){let S=!1,oD=new YD,G=null,Y=new YD(0,0,0,0);return{setMask:function(hD){G!==hD&&!S&&(n.colorMask(hD,hD,hD,hD),G=hD)},setLocked:function(hD){S=hD},setClear:function(hD,aD,FD,ce,He){He===!0&&(hD*=ce,aD*=ce,FD*=ce),oD.set(hD,aD,FD,ce),Y.equals(oD)===!1&&(n.clearColor(hD,aD,FD,ce),Y.copy(oD))},reset:function(){S=!1,G=null,Y.set(-1,0,0,0)}}}function t(){let S=!1,oD=!1,G=null,Y=null,hD=null;return{setReversed:function(aD){if(oD!==aD){let FD=D.get("EXT_clip_control");oD?FD.clipControlEXT(FD.LOWER_LEFT_EXT,FD.ZERO_TO_ONE_EXT):FD.clipControlEXT(FD.LOWER_LEFT_EXT,FD.NEGATIVE_ONE_TO_ONE_EXT);let ce=hD;hD=null,this.setClear(ce)}oD=aD},getReversed:function(){return oD},setTest:function(aD){aD?Q(n.DEPTH_TEST):rD(n.DEPTH_TEST)},setMask:function(aD){G!==aD&&!S&&(n.depthMask(aD),G=aD)},setFunc:function(aD){if(oD&&(aD=Uu[aD]),Y!==aD){switch(aD){case er:n.depthFunc(n.NEVER);break;case tr:n.depthFunc(n.ALWAYS);break;case nr:n.depthFunc(n.LESS);break;case Gn:n.depthFunc(n.LEQUAL);break;case ir:n.depthFunc(n.EQUAL);break;case sr:n.depthFunc(n.GEQUAL);break;case Br:n.depthFunc(n.GREATER);break;case rr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=aD}},setLocked:function(aD){S=aD},setClear:function(aD){hD!==aD&&(oD&&(aD=1-aD),n.clearDepth(aD),hD=aD)},reset:function(){S=!1,G=null,Y=null,hD=null,oD=!1}}}function i(){let S=!1,oD=null,G=null,Y=null,hD=null,aD=null,FD=null,ce=null,He=null;return{setTest:function(ee){S||(ee?Q(n.STENCIL_TEST):rD(n.STENCIL_TEST))},setMask:function(ee){oD!==ee&&!S&&(n.stencilMask(ee),oD=ee)},setFunc:function(ee,tt,mt){(G!==ee||Y!==tt||hD!==mt)&&(n.stencilFunc(ee,tt,mt),G=ee,Y=tt,hD=mt)},setOp:function(ee,tt,mt){(aD!==ee||FD!==tt||ce!==mt)&&(n.stencilOp(ee,tt,mt),aD=ee,FD=tt,ce=mt)},setLocked:function(ee){S=ee},setClear:function(ee){He!==ee&&(n.clearStencil(ee),He=ee)},reset:function(){S=!1,oD=null,G=null,Y=null,hD=null,aD=null,FD=null,ce=null,He=null}}}let s=new e,B=new t,r=new i,o=new WeakMap,f=new WeakMap,C={},a={},c=new WeakMap,l=[],u=null,d=!1,A=null,h=null,g=null,x=null,y=null,E=null,w=null,v=new _D(0,0,0),P=0,R=!1,m=null,M=null,X=null,I=null,z=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,DD=0,J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(DD=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=DD>=1):J.indexOf("OpenGL ES")!==-1&&(DD=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=DD>=2);let iD=null,BD={},pD=n.getParameter(n.SCISSOR_BOX),SD=n.getParameter(n.VIEWPORT),F=new YD().fromArray(pD),_=new YD().fromArray(SD);function N(S,oD,G,Y){let hD=new Uint8Array(4),aD=n.createTexture();n.bindTexture(S,aD),n.texParameteri(S,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(S,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let FD=0;FD<G;FD++)S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY?n.texImage3D(oD,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,hD):n.texImage2D(oD+FD,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,hD);return aD}let Z={};Z[n.TEXTURE_2D]=N(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=N(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=N(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=N(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),B.setClear(1),r.setClear(0),Q(n.DEPTH_TEST),B.setFunc(Gn),XD(!1),JD(bf),Q(n.CULL_FACE),q(Yt);function Q(S){C[S]!==!0&&(n.enable(S),C[S]=!0)}function rD(S){C[S]!==!1&&(n.disable(S),C[S]=!1)}function lD(S,oD){return a[S]!==oD?(n.bindFramebuffer(S,oD),a[S]=oD,S===n.DRAW_FRAMEBUFFER&&(a[n.FRAMEBUFFER]=oD),S===n.FRAMEBUFFER&&(a[n.DRAW_FRAMEBUFFER]=oD),!0):!1}function TD(S,oD){let G=l,Y=!1;if(S){G=c.get(oD),G===void 0&&(G=[],c.set(oD,G));let hD=S.textures;if(G.length!==hD.length||G[0]!==n.COLOR_ATTACHMENT0){for(let aD=0,FD=hD.length;aD<FD;aD++)G[aD]=n.COLOR_ATTACHMENT0+aD;G.length=hD.length,Y=!0}}else G[0]!==n.BACK&&(G[0]=n.BACK,Y=!0);Y&&n.drawBuffers(G)}function WD(S){return u!==S?(n.useProgram(S),u=S,!0):!1}let ED={[An]:n.FUNC_ADD,[fc]:n.FUNC_SUBTRACT,[Cc]:n.FUNC_REVERSE_SUBTRACT};ED[ac]=n.MIN,ED[cc]=n.MAX;let De={[lc]:n.ZERO,[hc]:n.ONE,[Ac]:n.SRC_COLOR,[QB]:n.SRC_ALPHA,[bc]:n.SRC_ALPHA_SATURATE,[mc]:n.DST_COLOR,[dc]:n.DST_ALPHA,[uc]:n.ONE_MINUS_SRC_COLOR,[Dr]:n.ONE_MINUS_SRC_ALPHA,[yc]:n.ONE_MINUS_DST_COLOR,[pc]:n.ONE_MINUS_DST_ALPHA,[Rc]:n.CONSTANT_COLOR,[gc]:n.ONE_MINUS_CONSTANT_COLOR,[xc]:n.CONSTANT_ALPHA,[Tc]:n.ONE_MINUS_CONSTANT_ALPHA};function q(S,oD,G,Y,hD,aD,FD,ce,He,ee){if(S===Yt){d===!0&&(rD(n.BLEND),d=!1);return}if(d===!1&&(Q(n.BLEND),d=!0),S!==oc){if(S!==A||ee!==R){if((h!==An||y!==An)&&(n.blendEquation(n.FUNC_ADD),h=An,y=An),ee)switch(S){case kn:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rf:n.blendFunc(n.ONE,n.ONE);break;case gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case kn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rf:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}g=null,x=null,E=null,w=null,v.set(0,0,0),P=0,A=S,R=ee}return}hD=hD||oD,aD=aD||G,FD=FD||Y,(oD!==h||hD!==y)&&(n.blendEquationSeparate(ED[oD],ED[hD]),h=oD,y=hD),(G!==g||Y!==x||aD!==E||FD!==w)&&(n.blendFuncSeparate(De[G],De[Y],De[aD],De[FD]),g=G,x=Y,E=aD,w=FD),(ce.equals(v)===!1||He!==P)&&(n.blendColor(ce.r,ce.g,ce.b,He),v.copy(ce),P=He),A=S,R=!1}function Pe(S,oD){S.side===ke?rD(n.CULL_FACE):Q(n.CULL_FACE);let G=S.side===ve;oD&&(G=!G),XD(G),S.blending===kn&&S.transparent===!1?q(Yt):q(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),B.setFunc(S.depthFunc),B.setTest(S.depthTest),B.setMask(S.depthWrite),s.setMask(S.colorWrite);let Y=S.stencilWrite;r.setTest(Y),Y&&(r.setMask(S.stencilWriteMask),r.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),r.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),se(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Q(n.SAMPLE_ALPHA_TO_COVERAGE):rD(n.SAMPLE_ALPHA_TO_COVERAGE)}function XD(S){m!==S&&(S?n.frontFace(n.CW):n.frontFace(n.CCW),m=S)}function JD(S){S!==sc?(Q(n.CULL_FACE),S!==M&&(S===bf?n.cullFace(n.BACK):S===Bc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rD(n.CULL_FACE),M=S}function HD(S){S!==X&&(W&&n.lineWidth(S),X=S)}function se(S,oD,G){S?(Q(n.POLYGON_OFFSET_FILL),(I!==oD||z!==G)&&(n.polygonOffset(oD,G),I=oD,z=G)):rD(n.POLYGON_OFFSET_FILL)}function RD(S){S?Q(n.SCISSOR_TEST):rD(n.SCISSOR_TEST)}function T(S){S===void 0&&(S=n.TEXTURE0+$-1),iD!==S&&(n.activeTexture(S),iD=S)}function p(S,oD,G){G===void 0&&(iD===null?G=n.TEXTURE0+$-1:G=iD);let Y=BD[G];Y===void 0&&(Y={type:void 0,texture:void 0},BD[G]=Y),(Y.type!==S||Y.texture!==oD)&&(iD!==G&&(n.activeTexture(G),iD=G),n.bindTexture(S,oD||Z[S]),Y.type=S,Y.texture=oD)}function O(){let S=BD[iD];S!==void 0&&S.type!==void 0&&(n.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function K(){try{n.compressedTexImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function eD(){try{n.compressedTexImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function U(){try{n.texSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function gD(){try{n.texSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function CD(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function AD(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function UD(){try{n.texStorage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function tD(){try{n.texStorage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function uD(){try{n.texImage2D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function vD(){try{n.texImage3D.apply(n,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function LD(S){F.equals(S)===!1&&(n.scissor(S.x,S.y,S.z,S.w),F.copy(S))}function dD(S){_.equals(S)===!1&&(n.viewport(S.x,S.y,S.z,S.w),_.copy(S))}function GD(S,oD){let G=f.get(oD);G===void 0&&(G=new WeakMap,f.set(oD,G));let Y=G.get(S);Y===void 0&&(Y=n.getUniformBlockIndex(oD,S.name),G.set(S,Y))}function ID(S,oD){let Y=f.get(oD).get(S);o.get(oD)!==Y&&(n.uniformBlockBinding(oD,Y,S.__bindingPointIndex),o.set(oD,Y))}function Be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),B.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),C={},iD=null,BD={},a={},c=new WeakMap,l=[],u=null,d=!1,A=null,h=null,g=null,x=null,y=null,E=null,w=null,v=new _D(0,0,0),P=0,R=!1,m=null,M=null,X=null,I=null,z=null,F.set(0,0,n.canvas.width,n.canvas.height),_.set(0,0,n.canvas.width,n.canvas.height),s.reset(),B.reset(),r.reset()}return{buffers:{color:s,depth:B,stencil:r},enable:Q,disable:rD,bindFramebuffer:lD,drawBuffers:TD,useProgram:WD,setBlending:q,setMaterial:Pe,setFlipSided:XD,setCullFace:JD,setLineWidth:HD,setPolygonOffset:se,setScissorTest:RD,activeTexture:T,bindTexture:p,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:eD,texImage2D:uD,texImage3D:vD,updateUBOMapping:GD,uniformBlockBinding:ID,texStorage2D:UD,texStorage3D:tD,texSubImage2D:U,texSubImage3D:gD,compressedTexSubImage2D:CD,compressedTexSubImage3D:AD,scissor:LD,viewport:dD,reset:Be}}function bC(n,D,e,t){let i=Ku(t);switch(e){case UC:return n*D;case KC:return n*D;case YC:return n*D*2;case yo:return n*D/i.components*i.byteLength;case bo:return n*D/i.components*i.byteLength;case $C:return n*D*2/i.components*i.byteLength;case Ro:return n*D*2/i.components*i.byteLength;case ZC:return n*D*3/i.components*i.byteLength;case Ze:return n*D*4/i.components*i.byteLength;case go:return n*D*4/i.components*i.byteLength;case Hs:case _s:return Math.floor((n+3)/4)*Math.floor((D+3)/4)*8;case ws:case vs:return Math.floor((n+3)/4)*Math.floor((D+3)/4)*16;case ar:case lr:return Math.max(n,16)*Math.max(D,8)/4;case Cr:case cr:return Math.max(n,8)*Math.max(D,8)/2;case hr:case Ar:return Math.floor((n+3)/4)*Math.floor((D+3)/4)*8;case ur:return Math.floor((n+3)/4)*Math.floor((D+3)/4)*16;case dr:return Math.floor((n+3)/4)*Math.floor((D+3)/4)*16;case pr:return Math.floor((n+4)/5)*Math.floor((D+3)/4)*16;case mr:return Math.floor((n+4)/5)*Math.floor((D+4)/5)*16;case yr:return Math.floor((n+5)/6)*Math.floor((D+4)/5)*16;case br:return Math.floor((n+5)/6)*Math.floor((D+5)/6)*16;case Rr:return Math.floor((n+7)/8)*Math.floor((D+4)/5)*16;case gr:return Math.floor((n+7)/8)*Math.floor((D+5)/6)*16;case xr:return Math.floor((n+7)/8)*Math.floor((D+7)/8)*16;case Tr:return Math.floor((n+9)/10)*Math.floor((D+4)/5)*16;case Hr:return Math.floor((n+9)/10)*Math.floor((D+5)/6)*16;case _r:return Math.floor((n+9)/10)*Math.floor((D+7)/8)*16;case wr:return Math.floor((n+9)/10)*Math.floor((D+9)/10)*16;case vr:return Math.floor((n+11)/12)*Math.floor((D+9)/10)*16;case Mr:return Math.floor((n+11)/12)*Math.floor((D+11)/12)*16;case Ms:case Sr:case Lr:return Math.ceil(n/4)*Math.ceil(D/4)*16;case QC:case Vr:return Math.ceil(n/4)*Math.ceil(D/4)*8;case qr:case Er:return Math.ceil(n/4)*Math.ceil(D/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ku(n){switch(n){case St:case zC:return{byteLength:1,components:1};case Si:case WC:case ki:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case mn:case uo:case ft:return{byteLength:4,components:1};case GC:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Yu(n,D,e,t,i,s,B){let r=D.has("WEBGL_multisampled_render_to_texture")?D.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new wD,C=new WeakMap,a,c=new WeakMap,l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function u(T,p){return l?new OffscreenCanvas(T,p):Li("canvas")}function d(T,p,O){let K=1,eD=RD(T);if((eD.width>O||eD.height>O)&&(K=O/Math.max(eD.width,eD.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let U=Math.floor(K*eD.width),gD=Math.floor(K*eD.height);a===void 0&&(a=u(U,gD));let CD=p?u(U,gD):a;return CD.width=U,CD.height=gD,CD.getContext("2d").drawImage(T,0,0,U,gD),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+eD.width+"x"+eD.height+") to ("+U+"x"+gD+")."),CD}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+eD.width+"x"+eD.height+")."),T;return T}function A(T){return T.generateMipmaps}function h(T){n.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(T,p,O,K,eD=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let U=p;if(p===n.RED&&(O===n.FLOAT&&(U=n.R32F),O===n.HALF_FLOAT&&(U=n.R16F),O===n.UNSIGNED_BYTE&&(U=n.R8)),p===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(U=n.R8UI),O===n.UNSIGNED_SHORT&&(U=n.R16UI),O===n.UNSIGNED_INT&&(U=n.R32UI),O===n.BYTE&&(U=n.R8I),O===n.SHORT&&(U=n.R16I),O===n.INT&&(U=n.R32I)),p===n.RG&&(O===n.FLOAT&&(U=n.RG32F),O===n.HALF_FLOAT&&(U=n.RG16F),O===n.UNSIGNED_BYTE&&(U=n.RG8)),p===n.RG_INTEGER&&(O===n.UNSIGNED_BYTE&&(U=n.RG8UI),O===n.UNSIGNED_SHORT&&(U=n.RG16UI),O===n.UNSIGNED_INT&&(U=n.RG32UI),O===n.BYTE&&(U=n.RG8I),O===n.SHORT&&(U=n.RG16I),O===n.INT&&(U=n.RG32I)),p===n.RGB_INTEGER&&(O===n.UNSIGNED_BYTE&&(U=n.RGB8UI),O===n.UNSIGNED_SHORT&&(U=n.RGB16UI),O===n.UNSIGNED_INT&&(U=n.RGB32UI),O===n.BYTE&&(U=n.RGB8I),O===n.SHORT&&(U=n.RGB16I),O===n.INT&&(U=n.RGB32I)),p===n.RGBA_INTEGER&&(O===n.UNSIGNED_BYTE&&(U=n.RGBA8UI),O===n.UNSIGNED_SHORT&&(U=n.RGBA16UI),O===n.UNSIGNED_INT&&(U=n.RGBA32UI),O===n.BYTE&&(U=n.RGBA8I),O===n.SHORT&&(U=n.RGBA16I),O===n.INT&&(U=n.RGBA32I)),p===n.RGB&&O===n.UNSIGNED_INT_5_9_9_9_REV&&(U=n.RGB9_E5),p===n.RGBA){let gD=eD?rB:zD.getTransfer(K);O===n.FLOAT&&(U=n.RGBA32F),O===n.HALF_FLOAT&&(U=n.RGBA16F),O===n.UNSIGNED_BYTE&&(U=gD===ne?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(U=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(U=n.RGB5_A1)}return(U===n.R16F||U===n.R32F||U===n.RG16F||U===n.RG32F||U===n.RGBA16F||U===n.RGBA32F)&&D.get("EXT_color_buffer_float"),U}function y(T,p){let O;return T?p===null||p===mn||p===Kn?O=n.DEPTH24_STENCIL8:p===ft?O=n.DEPTH32F_STENCIL8:p===Si&&(O=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):p===null||p===mn||p===Kn?O=n.DEPTH_COMPONENT24:p===ft?O=n.DEPTH_COMPONENT32F:p===Si&&(O=n.DEPTH_COMPONENT16),O}function E(T,p){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==Me&&T.minFilter!==Oe?Math.log2(Math.max(p.width,p.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?p.mipmaps.length:1}function w(T){let p=T.target;p.removeEventListener("dispose",w),P(p),p.isVideoTexture&&C.delete(p)}function v(T){let p=T.target;p.removeEventListener("dispose",v),m(p)}function P(T){let p=t.get(T);if(p.__webglInit===void 0)return;let O=T.source,K=c.get(O);if(K){let eD=K[p.__cacheKey];eD.usedTimes--,eD.usedTimes===0&&R(T),Object.keys(K).length===0&&c.delete(O)}t.remove(T)}function R(T){let p=t.get(T);n.deleteTexture(p.__webglTexture);let O=T.source,K=c.get(O);delete K[p.__cacheKey],B.memory.textures--}function m(T){let p=t.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),t.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(p.__webglFramebuffer[K]))for(let eD=0;eD<p.__webglFramebuffer[K].length;eD++)n.deleteFramebuffer(p.__webglFramebuffer[K][eD]);else n.deleteFramebuffer(p.__webglFramebuffer[K]);p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer[K])}else{if(Array.isArray(p.__webglFramebuffer))for(let K=0;K<p.__webglFramebuffer.length;K++)n.deleteFramebuffer(p.__webglFramebuffer[K]);else n.deleteFramebuffer(p.__webglFramebuffer);if(p.__webglDepthbuffer&&n.deleteRenderbuffer(p.__webglDepthbuffer),p.__webglMultisampledFramebuffer&&n.deleteFramebuffer(p.__webglMultisampledFramebuffer),p.__webglColorRenderbuffer)for(let K=0;K<p.__webglColorRenderbuffer.length;K++)p.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(p.__webglColorRenderbuffer[K]);p.__webglDepthRenderbuffer&&n.deleteRenderbuffer(p.__webglDepthRenderbuffer)}let O=T.textures;for(let K=0,eD=O.length;K<eD;K++){let U=t.get(O[K]);U.__webglTexture&&(n.deleteTexture(U.__webglTexture),B.memory.textures--),t.remove(O[K])}t.remove(T)}let M=0;function X(){M=0}function I(){let T=M;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),M+=1,T}function z(T){let p=[];return p.push(T.wrapS),p.push(T.wrapT),p.push(T.wrapR||0),p.push(T.magFilter),p.push(T.minFilter),p.push(T.anisotropy),p.push(T.internalFormat),p.push(T.format),p.push(T.type),p.push(T.generateMipmaps),p.push(T.premultiplyAlpha),p.push(T.flipY),p.push(T.unpackAlignment),p.push(T.colorSpace),p.join()}function $(T,p){let O=t.get(T);if(T.isVideoTexture&&HD(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){let K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_(O,T,p);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+p)}function W(T,p){let O=t.get(T);if(T.version>0&&O.__version!==T.version){_(O,T,p);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+p)}function DD(T,p){let O=t.get(T);if(T.version>0&&O.__version!==T.version){_(O,T,p);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+p)}function J(T,p){let O=t.get(T);if(T.version>0&&O.__version!==T.version){N(O,T,p);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+p)}let iD={[pn]:n.REPEAT,[wt]:n.CLAMP_TO_EDGE,[Mi]:n.MIRRORED_REPEAT},BD={[Me]:n.NEAREST,[Ao]:n.NEAREST_MIPMAP_NEAREST,[jn]:n.NEAREST_MIPMAP_LINEAR,[Oe]:n.LINEAR,[Hi]:n.LINEAR_MIPMAP_NEAREST,[ut]:n.LINEAR_MIPMAP_LINEAR},pD={[Nc]:n.NEVER,[zc]:n.ALWAYS,[Ic]:n.LESS,[ta]:n.LEQUAL,[jc]:n.EQUAL,[Jc]:n.GEQUAL,[Xc]:n.GREATER,[kc]:n.NOTEQUAL};function SD(T,p){if(p.type===ft&&D.has("OES_texture_float_linear")===!1&&(p.magFilter===Oe||p.magFilter===Hi||p.magFilter===jn||p.magFilter===ut||p.minFilter===Oe||p.minFilter===Hi||p.minFilter===jn||p.minFilter===ut)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,iD[p.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,iD[p.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,iD[p.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,BD[p.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,BD[p.minFilter]),p.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,pD[p.compareFunction])),D.has("EXT_texture_filter_anisotropic")===!0){if(p.magFilter===Me||p.minFilter!==jn&&p.minFilter!==ut||p.type===ft&&D.has("OES_texture_float_linear")===!1)return;if(p.anisotropy>1||t.get(p).__currentAnisotropy){let O=D.get("EXT_texture_filter_anisotropic");n.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(p.anisotropy,i.getMaxAnisotropy())),t.get(p).__currentAnisotropy=p.anisotropy}}}function F(T,p){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,p.addEventListener("dispose",w));let K=p.source,eD=c.get(K);eD===void 0&&(eD={},c.set(K,eD));let U=z(p);if(U!==T.__cacheKey){eD[U]===void 0&&(eD[U]={texture:n.createTexture(),usedTimes:0},B.memory.textures++,O=!0),eD[U].usedTimes++;let gD=eD[T.__cacheKey];gD!==void 0&&(eD[T.__cacheKey].usedTimes--,gD.usedTimes===0&&R(p)),T.__cacheKey=U,T.__webglTexture=eD[U].texture}return O}function _(T,p,O){let K=n.TEXTURE_2D;(p.isDataArrayTexture||p.isCompressedArrayTexture)&&(K=n.TEXTURE_2D_ARRAY),p.isData3DTexture&&(K=n.TEXTURE_3D);let eD=F(T,p),U=p.source;e.bindTexture(K,T.__webglTexture,n.TEXTURE0+O);let gD=t.get(U);if(U.version!==gD.__version||eD===!0){e.activeTexture(n.TEXTURE0+O);let CD=zD.getPrimaries(zD.workingColorSpace),AD=p.colorSpace===Zt?null:zD.getPrimaries(p.colorSpace),UD=p.colorSpace===Zt||CD===AD?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,UD);let tD=d(p.image,!1,i.maxTextureSize);tD=se(p,tD);let uD=s.convert(p.format,p.colorSpace),vD=s.convert(p.type),LD=x(p.internalFormat,uD,vD,p.colorSpace,p.isVideoTexture);SD(K,p);let dD,GD=p.mipmaps,ID=p.isVideoTexture!==!0,Be=gD.__version===void 0||eD===!0,S=U.dataReady,oD=E(p,tD);if(p.isDepthTexture)LD=y(p.format===Yn,p.type),Be&&(ID?e.texStorage2D(n.TEXTURE_2D,1,LD,tD.width,tD.height):e.texImage2D(n.TEXTURE_2D,0,LD,tD.width,tD.height,0,uD,vD,null));else if(p.isDataTexture)if(GD.length>0){ID&&Be&&e.texStorage2D(n.TEXTURE_2D,oD,LD,GD[0].width,GD[0].height);for(let G=0,Y=GD.length;G<Y;G++)dD=GD[G],ID?S&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,dD.width,dD.height,uD,vD,dD.data):e.texImage2D(n.TEXTURE_2D,G,LD,dD.width,dD.height,0,uD,vD,dD.data);p.generateMipmaps=!1}else ID?(Be&&e.texStorage2D(n.TEXTURE_2D,oD,LD,tD.width,tD.height),S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,tD.width,tD.height,uD,vD,tD.data)):e.texImage2D(n.TEXTURE_2D,0,LD,tD.width,tD.height,0,uD,vD,tD.data);else if(p.isCompressedTexture)if(p.isCompressedArrayTexture){ID&&Be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,oD,LD,GD[0].width,GD[0].height,tD.depth);for(let G=0,Y=GD.length;G<Y;G++)if(dD=GD[G],p.format!==Ze)if(uD!==null)if(ID){if(S)if(p.layerUpdates.size>0){let hD=bC(dD.width,dD.height,p.format,p.type);for(let aD of p.layerUpdates){let FD=dD.data.subarray(aD*hD/dD.data.BYTES_PER_ELEMENT,(aD+1)*hD/dD.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,aD,dD.width,dD.height,1,uD,FD)}p.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,dD.width,dD.height,tD.depth,uD,dD.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,G,LD,dD.width,dD.height,tD.depth,0,dD.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ID?S&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,G,0,0,0,dD.width,dD.height,tD.depth,uD,vD,dD.data):e.texImage3D(n.TEXTURE_2D_ARRAY,G,LD,dD.width,dD.height,tD.depth,0,uD,vD,dD.data)}else{ID&&Be&&e.texStorage2D(n.TEXTURE_2D,oD,LD,GD[0].width,GD[0].height);for(let G=0,Y=GD.length;G<Y;G++)dD=GD[G],p.format!==Ze?uD!==null?ID?S&&e.compressedTexSubImage2D(n.TEXTURE_2D,G,0,0,dD.width,dD.height,uD,dD.data):e.compressedTexImage2D(n.TEXTURE_2D,G,LD,dD.width,dD.height,0,dD.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ID?S&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,dD.width,dD.height,uD,vD,dD.data):e.texImage2D(n.TEXTURE_2D,G,LD,dD.width,dD.height,0,uD,vD,dD.data)}else if(p.isDataArrayTexture)if(ID){if(Be&&e.texStorage3D(n.TEXTURE_2D_ARRAY,oD,LD,tD.width,tD.height,tD.depth),S)if(p.layerUpdates.size>0){let G=bC(tD.width,tD.height,p.format,p.type);for(let Y of p.layerUpdates){let hD=tD.data.subarray(Y*G/tD.data.BYTES_PER_ELEMENT,(Y+1)*G/tD.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,tD.width,tD.height,1,uD,vD,hD)}p.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tD.width,tD.height,tD.depth,uD,vD,tD.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,LD,tD.width,tD.height,tD.depth,0,uD,vD,tD.data);else if(p.isData3DTexture)ID?(Be&&e.texStorage3D(n.TEXTURE_3D,oD,LD,tD.width,tD.height,tD.depth),S&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tD.width,tD.height,tD.depth,uD,vD,tD.data)):e.texImage3D(n.TEXTURE_3D,0,LD,tD.width,tD.height,tD.depth,0,uD,vD,tD.data);else if(p.isFramebufferTexture){if(Be)if(ID)e.texStorage2D(n.TEXTURE_2D,oD,LD,tD.width,tD.height);else{let G=tD.width,Y=tD.height;for(let hD=0;hD<oD;hD++)e.texImage2D(n.TEXTURE_2D,hD,LD,G,Y,0,uD,vD,null),G>>=1,Y>>=1}}else if(GD.length>0){if(ID&&Be){let G=RD(GD[0]);e.texStorage2D(n.TEXTURE_2D,oD,LD,G.width,G.height)}for(let G=0,Y=GD.length;G<Y;G++)dD=GD[G],ID?S&&e.texSubImage2D(n.TEXTURE_2D,G,0,0,uD,vD,dD):e.texImage2D(n.TEXTURE_2D,G,LD,uD,vD,dD);p.generateMipmaps=!1}else if(ID){if(Be){let G=RD(tD);e.texStorage2D(n.TEXTURE_2D,oD,LD,G.width,G.height)}S&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,uD,vD,tD)}else e.texImage2D(n.TEXTURE_2D,0,LD,uD,vD,tD);A(p)&&h(K),gD.__version=U.version,p.onUpdate&&p.onUpdate(p)}T.__version=p.version}function N(T,p,O){if(p.image.length!==6)return;let K=F(T,p),eD=p.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+O);let U=t.get(eD);if(eD.version!==U.__version||K===!0){e.activeTexture(n.TEXTURE0+O);let gD=zD.getPrimaries(zD.workingColorSpace),CD=p.colorSpace===Zt?null:zD.getPrimaries(p.colorSpace),AD=p.colorSpace===Zt||gD===CD?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,p.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,p.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,AD);let UD=p.isCompressedTexture||p.image[0].isCompressedTexture,tD=p.image[0]&&p.image[0].isDataTexture,uD=[];for(let Y=0;Y<6;Y++)!UD&&!tD?uD[Y]=d(p.image[Y],!0,i.maxCubemapSize):uD[Y]=tD?p.image[Y].image:p.image[Y],uD[Y]=se(p,uD[Y]);let vD=uD[0],LD=s.convert(p.format,p.colorSpace),dD=s.convert(p.type),GD=x(p.internalFormat,LD,dD,p.colorSpace),ID=p.isVideoTexture!==!0,Be=U.__version===void 0||K===!0,S=eD.dataReady,oD=E(p,vD);SD(n.TEXTURE_CUBE_MAP,p);let G;if(UD){ID&&Be&&e.texStorage2D(n.TEXTURE_CUBE_MAP,oD,GD,vD.width,vD.height);for(let Y=0;Y<6;Y++){G=uD[Y].mipmaps;for(let hD=0;hD<G.length;hD++){let aD=G[hD];p.format!==Ze?LD!==null?ID?S&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,hD,0,0,aD.width,aD.height,LD,aD.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,hD,GD,aD.width,aD.height,0,aD.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ID?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,hD,0,0,aD.width,aD.height,LD,dD,aD.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,hD,GD,aD.width,aD.height,0,LD,dD,aD.data)}}}else{if(G=p.mipmaps,ID&&Be){G.length>0&&oD++;let Y=RD(uD[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,oD,GD,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(tD){ID?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,uD[Y].width,uD[Y].height,LD,dD,uD[Y].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,GD,uD[Y].width,uD[Y].height,0,LD,dD,uD[Y].data);for(let hD=0;hD<G.length;hD++){let FD=G[hD].image[Y].image;ID?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,hD+1,0,0,FD.width,FD.height,LD,dD,FD.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,hD+1,GD,FD.width,FD.height,0,LD,dD,FD.data)}}else{ID?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,LD,dD,uD[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,GD,LD,dD,uD[Y]);for(let hD=0;hD<G.length;hD++){let aD=G[hD];ID?S&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,hD+1,0,0,LD,dD,aD.image[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,hD+1,GD,LD,dD,aD.image[Y])}}}A(p)&&h(n.TEXTURE_CUBE_MAP),U.__version=eD.version,p.onUpdate&&p.onUpdate(p)}T.__version=p.version}function Z(T,p,O,K,eD,U){let gD=s.convert(O.format,O.colorSpace),CD=s.convert(O.type),AD=x(O.internalFormat,gD,CD,O.colorSpace),UD=t.get(p),tD=t.get(O);if(tD.__renderTarget=p,!UD.__hasExternalTextures){let uD=Math.max(1,p.width>>U),vD=Math.max(1,p.height>>U);eD===n.TEXTURE_3D||eD===n.TEXTURE_2D_ARRAY?e.texImage3D(eD,U,AD,uD,vD,p.depth,0,gD,CD,null):e.texImage2D(eD,U,AD,uD,vD,0,gD,CD,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),JD(p)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,eD,tD.__webglTexture,0,XD(p)):(eD===n.TEXTURE_2D||eD>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&eD<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,K,eD,tD.__webglTexture,U),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Q(T,p,O){if(n.bindRenderbuffer(n.RENDERBUFFER,T),p.depthBuffer){let K=p.depthTexture,eD=K&&K.isDepthTexture?K.type:null,U=y(p.stencilBuffer,eD),gD=p.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,CD=XD(p);JD(p)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,CD,U,p.width,p.height):O?n.renderbufferStorageMultisample(n.RENDERBUFFER,CD,U,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,U,p.width,p.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,gD,n.RENDERBUFFER,T)}else{let K=p.textures;for(let eD=0;eD<K.length;eD++){let U=K[eD],gD=s.convert(U.format,U.colorSpace),CD=s.convert(U.type),AD=x(U.internalFormat,gD,CD,U.colorSpace),UD=XD(p);O&&JD(p)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,UD,AD,p.width,p.height):JD(p)?r.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,UD,AD,p.width,p.height):n.renderbufferStorage(n.RENDERBUFFER,AD,p.width,p.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rD(T,p){if(p&&p.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(p.depthTexture&&p.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=t.get(p.depthTexture);K.__renderTarget=p,(!K.__webglTexture||p.depthTexture.image.width!==p.width||p.depthTexture.image.height!==p.height)&&(p.depthTexture.image.width=p.width,p.depthTexture.image.height=p.height,p.depthTexture.needsUpdate=!0),$(p.depthTexture,0);let eD=K.__webglTexture,U=XD(p);if(p.depthTexture.format===Jn)JD(p)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,eD,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,eD,0);else if(p.depthTexture.format===Yn)JD(p)?r.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,eD,0,U):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,eD,0);else throw new Error("Unknown depthTexture format")}function lD(T){let p=t.get(T),O=T.isWebGLCubeRenderTarget===!0;if(p.__boundDepthTexture!==T.depthTexture){let K=T.depthTexture;if(p.__depthDisposeCallback&&p.__depthDisposeCallback(),K){let eD=()=>{delete p.__boundDepthTexture,delete p.__depthDisposeCallback,K.removeEventListener("dispose",eD)};K.addEventListener("dispose",eD),p.__depthDisposeCallback=eD}p.__boundDepthTexture=K}if(T.depthTexture&&!p.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");rD(p.__webglFramebuffer,T)}else if(O){p.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer[K]),p.__webglDepthbuffer[K]===void 0)p.__webglDepthbuffer[K]=n.createRenderbuffer(),Q(p.__webglDepthbuffer[K],T,!1);else{let eD=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,U=p.__webglDepthbuffer[K];n.bindRenderbuffer(n.RENDERBUFFER,U),n.framebufferRenderbuffer(n.FRAMEBUFFER,eD,n.RENDERBUFFER,U)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,p.__webglFramebuffer),p.__webglDepthbuffer===void 0)p.__webglDepthbuffer=n.createRenderbuffer(),Q(p.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,eD=p.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,eD),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,eD)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function TD(T,p,O){let K=t.get(T);p!==void 0&&Z(K.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&lD(T)}function WD(T){let p=T.texture,O=t.get(T),K=t.get(p);T.addEventListener("dispose",v);let eD=T.textures,U=T.isWebGLCubeRenderTarget===!0,gD=eD.length>1;if(gD||(K.__webglTexture===void 0&&(K.__webglTexture=n.createTexture()),K.__version=p.version,B.memory.textures++),U){O.__webglFramebuffer=[];for(let CD=0;CD<6;CD++)if(p.mipmaps&&p.mipmaps.length>0){O.__webglFramebuffer[CD]=[];for(let AD=0;AD<p.mipmaps.length;AD++)O.__webglFramebuffer[CD][AD]=n.createFramebuffer()}else O.__webglFramebuffer[CD]=n.createFramebuffer()}else{if(p.mipmaps&&p.mipmaps.length>0){O.__webglFramebuffer=[];for(let CD=0;CD<p.mipmaps.length;CD++)O.__webglFramebuffer[CD]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(gD)for(let CD=0,AD=eD.length;CD<AD;CD++){let UD=t.get(eD[CD]);UD.__webglTexture===void 0&&(UD.__webglTexture=n.createTexture(),B.memory.textures++)}if(T.samples>0&&JD(T)===!1){O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let CD=0;CD<eD.length;CD++){let AD=eD[CD];O.__webglColorRenderbuffer[CD]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[CD]);let UD=s.convert(AD.format,AD.colorSpace),tD=s.convert(AD.type),uD=x(AD.internalFormat,UD,tD,AD.colorSpace,T.isXRRenderTarget===!0),vD=XD(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,vD,uD,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+CD,n.RENDERBUFFER,O.__webglColorRenderbuffer[CD])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),Q(O.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(U){e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),SD(n.TEXTURE_CUBE_MAP,p);for(let CD=0;CD<6;CD++)if(p.mipmaps&&p.mipmaps.length>0)for(let AD=0;AD<p.mipmaps.length;AD++)Z(O.__webglFramebuffer[CD][AD],T,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+CD,AD);else Z(O.__webglFramebuffer[CD],T,p,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+CD,0);A(p)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gD){for(let CD=0,AD=eD.length;CD<AD;CD++){let UD=eD[CD],tD=t.get(UD);e.bindTexture(n.TEXTURE_2D,tD.__webglTexture),SD(n.TEXTURE_2D,UD),Z(O.__webglFramebuffer,T,UD,n.COLOR_ATTACHMENT0+CD,n.TEXTURE_2D,0),A(UD)&&h(n.TEXTURE_2D)}e.unbindTexture()}else{let CD=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(CD=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(CD,K.__webglTexture),SD(CD,p),p.mipmaps&&p.mipmaps.length>0)for(let AD=0;AD<p.mipmaps.length;AD++)Z(O.__webglFramebuffer[AD],T,p,n.COLOR_ATTACHMENT0,CD,AD);else Z(O.__webglFramebuffer,T,p,n.COLOR_ATTACHMENT0,CD,0);A(p)&&h(CD),e.unbindTexture()}T.depthBuffer&&lD(T)}function ED(T){let p=T.textures;for(let O=0,K=p.length;O<K;O++){let eD=p[O];if(A(eD)){let U=g(T),gD=t.get(eD).__webglTexture;e.bindTexture(U,gD),h(U),e.unbindTexture()}}}let De=[],q=[];function Pe(T){if(T.samples>0){if(JD(T)===!1){let p=T.textures,O=T.width,K=T.height,eD=n.COLOR_BUFFER_BIT,U=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,gD=t.get(T),CD=p.length>1;if(CD)for(let AD=0;AD<p.length;AD++)e.bindFramebuffer(n.FRAMEBUFFER,gD.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+AD,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,gD.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+AD,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,gD.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gD.__webglFramebuffer);for(let AD=0;AD<p.length;AD++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(eD|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(eD|=n.STENCIL_BUFFER_BIT)),CD){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,gD.__webglColorRenderbuffer[AD]);let UD=t.get(p[AD]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,UD,0)}n.blitFramebuffer(0,0,O,K,0,0,O,K,eD,n.NEAREST),o===!0&&(De.length=0,q.length=0,De.push(n.COLOR_ATTACHMENT0+AD),T.depthBuffer&&T.resolveDepthBuffer===!1&&(De.push(U),q.push(U),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,q)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,De))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),CD)for(let AD=0;AD<p.length;AD++){e.bindFramebuffer(n.FRAMEBUFFER,gD.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+AD,n.RENDERBUFFER,gD.__webglColorRenderbuffer[AD]);let UD=t.get(p[AD]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,gD.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+AD,n.TEXTURE_2D,UD,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,gD.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&o){let p=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[p])}}}function XD(T){return Math.min(i.maxSamples,T.samples)}function JD(T){let p=t.get(T);return T.samples>0&&D.has("WEBGL_multisampled_render_to_texture")===!0&&p.__useRenderToTexture!==!1}function HD(T){let p=B.render.frame;C.get(T)!==p&&(C.set(T,p),T.update())}function se(T,p){let O=T.colorSpace,K=T.format,eD=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Le&&O!==Zt&&(zD.getTransfer(O)===ne?(K!==Ze||eD!==St)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),p}function RD(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(f.width=T.naturalWidth||T.width,f.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(f.width=T.displayWidth,f.height=T.displayHeight):(f.width=T.width,f.height=T.height),f}this.allocateTextureUnit=I,this.resetTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=DD,this.setTextureCube=J,this.rebindTextures=TD,this.setupRenderTarget=WD,this.updateRenderTargetMipmap=ED,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=lD,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=JD}function $u(n,D){function e(t,i=Zt){let s,B=zD.getTransfer(i);if(t===St)return n.UNSIGNED_BYTE;if(t===po)return n.UNSIGNED_SHORT_4_4_4_4;if(t===mo)return n.UNSIGNED_SHORT_5_5_5_1;if(t===GC)return n.UNSIGNED_INT_5_9_9_9_REV;if(t===zC)return n.BYTE;if(t===WC)return n.SHORT;if(t===Si)return n.UNSIGNED_SHORT;if(t===uo)return n.INT;if(t===mn)return n.UNSIGNED_INT;if(t===ft)return n.FLOAT;if(t===ki)return n.HALF_FLOAT;if(t===UC)return n.ALPHA;if(t===ZC)return n.RGB;if(t===Ze)return n.RGBA;if(t===KC)return n.LUMINANCE;if(t===YC)return n.LUMINANCE_ALPHA;if(t===Jn)return n.DEPTH_COMPONENT;if(t===Yn)return n.DEPTH_STENCIL;if(t===yo)return n.RED;if(t===bo)return n.RED_INTEGER;if(t===$C)return n.RG;if(t===Ro)return n.RG_INTEGER;if(t===go)return n.RGBA_INTEGER;if(t===Hs||t===_s||t===ws||t===vs)if(B===ne)if(s=D.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(t===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===_s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=D.get("WEBGL_compressed_texture_s3tc"),s!==null){if(t===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===_s)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===vs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(t===Cr||t===ar||t===cr||t===lr)if(s=D.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(t===Cr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===ar)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===cr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===lr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(t===hr||t===Ar||t===ur)if(s=D.get("WEBGL_compressed_texture_etc"),s!==null){if(t===hr||t===Ar)return B===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(t===ur)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(t===dr||t===pr||t===mr||t===yr||t===br||t===Rr||t===gr||t===xr||t===Tr||t===Hr||t===_r||t===wr||t===vr||t===Mr)if(s=D.get("WEBGL_compressed_texture_astc"),s!==null){if(t===dr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===pr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===mr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===yr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===br)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Rr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===gr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===xr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Tr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Hr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===_r)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===wr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===vr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Mr)return B===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(t===Ms||t===Sr||t===Lr)if(s=D.get("EXT_texture_compression_bptc"),s!==null){if(t===Ms)return B===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Sr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Lr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(t===QC||t===Vr||t===qr||t===Er)if(s=D.get("EXT_texture_compression_rgtc"),s!==null){if(t===Ms)return s.COMPRESSED_RED_RGTC1_EXT;if(t===Vr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===qr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Er)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return t===Kn?n.UNSIGNED_INT_24_8:n[t]!==void 0?n[t]:null}return{convert:e}}var Kr=class extends ue{constructor(D=[]){super(),this.isArrayCamera=!0,this.cameras=D}},Ke=class extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qu={type:"move"},vi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(D){return this._targetRay!==null&&this._targetRay.dispatchEvent(D),this._grip!==null&&this._grip.dispatchEvent(D),this._hand!==null&&this._hand.dispatchEvent(D),this}connect(D){if(D&&D.hand){let e=this._hand;if(e)for(let t of D.hand.values())this._getHandJoint(e,t)}return this.dispatchEvent({type:"connected",data:D}),this}disconnect(D){return this.dispatchEvent({type:"disconnected",data:D}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(D,e,t){let i=null,s=null,B=null,r=this._targetRay,o=this._grip,f=this._hand;if(D&&e.session.visibilityState!=="visible-blurred"){if(f&&D.hand){B=!0;for(let d of D.hand.values()){let A=e.getJointPose(d,t),h=this._getHandJoint(f,d);A!==null&&(h.matrix.fromArray(A.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=A.radius),h.visible=A!==null}let C=f.joints["index-finger-tip"],a=f.joints["thumb-tip"],c=C.position.distanceTo(a.position),l=.02,u=.005;f.inputState.pinching&&c>l+u?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:D.handedness,target:this})):!f.inputState.pinching&&c<=l-u&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:D.handedness,target:this}))}else o!==null&&D.gripSpace&&(s=e.getPose(D.gripSpace,t),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1));r!==null&&(i=e.getPose(D.targetRaySpace,t),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return r!==null&&(r.visible=i!==null),o!==null&&(o.visible=s!==null),f!==null&&(f.visible=B!==null),this}_getHandJoint(D,e){if(D.joints[e.jointName]===void 0){let t=new Ke;t.matrixAutoUpdate=!1,t.visible=!1,D.joints[e.jointName]=t,D.add(t)}return D.joints[e.jointName]}},Dd=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ed=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yr=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(D,e,t){if(this.texture===null){let i=new xe,s=D.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=t.depthNear||e.depthFar!=t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(D){if(this.texture!==null&&this.mesh===null){let e=D.cameras[0].viewport,t=new dt({vertexShader:Dd,fragmentShader:ed,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new KD(new Os(20,20),t)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$r=class extends Lt{constructor(D,e){super();let t=this,i=null,s=1,B=null,r="local-floor",o=1,f=null,C=null,a=null,c=null,l=null,u=null,d=new Yr,A=e.getContextAttributes(),h=null,g=null,x=[],y=[],E=new wD,w=null,v=new ue;v.viewport=new YD;let P=new ue;P.viewport=new YD;let R=[v,P],m=new Kr,M=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(_){let N=x[_];return N===void 0&&(N=new vi,x[_]=N),N.getTargetRaySpace()},this.getControllerGrip=function(_){let N=x[_];return N===void 0&&(N=new vi,x[_]=N),N.getGripSpace()},this.getHand=function(_){let N=x[_];return N===void 0&&(N=new vi,x[_]=N),N.getHandSpace()};function I(_){let N=y.indexOf(_.inputSource);if(N===-1)return;let Z=x[N];Z!==void 0&&(Z.update(_.inputSource,_.frame,f||B),Z.dispatchEvent({type:_.type,data:_.inputSource}))}function z(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",$);for(let _=0;_<x.length;_++){let N=y[_];N!==null&&(y[_]=null,x[_].disconnect(N))}M=null,X=null,d.reset(),D.setRenderTarget(h),l=null,c=null,a=null,i=null,g=null,F.stop(),t.isPresenting=!1,D.setPixelRatio(w),D.setSize(E.width,E.height,!1),t.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(_){s=_,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(_){r=_,t.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||B},this.setReferenceSpace=function(_){f=_},this.getBaseLayer=function(){return c!==null?c:l},this.getBinding=function(){return a},this.getFrame=function(){return u},this.getSession=function(){return i},this.setSession=async function(_){if(i=_,i!==null){if(h=D.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",z),i.addEventListener("inputsourceschange",$),A.xrCompatible!==!0&&await e.makeXRCompatible(),w=D.getPixelRatio(),D.getSize(E),i.renderState.layers===void 0){let N={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};l=new XRWebGLLayer(i,e,N),i.updateRenderState({baseLayer:l}),D.setPixelRatio(1),D.setSize(l.framebufferWidth,l.framebufferHeight,!1),g=new Vt(l.framebufferWidth,l.framebufferHeight,{format:Ze,type:St,colorSpace:D.outputColorSpace,stencilBuffer:A.stencil})}else{let N=null,Z=null,Q=null;A.depth&&(Q=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,N=A.stencil?Yn:Jn,Z=A.stencil?Kn:mn);let rD={colorFormat:e.RGBA8,depthFormat:Q,scaleFactor:s};a=new XRWebGLBinding(i,e),c=a.createProjectionLayer(rD),i.updateRenderState({layers:[c]}),D.setPixelRatio(1),D.setSize(c.textureWidth,c.textureHeight,!1),g=new Vt(c.textureWidth,c.textureHeight,{format:Ze,type:St,depthTexture:new Ns(c.textureWidth,c.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:A.stencil,colorSpace:D.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(o),f=null,B=await i.requestReferenceSpace(r),F.setContext(i),F.start(),t.isPresenting=!0,t.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return d.getDepthTexture()};function $(_){for(let N=0;N<_.removed.length;N++){let Z=_.removed[N],Q=y.indexOf(Z);Q>=0&&(y[Q]=null,x[Q].disconnect(Z))}for(let N=0;N<_.added.length;N++){let Z=_.added[N],Q=y.indexOf(Z);if(Q===-1){for(let lD=0;lD<x.length;lD++)if(lD>=y.length){y.push(Z),Q=lD;break}else if(y[lD]===null){y[lD]=Z,Q=lD;break}if(Q===-1)break}let rD=x[Q];rD&&rD.connect(Z)}}let W=new H,DD=new H;function J(_,N,Z){W.setFromMatrixPosition(N.matrixWorld),DD.setFromMatrixPosition(Z.matrixWorld);let Q=W.distanceTo(DD),rD=N.projectionMatrix.elements,lD=Z.projectionMatrix.elements,TD=rD[14]/(rD[10]-1),WD=rD[14]/(rD[10]+1),ED=(rD[9]+1)/rD[5],De=(rD[9]-1)/rD[5],q=(rD[8]-1)/rD[0],Pe=(lD[8]+1)/lD[0],XD=TD*q,JD=TD*Pe,HD=Q/(-q+Pe),se=HD*-q;if(N.matrixWorld.decompose(_.position,_.quaternion,_.scale),_.translateX(se),_.translateZ(HD),_.matrixWorld.compose(_.position,_.quaternion,_.scale),_.matrixWorldInverse.copy(_.matrixWorld).invert(),rD[10]===-1)_.projectionMatrix.copy(N.projectionMatrix),_.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{let RD=TD+HD,T=WD+HD,p=XD-se,O=JD+(Q-se),K=ED*WD/T*RD,eD=De*WD/T*RD;_.projectionMatrix.makePerspective(p,O,K,eD,RD,T),_.projectionMatrixInverse.copy(_.projectionMatrix).invert()}}function iD(_,N){N===null?_.matrixWorld.copy(_.matrix):_.matrixWorld.multiplyMatrices(N.matrixWorld,_.matrix),_.matrixWorldInverse.copy(_.matrixWorld).invert()}this.updateCamera=function(_){if(i===null)return;let N=_.near,Z=_.far;d.texture!==null&&(d.depthNear>0&&(N=d.depthNear),d.depthFar>0&&(Z=d.depthFar)),m.near=P.near=v.near=N,m.far=P.far=v.far=Z,(M!==m.near||X!==m.far)&&(i.updateRenderState({depthNear:m.near,depthFar:m.far}),M=m.near,X=m.far),v.layers.mask=_.layers.mask|2,P.layers.mask=_.layers.mask|4,m.layers.mask=v.layers.mask|P.layers.mask;let Q=_.parent,rD=m.cameras;iD(m,Q);for(let lD=0;lD<rD.length;lD++)iD(rD[lD],Q);rD.length===2?J(m,v,P):m.projectionMatrix.copy(v.projectionMatrix),BD(_,m,Q)};function BD(_,N,Z){Z===null?_.matrix.copy(N.matrixWorld):(_.matrix.copy(Z.matrixWorld),_.matrix.invert(),_.matrix.multiply(N.matrixWorld)),_.matrix.decompose(_.position,_.quaternion,_.scale),_.updateMatrixWorld(!0),_.projectionMatrix.copy(N.projectionMatrix),_.projectionMatrixInverse.copy(N.projectionMatrixInverse),_.isPerspectiveCamera&&(_.fov=Di*2*Math.atan(1/_.projectionMatrix.elements[5]),_.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(c===null&&l===null))return o},this.setFoveation=function(_){o=_,c!==null&&(c.fixedFoveation=_),l!==null&&l.fixedFoveation!==void 0&&(l.fixedFoveation=_)},this.hasDepthSensing=function(){return d.texture!==null},this.getDepthSensingMesh=function(){return d.getMesh(m)};let pD=null;function SD(_,N){if(C=N.getViewerPose(f||B),u=N,C!==null){let Z=C.views;l!==null&&(D.setRenderTargetFramebuffer(g,l.framebuffer),D.setRenderTarget(g));let Q=!1;Z.length!==m.cameras.length&&(m.cameras.length=0,Q=!0);for(let lD=0;lD<Z.length;lD++){let TD=Z[lD],WD=null;if(l!==null)WD=l.getViewport(TD);else{let De=a.getViewSubImage(c,TD);WD=De.viewport,lD===0&&(D.setRenderTargetTextures(g,De.colorTexture,c.ignoreDepthValues?void 0:De.depthStencilTexture),D.setRenderTarget(g))}let ED=R[lD];ED===void 0&&(ED=new ue,ED.layers.enable(lD),ED.viewport=new YD,R[lD]=ED),ED.matrix.fromArray(TD.transform.matrix),ED.matrix.decompose(ED.position,ED.quaternion,ED.scale),ED.projectionMatrix.fromArray(TD.projectionMatrix),ED.projectionMatrixInverse.copy(ED.projectionMatrix).invert(),ED.viewport.set(WD.x,WD.y,WD.width,WD.height),lD===0&&(m.matrix.copy(ED.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),Q===!0&&m.cameras.push(ED)}let rD=i.enabledFeatures;if(rD&&rD.includes("depth-sensing")){let lD=a.getDepthInformation(Z[0]);lD&&lD.isValid&&lD.texture&&d.init(D,lD,i.renderState)}}for(let Z=0;Z<x.length;Z++){let Q=y[Z],rD=x[Z];Q!==null&&rD!==void 0&&rD.update(Q,N,f||B)}pD&&pD(_,N),N.detectedPlanes&&t.dispatchEvent({type:"planesdetected",data:N}),u=null}let F=new Ba;F.setAnimationLoop(SD),this.setAnimationLoop=function(_){pD=_},this.dispose=function(){}}},ln=new $e,td=new VD;function nd(n,D){function e(A,h){A.matrixAutoUpdate===!0&&A.updateMatrix(),h.value.copy(A.matrix)}function t(A,h){h.color.getRGB(A.fogColor.value,sa(n)),h.isFog?(A.fogNear.value=h.near,A.fogFar.value=h.far):h.isFogExp2&&(A.fogDensity.value=h.density)}function i(A,h,g,x,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(A,h):h.isMeshToonMaterial?(s(A,h),a(A,h)):h.isMeshPhongMaterial?(s(A,h),C(A,h)):h.isMeshStandardMaterial?(s(A,h),c(A,h),h.isMeshPhysicalMaterial&&l(A,h,y)):h.isMeshMatcapMaterial?(s(A,h),u(A,h)):h.isMeshDepthMaterial?s(A,h):h.isMeshDistanceMaterial?(s(A,h),d(A,h)):h.isMeshNormalMaterial?s(A,h):h.isLineBasicMaterial?(B(A,h),h.isLineDashedMaterial&&r(A,h)):h.isPointsMaterial?o(A,h,g,x):h.isSpriteMaterial?f(A,h):h.isShadowMaterial?(A.color.value.copy(h.color),A.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(A,h){A.opacity.value=h.opacity,h.color&&A.diffuse.value.copy(h.color),h.emissive&&A.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(A.map.value=h.map,e(h.map,A.mapTransform)),h.alphaMap&&(A.alphaMap.value=h.alphaMap,e(h.alphaMap,A.alphaMapTransform)),h.bumpMap&&(A.bumpMap.value=h.bumpMap,e(h.bumpMap,A.bumpMapTransform),A.bumpScale.value=h.bumpScale,h.side===ve&&(A.bumpScale.value*=-1)),h.normalMap&&(A.normalMap.value=h.normalMap,e(h.normalMap,A.normalMapTransform),A.normalScale.value.copy(h.normalScale),h.side===ve&&A.normalScale.value.negate()),h.displacementMap&&(A.displacementMap.value=h.displacementMap,e(h.displacementMap,A.displacementMapTransform),A.displacementScale.value=h.displacementScale,A.displacementBias.value=h.displacementBias),h.emissiveMap&&(A.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,A.emissiveMapTransform)),h.specularMap&&(A.specularMap.value=h.specularMap,e(h.specularMap,A.specularMapTransform)),h.alphaTest>0&&(A.alphaTest.value=h.alphaTest);let g=D.get(h),x=g.envMap,y=g.envMapRotation;x&&(A.envMap.value=x,ln.copy(y),ln.x*=-1,ln.y*=-1,ln.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),A.envMapRotation.value.setFromMatrix4(td.makeRotationFromEuler(ln)),A.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=h.reflectivity,A.ior.value=h.ior,A.refractionRatio.value=h.refractionRatio),h.lightMap&&(A.lightMap.value=h.lightMap,A.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,A.lightMapTransform)),h.aoMap&&(A.aoMap.value=h.aoMap,A.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,A.aoMapTransform))}function B(A,h){A.diffuse.value.copy(h.color),A.opacity.value=h.opacity,h.map&&(A.map.value=h.map,e(h.map,A.mapTransform))}function r(A,h){A.dashSize.value=h.dashSize,A.totalSize.value=h.dashSize+h.gapSize,A.scale.value=h.scale}function o(A,h,g,x){A.diffuse.value.copy(h.color),A.opacity.value=h.opacity,A.size.value=h.size*g,A.scale.value=x*.5,h.map&&(A.map.value=h.map,e(h.map,A.uvTransform)),h.alphaMap&&(A.alphaMap.value=h.alphaMap,e(h.alphaMap,A.alphaMapTransform)),h.alphaTest>0&&(A.alphaTest.value=h.alphaTest)}function f(A,h){A.diffuse.value.copy(h.color),A.opacity.value=h.opacity,A.rotation.value=h.rotation,h.map&&(A.map.value=h.map,e(h.map,A.mapTransform)),h.alphaMap&&(A.alphaMap.value=h.alphaMap,e(h.alphaMap,A.alphaMapTransform)),h.alphaTest>0&&(A.alphaTest.value=h.alphaTest)}function C(A,h){A.specular.value.copy(h.specular),A.shininess.value=Math.max(h.shininess,1e-4)}function a(A,h){h.gradientMap&&(A.gradientMap.value=h.gradientMap)}function c(A,h){A.metalness.value=h.metalness,h.metalnessMap&&(A.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,A.metalnessMapTransform)),A.roughness.value=h.roughness,h.roughnessMap&&(A.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,A.roughnessMapTransform)),h.envMap&&(A.envMapIntensity.value=h.envMapIntensity)}function l(A,h,g){A.ior.value=h.ior,h.sheen>0&&(A.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),A.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(A.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,A.sheenColorMapTransform)),h.sheenRoughnessMap&&(A.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,A.sheenRoughnessMapTransform))),h.clearcoat>0&&(A.clearcoat.value=h.clearcoat,A.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(A.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,A.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(A.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ve&&A.clearcoatNormalScale.value.negate())),h.dispersion>0&&(A.dispersion.value=h.dispersion),h.iridescence>0&&(A.iridescence.value=h.iridescence,A.iridescenceIOR.value=h.iridescenceIOR,A.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(A.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,A.iridescenceMapTransform)),h.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),h.transmission>0&&(A.transmission.value=h.transmission,A.transmissionSamplerMap.value=g.texture,A.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(A.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,A.transmissionMapTransform)),A.thickness.value=h.thickness,h.thicknessMap&&(A.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=h.attenuationDistance,A.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(A.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(A.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=h.specularIntensity,A.specularColor.value.copy(h.specularColor),h.specularColorMap&&(A.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,A.specularColorMapTransform)),h.specularIntensityMap&&(A.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,A.specularIntensityMapTransform))}function u(A,h){h.matcap&&(A.matcap.value=h.matcap)}function d(A,h){let g=D.get(h).light;A.referencePosition.value.setFromMatrixPosition(g.matrixWorld),A.nearDistance.value=g.shadow.camera.near,A.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function id(n,D,e,t){let i={},s={},B=[],r=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(g,x){let y=x.program;t.uniformBlockBinding(g,y)}function f(g,x){let y=i[g.id];y===void 0&&(u(g),y=C(g),i[g.id]=y,g.addEventListener("dispose",A));let E=x.program;t.updateUBOMapping(g,E);let w=D.render.frame;s[g.id]!==w&&(c(g),s[g.id]=w)}function C(g){let x=a();g.__bindingPointIndex=x;let y=n.createBuffer(),E=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function a(){for(let g=0;g<r;g++)if(B.indexOf(g)===-1)return B.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(g){let x=i[g.id],y=g.uniforms,E=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,v=y.length;w<v;w++){let P=Array.isArray(y[w])?y[w]:[y[w]];for(let R=0,m=P.length;R<m;R++){let M=P[R];if(l(M,w,R,E)===!0){let X=M.__offset,I=Array.isArray(M.value)?M.value:[M.value],z=0;for(let $=0;$<I.length;$++){let W=I[$],DD=d(W);typeof W=="number"||typeof W=="boolean"?(M.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,X+z,M.__data)):W.isMatrix3?(M.__data[0]=W.elements[0],M.__data[1]=W.elements[1],M.__data[2]=W.elements[2],M.__data[3]=0,M.__data[4]=W.elements[3],M.__data[5]=W.elements[4],M.__data[6]=W.elements[5],M.__data[7]=0,M.__data[8]=W.elements[6],M.__data[9]=W.elements[7],M.__data[10]=W.elements[8],M.__data[11]=0):(W.toArray(M.__data,z),z+=DD.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,M.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function l(g,x,y,E){let w=g.value,v=x+"_"+y;if(E[v]===void 0)return typeof w=="number"||typeof w=="boolean"?E[v]=w:E[v]=w.clone(),!0;{let P=E[v];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return E[v]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function u(g){let x=g.uniforms,y=0,E=16;for(let v=0,P=x.length;v<P;v++){let R=Array.isArray(x[v])?x[v]:[x[v]];for(let m=0,M=R.length;m<M;m++){let X=R[m],I=Array.isArray(X.value)?X.value:[X.value];for(let z=0,$=I.length;z<$;z++){let W=I[z],DD=d(W),J=y%E,iD=J%DD.boundary,BD=J+iD;y+=iD,BD!==0&&E-BD<DD.storage&&(y+=E-BD),X.__data=new Float32Array(DD.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=DD.storage}}}let w=y%E;return w>0&&(y+=E-w),g.__size=y,g.__cache={},this}function d(g){let x={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(x.boundary=4,x.storage=4):g.isVector2?(x.boundary=8,x.storage=8):g.isVector3||g.isColor?(x.boundary=16,x.storage=12):g.isVector4?(x.boundary=16,x.storage=16):g.isMatrix3?(x.boundary=48,x.storage=48):g.isMatrix4?(x.boundary=64,x.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),x}function A(g){let x=g.target;x.removeEventListener("dispose",A);let y=B.indexOf(x.__bindingPointIndex);B.splice(y,1),n.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function h(){for(let g in i)n.deleteBuffer(i[g]);B=[],i={},s={}}return{bind:o,update:f,dispose:h}}var Is=class{constructor(D={}){let{canvas:e=o3(),context:t=null,depth:i=!0,stencil:s=!1,alpha:B=!1,antialias:r=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:f=!1,powerPreference:C="default",failIfMajorPerformanceCaveat:a=!1,reverseDepthBuffer:c=!1}=D;this.isWebGLRenderer=!0;let l;if(t!==null){if(typeof WebGLRenderingContext<"u"&&t instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");l=t.getContextAttributes().alpha}else l=B;let u=new Uint32Array(4),d=new Int32Array(4),A=null,h=null,g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=$t,this.toneMappingExposure=1;let y=this,E=!1,w=0,v=0,P=null,R=-1,m=null,M=new YD,X=new YD,I=null,z=new _D(0),$=0,W=e.width,DD=e.height,J=1,iD=null,BD=null,pD=new YD(0,0,W,DD),SD=new YD(0,0,W,DD),F=!1,_=new qi,N=!1,Z=!1,Q=new VD,rD=new VD,lD=new H,TD=new YD,WD={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ED=!1;function De(){return P===null?J:1}let q=t;function Pe(b,L){return e.getContext(b,L)}try{let b={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:f,powerPreference:C,failIfMajorPerformanceCaveat:a};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${lo}`),e.addEventListener("webglcontextlost",Y,!1),e.addEventListener("webglcontextrestored",hD,!1),e.addEventListener("webglcontextcreationerror",aD,!1),q===null){let L="webgl2";if(q=Pe(L,b),q===null)throw Pe(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let XD,JD,HD,se,RD,T,p,O,K,eD,U,gD,CD,AD,UD,tD,uD,vD,LD,dD,GD,ID,Be,S;function oD(){XD=new yA(q),XD.init(),ID=new $u(q,XD),JD=new hA(q,XD,D,ID),HD=new Zu(q,XD),JD.reverseDepthBuffer&&c&&HD.buffers.depth.setReversed(!0),se=new gA(q),RD=new Pu,T=new Yu(q,XD,HD,RD,JD,ID,se),p=new uA(y),O=new mA(y),K=new M3(q),Be=new cA(q,K),eD=new bA(q,K,se,Be),U=new TA(q,eD,K,se),LD=new xA(q,JD,T),tD=new AA(RD),gD=new Eu(y,p,O,XD,JD,Be,tD),CD=new nd(y,RD),AD=new Ou,UD=new Ju(XD),vD=new aA(y,p,O,HD,U,l,o),uD=new Gu(y,U,JD),S=new id(q,se,JD,HD),dD=new lA(q,XD,se),GD=new RA(q,XD,se),se.programs=gD.programs,y.capabilities=JD,y.extensions=XD,y.properties=RD,y.renderLists=AD,y.shadowMap=uD,y.state=HD,y.info=se}oD();let G=new $r(y,q);this.xr=G,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let b=XD.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=XD.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(W,DD,!1))},this.getSize=function(b){return b.set(W,DD)},this.setSize=function(b,L,j=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=b,DD=L,e.width=Math.floor(b*J),e.height=Math.floor(L*J),j===!0&&(e.style.width=b+"px",e.style.height=L+"px"),this.setViewport(0,0,b,L)},this.getDrawingBufferSize=function(b){return b.set(W*J,DD*J).floor()},this.setDrawingBufferSize=function(b,L,j){W=b,DD=L,J=j,e.width=Math.floor(b*j),e.height=Math.floor(L*j),this.setViewport(0,0,b,L)},this.getCurrentViewport=function(b){return b.copy(M)},this.getViewport=function(b){return b.copy(pD)},this.setViewport=function(b,L,j,k){b.isVector4?pD.set(b.x,b.y,b.z,b.w):pD.set(b,L,j,k),HD.viewport(M.copy(pD).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(SD)},this.setScissor=function(b,L,j,k){b.isVector4?SD.set(b.x,b.y,b.z,b.w):SD.set(b,L,j,k),HD.scissor(X.copy(SD).multiplyScalar(J).round())},this.getScissorTest=function(){return F},this.setScissorTest=function(b){HD.setScissorTest(F=b)},this.setOpaqueSort=function(b){iD=b},this.setTransparentSort=function(b){BD=b},this.getClearColor=function(b){return b.copy(vD.getClearColor())},this.setClearColor=function(){vD.setClearColor.apply(vD,arguments)},this.getClearAlpha=function(){return vD.getClearAlpha()},this.setClearAlpha=function(){vD.setClearAlpha.apply(vD,arguments)},this.clear=function(b=!0,L=!0,j=!0){let k=0;if(b){let V=!1;if(P!==null){let nD=P.texture.format;V=nD===go||nD===Ro||nD===bo}if(V){let nD=P.texture.type,cD=nD===St||nD===mn||nD===Si||nD===Kn||nD===po||nD===mo,mD=vD.getClearColor(),yD=vD.getClearAlpha(),qD=mD.r,OD=mD.g,bD=mD.b;cD?(u[0]=qD,u[1]=OD,u[2]=bD,u[3]=yD,q.clearBufferuiv(q.COLOR,0,u)):(d[0]=qD,d[1]=OD,d[2]=bD,d[3]=yD,q.clearBufferiv(q.COLOR,0,d))}else k|=q.COLOR_BUFFER_BIT}L&&(k|=q.DEPTH_BUFFER_BIT),j&&(k|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Y,!1),e.removeEventListener("webglcontextrestored",hD,!1),e.removeEventListener("webglcontextcreationerror",aD,!1),AD.dispose(),UD.dispose(),RD.dispose(),p.dispose(),O.dispose(),U.dispose(),Be.dispose(),S.dispose(),gD.dispose(),G.dispose(),G.removeEventListener("sessionstart",lf),G.removeEventListener("sessionend",hf),rn.stop()};function Y(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function hD(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;let b=se.autoReset,L=uD.enabled,j=uD.autoUpdate,k=uD.needsUpdate,V=uD.type;oD(),se.autoReset=b,uD.enabled=L,uD.autoUpdate=j,uD.needsUpdate=k,uD.type=V}function aD(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function FD(b){let L=b.target;L.removeEventListener("dispose",FD),ce(L)}function ce(b){He(b),RD.remove(b)}function He(b){let L=RD.get(b).programs;L!==void 0&&(L.forEach(function(j){gD.releaseProgram(j)}),b.isShaderMaterial&&gD.releaseShaderCache(b))}this.renderBufferDirect=function(b,L,j,k,V,nD){L===null&&(L=WD);let cD=V.isMesh&&V.matrixWorld.determinant()<0,mD=tc(b,L,j,k,V);HD.setMaterial(k,cD);let yD=j.index,qD=1;if(k.wireframe===!0){if(yD=eD.getWireframeAttribute(j),yD===void 0)return;qD=2}let OD=j.drawRange,bD=j.attributes.position,ZD=OD.start*qD,re=(OD.start+OD.count)*qD;nD!==null&&(ZD=Math.max(ZD,nD.start*qD),re=Math.min(re,(nD.start+nD.count)*qD)),yD!==null?(ZD=Math.max(ZD,0),re=Math.min(re,yD.count)):bD!=null&&(ZD=Math.max(ZD,0),re=Math.min(re,bD.count));let fe=re-ZD;if(fe<0||fe===1/0)return;Be.setup(V,k,mD,j,yD);let Fe,$D=dD;if(yD!==null&&(Fe=K.get(yD),$D=GD,$D.setIndex(Fe)),V.isMesh)k.wireframe===!0?(HD.setLineWidth(k.wireframeLinewidth*De()),$D.setMode(q.LINES)):$D.setMode(q.TRIANGLES);else if(V.isLine){let xD=k.linewidth;xD===void 0&&(xD=1),HD.setLineWidth(xD*De()),V.isLineSegments?$D.setMode(q.LINES):V.isLineLoop?$D.setMode(q.LINE_LOOP):$D.setMode(q.LINE_STRIP)}else V.isPoints?$D.setMode(q.POINTS):V.isSprite&&$D.setMode(q.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)$D.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(XD.get("WEBGL_multi_draw"))$D.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let xD=V._multiDrawStarts,yt=V._multiDrawCounts,QD=V._multiDrawCount,nt=yD?K.get(yD).bytesPerElement:1,Tn=RD.get(k).currentProgram.getUniforms();for(let Ie=0;Ie<QD;Ie++)Tn.setValue(q,"_gl_DrawID",Ie),$D.render(xD[Ie]/nt,yt[Ie])}else if(V.isInstancedMesh)$D.renderInstances(ZD,fe,V.count);else if(j.isInstancedBufferGeometry){let xD=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yt=Math.min(j.instanceCount,xD);$D.renderInstances(ZD,fe,yt)}else $D.render(ZD,fe)};function ee(b,L,j){b.transparent===!0&&b.side===ke&&b.forceSinglePass===!1?(b.side=ve,b.needsUpdate=!0,Yi(b,L,j),b.side=Ye,b.needsUpdate=!0,Yi(b,L,j),b.side=ke):Yi(b,L,j)}this.compile=function(b,L,j=null){j===null&&(j=b),h=UD.get(j),h.init(L),x.push(h),j.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),b!==j&&b.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(h.pushLight(V),V.castShadow&&h.pushShadow(V))}),h.setupLights();let k=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let nD=V.material;if(nD)if(Array.isArray(nD))for(let cD=0;cD<nD.length;cD++){let mD=nD[cD];ee(mD,j,V),k.add(mD)}else ee(nD,j,V),k.add(nD)}),x.pop(),h=null,k},this.compileAsync=function(b,L,j=null){let k=this.compile(b,L,j);return new Promise(V=>{function nD(){if(k.forEach(function(cD){RD.get(cD).currentProgram.isReady()&&k.delete(cD)}),k.size===0){V(b);return}setTimeout(nD,10)}XD.get("KHR_parallel_shader_compile")!==null?nD():setTimeout(nD,10)})};let tt=null;function mt(b){tt&&tt(b)}function lf(){rn.stop()}function hf(){rn.start()}let rn=new Ba;rn.setAnimationLoop(mt),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(b){tt=b,G.setAnimationLoop(b),b===null?rn.stop():rn.start()},G.addEventListener("sessionstart",lf),G.addEventListener("sessionend",hf),this.render=function(b,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(L),L=G.getCamera()),b.isScene===!0&&b.onBeforeRender(y,b,L,P),h=UD.get(b,x.length),h.init(L),x.push(h),rD.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),_.setFromProjectionMatrix(rD),Z=this.localClippingEnabled,N=tD.init(this.clippingPlanes,Z),A=AD.get(b,g.length),A.init(),g.push(A),G.enabled===!0&&G.isPresenting===!0){let nD=y.xr.getDepthSensingMesh();nD!==null&&dB(nD,L,-1/0,y.sortObjects)}dB(b,L,0,y.sortObjects),A.finish(),y.sortObjects===!0&&A.sort(iD,BD),ED=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,ED&&vD.addToRenderList(A,b),this.info.render.frame++,N===!0&&tD.beginShadows();let j=h.state.shadowsArray;uD.render(j,b,L),N===!0&&tD.endShadows(),this.info.autoReset===!0&&this.info.reset();let k=A.opaque,V=A.transmissive;if(h.setupLights(),L.isArrayCamera){let nD=L.cameras;if(V.length>0)for(let cD=0,mD=nD.length;cD<mD;cD++){let yD=nD[cD];uf(k,V,b,yD)}ED&&vD.render(b);for(let cD=0,mD=nD.length;cD<mD;cD++){let yD=nD[cD];Af(A,b,yD,yD.viewport)}}else V.length>0&&uf(k,V,b,L),ED&&vD.render(b),Af(A,b,L);P!==null&&(T.updateMultisampleRenderTarget(P),T.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(y,b,L),Be.resetDefaultState(),R=-1,m=null,x.pop(),x.length>0?(h=x[x.length-1],N===!0&&tD.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,g.pop(),g.length>0?A=g[g.length-1]:A=null};function dB(b,L,j,k){if(b.visible===!1)return;if(b.layers.test(L.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(L);else if(b.isLight)h.pushLight(b),b.castShadow&&h.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||_.intersectsSprite(b)){k&&TD.setFromMatrixPosition(b.matrixWorld).applyMatrix4(rD);let cD=U.update(b),mD=b.material;mD.visible&&A.push(b,cD,mD,j,TD.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||_.intersectsObject(b))){let cD=U.update(b),mD=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),TD.copy(b.boundingSphere.center)):(cD.boundingSphere===null&&cD.computeBoundingSphere(),TD.copy(cD.boundingSphere.center)),TD.applyMatrix4(b.matrixWorld).applyMatrix4(rD)),Array.isArray(mD)){let yD=cD.groups;for(let qD=0,OD=yD.length;qD<OD;qD++){let bD=yD[qD],ZD=mD[bD.materialIndex];ZD&&ZD.visible&&A.push(b,cD,ZD,j,TD.z,bD)}}else mD.visible&&A.push(b,cD,mD,j,TD.z,null)}}let nD=b.children;for(let cD=0,mD=nD.length;cD<mD;cD++)dB(nD[cD],L,j,k)}function Af(b,L,j,k){let V=b.opaque,nD=b.transmissive,cD=b.transparent;h.setupLightsView(j),N===!0&&tD.setGlobalState(y.clippingPlanes,j),k&&HD.viewport(M.copy(k)),V.length>0&&Ki(V,L,j),nD.length>0&&Ki(nD,L,j),cD.length>0&&Ki(cD,L,j),HD.buffers.depth.setTest(!0),HD.buffers.depth.setMask(!0),HD.buffers.color.setMask(!0),HD.setPolygonOffset(!1)}function uf(b,L,j,k){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[k.id]===void 0&&(h.state.transmissionRenderTarget[k.id]=new Vt(1,1,{generateMipmaps:!0,type:XD.has("EXT_color_buffer_half_float")||XD.has("EXT_color_buffer_float")?ki:St,minFilter:ut,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zD.workingColorSpace}));let nD=h.state.transmissionRenderTarget[k.id],cD=k.viewport||M;nD.setSize(cD.z,cD.w);let mD=y.getRenderTarget();y.setRenderTarget(nD),y.getClearColor(z),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),ED&&vD.render(j);let yD=y.toneMapping;y.toneMapping=$t;let qD=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),h.setupLightsView(k),N===!0&&tD.setGlobalState(y.clippingPlanes,k),Ki(b,j,k),T.updateMultisampleRenderTarget(nD),T.updateRenderTargetMipmap(nD),XD.has("WEBGL_multisampled_render_to_texture")===!1){let OD=!1;for(let bD=0,ZD=L.length;bD<ZD;bD++){let re=L[bD],fe=re.object,Fe=re.geometry,$D=re.material,xD=re.group;if($D.side===ke&&fe.layers.test(k.layers)){let yt=$D.side;$D.side=ve,$D.needsUpdate=!0,df(fe,j,k,Fe,$D,xD),$D.side=yt,$D.needsUpdate=!0,OD=!0}}OD===!0&&(T.updateMultisampleRenderTarget(nD),T.updateRenderTargetMipmap(nD))}y.setRenderTarget(mD),y.setClearColor(z,$),qD!==void 0&&(k.viewport=qD),y.toneMapping=yD}function Ki(b,L,j){let k=L.isScene===!0?L.overrideMaterial:null;for(let V=0,nD=b.length;V<nD;V++){let cD=b[V],mD=cD.object,yD=cD.geometry,qD=k===null?cD.material:k,OD=cD.group;mD.layers.test(j.layers)&&df(mD,L,j,yD,qD,OD)}}function df(b,L,j,k,V,nD){b.onBeforeRender(y,L,j,k,V,nD),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(y,L,j,k,b,nD),V.transparent===!0&&V.side===ke&&V.forceSinglePass===!1?(V.side=ve,V.needsUpdate=!0,y.renderBufferDirect(j,L,k,V,b,nD),V.side=Ye,V.needsUpdate=!0,y.renderBufferDirect(j,L,k,V,b,nD),V.side=ke):y.renderBufferDirect(j,L,k,V,b,nD),b.onAfterRender(y,L,j,k,V,nD)}function Yi(b,L,j){L.isScene!==!0&&(L=WD);let k=RD.get(b),V=h.state.lights,nD=h.state.shadowsArray,cD=V.state.version,mD=gD.getParameters(b,V.state,nD,L,j),yD=gD.getProgramCacheKey(mD),qD=k.programs;k.environment=b.isMeshStandardMaterial?L.environment:null,k.fog=L.fog,k.envMap=(b.isMeshStandardMaterial?O:p).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?L.environmentRotation:b.envMapRotation,qD===void 0&&(b.addEventListener("dispose",FD),qD=new Map,k.programs=qD);let OD=qD.get(yD);if(OD!==void 0){if(k.currentProgram===OD&&k.lightsStateVersion===cD)return mf(b,mD),OD}else mD.uniforms=gD.getUniforms(b),b.onBeforeCompile(mD,y),OD=gD.acquireProgram(mD,yD),qD.set(yD,OD),k.uniforms=mD.uniforms;let bD=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(bD.clippingPlanes=tD.uniform),mf(b,mD),k.needsLights=ic(b),k.lightsStateVersion=cD,k.needsLights&&(bD.ambientLightColor.value=V.state.ambient,bD.lightProbe.value=V.state.probe,bD.directionalLights.value=V.state.directional,bD.directionalLightShadows.value=V.state.directionalShadow,bD.spotLights.value=V.state.spot,bD.spotLightShadows.value=V.state.spotShadow,bD.rectAreaLights.value=V.state.rectArea,bD.ltc_1.value=V.state.rectAreaLTC1,bD.ltc_2.value=V.state.rectAreaLTC2,bD.pointLights.value=V.state.point,bD.pointLightShadows.value=V.state.pointShadow,bD.hemisphereLights.value=V.state.hemi,bD.directionalShadowMap.value=V.state.directionalShadowMap,bD.directionalShadowMatrix.value=V.state.directionalShadowMatrix,bD.spotShadowMap.value=V.state.spotShadowMap,bD.spotLightMatrix.value=V.state.spotLightMatrix,bD.spotLightMap.value=V.state.spotLightMap,bD.pointShadowMap.value=V.state.pointShadowMap,bD.pointShadowMatrix.value=V.state.pointShadowMatrix),k.currentProgram=OD,k.uniformsList=null,OD}function pf(b){if(b.uniformsList===null){let L=b.currentProgram.getUniforms();b.uniformsList=Wn.seqWithValue(L.seq,b.uniforms)}return b.uniformsList}function mf(b,L){let j=RD.get(b);j.outputColorSpace=L.outputColorSpace,j.batching=L.batching,j.batchingColor=L.batchingColor,j.instancing=L.instancing,j.instancingColor=L.instancingColor,j.instancingMorph=L.instancingMorph,j.skinning=L.skinning,j.morphTargets=L.morphTargets,j.morphNormals=L.morphNormals,j.morphColors=L.morphColors,j.morphTargetsCount=L.morphTargetsCount,j.numClippingPlanes=L.numClippingPlanes,j.numIntersection=L.numClipIntersection,j.vertexAlphas=L.vertexAlphas,j.vertexTangents=L.vertexTangents,j.toneMapping=L.toneMapping}function tc(b,L,j,k,V){L.isScene!==!0&&(L=WD),T.resetTextureUnits();let nD=L.fog,cD=k.isMeshStandardMaterial?L.environment:null,mD=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Le,yD=(k.isMeshStandardMaterial?O:p).get(k.envMap||cD),qD=k.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,OD=!!j.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),bD=!!j.morphAttributes.position,ZD=!!j.morphAttributes.normal,re=!!j.morphAttributes.color,fe=$t;k.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(fe=y.toneMapping);let Fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,$D=Fe!==void 0?Fe.length:0,xD=RD.get(k),yt=h.state.lights;if(N===!0&&(Z===!0||b!==m)){let Ge=b===m&&k.id===R;tD.setState(k,b,Ge)}let QD=!1;k.version===xD.__version?(xD.needsLights&&xD.lightsStateVersion!==yt.state.version||xD.outputColorSpace!==mD||V.isBatchedMesh&&xD.batching===!1||!V.isBatchedMesh&&xD.batching===!0||V.isBatchedMesh&&xD.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&xD.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&xD.instancing===!1||!V.isInstancedMesh&&xD.instancing===!0||V.isSkinnedMesh&&xD.skinning===!1||!V.isSkinnedMesh&&xD.skinning===!0||V.isInstancedMesh&&xD.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&xD.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&xD.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&xD.instancingMorph===!1&&V.morphTexture!==null||xD.envMap!==yD||k.fog===!0&&xD.fog!==nD||xD.numClippingPlanes!==void 0&&(xD.numClippingPlanes!==tD.numPlanes||xD.numIntersection!==tD.numIntersection)||xD.vertexAlphas!==qD||xD.vertexTangents!==OD||xD.morphTargets!==bD||xD.morphNormals!==ZD||xD.morphColors!==re||xD.toneMapping!==fe||xD.morphTargetsCount!==$D)&&(QD=!0):(QD=!0,xD.__version=k.version);let nt=xD.currentProgram;QD===!0&&(nt=Yi(k,L,V));let Tn=!1,Ie=!1,hi=!1,Ce=nt.getUniforms(),ht=xD.uniforms;if(HD.useProgram(nt.program)&&(Tn=!0,Ie=!0,hi=!0),k.id!==R&&(R=k.id,Ie=!0),Tn||m!==b){HD.buffers.depth.getReversed()?(Q.copy(b.projectionMatrix),C3(Q),a3(Q),Ce.setValue(q,"projectionMatrix",Q)):Ce.setValue(q,"projectionMatrix",b.projectionMatrix),Ce.setValue(q,"viewMatrix",b.matrixWorldInverse);let jt=Ce.map.cameraPosition;jt!==void 0&&jt.setValue(q,lD.setFromMatrixPosition(b.matrixWorld)),JD.logarithmicDepthBuffer&&Ce.setValue(q,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ce.setValue(q,"isOrthographic",b.isOrthographicCamera===!0),m!==b&&(m=b,Ie=!0,hi=!0)}if(V.isSkinnedMesh){Ce.setOptional(q,V,"bindMatrix"),Ce.setOptional(q,V,"bindMatrixInverse");let Ge=V.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),Ce.setValue(q,"boneTexture",Ge.boneTexture,T))}V.isBatchedMesh&&(Ce.setOptional(q,V,"batchingTexture"),Ce.setValue(q,"batchingTexture",V._matricesTexture,T),Ce.setOptional(q,V,"batchingIdTexture"),Ce.setValue(q,"batchingIdTexture",V._indirectTexture,T),Ce.setOptional(q,V,"batchingColorTexture"),V._colorsTexture!==null&&Ce.setValue(q,"batchingColorTexture",V._colorsTexture,T));let Ai=j.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&LD.update(V,j,nt),(Ie||xD.receiveShadow!==V.receiveShadow)&&(xD.receiveShadow=V.receiveShadow,Ce.setValue(q,"receiveShadow",V.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(ht.envMap.value=yD,ht.flipEnvMap.value=yD.isCubeTexture&&yD.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&L.environment!==null&&(ht.envMapIntensity.value=L.environmentIntensity),Ie&&(Ce.setValue(q,"toneMappingExposure",y.toneMappingExposure),xD.needsLights&&nc(ht,hi),nD&&k.fog===!0&&CD.refreshFogUniforms(ht,nD),CD.refreshMaterialUniforms(ht,k,J,DD,h.state.transmissionRenderTarget[b.id]),Wn.upload(q,pf(xD),ht,T)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Wn.upload(q,pf(xD),ht,T),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ce.setValue(q,"center",V.center),Ce.setValue(q,"modelViewMatrix",V.modelViewMatrix),Ce.setValue(q,"normalMatrix",V.normalMatrix),Ce.setValue(q,"modelMatrix",V.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Ge=k.uniformsGroups;for(let jt=0,Xt=Ge.length;jt<Xt;jt++){let yf=Ge[jt];S.update(yf,nt),S.bind(yf,nt)}}return nt}function nc(b,L){b.ambientLightColor.needsUpdate=L,b.lightProbe.needsUpdate=L,b.directionalLights.needsUpdate=L,b.directionalLightShadows.needsUpdate=L,b.pointLights.needsUpdate=L,b.pointLightShadows.needsUpdate=L,b.spotLights.needsUpdate=L,b.spotLightShadows.needsUpdate=L,b.rectAreaLights.needsUpdate=L,b.hemisphereLights.needsUpdate=L}function ic(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,L,j){RD.get(b.texture).__webglTexture=L,RD.get(b.depthTexture).__webglTexture=j;let k=RD.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=j===void 0,k.__autoAllocateDepthBuffer||XD.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,L){let j=RD.get(b);j.__webglFramebuffer=L,j.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(b,L=0,j=0){P=b,w=L,v=j;let k=!0,V=null,nD=!1,cD=!1;if(b){let yD=RD.get(b);if(yD.__useDefaultFramebuffer!==void 0)HD.bindFramebuffer(q.FRAMEBUFFER,null),k=!1;else if(yD.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(yD.__hasExternalTextures)T.rebindTextures(b,RD.get(b.texture).__webglTexture,RD.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let bD=b.depthTexture;if(yD.__boundDepthTexture!==bD){if(bD!==null&&RD.has(bD)&&(b.width!==bD.image.width||b.height!==bD.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}let qD=b.texture;(qD.isData3DTexture||qD.isDataArrayTexture||qD.isCompressedArrayTexture)&&(cD=!0);let OD=RD.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(OD[L])?V=OD[L][j]:V=OD[L],nD=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?V=RD.get(b).__webglMultisampledFramebuffer:Array.isArray(OD)?V=OD[j]:V=OD,M.copy(b.viewport),X.copy(b.scissor),I=b.scissorTest}else M.copy(pD).multiplyScalar(J).floor(),X.copy(SD).multiplyScalar(J).floor(),I=F;if(HD.bindFramebuffer(q.FRAMEBUFFER,V)&&k&&HD.drawBuffers(b,V),HD.viewport(M),HD.scissor(X),HD.setScissorTest(I),nD){let yD=RD.get(b.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+L,yD.__webglTexture,j)}else if(cD){let yD=RD.get(b.texture),qD=L||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,yD.__webglTexture,j||0,qD)}R=-1},this.readRenderTargetPixels=function(b,L,j,k,V,nD,cD){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mD=RD.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&cD!==void 0&&(mD=mD[cD]),mD){HD.bindFramebuffer(q.FRAMEBUFFER,mD);try{let yD=b.texture,qD=yD.format,OD=yD.type;if(!JD.textureFormatReadable(qD)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!JD.textureTypeReadable(OD)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=b.width-k&&j>=0&&j<=b.height-V&&q.readPixels(L,j,k,V,ID.convert(qD),ID.convert(OD),nD)}finally{let yD=P!==null?RD.get(P).__webglFramebuffer:null;HD.bindFramebuffer(q.FRAMEBUFFER,yD)}}},this.readRenderTargetPixelsAsync=async function(b,L,j,k,V,nD,cD){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mD=RD.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&cD!==void 0&&(mD=mD[cD]),mD){let yD=b.texture,qD=yD.format,OD=yD.type;if(!JD.textureFormatReadable(qD))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!JD.textureTypeReadable(OD))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(L>=0&&L<=b.width-k&&j>=0&&j<=b.height-V){HD.bindFramebuffer(q.FRAMEBUFFER,mD);let bD=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,bD),q.bufferData(q.PIXEL_PACK_BUFFER,nD.byteLength,q.STREAM_READ),q.readPixels(L,j,k,V,ID.convert(qD),ID.convert(OD),0);let ZD=P!==null?RD.get(P).__webglFramebuffer:null;HD.bindFramebuffer(q.FRAMEBUFFER,ZD);let re=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await f3(q,re,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,bD),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,nD),q.deleteBuffer(bD),q.deleteSync(re),nD}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,L=null,j=0){b.isTexture!==!0&&(xi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),L=arguments[0]||null,b=arguments[1]);let k=Math.pow(2,-j),V=Math.floor(b.image.width*k),nD=Math.floor(b.image.height*k),cD=L!==null?L.x:0,mD=L!==null?L.y:0;T.setTexture2D(b,0),q.copyTexSubImage2D(q.TEXTURE_2D,j,0,0,cD,mD,V,nD),HD.unbindTexture()},this.copyTextureToTexture=function(b,L,j=null,k=null,V=0){b.isTexture!==!0&&(xi("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],L=arguments[2],V=arguments[3]||0,j=null);let nD,cD,mD,yD,qD,OD,bD,ZD,re,fe=b.isCompressedTexture?b.mipmaps[V]:b.image;j!==null?(nD=j.max.x-j.min.x,cD=j.max.y-j.min.y,mD=j.isBox3?j.max.z-j.min.z:1,yD=j.min.x,qD=j.min.y,OD=j.isBox3?j.min.z:0):(nD=fe.width,cD=fe.height,mD=fe.depth||1,yD=0,qD=0,OD=0),k!==null?(bD=k.x,ZD=k.y,re=k.z):(bD=0,ZD=0,re=0);let Fe=ID.convert(L.format),$D=ID.convert(L.type),xD;L.isData3DTexture?(T.setTexture3D(L,0),xD=q.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(T.setTexture2DArray(L,0),xD=q.TEXTURE_2D_ARRAY):(T.setTexture2D(L,0),xD=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,L.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,L.unpackAlignment);let yt=q.getParameter(q.UNPACK_ROW_LENGTH),QD=q.getParameter(q.UNPACK_IMAGE_HEIGHT),nt=q.getParameter(q.UNPACK_SKIP_PIXELS),Tn=q.getParameter(q.UNPACK_SKIP_ROWS),Ie=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,fe.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,fe.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,yD),q.pixelStorei(q.UNPACK_SKIP_ROWS,qD),q.pixelStorei(q.UNPACK_SKIP_IMAGES,OD);let hi=b.isDataArrayTexture||b.isData3DTexture,Ce=L.isDataArrayTexture||L.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let ht=RD.get(b),Ai=RD.get(L),Ge=RD.get(ht.__renderTarget),jt=RD.get(Ai.__renderTarget);HD.bindFramebuffer(q.READ_FRAMEBUFFER,Ge.__webglFramebuffer),HD.bindFramebuffer(q.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Xt=0;Xt<mD;Xt++)hi&&q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,RD.get(b).__webglTexture,V,OD+Xt),b.isDepthTexture?(Ce&&q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,RD.get(L).__webglTexture,V,re+Xt),q.blitFramebuffer(yD,qD,nD,cD,bD,ZD,nD,cD,q.DEPTH_BUFFER_BIT,q.NEAREST)):Ce?q.copyTexSubImage3D(xD,V,bD,ZD,re+Xt,yD,qD,nD,cD):q.copyTexSubImage2D(xD,V,bD,ZD,re+Xt,yD,qD,nD,cD);HD.bindFramebuffer(q.READ_FRAMEBUFFER,null),HD.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ce?b.isDataTexture||b.isData3DTexture?q.texSubImage3D(xD,V,bD,ZD,re,nD,cD,mD,Fe,$D,fe.data):L.isCompressedArrayTexture?q.compressedTexSubImage3D(xD,V,bD,ZD,re,nD,cD,mD,Fe,fe.data):q.texSubImage3D(xD,V,bD,ZD,re,nD,cD,mD,Fe,$D,fe):b.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,V,bD,ZD,nD,cD,Fe,$D,fe.data):b.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,V,bD,ZD,fe.width,fe.height,Fe,fe.data):q.texSubImage2D(q.TEXTURE_2D,V,bD,ZD,nD,cD,Fe,$D,fe);q.pixelStorei(q.UNPACK_ROW_LENGTH,yt),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,QD),q.pixelStorei(q.UNPACK_SKIP_PIXELS,nt),q.pixelStorei(q.UNPACK_SKIP_ROWS,Tn),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ie),V===0&&L.generateMipmaps&&q.generateMipmap(xD),HD.unbindTexture()},this.copyTextureToTexture3D=function(b,L,j=null,k=null,V=0){return b.isTexture!==!0&&(xi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,k=arguments[1]||null,b=arguments[2],L=arguments[3],V=arguments[4]||0),xi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,L,j,k,V)},this.initRenderTarget=function(b){RD.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),HD.unbindTexture()},this.resetState=function(){w=0,v=0,P=null,HD.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(D){this._outputColorSpace=D;let e=this.getContext();e.drawingBufferColorspace=zD._getDrawingBufferColorSpace(D),e.unpackColorSpace=zD._getUnpackColorSpace()}};var ii=class extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(D,e){return super.copy(D,e),D.background!==null&&(this.background=D.background.clone()),D.environment!==null&&(this.environment=D.environment.clone()),D.fog!==null&&(this.fog=D.fog.clone()),this.backgroundBlurriness=D.backgroundBlurriness,this.backgroundIntensity=D.backgroundIntensity,this.backgroundRotation.copy(D.backgroundRotation),this.environmentIntensity=D.environmentIntensity,this.environmentRotation.copy(D.environmentRotation),D.overrideMaterial!==null&&(this.overrideMaterial=D.overrideMaterial.clone()),this.matrixAutoUpdate=D.matrixAutoUpdate,this}toJSON(D){let e=super.toJSON(D);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ei=class{constructor(D,e){this.isInterleavedBuffer=!0,this.array=D,this.stride=e,this.count=D!==void 0?D.length/e:0,this.usage=Pr,this.updateRanges=[],this.version=0,this.uuid=Ct()}onUploadCallback(){}set needsUpdate(D){D===!0&&this.version++}setUsage(D){return this.usage=D,this}addUpdateRange(D,e){this.updateRanges.push({start:D,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(D){return this.array=new D.array.constructor(D.array),this.count=D.count,this.stride=D.stride,this.usage=D.usage,this}copyAt(D,e,t){D*=this.stride,t*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[D+i]=e.array[t+i];return this}set(D,e=0){return this.array.set(D,e),this}clone(D){D.arrayBuffers===void 0&&(D.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),D.arrayBuffers[this.array.buffer._uuid]===void 0&&(D.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(D.arrayBuffers[this.array.buffer._uuid]),t=new this.constructor(e,this.stride);return t.setUsage(this.usage),t}onUpload(D){return this.onUploadCallback=D,this}toJSON(D){return D.arrayBuffers===void 0&&(D.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),D.arrayBuffers[this.array.buffer._uuid]===void 0&&(D.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new H,Pi=class n{constructor(D,e,t,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=D,this.itemSize=e,this.offset=t,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(D){this.data.needsUpdate=D}applyMatrix4(D){for(let e=0,t=this.data.count;e<t;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(D),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(D){for(let e=0,t=this.count;e<t;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(D),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(D){for(let e=0,t=this.count;e<t;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(D),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(D,e){let t=this.array[D*this.data.stride+this.offset+e];return this.normalized&&(t=ot(t,this.array)),t}setComponent(D,e,t){return this.normalized&&(t=te(t,this.array)),this.data.array[D*this.data.stride+this.offset+e]=t,this}setX(D,e){return this.normalized&&(e=te(e,this.array)),this.data.array[D*this.data.stride+this.offset]=e,this}setY(D,e){return this.normalized&&(e=te(e,this.array)),this.data.array[D*this.data.stride+this.offset+1]=e,this}setZ(D,e){return this.normalized&&(e=te(e,this.array)),this.data.array[D*this.data.stride+this.offset+2]=e,this}setW(D,e){return this.normalized&&(e=te(e,this.array)),this.data.array[D*this.data.stride+this.offset+3]=e,this}getX(D){let e=this.data.array[D*this.data.stride+this.offset];return this.normalized&&(e=ot(e,this.array)),e}getY(D){let e=this.data.array[D*this.data.stride+this.offset+1];return this.normalized&&(e=ot(e,this.array)),e}getZ(D){let e=this.data.array[D*this.data.stride+this.offset+2];return this.normalized&&(e=ot(e,this.array)),e}getW(D){let e=this.data.array[D*this.data.stride+this.offset+3];return this.normalized&&(e=ot(e,this.array)),e}setXY(D,e,t){return D=D*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),t=te(t,this.array)),this.data.array[D+0]=e,this.data.array[D+1]=t,this}setXYZ(D,e,t,i){return D=D*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),t=te(t,this.array),i=te(i,this.array)),this.data.array[D+0]=e,this.data.array[D+1]=t,this.data.array[D+2]=i,this}setXYZW(D,e,t,i,s){return D=D*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),t=te(t,this.array),i=te(i,this.array),s=te(s,this.array)),this.data.array[D+0]=e,this.data.array[D+1]=t,this.data.array[D+2]=i,this.data.array[D+3]=s,this}clone(D){if(D===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new he(new this.array.constructor(e),this.itemSize,this.normalized)}else return D.interleavedBuffers===void 0&&(D.interleavedBuffers={}),D.interleavedBuffers[this.data.uuid]===void 0&&(D.interleavedBuffers[this.data.uuid]=this.data.clone(D)),new n(D.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(D){if(D===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let t=0;t<this.count;t++){let i=t*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return D.interleavedBuffers===void 0&&(D.interleavedBuffers={}),D.interleavedBuffers[this.data.uuid]===void 0&&(D.interleavedBuffers[this.data.uuid]=this.data.toJSON(D)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var RC=new H,gC=new YD,xC=new YD,sd=new H,TC=new VD,ps=new H,zB=new Je,HC=new VD,WB=new qt,js=class extends KD{constructor(D,e){super(D,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tf,this.bindMatrix=new VD,this.bindMatrixInverse=new VD,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let D=this.geometry;this.boundingBox===null&&(this.boundingBox=new Se),this.boundingBox.makeEmpty();let e=D.getAttribute("position");for(let t=0;t<e.count;t++)this.getVertexPosition(t,ps),this.boundingBox.expandByPoint(ps)}computeBoundingSphere(){let D=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Je),this.boundingSphere.makeEmpty();let e=D.getAttribute("position");for(let t=0;t<e.count;t++)this.getVertexPosition(t,ps),this.boundingSphere.expandByPoint(ps)}copy(D,e){return super.copy(D,e),this.bindMode=D.bindMode,this.bindMatrix.copy(D.bindMatrix),this.bindMatrixInverse.copy(D.bindMatrixInverse),this.skeleton=D.skeleton,D.boundingBox!==null&&(this.boundingBox=D.boundingBox.clone()),D.boundingSphere!==null&&(this.boundingSphere=D.boundingSphere.clone()),this}raycast(D,e){let t=this.material,i=this.matrixWorld;t!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zB.copy(this.boundingSphere),zB.applyMatrix4(i),D.ray.intersectsSphere(zB)!==!1&&(HC.copy(i).invert(),WB.copy(D.ray).applyMatrix4(HC),!(this.boundingBox!==null&&WB.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(D,e,WB)))}getVertexPosition(D,e){return super.getVertexPosition(D,e),this.applyBoneTransform(D,e),e}bind(D,e){this.skeleton=D,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let D=new YD,e=this.geometry.attributes.skinWeight;for(let t=0,i=e.count;t<i;t++){D.fromBufferAttribute(e,t);let s=1/D.manhattanLength();s!==1/0?D.multiplyScalar(s):D.set(1,0,0,0),e.setXYZW(t,D.x,D.y,D.z,D.w)}}updateMatrixWorld(D){super.updateMatrixWorld(D),this.bindMode===Tf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qc?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(D,e){let t=this.skeleton,i=this.geometry;gC.fromBufferAttribute(i.attributes.skinIndex,D),xC.fromBufferAttribute(i.attributes.skinWeight,D),RC.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){let B=xC.getComponent(s);if(B!==0){let r=gC.getComponent(s);TC.multiplyMatrices(t.bones[r].matrixWorld,t.boneInverses[r]),e.addScaledVector(sd.copy(RC).applyMatrix4(TC),B)}}return e.applyMatrix4(this.bindMatrixInverse)}},Fi=class extends ae{constructor(){super(),this.isBone=!0,this.type="Bone"}},Xs=class extends xe{constructor(D=null,e=1,t=1,i,s,B,r,o,f=Me,C=Me,a,c){super(null,B,r,o,f,C,i,s,a,c),this.isDataTexture=!0,this.image={data:D,width:e,height:t},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},_C=new VD,Bd=new VD,ks=class n{constructor(D=[],e=[]){this.uuid=Ct(),this.bones=D.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let D=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(D.length*16),e.length===0)this.calculateInverses();else if(D.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let t=0,i=this.bones.length;t<i;t++)this.boneInverses.push(new VD)}}calculateInverses(){this.boneInverses.length=0;for(let D=0,e=this.bones.length;D<e;D++){let t=new VD;this.bones[D]&&t.copy(this.bones[D].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let D=0,e=this.bones.length;D<e;D++){let t=this.bones[D];t&&t.matrixWorld.copy(this.boneInverses[D]).invert()}for(let D=0,e=this.bones.length;D<e;D++){let t=this.bones[D];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let D=this.bones,e=this.boneInverses,t=this.boneMatrices,i=this.boneTexture;for(let s=0,B=D.length;s<B;s++){let r=D[s]?D[s].matrixWorld:Bd;_C.multiplyMatrices(r,e[s]),_C.toArray(t,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new n(this.bones,this.boneInverses)}computeBoneTexture(){let D=Math.sqrt(this.bones.length*4);D=Math.ceil(D/4)*4,D=Math.max(D,4);let e=new Float32Array(D*D*4);e.set(this.boneMatrices);let t=new Xs(e,D,D,Ze,ft);return t.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=t,this}getBoneByName(D){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];if(i.name===D)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(D,e){this.uuid=D.uuid;for(let t=0,i=D.bones.length;t<i;t++){let s=D.bones[t],B=e[s];B===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),B=new Fi),this.bones.push(B),this.boneInverses.push(new VD().fromArray(D.boneInverses[t]))}return this.init(),this}toJSON(){let D={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};D.uuid=this.uuid;let e=this.bones,t=this.boneInverses;for(let i=0,s=e.length;i<s;i++){let B=e[i];D.bones.push(B.uuid);let r=t[i];D.boneInverses.push(r.toArray())}return D}},bn=class extends he{constructor(D,e,t,i=1){super(D,e,t),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(D){return super.copy(D),this.meshPerAttribute=D.meshPerAttribute,this}toJSON(){let D=super.toJSON();return D.meshPerAttribute=this.meshPerAttribute,D.isInstancedBufferAttribute=!0,D}},In=new VD,wC=new VD,ms=[],vC=new Se,rd=new VD,yi=new KD,bi=new Je,Js=class extends KD{constructor(D,e,t){super(D,e),this.isInstancedMesh=!0,this.instanceMatrix=new bn(new Float32Array(t*16),16),this.instanceColor=null,this.morphTexture=null,this.count=t,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<t;i++)this.setMatrixAt(i,rd)}computeBoundingBox(){let D=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Se),D.boundingBox===null&&D.computeBoundingBox(),this.boundingBox.makeEmpty();for(let t=0;t<e;t++)this.getMatrixAt(t,In),vC.copy(D.boundingBox).applyMatrix4(In),this.boundingBox.union(vC)}computeBoundingSphere(){let D=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Je),D.boundingSphere===null&&D.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let t=0;t<e;t++)this.getMatrixAt(t,In),bi.copy(D.boundingSphere).applyMatrix4(In),this.boundingSphere.union(bi)}copy(D,e){return super.copy(D,e),this.instanceMatrix.copy(D.instanceMatrix),D.morphTexture!==null&&(this.morphTexture=D.morphTexture.clone()),D.instanceColor!==null&&(this.instanceColor=D.instanceColor.clone()),this.count=D.count,D.boundingBox!==null&&(this.boundingBox=D.boundingBox.clone()),D.boundingSphere!==null&&(this.boundingSphere=D.boundingSphere.clone()),this}getColorAt(D,e){e.fromArray(this.instanceColor.array,D*3)}getMatrixAt(D,e){e.fromArray(this.instanceMatrix.array,D*16)}getMorphAt(D,e){let t=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=t.length+1,B=D*s+1;for(let r=0;r<t.length;r++)t[r]=i[B+r]}raycast(D,e){let t=this.matrixWorld,i=this.count;if(yi.geometry=this.geometry,yi.material=this.material,yi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bi.copy(this.boundingSphere),bi.applyMatrix4(t),D.ray.intersectsSphere(bi)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,In),wC.multiplyMatrices(t,In),yi.matrixWorld=wC,yi.raycast(D,ms);for(let B=0,r=ms.length;B<r;B++){let o=ms[B];o.instanceId=s,o.object=this,e.push(o)}ms.length=0}}setColorAt(D,e){this.instanceColor===null&&(this.instanceColor=new bn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,D*3)}setMatrixAt(D,e){e.toArray(this.instanceMatrix.array,D*16)}setMorphAt(D,e){let t=e.morphTargetInfluences,i=t.length+1;this.morphTexture===null&&(this.morphTexture=new Xs(new Float32Array(i*this.count),i,this.count,yo,ft));let s=this.morphTexture.source.data.data,B=0;for(let f=0;f<t.length;f++)B+=t[f];let r=this.geometry.morphTargetsRelative?1:1-B,o=i*D;s[o]=r,s.set(t,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Oi=class extends ze{static get type(){return"LineBasicMaterial"}constructor(D){super(),this.isLineBasicMaterial=!0,this.color=new _D(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(D)}copy(D){return super.copy(D),this.color.copy(D.color),this.map=D.map,this.linewidth=D.linewidth,this.linecap=D.linecap,this.linejoin=D.linejoin,this.fog=D.fog,this}},zs=new H,Ws=new H,MC=new VD,Ri=new qt,ys=new Je,GB=new H,SC=new H,si=class extends ae{constructor(D=new Te,e=new Oi){super(),this.isLine=!0,this.type="Line",this.geometry=D,this.material=e,this.updateMorphTargets()}copy(D,e){return super.copy(D,e),this.material=Array.isArray(D.material)?D.material.slice():D.material,this.geometry=D.geometry,this}computeLineDistances(){let D=this.geometry;if(D.index===null){let e=D.attributes.position,t=[0];for(let i=1,s=e.count;i<s;i++)zs.fromBufferAttribute(e,i-1),Ws.fromBufferAttribute(e,i),t[i]=t[i-1],t[i]+=zs.distanceTo(Ws);D.setAttribute("lineDistance",new Re(t,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(D,e){let t=this.geometry,i=this.matrixWorld,s=D.params.Line.threshold,B=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere),ys.applyMatrix4(i),ys.radius+=s,D.ray.intersectsSphere(ys)===!1)return;MC.copy(i).invert(),Ri.copy(D.ray).applyMatrix4(MC);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=r*r,f=this.isLineSegments?2:1,C=t.index,c=t.attributes.position;if(C!==null){let l=Math.max(0,B.start),u=Math.min(C.count,B.start+B.count);for(let d=l,A=u-1;d<A;d+=f){let h=C.getX(d),g=C.getX(d+1),x=bs(this,D,Ri,o,h,g);x&&e.push(x)}if(this.isLineLoop){let d=C.getX(u-1),A=C.getX(l),h=bs(this,D,Ri,o,d,A);h&&e.push(h)}}else{let l=Math.max(0,B.start),u=Math.min(c.count,B.start+B.count);for(let d=l,A=u-1;d<A;d+=f){let h=bs(this,D,Ri,o,d,d+1);h&&e.push(h)}if(this.isLineLoop){let d=bs(this,D,Ri,o,u-1,l);d&&e.push(d)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,B=i.length;s<B;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}};function bs(n,D,e,t,i,s){let B=n.geometry.attributes.position;if(zs.fromBufferAttribute(B,i),Ws.fromBufferAttribute(B,s),e.distanceSqToSegment(zs,Ws,GB,SC)>t)return;GB.applyMatrix4(n.matrixWorld);let o=D.ray.origin.distanceTo(GB);if(!(o<D.near||o>D.far))return{distance:o,point:SC.clone().applyMatrix4(n.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:n}}var LC=new H,VC=new H,Gs=class extends si{constructor(D,e){super(D,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let D=this.geometry;if(D.index===null){let e=D.attributes.position,t=[];for(let i=0,s=e.count;i<s;i+=2)LC.fromBufferAttribute(e,i),VC.fromBufferAttribute(e,i+1),t[i]=i===0?0:t[i-1],t[i+1]=t[i]+LC.distanceTo(VC);D.setAttribute("lineDistance",new Re(t,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Us=class extends si{constructor(D,e){super(D,e),this.isLineLoop=!0,this.type="LineLoop"}},Ni=class extends ze{static get type(){return"PointsMaterial"}constructor(D){super(),this.isPointsMaterial=!0,this.color=new _D(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(D)}copy(D){return super.copy(D),this.color.copy(D.color),this.map=D.map,this.alphaMap=D.alphaMap,this.size=D.size,this.sizeAttenuation=D.sizeAttenuation,this.fog=D.fog,this}},qC=new VD,Qr=new qt,Rs=new Je,gs=new H,Zs=class extends ae{constructor(D=new Te,e=new Ni){super(),this.isPoints=!0,this.type="Points",this.geometry=D,this.material=e,this.updateMorphTargets()}copy(D,e){return super.copy(D,e),this.material=Array.isArray(D.material)?D.material.slice():D.material,this.geometry=D.geometry,this}raycast(D,e){let t=this.geometry,i=this.matrixWorld,s=D.params.Points.threshold,B=t.drawRange;if(t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere),Rs.applyMatrix4(i),Rs.radius+=s,D.ray.intersectsSphere(Rs)===!1)return;qC.copy(i).invert(),Qr.copy(D.ray).applyMatrix4(qC);let r=s/((this.scale.x+this.scale.y+this.scale.z)/3),o=r*r,f=t.index,a=t.attributes.position;if(f!==null){let c=Math.max(0,B.start),l=Math.min(f.count,B.start+B.count);for(let u=c,d=l;u<d;u++){let A=f.getX(u);gs.fromBufferAttribute(a,A),EC(gs,A,o,i,D,e,this)}}else{let c=Math.max(0,B.start),l=Math.min(a.count,B.start+B.count);for(let u=c,d=l;u<d;u++)gs.fromBufferAttribute(a,u),EC(gs,u,o,i,D,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,B=i.length;s<B;s++){let r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}};function EC(n,D,e,t,i,s,B){let r=Qr.distanceSqToPoint(n);if(r<e){let o=new H;Qr.closestPointToPoint(n,o),o.applyMatrix4(t);let f=i.ray.origin.distanceTo(o);if(f<i.near||f>i.far)return;s.push({distance:f,distanceToRay:Math.sqrt(r),point:o,index:D,face:null,faceIndex:null,barycoord:null,object:B})}}var Do=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(D,e){let t=this.getUtoTmapping(D);return this.getPoint(t,e)}getPoints(D=5){let e=[];for(let t=0;t<=D;t++)e.push(this.getPoint(t/D));return e}getSpacedPoints(D=5){let e=[];for(let t=0;t<=D;t++)e.push(this.getPointAt(t/D));return e}getLength(){let D=this.getLengths();return D[D.length-1]}getLengths(D=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===D+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],t,i=this.getPoint(0),s=0;e.push(0);for(let B=1;B<=D;B++)t=this.getPoint(B/D),s+=t.distanceTo(i),e.push(s),i=t;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(D,e){let t=this.getLengths(),i=0,s=t.length,B;e?B=e:B=D*t[s-1];let r=0,o=s-1,f;for(;r<=o;)if(i=Math.floor(r+(o-r)/2),f=t[i]-B,f<0)r=i+1;else if(f>0)o=i-1;else{o=i;break}if(i=o,t[i]===B)return i/(s-1);let C=t[i],c=t[i+1]-C,l=(B-C)/c;return(i+l)/(s-1)}getTangent(D,e){let i=D-1e-4,s=D+1e-4;i<0&&(i=0),s>1&&(s=1);let B=this.getPoint(i),r=this.getPoint(s),o=e||(B.isVector2?new wD:new H);return o.copy(r).sub(B).normalize(),o}getTangentAt(D,e){let t=this.getUtoTmapping(D);return this.getTangent(t,e)}computeFrenetFrames(D,e){let t=new H,i=[],s=[],B=[],r=new H,o=new VD;for(let l=0;l<=D;l++){let u=l/D;i[l]=this.getTangentAt(u,new H)}s[0]=new H,B[0]=new H;let f=Number.MAX_VALUE,C=Math.abs(i[0].x),a=Math.abs(i[0].y),c=Math.abs(i[0].z);C<=f&&(f=C,t.set(1,0,0)),a<=f&&(f=a,t.set(0,1,0)),c<=f&&t.set(0,0,1),r.crossVectors(i[0],t).normalize(),s[0].crossVectors(i[0],r),B[0].crossVectors(i[0],s[0]);for(let l=1;l<=D;l++){if(s[l]=s[l-1].clone(),B[l]=B[l-1].clone(),r.crossVectors(i[l-1],i[l]),r.length()>Number.EPSILON){r.normalize();let u=Math.acos(Ae(i[l-1].dot(i[l]),-1,1));s[l].applyMatrix4(o.makeRotationAxis(r,u))}B[l].crossVectors(i[l],s[l])}if(e===!0){let l=Math.acos(Ae(s[0].dot(s[D]),-1,1));l/=D,i[0].dot(r.crossVectors(s[0],s[D]))>0&&(l=-l);for(let u=1;u<=D;u++)s[u].applyMatrix4(o.makeRotationAxis(i[u],l*u)),B[u].crossVectors(i[u],s[u])}return{tangents:i,normals:s,binormals:B}}clone(){return new this.constructor().copy(this)}copy(D){return this.arcLengthDivisions=D.arcLengthDivisions,this}toJSON(){let D={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return D.arcLengthDivisions=this.arcLengthDivisions,D.type=this.type,D}fromJSON(D){return this.arcLengthDivisions=D.arcLengthDivisions,this}};function Ho(){let n=0,D=0,e=0,t=0;function i(s,B,r,o){n=s,D=r,e=-3*s+3*B-2*r-o,t=2*s-2*B+r+o}return{initCatmullRom:function(s,B,r,o,f){i(B,r,f*(r-s),f*(o-B))},initNonuniformCatmullRom:function(s,B,r,o,f,C,a){let c=(B-s)/f-(r-s)/(f+C)+(r-B)/C,l=(r-B)/C-(o-B)/(C+a)+(o-r)/a;c*=C,l*=C,i(B,r,c,l)},calc:function(s){let B=s*s,r=B*s;return n+D*s+e*B+t*r}}}var xs=new H,UB=new Ho,ZB=new Ho,KB=new Ho,Ks=class extends Do{constructor(D=[],e=!1,t="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=D,this.closed=e,this.curveType=t,this.tension=i}getPoint(D,e=new H){let t=e,i=this.points,s=i.length,B=(s-(this.closed?0:1))*D,r=Math.floor(B),o=B-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/s)+1)*s:o===0&&r===s-1&&(r=s-2,o=1);let f,C;this.closed||r>0?f=i[(r-1)%s]:(xs.subVectors(i[0],i[1]).add(i[0]),f=xs);let a=i[r%s],c=i[(r+1)%s];if(this.closed||r+2<s?C=i[(r+2)%s]:(xs.subVectors(i[s-1],i[s-2]).add(i[s-1]),C=xs),this.curveType==="centripetal"||this.curveType==="chordal"){let l=this.curveType==="chordal"?.5:.25,u=Math.pow(f.distanceToSquared(a),l),d=Math.pow(a.distanceToSquared(c),l),A=Math.pow(c.distanceToSquared(C),l);d<1e-4&&(d=1),u<1e-4&&(u=d),A<1e-4&&(A=d),UB.initNonuniformCatmullRom(f.x,a.x,c.x,C.x,u,d,A),ZB.initNonuniformCatmullRom(f.y,a.y,c.y,C.y,u,d,A),KB.initNonuniformCatmullRom(f.z,a.z,c.z,C.z,u,d,A)}else this.curveType==="catmullrom"&&(UB.initCatmullRom(f.x,a.x,c.x,C.x,this.tension),ZB.initCatmullRom(f.y,a.y,c.y,C.y,this.tension),KB.initCatmullRom(f.z,a.z,c.z,C.z,this.tension));return t.set(UB.calc(o),ZB.calc(o),KB.calc(o)),t}copy(D){super.copy(D),this.points=[];for(let e=0,t=D.points.length;e<t;e++){let i=D.points[e];this.points.push(i.clone())}return this.closed=D.closed,this.curveType=D.curveType,this.tension=D.tension,this}toJSON(){let D=super.toJSON();D.points=[];for(let e=0,t=this.points.length;e<t;e++){let i=this.points[e];D.points.push(i.toArray())}return D.closed=this.closed,D.curveType=this.curveType,D.tension=this.tension,D}fromJSON(D){super.fromJSON(D),this.points=[];for(let e=0,t=D.points.length;e<t;e++){let i=D.points[e];this.points.push(new H().fromArray(i))}return this.closed=D.closed,this.curveType=D.curveType,this.tension=D.tension,this}};var Bi=class n extends Te{constructor(D=1,e=32,t=16,i=0,s=Math.PI*2,B=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:D,widthSegments:e,heightSegments:t,phiStart:i,phiLength:s,thetaStart:B,thetaLength:r},e=Math.max(3,Math.floor(e)),t=Math.max(2,Math.floor(t));let o=Math.min(B+r,Math.PI),f=0,C=[],a=new H,c=new H,l=[],u=[],d=[],A=[];for(let h=0;h<=t;h++){let g=[],x=h/t,y=0;h===0&&B===0?y=.5/e:h===t&&o===Math.PI&&(y=-.5/e);for(let E=0;E<=e;E++){let w=E/e;a.x=-D*Math.cos(i+w*s)*Math.sin(B+x*r),a.y=D*Math.cos(B+x*r),a.z=D*Math.sin(i+w*s)*Math.sin(B+x*r),u.push(a.x,a.y,a.z),c.copy(a).normalize(),d.push(c.x,c.y,c.z),A.push(w+y,1-x),g.push(f++)}C.push(g)}for(let h=0;h<t;h++)for(let g=0;g<e;g++){let x=C[h][g+1],y=C[h][g],E=C[h+1][g],w=C[h+1][g+1];(h!==0||B>0)&&l.push(x,y,w),(h!==t-1||o<Math.PI)&&l.push(y,E,w)}this.setIndex(l),this.setAttribute("position",new Re(u,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(A,2))}copy(D){return super.copy(D),this.parameters=Object.assign({},D.parameters),this}static fromJSON(D){return new n(D.radius,D.widthSegments,D.heightSegments,D.phiStart,D.phiLength,D.thetaStart,D.thetaLength)}};var at=class extends ze{static get type(){return"MeshStandardMaterial"}constructor(D){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new _D(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _D(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ea,this.normalScale=new wD(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(D)}copy(D){return super.copy(D),this.defines={STANDARD:""},this.color.copy(D.color),this.roughness=D.roughness,this.metalness=D.metalness,this.map=D.map,this.lightMap=D.lightMap,this.lightMapIntensity=D.lightMapIntensity,this.aoMap=D.aoMap,this.aoMapIntensity=D.aoMapIntensity,this.emissive.copy(D.emissive),this.emissiveMap=D.emissiveMap,this.emissiveIntensity=D.emissiveIntensity,this.bumpMap=D.bumpMap,this.bumpScale=D.bumpScale,this.normalMap=D.normalMap,this.normalMapType=D.normalMapType,this.normalScale.copy(D.normalScale),this.displacementMap=D.displacementMap,this.displacementScale=D.displacementScale,this.displacementBias=D.displacementBias,this.roughnessMap=D.roughnessMap,this.metalnessMap=D.metalnessMap,this.alphaMap=D.alphaMap,this.envMap=D.envMap,this.envMapRotation.copy(D.envMapRotation),this.envMapIntensity=D.envMapIntensity,this.wireframe=D.wireframe,this.wireframeLinewidth=D.wireframeLinewidth,this.wireframeLinecap=D.wireframeLinecap,this.wireframeLinejoin=D.wireframeLinejoin,this.flatShading=D.flatShading,this.fog=D.fog,this}},We=class extends at{static get type(){return"MeshPhysicalMaterial"}constructor(D){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wD(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _D(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _D(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _D(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(D)}get anisotropy(){return this._anisotropy}set anisotropy(D){this._anisotropy>0!=D>0&&this.version++,this._anisotropy=D}get clearcoat(){return this._clearcoat}set clearcoat(D){this._clearcoat>0!=D>0&&this.version++,this._clearcoat=D}get iridescence(){return this._iridescence}set iridescence(D){this._iridescence>0!=D>0&&this.version++,this._iridescence=D}get dispersion(){return this._dispersion}set dispersion(D){this._dispersion>0!=D>0&&this.version++,this._dispersion=D}get sheen(){return this._sheen}set sheen(D){this._sheen>0!=D>0&&this.version++,this._sheen=D}get transmission(){return this._transmission}set transmission(D){this._transmission>0!=D>0&&this.version++,this._transmission=D}copy(D){return super.copy(D),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=D.anisotropy,this.anisotropyRotation=D.anisotropyRotation,this.anisotropyMap=D.anisotropyMap,this.clearcoat=D.clearcoat,this.clearcoatMap=D.clearcoatMap,this.clearcoatRoughness=D.clearcoatRoughness,this.clearcoatRoughnessMap=D.clearcoatRoughnessMap,this.clearcoatNormalMap=D.clearcoatNormalMap,this.clearcoatNormalScale.copy(D.clearcoatNormalScale),this.dispersion=D.dispersion,this.ior=D.ior,this.iridescence=D.iridescence,this.iridescenceMap=D.iridescenceMap,this.iridescenceIOR=D.iridescenceIOR,this.iridescenceThicknessRange=[...D.iridescenceThicknessRange],this.iridescenceThicknessMap=D.iridescenceThicknessMap,this.sheen=D.sheen,this.sheenColor.copy(D.sheenColor),this.sheenColorMap=D.sheenColorMap,this.sheenRoughness=D.sheenRoughness,this.sheenRoughnessMap=D.sheenRoughnessMap,this.transmission=D.transmission,this.transmissionMap=D.transmissionMap,this.thickness=D.thickness,this.thicknessMap=D.thicknessMap,this.attenuationDistance=D.attenuationDistance,this.attenuationColor.copy(D.attenuationColor),this.specularIntensity=D.specularIntensity,this.specularIntensityMap=D.specularIntensityMap,this.specularColor.copy(D.specularColor),this.specularColorMap=D.specularColorMap,this}};function Ts(n,D,e){return!n||!e&&n.constructor===D?n:typeof D.BYTES_PER_ELEMENT=="number"?new D(n):Array.prototype.slice.call(n)}function od(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fd(n){function D(i,s){return n[i]-n[s]}let e=n.length,t=new Array(e);for(let i=0;i!==e;++i)t[i]=i;return t.sort(D),t}function PC(n,D,e){let t=n.length,i=new n.constructor(t);for(let s=0,B=0;B!==t;++s){let r=e[s]*D;for(let o=0;o!==D;++o)i[B++]=n[r+o]}return i}function aa(n,D,e,t){let i=1,s=n[0];for(;s!==void 0&&s[t]===void 0;)s=n[i++];if(s===void 0)return;let B=s[t];if(B!==void 0)if(Array.isArray(B))do B=s[t],B!==void 0&&(D.push(s.time),e.push.apply(e,B)),s=n[i++];while(s!==void 0);else if(B.toArray!==void 0)do B=s[t],B!==void 0&&(D.push(s.time),B.toArray(e,e.length)),s=n[i++];while(s!==void 0);else do B=s[t],B!==void 0&&(D.push(s.time),e.push(B)),s=n[i++];while(s!==void 0)}var Qt=class{constructor(D,e,t,i){this.parameterPositions=D,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(t),this.sampleValues=e,this.valueSize=t,this.settings=null,this.DefaultSettings_={}}evaluate(D){let e=this.parameterPositions,t=this._cachedIndex,i=e[t],s=e[t-1];t:{D:{let B;e:{n:if(!(D<i)){for(let r=t+2;;){if(i===void 0){if(D<s)break n;return t=e.length,this._cachedIndex=t,this.copySampleValue_(t-1)}if(t===r)break;if(s=i,i=e[++t],D<i)break D}B=e.length;break e}if(!(D>=s)){let r=e[1];D<r&&(t=2,s=r);for(let o=t-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(t===o)break;if(i=s,s=e[--t-1],D>=s)break D}B=t,t=0;break e}break t}for(;t<B;){let r=t+B>>>1;D<e[r]?B=r:t=r+1}if(i=e[t],s=e[t-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return t=e.length,this._cachedIndex=t,this.copySampleValue_(t-1)}this._cachedIndex=t,this.intervalChanged_(t,s,i)}return this.interpolate_(t,s,D,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(D){let e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,s=D*i;for(let B=0;B!==i;++B)e[B]=t[s+B];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},eo=class extends Qt{constructor(D,e,t,i){super(D,e,t,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hf,endingEnd:Hf}}intervalChanged_(D,e,t){let i=this.parameterPositions,s=D-2,B=D+1,r=i[s],o=i[B];if(r===void 0)switch(this.getSettings_().endingStart){case _f:s=D,r=2*e-t;break;case wf:s=i.length-2,r=e+i[s]-i[s+1];break;default:s=D,r=t}if(o===void 0)switch(this.getSettings_().endingEnd){case _f:B=D,o=2*t-e;break;case wf:B=1,o=t+i[1]-i[0];break;default:B=D-1,o=e}let f=(t-e)*.5,C=this.valueSize;this._weightPrev=f/(e-r),this._weightNext=f/(o-t),this._offsetPrev=s*C,this._offsetNext=B*C}interpolate_(D,e,t,i){let s=this.resultBuffer,B=this.sampleValues,r=this.valueSize,o=D*r,f=o-r,C=this._offsetPrev,a=this._offsetNext,c=this._weightPrev,l=this._weightNext,u=(t-e)/(i-e),d=u*u,A=d*u,h=-c*A+2*c*d-c*u,g=(1+c)*A+(-1.5-2*c)*d+(-.5+c)*u+1,x=(-1-l)*A+(1.5+l)*d+.5*u,y=l*A-l*d;for(let E=0;E!==r;++E)s[E]=h*B[C+E]+g*B[f+E]+x*B[o+E]+y*B[a+E];return s}},to=class extends Qt{constructor(D,e,t,i){super(D,e,t,i)}interpolate_(D,e,t,i){let s=this.resultBuffer,B=this.sampleValues,r=this.valueSize,o=D*r,f=o-r,C=(t-e)/(i-e),a=1-C;for(let c=0;c!==r;++c)s[c]=B[f+c]*a+B[o+c]*C;return s}},no=class extends Qt{constructor(D,e,t,i){super(D,e,t,i)}interpolate_(D){return this.copySampleValue_(D-1)}},Dt=class{constructor(D,e,t,i){if(D===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+D);this.name=D,this.times=Ts(e,this.TimeBufferType),this.values=Ts(t,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(D){let e=D.constructor,t;if(e.toJSON!==this.toJSON)t=e.toJSON(D);else{t={name:D.name,times:Ts(D.times,Array),values:Ts(D.values,Array)};let i=D.getInterpolation();i!==D.DefaultInterpolation&&(t.interpolation=i)}return t.type=D.ValueTypeName,t}InterpolantFactoryMethodDiscrete(D){return new no(this.times,this.values,this.getValueSize(),D)}InterpolantFactoryMethodLinear(D){return new to(this.times,this.values,this.getValueSize(),D)}InterpolantFactoryMethodSmooth(D){return new eo(this.times,this.values,this.getValueSize(),D)}setInterpolation(D){let e;switch(D){case $n:e=this.InterpolantFactoryMethodDiscrete;break;case Qn:e=this.InterpolantFactoryMethodLinear;break;case pB:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let t="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(D!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(t);return console.warn("THREE.KeyframeTrack:",t),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $n;case this.InterpolantFactoryMethodLinear:return Qn;case this.InterpolantFactoryMethodSmooth:return pB}}getValueSize(){return this.values.length/this.times.length}shift(D){if(D!==0){let e=this.times;for(let t=0,i=e.length;t!==i;++t)e[t]+=D}return this}scale(D){if(D!==1){let e=this.times;for(let t=0,i=e.length;t!==i;++t)e[t]*=D}return this}trim(D,e){let t=this.times,i=t.length,s=0,B=i-1;for(;s!==i&&t[s]<D;)++s;for(;B!==-1&&t[B]>e;)--B;if(++B,s!==0||B!==i){s>=B&&(B=Math.max(B,1),s=B-1);let r=this.getValueSize();this.times=t.slice(s,B),this.values=this.values.slice(s*r,B*r)}return this}validate(){let D=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),D=!1);let t=this.times,i=this.values,s=t.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),D=!1);let B=null;for(let r=0;r!==s;r++){let o=t[r];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,o),D=!1;break}if(B!==null&&B>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,o,B),D=!1;break}B=o}if(i!==void 0&&od(i))for(let r=0,o=i.length;r!==o;++r){let f=i[r];if(isNaN(f)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,f),D=!1;break}}return D}optimize(){let D=this.times.slice(),e=this.values.slice(),t=this.getValueSize(),i=this.getInterpolation()===pB,s=D.length-1,B=1;for(let r=1;r<s;++r){let o=!1,f=D[r],C=D[r+1];if(f!==C&&(r!==1||f!==D[0]))if(i)o=!0;else{let a=r*t,c=a-t,l=a+t;for(let u=0;u!==t;++u){let d=e[a+u];if(d!==e[c+u]||d!==e[l+u]){o=!0;break}}}if(o){if(r!==B){D[B]=D[r];let a=r*t,c=B*t;for(let l=0;l!==t;++l)e[c+l]=e[a+l]}++B}}if(s>0){D[B]=D[s];for(let r=s*t,o=B*t,f=0;f!==t;++f)e[o+f]=e[r+f];++B}return B!==D.length?(this.times=D.slice(0,B),this.values=e.slice(0,B*t)):(this.times=D,this.values=e),this}clone(){let D=this.times.slice(),e=this.values.slice(),t=this.constructor,i=new t(this.name,D,e);return i.createInterpolant=this.createInterpolant,i}};Dt.prototype.TimeBufferType=Float32Array;Dt.prototype.ValueBufferType=Float32Array;Dt.prototype.DefaultInterpolation=Qn;var Dn=class extends Dt{constructor(D,e,t){super(D,e,t)}};Dn.prototype.ValueTypeName="bool";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=$n;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends Dt{};Ys.prototype.ValueTypeName="color";var Et=class extends Dt{};Et.prototype.ValueTypeName="number";var io=class extends Qt{constructor(D,e,t,i){super(D,e,t,i)}interpolate_(D,e,t,i){let s=this.resultBuffer,B=this.sampleValues,r=this.valueSize,o=(t-e)/(i-e),f=D*r;for(let C=f+r;f!==C;f+=4)ge.slerpFlat(s,0,B,f-r,B,f,o);return s}},Pt=class extends Dt{InterpolantFactoryMethodLinear(D){return new io(this.times,this.values,this.getValueSize(),D)}};Pt.prototype.ValueTypeName="quaternion";Pt.prototype.InterpolantFactoryMethodSmooth=void 0;var en=class extends Dt{constructor(D,e,t){super(D,e,t)}};en.prototype.ValueTypeName="string";en.prototype.ValueBufferType=Array;en.prototype.DefaultInterpolation=$n;en.prototype.InterpolantFactoryMethodLinear=void 0;en.prototype.InterpolantFactoryMethodSmooth=void 0;var Ft=class extends Dt{};Ft.prototype.ValueTypeName="vector";var $s=class{constructor(D="",e=-1,t=[],i=Ec){this.name=D,this.tracks=t,this.duration=e,this.blendMode=i,this.uuid=Ct(),this.duration<0&&this.resetDuration()}static parse(D){let e=[],t=D.tracks,i=1/(D.fps||1);for(let B=0,r=t.length;B!==r;++B)e.push(ad(t[B]).scale(i));let s=new this(D.name,D.duration,e,D.blendMode);return s.uuid=D.uuid,s}static toJSON(D){let e=[],t=D.tracks,i={name:D.name,duration:D.duration,tracks:e,uuid:D.uuid,blendMode:D.blendMode};for(let s=0,B=t.length;s!==B;++s)e.push(Dt.toJSON(t[s]));return i}static CreateFromMorphTargetSequence(D,e,t,i){let s=e.length,B=[];for(let r=0;r<s;r++){let o=[],f=[];o.push((r+s-1)%s,r,(r+1)%s),f.push(0,1,0);let C=fd(o);o=PC(o,1,C),f=PC(f,1,C),!i&&o[0]===0&&(o.push(s),f.push(f[0])),B.push(new Et(".morphTargetInfluences["+e[r].name+"]",o,f).scale(1/t))}return new this(D,-1,B)}static findByName(D,e){let t=D;if(!Array.isArray(D)){let i=D;t=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<t.length;i++)if(t[i].name===e)return t[i];return null}static CreateClipsFromMorphTargetSequences(D,e,t){let i={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,o=D.length;r<o;r++){let f=D[r],C=f.name.match(s);if(C&&C.length>1){let a=C[1],c=i[a];c||(i[a]=c=[]),c.push(f)}}let B=[];for(let r in i)B.push(this.CreateFromMorphTargetSequence(r,i[r],e,t));return B}static parseAnimation(D,e){if(!D)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let t=function(a,c,l,u,d){if(l.length!==0){let A=[],h=[];aa(l,A,h,u),A.length!==0&&d.push(new a(c,A,h))}},i=[],s=D.name||"default",B=D.fps||30,r=D.blendMode,o=D.length||-1,f=D.hierarchy||[];for(let a=0;a<f.length;a++){let c=f[a].keys;if(!(!c||c.length===0))if(c[0].morphTargets){let l={},u;for(u=0;u<c.length;u++)if(c[u].morphTargets)for(let d=0;d<c[u].morphTargets.length;d++)l[c[u].morphTargets[d]]=-1;for(let d in l){let A=[],h=[];for(let g=0;g!==c[u].morphTargets.length;++g){let x=c[u];A.push(x.time),h.push(x.morphTarget===d?1:0)}i.push(new Et(".morphTargetInfluence["+d+"]",A,h))}o=l.length*B}else{let l=".bones["+e[a].name+"]";t(Ft,l+".position",c,"pos",i),t(Pt,l+".quaternion",c,"rot",i),t(Ft,l+".scale",c,"scl",i)}}return i.length===0?null:new this(s,o,i,r)}resetDuration(){let D=this.tracks,e=0;for(let t=0,i=D.length;t!==i;++t){let s=this.tracks[t];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let D=0;D<this.tracks.length;D++)this.tracks[D].trim(0,this.duration);return this}validate(){let D=!0;for(let e=0;e<this.tracks.length;e++)D=D&&this.tracks[e].validate();return D}optimize(){for(let D=0;D<this.tracks.length;D++)this.tracks[D].optimize();return this}clone(){let D=[];for(let e=0;e<this.tracks.length;e++)D.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,D,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function Cd(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Et;case"vector":case"vector2":case"vector3":case"vector4":return Ft;case"color":return Ys;case"quaternion":return Pt;case"bool":case"boolean":return Dn;case"string":return en}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ad(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let D=Cd(n.type);if(n.times===void 0){let e=[],t=[];aa(n.keys,e,t,"value"),n.times=e,n.values=t}return D.parse!==void 0?D.parse(n):new D(n.name,n.times,n.values,n.interpolation)}var Kt={enabled:!1,files:{},add:function(n,D){this.enabled!==!1&&(this.files[n]=D)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},so=class{constructor(D,e,t){let i=this,s=!1,B=0,r=0,o,f=[];this.onStart=void 0,this.onLoad=D,this.onProgress=e,this.onError=t,this.itemStart=function(C){r++,s===!1&&i.onStart!==void 0&&i.onStart(C,B,r),s=!0},this.itemEnd=function(C){B++,i.onProgress!==void 0&&i.onProgress(C,B,r),B===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(C){i.onError!==void 0&&i.onError(C)},this.resolveURL=function(C){return o?o(C):C},this.setURLModifier=function(C){return o=C,this},this.addHandler=function(C,a){return f.push(C,a),this},this.removeHandler=function(C){let a=f.indexOf(C);return a!==-1&&f.splice(a,2),this},this.getHandler=function(C){for(let a=0,c=f.length;a<c;a+=2){let l=f[a],u=f[a+1];if(l.global&&(l.lastIndex=0),l.test(C))return u}return null}}},cd=new so,Ot=class{constructor(D){this.manager=D!==void 0?D:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(D,e){let t=this;return new Promise(function(i,s){t.load(D,i,e,s)})}parse(){}setCrossOrigin(D){return this.crossOrigin=D,this}setWithCredentials(D){return this.withCredentials=D,this}setPath(D){return this.path=D,this}setResourcePath(D){return this.resourcePath=D,this}setRequestHeader(D){return this.requestHeader=D,this}};Ot.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ht={},Bo=class extends Error{constructor(D,e){super(D),this.response=e}},Ii=class extends Ot{constructor(D){super(D)}load(D,e,t,i){D===void 0&&(D=""),this.path!==void 0&&(D=this.path+D),D=this.manager.resolveURL(D);let s=Kt.get(D);if(s!==void 0)return this.manager.itemStart(D),setTimeout(()=>{e&&e(s),this.manager.itemEnd(D)},0),s;if(Ht[D]!==void 0){Ht[D].push({onLoad:e,onProgress:t,onError:i});return}Ht[D]=[],Ht[D].push({onLoad:e,onProgress:t,onError:i});let B=new Request(D,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,o=this.responseType;fetch(B).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;let C=Ht[D],a=f.body.getReader(),c=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),l=c?parseInt(c):0,u=l!==0,d=0,A=new ReadableStream({start(h){g();function g(){a.read().then(({done:x,value:y})=>{if(x)h.close();else{d+=y.byteLength;let E=new ProgressEvent("progress",{lengthComputable:u,loaded:d,total:l});for(let w=0,v=C.length;w<v;w++){let P=C[w];P.onProgress&&P.onProgress(E)}h.enqueue(y),g()}},x=>{h.error(x)})}}});return new Response(A)}else throw new Bo(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(o){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(C=>new DOMParser().parseFromString(C,r));case"json":return f.json();default:if(r===void 0)return f.text();{let a=/charset="?([^;"\s]*)"?/i.exec(r),c=a&&a[1]?a[1].toLowerCase():void 0,l=new TextDecoder(c);return f.arrayBuffer().then(u=>l.decode(u))}}}).then(f=>{Kt.add(D,f);let C=Ht[D];delete Ht[D];for(let a=0,c=C.length;a<c;a++){let l=C[a];l.onLoad&&l.onLoad(f)}}).catch(f=>{let C=Ht[D];if(C===void 0)throw this.manager.itemError(D),f;delete Ht[D];for(let a=0,c=C.length;a<c;a++){let l=C[a];l.onError&&l.onError(f)}this.manager.itemError(D)}).finally(()=>{this.manager.itemEnd(D)}),this.manager.itemStart(D)}setResponseType(D){return this.responseType=D,this}setMimeType(D){return this.mimeType=D,this}};var ro=class extends Ot{constructor(D){super(D)}load(D,e,t,i){this.path!==void 0&&(D=this.path+D),D=this.manager.resolveURL(D);let s=this,B=Kt.get(D);if(B!==void 0)return s.manager.itemStart(D),setTimeout(function(){e&&e(B),s.manager.itemEnd(D)},0),B;let r=Li("img");function o(){C(),Kt.add(D,this),e&&e(this),s.manager.itemEnd(D)}function f(a){C(),i&&i(a),s.manager.itemError(D),s.manager.itemEnd(D)}function C(){r.removeEventListener("load",o,!1),r.removeEventListener("error",f,!1)}return r.addEventListener("load",o,!1),r.addEventListener("error",f,!1),D.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(D),r.src=D,r}};var Qs=class extends Ot{constructor(D){super(D)}load(D,e,t,i){let s=new xe,B=new ro(this.manager);return B.setCrossOrigin(this.crossOrigin),B.setPath(this.path),B.load(D,function(r){s.image=r,s.needsUpdate=!0,e!==void 0&&e(s)},t,i),s}},ri=class extends ae{constructor(D,e=1){super(),this.isLight=!0,this.type="Light",this.color=new _D(D),this.intensity=e}dispose(){}copy(D,e){return super.copy(D,e),this.color.copy(D.color),this.intensity=D.intensity,this}toJSON(D){let e=super.toJSON(D);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},DB=class extends ri{constructor(D,e,t){super(D,t),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _D(e)}copy(D,e){return super.copy(D,e),this.groundColor.copy(D.groundColor),this}},YB=new VD,FC=new H,OC=new H,ji=class{constructor(D){this.camera=D,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wD(512,512),this.map=null,this.mapPass=null,this.matrix=new VD,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qi,this._frameExtents=new wD(1,1),this._viewportCount=1,this._viewports=[new YD(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(D){let e=this.camera,t=this.matrix;FC.setFromMatrixPosition(D.matrixWorld),e.position.copy(FC),OC.setFromMatrixPosition(D.target.matrixWorld),e.lookAt(OC),e.updateMatrixWorld(),YB.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(YB),t.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),t.multiply(YB)}getViewport(D){return this._viewports[D]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(D){return this.camera=D.camera.clone(),this.intensity=D.intensity,this.bias=D.bias,this.radius=D.radius,this.mapSize.copy(D.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let D={};return this.intensity!==1&&(D.intensity=this.intensity),this.bias!==0&&(D.bias=this.bias),this.normalBias!==0&&(D.normalBias=this.normalBias),this.radius!==1&&(D.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(D.mapSize=this.mapSize.toArray()),D.camera=this.camera.toJSON(!1).object,delete D.camera.matrix,D}},oo=class extends ji{constructor(){super(new ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(D){let e=this.camera,t=Di*2*D.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=D.distance||e.far;(t!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=t,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(D)}copy(D){return super.copy(D),this.focus=D.focus,this}},eB=class extends ri{constructor(D,e,t=0,i=Math.PI/3,s=0,B=2){super(D,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=t,this.angle=i,this.penumbra=s,this.decay=B,this.map=null,this.shadow=new oo}get power(){return this.intensity*Math.PI}set power(D){this.intensity=D/Math.PI}dispose(){this.shadow.dispose()}copy(D,e){return super.copy(D,e),this.distance=D.distance,this.angle=D.angle,this.penumbra=D.penumbra,this.decay=D.decay,this.target=D.target.clone(),this.shadow=D.shadow.clone(),this}},NC=new VD,gi=new H,$B=new H,fo=class extends ji{constructor(){super(new ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new wD(4,2),this._viewportCount=6,this._viewports=[new YD(2,1,1,1),new YD(0,1,1,1),new YD(3,1,1,1),new YD(1,1,1,1),new YD(3,0,1,1),new YD(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(D,e=0){let t=this.camera,i=this.matrix,s=D.distance||t.far;s!==t.far&&(t.far=s,t.updateProjectionMatrix()),gi.setFromMatrixPosition(D.matrixWorld),t.position.copy(gi),$B.copy(t.position),$B.add(this._cubeDirections[e]),t.up.copy(this._cubeUps[e]),t.lookAt($B),t.updateMatrixWorld(),i.makeTranslation(-gi.x,-gi.y,-gi.z),NC.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(NC)}},oi=class extends ri{constructor(D,e,t=0,i=2){super(D,e),this.isPointLight=!0,this.type="PointLight",this.distance=t,this.decay=i,this.shadow=new fo}get power(){return this.intensity*4*Math.PI}set power(D){this.intensity=D/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(D,e){return super.copy(D,e),this.distance=D.distance,this.decay=D.decay,this.shadow=D.shadow.clone(),this}},Co=class extends ji{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tn=class extends ri{constructor(D,e){super(D,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new Co}dispose(){this.shadow.dispose()}copy(D){return super.copy(D),this.target=D.target.clone(),this.shadow=D.shadow.clone(),this}};var nn=class{static decodeText(D){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(D);let e="";for(let t=0,i=D.length;t<i;t++)e+=String.fromCharCode(D[t]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(D){let e=D.lastIndexOf("/");return e===-1?"./":D.slice(0,e+1)}static resolveURL(D,e){return typeof D!="string"||D===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(D)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(D)||/^data:.*,.*$/i.test(D)||/^blob:.*$/i.test(D)?D:e+D)}};var tB=class extends Ot{constructor(D){super(D),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(D){return this.options=D,this}load(D,e,t,i){D===void 0&&(D=""),this.path!==void 0&&(D=this.path+D),D=this.manager.resolveURL(D);let s=this,B=Kt.get(D);if(B!==void 0){if(s.manager.itemStart(D),B.then){B.then(f=>{e&&e(f),s.manager.itemEnd(D)}).catch(f=>{i&&i(f)});return}return setTimeout(function(){e&&e(B),s.manager.itemEnd(D)},0),B}let r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader;let o=fetch(D,r).then(function(f){return f.blob()}).then(function(f){return createImageBitmap(f,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(f){return Kt.add(D,f),e&&e(f),s.manager.itemEnd(D),f}).catch(function(f){i&&i(f),Kt.remove(D),s.manager.itemError(D),s.manager.itemEnd(D)});Kt.add(D,o),s.manager.itemStart(D)}};var _o="\\[\\]\\.:\\/",ld=new RegExp("["+_o+"]","g"),wo="[^"+_o+"]",hd="[^"+_o.replace("\\.","")+"]",Ad=/((?:WC+[\/:])*)/.source.replace("WC",wo),ud=/(WCOD+)?/.source.replace("WCOD",hd),dd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wo),pd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wo),md=new RegExp("^"+Ad+ud+dd+pd+"$"),yd=["material","materials","bones","map"],ao=class{constructor(D,e,t){let i=t||oe.parseTrackName(e);this._targetGroup=D,this._bindings=D.subscribe_(e,i)}getValue(D,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(D,e)}setValue(D,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=t.length;i!==s;++i)t[i].setValue(D,e)}bind(){let D=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=D.length;e!==t;++e)D[e].bind()}unbind(){let D=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=D.length;e!==t;++e)D[e].unbind()}},oe=class n{constructor(D,e,t){this.path=e,this.parsedPath=t||n.parseTrackName(e),this.node=n.findNode(D,this.parsedPath.nodeName),this.rootNode=D,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(D,e,t){return D&&D.isAnimationObjectGroup?new n.Composite(D,e,t):new n(D,e,t)}static sanitizeNodeName(D){return D.replace(/\s/g,"_").replace(ld,"")}static parseTrackName(D){let e=md.exec(D);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+D);let t={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=t.nodeName&&t.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=t.nodeName.substring(i+1);yd.indexOf(s)!==-1&&(t.nodeName=t.nodeName.substring(0,i),t.objectName=s)}if(t.propertyName===null||t.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+D);return t}static findNode(D,e){if(e===void 0||e===""||e==="."||e===-1||e===D.name||e===D.uuid)return D;if(D.skeleton){let t=D.skeleton.getBoneByName(e);if(t!==void 0)return t}if(D.children){let t=function(s){for(let B=0;B<s.length;B++){let r=s[B];if(r.name===e||r.uuid===e)return r;let o=t(r.children);if(o)return o}return null},i=t(D.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(D,e){D[e]=this.targetObject[this.propertyName]}_getValue_array(D,e){let t=this.resolvedProperty;for(let i=0,s=t.length;i!==s;++i)D[e++]=t[i]}_getValue_arrayElement(D,e){D[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(D,e){this.resolvedProperty.toArray(D,e)}_setValue_direct(D,e){this.targetObject[this.propertyName]=D[e]}_setValue_direct_setNeedsUpdate(D,e){this.targetObject[this.propertyName]=D[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(D,e){this.targetObject[this.propertyName]=D[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(D,e){let t=this.resolvedProperty;for(let i=0,s=t.length;i!==s;++i)t[i]=D[e++]}_setValue_array_setNeedsUpdate(D,e){let t=this.resolvedProperty;for(let i=0,s=t.length;i!==s;++i)t[i]=D[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(D,e){let t=this.resolvedProperty;for(let i=0,s=t.length;i!==s;++i)t[i]=D[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(D,e){this.resolvedProperty[this.propertyIndex]=D[e]}_setValue_arrayElement_setNeedsUpdate(D,e){this.resolvedProperty[this.propertyIndex]=D[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(D,e){this.resolvedProperty[this.propertyIndex]=D[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(D,e){this.resolvedProperty.fromArray(D,e)}_setValue_fromArray_setNeedsUpdate(D,e){this.resolvedProperty.fromArray(D,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(D,e){this.resolvedProperty.fromArray(D,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(D,e){this.bind(),this.getValue(D,e)}_setValue_unbound(D,e){this.bind(),this.setValue(D,e)}bind(){let D=this.node,e=this.parsedPath,t=e.objectName,i=e.propertyName,s=e.propertyIndex;if(D||(D=n.findNode(this.rootNode,e.nodeName),this.node=D),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!D){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(t){let f=e.objectIndex;switch(t){case"materials":if(!D.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!D.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}D=D.material.materials;break;case"bones":if(!D.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}D=D.skeleton.bones;for(let C=0;C<D.length;C++)if(D[C].name===f){f=C;break}break;case"map":if("map"in D){D=D.map;break}if(!D.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!D.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}D=D.material.map;break;default:if(D[t]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}D=D[t]}if(f!==void 0){if(D[f]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,D);return}D=D[f]}}let B=D[i];if(B===void 0){let f=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+f+"."+i+" but it wasn't found.",D);return}let r=this.Versioning.None;this.targetObject=D,D.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:D.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let o=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!D.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!D.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}D.morphTargetDictionary[s]!==void 0&&(s=D.morphTargetDictionary[s])}o=this.BindingType.ArrayElement,this.resolvedProperty=B,this.propertyIndex=s}else B.fromArray!==void 0&&B.toArray!==void 0?(o=this.BindingType.HasFromToArray,this.resolvedProperty=B):Array.isArray(B)?(o=this.BindingType.EntireArray,this.resolvedProperty=B):this.propertyName=i;this.getValue=this.GetterByBindingType[o],this.setValue=this.SetterByBindingTypeAndVersioning[o][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=ao;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var m0=new Float32Array(1);var IC=new VD,nB=class{constructor(D,e,t=0,i=1/0){this.ray=new qt(D,e),this.near=t,this.far=i,this.camera=null,this.layers=new Vi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(D,e){this.ray.set(D,e)}setFromCamera(D,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(D.x,D.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(D.x,D.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(D){return IC.identity().extractRotation(D.matrixWorld),this.ray.origin.setFromMatrixPosition(D.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(IC),this}intersectObject(D,e=!0,t=[]){return co(D,this,t,e),t.sort(jC),t}intersectObjects(D,e=!0,t=[]){for(let i=0,s=D.length;i<s;i++)co(D[i],this,t,e);return t.sort(jC),t}};function jC(n,D){return n.distance-D.distance}function co(n,D,e,t){let i=!0;if(n.layers.test(D.layers)&&n.raycast(D,e)===!1&&(i=!1),i===!0&&t===!0){let s=n.children;for(let B=0,r=s.length;B<r;B++)co(s[B],D,e,!0)}}var Xi=class{constructor(D=1,e=0,t=0){return this.radius=D,this.phi=e,this.theta=t,this}set(D,e,t){return this.radius=D,this.phi=e,this.theta=t,this}copy(D){return this.radius=D.radius,this.phi=D.phi,this.theta=D.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(D){return this.setFromCartesianCoords(D.x,D.y,D.z)}setFromCartesianCoords(D,e,t){return this.radius=Math.sqrt(D*D+e*e+t*t),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(D,t),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var iB=class extends Lt{constructor(D,e=null){super(),this.object=D,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lo);var ca={type:"change"},Mo={type:"start"},ha={type:"end"},fB=new qt,la=new rt,bd=Math.cos(70*gn.DEG2RAD),me=new H,Ne=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vo=1e-6,CB=class extends iB{constructor(D,e=null){super(D,e),this.state=ie.NONE,this.enabled=!0,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rn.ROTATE,MIDDLE:Rn.DOLLY,RIGHT:Rn.PAN},this.touches={ONE:pt.ROTATE,TWO:pt.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new ge,this._lastTargetPosition=new H,this._quat=new ge().setFromUnitVectors(D.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xi,this._sphericalDelta=new Xi,this._scale=1,this._panOffset=new H,this._rotateStart=new wD,this._rotateEnd=new wD,this._rotateDelta=new wD,this._panStart=new wD,this._panEnd=new wD,this._panDelta=new wD,this._dollyStart=new wD,this._dollyEnd=new wD,this._dollyDelta=new wD,this._dollyDirection=new H,this._mouse=new wD,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gd.bind(this),this._onPointerDown=Rd.bind(this),this._onPointerUp=xd.bind(this),this._onContextMenu=Sd.bind(this),this._onMouseWheel=_d.bind(this),this._onKeyDown=wd.bind(this),this._onTouchStart=vd.bind(this),this._onTouchMove=Md.bind(this),this._onMouseDown=Td.bind(this),this._onMouseMove=Hd.bind(this),this._interceptControlDown=Ld.bind(this),this._interceptControlUp=Vd.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(D){D.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=D}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ca),this.update(),this.state=ie.NONE}update(D=null){let e=this.object.position;me.copy(e).sub(this.target),me.applyQuaternion(this._quat),this._spherical.setFromVector3(me),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(D)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let t=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(t)&&isFinite(i)&&(t<-Math.PI?t+=Ne:t>Math.PI&&(t-=Ne),i<-Math.PI?i+=Ne:i>Math.PI&&(i-=Ne),t<=i?this._spherical.theta=Math.max(t,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(t+i)/2?Math.max(t,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let B=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=B!=this._spherical.radius}if(me.setFromSpherical(this._spherical),me.applyQuaternion(this._quatInverse),e.copy(this.target).add(me),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let B=null;if(this.object.isPerspectiveCamera){let r=me.length();B=this._clampDistance(r*this._scale);let o=r-B;this.object.position.addScaledVector(this._dollyDirection,o),this.object.updateMatrixWorld(),s=!!o}else if(this.object.isOrthographicCamera){let r=new H(this._mouse.x,this._mouse.y,0);r.unproject(this.object);let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=o!==this.object.zoom;let f=new H(this._mouse.x,this._mouse.y,0);f.unproject(this.object),this.object.position.sub(f).add(r),this.object.updateMatrixWorld(),B=me.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;B!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(B).add(this.object.position):(fB.origin.copy(this.object.position),fB.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fB.direction))<bd?this.object.lookAt(this.target):(la.setFromNormalAndCoplanarPoint(this.object.up,this.target),fB.intersectPlane(la,this.target))))}else if(this.object.isOrthographicCamera){let B=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),B!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vo||this._lastTargetPosition.distanceToSquared(this.target)>vo?(this.dispatchEvent(ca),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(D){return D!==null?Ne/60*this.autoRotateSpeed*D:Ne/60/60*this.autoRotateSpeed}_getZoomScale(D){let e=Math.abs(D*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(D){this._sphericalDelta.theta-=D}_rotateUp(D){this._sphericalDelta.phi-=D}_panLeft(D,e){me.setFromMatrixColumn(e,0),me.multiplyScalar(-D),this._panOffset.add(me)}_panUp(D,e){this.screenSpacePanning===!0?me.setFromMatrixColumn(e,1):(me.setFromMatrixColumn(e,0),me.crossVectors(this.object.up,me)),me.multiplyScalar(D),this._panOffset.add(me)}_pan(D,e){let t=this.domElement;if(this.object.isPerspectiveCamera){let i=this.object.position;me.copy(i).sub(this.target);let s=me.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*D*s/t.clientHeight,this.object.matrix),this._panUp(2*e*s/t.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(D*(this.object.right-this.object.left)/this.object.zoom/t.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/t.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(D){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(D){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=D:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(D,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let t=this.domElement.getBoundingClientRect(),i=D-t.left,s=e-t.top,B=t.width,r=t.height;this._mouse.x=i/B*2-1,this._mouse.y=-(s/r)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(D){return Math.max(this.minDistance,Math.min(this.maxDistance,D))}_handleMouseDownRotate(D){this._rotateStart.set(D.clientX,D.clientY)}_handleMouseDownDolly(D){this._updateZoomParameters(D.clientX,D.clientX),this._dollyStart.set(D.clientX,D.clientY)}_handleMouseDownPan(D){this._panStart.set(D.clientX,D.clientY)}_handleMouseMoveRotate(D){this._rotateEnd.set(D.clientX,D.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(D){this._dollyEnd.set(D.clientX,D.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(D){this._panEnd.set(D.clientX,D.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(D){this._updateZoomParameters(D.clientX,D.clientY),D.deltaY<0?this._dollyIn(this._getZoomScale(D.deltaY)):D.deltaY>0&&this._dollyOut(this._getZoomScale(D.deltaY)),this.update()}_handleKeyDown(D){let e=!1;switch(D.code){case this.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?this._rotateUp(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?this._rotateUp(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?this._rotateLeft(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?this._rotateLeft(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(D.preventDefault(),this.update())}_handleTouchStartRotate(D){if(this._pointers.length===1)this._rotateStart.set(D.pageX,D.pageY);else{let e=this._getSecondPointerPosition(D),t=.5*(D.pageX+e.x),i=.5*(D.pageY+e.y);this._rotateStart.set(t,i)}}_handleTouchStartPan(D){if(this._pointers.length===1)this._panStart.set(D.pageX,D.pageY);else{let e=this._getSecondPointerPosition(D),t=.5*(D.pageX+e.x),i=.5*(D.pageY+e.y);this._panStart.set(t,i)}}_handleTouchStartDolly(D){let e=this._getSecondPointerPosition(D),t=D.pageX-e.x,i=D.pageY-e.y,s=Math.sqrt(t*t+i*i);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(D){this.enableZoom&&this._handleTouchStartDolly(D),this.enablePan&&this._handleTouchStartPan(D)}_handleTouchStartDollyRotate(D){this.enableZoom&&this._handleTouchStartDolly(D),this.enableRotate&&this._handleTouchStartRotate(D)}_handleTouchMoveRotate(D){if(this._pointers.length==1)this._rotateEnd.set(D.pageX,D.pageY);else{let t=this._getSecondPointerPosition(D),i=.5*(D.pageX+t.x),s=.5*(D.pageY+t.y);this._rotateEnd.set(i,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(D){if(this._pointers.length===1)this._panEnd.set(D.pageX,D.pageY);else{let e=this._getSecondPointerPosition(D),t=.5*(D.pageX+e.x),i=.5*(D.pageY+e.y);this._panEnd.set(t,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(D){let e=this._getSecondPointerPosition(D),t=D.pageX-e.x,i=D.pageY-e.y,s=Math.sqrt(t*t+i*i);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let B=(D.pageX+e.x)*.5,r=(D.pageY+e.y)*.5;this._updateZoomParameters(B,r)}_handleTouchMoveDollyPan(D){this.enableZoom&&this._handleTouchMoveDolly(D),this.enablePan&&this._handleTouchMovePan(D)}_handleTouchMoveDollyRotate(D){this.enableZoom&&this._handleTouchMoveDolly(D),this.enableRotate&&this._handleTouchMoveRotate(D)}_addPointer(D){this._pointers.push(D.pointerId)}_removePointer(D){delete this._pointerPositions[D.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==D.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(D){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==D.pointerId)return!0;return!1}_trackPointer(D){let e=this._pointerPositions[D.pointerId];e===void 0&&(e=new wD,this._pointerPositions[D.pointerId]=e),e.set(D.pageX,D.pageY)}_getSecondPointerPosition(D){let e=D.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(D){let e=D.deltaMode,t={clientX:D.clientX,clientY:D.clientY,deltaY:D.deltaY};switch(e){case 1:t.deltaY*=16;break;case 2:t.deltaY*=100;break}return D.ctrlKey&&!this._controlActive&&(t.deltaY*=10),t}};function Rd(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function gd(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function xd(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ha),this.state=ie.NONE;break;case 1:let D=this._pointers[0],e=this._pointerPositions[D];this._onTouchStart({pointerId:D,pageX:e.x,pageY:e.y});break}}function Td(n){let D;switch(n.button){case 0:D=this.mouseButtons.LEFT;break;case 1:D=this.mouseButtons.MIDDLE;break;case 2:D=this.mouseButtons.RIGHT;break;default:D=-1}switch(D){case Rn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case Rn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case Rn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Mo)}function Hd(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function _d(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(Mo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(ha))}function wd(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function vd(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case pt.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case pt.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case pt.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(Mo)}function Md(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function Sd(n){this.enabled!==!1&&n.preventDefault()}function Ld(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Vd(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function aB(n,D=!1){let e=n[0].index!==null,t=new Set(Object.keys(n[0].attributes)),i=new Set(Object.keys(n[0].morphAttributes)),s={},B={},r=n[0].morphTargetsRelative,o=new Te,f=0;for(let C=0;C<n.length;++C){let a=n[C],c=0;if(e!==(a.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let l in a.attributes){if(!t.has(l))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+'. All geometries must have compatible attributes; make sure "'+l+'" attribute exists among all geometries, or in none of them.'),null;s[l]===void 0&&(s[l]=[]),s[l].push(a.attributes[l]),c++}if(c!==t.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+". Make sure all geometries have the same number of attributes."),null;if(r!==a.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let l in a.morphAttributes){if(!i.has(l))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+".  .morphAttributes must be consistent throughout all geometries."),null;B[l]===void 0&&(B[l]=[]),B[l].push(a.morphAttributes[l])}if(D){let l;if(e)l=a.index.count;else if(a.attributes.position!==void 0)l=a.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+C+". The geometry must have either an index or a position attribute"),null;o.addGroup(f,l,C),f+=l}}if(e){let C=0,a=[];for(let c=0;c<n.length;++c){let l=n[c].index;for(let u=0;u<l.count;++u)a.push(l.getX(u)+C);C+=n[c].attributes.position.count}o.setIndex(a)}for(let C in s){let a=Aa(s[C]);if(!a)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+C+" attribute."),null;o.setAttribute(C,a)}for(let C in B){let a=B[C][0].length;if(a===0)break;o.morphAttributes=o.morphAttributes||{},o.morphAttributes[C]=[];for(let c=0;c<a;++c){let l=[];for(let d=0;d<B[C].length;++d)l.push(B[C][d][c]);let u=Aa(l);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+C+" morphAttribute."),null;o.morphAttributes[C].push(u)}}return o}function Aa(n){let D,e,t,i=-1,s=0;for(let f=0;f<n.length;++f){let C=n[f];if(D===void 0&&(D=C.array.constructor),D!==C.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=C.itemSize),e!==C.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(t===void 0&&(t=C.normalized),t!==C.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=C.gpuType),i!==C.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=C.count*e}let B=new D(s),r=new he(B,e,t),o=0;for(let f=0;f<n.length;++f){let C=n[f];if(C.isInterleavedBufferAttribute){let a=o/e;for(let c=0,l=C.count;c<l;c++)for(let u=0;u<e;u++){let d=C.getComponent(c,u);r.setComponent(c+a,u,d)}}else B.set(C.array,o);o+=C.count*e}return i!==void 0&&(r.gpuType=i),r}function So(n,D){if(D===Da)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(D===Ji||D===BB){let e=n.getIndex();if(e===null){let B=[],r=n.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)B.push(o);n.setIndex(B),e=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}let t=e.count-2,i=[];if(D===Ji)for(let B=1;B<=t;B++)i.push(e.getX(0)),i.push(e.getX(B)),i.push(e.getX(B+1));else for(let B=0;B<t;B++)B%2===0?(i.push(e.getX(B)),i.push(e.getX(B+1)),i.push(e.getX(B+2))):(i.push(e.getX(B+2)),i.push(e.getX(B+1)),i.push(e.getX(B)));i.length/3!==t&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let s=n.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",D),n}var qd=n=>n.isVector3?n:new H(n[0],n[1],n[2]);function Wi(n,D,e){let t=n.length;if(D<=n[0].y)return n[0][e];if(D>=n[t-1].y)return n[t-1][e];for(let i=0;i<t-1;i++){let s=n[i],B=n[i+1];if(D>=s.y&&D<=B.y){let r=(D-s.y)/(B.y-s.y),o=r*r*(3-2*r);return s[e]+(B[e]-s[e])*o}}return n[t-1][e]}function Lo(n,{seg:D=28,capTop:e=!0,capBottom:t=!0}={}){let i=[],s=[],B=D+1;n.forEach(f=>{for(let C=0;C<=D;C++){let a=C/D*Math.PI*2;i.push((f.x||0)+f.rx*Math.cos(a),f.y,(f.z||0)+f.rz*Math.sin(a))}});for(let f=0;f<n.length-1;f++)for(let C=0;C<D;C++){let a=f*B+C,c=a+1,l=a+B,u=l+1;s.push(a,l,c,c,l,u)}let r=(f,C)=>{let a=n[f],c=i.length/3;i.push(a.x||0,a.y,a.z||0);for(let l=0;l<D;l++){let u=f*B+l,d=u+1;C?s.push(c,d,u):s.push(c,u,d)}};t&&r(0,!1),e&&r(n.length-1,!0);let o=new Te;return o.setAttribute("position",new Re(i,3)),o.setIndex(s),o.computeVertexNormals(),o}function fD(n,D=.01,{radial:e=10,segs:t=null,ends:i="round",tension:s=.5,closed:B=!1,ellip:r=1}={}){let o=n.map(qd),f=new Ks(o,B,"catmullrom",s),C=f.getLength(),a=t||Math.max(6,Math.min(400,Math.ceil(C/.012))),c=typeof D=="function"?D:Array.isArray(D)?R=>{let m=R*(D.length-1),M=Math.min(D.length-2,Math.floor(m)),X=m-M;return D[M]+(D[M+1]-D[M])*X}:()=>D,l=f.computeFrenetFrames(a,B),u=[],d=[],A=a+1,h=i==="round"?3:0,g=[],x=(R,m,M,X,I=1)=>{let z=u.length/3;for(let $=0;$<e;$++){let W=$/e*Math.PI*2,DD=Math.cos(W)*X,J=Math.sin(W)*X*r;u.push(R.x+(m.x*DD+M.x*J)*I,R.y+(m.y*DD+M.y*J)*I,R.z+(m.z*DD+M.z*J)*I)}g.push(z)},y=f.getPointAt(0),E=f.getPointAt(1),w=c(0),v=c(1);if(h){let R=f.getTangentAt(0).negate();for(let m=h;m>=1;m--){let M=m/(h+1)*(Math.PI/2),X=R.clone().multiplyScalar(Math.sin(M)*w);x(y.clone().add(X),l.normals[0],l.binormals[0],w*Math.cos(M))}}for(let R=0;R<=a;R++){let m=R/a,M=f.getPointAt(m);x(M,l.normals[R],l.binormals[R],c(m))}if(h){let R=f.getTangentAt(1);for(let m=1;m<=h;m++){let M=m/(h+1)*(Math.PI/2),X=R.clone().multiplyScalar(Math.sin(M)*v);x(E.clone().add(X),l.normals[a],l.binormals[a],v*Math.cos(M))}}for(let R=0;R<g.length-1;R++)for(let m=0;m<e;m++){let M=g[R]+m,X=g[R]+(m+1)%e,I=g[R+1]+m,z=g[R+1]+(m+1)%e;d.push(M,X,I,X,z,I)}if(i==="flat"){let R=(m,M,X)=>{let I=u.length/3;u.push(M.x,M.y,M.z);for(let z=0;z<e;z++){let $=m+z,W=m+(z+1)%e;X?d.push(I,W,$):d.push(I,$,W)}};R(g[0],y,!0),R(g[g.length-1],E,!1)}let P=new Te;return P.setAttribute("position",new Re(u,3)),P.setIndex(d),P.computeVertexNormals(),P}function PD(n,D,e,{at:t=[0,0,0],rot:i=[0,0,0],seg:s=28,hseg:B=18,noise:r=0,seed:o=1,freq:f=3,deform:C=null}={}){let a=new Bi(1,s,B),c=a.attributes.position,l=new H;for(let d=0;d<c.count;d++){l.fromBufferAttribute(c,d);let A=1;r&&(A+=r*(Math.sin(l.x*f*2.1+o)*Math.cos(l.y*f*1.7+o*1.3)+Math.sin(l.z*f*2.7+o*.7)*.7)),l.multiplyScalar(A),l.set(l.x*n,l.y*D,l.z*e),C&&C(l),c.setXYZ(d,l.x,l.y,l.z)}a.computeVertexNormals();let u=new VD().compose(new H(...t),new ge().setFromEuler(new $e(...i)),new H(1,1,1));return a.applyMatrix4(u),a}function Gi(n,D,e=16){return PD(n,n,n,{at:D,seg:e,hseg:Math.max(8,e>>1)})}function Ed(n,D){let e=n;D?e=n.clone():e=n.index?n.toNonIndexed():n.clone();for(let t of Object.keys(e.attributes))t!=="position"&&e.deleteAttribute(t);return e}function MD(n){let D=n.every(t=>t.index),e=aB(n.map(t=>Ed(t,D)));if(!e)throw new Error("merge fallito");return e.computeVertexNormals(),e}function Ve(n){let D=n.clone();D.scale(-1,1,1);let e=D.index;if(e){let t=e.array;for(let i=0;i<t.length;i+=3){let s=t[i+1];t[i+1]=t[i+2],t[i+2]=s}e.needsUpdate=!0}else{let t=D.attributes.position.array;for(let i=0;i<t.length;i+=9)for(let s=0;s<3;s++){let B=t[i+3+s];t[i+3+s]=t[i+6+s],t[i+6+s]=B}D.attributes.position.needsUpdate=!0}return D.computeVertexNormals(),D}function ua(n,D,e,t=1){let i=n.attributes.position;for(let s=0;s<i.count;s++){let B=(i.getX(s)-D[0])/e[0],r=(i.getY(s)-D[1])/e[1],o=(i.getZ(s)-D[2])/e[2],f=Math.hypot(B,r,o);if(f<t&&f>1e-6){let C=t/f;i.setXYZ(s,D[0]+B*C*e[0],D[1]+r*C*e[1],D[2]+o*C*e[2])}}return n.computeVertexNormals(),n}function Ci(n){let D=n>>>0||1;return()=>(D=D*1664525+1013904223>>>0,D/4294967296)}var Vo=[{y:.78,rx:.15,rz:.098,cz:0},{y:.86,rx:.172,rz:.108,cz:0},{y:.93,rx:.171,rz:.108,cz:.002},{y:1.03,rx:.148,rz:.1,cz:.004},{y:1.12,rx:.154,rz:.106,cz:.006},{y:1.22,rx:.17,rz:.118,cz:.006},{y:1.32,rx:.18,rz:.124,cz:.006},{y:1.4,rx:.19,rz:.11,cz:0},{y:1.445,rx:.15,rz:.088,cz:0},{y:1.485,rx:.074,rz:.066,cz:.002}],Ui=n=>({rx:Wi(Vo,n,"rx"),rz:Wi(Vo,n,"rz"),cz:Wi(Vo,n,"cz")});var Pd=[{y:.84,z:-.088},{y:.92,z:-.076},{y:.98,z:-.062},{y:1.04,z:-.06},{y:1.12,z:-.072},{y:1.2,z:-.082},{y:1.3,z:-.084},{y:1.4,z:-.068},{y:1.46,z:-.052},{y:1.53,z:-.03}],sn=n=>Wi(Pd,n,"z"),_0=(()=>{let n=Array.from({length:7},(t,i)=>1.525-i*.0133),D=Array.from({length:12},(t,i)=>1.425-i*.02545),e=Array.from({length:5},(t,i)=>1.115-i*.0325);return{C:n,T:D,L:e}})();var Nt={pts:[[.2,1.385,0],[.226,1.25,.004],[.25,1.12,.01],[.278,1,.014],[.302,.86,.012]],r:[.056,.047,.036,.034,.023],hand:[.312,.775,.012]},ai={pts:[[.088,.9,0],[.094,.7,.006],[.096,.5,.012],[.095,.3,-.004],[.094,.088,-.004]],r:[.092,.075,.053,.052,.03]};function da(n){let D=[];for(let B=.78;B<=1.485;B+=.0235){let r=Ui(B);D.push({y:B,x:0,z:r.cz,rx:r.rx,rz:r.rz})}let e=[];e.push(Lo(D,{seg:40})),e.push(Lo([{y:1.47,z:.004,rx:.058,rz:.058},{y:1.52,z:.008,rx:.05,rz:.054},{y:1.575,z:.012,rx:.052,rz:.056}],{seg:20})),e.push(PD(.083,.106,.098,{at:[0,1.655,0],seg:32,hseg:22})),e.push(PD(.058,.048,.068,{at:[0,1.585,.032],seg:24,hseg:14}));let i=[fD(Nt.pts,Nt.r,{radial:16,ends:"round"}),PD(.03,.085,.016,{at:Nt.hand,seg:16,hseg:12,rot:[0,0,.12]}),fD([[.286,.82,.03],[.292,.77,.045],[.296,.73,.05]],.0095,{radial:8})].map(B=>B);e.push(...i,...i.map(Ve));let s=[fD(ai.pts,ai.r,{radial:18,ends:"round"}),PD(.042,.034,.108,{at:[.095,.036,.045],seg:18,hseg:12})];e.push(...s,...s.map(Ve)),n("cute",["cute"],MD(e),{color:"#e6b99a",opacity:.2,transparent:!0,depthWrite:!1,renderOrder:10,double:!1})}var pa=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth"];function ma(n,D,e){let t=n.find(r=>r.base===D+"-rib"&&r.side===e);if(!t)return null;let i=t.geo.attributes.position,s=-1e9,B=0;for(let r=0;r<i.count;r++){let o=i.getZ(r)+.15*(.12-Math.abs(i.getX(r)));o>s&&(s=o,B=r)}return new H(i.getX(B),i.getY(B),i.getZ(B))}function ya(n,D){let e=pa.map(C=>ma(D,C,1)),t=pa.map(C=>ma(D,C,-1));if(e.some(C=>!C)||t.some(C=>!C))return;let i=(e[3].z+t[3].z)/2+.014,s=(e[0].y+t[0].y)/2+.02,B=(e[6].y+t[6].y)/2-.045,r=(s+B)/2;n("sterno",["scheletro"],MD([PD(.034,.024,.0085,{at:[0,s-.02,i+.002],seg:20,hseg:12}),PD(.023,(s-B)*.36,.0075,{at:[0,r-.03,i],seg:20,hseg:16}),fD([[0,B+.03,i-.002],[0,B,i-.006],[0,B-.025,i-.012]],[.008,.005,.003],{radial:8})]),{color:"#f1e7d0",roughness:.5,real:!0});let o=[],f=C=>{for(let a=0;a<7;a++){let c=s-.012-a*((s-B-.05)/6);o.push(fD([C[a],new H(C[a].x*.4,(C[a].y+c)/2+.004,(C[a].z+i)/2+.006),new H(Math.sign(C[a].x)*.021,c,i)],.0052,{radial:8,segs:8}))}for(let a=7;a<10;a++)o.push(fD([C[a],new H((C[a].x+C[a-1].x)/2*.95,(C[a].y+C[a-1].y)/2+.006,(C[a].z+C[a-1].z)/2+.004),C[a-1]],.0048,{radial:8,segs:8}))};f(e),f(t),n("coste",["scheletro"],MD(o),{color:"#d9e3df",roughness:.55,real:!0,matKey:"cart"})}var cB=class extends Ot{constructor(D){super(D),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new Io(e)}),this.register(function(e){return new jo(e)}),this.register(function(e){return new Ko(e)}),this.register(function(e){return new Yo(e)}),this.register(function(e){return new $o(e)}),this.register(function(e){return new ko(e)}),this.register(function(e){return new Jo(e)}),this.register(function(e){return new zo(e)}),this.register(function(e){return new Wo(e)}),this.register(function(e){return new No(e)}),this.register(function(e){return new Go(e)}),this.register(function(e){return new Xo(e)}),this.register(function(e){return new Zo(e)}),this.register(function(e){return new Uo(e)}),this.register(function(e){return new Fo(e)}),this.register(function(e){return new Qo(e)}),this.register(function(e){return new Df(e)})}load(D,e,t,i){let s=this,B;if(this.resourcePath!=="")B=this.resourcePath;else if(this.path!==""){let f=nn.extractUrlBase(D);B=nn.resolveURL(f,this.path)}else B=nn.extractUrlBase(D);this.manager.itemStart(D);let r=function(f){i?i(f):console.error(f),s.manager.itemError(D),s.manager.itemEnd(D)},o=new Ii(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(D,function(f){try{s.parse(f,B,function(C){e(C),s.manager.itemEnd(D)},r)}catch(C){r(C)}},t,r)}setDRACOLoader(D){return this.dracoLoader=D,this}setKTX2Loader(D){return this.ktx2Loader=D,this}setMeshoptDecoder(D){return this.meshoptDecoder=D,this}register(D){return this.pluginCallbacks.indexOf(D)===-1&&this.pluginCallbacks.push(D),this}unregister(D){return this.pluginCallbacks.indexOf(D)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(D),1),this}parse(D,e,t,i){let s,B={},r={},o=new TextDecoder;if(typeof D=="string")s=JSON.parse(D);else if(D instanceof ArrayBuffer)if(o.decode(new Uint8Array(D,0,4))===Ta){try{B[kD.KHR_BINARY_GLTF]=new ef(D)}catch(a){i&&i(a);return}s=JSON.parse(B[kD.KHR_BINARY_GLTF].content)}else s=JSON.parse(o.decode(D));else s=D;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let f=new ff(s,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});f.fileLoader.setRequestHeader(this.requestHeader);for(let C=0;C<this.pluginCallbacks.length;C++){let a=this.pluginCallbacks[C](f);a.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),r[a.name]=a,B[a.name]=!0}if(s.extensionsUsed)for(let C=0;C<s.extensionsUsed.length;++C){let a=s.extensionsUsed[C],c=s.extensionsRequired||[];switch(a){case kD.KHR_MATERIALS_UNLIT:B[a]=new Oo;break;case kD.KHR_DRACO_MESH_COMPRESSION:B[a]=new tf(s,this.dracoLoader);break;case kD.KHR_TEXTURE_TRANSFORM:B[a]=new nf;break;case kD.KHR_MESH_QUANTIZATION:B[a]=new sf;break;default:c.indexOf(a)>=0&&r[a]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+a+'".')}}f.setExtensions(B),f.setPlugins(r),f.parse(t,i)}parseAsync(D,e){let t=this;return new Promise(function(i,s){t.parse(D,e,i,s)})}};function Fd(){let n={};return{get:function(D){return n[D]},add:function(D,e){n[D]=e},remove:function(D){delete n[D]},removeAll:function(){n={}}}}var kD={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Fo=class{constructor(D){this.parser=D,this.name=kD.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let D=this.parser,e=this.parser.json.nodes||[];for(let t=0,i=e.length;t<i;t++){let s=e[t];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&D._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(D){let e=this.parser,t="light:"+D,i=e.cache.get(t);if(i)return i;let s=e.json,o=((s.extensions&&s.extensions[this.name]||{}).lights||[])[D],f,C=new _D(16777215);o.color!==void 0&&C.setRGB(o.color[0],o.color[1],o.color[2],Le);let a=o.range!==void 0?o.range:0;switch(o.type){case"directional":f=new tn(C),f.target.position.set(0,0,-1),f.add(f.target);break;case"point":f=new oi(C),f.distance=a;break;case"spot":f=new eB(C),f.distance=a,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,f.angle=o.spot.outerConeAngle,f.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,f.target.position.set(0,0,-1),f.add(f.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return f.position.set(0,0,0),f.decay=2,It(f,o),o.intensity!==void 0&&(f.intensity=o.intensity),f.name=e.createUniqueName(o.name||"light_"+D),i=Promise.resolve(f),e.cache.add(t,i),i}getDependency(D,e){if(D==="light")return this._loadLight(e)}createNodeAttachment(D){let e=this,t=this.parser,s=t.json.nodes[D],r=(s.extensions&&s.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(o){return t._getNodeRef(e.cache,r,o)})}},Oo=class{constructor(){this.name=kD.KHR_MATERIALS_UNLIT}getMaterialType(){return Qe}extendParams(D,e,t){let i=[];D.color=new _D(1,1,1),D.opacity=1;let s=e.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let B=s.baseColorFactor;D.color.setRGB(B[0],B[1],B[2],Le),D.opacity=B[3]}s.baseColorTexture!==void 0&&i.push(t.assignTexture(D,"map",s.baseColorTexture,be))}return Promise.all(i)}},No=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(D,e){let i=this.parser.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(e.emissiveIntensity=s),Promise.resolve()}},Io=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_CLEARCOAT}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let t=this.parser,i=t.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],B=i.extensions[this.name];if(B.clearcoatFactor!==void 0&&(e.clearcoat=B.clearcoatFactor),B.clearcoatTexture!==void 0&&s.push(t.assignTexture(e,"clearcoatMap",B.clearcoatTexture)),B.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=B.clearcoatRoughnessFactor),B.clearcoatRoughnessTexture!==void 0&&s.push(t.assignTexture(e,"clearcoatRoughnessMap",B.clearcoatRoughnessTexture)),B.clearcoatNormalTexture!==void 0&&(s.push(t.assignTexture(e,"clearcoatNormalMap",B.clearcoatNormalTexture)),B.clearcoatNormalTexture.scale!==void 0)){let r=B.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new wD(r,r)}return Promise.all(s)}},jo=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_DISPERSION}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let i=this.parser.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return e.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}},Xo=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_IRIDESCENCE}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let t=this.parser,i=t.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],B=i.extensions[this.name];return B.iridescenceFactor!==void 0&&(e.iridescence=B.iridescenceFactor),B.iridescenceTexture!==void 0&&s.push(t.assignTexture(e,"iridescenceMap",B.iridescenceTexture)),B.iridescenceIor!==void 0&&(e.iridescenceIOR=B.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),B.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=B.iridescenceThicknessMinimum),B.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=B.iridescenceThicknessMaximum),B.iridescenceThicknessTexture!==void 0&&s.push(t.assignTexture(e,"iridescenceThicknessMap",B.iridescenceThicknessTexture)),Promise.all(s)}},ko=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_SHEEN}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let t=this.parser,i=t.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[];e.sheenColor=new _D(0,0,0),e.sheenRoughness=0,e.sheen=1;let B=i.extensions[this.name];if(B.sheenColorFactor!==void 0){let r=B.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],Le)}return B.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=B.sheenRoughnessFactor),B.sheenColorTexture!==void 0&&s.push(t.assignTexture(e,"sheenColorMap",B.sheenColorTexture,be)),B.sheenRoughnessTexture!==void 0&&s.push(t.assignTexture(e,"sheenRoughnessMap",B.sheenRoughnessTexture)),Promise.all(s)}},Jo=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_TRANSMISSION}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let t=this.parser,i=t.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],B=i.extensions[this.name];return B.transmissionFactor!==void 0&&(e.transmission=B.transmissionFactor),B.transmissionTexture!==void 0&&s.push(t.assignTexture(e,"transmissionMap",B.transmissionTexture)),Promise.all(s)}},zo=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_VOLUME}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let t=this.parser,i=t.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],B=i.extensions[this.name];e.thickness=B.thicknessFactor!==void 0?B.thicknessFactor:0,B.thicknessTexture!==void 0&&s.push(t.assignTexture(e,"thicknessMap",B.thicknessTexture)),e.attenuationDistance=B.attenuationDistance||1/0;let r=B.attenuationColor||[1,1,1];return e.attenuationColor=new _D().setRGB(r[0],r[1],r[2],Le),Promise.all(s)}},Wo=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_IOR}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let i=this.parser.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=i.extensions[this.name];return e.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}},Go=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_SPECULAR}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let t=this.parser,i=t.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],B=i.extensions[this.name];e.specularIntensity=B.specularFactor!==void 0?B.specularFactor:1,B.specularTexture!==void 0&&s.push(t.assignTexture(e,"specularIntensityMap",B.specularTexture));let r=B.specularColorFactor||[1,1,1];return e.specularColor=new _D().setRGB(r[0],r[1],r[2],Le),B.specularColorTexture!==void 0&&s.push(t.assignTexture(e,"specularColorMap",B.specularColorTexture,be)),Promise.all(s)}},Uo=class{constructor(D){this.parser=D,this.name=kD.EXT_MATERIALS_BUMP}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let t=this.parser,i=t.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],B=i.extensions[this.name];return e.bumpScale=B.bumpFactor!==void 0?B.bumpFactor:1,B.bumpTexture!==void 0&&s.push(t.assignTexture(e,"bumpMap",B.bumpTexture)),Promise.all(s)}},Zo=class{constructor(D){this.parser=D,this.name=kD.KHR_MATERIALS_ANISOTROPY}getMaterialType(D){let t=this.parser.json.materials[D];return!t.extensions||!t.extensions[this.name]?null:We}extendMaterialParams(D,e){let t=this.parser,i=t.json.materials[D];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let s=[],B=i.extensions[this.name];return B.anisotropyStrength!==void 0&&(e.anisotropy=B.anisotropyStrength),B.anisotropyRotation!==void 0&&(e.anisotropyRotation=B.anisotropyRotation),B.anisotropyTexture!==void 0&&s.push(t.assignTexture(e,"anisotropyMap",B.anisotropyTexture)),Promise.all(s)}},Ko=class{constructor(D){this.parser=D,this.name=kD.KHR_TEXTURE_BASISU}loadTexture(D){let e=this.parser,t=e.json,i=t.textures[D];if(!i.extensions||!i.extensions[this.name])return null;let s=i.extensions[this.name],B=e.options.ktx2Loader;if(!B){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(D,s.source,B)}},Yo=class{constructor(D){this.parser=D,this.name=kD.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(D){let e=this.name,t=this.parser,i=t.json,s=i.textures[D];if(!s.extensions||!s.extensions[e])return null;let B=s.extensions[e],r=i.images[B.source],o=t.textureLoader;if(r.uri){let f=t.options.manager.getHandler(r.uri);f!==null&&(o=f)}return this.detectSupport().then(function(f){if(f)return t.loadTextureImage(D,B.source,o);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return t.loadTexture(D)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(D){let e=new Image;e.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",e.onload=e.onerror=function(){D(e.height===1)}})),this.isSupported}},$o=class{constructor(D){this.parser=D,this.name=kD.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(D){let e=this.name,t=this.parser,i=t.json,s=i.textures[D];if(!s.extensions||!s.extensions[e])return null;let B=s.extensions[e],r=i.images[B.source],o=t.textureLoader;if(r.uri){let f=t.options.manager.getHandler(r.uri);f!==null&&(o=f)}return this.detectSupport().then(function(f){if(f)return t.loadTextureImage(D,B.source,o);if(i.extensionsRequired&&i.extensionsRequired.indexOf(e)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return t.loadTexture(D)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(D){let e=new Image;e.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",e.onload=e.onerror=function(){D(e.height===1)}})),this.isSupported}},Qo=class{constructor(D){this.name=kD.EXT_MESHOPT_COMPRESSION,this.parser=D}loadBufferView(D){let e=this.parser.json,t=e.bufferViews[D];if(t.extensions&&t.extensions[this.name]){let i=t.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),B=this.parser.options.meshoptDecoder;if(!B||!B.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(r){let o=i.byteOffset||0,f=i.byteLength||0,C=i.count,a=i.byteStride,c=new Uint8Array(r,o,f);return B.decodeGltfBufferAsync?B.decodeGltfBufferAsync(C,a,c,i.mode,i.filter).then(function(l){return l.buffer}):B.ready.then(function(){let l=new ArrayBuffer(C*a);return B.decodeGltfBuffer(new Uint8Array(l),C,a,c,i.mode,i.filter),l})})}else return null}},Df=class{constructor(D){this.name=kD.EXT_MESH_GPU_INSTANCING,this.parser=D}createNodeMesh(D){let e=this.parser.json,t=e.nodes[D];if(!t.extensions||!t.extensions[this.name]||t.mesh===void 0)return null;let i=e.meshes[t.mesh];for(let f of i.primitives)if(f.mode!==et.TRIANGLES&&f.mode!==et.TRIANGLE_STRIP&&f.mode!==et.TRIANGLE_FAN&&f.mode!==void 0)return null;let B=t.extensions[this.name].attributes,r=[],o={};for(let f in B)r.push(this.parser.getDependency("accessor",B[f]).then(C=>(o[f]=C,o[f])));return r.length<1?null:(r.push(this.parser.createNodeMesh(D)),Promise.all(r).then(f=>{let C=f.pop(),a=C.isGroup?C.children:[C],c=f[0].count,l=[];for(let u of a){let d=new VD,A=new H,h=new ge,g=new H(1,1,1),x=new Js(u.geometry,u.material,c);for(let y=0;y<c;y++)o.TRANSLATION&&A.fromBufferAttribute(o.TRANSLATION,y),o.ROTATION&&h.fromBufferAttribute(o.ROTATION,y),o.SCALE&&g.fromBufferAttribute(o.SCALE,y),x.setMatrixAt(y,d.compose(A,h,g));for(let y in o)if(y==="_COLOR_0"){let E=o[y];x.instanceColor=new bn(E.array,E.itemSize,E.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&u.geometry.setAttribute(y,o[y]);ae.prototype.copy.call(x,u),this.parser.assignFinalMaterial(x),l.push(x)}return C.isGroup?(C.clear(),C.add(...l),C):l[0]}))}},Ta="glTF",Zi=12,ba={JSON:1313821514,BIN:5130562},ef=class{constructor(D){this.name=kD.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(D,0,Zi),t=new TextDecoder;if(this.header={magic:t.decode(new Uint8Array(D.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==Ta)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Zi,s=new DataView(D,Zi),B=0;for(;B<i;){let r=s.getUint32(B,!0);B+=4;let o=s.getUint32(B,!0);if(B+=4,o===ba.JSON){let f=new Uint8Array(D,Zi+B,r);this.content=t.decode(f)}else if(o===ba.BIN){let f=Zi+B;this.body=D.slice(f,f+r)}B+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},tf=class{constructor(D,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=kD.KHR_DRACO_MESH_COMPRESSION,this.json=D,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(D,e){let t=this.json,i=this.dracoLoader,s=D.extensions[this.name].bufferView,B=D.extensions[this.name].attributes,r={},o={},f={};for(let C in B){let a=rf[C]||C.toLowerCase();r[a]=B[C]}for(let C in D.attributes){let a=rf[C]||C.toLowerCase();if(B[C]!==void 0){let c=t.accessors[D.attributes[C]],l=ci[c.componentType];f[a]=l.name,o[a]=c.normalized===!0}}return e.getDependency("bufferView",s).then(function(C){return new Promise(function(a,c){i.decodeDracoFile(C,function(l){for(let u in l.attributes){let d=l.attributes[u],A=o[u];A!==void 0&&(d.normalized=A)}a(l)},r,f,Le,c)})})}},nf=class{constructor(){this.name=kD.KHR_TEXTURE_TRANSFORM}extendTexture(D,e){return(e.texCoord===void 0||e.texCoord===D.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0||(D=D.clone(),e.texCoord!==void 0&&(D.channel=e.texCoord),e.offset!==void 0&&D.offset.fromArray(e.offset),e.rotation!==void 0&&(D.rotation=e.rotation),e.scale!==void 0&&D.repeat.fromArray(e.scale),D.needsUpdate=!0),D}},sf=class{constructor(){this.name=kD.KHR_MESH_QUANTIZATION}},lB=class extends Qt{constructor(D,e,t,i){super(D,e,t,i)}copySampleValue_(D){let e=this.resultBuffer,t=this.sampleValues,i=this.valueSize,s=D*i*3+i;for(let B=0;B!==i;B++)e[B]=t[s+B];return e}interpolate_(D,e,t,i){let s=this.resultBuffer,B=this.sampleValues,r=this.valueSize,o=r*2,f=r*3,C=i-e,a=(t-e)/C,c=a*a,l=c*a,u=D*f,d=u-f,A=-2*l+3*c,h=l-c,g=1-A,x=h-c+a;for(let y=0;y!==r;y++){let E=B[d+y+r],w=B[d+y+o]*C,v=B[u+y+r],P=B[u+y]*C;s[y]=g*E+x*w+A*v+h*P}return s}},Od=new ge,Bf=class extends lB{interpolate_(D,e,t,i){let s=super.interpolate_(D,e,t,i);return Od.fromArray(s).normalize().toArray(s),s}},et={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ci={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ra={9728:Me,9729:Oe,9984:Ao,9985:Hi,9986:jn,9987:ut},ga={33071:wt,33648:Mi,10497:pn},qo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Bn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nd={CUBICSPLINE:void 0,LINEAR:Qn,STEP:$n},Eo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Id(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ye})),n.DefaultMaterial}function xn(n,D,e){for(let t in e.extensions)n[t]===void 0&&(D.userData.gltfExtensions=D.userData.gltfExtensions||{},D.userData.gltfExtensions[t]=e.extensions[t])}function It(n,D){D.extras!==void 0&&(typeof D.extras=="object"?Object.assign(n.userData,D.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+D.extras))}function jd(n,D,e){let t=!1,i=!1,s=!1;for(let f=0,C=D.length;f<C;f++){let a=D[f];if(a.POSITION!==void 0&&(t=!0),a.NORMAL!==void 0&&(i=!0),a.COLOR_0!==void 0&&(s=!0),t&&i&&s)break}if(!t&&!i&&!s)return Promise.resolve(n);let B=[],r=[],o=[];for(let f=0,C=D.length;f<C;f++){let a=D[f];if(t){let c=a.POSITION!==void 0?e.getDependency("accessor",a.POSITION):n.attributes.position;B.push(c)}if(i){let c=a.NORMAL!==void 0?e.getDependency("accessor",a.NORMAL):n.attributes.normal;r.push(c)}if(s){let c=a.COLOR_0!==void 0?e.getDependency("accessor",a.COLOR_0):n.attributes.color;o.push(c)}}return Promise.all([Promise.all(B),Promise.all(r),Promise.all(o)]).then(function(f){let C=f[0],a=f[1],c=f[2];return t&&(n.morphAttributes.position=C),i&&(n.morphAttributes.normal=a),s&&(n.morphAttributes.color=c),n.morphTargetsRelative=!0,n})}function Xd(n,D){if(n.updateMorphTargets(),D.weights!==void 0)for(let e=0,t=D.weights.length;e<t;e++)n.morphTargetInfluences[e]=D.weights[e];if(D.extras&&Array.isArray(D.extras.targetNames)){let e=D.extras.targetNames;if(n.morphTargetInfluences.length===e.length){n.morphTargetDictionary={};for(let t=0,i=e.length;t<i;t++)n.morphTargetDictionary[e[t]]=t}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function kd(n){let D,e=n.extensions&&n.extensions[kD.KHR_DRACO_MESH_COMPRESSION];if(e?D="draco:"+e.bufferView+":"+e.indices+":"+Po(e.attributes):D=n.indices+":"+Po(n.attributes)+":"+n.mode,n.targets!==void 0)for(let t=0,i=n.targets.length;t<i;t++)D+=":"+Po(n.targets[t]);return D}function Po(n){let D="",e=Object.keys(n).sort();for(let t=0,i=e.length;t<i;t++)D+=e[t]+":"+n[e[t]]+";";return D}function of(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Jd(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var zd=new VD,ff=class{constructor(D={},e={}){this.json=D,this.extensions={},this.plugins={},this.options=e,this.cache=new Fd,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let t=!1,i=-1,s=!1,B=-1;if(typeof navigator<"u"){let r=navigator.userAgent;t=/^((?!chrome|android).)*safari/i.test(r)===!0;let o=r.match(/Version\/(\d+)/);i=t&&o?parseInt(o[1],10):-1,s=r.indexOf("Firefox")>-1,B=s?r.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||t&&i<17||s&&B<98?this.textureLoader=new Qs(this.options.manager):this.textureLoader=new tB(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ii(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(D){this.extensions=D}setPlugins(D){this.plugins=D}parse(D,e){let t=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(B){return B._markDefs&&B._markDefs()}),Promise.all(this._invokeAll(function(B){return B.beforeRoot&&B.beforeRoot()})).then(function(){return Promise.all([t.getDependencies("scene"),t.getDependencies("animation"),t.getDependencies("camera")])}).then(function(B){let r={scene:B[0][i.scene||0],scenes:B[0],animations:B[1],cameras:B[2],asset:i.asset,parser:t,userData:{}};return xn(s,r,i),It(r,i),Promise.all(t._invokeAll(function(o){return o.afterRoot&&o.afterRoot(r)})).then(function(){for(let o of r.scenes)o.updateMatrixWorld();D(r)})}).catch(e)}_markDefs(){let D=this.json.nodes||[],e=this.json.skins||[],t=this.json.meshes||[];for(let i=0,s=e.length;i<s;i++){let B=e[i].joints;for(let r=0,o=B.length;r<o;r++)D[B[r]].isBone=!0}for(let i=0,s=D.length;i<s;i++){let B=D[i];B.mesh!==void 0&&(this._addNodeRef(this.meshCache,B.mesh),B.skin!==void 0&&(t[B.mesh].isSkinnedMesh=!0)),B.camera!==void 0&&this._addNodeRef(this.cameraCache,B.camera)}}_addNodeRef(D,e){e!==void 0&&(D.refs[e]===void 0&&(D.refs[e]=D.uses[e]=0),D.refs[e]++)}_getNodeRef(D,e,t){if(D.refs[e]<=1)return t;let i=t.clone(),s=(B,r)=>{let o=this.associations.get(B);o!=null&&this.associations.set(r,o);for(let[f,C]of B.children.entries())s(C,r.children[f])};return s(t,i),i.name+="_instance_"+D.uses[e]++,i}_invokeOne(D){let e=Object.values(this.plugins);e.push(this);for(let t=0;t<e.length;t++){let i=D(e[t]);if(i)return i}return null}_invokeAll(D){let e=Object.values(this.plugins);e.unshift(this);let t=[];for(let i=0;i<e.length;i++){let s=D(e[i]);s&&t.push(s)}return t}getDependency(D,e){let t=D+":"+e,i=this.cache.get(t);if(!i){switch(D){case"scene":i=this.loadScene(e);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(e)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(e)});break;case"accessor":i=this.loadAccessor(e);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(e)});break;case"buffer":i=this.loadBuffer(e);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(e)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(e)});break;case"skin":i=this.loadSkin(e);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(e)});break;case"camera":i=this.loadCamera(e);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(D,e)}),!i)throw new Error("Unknown type: "+D);break}this.cache.add(t,i)}return i}getDependencies(D){let e=this.cache.get(D);if(!e){let t=this,i=this.json[D+(D==="mesh"?"es":"s")]||[];e=Promise.all(i.map(function(s,B){return t.getDependency(D,B)})),this.cache.add(D,e)}return e}loadBuffer(D){let e=this.json.buffers[D],t=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&D===0)return Promise.resolve(this.extensions[kD.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(s,B){t.load(nn.resolveURL(e.uri,i.path),s,void 0,function(){B(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(D){let e=this.json.bufferViews[D];return this.getDependency("buffer",e.buffer).then(function(t){let i=e.byteLength||0,s=e.byteOffset||0;return t.slice(s,s+i)})}loadAccessor(D){let e=this,t=this.json,i=this.json.accessors[D];if(i.bufferView===void 0&&i.sparse===void 0){let B=qo[i.type],r=ci[i.componentType],o=i.normalized===!0,f=new r(i.count*B);return Promise.resolve(new he(f,B,o))}let s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(B){let r=B[0],o=qo[i.type],f=ci[i.componentType],C=f.BYTES_PER_ELEMENT,a=C*o,c=i.byteOffset||0,l=i.bufferView!==void 0?t.bufferViews[i.bufferView].byteStride:void 0,u=i.normalized===!0,d,A;if(l&&l!==a){let h=Math.floor(c/l),g="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+h+":"+i.count,x=e.cache.get(g);x||(d=new f(r,h*l,i.count*l/C),x=new Ei(d,l/C),e.cache.add(g,x)),A=new Pi(x,o,c%l/C,u)}else r===null?d=new f(i.count*o):d=new f(r,c,i.count*o),A=new he(d,o,u);if(i.sparse!==void 0){let h=qo.SCALAR,g=ci[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,E=new g(B[1],x,i.sparse.count*h),w=new f(B[2],y,i.sparse.count*o);r!==null&&(A=new he(A.array.slice(),A.itemSize,A.normalized)),A.normalized=!1;for(let v=0,P=E.length;v<P;v++){let R=E[v];if(A.setX(R,w[v*o]),o>=2&&A.setY(R,w[v*o+1]),o>=3&&A.setZ(R,w[v*o+2]),o>=4&&A.setW(R,w[v*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}A.normalized=u}return A})}loadTexture(D){let e=this.json,t=this.options,s=e.textures[D].source,B=e.images[s],r=this.textureLoader;if(B.uri){let o=t.manager.getHandler(B.uri);o!==null&&(r=o)}return this.loadTextureImage(D,s,r)}loadTextureImage(D,e,t){let i=this,s=this.json,B=s.textures[D],r=s.images[e],o=(r.uri||r.bufferView)+":"+B.sampler;if(this.textureCache[o])return this.textureCache[o];let f=this.loadImageSource(e,t).then(function(C){C.flipY=!1,C.name=B.name||r.name||"",C.name===""&&typeof r.uri=="string"&&r.uri.startsWith("data:image/")===!1&&(C.name=r.uri);let c=(s.samplers||{})[B.sampler]||{};return C.magFilter=Ra[c.magFilter]||Oe,C.minFilter=Ra[c.minFilter]||ut,C.wrapS=ga[c.wrapS]||pn,C.wrapT=ga[c.wrapT]||pn,C.generateMipmaps=!C.isCompressedTexture&&C.minFilter!==Me&&C.minFilter!==Oe,i.associations.set(C,{textures:D}),C}).catch(function(){return null});return this.textureCache[o]=f,f}loadImageSource(D,e){let t=this,i=this.json,s=this.options;if(this.sourceCache[D]!==void 0)return this.sourceCache[D].then(a=>a.clone());let B=i.images[D],r=self.URL||self.webkitURL,o=B.uri||"",f=!1;if(B.bufferView!==void 0)o=t.getDependency("bufferView",B.bufferView).then(function(a){f=!0;let c=new Blob([a],{type:B.mimeType});return o=r.createObjectURL(c),o});else if(B.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+D+" is missing URI and bufferView");let C=Promise.resolve(o).then(function(a){return new Promise(function(c,l){let u=c;e.isImageBitmapLoader===!0&&(u=function(d){let A=new xe(d);A.needsUpdate=!0,c(A)}),e.load(nn.resolveURL(a,s.path),u,void 0,l)})}).then(function(a){return f===!0&&r.revokeObjectURL(o),It(a,B),a.userData.mimeType=B.mimeType||Jd(B.uri),a}).catch(function(a){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),a});return this.sourceCache[D]=C,C}assignTexture(D,e,t,i){let s=this;return this.getDependency("texture",t.index).then(function(B){if(!B)return null;if(t.texCoord!==void 0&&t.texCoord>0&&(B=B.clone(),B.channel=t.texCoord),s.extensions[kD.KHR_TEXTURE_TRANSFORM]){let r=t.extensions!==void 0?t.extensions[kD.KHR_TEXTURE_TRANSFORM]:void 0;if(r){let o=s.associations.get(B);B=s.extensions[kD.KHR_TEXTURE_TRANSFORM].extendTexture(B,r),s.associations.set(B,o)}}return i!==void 0&&(B.colorSpace=i),D[e]=B,B})}assignFinalMaterial(D){let e=D.geometry,t=D.material,i=e.attributes.tangent===void 0,s=e.attributes.color!==void 0,B=e.attributes.normal===void 0;if(D.isPoints){let r="PointsMaterial:"+t.uuid,o=this.cache.get(r);o||(o=new Ni,ze.prototype.copy.call(o,t),o.color.copy(t.color),o.map=t.map,o.sizeAttenuation=!1,this.cache.add(r,o)),t=o}else if(D.isLine){let r="LineBasicMaterial:"+t.uuid,o=this.cache.get(r);o||(o=new Oi,ze.prototype.copy.call(o,t),o.color.copy(t.color),o.map=t.map,this.cache.add(r,o)),t=o}if(i||s||B){let r="ClonedMaterial:"+t.uuid+":";i&&(r+="derivative-tangents:"),s&&(r+="vertex-colors:"),B&&(r+="flat-shading:");let o=this.cache.get(r);o||(o=t.clone(),s&&(o.vertexColors=!0),B&&(o.flatShading=!0),i&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(r,o),this.associations.set(o,this.associations.get(t))),t=o}D.material=t}getMaterialType(){return at}loadMaterial(D){let e=this,t=this.json,i=this.extensions,s=t.materials[D],B,r={},o=s.extensions||{},f=[];if(o[kD.KHR_MATERIALS_UNLIT]){let a=i[kD.KHR_MATERIALS_UNLIT];B=a.getMaterialType(),f.push(a.extendParams(r,s,e))}else{let a=s.pbrMetallicRoughness||{};if(r.color=new _D(1,1,1),r.opacity=1,Array.isArray(a.baseColorFactor)){let c=a.baseColorFactor;r.color.setRGB(c[0],c[1],c[2],Le),r.opacity=c[3]}a.baseColorTexture!==void 0&&f.push(e.assignTexture(r,"map",a.baseColorTexture,be)),r.metalness=a.metallicFactor!==void 0?a.metallicFactor:1,r.roughness=a.roughnessFactor!==void 0?a.roughnessFactor:1,a.metallicRoughnessTexture!==void 0&&(f.push(e.assignTexture(r,"metalnessMap",a.metallicRoughnessTexture)),f.push(e.assignTexture(r,"roughnessMap",a.metallicRoughnessTexture))),B=this._invokeOne(function(c){return c.getMaterialType&&c.getMaterialType(D)}),f.push(Promise.all(this._invokeAll(function(c){return c.extendMaterialParams&&c.extendMaterialParams(D,r)})))}s.doubleSided===!0&&(r.side=ke);let C=s.alphaMode||Eo.OPAQUE;if(C===Eo.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,C===Eo.MASK&&(r.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&B!==Qe&&(f.push(e.assignTexture(r,"normalMap",s.normalTexture)),r.normalScale=new wD(1,1),s.normalTexture.scale!==void 0)){let a=s.normalTexture.scale;r.normalScale.set(a,a)}if(s.occlusionTexture!==void 0&&B!==Qe&&(f.push(e.assignTexture(r,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&B!==Qe){let a=s.emissiveFactor;r.emissive=new _D().setRGB(a[0],a[1],a[2],Le)}return s.emissiveTexture!==void 0&&B!==Qe&&f.push(e.assignTexture(r,"emissiveMap",s.emissiveTexture,be)),Promise.all(f).then(function(){let a=new B(r);return s.name&&(a.name=s.name),It(a,s),e.associations.set(a,{materials:D}),s.extensions&&xn(i,a,s),a})}createUniqueName(D){let e=oe.sanitizeNodeName(D||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(D){let e=this,t=this.extensions,i=this.primitiveCache;function s(r){return t[kD.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,e).then(function(o){return xa(o,r,e)})}let B=[];for(let r=0,o=D.length;r<o;r++){let f=D[r],C=kd(f),a=i[C];if(a)B.push(a.promise);else{let c;f.extensions&&f.extensions[kD.KHR_DRACO_MESH_COMPRESSION]?c=s(f):c=xa(new Te,f,e),i[C]={primitive:f,promise:c},B.push(c)}}return Promise.all(B)}loadMesh(D){let e=this,t=this.json,i=this.extensions,s=t.meshes[D],B=s.primitives,r=[];for(let o=0,f=B.length;o<f;o++){let C=B[o].material===void 0?Id(this.cache):this.getDependency("material",B[o].material);r.push(C)}return r.push(e.loadGeometries(B)),Promise.all(r).then(function(o){let f=o.slice(0,o.length-1),C=o[o.length-1],a=[];for(let l=0,u=C.length;l<u;l++){let d=C[l],A=B[l],h,g=f[l];if(A.mode===et.TRIANGLES||A.mode===et.TRIANGLE_STRIP||A.mode===et.TRIANGLE_FAN||A.mode===void 0)h=s.isSkinnedMesh===!0?new js(d,g):new KD(d,g),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),A.mode===et.TRIANGLE_STRIP?h.geometry=So(h.geometry,BB):A.mode===et.TRIANGLE_FAN&&(h.geometry=So(h.geometry,Ji));else if(A.mode===et.LINES)h=new Gs(d,g);else if(A.mode===et.LINE_STRIP)h=new si(d,g);else if(A.mode===et.LINE_LOOP)h=new Us(d,g);else if(A.mode===et.POINTS)h=new Zs(d,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);Object.keys(h.geometry.morphAttributes).length>0&&Xd(h,s),h.name=e.createUniqueName(s.name||"mesh_"+D),It(h,s),A.extensions&&xn(i,h,A),e.assignFinalMaterial(h),a.push(h)}for(let l=0,u=a.length;l<u;l++)e.associations.set(a[l],{meshes:D,primitives:l});if(a.length===1)return s.extensions&&xn(i,a[0],s),a[0];let c=new Ke;s.extensions&&xn(i,c,s),e.associations.set(c,{meshes:D});for(let l=0,u=a.length;l<u;l++)c.add(a[l]);return c})}loadCamera(D){let e,t=this.json.cameras[D],i=t[t.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return t.type==="perspective"?e=new ue(gn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):t.type==="orthographic"&&(e=new ti(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),t.name&&(e.name=this.createUniqueName(t.name)),It(e,t),Promise.resolve(e)}loadSkin(D){let e=this.json.skins[D],t=[];for(let i=0,s=e.joints.length;i<s;i++)t.push(this._loadNodeShallow(e.joints[i]));return e.inverseBindMatrices!==void 0?t.push(this.getDependency("accessor",e.inverseBindMatrices)):t.push(null),Promise.all(t).then(function(i){let s=i.pop(),B=i,r=[],o=[];for(let f=0,C=B.length;f<C;f++){let a=B[f];if(a){r.push(a);let c=new VD;s!==null&&c.fromArray(s.array,f*16),o.push(c)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[f])}return new ks(r,o)})}loadAnimation(D){let e=this.json,t=this,i=e.animations[D],s=i.name?i.name:"animation_"+D,B=[],r=[],o=[],f=[],C=[];for(let a=0,c=i.channels.length;a<c;a++){let l=i.channels[a],u=i.samplers[l.sampler],d=l.target,A=d.node,h=i.parameters!==void 0?i.parameters[u.input]:u.input,g=i.parameters!==void 0?i.parameters[u.output]:u.output;d.node!==void 0&&(B.push(this.getDependency("node",A)),r.push(this.getDependency("accessor",h)),o.push(this.getDependency("accessor",g)),f.push(u),C.push(d))}return Promise.all([Promise.all(B),Promise.all(r),Promise.all(o),Promise.all(f),Promise.all(C)]).then(function(a){let c=a[0],l=a[1],u=a[2],d=a[3],A=a[4],h=[];for(let g=0,x=c.length;g<x;g++){let y=c[g],E=l[g],w=u[g],v=d[g],P=A[g];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();let R=t._createAnimationTracks(y,E,w,v,P);if(R)for(let m=0;m<R.length;m++)h.push(R[m])}return new $s(s,void 0,h)})}createNodeMesh(D){let e=this.json,t=this,i=e.nodes[D];return i.mesh===void 0?null:t.getDependency("mesh",i.mesh).then(function(s){let B=t._getNodeRef(t.meshCache,i.mesh,s);return i.weights!==void 0&&B.traverse(function(r){if(r.isMesh)for(let o=0,f=i.weights.length;o<f;o++)r.morphTargetInfluences[o]=i.weights[o]}),B})}loadNode(D){let e=this.json,t=this,i=e.nodes[D],s=t._loadNodeShallow(D),B=[],r=i.children||[];for(let f=0,C=r.length;f<C;f++)B.push(t.getDependency("node",r[f]));let o=i.skin===void 0?Promise.resolve(null):t.getDependency("skin",i.skin);return Promise.all([s,Promise.all(B),o]).then(function(f){let C=f[0],a=f[1],c=f[2];c!==null&&C.traverse(function(l){l.isSkinnedMesh&&l.bind(c,zd)});for(let l=0,u=a.length;l<u;l++)C.add(a[l]);return C})}_loadNodeShallow(D){let e=this.json,t=this.extensions,i=this;if(this.nodeCache[D]!==void 0)return this.nodeCache[D];let s=e.nodes[D],B=s.name?i.createUniqueName(s.name):"",r=[],o=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(D)});return o&&r.push(o),s.camera!==void 0&&r.push(i.getDependency("camera",s.camera).then(function(f){return i._getNodeRef(i.cameraCache,s.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(D)}).forEach(function(f){r.push(f)}),this.nodeCache[D]=Promise.all(r).then(function(f){let C;if(s.isBone===!0?C=new Fi:f.length>1?C=new Ke:f.length===1?C=f[0]:C=new ae,C!==f[0])for(let a=0,c=f.length;a<c;a++)C.add(f[a]);if(s.name&&(C.userData.name=s.name,C.name=B),It(C,s),s.extensions&&xn(t,C,s),s.matrix!==void 0){let a=new VD;a.fromArray(s.matrix),C.applyMatrix4(a)}else s.translation!==void 0&&C.position.fromArray(s.translation),s.rotation!==void 0&&C.quaternion.fromArray(s.rotation),s.scale!==void 0&&C.scale.fromArray(s.scale);return i.associations.has(C)||i.associations.set(C,{}),i.associations.get(C).nodes=D,C}),this.nodeCache[D]}loadScene(D){let e=this.extensions,t=this.json.scenes[D],i=this,s=new Ke;t.name&&(s.name=i.createUniqueName(t.name)),It(s,t),t.extensions&&xn(e,s,t);let B=t.nodes||[],r=[];for(let o=0,f=B.length;o<f;o++)r.push(i.getDependency("node",B[o]));return Promise.all(r).then(function(o){for(let C=0,a=o.length;C<a;C++)s.add(o[C]);let f=C=>{let a=new Map;for(let[c,l]of i.associations)(c instanceof ze||c instanceof xe)&&a.set(c,l);return C.traverse(c=>{let l=i.associations.get(c);l!=null&&a.set(c,l)}),a};return i.associations=f(s),s})}_createAnimationTracks(D,e,t,i,s){let B=[],r=D.name?D.name:D.uuid,o=[];Bn[s.path]===Bn.weights?D.traverse(function(c){c.morphTargetInfluences&&o.push(c.name?c.name:c.uuid)}):o.push(r);let f;switch(Bn[s.path]){case Bn.weights:f=Et;break;case Bn.rotation:f=Pt;break;case Bn.position:case Bn.scale:f=Ft;break;default:switch(t.itemSize){case 1:f=Et;break;case 2:case 3:default:f=Ft;break}break}let C=i.interpolation!==void 0?Nd[i.interpolation]:Qn,a=this._getArrayFromAccessor(t);for(let c=0,l=o.length;c<l;c++){let u=new f(o[c]+"."+Bn[s.path],e.array,a,C);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(u),B.push(u)}return B}_getArrayFromAccessor(D){let e=D.array;if(D.normalized){let t=of(e.constructor),i=new Float32Array(e.length);for(let s=0,B=e.length;s<B;s++)i[s]=e[s]*t;e=i}return e}_createCubicSplineTrackInterpolant(D){D.createInterpolant=function(t){let i=this instanceof Pt?Bf:lB;return new i(this.times,this.values,this.getValueSize()/3,t)},D.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Wd(n,D,e){let t=D.attributes,i=new Se;if(t.POSITION!==void 0){let r=e.json.accessors[t.POSITION],o=r.min,f=r.max;if(o!==void 0&&f!==void 0){if(i.set(new H(o[0],o[1],o[2]),new H(f[0],f[1],f[2])),r.normalized){let C=of(ci[r.componentType]);i.min.multiplyScalar(C),i.max.multiplyScalar(C)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=D.targets;if(s!==void 0){let r=new H,o=new H;for(let f=0,C=s.length;f<C;f++){let a=s[f];if(a.POSITION!==void 0){let c=e.json.accessors[a.POSITION],l=c.min,u=c.max;if(l!==void 0&&u!==void 0){if(o.setX(Math.max(Math.abs(l[0]),Math.abs(u[0]))),o.setY(Math.max(Math.abs(l[1]),Math.abs(u[1]))),o.setZ(Math.max(Math.abs(l[2]),Math.abs(u[2]))),c.normalized){let d=of(ci[c.componentType]);o.multiplyScalar(d)}r.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(r)}n.boundingBox=i;let B=new Je;i.getCenter(B.center),B.radius=i.min.distanceTo(i.max)/2,n.boundingSphere=B}function xa(n,D,e){let t=D.attributes,i=[];function s(B,r){return e.getDependency("accessor",B).then(function(o){n.setAttribute(r,o)})}for(let B in t){let r=rf[B]||B.toLowerCase();r in n.attributes||i.push(s(t[B],r))}if(D.indices!==void 0&&!n.index){let B=e.getDependency("accessor",D.indices).then(function(r){n.setIndex(r)});i.push(B)}return zD.workingColorSpace!==Le&&"COLOR_0"in t&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${zD.workingColorSpace}" not supported.`),It(n,D),Wd(n,D,e),Promise.all(i).then(function(){return D.targets!==void 0?jd(n,D.targets,e):n})}var Ha="../assets/head-neck-53ZUEKXW.glb";var _a="../assets/shoulder-KRLYONCH.glb";var wa="../assets/elbow-forearm-27MD7FSK.glb";var va="../assets/wrist-hand-4ZEZ7TOJ.glb";var Ma="../assets/spine-trunk-QSAWFNBA.glb";var Sa="../assets/hip-pelvis-62H3KHOL.glb";var La="../assets/knee-HQG3XAF2.glb";var Va="../assets/ankle-foot-GWSO4XOB.glb";var qa="../assets/supplement-shoulder-muscle-VGCIUWP2.glb";var Ea="../assets/supplement-spine-trunk-muscle-pectorals-23PEIL27.glb";var Pa="../assets/supplement-spine-trunk-muscle-abdominals-2SWO7YAC.glb";var Fa="../assets/supplement-spine-trunk-muscle-erector-spinae-CDOV4WOY.glb";var Oa="../assets/supplement-spine-trunk-connective-JNBC7DEC.glb";var Na="../assets/supplement-hip-pelvis-muscle-QLSKSQUT.glb";var Ia="../assets/supplement-knee-muscle-R2YZ3K4Z.glb";var ja="../assets/supplement-elbow-forearm-muscle-VMGM5K67.glb";var Xa="../assets/supplement-wrist-hand-muscle-X2NTKWPX.glb";var ka="../assets/supplement-ankle-foot-muscle-4XU622S4.glb";var Ja="../assets/supplement-ankle-foot-connective-LEBHC7QV.glb";var za="../assets/supplement-head-neck-connective-LAX27THG.glb";var l0=[Ha,_a,wa,va,Ma,Sa,La,Va,qa,Ea,Pa,Fa,Oa,Na,Ia,ja,Xa,ka,Ja,za],h0=/^(head-neck|shoulder|elbow-forearm|wrist-hand|spine-trunk|hip-pelvis|knee|ankle-foot|supplemental)/,A0=[[/disk|symphysis/,"dischi-intervertebrali","scheletro"],[/calcaneal-tendon/,"tendine-d-achille","scheletro"],[/ligament|membrane|retinaculum|tendon/,"legamenti-e-membrane","scheletro"],[/(^|-)rib$/,"coste","scheletro"],[/vertebra|^atlas$|^axis$/,"colonna","scheletro"],[/sacrum|hip-bone/,"bacino","scheletro"],[/occiput|frontal-bone|parietal|temporal-bone|sphenoid|ethmoid|nasal|lacrimal|maxilla|mandible|palatine|vomer|zygomatic|hyoid/,"cranio","scheletro"],[/clavicle/,"clavicola","scheletro"],[/scapula$/,"scapola","scheletro"],[/humerus/,"omero","scheletro"],[/^ulna$|^radius$/,"avambraccio-ossa","scheletro"],[/scaphoid|lunate|triquetral|pisiform|trapezium|trapezoid|capitate|hamate|metacarpal|(phalanx-of-(thumb|index|middle|ring|little)-finger)|phalanx-of-thumb/,"mano-ossa","scheletro"],[/femur/,"femore","scheletro"],[/patella/,"rotula","scheletro"],[/tibia$|fibula$/,"gamba-ossa","scheletro"],[/calcaneus|talus|cuboid|cuneiform|navicular|metatarsal|toe|sesamoid/,"piede-ossa","scheletro"],[/pectoralis/,"muscolo-pettorale","muscoli"],[/deltoid/,"muscolo-deltoide","muscoli"],[/biceps-brachii/,"muscolo-bicipite","muscoli"],[/triceps/,"muscolo-tricipite","muscoli"],[/extensor-digitorum-longus|flexor-digitorum-(longus|brevis)|fibularis|tibialis-posterior|plantaris/,"muscoli-peronei-flessori","muscoli"],[/tibialis-anterior/,"muscolo-tibiale-anteriore","muscoli"],[/brachioradialis|extensor-carpi|extensor-digitorum|flexor-carpi|pronator|supinator|palmaris|finger-flexors/,"muscoli-avambraccio","muscoli"],[/external-oblique/,"muscoli-obliqui","muscoli"],[/trapezius/,"muscolo-trapezio","muscoli"],[/levator-scapulae|rhomboid/,"muscoli-romboidi","muscoli"],[/serratus/,"muscolo-dentato-anteriore","muscoli"],[/supraspinatus|infraspinatus|subscapularis|teres/,"muscoli-cuffia-rotatori","muscoli"],[/erector-spinae/,"muscoli-erettori-spinali","muscoli"],[/gluteus|piriformis|obturator/,"muscolo-gluteo","muscoli"],[/psoas|iliacus/,"muscolo-psoas-iliaco","muscoli"],[/quadriceps/,"muscolo-quadricipite","muscoli"],[/biceps-femoris|semitendinosus|semimembranosus/,"muscoli-ischiocrurali","muscoli"],[/gastrocnemius|soleus|popliteus/,"muscolo-gastrocnemio","muscoli"],[/sternocleidomastoid/,"muscolo-sternocleidomastoideo","muscoli"],[/adductor|gracilis|sartorius/,"muscoli-adduttori","muscoli"]];function u0(n){let D=n.replace(h0,"").replace(/isaFJ\d+M?$/,"").replace(/partofFJ\d+$/,"").replace(/^-/,"");for(let[e,t,i]of A0)if(e.test(D))return{base:D,ent:t,layer:i};return{base:D,ent:null,layer:null}}var Cf=null;async function Wa(){if(Cf)return Cf;let n=new cB,D=[],e=await Promise.all(l0.map(t=>n.loadAsync(t)));for(let t of e)t.scene.updateMatrixWorld(!0),t.scene.traverse(i=>{if(!i.isMesh)return;let s=i.geometry.clone();s.applyMatrix4(i.matrixWorld);for(let f of Object.keys(s.attributes))f!=="position"&&f!=="normal"&&s.deleteAttribute(f);s.attributes.normal||s.computeVertexNormals(),s.computeBoundingBox();let B=u0(i.name||""),r=s.boundingBox.clone(),o=(r.min.x+r.max.x)/2;D.push({name:i.name,base:B.base,ent:B.ent,layer:B.layer,geo:s,box:r,side:o>.004?1:o<-.004?-1:0})});return Cf=D,D}function Ga(n){let D=n.map(i=>i.index?i:i.toNonIndexed()),e=D.every(i=>i.index);return aB(e?D:D.map(i=>i.index?i.toNonIndexed():i))}var af={scheletro:"#ece1c8",muscoli:"#b9453b"};var hB=(n,D,e)=>{let t=Math.min(1,Math.max(0,(e-n)/(D-n)));return t*t*(3-2*t)},Ua=n=>new H(n[0],n[1],n[2]);function d0(n){return D=>{if(D<=n[0][0])return n[0][1]+(D-n[0][0]);let e=n.length;if(D>=n[e-1][0])return n[e-1][1]+(D-n[e-1][0]);for(let t=0;t<e-1;t++){let[i,s]=n[t],[B,r]=n[t+1];if(D>=i&&D<=B)return s+(D-i)/(B-i)*(r-s)}return D}}var AB=class{constructor(D,e){this.m=D.map(Ua),this.r=e.map(Ua),this.segs=[];for(let t=0;t<this.m.length-1;t++){let i=this.m[t+1].clone().sub(this.m[t]),s=this.r[t+1].clone().sub(this.r[t]);this.segs.push({i:t,lenM:i.length(),dm:i.clone().normalize(),dr:s.clone().normalize(),lenR:s.length(),q:new ge().setFromUnitVectors(i.clone().normalize(),s.clone().normalize())})}}map(D,e){let t=null;for(let l of this.segs){let u=this.m[l.i],d=((D.x-u.x)*l.dm.x+(D.y-u.y)*l.dm.y+(D.z-u.z)*l.dm.z)/l.lenM,A=Math.min(1,Math.max(0,d)),h=u.x+l.dm.x*l.lenM*A,g=u.y+l.dm.y*l.lenM*A,x=u.z+l.dm.z*l.lenM*A,y=Math.hypot(D.x-h,D.y-g,D.z-x);(!t||y<t.d)&&(t={d:y,s:l,t:d,tc:A,ax:h,ay:g,az:x})}let{s:i,t:s,tc:B,ax:r,ay:o,az:f}=t,C=t.s.i===this.segs.length-1&&s>1||t.s.i===0&&s<0?s:B,a=new H(D.x-r,D.y-o,D.z-f).applyQuaternion(i.q),c=this.r[i.i].clone().addScaledVector(i.dr,i.lenR*C);return e.copy(c).add(a),t.d}};function Za(n){let D=(F,_=null)=>n.filter(N=>F.test(N.base)&&(_===null||N.side===_)),e=F=>{let _=new Se;return F.forEach(N=>_.union(N.box)),_},t=F=>{let _=e(D(F));return(_.min.y+_.max.y)/2},i={sole:e(D(/phalanx|metatarsal|calcaneus/)).min.y,ankle:e(D(/^tibia$/,1)).min.y+.025,knee:e(D(/^femur$/,1)).min.y,sacrum:t(/^sacrum$/),L5:t(/fifth-lumbar/),L1:t(/first-lumbar/),T12:t(/twelfth-thoracic/),T1:t(/first-thoracic/),C1:t(/^atlas$/),top:e(D(/parietal|frontal-bone/)).max.y},s=d0([[0,i.sole],[.085,i.ankle],[.495,i.knee],[.895,i.sacrum],[.985,i.L5],[1.115,i.L1],[1.145,i.T12],[1.425,i.T1],[1.525,i.C1],[1.75,i.top]]),B=e(D(/(^|-)(fifth|sixth|seventh)-rib$/)),r=Math.max(Math.abs(B.min.x),Math.abs(B.max.x)),o=r/.155,f=e(D(/^hip-bone$/)),a=Math.max(Math.abs(f.min.x),Math.abs(f.max.x))/.165,c=(F,_)=>e(D(F)).max.z-_,l=[[i.sacrum,c(/^sacrum$/,.03)],[i.L5,c(/fifth-lumbar/,.0245)],[i.L1,c(/first-lumbar/,.0245)],[i.T12,c(/twelfth-thoracic/,.02)],[t(/sixth-thoracic/),c(/sixth-thoracic/,.0185)],[i.T1,c(/first-thoracic/,.015)],[i.C1,c(/^atlas$/,.012)]].sort((F,_)=>F[0]-_[0]),u=F=>{if(F<=l[0][0])return l[0][1];for(let _=0;_<l.length-1;_++)if(F<=l[_+1][0]){let N=(F-l[_][0])/(l[_+1][0]-l[_][0]);return l[_][1]+N*(l[_+1][1]-l[_][1])}return l[l.length-1][1]},d=e(D(/(^|-)(fourth|fifth|sixth)-rib$/)).max.z,A=t(/sixth-thoracic/),h=d-u(A),g=Ui(1.27).cz+Ui(1.27).rz-.016-sn(1.27),x=h/g,y=e(D(/^humerus$/,1)),E=e(D(/^radius$/,1)),w=e(D(/^middle-phalanx-of-middle-finger$|distal-phalanx-of-middle-finger/,1)),v=e(D(/^femur$/,1)),P=e(D(/^tibia$/,1)),R=(F,_)=>[(F.min.x+F.max.x)/2,_,(F.min.z+F.max.z)/2],m=[[y.min.x+(y.max.x-y.min.x)*.3,y.max.y-.025,(y.min.z+y.max.z)/2],R(y,y.min.y+.01),R(E,E.min.y+.005),R(w,w.min.y)];m[1][0]=(m[0][0]+m[2][0])/2-.004;let M=[[v.min.x+(v.max.x-v.min.x)*.22,v.max.y-.03,(v.min.z+v.max.z)/2],R(v,v.min.y+.005),R(P,P.min.y+.02),[R(P,0)[0],i.sole+.01,R(P,0)[2]+.07]],X=[Nt.pts[0],Nt.pts[2],Nt.pts[4],[Nt.hand[0]+.004,.7,Nt.hand[2]]],I=[ai.pts[0],ai.pts[2],ai.pts[4],[.095,.01,.05]],z=new AB(X,m),$=new AB(I,M),W={realY:i,chestHalf:r,sxChest:o,sxPelvis:a,sz:x,realArm:m,realLeg:M,zLevels:l.map(F=>F[1])},DD=new H,J=new H,iD=new H,BD=new H;function pD(F,_){let N=s(F.y),Z=a+(o-a)*hB(.93,1.12,F.y),Q=F.y>1.46?1+(Z-1)*(1-hB(1.46,1.58,F.y)):Z;_.set(F.x*Q,N,u(N)+(F.z-sn(F.y))*x)}function SD(F){let _=F.attributes.position;for(let N=0;N<_.count;N++){let Z=_.getX(N)<0?-1:1;DD.set(Math.abs(_.getX(N)),_.getY(N),_.getZ(N)),pD(DD.set(_.getX(N),_.getY(N),_.getZ(N)),BD),DD.set(Math.abs(_.getX(N)),_.getY(N),_.getZ(N));let Q=z.map(DD,J),rD=$.map(DD,iD),lD=DD.y<1.46?1-hB(.07,.125,Q):0,TD=DD.y<.93?1-hB(.095,.16,rD):0,WD=BD.x,ED=BD.y,De=BD.z;lD>0&&(WD=WD*(1-lD)+J.x*Z*lD,ED=ED*(1-lD)+J.y*lD,De=De*(1-lD)+J.z*lD),TD>0&&(WD=WD*(1-TD)+iD.x*Z*TD,ED=ED*(1-TD)+iD.y*TD,De=De*(1-TD)+iD.z*TD),_.setXYZ(N,WD,ED,De)}return _.needsUpdate=!0,F.computeVertexNormals(),F.computeBoundingBox(),F.computeBoundingSphere(),F}return{apply:SD,info:W,fy:s,zSpine:u,byBase:D,box:e}}var uB=class extends ii{constructor(){super();let D=new yn;D.deleteAttribute("uv");let e=new at({side:ve}),t=new at,i=new oi(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new KD(D,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let B=new KD(D,t);B.position.set(-10.906,2.009,1.846),B.rotation.set(0,-.195,0),B.scale.set(2.328,7.905,4.651),this.add(B);let r=new KD(D,t);r.position.set(-5.607,-.754,-.758),r.rotation.set(0,.994,0),r.scale.set(1.97,1.534,3.955),this.add(r);let o=new KD(D,t);o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),this.add(o);let f=new KD(D,t);f.position.set(-2.017,.018,6.124),f.rotation.set(0,.333,0),f.scale.set(2.002,4.566,2.064),this.add(f);let C=new KD(D,t);C.position.set(2.291,-.756,-2.621),C.rotation.set(0,-.286,0),C.scale.set(1.546,1.552,1.496),this.add(C);let a=new KD(D,t);a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),this.add(a);let c=new KD(D,li(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new KD(D,li(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new KD(D,li(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new KD(D,li(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let A=new KD(D,li(20));A.position.set(3.235,11.486,-12.541),A.scale.set(2.5,2,.1),this.add(A);let h=new KD(D,li(100));h.position.set(0,20,0),h.scale.set(1,.1,1),this.add(h)}dispose(){let D=new Set;this.traverse(e=>{e.isMesh&&(D.add(e.geometry),D.add(e.material))});for(let e of D)e.dispose()}};function li(n){let D=new Qe;return D.color.setScalar(n),D}var Ka="#b9453b";function Ya(n){let D=e=>MD([e,Ve(e)]);n("muscolo-retto-addome",["muscoli"],D(PD(.026,.145,.011,{at:[.027,1.06,.092],rot:[-.05,0,.02],seg:24,hseg:18})),{color:Ka,roughness:.55}),n("muscolo-gran-dorsale",["muscoli"],D(PD(.078,.135,.01,{at:[.092,1.16,-.098],rot:[0,.35,-.35],seg:24,hseg:18})),{color:Ka,roughness:.55})}function $a(n){let D=MD([PD(.041,.06,.04,{at:[.038,1.232,.04],rot:[.12,0,.55],seg:26,hseg:18,noise:.012,seed:2}),PD(.037,.052,.031,{at:[-.01,1.245,.06],rot:[0,0,.42],seg:24,hseg:16,noise:.012,seed:5}),PD(.026,.037,.026,{at:[-.05,1.262,.032],rot:[0,0,.1],seg:20,hseg:14}),PD(.03,.022,.025,{at:[.02,1.296,.004],seg:20,hseg:12}),PD(.012,.016,.01,{at:[-.012,1.302,.062],rot:[0,0,.6],seg:10,hseg:8})]);n("cuore",["cardiovascolare","organi"],D,{color:"#b5303a",roughness:.5});let e=[fD([[.05,1.3,-.002],[.075,1.306,-.012],[.092,1.3,-.018]],.0045,{radial:8,segs:6}),fD([[.046,1.288,-.004],[.072,1.282,-.012],[.09,1.276,-.02]],.0045,{radial:8,segs:6}),fD([[0,1.298,-.004],[-.04,1.306,-.012],[-.08,1.3,-.02]],.0045,{radial:8,segs:6}),fD([[.002,1.286,-.004],[-.04,1.282,-.012],[-.078,1.274,-.02]],.0045,{radial:8,segs:6})];n("cuore",["cardiovascolare","organi"],MD(e),{color:"#b5303a"});let t=fD([[.008,1.292,.034],[.004,1.335,.04],[.016,1.378,.03],[.04,1.402,.004],[.06,1.39,-.03],[.066,1.35,-.056],[.056,1.28,-.062],[.044,1.19,-.058],[.032,1.1,-.046],[.02,1.02,-.034],[.012,.978,-.026]],[.0135,.0135,.0125,.012,.0115,.011,.0108,.0105,.01,.0098,.0095],{radial:14,ends:"round"});n("aorta",["cardiovascolare"],t,{color:"#d63a3f"}),n("aorta",["cardiovascolare"],MD([fD([[.012,1.395,.02],[-.01,1.412,.018],[-.03,1.425,.014]],.0065,{radial:8,segs:6}),fD([[.036,1.402,.004],[.034,1.425,.008],[.034,1.445,.012]],.0055,{radial:8,segs:6}),fD([[.054,1.396,-.02],[.075,1.418,-.004],[.1,1.432,.008]],.0055,{radial:8,segs:6})]),{color:"#d63a3f"}),n("arteria-polmonare",["cardiovascolare"],MD([fD([[-.002,1.286,.074],[.004,1.318,.06],[.012,1.336,.034],[.02,1.338,.01]],.0115,{radial:12}),fD([[.02,1.338,.008],[.06,1.34,-.004],[.095,1.322,-.012]],.0085,{radial:10,segs:8}),fD([[.016,1.34,.008],[-.03,1.346,0],[-.09,1.326,-.012]],.0085,{radial:10,segs:8})]),{color:"#4a74c9"}),n("vena-cava-superiore",["cardiovascolare"],fD([[-.036,1.425,.014],[-.04,1.38,.014],[-.044,1.33,.02],[-.048,1.292,.026]],.0098,{radial:12}),{color:"#3b62c6"}),n("vena-cava-inferiore",["cardiovascolare"],fD([[-.048,1.232,.016],[-.04,1.16,-.01],[-.032,1.09,-.038],[-.024,1.02,-.034],[-.02,.978,-.028]],[.013,.0145,.0155,.015,.0145],{radial:14}),{color:"#3b62c6"}),n("trachea",["respiratorio"],MD([fD([[0,1.538,.02],[0,1.47,.012],[0,1.376,.004]],.0105,{radial:14,segs:24,ends:"flat"}),fD([[0,1.376,.004],[-.02,1.36,0],[-.045,1.338,-.004]],.0075,{radial:10,segs:8}),fD([[0,1.376,.004],[.024,1.358,-.002],[.052,1.332,-.008]],.0072,{radial:10,segs:8})]),{color:"#9fc7de"}),n("bronchi",["respiratorio"],MD([...[[-1,1],[1,1]].flatMap(([A])=>[fD([[A*.045,1.338,-.004],[A*.065,1.37,-.002],[A*.085,1.4,0]],.0042,{radial:8,segs:6}),fD([[A*.048,1.334,-.004],[A*.074,1.322,.004],[A*.094,1.296,.016]],.004,{radial:8,segs:6}),fD([[A*.048,1.334,-.006],[A*.074,1.29,-.02],[A*.088,1.24,-.034],[A*.095,1.19,-.042]],.0045,{radial:8,segs:10}),fD([[A*.074,1.286,-.018],[A*.098,1.25,-.008],[A*.112,1.22,0]],.003,{radial:6,segs:6}),fD([[A*.082,1.262,-.028],[A*.06,1.21,-.044]],.003,{radial:6,segs:6})])]),{color:"#a9c9de"}),n("laringe",["respiratorio"],MD([PD(.017,.015,.014,{at:[0,1.545,.024],seg:14,hseg:10}),fD([[-.02,1.575,.02],[0,1.572,.03],[.02,1.575,.02]],.0035,{radial:6,segs:6})]),{color:"#c3d9e8"});let i=[.012,1.255,.048],s=[.082,.075,.062],B=(A,h,g,x,y,E)=>{let w=PD(h[0],h[1],h[2],{at:A,rot:g,seg:30,hseg:22,noise:.01,seed:x});return ua(w,i,s,1)},r={r:[B([-.092,1.35,.002],[.066,.072,.076],[.1,0,-.15],1),B([-.088,1.24,.048],[.06,.032,.046],[0,0,0],3),B([-.094,1.2,-.042],[.068,.078,.07],[-.1,0,0],5)],l:[B([.096,1.34,.004],[.06,.082,.074],[.1,0,.15],7),B([.098,1.19,-.03],[.066,.082,.082],[-.1,0,0],9)]};n("polmone-destro",["respiratorio","organi"],r.r[0],{color:"#ec9aa2",matKey:"a"}),n("polmone-destro",["respiratorio","organi"],r.r[1],{color:"#f2adb3",matKey:"b"}),n("polmone-destro",["respiratorio","organi"],r.r[2],{color:"#e58a95",matKey:"c"}),n("polmone-sinistro",["respiratorio","organi"],r.l[0],{color:"#ec9aa2",matKey:"a"}),n("polmone-sinistro",["respiratorio","organi"],r.l[1],{color:"#e58a95",matKey:"c"});let o=(A,h)=>{let g=new Bi(1,28,12,0,Math.PI*2,0,Math.PI/2);return g.scale(.095,h,.12),g.translate(A*.07,1.105,0),g};n("diaframma",["respiratorio","muscoli"],MD([o(-1,.062),o(1,.05)]),{color:"#b9473f",double:!0,opacity:.88,transparent:!0}),n("esofago",["digerente"],fD([[.002,1.54,.002],[.004,1.48,-.008],[.01,1.39,-.034],[.014,1.29,-.046],[.02,1.19,-.042],[.03,1.118,-.02],[.04,1.104,-.01]],.0085,{radial:12,segs:36}),{color:"#d98a7b"});let f=MD([fD([[.052,1.128,-.014],[.082,1.112,0],[.086,1.07,.02],[.07,1.03,.04],[.034,1.008,.052],[0,1.004,.054],[-.032,1.02,.046]],[.03,.043,.044,.036,.024,.017,.013],{radial:18,segs:34}),Gi(.033,[.07,1.126,-.01],18)]);n("stomaco",["digerente","organi"],f,{color:"#e6a399"});let C=PD(.088,.06,.078,{at:[-.07,1.112,.006],rot:[0,0,.12],seg:32,hseg:22,noise:.012,seed:4}),a=PD(.062,.036,.058,{at:[.022,1.098,.036],rot:[.1,0,-.15],seg:26,hseg:16,noise:.01,seed:8});n("fegato",["digerente","organi"],MD([C,a]),{color:"#8a3a30",roughness:.45}),n("colecisti",["digerente","organi"],MD([PD(.013,.026,.013,{at:[-.052,1.066,.056],rot:[.3,0,.2],seg:14,hseg:10}),fD([[-.048,1.052,.05],[-.04,1.042,.04],[-.034,1.04,.028]],.0028,{radial:6,segs:6})]),{color:"#3d8a4b"}),n("pancreas",["digerente","endocrino","organi"],fD([[-.048,1.034,0],[-.012,1.05,-.012],[.03,1.058,-.026],[.07,1.08,-.04],[.1,1.094,-.048]],[.021,.016,.0145,.012,.009],{radial:12,segs:24}),{color:"#e8c67f"}),n("duodeno",["digerente"],fD([[-.03,1.024,.03],[-.062,1.018,.004],[-.068,.985,-.01],[-.036,.962,-.016],[.01,.968,-.022],[.03,.98,-.024]],.0125,{radial:12,segs:28}),{color:"#eaa88b"});let c=Ci(11),l=[],u=8;for(let A=0;A<u;A++){let h=.995-A*.0125,g=A%2===0?1:-1,x=7;for(let y=0;y<x;y++){let E=y/(x-1),w=g>0?-.085+E*.17:.085-E*.17;l.push([w,h+(c()-.5)*.006,.02+(c()-.5)*.045+.02*Math.sin(E*Math.PI)])}}n("intestino-tenue",["digerente"],fD(l,.0105,{radial:10,segs:340}),{color:"#edb69b"}),n("colon",["digerente"],MD([Gi(.026,[-.086,.918,.034],16),fD([[-.086,.924,.034],[-.1,.985,.03],[-.108,1.048,.022]],.0195,{radial:14,segs:14}),fD([[-.108,1.048,.022],[-.092,1.024,.066],[-.04,1.008,.078],[.03,1.012,.074],[.09,1.036,.05],[.12,1.068,.006]],.0195,{radial:14,segs:30}),fD([[.12,1.068,.006],[.116,1.01,-.012],[.104,.95,-.016],[.09,.915,-.006]],.0185,{radial:14,segs:16}),fD([[.09,.915,-.006],[.06,.895,.026],[.032,.905,.012],[.012,.89,-.016],[.002,.872,-.038],[.002,.84,-.058]],[.016,.016,.015,.015,.015,.016],{radial:12,segs:28})]),{color:"#d89c86"}),n("appendice",["digerente"],fD([[-.078,.9,.04],[-.07,.876,.046],[-.06,.866,.04]],.0045,{radial:6,segs:8}),{color:"#e6a493"}),n("retto",["digerente"],fD([[.002,.872,-.04],[.002,.842,-.062],[0,.812,-.066],[0,.79,-.054]],[.016,.019,.016,.01],{radial:12,segs:12}),{color:"#c98978"});let d=(A,h)=>PD(.027,.056,.023,{at:[A*.064,h,-.054],rot:[0,0,-A*.12],seg:26,hseg:18,deform:g=>{g.x-=A*0;let x=-A;g.x*x>0&&(g.x-=x*.012*Math.exp(-(g.y*g.y)/4e-4))}});n("rene",["urinario","organi"],MD([d(-1,1.09),d(1,1.108)]),{color:"#a14c4a",roughness:.4}),n("ureteri",["urinario"],MD([-1,1].map(A=>fD([[A*.05,1.082,-.048],[A*.046,1.04,-.052],[A*.04,.99,-.05],[A*.046,.94,-.034],[A*.04,.905,-.004],[A*.026,.886,.026]],.0034,{radial:6,segs:30}))),{color:"#e2c35c"}),n("vescica",["urinario","organi"],MD([PD(.04,.034,.038,{at:[0,.878,.046],seg:20,hseg:14}),fD([[0,.85,.056],[0,.826,.072],[0,.808,.082]],.0055,{radial:8,segs:6})]),{color:"#f0d27a",opacity:.95,transparent:!0}),n("surrene",["endocrino","organi"],MD([-1,1].map(A=>PD(.019,.0085,.013,{at:[A*.049,1.158+(A>0?.012:0),-.054],rot:[0,0,-A*.5],seg:12,hseg:8}))),{color:"#e3bf5e"}),n("tiroide",["endocrino","organi"],MD([PD(.011,.022,.01,{at:[-.021,1.502,.022],rot:[0,0,.1],seg:14,hseg:10}),PD(.011,.022,.01,{at:[.021,1.502,.022],rot:[0,0,-.1],seg:14,hseg:10}),PD(.014,.0045,.005,{at:[0,1.49,.026],seg:10,hseg:6})]),{color:"#bf5f4c"}),n("timo",["linfatico","endocrino","organi"],MD([PD(.014,.034,.01,{at:[-.012,1.372,.054],rot:[.1,0,.1],seg:12,hseg:10}),PD(.014,.034,.01,{at:[.012,1.372,.054],rot:[.1,0,-.1],seg:12,hseg:10})]),{color:"#dab6a2"}),n("milza",["linfatico","organi"],PD(.021,.046,.027,{at:[.126,1.1,-.05],rot:[0,.2,-.22],seg:18,hseg:12}),{color:"#7a3b5d"})}var ct="#d63a3f",lt="#3d66cf",p0=[["arteria-carotide",ct,[[[.034,1.436,.012],[.036,1.5,.016],[.04,1.552,.018],[.044,1.598,.004]],[[.04,1.556,.02],[.052,1.592,.034]]],.0058],["arteria-succlavia",ct,[[[.09,1.43,.012],[.15,1.418,.014],[.196,1.382,.004],[.208,1.35,0]]],.0058],["arteria-brachiale",ct,[[[.208,1.35,0],[.22,1.28,0],[.238,1.19,.006],[.25,1.122,.018]]],.0052],["arteria-radiale",ct,[[[.25,1.122,.018],[.268,1.04,.03],[.292,.934,.034],[.302,.866,.03],[.306,.83,.026]]],.0034],["arteria-ulnare",ct,[[[.25,1.122,.018],[.264,1.04,.002],[.292,.93,0],[.304,.866,0],[.312,.826,.014]]],.0034],["arterie-viscerali",ct,[[[.016,1.138,-.03],[.016,1.14,.01]],[[.014,1.092,-.03],[.018,1.06,.016],[.03,1.02,.04]]],.0042],["arterie-renali",ct,[[[.012,1.104,-.036],[.034,1.1,-.046],[.052,1.1,-.05]]],.0045],["arteria-iliaca",ct,[[[.008,.976,-.026],[.04,.95,-.012],[.068,.92,.012],[.08,.892,.044]]],.0068],["arteria-femorale",ct,[[[.08,.892,.044],[.086,.84,.05],[.09,.72,.044],[.094,.6,.02],[.095,.545,-.01]]],.0068],["arteria-poplitea",ct,[[[.095,.545,-.01],[.097,.5,-.03],[.096,.45,-.028]]],.0058],["arteria-tibiale",ct,[[[.096,.45,-.028],[.092,.34,-.022],[.082,.2,-.014],[.076,.1,-.008]],[[.1,.44,0],[.106,.33,.034],[.104,.2,.046],[.098,.1,.054],[.094,.05,.08]]],.0036],["vena-giugulare-interna",lt,[[[.04,1.6,0],[.042,1.55,.01],[.042,1.49,.014],[.04,1.438,.016]]],.0078],["vena-succlavia",lt,[[[.04,1.438,.018],[.09,1.422,.026],[.15,1.41,.022],[.196,1.384,.012]]],.0075],["vena-ascellare",lt,[[[.196,1.384,.012],[.204,1.36,.006],[.212,1.32,.004]]],.0068],["vena-basilica",lt,[[[.306,.868,-.012],[.28,1,-.012],[.256,1.116,-.002],[.238,1.2,.004],[.218,1.3,.006],[.208,1.352,.004]]],.0042],["vena-cefalica",lt,[[[.306,.868,.034],[.29,1,.04],[.268,1.112,.038],[.246,1.2,.038],[.214,1.32,.052],[.172,1.398,.044],[.15,1.41,.03]]],.004],["vena-mediana-cubitale",lt,[[[.268,1.108,.038],[.262,1.114,.02],[.256,1.118,0]]],.0034],["vene-renali",lt,[[[.05,1.108,-.044],[.034,1.108,-.04],[0,1.1,-.038]]],.0058],["vena-iliaca",lt,[[[0,.978,-.03],[.036,.952,-.016],[.064,.918,.006],[.076,.89,.04]]],.0085],["vena-femorale",lt,[[[.076,.89,.04],[.082,.84,.046],[.086,.72,.034],[.09,.6,.006],[.093,.545,-.016],[.095,.45,-.024]]],.008],["vena-safena-magna",lt,[[[.08,.05,.05],[.078,.092,.034],[.084,.2,.026],[.088,.33,.018],[.086,.44,.01],[.086,.5,.012],[.086,.6,.034],[.084,.72,.044],[.082,.84,.054],[.08,.884,.05]]],.0034],["vene-gamba",lt,[[[.095,.45,-.024],[.092,.34,-.02],[.086,.2,-.012],[.08,.1,-.006]],[[.1,.44,-.004],[.104,.33,.028],[.1,.2,.04]]],.0034]];function Qa(n){for(let[D,e,t,i]of p0){let s=t.map(r=>fD(r,i,{radial:8,segs:Math.max(8,r.length*6),ends:"round"})),B=MD(s);n(D,["vasi"],MD([B,Ve(B)]),{color:e,roughness:.5})}n("vena-porta",["vasi","digerente"],MD([fD([[-.006,1.04,-.01],[-.022,1.066,.004],[-.04,1.09,.022]],.0072,{radial:10,segs:10}),fD([[-.006,1.04,-.01],[.01,1.01,.01],[.016,.98,.03]],.0058,{radial:8,segs:8})]),{color:"#5a58c8"})}var cf="#f2c230";function Dc(n){let D=B=>PD(.04,.06,.08,{at:[B*.0285,1.676,-.005],rot:[.04,0,0],seg:36,hseg:26,noise:.035,seed:3+B,freq:6});n("cervello",["nervoso","organi"],MD([D(-1),D(1)]),{color:"#dcaaa6",roughness:.65}),n("cervelletto",["nervoso","organi"],PD(.046,.026,.036,{at:[0,1.622,-.062],seg:24,hseg:14,noise:.03,seed:9,freq:8}),{color:"#c78f8b",roughness:.65}),n("tronco-encefalico",["nervoso","organi"],fD([[0,1.65,-.012],[0,1.618,-.026],[0,1.585,-.036],[0,1.555,-.04]],[.016,.013,.012,.0095],{radial:14}),{color:"#e6c4b3"});let e=[];for(let B=1.555;B>=1.14;B-=.045)e.push([0,B,sn(B)-(B>1.44?.016:.025)]);n("midollo-spinale",["nervoso"],fD(e,[.0075,.0075,.0085,.0095,.009,.008,.0075,.007,.0045],{radial:10,ends:"round"}),{color:"#f1e2b4"});let t=Ci(3),i=[];for(let B=0;B<9;B++){let r=(B-4)*.0035;i.push(fD([[0,1.15,sn(1.15)-.026],[r,1.05,sn(1.05)-.03],[r*1.6+(t()-.5)*.004,.96,sn(.96)-.032],[r*2.2,.9,-.078]],.0014,{radial:4,segs:12}))}n("midollo-spinale",["nervoso"],MD(i),{color:"#f1e2b4"});let s=B=>{let r=MD(B);return MD([r,Ve(r)])};n("plesso-brachiale",["nervoso"],s([fD([[.016,1.48,-.038],[.06,1.456,-.022],[.11,1.438,-.004],[.17,1.412,.006],[.206,1.37,.002]],.0045,{radial:8,segs:18}),fD([[.018,1.47,-.038],[.07,1.44,-.016],[.13,1.42,0],[.2,1.372,0]],.0035,{radial:8,segs:14}),fD([[.02,1.455,-.04],[.08,1.425,-.012],[.15,1.4,0],[.204,1.366,-.004]],.0035,{radial:8,segs:14}),fD([[.206,1.366,.004],[.218,1.3,.012],[.24,1.19,.016],[.252,1.122,.022],[.28,1,.016],[.3,.88,.02],[.31,.832,.018]],.003,{radial:6,segs:24}),fD([[.204,1.366,-.006],[.222,1.29,-.006],[.24,1.19,-.014],[.246,1.12,-.016],[.272,1.01,-.002],[.298,.89,0],[.312,.834,-.002]],.003,{radial:6,segs:24}),fD([[.204,1.362,-.014],[.226,1.29,-.03],[.246,1.2,-.026],[.262,1.13,.02],[.282,1.02,.036],[.302,.9,.03]],.003,{radial:6,segs:24})]),{color:cf}),n("nervo-femorale",["nervoso"],s([fD([[.04,1.08,-.054],[.05,1.01,-.04],[.07,.94,0],[.086,.89,.04],[.09,.8,.05],[.092,.7,.05],[.09,.56,.046]],.004,{radial:8,segs:26})]),{color:cf}),n("nervo-sciatico",["nervoso"],s([fD([[.036,.96,-.068],[.06,.9,-.074],[.084,.86,-.052],[.092,.76,-.04],[.096,.62,-.032],[.097,.52,-.032]],.0066,{radial:10,segs:26}),fD([[.097,.52,-.032],[.092,.4,-.03],[.088,.25,-.02],[.082,.11,-.008]],.0038,{radial:8,segs:18}),fD([[.097,.52,-.032],[.116,.48,-.022],[.124,.4,0],[.114,.3,.028],[.108,.19,.04]],.0034,{radial:8,segs:16})]),{color:cf}),n("nervo-vago",["nervoso"],s([fD([[.024,1.588,-.012],[.032,1.54,.004],[.036,1.47,.01],[.036,1.42,.006],[.028,1.36,-.006],[.02,1.3,-.026],[.012,1.23,-.04],[.008,1.16,-.034],[.012,1.11,-.014]],.0026,{radial:6,segs:40})]),{color:"#f7d56a"})}function ec(n){n("ipofisi",["endocrino","organi"],PD(.0065,.005,.0055,{at:[0,1.628,.022],seg:12,hseg:8}),{color:"#e8a24a"}),n("utero",["riproduttivo"],MD([PD(.031,.04,.023,{at:[0,.912,.002],rot:[.5,0,0],seg:20,hseg:14}),fD([[0,.89,-.004],[0,.87,.006]],.0105,{radial:10,segs:4})]),{color:"#c9606f",sex:"f"});let D=MD([fD([[.02,.93,.004],[.05,.945,.002],[.078,.935,-.006],[.094,.908,-.012]],.0036,{radial:8,segs:14}),Gi(.0055,[.094,.904,-.012],8)]);n("tube-uterine",["riproduttivo"],MD([D,Ve(D)]),{color:"#dc8c97",sex:"f"});let e=PD(.017,.011,.0095,{at:[.098,.892,-.018],rot:[0,0,-.4],seg:14,hseg:10});n("ovaio",["riproduttivo","endocrino"],MD([e,Ve(e)]),{color:"#dca85c",sex:"f"}),n("vagina",["riproduttivo"],fD([[0,.872,.002],[0,.848,.018],[0,.82,.042],[0,.806,.056]],.0115,{radial:12,segs:10,ellip:.6}),{color:"#d4788a",sex:"f"}),n("prostata",["riproduttivo"],MD([PD(.019,.016,.016,{at:[0,.852,.03],seg:14,hseg:10})]),{color:"#c98f5f",sex:"m"});let t=fD([[.012,.866,.014],[.026,.884,.004],[.034,.9,-.012]],.005,{radial:8,segs:8});n("vescicole-seminali",["riproduttivo"],MD([t,Ve(t)]),{color:"#d9a870",sex:"m"});let i=fD([[.024,.768,.07],[.034,.83,.074],[.042,.89,.056],[.04,.912,.02],[.03,.89,-.004],[.014,.862,.016]],.0027,{radial:6,segs:24});n("dotto-deferente",["riproduttivo"],MD([i,Ve(i)]),{color:"#f0d9b0",sex:"m"});let s=MD([PD(.017,.025,.016,{at:[.024,.742,.08],seg:14,hseg:10}),fD([[.026,.768,.07],[.032,.738,.062],[.03,.715,.066]],.0045,{radial:6,segs:8})]);n("testicolo",["riproduttivo","endocrino"],MD([s,Ve(s)]),{color:"#e2b98a",sex:"m"});let B=Ci(21),r=(C,a,c,l,u,d)=>{let A=[];for(let h=0;h<l;h++)A.push(PD(d*(.8+B()*.6),d*(.8+B()*.7),d*(.7+B()*.5),{at:[C+(B()-.5)*u[0],a+(B()-.5)*u[1],c+(B()-.5)*u[2]],seg:8,hseg:6}));return A},o=MD([...r(.05,1.54,.02,7,[.016,.06,.02],.0065),...r(.08,1.446,.02,3,[.04,.01,.01],.006),...r(.178,1.34,.004,9,[.036,.05,.03],.007),...r(.034,1.32,0,3,[.012,.03,.014],.0065),...r(.066,.935,.004,4,[.02,.03,.014],.007),...r(.086,.862,.058,7,[.04,.03,.012],.0075)]),f=MD([...r(0,1.03,-.03,7,[.01,.09,.012],.007),...r(0,.99,.01,8,[.06,.04,.03],.007)]);n("linfonodi",["linfatico"],MD([o,Ve(o),f]),{color:"#2faa72"}),n("dotto-toracico",["linfatico"],fD([[.004,1.08,-.04],[.01,1.16,-.06],[.012,1.25,-.066],[.016,1.34,-.06],[.03,1.41,-.03],[.044,1.438,.004]],.0034,{radial:8,segs:24}),{color:"#35b8a4"})}var im=[{id:"cute",label:"Cute",icon:"user-round"},{id:"scheletro",label:"Scheletro",icon:"bone"},{id:"muscoli",label:"Muscoli",icon:"dumbbell"},{id:"cardiovascolare",label:"Cardiovascolare",icon:"heart-pulse"},{id:"vasi",label:"Arterie e vene",icon:"droplets"},{id:"nervoso",label:"Nervoso",icon:"brain"},{id:"respiratorio",label:"Respiratorio",icon:"lungs"},{id:"digerente",label:"Digerente",icon:"stomach"},{id:"urinario",label:"Urinario",icon:"kidney"},{id:"riproduttivo",label:"Riproduttivo",icon:"baby"},{id:"endocrino",label:"Endocrino",icon:"flask-conical"},{id:"linfatico",label:"Linfatico",icon:"waypoints"},{id:"organi",label:"Organi",icon:"cell"}];async function sm(n,{onSelect:D,onFrame:e}={}){let t;try{t=new Is({antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch{return{error:"WebGL non disponibile su questo dispositivo."}}t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.toneMapping=ho,t.toneMappingExposure=1.05,t.setClearColor(0,0),n.appendChild(t.domElement),t.domElement.style.touchAction="none",t.domElement.style.display="block";let i=new ii,s=new ue(32,1,.05,20),B={target:new H(0,.78,.1),dist:3.7};s.position.set(0,1,B.dist);let r=new CB(s,t.domElement);r.target.copy(B.target),r.enableDamping=!0,r.dampingFactor=.09,r.minDistance=.35,r.maxDistance=6.5,r.rotateSpeed=.75,r.zoomSpeed=.9,r.panSpeed=.7,r.screenSpacePanning=!0,r.touches={ONE:pt.ROTATE,TWO:pt.DOLLY_PAN},r.update();let o=new ni(t);i.environment=o.fromScene(new uB,.04).texture,i.environmentIntensity=.55,i.add(new DB(16777215,9085112,.35));let f=new tn(16777215,1);f.position.set(1.2,2.4,2.4),i.add(f);let C=new tn(10475775,.5);C.position.set(-2,1.2,-2),i.add(C);let a=new tn(16769740,.45);a.position.set(-1.5,.6,2.2),i.add(a);let c=new Map,l=new Map,u=[],d=new Ke;i.add(d);let A=null;function h(F,_,N,Z={}){!Z.real&&A&&A.apply(N);let Q=F+(Z.matKey?"\0"+Z.matKey:""),rD=c.get(Q);rD||(rD=new at({color:new _D(Z.color||"#cccccc"),roughness:Z.roughness??.55,metalness:.02,transparent:!!Z.transparent,opacity:Z.opacity??1,depthWrite:Z.depthWrite??!0,side:Z.double?ke:Ye,emissive:new _D(0)}),rD.userData={base:rD.opacity,baseTransparent:rD.transparent,baseDepth:rD.depthWrite,color:new _D(Z.color||"#cccccc"),skin:F==="cute"},c.set(Q,rD));let lD=new KD(N,rD);return lD.userData={ent:F,layers:_,sex:Z.sex||null,key:Z.key||null},Z.renderOrder!=null&&(lD.renderOrder=Z.renderOrder),d.add(lD),u.push(lD),l.has(F)||l.set(F,[]),l.get(F).push(lD),lD}let g;try{g=await Wa()}catch(F){return console.error(F),{error:"Impossibile caricare il modello anatomico."}}A=Za(g);let x=new Map;for(let F of g){if(!F.ent)continue;let _=F.ent+"|"+F.layer;x.has(_)||x.set(_,{ent:F.ent,layer:F.layer,geos:[]}),x.get(_).geos.push(F.geo)}for(let F of x.values()){let _=F.layer==="muscoli"?af.muscoli:F.ent==="dischi-intervertebrali"?"#aab4b0":F.ent.startsWith("legamenti")||F.ent.startsWith("tendine")?"#e6d8b0":af.scheletro;h(F.ent,[F.layer],Ga(F.geos),{color:_,roughness:F.layer==="muscoli"?.55:.6,real:!0})}ya(h,g);for(let F of[da,Ya,$a,Qa,Dc,ec])F(h);let y=new Set(["cute","organi"]),E="f",w=null;function v(){for(let F of u){let _=F.userData,N=_.layers.some(Z=>y.has(Z));_.sex&&_.sex!==E&&(N=!1),F.visible=N}P(),M()}function P(){for(let[F,_]of c){let N=F,Z=w&&(F===w||F.startsWith(w+"\0")),Q=_.userData;w?Z?(_.opacity=1,_.transparent=!1,_.depthWrite=!0,_.emissive.copy(Q.color).multiplyScalar(.55)):(_.opacity=Q.skin?Math.min(Q.base,.07):.14,_.transparent=!0,_.depthWrite=!1,_.emissive.setHex(0)):(_.opacity=Q.base,_.transparent=Q.baseTransparent,_.depthWrite=Q.baseDepth,_.emissive.setHex(0)),_.needsUpdate=!0}}let R=!0,m=!1;function M(){R=!0,m||(m=!0,requestAnimationFrame(I))}let X={active:!1,t:0,from:null,to:null};function I(){if(!t){m=!1;return}if(!t)return;let F=!1;if(X.active){X.t=Math.min(1,X.t+.045);let N=1-Math.pow(1-X.t,3);r.target.lerpVectors(X.from.target,X.to.target,N),s.position.lerpVectors(X.from.pos,X.to.pos,N),X.t>=1&&(X.active=!1),F=!0}let _=r.update();t.render(i,s),e&&e(s,t.domElement),R=!1,_||F||R?requestAnimationFrame(I):m=!1}r.addEventListener("change",M),r.addEventListener("start",M);function z(){let F=n.clientWidth,_=n.clientHeight;!F||!_||(t.setSize(F,_,!1),t.domElement.style.width=F+"px",t.domElement.style.height=_+"px",s.aspect=F/_,s.fov=F/_<.7?38:32,s.updateProjectionMatrix(),M())}let $=new ResizeObserver(z);$.observe(n);function W(F,_,N){let Z=N?N.clone().normalize():s.position.clone().sub(r.target).normalize();X.from={target:r.target.clone(),pos:s.position.clone()},X.to={target:F.clone(),pos:F.clone().add(Z.multiplyScalar(_))},X.t=0,X.active=!0,M()}let DD=new nB,J=new wD,iD=null,BD=t.domElement;BD.addEventListener("pointerdown",F=>{iD={x:F.clientX,y:F.clientY,t:performance.now()}}),BD.addEventListener("pointerup",F=>{if(!iD)return;let _=Math.hypot(F.clientX-iD.x,F.clientY-iD.y),N=performance.now()-iD.t;if(iD=null,_>7||N>450)return;let Z=BD.getBoundingClientRect();J.set((F.clientX-Z.left)/Z.width*2-1,-((F.clientY-Z.top)/Z.height)*2+1),DD.setFromCamera(J,s);let Q=DD.intersectObjects(u.filter(lD=>lD.visible),!1),rD=Q.find(lD=>lD.object.userData.ent!=="cute");rD||(rD=Q.find(lD=>lD.object.userData.ent==="cute")),rD?SD.select(rD.object.userData.ent,{fly:!1}):SD.select(null)});function pD(F){let _=new Se;return(l.get(F)||[]).forEach(N=>{N.visible&&(N.geometry.computeBoundingBox(),_.union(N.geometry.boundingBox))}),_}let SD={renderer:t,camera:s,controls:r,meshes:u,layers:()=>new Set(y),hasEnt:F=>l.has(F),ents:()=>[...l.keys()],entLayers:F=>{var _,N;return((N=(_=l.get(F))==null?void 0:_[0])==null?void 0:N.userData.layers)||[]},sex:()=>E,setLayer(F,_){_?y.add(F):y.delete(F),v()},setLayers(F){y.clear(),F.forEach(_=>y.add(_)),v()},setSex(F){E=F,v()},select(F,{fly:_=!0}={}){var N,Z;if(w=F,F&&!(l.get(F)||[]).some(Q=>Q.visible)){let Q=SD.entLayers(F);Q.length&&y.add(Q[0]);let rD=(Z=(N=l.get(F))==null?void 0:N[0])==null?void 0:Z.userData.sex;rD&&(E=rD),v()}else v();if(F&&_){let Q=pD(F);if(!Q.isEmpty()){let rD=Q.getCenter(new H),lD=Q.getSize(new H),TD=Math.max(lD.x,lD.y,lD.z),WD=gn.clamp(TD*2.6+.35,.55,3.2);W(rD,WD)}}D&&D(F)},selected:()=>w,center(F){let _=pD(F);return _.isEmpty()?null:_.getCenter(new H)},view(F){let _=B.target.clone(),N={front:[0,0,1],back:[0,0,-1],left:[1,0,0],right:[-1,0,0],top:[.001,1,.001]},Z=new H(...N[F]||N.front);W(_,B.dist,Z)},snapshot(F=900){try{t.render(i,s);let _=t.domElement,N=Math.min(1,F/_.width),Z=document.createElement("canvas");Z.width=Math.max(1,Math.round(_.width*N)),Z.height=Math.max(1,Math.round(_.height*N));let Q=Z.getContext("2d"),rD=Q.createLinearGradient(0,0,0,Z.height);return rD.addColorStop(0,"#f4f9fd"),rD.addColorStop(1,"#dbeafe"),Q.fillStyle=rD,Q.fillRect(0,0,Z.width,Z.height),Q.drawImage(_,0,0,Z.width,Z.height),Z.toDataURL("image/jpeg",.88)}catch{return null}},portrait(F,{w:_=512,h:N=512,isolate:Z=!0,dir:Q=[.22,.1,1],fitK:rD=2.05,distance:lD=0}={}){try{if(!l.has(F))return null;SD.select(F,{fly:!1});for(let[RD,T]of c)RD===F||RD.startsWith(F+"\0")?T.emissive.copy(T.userData.color).multiplyScalar(Z?.07:.5):Z||(T.opacity=T.userData.skin?.16:.38),T.needsUpdate=!0;if(Z)for(let RD of u)RD.visible=RD.userData.ent===F;let TD=pD(F);if(TD.isEmpty())return null;let WD=TD.getCenter(new H),ED=TD.getSize(new H),De=Math.max(ED.x,ED.y*(_/N),ED.z),q=lD||gn.clamp(De*rD+.05,.4,4.2),Pe=new H(...Q).normalize();r.target.copy(WD),s.position.copy(WD).add(Pe.multiplyScalar(q));let XD=t.getSize(new wD),JD=s.aspect,HD=t.getPixelRatio();t.setPixelRatio(1),t.setSize(_,N,!1),s.aspect=_/N,s.updateProjectionMatrix(),r.update(),t.render(i,s);let se=t.domElement.toDataURL("image/png");return t.setPixelRatio(HD),t.setSize(XD.x,XD.y,!1),s.aspect=JD,s.updateProjectionMatrix(),se}catch{return null}},reset(){w=null,v(),W(B.target,B.dist,new H(0,.04,1)),D&&D(null)},focusUp(F){SD.select(F,{fly:!0})},resize:z,invalidate:M,project(F){let _=SD.center(F);if(!_)return null;let N=_.clone().project(s),Z=BD.getBoundingClientRect();return{x:(N.x*.5+.5)*Z.width,y:(-N.y*.5+.5)*Z.height,behind:N.z>1}},dispose(){$.disconnect(),r.dispose(),u.forEach(F=>F.geometry.dispose()),c.forEach(F=>F.dispose());try{i.traverse(F=>{F.material&&F.material.map&&F.material.map.dispose()}),i.environment&&i.environment.dispose(),i.clear()}catch{}t.dispose();try{t.forceContextLoss()}catch{}t.domElement.remove(),t=null}};return z(),v(),SD}export{im as a,sm as b};
