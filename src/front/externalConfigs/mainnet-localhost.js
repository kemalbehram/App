window.widgetEvmLikeTokens = [
  {
    name: 'usdt',
    symbol: 'usdt',
    standard: 'erc20',
    address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    decimals: 6,
    fullName: 'Tether'
  },
  {
    name: 'bubba',
    symbol: 'bubba',
    standard: 'bep20',
    // Address of ERC20 contract
    address: '0x7D2441A94E171EBEaF5CD7A1ebEb2734629dD7e2',
    // Count of decimals after dot
    decimals: 9,
    // Display name in wallet (By default - its symbol of ERC20, but can be other userfriendy text)
    fullName: 'Bubba',
    // Icon of currency (image)
    icon: 'https://bubba.finance/wp-content/uploads/2021/07/174-svg.svg',
    // Background color of icon
    iconBgColor: '#FFFFFF',
  },
  {
    name: 'uni',
    symbol: 'uni',
    standard: 'erc20',
    // Address of ERC20 contract
    address: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    // Count of decimals after dot
    decimals: 18,
    // Display name in wallet (By default - its symbol of ERC20, but can be other userfriendy text)
    fullName: 'Uniswap',
    // Icon of currency (image)
    icon: 'https://wallet.miningtaxi.com/images/uniswap.svg',
    // Background color of icon
    iconBgColor: '#ff007a',
  }
]

window.buildOptions = {
  ownTokens: false, // Will be inited from window.widgetEvmLikeTokens
  addCustomTokens: true, // Allow user add custom evm like tokens
  curEnabled: { // Or 'false' if enabled all
    btc: true,
    eth: true,
    bnb: true,
    matic: true,
    arbeth: true,
    ghost: true,
    next: true,
  },
  blockchainSwapEnabled: {
    btc: true,
    eth: false,
    bnb: false,
    matic: false,
    arbeth: false,
    ghost: false,
    next: false,
  },
  defaultExchangePair: {
    buy: '{eth}wbtc',
    sell: 'btc',
  },
  /*
    Порядок валют на странице создания кошелька
    CUSTOM_ERC20, CUSTOM_BEP20, CUSTOM_ERC20MATIC - Добавление пользовательского токена (при условии addCustomERC20 = true)
    {ERC20}UNI - Токен в сети Эфира
    {BEP20}TOKENSYMBOL - Токен в сети бинанс
    {ERC20MATIC}TOKENSYMBOL - Токен в сети матик
    Все остальные коины, которые не указаны, будут помещены в конец списка в произвольном порядке
  */
  createWalletCoinsOrder: [
    '{ETH}UNI',
    'CUSTOM_ERC20',
    '{ETH}SHARE',
    'BTC',
    'CUSTOM_ERC20MATIC',
    'MATIC',
    'BNB',
    'CUSTOM_BEP20'
  ],
  invoiceEnabled: true, // Allow create invoices
  showWalletBanners: true,
}