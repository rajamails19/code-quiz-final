export const javaQuestionsData = [
    {
      id: 1,
      title: "Java Class Definition",
      description: "Fill in the missing keyword to define a public class named Person.",
      code: `/* Missing keyword */ class Person {
    private String name;
  
    public Person(String name) {
      this.name = name;
    }
  
    public String getName() {
      return name;
    }
  }`,
      solution: "public",
      explanation: "The 'public' access modifier makes the class accessible from anywhere in the application."
    },
    {
      id: 2,
      title: "Java Interface Implementation",
      description: "Fill in the missing implementation keyword to implement an interface in Java.",
      code: `interface Animal {
    void makeSound();
  }
  
  class Dog /* Missing keyword */ Animal {
    public void makeSound() {
      System.out.println("Bark");
    }
  }`,
      solution: "implements",
      explanation: "The 'implements' keyword is used to define a class that implements an interface and provides implementations for its methods."
    },
    {
      id: 3,
      title: "Java Abstract Class",
      description: "Fill in the missing keyword to define an abstract class.",
      code: `/* Missing keyword */ class Vehicle {
    abstract void start();
  }`,
      solution: "abstract",
      explanation: "An abstract class in Java cannot be instantiated and may contain abstract methods that must be implemented by subclasses."
    },
    {
      id: 4,
      title: "Spring Boot Main Application",
      description: "Fill in the missing annotation to define a Spring Boot application.",
      code: `/* Missing annotation */
  public class MyApp {
    public static void main(String[] args) {
      SpringApplication.run(MyApp.class, args);
    }
  }`,
      solution: "@SpringBootApplication",
      explanation: "The @SpringBootApplication annotation is used to mark the main class of a Spring Boot application, enabling auto-configuration and component scanning."
    },
    {
      id: 5,
      title: "Spring Boot REST Controller",
      description: "Fill in the missing annotation to define a REST controller in Spring Boot.",
      code: `/* Missing annotation */
  public class HelloController {
    @GetMapping("/hello")
    public String sayHello() {
      return "Hello, World!";
    }
  }`,
      solution: "@RestController",
      explanation: "The @RestController annotation marks this class as a REST API controller, allowing it to handle HTTP requests."
    },
    {
      id: 6,
      title: "Spring Boot Dependency Injection",
      description: "Fill in the missing annotation to inject a service into a Spring Boot controller.",
      code: `@RestController
  public class UserController {
    
    /* Missing annotation */ 
    private UserService userService;
    
    public UserController(UserService userService) {
      this.userService = userService;
    }
  }`,
      solution: "@Autowired",
      explanation: "The @Autowired annotation tells Spring to inject the required bean automatically, reducing the need for explicit object creation."
    },
    {
      id: 7,
      title: "JPA Entity Definition",
      description: "Fill in the missing annotation to mark a class as a JPA entity.",
      code: `/* Missing annotation */
  public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
  
    private String name;
  }`,
      solution: "@Entity",
      explanation: "The @Entity annotation marks this class as a JPA entity, making it eligible for ORM (Object-Relational Mapping) with a database."
    },
    {
      id: 8,
      title: "Spring Boot API Endpoint",
      description: "Fill in the missing HTTP method annotation for a POST request.",
      code: `@RestController
  public class UserController {
    
    /* Missing annotation */
    public ResponseEntity<User> createUser(@RequestBody User user) {
      return ResponseEntity.ok(user);
    }
  }`,
      solution: "@PostMapping(\"/users\")",
      explanation: "The @PostMapping annotation maps HTTP POST requests to the specified handler method, which is used for creating resources."
    },
    {
      id: 9,
      title: "Spring Boot Application Properties",
      description: "Fill in the missing property key to set the default server port to 8081.",
      code: `# Missing property
  server.port=8081`,
      solution: "server.port",
      explanation: "The 'server.port' property in application.properties or application.yml specifies the port on which the Spring Boot application runs."
    },
    {
      id: 10,
      title: "Spring Boot Configuration",
      description: "Fill in the missing annotation to define a configuration class.",
      code: `/* Missing annotation */
  public class AppConfig {
    @Bean
    public RestTemplate restTemplate() {
      return new RestTemplate();
    }
  }`,
      solution: "@Configuration",
      explanation: "The @Configuration annotation marks a class as a Spring configuration class, allowing it to define beans using @Bean methods."
    },
    {
      id: 11,
      title: "Spring Boot Exception Handling",
      description: "Fill in the missing annotation to define a global exception handler.",
      code: `/* Missing annotation */
  public class GlobalExceptionHandler {
    
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleException(Exception e) {
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred: " + e.getMessage());
    }
  }`,
      solution: "@ControllerAdvice",
      explanation: "The @ControllerAdvice annotation is used to define global exception handling for controllers in a Spring Boot application."
    },
    {
      id: 12,
      title: "Microservices Communication",
      description: "Fill in the missing method to call another microservice using RestTemplate.",
      code: `@Service
  public class OrderService {
    
    private final RestTemplate restTemplate;
  
    @Autowired
    public OrderService(RestTemplate restTemplate) {
      this.restTemplate = restTemplate;
    }
  
    public Product getProductById(Long id) {
      return /* Missing method */;
    }
  }`,
      solution: "restTemplate.getForObject(\"http://product-service/products/\" + id, Product.class)",
      explanation: "The getForObject method of RestTemplate allows calling other microservices via HTTP GET requests."
    },
    {
      id: 13,
      title: "Spring Cloud Load Balancer",
      description: "Fill in the missing annotation to enable client-side load balancing.",
      code: `/* Missing annotation */
  public class OrderService {
    
    private final RestTemplate restTemplate;
  
    @Autowired
    public OrderService(RestTemplate restTemplate) {
      this.restTemplate = restTemplate;
    }
  }`,
      solution: "@LoadBalanced",
      explanation: "The @LoadBalanced annotation enables client-side load balancing when calling other microservices using RestTemplate."
    },
    {
      id: 14,
      title: "Spring Boot Actuator",
      description: "Fill in the missing dependency to enable Spring Boot Actuator endpoints.",
      code: `<!-- Missing dependency -->
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
  </dependency>`,
      solution: "spring-boot-starter-actuator",
      explanation: "Spring Boot Actuator provides production-ready features like health checks, metrics, and monitoring endpoints."
    },
    {
      id: 15,
      title: "Spring Security Authentication",
      description: "Fill in the missing security configuration to enable basic authentication.",
      code: `@Configuration
  @EnableWebSecurity
  public class SecurityConfig extends WebSecurityConfigurerAdapter {
    
    @Override
    protected void configure(HttpSecurity http) throws Exception {
      http
        .authorizeRequests()
        .antMatchers("/admin").authenticated()
        /* Missing security method */;
    }
  }`,
      solution: ".httpBasic()",
      explanation: "The .httpBasic() method enables basic authentication, requiring users to provide a username and password for secured endpoints."
    }
  ];
  