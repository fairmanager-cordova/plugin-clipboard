#import <Foundation/Foundation.h>
#import <Cordova/CDVPlugin.h>

@interface FMClipboard : CDVPlugin {}

- (void)copy:(CDVInvokedUrlCommand*)command;
- (void)paste:(CDVInvokedUrlCommand*)command;

@end
