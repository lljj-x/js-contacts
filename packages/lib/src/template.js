/**
 * Created by Liu.Jun on 2020/11/5 17:46.
 */

export default function (options) {
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
        </div>
        `;

    const searchInput = `<div class="contactsBox_search">
        <span class="c-search-icon contactsBox_searchIcon"></span>
        <input placeholder="Enter keywords" class="contactsBox_searchInput">
    </div>`;

    const boxHeight = options.showSearch ? `calc(${options.containerHeight} - 1.4668rem)` : '100%';

    return `
<div class="contactsBox ${options.showSearch ? 'hasSearchInput' : ''}" style="height: ${options.containerHeight}">
    ${options.showSearch ? searchInput : ''}
    <div class="contactsBox_content">
        <div class="contactsBox_listBox js_contactsBoxListBox" style="height: ${boxHeight}">
            ${options.groupedList.map(genGroupList).join('')}
        </div>
        <div class="js_contactsBoxKeyBar contactsBox_keyBar contactsBox_keyBar-${options.navModel}">
            ${options.groupedList.map((item, index) => `
                <span data-target="${item.anchorPoint}" class="js_keyBarItem ${index === 0 ? options.activeClassName : ''}">${item.letter}</span>
            `).join('')}
        </div>
    </div>
    <div class="js_indicator contactsBox_indicator" style="display: none;">#</div>
</div>
`;
}
