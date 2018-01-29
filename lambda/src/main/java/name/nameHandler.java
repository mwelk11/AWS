package name;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

public class nameHandler implements RequestHandler<Object, Name> {

    @Override
    public Name handleRequest(Object input, Context context) {
        context.getLogger().log("Inside AWS Lambda function!");
        Name name = new Name("Carson", "Wentz");
        return name;
    }

}
