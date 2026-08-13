import { defineConfig } from 'eslint/config'
import js from '@eslint/js'

export default defineConfig([
    {
        files: ['**/*.js'],
        plugins: {
            js
        },
        extends: ['js/recommended'],
        rules: {
            //'linebreak-style': ['error', 'unix'], // символ(ы) конца строки
            quotes: ['error', 'double'], // использовать одинарные кавычки
            semi: ['error', 'always'], // точка с запятой в конце операторов
            'no-debugger': 'off', // без отладчика
            'no-undef': 'off', // запретить использование необъявленных переменных
            indent: ['error', 4, { SwitchCase: 1 }], // отступы в коде из 4 пробелов с учетом switch...case
            'arrow-parens': ['error', 'as-needed'], // скобки вокруг единственного параметра стрелочной функции
            'object-curly-spacing': ['error', 'always'], // пробелы между скобками в литералах объектов
            'array-bracket-spacing': ['error', 'never'], // пробелы между скобками в массивах
            'quote-props': ['error', 'as-needed'], // свойства объекта в кавычках или без кавычек
            'no-trailing-spaces': 'error', // не должно быть пробелов в конце строки
            'no-tabs': 'error', // символы табуляции в коде запрещена везде
            'comma-dangle': [
                'error',
                {
                    // запятая после последнего элемента массива или объекта
                    arrays: 'never',
                    objects: 'never',
                    imports: 'never',
                    exports: 'never',
                    functions: 'never'
                }
            ],
            'brace-style': ['error', '1tbs'], // правила для фигурных скобкок для блоков кода
            'keyword-spacing': 'error', // пробел слева и справа для ключевых слов
            'no-multi-spaces': 'error', // не допускается несколько пробелов подряд
            eqeqeq: 'error', // использовать === и !== вместо == и !=
            camelcase: 'error', // имена переменных и функций в стиле camelCase
            'max-len': ['error', 100], // максимальная длина строки
            'no-multiple-empty-lines': 'error', // не больше 2 пустых строк подряд
            'constructor-super': 'error', // проверка вызова super() в конструкторе
            'for-direction': 'error', // проверка цикла for на конечное число итераций
            'getter-return': 'error', // требовать return в getter
            'no-async-promise-executor': 'error', // запрет async функции-исполнителя в Promise
            'no-case-declarations': 'error', // запрет объявления переменных, функций и классов в case
            'no-class-assign': 'error', // class A {} — запрет на приваивание нового значения A
            'no-compare-neg-zero': 'error', // запрет на сравнение x === -0
            'no-cond-assign': 'error', // запрет на присваивание в условиях
            'no-const-assign': 'error', // запрет на изменение константы
            'no-constant-condition': 'error', // запрет на константу в условии
            'no-control-regex': 'error', // запрет на упр.символы в регулярках (ASCII от 0 до 31)
            'no-delete-var': 'error', // запрет на использование delete с переменной
            'no-dupe-args': 'error', // запрет одинаковых параметров в объявлений ф-ции
            'no-dupe-class-members': 'error', // запрет повторяющихся членов класса
            'no-dupe-else-if': 'error', // запрет повторяющихся условий в цепочках if-else-if
            'no-dupe-keys': 'error', // запрет повторяющихся ключей в литералах объектов
            'no-duplicate-case': 'error', // запрет повторяющихся значений case
            'no-empty': 'error', // запрет пустых блоков кода — if(…) {пусто}
            'no-empty-character-class': 'error', // запрет на пустые символьные классы [] в регулярках
            'no-empty-pattern': 'error', // запрет пустых шаблонов деструктурирования let {} = foo
            'no-ex-assign': 'error', // запрет переназначения err в catch — try {…} catch (err) {err = 1}
            'no-extra-boolean-cast': 'error', // запрет лишних логических приведений — if (!!a) {…}
            'no-extra-semi': 'error', // запрет лишних точек с запятой — let x = 5;;
            'no-fallthrough': 'error', // запрет case без break и без комментария «fall through»
            'no-func-assign': 'error', // запрет переназначения объявления function
            'no-global-assign': 'error', // запрет переназначения глобальных переменных — window = {}
            'no-import-assign': 'error', // запрет переназначения импорта — import a from …; a = 1
            'no-inner-declarations': 'error', // запрет объявления ф-ций и переменных внутри блоков кода
            'no-invalid-regexp': 'error', // запрет недопустимых строк регулярных выражений в RegExp()
            'no-irregular-whitespace': 'error', // запрет неправильных пробельных символов
            'no-loss-of-precision': 'error', // запрет литеральных чисел, которые теряют точность
            'no-misleading-character-class': 'error', // запрет проблемных регулярных выражений
            'no-mixed-spaces-and-tabs': 'error', // запрет смешанных отступов из пробелов и табуляций
            'no-new-symbol': 'error', // запрет new Symbol()
            'no-nonoctal-decimal-escape': 'error', // запрет \8 и \9 в строковых литералах
            'no-obj-calls': 'error', // запрет вызова свойств глобального объекта как функций — Math()
            'no-octal': 'error', // запрет восьмеричных литералов — x = 071 (теперь х равен 57)
            'no-prototype-builtins': 'error', // запрет вызова некоторых методов прототипа на объекте
            'no-redeclare': 'error', // запрет повторного объявления переменной
            'no-regex-spaces': 'error', // запрет использования нескольких пробелов в регулярках
            'no-self-assign': 'error', // запрет присваивания переменной самой себе — x = x
            'no-setter-return': 'error', // // запрет на return в setter
            'no-shadow-restricted-names': 'error', // запрет имен переменных и ф-ций типа NaN, undefined
            'no-sparse-arrays': 'error', // запрет разреженных массивов
            'no-this-before-super': 'error', // запрет в конструкторе использовать this до вызова super()
            'no-unexpected-multiline': 'error', // запрет запутанных многострочных выражений
            'no-unreachable': 'error', // запрет недостижимого кода после return, throw, continue и break
            'no-unsafe-finally': 'error', // запрет return, throw, break и continue внутри блока finally
            'no-unsafe-negation': 'error', // запрет отрицания левого операнда в операторах отношения
            'no-unsafe-optional-chaining': 'error', // запрет использования foo?.bar в некоторых ситуациях
            'no-unused-labels': 'error', // запрет неиспользуемых меток
            'no-unused-vars': 'error', // запрет неиспользуемых переменных
            'no-useless-backreference': 'error', // запрет бесполезных обратных ссылок в регулярках
            'no-useless-catch': 'error', // запрет ненужных catch
            'no-useless-escape': 'error', // запрет ненужных escape-символов
            'no-with': 'error', // запрет использования with
            'require-yield': 'error', // требовать yield для функции-генератора
            'use-isnan': 'error', // требовать isNaN() для проверки NaN
            'valid-typeof': 'error' // требовать для typeof допустимых строк "string", "undefined", "object"
        }
    }
]);