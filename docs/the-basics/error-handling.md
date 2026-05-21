---
title: Error Handling
description: Lumberjack provides a robust error handling system that displays detailed error pages in development and a generic error page in production.
sidebar_position: 13
---

# Error Handling

Lumberjack comes with a powerful error handling system powered by [Ignition](https://spatie.be/docs/ignition/v1/introduction), which provides beautiful, detailed error pages when you're in development. When in production, Lumberjack will display a simple, styled error page to avoid exposing sensitive information.

## The Default Error Page

When `APP_DEBUG` is set to `false` in your `.env` file, Lumberjack will catch any exceptions and display a generic error page. This prevents your site from showing a blank white page or a detailed error stack trace that could be a security risk.

![Default Error Page](/img/error-page-screenshot.png)

As you can see, it's a simple, clean error page that informs the user that something has gone wrong.

## Customizing the Error Page

While the default error page is a great starting point, you may want to create a custom error page that matches your site's branding. You can do this by extending the `Rareloop\Lumberjack\Exceptions\Handler` class and overriding the `renderDefaultErrorView` method.

It's important to note that the expectation is that you will extend the exception handler to create your own custom error pages.

Here's an example of how you might create a custom error handler:

```php
// app/Exceptions/Handler.php
namespace App\Exceptions;

use Exception;
use Psr\Http\Message\ResponseInterface;
use Rareloop\Lumberjack\Http\Responses\TimberResponse;
use Rareloop\Lumberjack\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    protected function renderDefaultErrorView(Exception $e): ResponseInterface
    {
        $status = method_exists($e, 'getStatusCode') ? $e->getStatusCode() : 500;

        return new TimberResponse('views/errors/error.twig', [
            'statusCode' => $status,
        ], $status);
    }
}
```

In this example, we're telling Lumberjack to render the `views/errors/error.twig` template instead of the default one. You can now create a custom Twig file with your own branding.

Once you have created your custom `Handler` class, you will need to update your `bootstrap/app.php` file to tell Lumberjack to use your custom handler instead of the default one.

```php
// bootstrap/app.php
...
$app->singleton(
    Rareloop\Lumberjack\Contracts\ExceptionHanlder::class,
    App\Exceptions\Handler::class
);
...
```

## Configuring Ignition

Lumberjack v8.3 introduces a new `Ignition` facade and `IgnitionServiceProvider` to make it easier to configure Ignition. You can now add solution providers, set themes, and more from any service provider.

Here's an example of how you might add a custom solution provider to Ignition in your `AppServiceProvider`:

```php
// app/Providers/AppServiceProvider.php
namespace App\Providers;

use App\Solutions\MyCustomSolutionProvider;
use Rareloop\Lumberjack\Facades\Ignition;
use Rareloop\Lumberjack\Providers\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Ignition::addSolutionProviders([
            MyCustomSolutionProvider::class,
        ]);
    }
}
```
