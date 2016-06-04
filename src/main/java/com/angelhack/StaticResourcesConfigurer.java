package com.angelhack;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
public class StaticResourcesConfigurer extends WebMvcConfigurerAdapter {

	private static int HOUR = 3600;

	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
		super.addResourceHandlers(registry);

		registry.addResourceHandler("/css/**").addResourceLocations("classpath:/static/css/").setCachePeriod(4 * HOUR);
		registry.addResourceHandler("/js/**").addResourceLocations("classpath:/static/js/").setCachePeriod(4 * HOUR);
		registry.addResourceHandler("/images/**").addResourceLocations("classpath:/static/images/")
				.setCachePeriod(24 * HOUR);
		registry.addResourceHandler("/fonts/**").addResourceLocations("classpath:/static/fonts/")
				.setCachePeriod(24 * HOUR);
	}

}