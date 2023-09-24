window.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('header-placeholder');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'auth-header.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            headerPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

window.addEventListener('DOMContentLoaded', () => {
    const headerPlaceholder = document.getElementById('non-auth-header-placeholder');
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'header.html', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            headerPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
