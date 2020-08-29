<?php


class Router
{
    private $controllerPath = "Controllers/";
    private $modelPath = "Models/";
    private $viewPath = "Views/";

    private $controller;
    private $model;
    private $view;
    private $url = "dashboard";

    public function __construct()
    {
    }

    public function init()
    {
        if (!empty($_GET["url"])) {
            $this->url = $_GET["url"];
        }
        $controller = ucfirst($this->url) . "Controller";
        $model = ucfirst($this->url) . "Model";
        $view = ($this->url);

        $this->loadModel($model);
        $this->loadController($controller);
        $this->loadView($view);
    }

    public function loadController($controller){
        require_once $this->controllerPath . "$controller.php";
        $this->controller = new $controller();
    }

    public function loadModel($model)
    {
        require_once $this->modelPath . "$model.php";
        $this->model = new $model();
    }

    public function loadView($view)
    {
        require_once $this->viewPath . "header.php";
        require_once $this->viewPath . "$view.php";
        require_once $this->viewPath . "footer.php";
        $this->view = new $view;
    }
}