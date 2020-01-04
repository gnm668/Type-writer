class Dictionary {

    constructor() {
        this.words = ['app', 'software', 'ruby', 'python', 'perl', 
    'javascript', 'react', 'redux', 'hardware', 'application', 'memory',
    'html', 'css', 'scss', 'document', 'sql', 'postgres', 'sqlite',
    'academy', 'jquery', 'ajax', 'promise', 'asymptotic', 'hash',
    'bcrypt', 'user', 'closure', 'callback', 'canvas', 'ctx', 'context',
    'element', 'document', 'ram', 'amoritization', 'amoritize', 'blockchain',
    'bitcoin', 'dogecoin', 'apple', 'facebook', 'netflix', 'google', 'uber',
    'juul', 'array', 'dictionary', 'string', 'integer', 'boolean', 'switch',
    'case', 'if', 'else', 'or', 'and', 'elsif', 'truthy', 'falsey', 'true',
    'false', 'null', 'nil', 'undefined', 'xor', 'developer', 'development', 
    'production', 'thunk', 'action', 'reducer', 'util', 'utility', 'link', 
    'style', 'stylesheets', 'input', 'output', 'function', 'method', 'list', 
    'index', 'show', 'create', 'destroy', 'update', 'new', 'edit', 'get', 
    'post', 'delete', 'patch', 'put', 'middleware', 'architecture', 'threads',
    'multithreading', 'cpu', 'gpu', 'processor', 'motherboard', 'network',
    'computer', 'code', 'programming', 'programmer', 'language', 'transpiler', 
    'compiler', 'functional', 'procedural', 'imperative', 'object', 'environment', 
    'integrated', 'api', 'interface', 'debugger', 'execute', 'executable', 
    'automation', 'artificial', 'intelligence', 'batch', 'package', 'json', 
    'metaprogramming', 'active', 'record', 'controller', 'view', 'model', 
    'bit', 'branch', 'byte', 'data', 'terabyte', 'petabyte', 'gigabyte', 
    'build', 'engineer', 'frontend', 'backend', 'camelcase', 'snakecase', 
    'kebabcase', 'refactor', 'dry', 'donot', 'repeat', 'yourself', 'command', 
    'java', 'kotlin', 'constructor', 'migration', 'generate', 'bundle', 'rails',
    'curly', 'boys', 'girls', 'people', 'bracket', 'parenthesis', 'quotes', 'escape',
    'regular', 'expression', 'regex', 'declarative', 'matrix', 'variable', 
    'django', 'flask', 'dom', 'div', 'vanilla', 'green', 'lacroix', 'whiteclaw',
    'embedded', 'error', 'event', 'handling', 'fizzbuzz', 'go', 'hard', 'hello', 
    'world', 'heroku', 'aws', 'amazon', 'cloud', 'machine', 'learning',
    'interpreter', 'native', 'lambda', 'logic', 'loop', 'markup', 'module', 
    'import', 'export', 'default', 'extends', 'component', 'websocket', 'socketio',
    'server', 'localhost', 'framework', 'library', 'node', 'express', 'mongodb',
    'database', 'onclick', 'onmouseover', 'addeventlistener', 'parse', 'persist', 
    'pixel', 'polymorphism', 'process', 'psuedocode', 'whiteboarding', 'twosum', 
    'recursion', 'sort', 'quicksort', 'mergesort', 'curry', 'bind', 'apply', 
    'call', 'bubblesort', 'linux', 'shell', 'bash', 'snippet', 'github', 'git', 
    'syntax', 'class', 'superclass', 'token', 'cookie', 'cookies', 'session', 
    'web', 'for', 'while', 'conditional', 'each', 'foreach', 'with', 'index', 
    'key', 'value', 'stack', 'queue', 'tree', 'binary', 'tertiary', 'poly', 
    'algorithm', 'abstraction', 'file', 'directory', 'insertionsort', 'bug', 
    'feature', 'enumerable', 'monkeypatch', 'scope', 'byebug', 'semantic', 
    'structure', 'depth', 'breadth', 'require', 'rspec', 'routes', 'routing', 
    'postman', 'salt', 'authentication', 'encryption', 'params', 'match', 'history', 
    'props', 'ownprops', 'async', 'inheritance', 'prototype', 'then', 'catch', 
    'resolve', 'local', 'storage', 'lifecycle', 'mutable', 'immutable', 'mount', 
    'connect', 'container', 'selector', 'random', 'access', 'silicon', 'valley', 
    'bay', 'mountain', 'view', 'engine', 'dropbox', 'slack', 'pinterest', 'lyft',
    'ui', 'ux', 'experience', 'readable', 'relational', 'nonrelational', 
    'query', 'queried', 'window', 'timeout', 'pos', 'position', 'result', 'res',
    'monkey', 'mouse', 'keyboard', 'screen', 'viewport', 'relative'];
    };

    randomWord() {
        const randomIdx = Math.floor(Math.random() * this.words.length)
        return this.words[randomIdx];
    };
};