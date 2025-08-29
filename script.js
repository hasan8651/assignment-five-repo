// copy count script
let copyCount = 0;
const copyCountSpan = document.getElementById('copyCount');

    document.querySelectorAll('.copyBtn').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = btn.closest('[data-title]');
        const number = card.getAttribute('data-number');
        alert('Number copied: ' + number);
        
    navigator.clipboard.writeText(number);
    copyCount++;
    copyCountSpan.textContent = copyCount;
      });
    });


// heart count script
let heartCount = 0;
const heartCountSpan = document.getElementById('heartCount');
    document.querySelectorAll('.heartBtn').forEach(btn => {
    btn.addEventListener('click', function() {
    heartCount++;
    heartCountSpan.textContent = heartCount;
      });
    });


// call button and call history script
const costPerCall = 20;
const balanceMain = document.getElementById('pointsBalance');
let balance = Number(balanceMain.textContent) || 0;
    function updateBalance() {
    balanceMain.textContent = balance;
    }

const callHistory = document.getElementById('callHistory');
    document.querySelectorAll('.callBtn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (balance < costPerCall) {
        alert('❌ You don’t have enough coins. You need at least 20 coins to make a call.');
        return;
    }
        else{
const card = btn.closest('[data-title]');
const title = card.getAttribute('data-title');
const number = card.getAttribute('data-number');
        alert( '📞 Calling '+ title +' ' + number + '...');
        balance -= costPerCall;
        updateBalance();
        

const li = document.createElement('li');
const now = new Date();
        li.innerHTML = `<div class="flex justify-between items-center">
                        <span class="font-semibold">${title}</span>
                        <span class="mt-4">${

        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
        .replace('am', 'AM').replace('pm', 'PM')
}</span>
</div>
<div class="text-gray-500">${number}</div>`;
        callHistory.prepend(li);
    }})
    });

// Clear call history
        document.getElementById('clearHistory').addEventListener('click', () => {
        callHistory.innerHTML = '';
    });
