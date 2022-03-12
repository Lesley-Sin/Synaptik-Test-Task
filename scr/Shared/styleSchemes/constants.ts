const colorPallete = {
    /* Primary colors  */
    primary: '#0575bd',
    primaryFadest: ' #d6e7f2',
    primaryFade: '#009bfe',
    primaryStrong: '#1b6595',
    primaryStrongest: '#023f67',

    /* Secondary colors  */
    secondary: '#c1c1c1',
    secondaryFadest: '#d6d6d6',
    secondaryFade: '#efefef',
    secondaryStrong: ' #e2e2e2',
    secondaryStrongest: '#5e5e5e',

    /* Text colors  */
    text: '#5a5a5a',
    textFadest: '#999999',
    textFade: '#666666',
    textStrong: '#404040',
    disabledThemeColor: '#444444',

    /* Form colors */
    inputBorderColor: '#d6d6d6',
    select: '#e8f6ff',

    /* Main color  */
    main: '#ffffff',

    /* Button colors */
    cancel: '#9d9d9d',

    /* Status color  */
    error: '#e1462c',
    success: '#74c365',

    menuColor: '#f5f5f5',

    disabledInputColor: '#b1b1b1',
    themecolors__text: '#5a5a5a',

    lightBlue: '#82BADD',

    /* the same colors for default and dark */

    usedHighlighter: '#e5eef3',
    titleBorder: ' #eeeeee',
    h3Card: '#182026',
    scrollbarThumb: 'rgba(0, 0, 0, 0.1)',
};

export const colorScheme = {
    def: colorPallete.main,
    check: colorPallete.select,
    primary: colorPallete.primary,
    secondary: colorPallete.text
};

export const paddings = {
    smallPadding: 10,
    defaultPaddings: 15,
    bigPadings: 20,
    extraPadding: 40,
    viewBox: {},
};

export const margins = {
    exSmallMargin: 5,
    smallMargin: 10,
    deafaultMargins: 15,
    largeMargin: 20,
    extraMargin: 40,
};

export const radiusScheme = {
    def: 8,
    rounded: 45
};