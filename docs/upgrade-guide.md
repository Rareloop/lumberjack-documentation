---
id: upgrade-guide
title: Upgrade Guide
sidebar_position: 3
---

# Upgrade Guide

## Upgrading from v8 to v8.1

Estimated time for upgrade: 30 minutes

### Minimum PHP version increased to PHP 8.3

:::warning
**Likelihood of impact: High**
:::

As part of this upgrade, we have increased the minimum version of PHP we support to PHP 8.3.

### PHP 8.5 Support

With Lumberjack v8.1 comes support for PHP 8.5. Please note that WordPress still only has "beta support" for this version of PHP, which means that several plugins still output errors or deprecation warnings.

Please carefully review your site to see if it's able to run PHP 8.5 and you will need to do your own migration to this version of PHP for your theme and upgrade any composer dependencies you are using where appropriate too.

[PHP: Migrating from PHP 8.4.x to PHP 8.5.x - Manual](https://www.php.net/manual/en/migration84.php)

### Configurable Ignition

This version of Lumberjack provides configuration options for [Ignition](https://github.com/spatie/ignition). This feature is considered opt-in, and can be activated by creating `[theme]/config/ignition.php`.

<details>
    <summary>
    Example Ignition Configuration
    </summary>
```php
<?php

use Spatie\Ignition\Solutions\SolutionProviders\BadMethodCallSolutionProvider;
use Spatie\Ignition\Solutions\SolutionProviders\MergeConflictSolutionProvider;
use Spatie\Ignition\Solutions\SolutionProviders\UndefinedPropertySolutionProvider;

return [

    /*
    |--------------------------------------------------------------------------
    | Editor
    |--------------------------------------------------------------------------
    |
    | Choose your preferred editor to use when clicking any edit button.
    |
    | Supported: "phpstorm", "vscode", "vscode-insiders", "textmate", "emacs",
    |            "sublime", "atom", "nova", "macvim", "idea", "netbeans",
    |            "xdebug", "phpstorm-remote"
    |
    */

    'editor' => env('IGNITION_EDITOR', 'vscode'),

    /*
    |--------------------------------------------------------------------------
    | Theme
    |--------------------------------------------------------------------------
    |
    | Here you may specify which theme Ignition should use.
    |
    | Supported: "light", "dark", "auto"
    |
    */

    'theme' => env('IGNITION_THEME', 'auto'),

    /*
    |--------------------------------------------------------------------------
    | Solution Providers
    |--------------------------------------------------------------------------
    |
    | List of solution providers that should be loaded. You may specify additional
    | providers as fully qualified class names.
    |
    */

    'solution_providers' => [
        // from spatie/ignition
        BadMethodCallSolutionProvider::class,
        MergeConflictSolutionProvider::class,
        UndefinedPropertySolutionProvider::class,
    ],

    /*
    |--------------------------------------------------------------------------
    | Ignored Solution Providers
    |--------------------------------------------------------------------------
    |
    | You may specify a list of solution providers (as fully qualified class
    | names) that shouldn't be loaded. Ignition will ignore these classes
    | and possible solutions provided by them will never be displayed.
    |
    */

    'ignored_solution_providers' => [],

    /*
    |--------------------------------------------------------------------------
    | Runnable Solutions
    |--------------------------------------------------------------------------
    |
    | Some solutions that Ignition displays are runnable and can perform
    | various tasks. By default, runnable solutions are only enabled when your
    | app has debug mode enabled and the environment is `local` or
    | `development`.
    |
    | Using the `IGNITION_ENABLE_RUNNABLE_SOLUTIONS` environment variable, you
    | can override this behaviour and enable or disable runnable solutions
    | regardless of the application's environment.
    |
    | Default: env('IGNITION_ENABLE_RUNNABLE_SOLUTIONS')
    |
    */

    'enable_runnable_solutions' => env('IGNITION_ENABLE_RUNNABLE_SOLUTIONS', 'false'),

    /*
    |--------------------------------------------------------------------------
    | Remote Path Mapping
    |--------------------------------------------------------------------------
    |
    | If you are using a remote dev server, like Laravel Homestead, Docker, or
    | even a remote VPS, it will be necessary to specify your path mapping.
    |
    | Leaving one, or both of these, empty or null will not trigger the remote
    | URL changes and Ignition will treat your editor links as local files.
    |
    | "remote_sites_path" is an absolute base path for your sites or projects
    | in Homestead, Vagrant, Docker, or another remote development server.
    |
    | Example value: "/home/vagrant/Code"
    |
    | "local_sites_path" is an absolute base path for your sites or projects
    | on your local computer where your IDE or code editor is running on.
    |
    | Example values: "/Users/<name>/Code", "C:\Users\<name>\Documents\Code"
    |
    */

    'remote_sites_path' => env('IGNITION_REMOTE_SITES_PATH', dirname(__DIR__)),
    'local_sites_path' => env('IGNITION_LOCAL_SITES_PATH', ''),

    /*
    |--------------------------------------------------------------------------
    | Recorders
    |--------------------------------------------------------------------------
    |
    | Ignition registers a couple of recorders when it is enabled. Below you may
    | specify a recorders will be used to record specific events.
    |
    */

    'recorders' => [],

    /*
     * When a key is set, we'll send your exceptions to Open AI to generate a solution
     */

    'open_ai_key' => env('IGNITION_OPEN_AI_KEY'),

    /*
    |--------------------------------------------------------------------------
    | Include arguments
    |--------------------------------------------------------------------------
    |
    | Ignition show you stack traces of exceptions with the arguments that were
    | passed to each method. This feature can be disabled here.
    |
    */

    'with_stack_frame_arguments' => true,

    /*
    |--------------------------------------------------------------------------
    | Argument reducers
    |--------------------------------------------------------------------------
    |
    | Ignition show you stack traces of exceptions with the arguments that were
    | passed to each method. To make these variables more readable, you can
    | specify a list of classes here which summarize the variables.
    |
    */

    'argument_reducers' => [
        \Spatie\Backtrace\Arguments\Reducers\BaseTypeArgumentReducer::class,
        \Spatie\Backtrace\Arguments\Reducers\ArrayArgumentReducer::class,
        \Spatie\Backtrace\Arguments\Reducers\StdClassArgumentReducer::class,
        \Spatie\Backtrace\Arguments\Reducers\EnumArgumentReducer::class,
        \Spatie\Backtrace\Arguments\Reducers\ClosureArgumentReducer::class,
        \Spatie\Backtrace\Arguments\Reducers\DateTimeArgumentReducer::class,
        \Spatie\Backtrace\Arguments\Reducers\DateTimeZoneArgumentReducer::class,
        \Spatie\Backtrace\Arguments\Reducers\SymphonyRequestArgumentReducer::class,
        \Spatie\Backtrace\Arguments\Reducers\StringableArgumentReducer::class,
    ],

];

````

</details>

## Upgrading from v7 to v8

Estimated time for upgrade: 5 minutes

### Minimum PHP version increased to PHP 8.1

:::warning
**Likelihood of impact: Medium**
:::

As part of this upgrade we have increased the minimum version of PHP we support to PHP 8.1.

### PHP 8.4 Support

With Lumberjack v8 comes support for PHP 8.4. Please note that WordPress still only has "beta support" for this version of PHP, which means that several plugins still output errors or deprecation warnings.

Please carefully review your site to see if it's able to run PHP 8.4 and you will need to do your own migration to this version of PHP for your theme and upgrade any composer dependencies you are using where appropriate too.

[PHP: Migrating from PHP 8.3.x to PHP 8.4.x - Manual](https://www.php.net/manual/en/migration84.php)

### Update composer dependencies

You will need to update the following packages in your `composer.json` file:

- `rareloop/lumberjack-core` to `^8.0`

### Namespace changes

In order to support PHP 8.4 we had to upgrade a number of packages, and also bring some outdated packages into core. With this comes some namespace changes.

#### Laminas Zend Framework Bridge removed

:::warning
**Likelihood of impact: High**
:::

Any imports that **start with** `Zend\Diactoros` must be **re-written to** `Laminas\Diactoros` .

**For example:**

```diff
- use Zend\Diactoros\Response\JsonResponse;
+ use Laminas\Diactoros\Response\JsonResponse;
````

#### blast/facades package added to core

:::warning
**Likelihood of impact: High**
:::

All Blast namespaces will need to be modified as follows:

```diff
- use Blast\Facades\AbstractFacade;
+ use Rareloop\Lumberjack\Facades\AbstractFacade;
```

```diff
- use Blast\Facades\FacadeFactory;
+ use Rareloop\Lumberjack\FacadeFactory;
```

#### Encryption package added to core

:::warning
**Likelihood of impact: Low**
:::

The dcrypt package we were using has been brought into core. It's unlikely you are using this in your site, but if you are you will need to change `Dcrypt\` to `Rareloop\Lumberjack\Dcrypt\`.

**For example:**

```diff
- use Dcrypt\AesCbc
+ use Rareloop\Lumberjack\Dcrypt\AesCbc;
```

### Logging

:::warning
**Likelihood of impact: High**
:::

Lumberjack uses Monolog for its logging under the hood and as part of this release we upgraded the version of Monolog.

You will need to update any instances of `Monolog\Logger` in your application like so:

```diff
'logs' => [
    'enabled' => true,
    'path' => false,
-    'level' => Monolog\Logger::ERROR,
+    'level' => Monolog\Level::Error,
],
```

### Illuminate packages

:::warning
**Likelihood of impact: Medium**
:::

We've upgraded `illuminate/*` packages to `10.x` - if your site depends on any they will also need to be upgraded to version 10.

### Ignition

:::warning
**Likelihood of impact: Low**
:::

We've moved away from `symfony/debug` in favour of `spatie/ignition` to give you a much nicer error page. This should not impact anything in your website and you do not need to make any changes.

[Ignition - Laravel Error Page](https://flareapp.io/ignition)

## Upgrading from v6 to v7

Lumberjack v7 introduces Timber v2, which is likely to require broad changes. Generally speaking, we recommend following the [Timber v1 - v2 upgrade before](https://timber.github.io/docs/v2/upgrade-guides/2.0/) commencing this upgrade.

:::info
When upgrading to v7, you'll likely have lots of old, unused `use` statements that should be removed
:::

### Hatchet deprecated

:::warning
**Likelihood of impact: Low**
:::

If you're using Hatchet, our now-deprecated CLI tool, it should be removed

1. Remove `rareloop/hatchet`, `rareloop/hatchet-migrations` from `composer.json`
2. Remove `/site/web/app/themes/[theme]/hatchet`
3. Remove `/site/web/app/themes/[theme]/config/hatchet.php`
4. Remove `/site/web/app/themes/[theme]/app/Commands`

If any commands exist, they should be converted to use WP_CLI.

### Timber-related changes

#### Class maps

:::warning
**Likelihood of impact: High**
:::

In Timber v1, you had to tell it which post class you wanted back – for example:

```php
// Get instance of Lumberjack\Post
$post = new Post();

// Get Lumberjack\Post objects back
$query = new PostQuery(false, Post::class);
```

In Timber v2, this is deprecated and `Timber::get_post()` and `Timber::get_posts()` must be used. To determine the post type, [class maps](https://timber.github.io/docs/v2/guides/class-maps/) are used.

:::warning
Lumberjack will automatically register custom post types to the class map, but you will need to add `Post` and `Page` yourself.
:::

Add the following to your `app/AppServiceProvider.php` `boot` method:

```diff
class AppServiceProvider extends ServiceProvider {

  public function boot()
  {
+    add_filter('timber/post/classmap', fn($classmap) => [
+        ...$classmap,
+        Post::getPostType() => Post::class,
+        Page::getPostType() => Page::class,
+    ]);
  }
}
```

#### Images

:::warning
**Likelihood of impact: High**
:::

We found the Timber v2 upgrade documentation didn't make this clear, but instantiating a `new \Timber\Image()` is deprecated and you should use `Timber::get_image()` instead.

```diff
-$image = new Image($data);
+$image = Timber::get_image($data);
```

#### Update Menu.php

:::warning
**Likelihood of impact: High**
:::

Timber has removed the `MenuItemClass` and `PostClass` properties, so these can be removed from `app/Menu/Menu.php`

```diff
<?php

namespace App\Menu;

use Timber\Menu as TimberMenu;

class Menu extends TimberMenu
{
-    public $MenuItemClass = 'App\Menu\Item'; // remove
-    public $PostClass = 'Rareloop\Lumberjack\Post'; // remove
}
```

#### Update Item.php

:::warning
**Likelihood of impact: High**
:::

1. Timber has removed the `PostClass` property, so this can be removed from `app/Menu/Item.php`
2. The constructor for `Timber\MenuItem` has changed to accept a post and menu object

```diff
+use Timber\Menu as TimberMenu;
use Timber\MenuItem as TimberMenuItem;

class Item extends TimberMenuItem
{
-   public $PostClass = 'Rareloop\Lumberjack\Post';

-   public function __construct($data)
+   public function __construct(?WP_Post $data = null, ?TimberMenu $menu = null)
    {
        parent::__construct($data);

        ...
    }
}
```

:::warning
Timber has changed how it serialises menu items, meaning that any `title` keys may not be available in your template. We recommend renaming them to `label`.
:::

#### Register Menu and Item classes in AppServiceProvider

Similarly to the class map change, the Menu and Menu Item classes should be registered:

```diff
class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
+       add_filter('timber/menu/class', fn() => Menu::class);
+       add_filter('timber/menuitem/class', fn() => Item::class);
    }
}
```

#### empty() and ArrayObject

:::warning
**Likelihood of impact: Medium**
:::

When getting posts from Timber, you will now get an instance of `PostArrayObject` which can cause issues if your controller uses `empty` to check for results.

For example:

```diff
$children = $post->children();

- if (empty($children)) { // Always false
+ if (!$children->count()) { // OR count($children) === 0
  ...
}
```

## Upgrading to v6 from from v5

We aim to document all the changes that could impact your theme, and there may only be a portion that are applicable to your theme.

Lumberjack v6 **adds support for PHP 8.1**.

### Replacing "tightenco/collect"

[Illuminate's collection package](https://packagist.org/packages/illuminate/collections) "collect" has been separated from the core Laravel codebase and therefore the Tightenco package is no longer necessary.

Update namespaces for any support `Tightenco\Collect` classes you are using.

For example, change these:

```php
use Tightenco\Collect\Support\Collection;
use Tightenco\Collect\Support\Arr;
```

To these:

```php
use Illuminate\Support\Collection;
use Illuminate\Support\Arr;
```

### Upgrading "rareloop/lumberjack-primer"

If you are using [Primer](https://github.com/rareloop/primer) with Lumberjack, you will need to also upgrade the `rareloop/lumberjack-primer` package to v2.

From:

```json
"rareloop/lumberjack-primer": "^v1.0.0",
```

To:

```json
"rareloop/lumberjack-primer": "^v2.0.0",
```

## Upgrading from v4.3 to v5

There is nothing that requires upgrading between these versions.

## Upgrading to v4.3 from v4.2

There is nothing that requires upgrading between these versions.

## Upgrading to v4.2 from v4.1

We aim to document all the changes that could impact your theme, and there may only be a portion that are applicable to your theme.

### Extending controllers

Create `app/Http/Controllers/Controller.php` with the following contents:

```php
<?php

namespace App\Http\Controllers;

use Rareloop\Lumberjack\Http\Controller as BaseController;

class Controller extends BaseController
{

}
```

In all of your controllers, extend from this new base controller. For example:

```php
/**
 * The Template for displaying all single posts
 */

namespace App;

use App\Http\Controllers\Controller;
// ...

class SingleController extends Controller
{
```

Here are the list of controllers that come out of the box:

- `404.php`
- `archive.php`
- `author.php`
- `index.php`
- `page.php`
- `search.php`
- `single.php`

## Upgrading to v4.1 from v4.0

There is nothing that requires upgrading between these versions.

## Upgrading to v4 from v3

We aim to document all the changes that could impact your theme, and there may only be a portion that are applicable to your theme.

### Composer

Update `lumberjack-core` to version 4.

```javascript
"rareloop/lumberjack-core": "^4.0"
```

### PHP Version

:::warning
**Likelihood Of Impact: High**
:::

Support for **PHP 7.0 has been dropped**, ensure you're running at least **PHP 7.1**.

### Service Providers

:::warning
**Likelihood Of Impact: Critical**
:::

Add the following providers to `config/app.php`:

```php
'providers' => [
    ...
    Rareloop\Lumberjack\Providers\QueryBuilderServiceProvider::class,
    Rareloop\Lumberjack\Providers\SessionServiceProvider::class,
    Rareloop\Lumberjack\Providers\EncryptionServiceProvider::class,
],
```

The query builder is now part of the core, rather than an external package. If you were using the package, you will need to remove its service provider from your list of `providers` above.

### Exception Handler

:::warning
**Likelihood Of Impact: Critical**
:::

The type hint on the `render()` function has changed to the PSR interface from the concrete Zend implementation.

Make the following change in `app/Exceptions/Handler.php`:

From:

```php
use Zend\Diactoros\ServerRequest;

public function render(ServerRequest $request, Exception $e) : ResponseInterface
{

}
```

To:

```php
use Psr\Http\Message\ServerRequestInterface;

public function render(ServerRequestInterface $request, Exception $e) : ResponseInterface
{

}
```

No changes should be required to your application logic as Zend subclasses will already comply with the new interface.

### Container

:::warning
**Likelihood Of Impact: Medium**
:::

The `bind()` method on the `Application` container is no longer a singleton by default when the value (2nd param) is not a primitive or object instance.

When [binding a concrete implementation to an interface](./container/using-the-container.md#set-concrete-implementations-for-interfaces), using singletons by default can create unexpected side affects as state is maintained across instances.

A new `singleton()` method has been provided to enable the previous behaviour. This enables the app developer to be more intentional about the behaviour they desire.

For example:

```php
// Singleton
$app->singleton(App\AppInterface::class, App\AppImplementation::class);
$object1 = $app->get(App\AppInterface::class);
$object2 = $app->get(App\AppInterface::class);

// The same object is resolved from the container
$object1 === $object2; // true

// Bind
$app->bind(App\AppInterface::class, App\AppImplementation::class);
$object1 = $app->get(App\AppInterface::class);
$object2 = $app->get(App\AppInterface::class);

// The container resolves new instances, so the objects are not the same
$object1 === $object2; // false
```

[Using the Container](./container/using-the-container)

### `ServerRequest` class (optional)

:::warning
**Likelihood Of Impact: Optional, but recommended**
:::

If you're injecting an instance of the Diactoros `ServerRequest` class into a Controller, you can now switch this out for the following class if you want to benefit from some of the [new helper functions](./the-basics/http-requests.md#usage):

```php
use Rareloop\Lumberjack\Http\ServerRequest
```

For example:

```php
use Rareloop\Lumberjack\Http\ServerRequest;

class MyController
{
    public function show(ServerRequest $request)
    {
        $name = $request->input('name');
    }
}
```

:::info
If you have enabled [global helpers](./the-basics/helpers.md#request), you can use access the current `ServerRequest` instance using the `request()` helper instead of using dependency injection. For example:

```php
class MyController
{
    public function show()
    {
        $name = $request->input('name');
    }
}
```

:::

Here's a quick overview of what the new `ServerRequest` object can do. _If you are using_ [_global helpers_](./the-basics/helpers.md#request)_, you can replace_ `$request` _with_ `request()` _instead in the examples below:_

#### **Query Parameters**

```php
// Get all query parameters
$request->query();

// Get a specific query parameter
$request->query('name');

// Get a specific query parameter with a default
$request->query('name', 'Jane');
```

#### Input

```php
// Get all input params (from $_GET and $_POST)
$request->input();

// Get a specific input parameter
$request->input('name');

// Get a specific input parameter, with a default
$request->input('name', 'Jane');

// Check if the request has a key
$request->has('name');
```

[HTTP Requests](./the-basics/http-requests)

### View Models

:::warning
**Likelihood Of Impact: Medium**

This is a previously undocumented feature. If you are using ViewModels, this is a major change to how they work. However, if you are not using ViewModels you do not need to do anything.
:::warning

View Models are simple classes that allow you to transform data that would otherwise be defined in your controller. This allows for better encapsulation of code and allows your code to be re-used across your controllers (and even across themes).

#### Upgrading existing ViewModels

The `ViewModel` base class no longer extends from `stdClass` and so can no longer have arbitrary properties set on it.

We'd suggest upgrading your existing ViewModels to either use public methods or public properties. If your project has a large number of ViewModel's, the simplest change is to specifically name all properties in the class.

For example:

```php
// Lumberjack v3
use Rareloop\Lumberjack\ViewModel;

class MyViewModel extends ViewModel
{
    public function __construct($post)
    {
        $this->title = $post->title;
        $this->link = $post->link;
    }
}
```

To:

```php
// Lumberjack v4
use Rareloop\Lumberjack\ViewModel;

class MyViewModel extends ViewModel
{
    // Declare the class properties
    public $title;
    public $link;

    public function __construct($post)
    {
        $this->title = $post->title;
        $this->link = $post->link;
    }
}
```

### Binding of the Exception Handler

:::warning
**Likelihood Of Impact: Very low**
:::

In `bootstrap/app.php` you should change how the exception handler is bound to `Rareloop\Lumberjack\Exceptions\HandlerInterface`.

From:

```php
$app->bind(HandlerInterface::class, $app->make(Handler::class));
```

To:

```php
$app->singleton(HandlerInterface::class, Handler::class);
```

### `Helpers::app()` helper

:::warning
**Likelihood Of Impact: Very low**
:::

`Helpers::app()` (and the `app()` global counterpart) no longer use the `make()` method of the Application instance and now rely on `get()`. This provides much more consistent behaviour with other uses of the Container. If you still want to use the helpers to get `make()` behaviour you can change your code.

From:

```php
Helpers::app(MyClassName::class);
```

To:

```php
Helpers::app()->make(MyClassName::class);
```

### `Router` class namespace

:::warning
**Likelihood Of Impact: Very low**
:::

If you resolve an instance of the `Router` class from the container, you'll need to change the class reference.

**If you're just using the Router Facade, you do not need to change anything.**

From:

```php
use Rareloop\Router\Router
```

To:

```php
use Rareloop\Lumberjack\Http\Router
```

### PSR-15 Middleware

:::warning
**Likelihood Of Impact: Very low**

The `http-interop/http-server-middleware` package has been deprecated in favour of the now official PSR-15 interfaces found in `psr/http-server-middleware`.

Make sure any middleware used now complies with the `Psr\Http\Server\MiddlewareInterface` interface.
:::
