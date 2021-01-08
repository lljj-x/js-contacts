/**
 * Created by Liu.Jun on 2020/11/5 11:48.
 */

import Contacts from 'js-contacts';

import './lib/layer_mobile/layer';
import './lib/layer_mobile/need/layer.css';
import './style.css';

const layer = window.layer;

// default
const instance = new Contacts({
    target: '.js_targetSelectDefault', // 需要放置的位置
    data: {
        selectDom: '.js_countrySelect' // 可以传入select dom节点
    },
    onSelect(value) {
        console.log(`当前选中：[${value}]`);
    }
});
console.log(instance);

// select
const targetSelect = document.querySelector('.js_selectData');
targetSelect.addEventListener('click', () => {
    let contactsInstance;

    layer.open({
        type: 1,
        content: '<div class="js_targetSelect"></div>',
        anim: 'up',
        style: 'position:fixed; bottom:0; left:0; width: 100%; padding:0 0 10px; border:none;',
        beforeEnd() {
            contactsInstance.destroy();
        }
    });

    contactsInstance = new Contacts({
        target: '.js_targetSelect', // 需要放置的目标位置
        containerHeight: '80vh', // 默认 60vh
        navModel: 'scroll', // 浏览器滚动条

        hotLetter: '#',
        hotName: '推荐',
        showSearch: true, // 是否显示搜索
        curSelect: 'IT',
        indicatorDuration: 2000, // 指示器显示时间
        data: {
            selectDom: '.js_countrySelect' // 可以传入select dom节点
        },
        onSelect(value) {
            console.log(`当前选中：[${value}]`);
        },
        onScrollToAnchorPoint(target) {
            console.log(target);
        }
    });

}, false);

// json
document.querySelector('.js_jsonData').addEventListener('click', () => {
    let contactsInstance;
    layer.open({
        type: 1,
        content: '<div class="js_targetSelect"></div>',
        anim: 'up',
        style: 'position:fixed; bottom:0; left:0; width: 100%; padding:0 0 10px; border:none;',
        beforeEnd() {
            contactsInstance.destroy();
        }
    });

    // eslint-disable-next-line max-len
    const allList = [{ value: 'AX', label: 'Aland Island', groupKey: 'Aland Island' }, { value: 'AL', label: 'Albania', groupKey: 'Albania' }, { value: 'DZ', label: 'Algeria', groupKey: 'Algeria' }, { value: 'AS', label: 'American Samoa', groupKey: 'American Samoa' }, { value: 'AD', label: 'Andorra', groupKey: 'Andorra' }, { value: 'AO', label: 'Angola', groupKey: 'Angola' }, { value: 'AI', label: 'Anguilla', groupKey: 'Anguilla' }, { value: 'AG', label: 'Antigua And Barbuda', groupKey: 'Antigua And Barbuda' }, { value: 'AR', label: 'Argentina', groupKey: 'Argentina' }, { value: 'AM', label: 'Armenia', groupKey: 'Armenia' }, { value: 'AW', label: 'Aruba', groupKey: 'Aruba' }, { value: 'XD', label: 'Ascension', groupKey: 'Ascension' }, { value: 'AU', label: 'Australia', groupKey: 'Australia' }, { value: 'AT', label: 'Austria', groupKey: 'Austria' }, { value: 'AZ', label: 'Azerbaijan', groupKey: 'Azerbaijan' }, { value: 'BS', label: 'Bahamas', groupKey: 'Bahamas' }, { value: 'BH', label: 'Bahrain', groupKey: 'Bahrain' }, { value: 'XJ', label: 'Balearic Islands', groupKey: 'Balearic Islands' }, { value: 'BD', label: 'Bangladesh', groupKey: 'Bangladesh' }, { value: 'BB', label: 'Barbados', groupKey: 'Barbados' }, { value: 'BY', label: 'Belarus', groupKey: 'Belarus' }, { value: 'BE', label: 'Belgium', groupKey: 'Belgium' }, { value: 'BZ', label: 'Belize', groupKey: 'Belize' }, { value: 'BJ', label: 'Benin', groupKey: 'Benin' }, { value: 'BM', label: 'Bermuda', groupKey: 'Bermuda' }, { value: 'BT', label: 'Bhutan', groupKey: 'Bhutan' }, { value: 'BO', label: 'Bolivia', groupKey: 'Bolivia' }, { value: 'XB', label: 'Bonaire', groupKey: 'Bonaire' }, { value: 'BA', label: 'Bosnia And Herzegovina', groupKey: 'Bosnia And Herzegovina' }, { value: 'BW', label: 'Botswana', groupKey: 'Botswana' }, { value: 'BV', label: 'Bouvet Island', groupKey: 'Bouvet Island' }, { value: 'BR', label: 'Brazil', groupKey: 'xxx' }, { value: 'IO', label: 'British Indian Ocean Territory', groupKey: 'British Indian Ocean Territory' }, { value: 'BN', label: 'Brunei', groupKey: 'Brunei' }, { value: 'BG', label: 'Bulgaria', groupKey: 'Bulgaria' }, { value: 'BF', label: 'Burkina', groupKey: 'Burkina' }, { value: 'BI', label: 'Burundi', groupKey: 'Burundi' }, { value: 'KH', label: 'Cambodia', groupKey: 'Cambodia' }, { value: 'CM', label: 'Cameroon', groupKey: 'Cameroon' }, { value: 'CA', label: 'Canada', groupKey: 'Canada' }, { value: 'IC', label: 'Canary Islands', groupKey: 'Canary Islands' }, { value: 'CV', label: 'Cape Verde', groupKey: 'Cape Verde' }, { value: 'XK', label: 'Caroline Islands', groupKey: 'Caroline Islands' }, { value: 'KY', label: 'Cayman Islands', groupKey: 'Cayman Islands' }, { value: 'CF', label: 'Central African Republic', groupKey: 'Central African Republic' }, { value: 'TD', label: 'Chad', groupKey: 'Chad' }, { value: 'CL', label: 'Chile', groupKey: 'Chile' }, { value: 'CN', label: 'China mainland', groupKey: 'China mainland' }, { value: 'CX', label: 'Christmas Island', groupKey: 'Christmas Island' }, { value: 'CC', label: 'Cocos Keeling Islands', groupKey: 'Cocos Keeling Islands' }, { value: 'CO', label: 'Colombia', groupKey: 'Colombia' }, { value: 'KM', label: 'Comoros', groupKey: 'Comoros' }, { value: 'CK', label: 'Cook Islands', groupKey: 'Cook Islands' }, { value: 'CR', label: 'Costa Rica', groupKey: 'Costa Rica' }, { value: 'HR', label: 'Croatia', groupKey: 'Croatia' }, { value: 'XC', label: 'Curacao', groupKey: 'Curacao' }, { value: 'CY', label: 'Cyprus', groupKey: 'Cyprus' }, { value: 'CZ', label: 'Czech Republic', groupKey: 'Czech Republic' }, { value: 'CD', label: 'Democratic Republic of the Congo', groupKey: 'Democratic Republic of the Congo' }, { value: 'DK', label: 'Denmark', groupKey: 'Denmark' }, { value: 'DJ', label: 'Djibouti', groupKey: 'Djibouti' }, { value: 'DM', label: 'Dominica', groupKey: 'Dominica' }, { value: 'DO', label: 'Dominican Republic', groupKey: 'Dominican Republic' }, { value: 'EC', label: 'Ecuador', groupKey: 'Ecuador' }, { value: 'EG', label: 'Egypt', groupKey: 'Egypt' }, { value: 'SV', label: 'El Salvador', groupKey: 'El Salvador' }, { value: 'GQ', label: 'Equatorial Guinea', groupKey: 'Equatorial Guinea' }, { value: 'ER', label: 'Eritrea', groupKey: 'Eritrea' }, { value: 'EE', label: 'Estonia', groupKey: 'Estonia' }, { value: 'ET', label: 'Ethiopia', groupKey: 'Ethiopia' }, { value: 'FK', label: 'Falkland Islands', groupKey: 'Falkland Islands' }, { value: 'FO', label: 'Faroe Islands', groupKey: 'Faroe Islands' }, { value: 'FJ', label: 'Fiji', groupKey: 'Fiji' }, { value: 'FI', label: 'Finland', groupKey: 'Finland' }, { value: 'FR', label: 'France', groupKey: 'France' }, { value: 'FX', label: 'France, Metropolitan', groupKey: 'France, Metropolitan' }, { value: 'GF', label: 'French Guiana', groupKey: 'French Guiana' }, { value: 'TF', label: 'French Southern Territories', groupKey: 'French Southern Territories' }, { value: 'PF', label: 'French polynesia', groupKey: 'French polynesia' }, { value: 'GA', label: 'Gabon', groupKey: 'Gabon' }, { value: 'GM', label: 'Gambia', groupKey: 'Gambia' }, { value: 'GE', label: 'Georgia', groupKey: 'Georgia' }, { value: 'DE', label: 'Germany', groupKey: 'Germany' }, { value: 'GH', label: 'Ghana', groupKey: 'Ghana' }, { value: 'GI', label: 'Gibraltar', groupKey: 'Gibraltar' }, { value: 'GR', label: 'Greece', groupKey: 'Greece' }, { value: 'GL', label: 'Greenland', groupKey: 'Greenland' }, { value: 'GD', label: 'Grenada', groupKey: 'Grenada' }, { value: 'GP', label: 'Guadeloupe', groupKey: 'Guadeloupe' }, { value: 'GU', label: 'Guam', groupKey: 'Guam' }, { value: 'GT', label: 'Guatemala', groupKey: 'Guatemala' }, { value: 'GG', label: 'Guernsey', groupKey: 'Guernsey' }, { value: 'GN', label: 'Guinea', groupKey: 'Guinea' }, { value: 'GW', label: 'Guinea-Bissau', groupKey: 'Guinea-Bissau' }, { value: 'GY', label: 'Guyana', groupKey: 'Guyana' }, { value: 'HT', label: 'Haiti', groupKey: 'Haiti' }, { value: 'HM', label: 'Heard Island and McDonald Islands', groupKey: 'Heard Island and McDonald Islands' }, { value: 'HN', label: 'Honduras', groupKey: 'Honduras' }, { value: 'HK', label: 'Hong kong SAR,China', groupKey: 'Hong kong SAR,China' }, { value: 'HU', label: 'Hungary', groupKey: 'Hungary' }, { value: 'IS', label: 'Iceland', groupKey: 'Iceland' }, { value: 'IN', label: 'India', groupKey: 'India' }, { value: 'ID', label: 'Indonesia', groupKey: 'Indonesia' }, { value: 'IR', label: 'Iran', groupKey: 'Iran' }, { value: 'IQ', label: 'Iraq', groupKey: 'Iraq' }, { value: 'IE', label: 'Ireland', groupKey: 'Ireland' }, { value: 'IM', label: 'Isle of Man', groupKey: 'Isle of Man' }, { value: 'IL', label: 'Israel', groupKey: 'Israel' }, { value: 'IT', label: 'Italy', groupKey: 'Italy' }, { value: 'CI', label: 'Ivory Coast', groupKey: 'Ivory Coast' }, { value: 'JM', label: 'Jamaica', groupKey: 'Jamaica' }, { value: 'JP', label: 'Japan', groupKey: 'Japan' }, { value: 'JE', label: 'Jersey', groupKey: 'Jersey' }, { value: 'JO', label: 'Jordan', groupKey: 'Jordan' }, { value: 'KZ', label: 'Kazakhstan', groupKey: 'Kazakhstan' }, { value: 'KE', label: 'Kenya', groupKey: 'Kenya' }, { value: 'KI', label: 'Kiribati', groupKey: 'Kiribati' }, { value: 'KV', label: 'Kosovo', groupKey: 'Kosovo' }, { value: 'KW', label: 'Kuwait', groupKey: 'Kuwait' }, { value: 'KG', label: 'Kyrgyzstan', groupKey: 'Kyrgyzstan' }, { value: 'LA', label: 'Laos', groupKey: 'Laos' }, { value: 'LV', label: 'Latvia', groupKey: 'Latvia' }, { value: 'LB', label: 'Lebanon', groupKey: 'Lebanon' }, { value: 'LS', label: 'Lesotho', groupKey: 'Lesotho' }, { value: 'LR', label: 'Liberia', groupKey: 'Liberia' }, { value: 'LY', label: 'Libya', groupKey: 'Libya' }, { value: 'LI', label: 'Liechtenstein', groupKey: 'Liechtenstein' }, { value: 'LT', label: 'Lithuania', groupKey: 'Lithuania' }, { value: 'LU', label: 'Luxembourg', groupKey: 'Luxembourg' }, { value: 'MO', label: 'Macao SAR,China', groupKey: 'Macao SAR,China' }, { value: 'MG', label: 'Madagascar', groupKey: 'Madagascar' }, { value: 'MW', label: 'Malawi', groupKey: 'Malawi' }, { value: 'MY', label: 'Malaysia', groupKey: 'Malaysia' }, { value: 'MV', label: 'Maldives', groupKey: 'Maldives' }, { value: 'ML', label: 'Mali', groupKey: 'Mali' }, { value: 'MT', label: 'Malta', groupKey: 'Malta' }, { value: 'MH', label: 'Marshall islands', groupKey: 'Marshall islands' }, { value: 'MQ', label: 'Martinique', groupKey: 'Martinique' }, { value: 'MR', label: 'Mauritania', groupKey: 'Mauritania' }, { value: 'MU', label: 'Mauritius', groupKey: 'Mauritius' }, { value: 'YT', label: 'Mayotte', groupKey: 'Mayotte' }, { value: 'MX', label: 'Mexico', groupKey: 'Mexico' }, { value: 'FM', label: 'Micronesia', groupKey: 'Micronesia' }, { value: 'MD', label: 'Moldova', groupKey: 'Moldova' }, { value: 'MC', label: 'Monaco', groupKey: 'Monaco' }, { value: 'MN', label: 'Mongolia', groupKey: 'Mongolia' }, { value: 'ME', label: 'Montenegro', groupKey: 'Montenegro' }, { value: 'MS', label: 'Montserrat', groupKey: 'Montserrat' }, { value: 'MA', label: 'Morocco', groupKey: 'Morocco' }, { value: 'MZ', label: 'Mozambique', groupKey: 'Mozambique' }, { value: 'MM', label: 'Myanmar', groupKey: 'Myanmar' }, { value: 'NA', label: 'Namibia', groupKey: 'Namibia' }, { value: 'NR', label: 'Nauru', groupKey: 'Nauru' }, { value: 'NP', label: 'Nepal', groupKey: 'Nepal' }, { value: 'NL', label: 'Netherlands', groupKey: 'Netherlands' }, { value: 'AN', label: 'Netherlands Antilles', groupKey: 'Netherlands Antilles' }, { value: 'XN', label: 'Nevis', groupKey: 'Nevis' }, { value: 'NC', label: 'New Caledonia', groupKey: 'New Caledonia' }, { value: 'NZ', label: 'New Zealand', groupKey: 'New Zealand' }, { value: 'NI', label: 'Nicaragua', groupKey: 'Nicaragua' }, { value: 'NE', label: 'Niger', groupKey: 'Niger' }, { value: 'NG', label: 'Nigeria', groupKey: 'Nigeria' }, { value: 'NU', label: 'Niue', groupKey: 'Niue' }, { value: 'NF', label: 'Norfolk Island', groupKey: 'Norfolk Island' }, { value: 'KP', label: 'North Korea', groupKey: 'North Korea' }, { value: 'MP', label: 'Northern Mariana Islands', groupKey: 'Northern Mariana Islands' }, { value: 'NO', label: 'Norway', groupKey: 'Norway' }, { value: 'OM', label: 'Oman', groupKey: 'Oman' }, { value: 'PK', label: 'Pakistan', groupKey: 'Pakistan' }, { value: 'PW', label: 'Palau', groupKey: 'Palau' }, { value: 'PA', label: 'Panama', groupKey: 'Panama' }, { value: 'PG', label: 'Papua New Guinea', groupKey: 'Papua New Guinea' }, { value: 'PY', label: 'Paraguay', groupKey: 'Paraguay' }, { value: 'PE', label: 'Peru', groupKey: 'Peru' }, { value: 'PH', label: 'Philippines', groupKey: 'Philippines' }, { value: 'PN', label: 'Pitcairn Islands', groupKey: 'Pitcairn Islands' }, { value: 'PL', label: 'Poland', groupKey: 'Poland' }, { value: 'PT', label: 'Portugal', groupKey: 'Portugal' }, { value: 'PR', label: 'Puerto Rico', groupKey: 'Puerto Rico' }, { value: 'QA', label: 'Qatar', groupKey: 'Qatar' }, { value: 'MK', label: 'Republic of Macedonia', groupKey: 'Republic of Macedonia' }, { value: 'CG', label: 'Republic of the Congo', groupKey: 'Republic of the Congo' }, { value: 'RE', label: 'Reunion', groupKey: 'Reunion' }, { value: 'RO', label: 'Romania', groupKey: 'Romania' }, { value: 'RU', label: 'Russian Federation', groupKey: 'Russian Federation' }, { value: 'RW', label: 'Rwanda', groupKey: 'Rwanda' }, { value: 'XY', label: 'Saint Barthelemy', groupKey: 'Saint Barthelemy' }, { value: 'SH', label: 'Saint Helena', groupKey: 'Saint Helena' }, { value: 'KN', label: 'Saint Kitts', groupKey: 'Saint Kitts' }, { value: 'LC', label: 'Saint Lucia', groupKey: 'Saint Lucia' }, { value: 'MF', label: 'Saint Martin', groupKey: 'Saint Martin' }, { value: 'VC', label: 'Saint Vincent and the Grenadines', groupKey: 'Saint Vincent and the Grenadines' }, { value: 'SP', label: 'Saipan', groupKey: 'Saipan' }, { value: 'SM', label: 'San Marino', groupKey: 'San Marino' }, { value: 'ST', label: 'Sao Tome And Principe', groupKey: 'Sao Tome And Principe' }, { value: 'SA', label: 'Saudi Arabia', groupKey: 'Saudi Arabia' }, { value: 'SN', label: 'Senegal', groupKey: 'Senegal' }, { value: 'RS', label: 'Serbia', groupKey: 'Serbia' }, { value: 'SC', label: 'Seychelles', groupKey: 'Seychelles' }, { value: 'SL', label: 'Sierra Leone', groupKey: 'Sierra Leone' }, { value: 'SG', label: 'Singapore', groupKey: 'Singapore' }, { value: 'SK', label: 'Slovakia', groupKey: 'Slovakia' }, { value: 'SI', label: 'Slovenia', groupKey: 'Slovenia' }, { value: 'SB', label: 'Solomon Islands', groupKey: 'Solomon Islands' }, { value: 'SO', label: 'Somalia', groupKey: 'Somalia' }, { value: 'XS', label: 'Somaliland', groupKey: 'Somaliland' }, { value: 'ZA', label: 'South Africa', groupKey: 'South Africa' }, { value: 'GS', label: 'South Georgia and the South Sandwich Islands', groupKey: 'South Georgia and the South Sandwich Islands' }, { value: 'KR', label: 'South Korea', groupKey: 'South Korea' }, { value: 'ES', label: 'Spain', groupKey: 'Spain' }, { value: 'XG', label: 'Spanish Territories Of N.Africa', groupKey: 'Spanish Territories Of N.Africa' }, { value: 'LK', label: 'Sri Lanka', groupKey: 'Sri Lanka' }, { value: 'XE', label: 'St. Eustatius', groupKey: 'St. Eustatius' }, { value: 'XM', label: 'St. Maarten', groupKey: 'St. Maarten' }, { value: 'SD', label: 'Sudan', groupKey: 'Sudan' }, { value: 'SR', label: 'Suriname', groupKey: 'Suriname' }, { value: 'SJ', label: 'Svalbard and Jan Mayen', groupKey: 'Svalbard and Jan Mayen' }, { value: 'SZ', label: 'Swaziland', groupKey: 'Swaziland' }, { value: 'SE', label: 'Sweden', groupKey: 'Sweden' }, { value: 'CH', label: 'Switzerland', groupKey: 'Switzerland' }, { value: 'SY', label: 'Syria', groupKey: 'Syria' }, { value: 'TW', label: 'Taiwan, China', groupKey: 'Taiwan, China' }, { value: 'TJ', label: 'Tajikistan', groupKey: 'Tajikistan' }, { value: 'TZ', label: 'Tanzania', groupKey: 'Tanzania' }, { value: 'TH', label: 'Thailand', groupKey: 'Thailand' }, { value: 'PM', label: 'The Islands of st pierre and miquelon', groupKey: 'The Islands of st pierre and miquelon' }, { value: 'TL', label: 'Timor-Leste', groupKey: 'Timor-Leste' }, { value: 'TG', label: 'Togo', groupKey: 'Togo' }, { value: 'TK', label: 'Tokelau', groupKey: 'Tokelau' }, { value: 'TO', label: 'Tonga', groupKey: 'Tonga' }, { value: 'TT', label: 'Trinidad And Tobago', groupKey: 'Trinidad And Tobago' }, { value: 'TA', label: 'Tristan da Cunha', groupKey: 'Tristan da Cunha' }, { value: 'TN', label: 'Tunisia', groupKey: 'Tunisia' }, { value: 'TR', label: 'Turkey', groupKey: 'Turkey' }, { value: 'TM', label: 'Turkmenistan', groupKey: 'Turkmenistan' }, { value: 'TC', label: 'Turks And Caicos Islands', groupKey: 'Turks And Caicos Islands' }, { value: 'TV', label: 'Tuvalu', groupKey: 'Tuvalu' }, { value: 'UG', label: 'Uganda', groupKey: 'Uganda' }, { value: 'UA', label: 'Ukraine', groupKey: 'Ukraine' }, { value: 'AE', label: 'United Arab Emirates', groupKey: 'United Arab Emirates' }, { value: 'GB', label: 'United Kingdom', groupKey: 'United Kingdom' }, { value: 'US', label: 'United States', groupKey: 'United States' }, { value: 'UM', label: 'United States Minor Outlying Islands', groupKey: 'United States Minor Outlying Islands' }, { value: 'UY', label: 'Uruguay', groupKey: 'Uruguay' }, { value: 'UZ', label: 'Uzbekistan', groupKey: 'Uzbekistan' }, { value: 'VU', label: 'Vanuatu', groupKey: 'Vanuatu' }, { value: 'VA', label: 'Vatican City', groupKey: 'Vatican City' }, { value: 'VE', label: 'Venezuela', groupKey: 'Venezuela' }, { value: 'VN', label: 'Vietnam', groupKey: 'Vietnam' }, { value: 'VG', label: 'Virgin Islands(GB)', groupKey: 'Virgin Islands(GB)' }, { value: 'VI', label: 'Virgin Islands(US)', groupKey: 'Virgin Islands(US)' }, { value: 'WF', label: 'Wallis and Futuna', groupKey: 'Wallis and Futuna' }, { value: 'EH', label: 'Western Sahara', groupKey: 'Western Sahara' }, { value: 'WS', label: 'Western Samoa', groupKey: 'Western Samoa' }, { value: 'JU', label: 'YUGOSLAVIA', groupKey: 'YUGOSLAVIA' }, { value: 'YE', label: 'Yemen', groupKey: 'Yemen' }, { value: 'ZM', label: 'Zambia', groupKey: 'Zambia' }, { value: 'ZW', label: 'Zimbabwe', groupKey: 'Zimbabwe' }];
    // eslint-disable-next-line max-len
    const hotList = [{ value: 'BR', label: 'Brazil', groupKey: 'xxx' }, { value: 'FR', label: 'France', groupKey: 'France' }, { value: 'DE', label: 'Germany', groupKey: 'Germany' }, { value: 'IT', label: 'Italy', groupKey: 'Italy' }, { value: 'PL', label: 'Poland', groupKey: 'Poland' }, { value: 'PT', label: 'Portugal', groupKey: 'Portugal' }, { value: 'RU', label: 'Russian Federation', groupKey: 'Russian Federation' }, { value: 'ES', label: 'Spain', groupKey: 'Spain' }, { value: 'GB', label: 'United Kingdom', groupKey: 'United Kingdom' }, { value: 'US', label: 'United States', groupKey: 'United States' }];

    contactsInstance = new Contacts({
        target: '.js_targetSelect', // 需要放置的目标位置
        containerHeight: '80vh', // 默认 60vh
        navModel: 'touchmove', // touchmove

        hotLetter: '#',
        hotName: '推荐',
        curSelect: 'BR',
        searchPlaceholder: '请输入搜索关键词',
        indicatorDuration: 1500, // 指示器显示时间
        data: {
            allList,
            hotList
        },
        onSelect(value) {
            console.log(`当前选中：[${value}]`);
        }
    });

    window.contactsInstance = contactsInstance;
}, false);
