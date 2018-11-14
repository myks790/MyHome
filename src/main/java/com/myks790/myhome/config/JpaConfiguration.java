package com.myks790.myhome.config;

import com.myks790.myhome.auditing.AuditingDateTimeProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.auditing.DateTimeProvider;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@Configuration
@EnableJpaAuditing(dateTimeProviderRef = "dateTimeProvider")
public class JpaConfiguration {
    @Bean
    DateTimeProvider dateTimeProvider(){
        return new AuditingDateTimeProvider();
    }
}
