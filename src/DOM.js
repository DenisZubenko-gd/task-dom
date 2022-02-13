/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    let i = count;
    while (i > 0) {
        --i;
        let new_tag = document.createElement(tag);
        new_tag.innerHTML = content;
        document.body.append(new_tag);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let new_div = document.createElement('div');
    new_div.classList.add('item_1');
    document.body.append(new_div);
    for (let lev = 2; lev <= level; ++lev) {
        let parent_dev = document.getElementsByClassName('item_' + (lev - 1));
        for (let elem of parent_dev) {
            let c = 0;
            while (c < childrenCount) {
                let new_div = document.createElement('div');
                new_div.classList.add('item_' + lev);
                elem.appendChild(new_div);
                ++c;
            }
        }
    }
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    generateTree(3, 3);
    for (let elem of document.querySelectorAll('div.item_2')) {
        let section = document.createElement('section');
        section.innerHTML = elem.innerHTML;
        elem.parentNode.replaceChild(section, elem);
    }
    for (let elem of document.getElementsByTagName('section')) {
        elem.classList.add('item_2');
    }
}
