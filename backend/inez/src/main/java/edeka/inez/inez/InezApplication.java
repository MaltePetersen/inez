package edeka.inez.inez;

import edeka.inez.inez.repository.ProduktRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class InezApplication {


    public static void main(String[] args) {
        SpringApplication.run(InezApplication.class, args);
    }

}
