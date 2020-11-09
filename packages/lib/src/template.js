/**
 * Created by Liu.Jun on 2020/11/5 17:46.
 */

// nav items
export function navItemsHtml(options) {
    return options.groupedList.map((item, index) => `
        <span data-target="${item.anchorPoint}" class="js_keyBarItem ${index === 0 ? options.activeClassName : ''}">${item.letter}</span>
    `).join('');
}

// group items
export function groupItemsHtml(options) {
    const genGroupItem = item => `
        <div class="js_contactsBoxGroupItem contactsBox_groupItem ${options.curSelect === item.value ? options.activeClassName : ''}"
            data-value="${item.value}"
        >
            <span class="contactsBox_groupLabel">${item.label}</span>
        </div>`;

    const genGroupList = ({
        name, anchorPoint, isHot, value = []
    }) => `
        <div class="js_contactsBoxGroup contactsBox_group${isHot ? ' contactsBox_group-hot' : ''}" id="${anchorPoint}">
            <h4 class="js_contactsBoxGroupTitle contactsBox_groupTitle">${name}</h4>
            <div class="contactsBox_groupList">
                ${(value.map(genGroupItem)).join('')}
            </div>
        </div>`;

    return options.groupedList.map(genGroupList).join('');
}

export default function (options) {
    const searchInput = `<div class="contactsBox_search">
        <span class="c-search-icon contactsBox_searchIcon"></span>
        <input placeholder="${options.searchPlaceholder}" class="js_contactsBoxSearchInput contactsBox_searchInput">
    </div>`;

    const boxHeight = options.showSearch ? `calc(${options.containerHeight} - 1.4668rem)` : '100%';

    const navBarHtml = `<div class="js_contactsBoxKeyBar contactsBox_keyBar contactsBox_keyBar-${options.navModel}">
            ${navItemsHtml(options)}
        </div>`;

    return `
<div class="contactsBox ${options.showSearch ? 'hasSearchInput' : ''}" style="height: ${options.containerHeight}">
    ${options.showSearch ? searchInput : ''}
    <div class="contactsBox_content">
        <div class="contactsBox_listBox js_contactsBoxListBox" style="height: ${boxHeight}">
            ${groupItemsHtml(options)}
        </div>
        ${options.showNavBar ? navBarHtml : ''}
    </div>
    <div class="js_indicator contactsBox_indicator" style="display: none;">#</div>
</div>
`;
}
