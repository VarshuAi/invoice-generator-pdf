
            window.addInvItem = function() {
                const d = document.getElementById('inv-desc');
                const c = document.getElementById('inv-cost');
                const list = document.getElementById('inv-list');
                if(!d.value || !c.value) return;
                const li = document.createElement('li');
                li.innerHTML = `<span>${d.value}</span><strong>$${c.value}</strong>`;
                list.appendChild(li);
                d.value = '';
                c.value = '';
            }
        