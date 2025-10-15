import {
    provideKeycloak,
    createInterceptorCondition,
    IncludeBearerTokenCondition,
    INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
    withAutoRefreshToken,
    AutoRefreshTokenService,
    UserActivityService
} from 'keycloak-angular';
const localhostCondition =
    createInterceptorCondition<IncludeBearerTokenCondition>({
        urlPattern: /^(http:\/\/localhost:8081)(\/.*)?$/i
    });
export const provideKeycloakAngular = () =>
    provideKeycloak({
        config: {
            url: 'http://localhost:8090',
            realm: 'yosr-realm',
            clientId: 'vet-app'
        },
        initOptions: {
            //onLoad: 'login-required',
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
            redirectUri: window.location.origin + '/'
            
        },
        features: [
            withAutoRefreshToken({
                onInactivityTimeout: 'logout',
                sessionTimeout: 60000
            })
        ],
        providers: [AutoRefreshTokenService,
            UserActivityService,
            {
                provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
                useValue: [localhostCondition]
            }
        ]
    });