function begin(){
    var nd = document.createElement('div');
    var info = `<b># Что такое клиент-серверная архитектура?</b></br>+++ архитектура ПО, при которой нескольких клиентов обслуживаются одним и тем же специализированным сервером;</br><b># Что такое интегрированное программное решение (solution)?</b></br>+++ программа для вычисления определенного интеграла;</br><b># Что такое программное обеспечение промежуточного уровня (middleware)?</b></br>+++ ПО, обеспечивающее взаимодействие между клиентом и сервером, например, реализующее сетевые протоколы;</br><b># Что такое встроенная система?</b></br>+++ ПО для специализированного микропроцессора, встроенного в элемент бытовой или другой техники (холодильник, ЛЭП и др.);</br><b># Что такое ПО носимых компьютеров?</b></br>+++ ПО для микропроцессоров, встроенных в спецодежду или в тело человека;</br><b># Каковы виды ПО для управления информацией?</b></br>+++ CУБД;</br><b># Что такое ПО для виртуализации?</b></br>+++ ПО, обеспечивающее управление виртуальными ресурсами (виртуальной машиной, виртуальной памятью и др.);</br><b># Назовите задачи, решаемые ПО для научных вычислений.</b></br>+++ аналитические выкладки (например, взятие производных);</br><b># Что такое ПО для управления знаниями?</b></br>+++ ПО для извлечения, представления, использования и обработки знаний (онтологий, фреймов, правил и др.);</br><b># Назовите принцип trustworthy computing.</b></br>+++ безопасность;</br><b># Что такое масштабируемость ПО?</b></br>+++ возможность использования одного и того же или однотипного ПО на различных классах платформ (мобильные устройства, настольные компьютеры и др.);</br><b># Что такое интеллектуальное программное решение?</b></br>+++ ПО, использующие знания, хранящиеся в отдельной расширяемой базе знаний;</br><b># Назовите современную платформу для разработки ПО.</b></br>+++ Java;</br><b># Назовите современные динамические языки, используемые для Web-программирования.</b></br>+++ Python;</br><b># Назовите наиболее важное качество ПО.</b></br>+++ надежность;</br><b># Каков основной элемент любой технологии программирования?</b></br>+++ концепции;</br><b># Что такое тонкий клиент?</b></br>+++ клиентское ПО, работающее через браузер и не имеющее состояния и полнофункционального GUI</br><b># Что такое слой ПО?</b></br>+++ крупная независимая единица ПО, группа модулей;</br><b># Что такое ярус (tier)?</b></br>+++ слой ПО, реализующий какую-либо независимую часть его архитектуры;</br><b># Что такое уровень абстракции?</b></br>+++ группа модулей (уровня N), использующих в реализации только модули уровня N-1;</br><b># Что такое вертикальный срез ПО?</b></br>+++ группа модулей и рассредоточенных фрагментов кода, реализующих скворзную функциональность</br><b># Что такое многоярусная (multi-tiered) архитектура?</b></br>+++ архитектура ПО, при которой каждая крупная функциональность реализована отдельным ярусом (процессом);</br><b># Что такое многоклиентская (multi-tenant) архитектура?</b></br>+++ архитектура ПО, при которой несколько клиентов используют одну и то же копию сервиса, работающую в виде отдельного процесса;</br><b># Что такое  облачные вычисления?</b></br>+++ масштабируемые виртуализованные действия над программами и данными через специализированные Web-сервисы центра обработки данных;</br><b># Что такое облачные вычисления?</b></br>+++ вычисления на основе веб-сервисов, предоставляющих доступ к виртуализованным ресурсам центра обработки данных;</br><b># Что понимается под метафорой облака в облачных вычислениях?</b></br>+++ интернет (Web);</br><b># Что такое центр обработки данных?</b></br>+++ локальная сеть мощных компьютеров, выполняющих облачные сервисы;</br><b># Каковы преимущества облачных вычислений?</b></br>+++ минимальные требования к компьютеру пользователя (веб-браузер);</br><b># Каковы недостатки облачных вычислений?</b></br>+++ полная зависимочсть пользователя от облака;</br><b># Какие разновидности облаков используются в облачных вычислениях?</b></br>+++ корпоративные;</br><b># Каковы компоненты концепции облачных вычислений?</b></br>+++ инфраструктура как сервис;</br><b># Каковы уровни архитектуры облачных вычислений?</b></br>+++ уровень клиента;</br><b># Каковы роли реализаторов облачных вычислений?</b></br>+++ архитектор облака;</br><b># Какие стандарты и технологии используются в облачных вычислениях?</b></br>+++ HTML 5;</br><b># Что такое Windows Azure?</b></br>+++ платформа фирмы Microsoft для облачных вычислений;</br><b># На какой платформе основана реализация Windows Azure?</b></br>+++ .NET, C++;</br><b># Какой вид приложения может исполнять пользователь облачных вычислений?</b></br>+++ внутренние (on-premises);</br><b># Один компонентов (сервисов) Windows Azure?</b></br>+++ интерфейс (Fabric);</br><b># Какие функции выполняет компонента Интерфейс Windows Azure?</b></br>+++ управление облачными приложениями;</br><b># Какие функции выполняет компонента Вычисления Windows Azure?</b></br>+++ поддержка исполнения облачных сервисов;</br><b># Какие функции выполняет компонента Память Windows Azure?</b></br>+++ работа с данными в облаке;</br><b># Обработку каких разновидностей данных поддерживает компонента Память Windows Azure?</b></br>+++ большие бинарные объекты (blobs);</br><b># Какая компонента .NET используется для реализации облачных сервисов Windows Azure?</b></br>+++ Windows Communication Foundation;</br><b># Какие системные компоненты управляют облачными сервисами в Windows Azure?</b></br>+++ управление доступом;</br><b># В каком формате представлены конфигурационные файлы облачных сервисов в Windows Azure?</b></br>+++ XML;</br><b># Какая компонента управляет работой основного сервиса Интерфейс (Fabric) Windows Azure?</b></br>+++ контроллер интерфейса (Fabric Controller);</br><b># Какое приложение на каждом компьютере управляет каждым облачным сервисом и взаимодействует с контроллером интерфейса в Windows Azure?</b></br>+++ агент интерфейса (fabric agent);</br><b># Какая компания предоставляет популярные облачные сервисы?</b></br>+++ Microsoft;</br><b># На каких компьютерах выполняются облачные приложения в Azure?</b></br>+++ на компьютерах центров обработки данных Microsoft;</br><b># Какое программное обеспечение требуется на пользовательском компьютере при работе в Azure?</b></br>+++ Web-браузер;</br><b># Какая ОС используется на компьютерах ЦОД, реализующих облако Windows Azure?</b></br>+++ Windows 2008 R2;</br><b># Какая ОС должна использоваться на клиентских компьютерах для использования Azure?</b></br>+++ любая;</br><b># Каковы ограничения на клиентское оборудование для использования Windows Azure?</b></br>+++ никаких, необходим только компьютер с Web-браузером;</br><b># Что необходимо для доступа к Azure?</b></br>+++ специальная академическая подписка на Azure или платный доступ</br><b># Какие бесплатные облачные сервисы предоставляет Microsoft?</b></br>+++ Windows Live;</br><b># С какого вида клиентского устройства доступна Windows Azure?</b></br>+++ настольные компьютеры;</br><b># Каковы категории пользователей, которые могут использовать Windows Azure?</b></br>+++ любые компании и индивидуальные заказчики, оплачивающие доступ к Azure, либо получившие пробный доступ, либо подписчики MSDN;</br><b># Через какую сеть осуществлятся доступ к Azure?</b></br>+++ интернет (Web);</br><b># Какие функции выполняет компонента Интерфейс Windows Azure?</b></br>+++ управление облачными приложениями;</br><b># Какие функции выполняет компонента Вычисления Windows Azure?</b></br>+++ поддержка исполнения облачных сервисов;</br><b># Какие функции выполняет компонента Память Windows Azure?</b></br>+++ работа с данными в облаке;</br><b># Обработку каких разновидностей данных поддерживает компонента Память Windows Azure?</b></br>+++ большие бинарные объекты (blobs);</br><b># Какая компонента .NET используется для реализации облачных сервисов Windows Azure?</b></br>+++ Windows Communication Foundation;</br><b># Какие системные компоненты управляют облачными сервисами в Windows Azure?</b></br>+++ управление доступом;</br><b># В каком формате представлены конфигурационные файлы облачных сервисов в Windows Azure?</b></br>+++ XML;</br><b># Какая компонента управляет работой основного сервиса Интерфейс (Fabric) Windows Azure?</b></br>+++ контроллер интерфейса (Fabric Controller);</br><b># Какое приложение на каждом компьютере управляет каждым облачным сервисом и взаимодействует с контроллером интерфейса в Windows Azure?</b></br>+++ агент интерфейса (fabric agent);</br><b># На какой платформе основана реализация Azure?</b></br>+++ .NET;</br><b># Что такое .NET?</b></br>+++ многоязыковая платформа надежного и безопасного программирования;</br><b># Каковы основные части стандартов .NET ?</b></br>+++ CTS;</br><b># Что такое метаданные?</b></br>+++ информация о типах, определенных и использованных в сборке;</br><b># Что  такое сборка в .NET?</b></br>+++ бинарное представление программы;</br><b># Какой тип имеются в системе типов .NET?</b></br>+++ управляемые указатели;</br><b># На каких стандартах основаны Web-сервисы .NET?</b></br>+++ SOAP;</br><b># Какие запросы клиент посылает Web-сервису?</b></br>+++ wsdl;</br><b># Какой файл реализации Web-сервиса описывает структуру (дизайн) Web-страницы?</b></br>+++ aspx;</br><b># Какой из этих основной сервис в архитектуре Azure?</b></br>+++ Network;</br><b># Что такое Fabric?</b></br>+++ сеть для управления приложениями в Azure</br><b># Каковы функции Fabric Controller?</b></br>+++ мониторинг облачных приложений;</br><b># Какие виды ролей имеются в Azure?</b></br>+++ Web-роль;</br><b># В каком файле определяется структура сервиса Azure?</b></br>+++ ServiceDefiniton;</br><b># В каком файле определяется конфигурация сервиса Azure?</b></br>+++ ServiceConfiguration;</br><b># Какие методы содержит класс BasicEntryPoint, реализующий Worker-роль в Azure?</b></br>+++ OnStart();</br><b># Каким образом могут взаимодействовать роли в Azure?</b></br>+++ асинхронно с помощью очередей;</br><b># С помощью какой технологии реализуются Web-роли?</b></br>+++ ASP.NET;</br><b># Каковы функции Fabric Agent?</b></br>+++ сбор и запись метрик ресурсов;</br><b># В какой форме владельцы приложений в Azure описывают требуемые ресурсы?</b></br>+++ дескрипторы ресурсов;</br><b># Как реализуется Worker-роль?</b></br>+++ переопределяется метод Run() класса RoleEntryPoint;</br><b># Когда обрабатывается определение сервиса в Azure?</b></br>+++ во время развертывания приложения;</br><b># Может ли быть изменена во время выполнения конфигурация сервиса?</b></br>+++ да;</br><b># Что такое AppFabric?</b></br>+++ компонентa Azure для управления облачными приложениями;</br><b># Что такое Access Control как часть Azure?</b></br>+++ компонента AppFabric для управления доступом к приложениям;</br><b># Назовите основные компоненты облачной платформы.</b></br>+++ подсистема поддержки выполнения;</br><b># Что такое частное облако?</b></br>+++ облако, в котором пользователь управляет всеми компонентами;</br><b># Что такое облако типа инфраструктура как сервис?</b></br>+++ облако, в котором пользователь управляет приложениями, подсистемами поддержки выполнения, подсистемой безопасности и базами данных;</br><b># Что такое облако типа платформа как сервис?</b></br>+++ облако, в котором пользователь управляет только своими приложениями;</br><b># Что такое облако типа ПО как сервис?</b></br>+++ облако, в котором все компоненты управляются провайдером, а пользователь использует готовые облачные сервисы;</br><b># Из какого компонента состоит AppFabric?</b></br>+++ Access Control, Bus Service;</br><b># На какой платформе можно использовать Azure?</b></br>+++ на любой, имеющей браузер и доступ к Интернету;</br><b># Что такое AppFabric SDK for Java Developers?</b></br>+++ инструмент для обращения к AppFabric из Java-программ;</br><b># Назовите компоненты размещенного сервиса.</b></br>+++ сертификаты, подписки;</br><b># Что такое runtimes как часть облака?</b></br>+++ подсистемы поддержки выполнения приложений;</br><b># Что такое Security & Integration как часть облака?</b></br>+++ подсистемы безопасности и интеграции;</br><b># Что такое virtualization как часть облака?</b></br>+++ виртуальные машины;</br><b># Что такое storage как часть облака?</b></br>+++ подсистема управления памятью;</br><b># Что такое networking как часть облака?</b></br>+++ подсистема управления сетью и сетевого взаимодействия;</br><b># Что такое applications как часть облака?</b></br>+++ облачные приложения;</br><b># Что такое worker role?</b></br>+++ процесс, запущенный в облачном приложении;</br><b># Что такое web role?</b></br>+++ Web-приложение в облаке;</br><b># Что такое развертывание приложения?</b></br>+++ размещения приложения в памяти облака и его запуск;</br><b># С какими компонентами позволяет работать основное окно Azure?</b></br>+++ Access Control, базы данных;</br><b># Что именно кэшируется в памяти компонентой Cache?</b></br>+++ образы приложений в памяти;</br><b># Как организована компонента Cache?</b></br>+++ в виде сети кэширующих сервисов;</br><b># Что такое Windows Azure Storage?</b></br>+++ компонент для управления памятью в Azure;</br><b># Что такое Windows Azure Storage Blob?</b></br>+++ инструментарий для хранения бинарных объектов в Azure Storage;</br><b># Что такое Windows Azure Storage Table?</b></br>+++ средства управления памятью для пользователей Azure;</br><b># Что представляют собой компоненты Azure Storage?</b></br>+++ Web-сервисы;</br><b># Какой стандарт Web-сервисов используется для обращения к компонентам Windows Azure Storage?</b></br>+++ REST;</br><b># Из каких приложений возможен доступ к компонентам Storage?</b></br>+++ из любых других приложений, Средства Azure для обращения к ADO</br><b># Сколько раз дублируется хранимая информация в Azure Storage?</b></br>+++ три</br><b># Что такое сервис Queue в Azure?</b></br>+++ поддержка обмена сообщениями между экземплярами Web-ролей и Worker-ролей;</br><b># Что необходимо создать, чтобы начать работать с Azure Storage?</b></br>+++ учетную запись хранения (Storage account);</br><b># В чем суть протокола REST, используемого в Azure?</b></br>+++ Representational State Transfer – передача информации о состоянии сервиса через аргументы и результаты методов;</br><b># Чем характеризуется Azure Storage account?</b></br>+++ URL-адресом;</br><b># С каким объектом связывается URL-адрес?</b></br>+++ с доменом (domain);</br><b># Какие действия обязательны для вновь созданного домена Azure Storage?</b></br>+++ регистрация нового домена в Интернете;</br><b># Какие три Web-страницы создаются при создании нового Storage account?</b></br>+++ для хранения BLOB, Table и Queue-объектов;</br><b># Что необходимо для создания Azure Storage account?</b></br>+++ подписка на Azure;</br><b># Какие свойства поддерживаются для объектов типа Azure Storage Table?</b></br>+++ целостность;</br><b># Что такое ACID (применительно к таблицам Azure)?</b></br>+++ свойства: Асинхронность, Устойчивость, Изолированность, Целостность;</br><b># Что хранится в очереди типа Azure Storage Queue?</b></br>+++ сообщения между Web-сервисами;</br><b># Какие операции имеются над очередью Azure Queue?</b></br>+++ enqueue, dequeue;</br><b># Что такое территориальная группа для учетной записи хранения в Azure?</b></br>+++ регион, в центрах обработки данных которого будут храниться объекты;</br><b># Зачем указывать территориальную группу при создании Azure storage account?</b></br>+++ чтобы хранить Вашу информацию в облаке в наиболее близком к Вам регионе;</br><b># Какого вида URL-адреса присваиваются компонентам Памяти Azure?</b></br>+++ core.windows.net;</br><b># Из каких частей состоит таблица в Azure?</b></br>+++ из разделов;</br><b># Что такое Windows Azure Compute?</b></br>+++ компонента для управления вычислениями в Azure;</br><b># Что такое Web-роль?</b></br>+++ Web-приложение в Azure;</br><b># Что такое Worker-роль в Azure?</b></br>+++ независимый процесс;</br><b># Какого рода приложением может быть Web-роль в Azure?</b></br>+++ Web-сервисом Windows Communication Foundation (WCF Web service)</br><b># Что такое роль VM в Azure?</b></br>+++ процесс, в котором запущена виртуальная машина;</br><b># Почему при работе в Azure рекомендовано иметь не менее двух экземпляров приложения на каждую роль?</b></br>+++ для противостояния атакам типа Distributed Denial of Service;</br><b># Какие платформы можно использовать для реализации Web-ролей и Worker-ролей в Azure?</b></br>+++ любую платформу, при условии соблюдения стандартов разработки Web-сервисов;</br><b># Какой пункт меню (страницы) необходимо выборать для работы с Compute, находясь на главное странице Azure?</b></br>+++ размещенные службы, учетные записи хранения;</br><b># Какие преимущества предоставляет пользователям Windows Azure автоматическое управление сервисами?</b></br>+++ администрирование;</br><b># Что такое развернутое приложение в Azure?</b></br>+++ приложение, доступное в виде Web-сервиса со своим URL-адресом;</br><b># Каково примерно (по порядку величины) ожидаемое среднее число обращений к сервисам Azure?</b></br>+++ до нескольких миллионов (возможно, и более того);</br><b># Что такое администрирование сервисов в Azure?</b></br>+++ балансировка загрузки;</br><b># Что такое доступность сервисов в Azure?</b></br>+++ предоставление программных сервисов пользователям всегда, даже в случае сбоя оборудования или профилактических работ;</br><b># Что такое масштабируемость сервисов в Azure?</b></br>+++ возможность работы сервисов в облаке при любом числе запросов пользователей, работающих в облаке с любых устройств;</br><b># С каким стандартным Интернет-сервисом совместима Azure?</b></br>+++ IIS;</br><b># Что такое роль в Azure?</b></br>+++ процесс для выполнения экземпляра приложения;</br><b># Каковы пользовательские возможности GUI для управления сервисами в Azure?</b></br>+++ визуализация своих облачных сервисов;</br><b># Какая технология Microsoft используется для реализации Web-сервисов Azure?</b></br>+++ ASP.NET;</br><b># Что может произойти (как нормальная ситуация) при визуализации информации о сервисах в Azure?</b></br>+++ задержка (до 30 секунд);</br><b># Каковы основные функции worker-ролей в Azure?</b></br>+++ хостинг фоновых процессов;</br><b># Каковы основные функции Web-ролей в Azure?</b></br>+++ Web-интерфейс с пользователями и их приложениями;</br><b># В чем разница между концепцией роли в Azure и концепцией роли в  .NET?</b></br>+++ роль в Azure – это экземпляр приложения, а роль в .NET – набор полномочий пользователя;</br><b># В чем разница между средствами UNIX и Windows для выдачи информации о процессах и средствами Azure для выдачи информации о сервисах?</b></br>+++ процессы в UNIX (Windows) исполняются на одной машине, а сервисы Azure доступны в облаке (в Интернете);</br><b># Что такое Azure Traffic Manager?</b></br>+++ компонента для распределения трафика пользователя между различными ЦОД по всему миру;</br><b># Что такое Azure  Connect?</b></br>+++ компонента для установки и настройки соединений между машинами (виртуальными машинами) и ролями;</br><b># Что такое Azure  CDN?</b></br>+++ Content Delivery Network – Сеть Кэширующих Серверов;</br><b># Какая информация выдается о сетевых взаимодействиях сервиса Azure и операциях над ним?</b></br>+++ DNS-имя;</br><b># Какую информацию можно добавить к выводимой пользователю при визуализации информации о сервисах?</b></br>+++ администратор учетной записи;</br><b># Какое предупреждение выдается пользователю по поводу распределения ролей?</b></br>+++ рекомендуется иметь по крайней мере два экземпляра приложения на каждую роль;</br><b># Какая информация выдается о пользователе?</b></br>+++ код подписки на Azure;</br><b># Какие функции доступны администратору Azure Account?</b></br>+++ создание со-администратора той же учетной записи;</br><b># Что необходимо указать (выбрать) при создании нового сертификата управления?</b></br>+++ код подписки на Azure;</br><b># Сколько территориальных групп можно создать в рамках одного Azure account?</b></br>+++ в зависимости от подписки (например, для академической – две);</br><b># На каких языках можно разрабатывать приложения для работы с AppFabric (для них имеется SDK)?</b></br>+++ Java;</br><b># Каковы функции службы управления доступом (ACS)?</b></br>+++ работа с сертификатами;</br><b># Кто может быть поставщиком сертификатов?</b></br>+++ Windows Live;</br><b># Что такое SQL Azure?</b></br>+++ аналог SQL Server для платформы Azure;</br><b># Что такое SQL Azure Database ?</b></br>+++ компонент SQL Azure для взаимодействия с БД, основанных на SQL;</br><b># Что такое SQL Azure Reporting?</b></br>+++ компонента SQL Azure для генерации отчетов по базам данных;</br><b># Какой пункт необходимо выбрать на главной странице Azure, чтобы начать работу с SQL Azure?</b></br>+++ база данных;</br><b># С чего начинается работа с Azure в пункте основного меню База данных?</b></br>+++ создание (выбор) подписки Windows Azure;</br><b># Как связаны подписка на Azure и сервер(ы) SQL Azure?</b></br>+++ каждая подписка на Azure может включать несколько логических серверов SQL Azure;</br><b># Как связаны сервер SQL Azure и базы данных (БД) Azure?</b></br>+++ сервер SQL Azure осуществляет управление одной или несколькими БД;</br><b># Какова общая форма URL-адресов серверов SQL Azure?</b></br>+++ servername.database.windows.net;</br><b># Что прежде всего необходимо выбрать (кроме подписки) при создании нового сервера SQL Azure?</b></br>+++ регион;</br><b># Какие данные для администрирования сервера SQL Azure необходимо задать при создании сервера SQL Azure?</b></br>+++ логин и пароль администратора;</br><b># Требуется ли явно указывать имя БД при входе на сервер SQL Azure?</b></br>+++ можно, но не обязательно;</br><b># Что такое Web-выпуск новой базы данных в SQL Azure?</b></br>+++ база данных будет храниться на новом сайте;</br><b># Через какие программные интерфейсы осуществляется доступ к базам данных в SQL Azure?</b></br>+++ ODBC;</br><b># Какое из приведенных понятий НЕ относится к реляционным СУБД ?</b></br>+++ дерево данных;</br><b># Требуются ли какие-либо инсталляции на клиентской машине для работы с облачной базой данных?</b></br>+++ нет;</br><b># Что такое ключ в базе данных?</b></br>+++ поле (столбец) базы данных, по значению которого можно производить поиск;</br><b># Какой тип проекта использовать для разработки облачного приложения?</b></br>+++ Windows Azure Project;</br><b># Что такое ASP.NET – страница?</b></br>+++ файл с расширением .aspx;</br><b># Что такое code behind?</b></br>+++ файл с расширением .aspx.cs с кодом обработки событий ASP.NET – страницы;</br><b># Как осуществляется сборка облачного проекта?</b></br>+++ выбором пункта Start Without Debugging</br><b># Каким образом собранное облачное приложение тестируется на локальной машине без облака?</b></br>+++ облако эмулируется на локальной машине;</br><b># В каком виде сгенерировано тестируемое приложение?</b></br>+++ в виде кода Web-сервиса;</br><b># Каков IP-адрес локальной машины при тестировании Web-приложений?</b></br>+++ 127.0.0.1;</br><b># Что такое развертывание облачного сервиса?</b></br>+++ перекачивание информации о сервисе в облако;</br><b># Какой режим рекомендуется для развертывания разработанного сервиса в облаке?</b></br>+++ только создание сервисного пакета;</br><b># Какова общая форма URL-адресов размещенных облачных Web-сервисов?</b></br>+++ servicename.cloudapp.net;</br><b># Каково расширение файла конфигурации сервисного облачного пакета?</b></br>+++ cspkg;</br><b># Назовите URL-адрес портала Azure.</b></br>+++ windows.azure.com;</br>`
    nd.innerHTML = info;
    nd.style.overflowX = "scroll"; 
    nd.style.overflowY = "scroll"; 
    nd.style.width = '800px';
    nd.style.height = '200px';
    nd.style.display = 'Absolute';
    nd.style.marginTop = '150px';
    nd.style.opacity = '0.2';
    nd.style.marginLeft = '350px';
    document.body.appendChild(nd);
}
begin();
