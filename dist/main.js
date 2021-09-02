(()=>{"use strict";const e=(()=>{const e=[];return{addProject:(t,n,d,i)=>{let l=((e,t,n,d)=>{const i=[];return{editProject:(i,l,o,a)=>{e=i,t=l,n=o,d=a},getName:()=>e,getPriority:()=>t,getDate:()=>n,getDesc:()=>d,addTodo:(e,t,n,d)=>{const l=((e,t,n,d)=>({getName:()=>e,getDesc:()=>d,getDate:()=>n,getPriority:()=>t,editProject:(i,l,o,a)=>{e=i,t=l,n=o,d=a}}))(e,t,n,d);return i.push(l),l},getTodos:()=>i,ourTodos:i,ourDiv:null,deleteTodo:e=>{i.forEach(((t,n)=>{t.getName()==e&&delete i[n]}))}}})(t,n,d,i);return e.push(l),l},removeProject:t=>{e.forEach(((n,d)=>{n==t&&delete e[d]}))},FindProject:t=>{e.forEach(((n,d)=>{if(n==t)return e[d]}))},getList:()=>e,selectedProject:void 0}})(),t={getColorPriority:function(e){return"low"==e?"#2f7d99":"med"==e?"#309121":"#db3425"}};function n(e,n){if(document.getElementsByClassName("editForm").length<=0){let o=document.createElement("form");o.classList.add("editForm"),document.createElement("p").textContent="Edit";let a=document.createElement("input");a.setAttribute("type","text"),a.setAttribute("name","title");let r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("name","desc");let s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("name","dueDate");let c=document.createElement("input");c.setAttribute("type","radio"),c.setAttribute("name","priority"),c.setAttribute("id","low"),c.setAttribute("value","low");let u=document.createElement("input");u.setAttribute("type","radio"),u.setAttribute("name","priority"),u.setAttribute("id","med"),u.setAttribute("value","Med");let m=document.createElement("input");m.setAttribute("type","radio"),m.setAttribute("name","priority"),m.setAttribute("id","high"),m.setAttribute("value","High");let p=document.createElement("input");return p.setAttribute("type","submit"),p.setAttribute("value","Save"),p.classList.add("editSave"),p.addEventListener("click",(e=>{e.preventDefault();const i=new FormData(o);var l;n.editProject(i.get("title"),i.get("priority"),i.get("dueDate"),i.get("desc")),t.changeColorPri(n.ourTitleP,n.getPriority()),(l=n).ourDiv.getElementsByClassName("title")[0].textContent=l.getName(),l.ourDiv.getElementsByClassName("desc")[0].textContent=l.getDesc(),l.ourDiv.getElementsByClassName("dueDate")[0].textContent=l.getDate(),d(o)})),o.appendChild(i()),o.appendChild(l("Edit Title:","title")),o.appendChild(i()),o.appendChild(a),o.appendChild(i()),o.appendChild(l("Edit Description:","desc")),o.appendChild(i()),o.appendChild(r),o.appendChild(i()),o.appendChild(l("Edit Due-Date:","dueDate")),o.appendChild(i()),o.appendChild(s),o.appendChild(i()),o.appendChild(c),o.appendChild(l("Low","dueDate")),o.appendChild(u),o.appendChild(l("High","dueDate")),o.appendChild(m),o.appendChild(l("Medium","dueDate")),o.appendChild(i()),o.appendChild(p),e.appendChild(o),o}d(document.getElementsByClassName("editForm")[0])}function d(e){e.remove()}function i(){return document.createElement("br")}function l(e,t){const n=document.createElement("label");return n.textContent=e,n.setAttribute("name",t),n}const o=(()=>{function t(e){e.remove()}function n(e){e.classList.toggle("visibleForm")}return{removeAllChildNodes:function(e){for(;e.firstChild;)t(e.firstChild)},removeDom:t,openProject:function(t){null!=e.selectedProject&&n(e.selectedProject.ourDiv.getElementsByClassName("info")[0]),e.selectedProject=t},clearDomChildren:function(e){null!=e&&Array.from(e.children).forEach((e=>{e.remove()}))},drawTriangle:function(e,t,n){if(e.getContext){const d=e.getContext("2d");d.beginPath(),d.moveTo(20,30),d.lineTo(10,10),d.lineTo(30,10),d.closePath(),d.lineWidth=5,d.strokeStyle=t,d.stroke(),d.fillStyle=n,d.fill()}},newCanvas:function(e,t){const n=document.createElement("canvas");return n.setAttribute("width",e),n.setAttribute("height",t),n},toggleVisible:n}})(),a=document.getElementsByClassName("addTodo")[0],r=document.getElementsByClassName("todoSave")[0],s=document.getElementsByClassName("todoForm")[0],c=document.getElementsByClassName("todoList")[0];function u(d,i,l){let a=document.createElement("div");a.classList.add("todo-grid"),d.ourDiv=a;let r=document.createElement("p");r.textContent=d.getName(),r.classList.add("title"),d.ourTitleP=r;const s=t.getColorPriority(d.getPriority()),c=o.newCanvas(40,40);c.classList.add("floatLeft"),o.drawTriangle(c,s,s);let u=document.createElement("div");u.classList.add("visibleForm","info"),r.addEventListener("click",(()=>{o.toggleVisible(u)}));let m=document.createElement("p");m.textContent="Description: "+d.getDesc(),m.classList.add("desc");let p=document.createElement("p");p.textContent="Due: "+d.getDate(),p.classList.add("dueDate");let g=document.createElement("button");g.classList.add("editButton"),g.textContent="Edit",g.addEventListener("click",(()=>{n(a,d)}));let C=document.createElement("button");C.classList.add("bump-right","deleteButton"),C.textContent="Delete",C.addEventListener("click",(()=>{e.selectedProject.deleteTodo(d.getName()),o.removeDom(a)})),u.appendChild(m),u.appendChild(p),a.appendChild(c),a.appendChild(r),a.appendChild(u),a.appendChild(g),a.appendChild(C),l.appendChild(a),o.toggleVisible(i)}a.addEventListener("click",(()=>{o.toggleVisible(s)})),r.addEventListener("click",(t=>{t.preventDefault(),null!=e.selectedProject&&u(function(e){let t=new FormData(s);return e.addTodo(t.get("title"),t.get("priority"),t.get("dueDate"),t.get("desc"))}(e.selectedProject),s,c)}));const m=document.getElementsByClassName("addProject")[0],p=document.getElementsByClassName("projectList")[0],g=document.getElementsByClassName("projectForm")[0],C=document.getElementsByClassName("projectSave")[0],h=document.getElementsByClassName("todoList")[0];m.addEventListener("click",(()=>{o.toggleVisible(g)})),C.addEventListener("click",(d=>{d.preventDefault(),function(d,i,l,a){let r=document.createElement("div");d.ourDiv=r;let m=document.createElement("p");m.textContent=d.getName(),m.classList.add("title"),d.ourTitleP=m;const p=t.getColorPriority(d.getPriority()),g=o.newCanvas(40,40);g.classList.add("floatLeft"),o.drawTriangle(g,p,p);let C=document.createElement("div");C.classList.add("visibleForm","info"),m.addEventListener("click",(()=>{o.clearDomChildren(a),o.openProject(d),function(e){e.ourTodos.forEach((e=>{u(e,s,c)}))}(d),o.toggleVisible(C)}));let E=document.createElement("p");E.textContent="Description: "+d.getDesc(),E.classList.add("desc");let v=document.createElement("p");v.textContent="Date: "+d.getDate(),v.classList.add("dueDate");let D=document.createElement("button");D.textContent="Edit",D.addEventListener("click",(()=>{n(r,d)}));let b=document.createElement("button");b.textContent="Delete",b.classList.add("bump-right"),b.addEventListener("click",(()=>{e.removeProject(d),o.removeDom(r),o.removeAllChildNodes(h)})),C.appendChild(E),C.appendChild(v),r.appendChild(g),r.appendChild(m),r.appendChild(C),r.appendChild(D),r.appendChild(b),l.appendChild(r),o.toggleVisible(i)}(function(){let t=new FormData(g);return e.addProject(t.get("title"),t.get("priority"),t.get("dueDate"),t.get("desc"))}(),g,p,h)}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUt5QyxZQUFjLGdCQUFrQmhCLEVBQVFkLFVBQzdDWCxFQUFLdUMsVUFBVUMsSUFBSSxRQUVuQixJQUFJekMsRUFBVW1DLFNBQVNJLGNBQWMsS0FDckN2QyxFQUFRMEMsWUFBYyxTQUFXaEIsRUFBUWYsVUFDekNYLEVBQVF3QyxVQUFVQyxJQUFJLFdBRXRCLElBQUlvRSxFQUFVMUUsU0FBU0ksY0FBYyxVQUNyQ3NFLEVBQVFuRSxZQUFjLE9BRXRCbUUsRUFBUTFELGlCQUFpQixTQUFTLEtBQ2hDbkIsRUFBWUMsRUFBSVAsTUFLbEIsSUFBSW9GLEVBQVkzRSxTQUFTSSxjQUFjLFVBQ3ZDdUUsRUFBVXBFLFlBQWMsU0FDeEJvRSxFQUFVdEUsVUFBVUMsSUFBSSxjQUN4QnFFLEVBQVUzRCxpQkFBaUIsU0FBUyxLQUNsQ3hELEVBQWU4QixjQUFjQyxHQUM3QjBDLEVBQWFDLFVBQVVwQyxHQUV2Qm1DLEVBQWFLLG9CQUFvQixNQUduQ21DLEVBQWFoRCxZQUFZM0QsR0FDekIyRyxFQUFhaEQsWUFBWTVELEdBRXpCaUMsRUFBSTJCLFlBQVl1QyxHQUNoQmxFLEVBQUkyQixZQUFZOEMsR0FDaEJ6RSxFQUFJMkIsWUFBWWdELEdBQ2hCM0UsRUFBSTJCLFlBQVlpRCxHQUNoQjVFLEVBQUkyQixZQUFZa0QsR0FDaEJMLEVBQWE3QyxZQUFZM0IsR0FDekJtQyxFQUFhRyxjQUFjUixHQTlFM0J5RCxDQUlGLFdBQ0UsSUFBSVIsRUFBVyxJQUFJekQsU0FBUzZELEdBUTlCLE9BUHFCekgsRUFBZUUsV0FDaENtSCxFQUFTeEQsSUFBSSxTQUNid0QsRUFBU3hELElBQUksWUFDYndELEVBQVN4RCxJQUFJLFdBQ2J3RCxFQUFTeEQsSUFBSSxTQVZEaUUsR0FBb0JMLEVBQWFELEVBQWtCLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3Byb2plY3RfbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvcHJpb3JpdHktY29sb3IuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RvbS9lZGl0X2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RvbS9kb21fZnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9kb20vdG9kb19kb20uanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL2RvbS9wcm9qZWN0X2RvbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0cyA9IChuYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzYykgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xuICAgIHJldHVybiBuYW1lO1xuICB9O1xuICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJpb3JpdHk7XG4gIH07XG4gIGNvbnN0IGdldERhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGR1ZURhdGU7XG4gIH07XG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGRlc2M7XG4gIH07XG5cbiAgY29uc3Qgb3VyVG9kb3MgPSBbXTtcbiAgY29uc3Qgb3VyRGl2ID0gbnVsbDtcblxuICBjb25zdCBhZGRUb2RvID0gKG5hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG8obmFtZSwgcHJpb3JpdHksIGR1ZURhdGUsIGRlc2MpO1xuICAgIG91clRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgcmV0dXJuIG5ld1RvZG87XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9ICh0b2RvTmFtZSkgPT4ge1xuICAgIG91clRvZG9zLmZvckVhY2goKGVsZW1lbnQsIGkpID0+IHtcbiAgICAgIGlmIChlbGVtZW50LmdldE5hbWUoKSA9PSB0b2RvTmFtZSkge1xuICAgICAgICAgXG4gICAgICAgIGRlbGV0ZSBvdXJUb2Rvc1tpXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBnZXRUb2RvcyA9ICgpID0+IHtcbiAgICByZXR1cm4gb3VyVG9kb3M7XG4gIH07XG5cbiAgY29uc3QgZWRpdFByb2plY3QgPSAoX25hbWUsIF9wcmlvcml0eSwgX2R1ZURhdGUsIF9kZXNjKSA9PiB7XG4gICBcbiAgICBuYW1lID0gX25hbWU7XG4gICAgcHJpb3JpdHkgPSBfcHJpb3JpdHk7XG4gICAgZHVlRGF0ZSA9IF9kdWVEYXRlO1xuICAgIGRlc2MgPSBfZGVzYztcbiAgIFxuICB9O1xuICByZXR1cm4ge1xuICAgIGVkaXRQcm9qZWN0LFxuICAgIGdldE5hbWUsXG4gICAgZ2V0UHJpb3JpdHksXG4gICAgZ2V0RGF0ZSxcbiAgICBnZXREZXNjLFxuICAgIGFkZFRvZG8sXG4gICAgZ2V0VG9kb3MsXG4gICAgb3VyVG9kb3MsXG4gICAgb3VyRGl2LFxuICAgIGRlbGV0ZVRvZG8sXG4gIH07XG59O1xuXG5jb25zdCB0b2RvID0gKG5hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjKSA9PiB7XG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH07XG4gIGNvbnN0IGdldFByaW9yaXR5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcmlvcml0eTtcbiAgfTtcbiAgY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gZHVlRGF0ZTtcbiAgfTtcbiAgY29uc3QgZ2V0RGVzYyA9ICgpID0+IHtcbiAgICByZXR1cm4gZGVzYztcbiAgfTtcblxuICBjb25zdCBlZGl0UHJvamVjdCA9IChfbmFtZSwgX3ByaW9yaXR5LCBfZHVlRGF0ZSwgX2Rlc2MpID0+IHtcbiAgICBuYW1lID0gX25hbWU7XG4gICAgcHJpb3JpdHkgPSBfcHJpb3JpdHk7XG4gICAgZHVlRGF0ZSA9IF9kdWVEYXRlO1xuICAgIGRlc2MgPSBfZGVzYztcbiAgIFxuICB9O1xuICByZXR1cm4ge2dldE5hbWUsZ2V0RGVzYyxnZXREYXRlLGdldFByaW9yaXR5LGVkaXRQcm9qZWN0fVxufTtcblxuZXhwb3J0IHsgcHJvamVjdHMgfTtcbiIsImltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcblxuY29uc3QgcHJvamVjdE1hbmFnZXIgPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xuICBsZXQgc2VsZWN0ZWRQcm9qZWN0O1xuXG4gIGNvbnN0IGdldExpc3QgPSAoKSA9PiBwcm9qZWN0TGlzdDtcblxuICBjb25zdCBhZGRQcm9qZWN0ID0gKG5hbWUsIHByaW9yaXR5LCBkdWVEYXRlLCBkZXNjKSA9PiB7XG4gICAgbGV0IG5ld1AgPSBwcm9qZWN0cyhuYW1lLCBwcmlvcml0eSwgZHVlRGF0ZSwgZGVzYyk7XG4gICAgcHJvamVjdExpc3QucHVzaChuZXdQKTtcbiAgICByZXR1cm4gbmV3UDtcbiAgfTtcblxuICBjb25zdCBGaW5kUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT0gcHJvamVjdCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdExpc3RbaV07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgcHJvamVjdExpc3QuZm9yRWFjaCgoZWxlbWVudCwgaSkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgPT0gcHJvamVjdCkge1xuICAgICAgICBkZWxldGUgcHJvamVjdExpc3RbaV07XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiB7IGFkZFByb2plY3QsIHJlbW92ZVByb2plY3QsIEZpbmRQcm9qZWN0LCBnZXRMaXN0LCBzZWxlY3RlZFByb2plY3QgfTtcbn0pKCk7XG5leHBvcnQgeyBwcm9qZWN0TWFuYWdlciB9O1xuIiwiY29uc3QgcHJpb3JpdHlDb2xvciA9ICgoKSA9PiB7XG5cbiAgICBjb25zdCBsb3dQcmlvcml0eUNvbG9yID0gJyMyZjdkOTknO1xuICAgIGNvbnN0IG1lZFByaW9yaXR5Q29sb3IgPSAnIzMwOTEyMSc7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5Q29sb3IgPSAnI2RiMzQyNSc7XG5cbiAgICBmdW5jdGlvbiBnZXRDb2xvclByaW9yaXR5KHByaW9yaXR5KXtcbiAgICAgICAgaWYgKHByaW9yaXR5ID09ICdsb3cnKXtcbiAgICAgICAgICAgIHJldHVybiBsb3dQcmlvcml0eUNvbG9yO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkgPT0gJ21lZCcpe1xuICAgICAgICAgICAgcmV0dXJuIG1lZFByaW9yaXR5Q29sb3I7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gaGlnaFByaW9yaXR5Q29sb3I7XG4gICAgICAgICAgfTtcbiAgICAgICAgXG4gICAgfVxuICAgIHJldHVybiB7Z2V0Q29sb3JQcmlvcml0eX1cbn0pKCk7XG5cbmV4cG9ydCB7cHJpb3JpdHlDb2xvcn1cbiIsImltcG9ydCB7cHJpb3JpdHlDb2xvcn0gZnJvbSBcIi4uL3ByaW9yaXR5LWNvbG9yXCI7XG5cbmZ1bmN0aW9uIGFkZEVkaXRGb3JtKGRpdixwcm9qZWN0VG9FZGl0KXtcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWRpdEZvcm0nKS5sZW5ndGggPD0gMCkge1xuICAgIGxldCBlZGl0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBlZGl0Rm9ybS5jbGFzc0xpc3QuYWRkKCdlZGl0Rm9ybScpO1xuXG4gICAgY29uc3QgZWRpdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVkaXRUaXRsZS50ZXh0Q29udGVudCA9ICdFZGl0JztcblxuICAgIGxldCB0aXRsZUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdGl0bGVCb3guc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIHRpdGxlQm94LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3RpdGxlJyk7XG5cblxuICAgIGxldCBkZXNjQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkZXNjQm94LnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICBkZXNjQm94LnNldEF0dHJpYnV0ZSgnbmFtZScsJ2Rlc2MnKTtcblxuXG4gICAgbGV0IGRhdGVCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVCb3guc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIGRhdGVCb3guc2V0QXR0cmlidXRlKCduYW1lJywnZHVlRGF0ZScpO1xuICBcblxuICAgIGxldCByYWRpb0xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmFkaW9Mb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcbiAgICByYWRpb0xvdy5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpO1xuICAgIHJhZGlvTG93LnNldEF0dHJpYnV0ZSgnaWQnLCdsb3cnKTtcbiAgICByYWRpb0xvdy5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnbG93Jyk7XG4gICAgXG5cbiAgICBsZXQgcmFkaW9NZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHJhZGlvTWVkLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG4gICAgcmFkaW9NZWQuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcbiAgICByYWRpb01lZC5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVkJyk7XG4gICAgcmFkaW9NZWQuc2V0QXR0cmlidXRlKCd2YWx1ZScsJ01lZCcpO1xuXG4gICAgbGV0IHJhZGlvSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmFkaW9IaWdoLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG4gICAgcmFkaW9IaWdoLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5Jyk7XG4gICAgcmFkaW9IaWdoLnNldEF0dHJpYnV0ZSgnaWQnLCdoaWdoJyk7XG4gICAgcmFkaW9IaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdIaWdoJyk7XG5cbiAgICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jyk7XG4gICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdTYXZlJyk7XG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2VkaXRTYXZlJyk7XG4gICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gZ2V0Rm9ybURhdGEoZWRpdEZvcm0pO1xuICAgICAgICBwcm9qZWN0VG9FZGl0LmVkaXRQcm9qZWN0KCBmb3JtRGF0YS5nZXQoXCJ0aXRsZVwiKSxcbiAgICAgICAgZm9ybURhdGEuZ2V0KFwicHJpb3JpdHlcIiksXG4gICAgICAgIGZvcm1EYXRhLmdldChcImR1ZURhdGVcIiksXG4gICAgICAgIGZvcm1EYXRhLmdldChcImRlc2NcIikpO1xuICAgICAgICBwcmlvcml0eUNvbG9yLmNoYW5nZUNvbG9yUHJpKHByb2plY3RUb0VkaXQub3VyVGl0bGVQLHByb2plY3RUb0VkaXQuZ2V0UHJpb3JpdHkoKSk7XG4gICAgICAgIHVwZGF0ZURvbShwcm9qZWN0VG9FZGl0KTtcbiAgICAgICAgcmVtb3ZlRm9ybShlZGl0Rm9ybSk7XG4gICAgfSk7XG5cbiAgICBcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChjcmVhdGVCUigpKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnRWRpdCBUaXRsZTonLCAndGl0bGUnKSk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlQlIoKSk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQodGl0bGVCb3gpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUJSKCkpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdFZGl0IERlc2NyaXB0aW9uOicsICdkZXNjJykpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUJSKCkpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRlc2NCb3gpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUJSKCkpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdFZGl0IER1ZS1EYXRlOicsICdkdWVEYXRlJykpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUJSKCkpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGRhdGVCb3gpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUJSKCkpO1xuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKHJhZGlvTG93KTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnTG93JywgJ2R1ZURhdGUnKSk7ICBcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChyYWRpb01lZCk7IFxuICAgIGVkaXRGb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUxhYmVsKCdIaWdoJywgJ2R1ZURhdGUnKSk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQocmFkaW9IaWdoKTtcbiAgICBlZGl0Rm9ybS5hcHBlbmRDaGlsZChjcmVhdGVMYWJlbCgnTWVkaXVtJywgJ2R1ZURhdGUnKSk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlQlIoKSk7XG4gICAgZWRpdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEZvcm0pO1xuICAgIHJldHVybiBlZGl0Rm9ybTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmVGb3JtKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXRGb3JtJylbMF0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRm9ybShmb3JtKXtcbiAgICBmb3JtLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRGb3JtRGF0YShmb3JtKXtcbiAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgcmV0dXJuIGZvcm1kYXRhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCUigpe1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbCh0ZXh0LCBlbGUpe1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCduYW1lJywgZWxlKTtcbiAgICByZXR1cm4gbGFiZWw7XG4gICAgXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURvbShwcm9qZWN0KXtcbiAgICBwcm9qZWN0Lm91ckRpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0aXRsZScpWzBdLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgcHJvamVjdC5vdXJEaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGVzYycpWzBdLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREZXNjKCk7XG4gICAgcHJvamVjdC5vdXJEaXYuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHVlRGF0ZScpWzBdLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXREYXRlKCk7XG4gIH1cblxuZXhwb3J0IHthZGRFZGl0Rm9ybSwgZ2V0Rm9ybURhdGF9IiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5cbmNvbnN0IGRvbUZ1bmN0aW9ucyA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KVxue1xuICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICByZW1vdmVEb20ocGFyZW50LmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZURvbShub2RlKXtcbiAgbm9kZS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gb3BlblByb2plY3QocHJvamVjdCkge1xuICBpZiAocHJvamVjdE1hbmFnZXIuc2VsZWN0ZWRQcm9qZWN0ICE9IG51bGwpIHtcbiAgICBjb25zdCBpbmZvID0gcHJvamVjdE1hbmFnZXIuc2VsZWN0ZWRQcm9qZWN0Lm91ckRpdi5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbmZvJylbMF07XG4gICAgdG9nZ2xlVmlzaWJsZShpbmZvKTtcbiAgfVxuXG4gIHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3Q7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRG9tQ2hpbGRyZW4oZWxlbWVudCkge1xuICBpZiAoZWxlbWVudCAhPSBudWxsKSB7XG4gICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgIGFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9nZ2xlVmlzaWJsZShlbGVtZW50KSB7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcInZpc2libGVGb3JtXCIpO1xufVxuXG5mdW5jdGlvbiBkcmF3VHJpYW5nbGUoY2FudmFzLCBjb2xvck91dGxpbmUsIGNvbG9yRmlsbCl7XG4gIGlmIChjYW52YXMuZ2V0Q29udGV4dClcbiAge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnRleHQubW92ZVRvKDIwLCAzMCk7XG4gICAgY29udGV4dC5saW5lVG8oMTAsMTApO1xuICAgIGNvbnRleHQubGluZVRvKDMwLDEwKTtcbiAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuXG4gICAgY29udGV4dC5saW5lV2lkdGggPSA1O1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvck91dGxpbmU7XG4gICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gY29sb3JGaWxsO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG5ld0NhbnZhcyh3LGgpe1xuICBjb25zdCBjYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW4uc2V0QXR0cmlidXRlKCd3aWR0aCcsIHcpO1xuICAgIGNhbi5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGgpO1xuICAgIHJldHVybiBjYW47XG59XG5cbiAgcmV0dXJuIHtyZW1vdmVBbGxDaGlsZE5vZGVzLCByZW1vdmVEb20sIG9wZW5Qcm9qZWN0LCBjbGVhckRvbUNoaWxkcmVuLCBkcmF3VHJpYW5nbGUsbmV3Q2FudmFzLHRvZ2dsZVZpc2libGV9XG5cbn0pKCk7XG5cbmV4cG9ydCB7ZG9tRnVuY3Rpb25zfVxuXG4iLCJpbXBvcnQgeyBwcm9qZWN0TWFuYWdlciB9IGZyb20gXCIuLi9wcm9qZWN0X21hbmFnZXJcIjtcbmltcG9ydCB7YWRkRWRpdEZvcm19IGZyb20gXCIuL2VkaXRfZm9ybVwiO1xuaW1wb3J0IHtwcmlvcml0eUNvbG9yfSBmcm9tIFwiLi4vcHJpb3JpdHktY29sb3JcIjtcbmltcG9ydCB7ZG9tRnVuY3Rpb25zfSBmcm9tIFwiLi9kb21fZnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5ld1RvZG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWRkVG9kb1wiKVswXTtcbmNvbnN0IHRvZG9TYXZlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9TYXZlXCIpWzBdO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb0Zvcm1cIilbMF07XG5jb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRvZG9MaXN0XCIpWzBdO1xuXG5uZXdUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRvbUZ1bmN0aW9ucy50b2dnbGVWaXNpYmxlKHRvZG9Gb3JtKTtcbiAgfSk7XG5cbiAgdG9kb1NhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHByb2plY3RNYW5hZ2VyLnNlbGVjdGVkUHJvamVjdCAhPSBudWxsKSB7XG4gICAgICBhZGRUb2RvRG9tKGNyZWF0ZU5ld1RvZG8ocHJvamVjdE1hbmFnZXIuc2VsZWN0ZWRQcm9qZWN0KSwgdG9kb0Zvcm0sIHRvZG9Db250YWluZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gY3JlYXRlTmV3VG9kbyhzZWxlY3RlZFByb2plY3QpIHtcbiAgICBsZXQgZm9ybWRhdGEgPSBuZXcgRm9ybURhdGEodG9kb0Zvcm0pO1xuICAgIGNvbnN0IG5ld1RvZG8gPSBzZWxlY3RlZFByb2plY3QuYWRkVG9kbyhcbiAgICAgIGZvcm1kYXRhLmdldChcInRpdGxlXCIpLFxuICAgICAgZm9ybWRhdGEuZ2V0KFwicHJpb3JpdHlcIiksXG4gICAgICBmb3JtZGF0YS5nZXQoXCJkdWVEYXRlXCIpLFxuICAgICAgZm9ybWRhdGEuZ2V0KFwiZGVzY1wiKVxuICAgICk7XG4gICAgICByZXR1cm4gbmV3VG9kbztcbn1cblxuZnVuY3Rpb24gYWRkVG9kb0RvbSh0b2RvLCBmb3JtLCBkb21Db250YWluZXIpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndG9kby1ncmlkJyk7XG4gICAgdG9kby5vdXJEaXYgPSBkaXY7XG4gIFxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gdG9kby5nZXROYW1lKCk7XG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcbiAgICB0b2RvLm91clRpdGxlUCA9IHRpdGxlO1xuICBcbiAgICBcbiAgICBjb25zdCBwcmlDb2xvciA9IHByaW9yaXR5Q29sb3IuZ2V0Q29sb3JQcmlvcml0eSh0b2RvLmdldFByaW9yaXR5KCkpO1xuICBcbiAgICBjb25zdCBjYW4gPSBkb21GdW5jdGlvbnMubmV3Q2FudmFzKDQwLDQwKTtcbiAgICBjYW4uY2xhc3NMaXN0LmFkZCgnZmxvYXRMZWZ0Jyk7XG4gICAgZG9tRnVuY3Rpb25zLmRyYXdUcmlhbmdsZShjYW4scHJpQ29sb3IscHJpQ29sb3IpO1xuICBcbiAgXG4gIFxuICAgIGxldCBkZXRhaWxlZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbGVkSW5mby5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZUZvcm1cIiwgXCJpbmZvXCIpO1xuICAgXG4gIFxuICBcbiAgICB0aXRsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZG9tRnVuY3Rpb25zLnRvZ2dsZVZpc2libGUoZGV0YWlsZWRJbmZvKTtcbiAgICB9KTtcbiAgXG4gICAgbGV0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uOiAnICsgdG9kby5nZXREZXNjKCk7XG4gICAgZGVzYy5jbGFzc0xpc3QuYWRkKCdkZXNjJyk7XG4gIFxuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9ICdEdWU6ICcgKyB0b2RvLmdldERhdGUoKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4uY2xhc3NMaXN0LmFkZCgnZWRpdEJ1dHRvbicpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICBhZGRFZGl0Rm9ybShkaXYsdG9kbyk7ICBcbiAgICB9KVxuICBcbiAgICBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnVtcC1yaWdodCcsICdkZWxldGVCdXR0b24nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdE1hbmFnZXIuc2VsZWN0ZWRQcm9qZWN0LmRlbGV0ZVRvZG8odG9kby5nZXROYW1lKCkpO1xuICAgICAgZG9tRnVuY3Rpb25zLnJlbW92ZURvbShkaXYpO1xuICAgIH0pO1xuICBcbiAgICBkZXRhaWxlZEluZm8uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgZGV0YWlsZWRJbmZvLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2FuKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpOyBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGV0YWlsZWRJbmZvKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgZGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgZG9tQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZG9tRnVuY3Rpb25zLnRvZ2dsZVZpc2libGUoZm9ybSk7XG4gIH1cblxuICBmdW5jdGlvbiBvcGVuUHJvamVjdFRvZG9zKHByb2plY3Qpe1xuICAgIHByb2plY3Qub3VyVG9kb3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYWRkVG9kb0RvbShlbGVtZW50LCB0b2RvRm9ybSwgdG9kb0NvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnQge29wZW5Qcm9qZWN0VG9kb3N9IiwiaW1wb3J0IHsgcHJvamVjdE1hbmFnZXIgfSBmcm9tIFwiLi4vcHJvamVjdF9tYW5hZ2VyXCI7XG5pbXBvcnQge2FkZEVkaXRGb3JtfSBmcm9tIFwiLi9lZGl0X2Zvcm1cIjtcbmltcG9ydCB7cHJpb3JpdHlDb2xvcn0gZnJvbSBcIi4uL3ByaW9yaXR5LWNvbG9yXCI7XG5pbXBvcnQge2RvbUZ1bmN0aW9uc30gZnJvbSBcIi4vZG9tX2Z1bmN0aW9uc1wiO1xuaW1wb3J0IHtvcGVuUHJvamVjdFRvZG9zfSBmcm9tIFwiLi90b2RvX2RvbVwiO1xuXG5jb25zdCBuZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFkZFByb2plY3RcIilbMF07XG5jb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RMaXN0XCIpWzBdO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicHJvamVjdEZvcm1cIilbMF07XG5jb25zdCBwcm9qZWN0U2F2ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0U2F2ZVwiKVswXTtcbmNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidG9kb0xpc3RcIilbMF07XG5cbm5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZG9tRnVuY3Rpb25zLnRvZ2dsZVZpc2libGUocHJvamVjdEZvcm0pO1xuICB9KTtcbiAgXG4gIFxuICBwcm9qZWN0U2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBhZGRQcm9qZWN0RG9tKGNyZWF0ZU5ld1Byb2plY3QoKSwgcHJvamVjdEZvcm0sIHByb2plY3RDb250YWluZXIsIHRvZG9Db250YWluZXIpO1xuICB9KTtcbiAgXG4gIFxuICBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0KCkge1xuICAgIGxldCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YShwcm9qZWN0Rm9ybSk7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RNYW5hZ2VyLmFkZFByb2plY3QoXG4gICAgICBmb3JtZGF0YS5nZXQoXCJ0aXRsZVwiKSxcbiAgICAgIGZvcm1kYXRhLmdldChcInByaW9yaXR5XCIpLFxuICAgICAgZm9ybWRhdGEuZ2V0KFwiZHVlRGF0ZVwiKSxcbiAgICAgIGZvcm1kYXRhLmdldChcImRlc2NcIilcbiAgICApO1xuICBcbiAgcmV0dXJuIG5ld1Byb2plY3Q7ICBcbiAgfVxuICBcbiAgZnVuY3Rpb24gYWRkUHJvamVjdERvbShwcm9qZWN0LCBmb3JtLCBkb21Db250YWluZXIsIGNvbnRhaW5lclRvQ2xlYXIpIHtcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0Lm91ckRpdiA9IGRpdjtcbiAgXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHByb2plY3Qub3VyVGl0bGVQID0gdGl0bGU7XG4gICAgXG4gICAgY29uc3QgcHJpQ29sb3IgPSBwcmlvcml0eUNvbG9yLmdldENvbG9yUHJpb3JpdHkocHJvamVjdC5nZXRQcmlvcml0eSgpKTtcblxuICAgIGNvbnN0IGNhbiA9IGRvbUZ1bmN0aW9ucy5uZXdDYW52YXMoNDAsNDApO1xuICAgIGNhbi5jbGFzc0xpc3QuYWRkKCdmbG9hdExlZnQnKTtcbiAgICBkb21GdW5jdGlvbnMuZHJhd1RyaWFuZ2xlKGNhbixwcmlDb2xvcixwcmlDb2xvcik7XG4gIFxuICAgIGxldCBkZXRhaWxlZEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRldGFpbGVkSW5mby5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZUZvcm1cIiwgXCJpbmZvXCIpO1xuICAgXG4gIFxuICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkb21GdW5jdGlvbnMuY2xlYXJEb21DaGlsZHJlbihjb250YWluZXJUb0NsZWFyKTtcbiAgICAgIGRvbUZ1bmN0aW9ucy5vcGVuUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIG9wZW5Qcm9qZWN0VG9kb3MocHJvamVjdCk7XG4gICAgICBkb21GdW5jdGlvbnMudG9nZ2xlVmlzaWJsZShkZXRhaWxlZEluZm8pO1xuICAgIH0pO1xuICBcbiAgICBsZXQgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2MudGV4dENvbnRlbnQgPSAnRGVzY3JpcHRpb246ICcgKyBwcm9qZWN0LmdldERlc2MoKTtcbiAgICBkZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc2MnKTtcbiAgXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gJ0RhdGU6ICcgKyBwcm9qZWN0LmdldERhdGUoKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgXG4gICAgbGV0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT57XG4gICAgICBhZGRFZGl0Rm9ybShkaXYscHJvamVjdCk7ICAgXG4gICAgIH0pO1xuICAgICAgXG4gICAgICBcbiAgXG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZCgnYnVtcC1yaWdodCcpO1xuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgcHJvamVjdE1hbmFnZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0KTtcbiAgICAgIGRvbUZ1bmN0aW9ucy5yZW1vdmVEb20oZGl2KTtcbiAgICBcbiAgICAgIGRvbUZ1bmN0aW9ucy5yZW1vdmVBbGxDaGlsZE5vZGVzKHRvZG9Db250YWluZXIpO1xuICAgIH0pO1xuICBcbiAgICBkZXRhaWxlZEluZm8uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgZGV0YWlsZWRJbmZvLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoY2FuKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChkZXRhaWxlZEluZm8pO1xuICAgIGRpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICBkb21Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkb21GdW5jdGlvbnMudG9nZ2xlVmlzaWJsZShmb3JtKTtcbiAgfVxuICAiXSwibmFtZXMiOlsicHJvamVjdE1hbmFnZXIiLCJwcm9qZWN0TGlzdCIsImFkZFByb2plY3QiLCJuYW1lIiwicHJpb3JpdHkiLCJkdWVEYXRlIiwiZGVzYyIsIm5ld1AiLCJvdXJUb2RvcyIsImVkaXRQcm9qZWN0IiwiX25hbWUiLCJfcHJpb3JpdHkiLCJfZHVlRGF0ZSIsIl9kZXNjIiwiZ2V0TmFtZSIsImdldFByaW9yaXR5IiwiZ2V0RGF0ZSIsImdldERlc2MiLCJhZGRUb2RvIiwibmV3VG9kbyIsInRvZG8iLCJwdXNoIiwiZ2V0VG9kb3MiLCJvdXJEaXYiLCJkZWxldGVUb2RvIiwidG9kb05hbWUiLCJmb3JFYWNoIiwiZWxlbWVudCIsImkiLCJwcm9qZWN0cyIsInJlbW92ZVByb2plY3QiLCJwcm9qZWN0IiwiRmluZFByb2plY3QiLCJnZXRMaXN0Iiwic2VsZWN0ZWRQcm9qZWN0IiwicHJpb3JpdHlDb2xvciIsImdldENvbG9yUHJpb3JpdHkiLCJhZGRFZGl0Rm9ybSIsImRpdiIsInByb2plY3RUb0VkaXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJsZW5ndGgiLCJlZGl0Rm9ybSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsInRpdGxlQm94Iiwic2V0QXR0cmlidXRlIiwiZGVzY0JveCIsImRhdGVCb3giLCJyYWRpb0xvdyIsInJhZGlvTWVkIiwicmFkaW9IaWdoIiwic3VibWl0QnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJnZXQiLCJjaGFuZ2VDb2xvclByaSIsIm91clRpdGxlUCIsInJlbW92ZUZvcm0iLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUJSIiwiY3JlYXRlTGFiZWwiLCJmb3JtIiwicmVtb3ZlIiwidGV4dCIsImVsZSIsImxhYmVsIiwiZG9tRnVuY3Rpb25zIiwicmVtb3ZlRG9tIiwibm9kZSIsInRvZ2dsZVZpc2libGUiLCJ0b2dnbGUiLCJyZW1vdmVBbGxDaGlsZE5vZGVzIiwicGFyZW50IiwiZmlyc3RDaGlsZCIsIm9wZW5Qcm9qZWN0IiwiY2xlYXJEb21DaGlsZHJlbiIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwiZHJhd1RyaWFuZ2xlIiwiY2FudmFzIiwiY29sb3JPdXRsaW5lIiwiY29sb3JGaWxsIiwiZ2V0Q29udGV4dCIsImNvbnRleHQiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJjbG9zZVBhdGgiLCJsaW5lV2lkdGgiLCJzdHJva2VTdHlsZSIsInN0cm9rZSIsImZpbGxTdHlsZSIsImZpbGwiLCJuZXdDYW52YXMiLCJ3IiwiaCIsImNhbiIsIm5ld1RvZG9CdG4iLCJ0b2RvU2F2ZUJ0biIsInRvZG9Gb3JtIiwidG9kb0NvbnRhaW5lciIsImFkZFRvZG9Eb20iLCJkb21Db250YWluZXIiLCJ0aXRsZSIsInByaUNvbG9yIiwiZGV0YWlsZWRJbmZvIiwiZWRpdEJ0biIsImRlbGV0ZUJ0biIsImV2ZW50IiwiZm9ybWRhdGEiLCJjcmVhdGVOZXdUb2RvIiwibmV3UHJvamVjdEJ0biIsInByb2plY3RDb250YWluZXIiLCJwcm9qZWN0Rm9ybSIsInByb2plY3RTYXZlQnRuIiwiY29udGFpbmVyVG9DbGVhciIsIm9wZW5Qcm9qZWN0VG9kb3MiLCJhZGRQcm9qZWN0RG9tIiwiY3JlYXRlTmV3UHJvamVjdCJdLCJzb3VyY2VSb290IjoiIn0=